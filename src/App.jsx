import React, { useState, useEffect, useCallback } from 'react'
import { COURSES, ALL_EXERCISES } from './data/lessons'
import {
  generateSmartQueue,
  markExerciseCompleted,
  getCompletedCount,
} from './utils/queueManager'
import {
  playSentenceVoice,
  stopSentenceVoice,
  unlockAudio,
  playKeySound,
  playErrorSound,
  playWordSuccess,
  playExerciseSuccess,
  playCelebrationSound,
} from './utils/sound'
import { Header } from './components/Header'
import { WordChips } from './components/WordChips'
import { PromptAudio } from './components/PromptAudio'
import { TypingInput } from './components/TypingInput'
import { ShortcutBar } from './components/ShortcutBar'
import { LessonCompleteModal } from './components/LessonCompleteModal'
import { LessonSelectorModal } from './components/LessonSelectorModal'
import { CustomTextModal } from './components/CustomTextModal'

export function App() {
  // Practice Mode: 'auto' (smart randomized non-stop flow across all 49+ sentences) | 'lesson'
  const [practiceMode, setPracticeMode] = useState('auto')

  // Smart Random Queue with persistence memory (never repeats recent exercises)
  const [queue, setQueue] = useState(() => generateSmartQueue(ALL_EXERCISES))
  const [queueIndex, setQueueIndex] = useState(0)

  // Specific course/lesson state (if user explicitly chooses from menu)
  const [currentCourse, setCurrentCourse] = useState(COURSES[0])
  const [currentLesson, setCurrentLesson] = useState(COURSES[0].lessons[0])
  const [lessonExerciseIndex, setLessonExerciseIndex] = useState(0)

  // Typing state
  const [typed, setTyped] = useState('')
  const [hasError, setHasError] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  // Metrics
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [score, setScore] = useState(100)
  const [combo, setCombo] = useState(0)
  const [totalKeypresses, setTotalKeypresses] = useState(0)
  const [correctKeypresses, setCorrectKeypresses] = useState(0)
  const [completedTotal, setCompletedTotal] = useState(() => getCompletedCount())

  // Audio settings
  const [isMuted, setIsMuted] = useState(false)
  const [isSlow, setIsSlow] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  // Visual toggles
  const [isPreviewHidden, setIsPreviewHidden] = useState(false)

  // Modals
  const [isLessonFinished, setIsLessonFinished] = useState(false)
  const [isLessonMenuOpen, setIsLessonMenuOpen] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)

  // Active exercise depending on mode
  const currentExercise =
    practiceMode === 'auto'
      ? queue[queueIndex] || ALL_EXERCISES[0]
      : currentLesson.exercises[lessonExerciseIndex] || currentLesson.exercises[0]

  const targetSentence = currentExercise ? currentExercise.sentence : ''
  const targetWords = currentExercise ? currentExercise.words : []

  // Timer
  useEffect(() => {
    let timer = null
    if (isTimerRunning && !isLessonFinished) {
      timer = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isTimerRunning, isLessonFinished])

  // Play Natural Voice
  const handlePlayVoice = useCallback(() => {
    if (!targetSentence || isMuted) return
    setIsSpeaking(true)
    playSentenceVoice(
      currentExercise.audioUrl,
      targetSentence,
      isSlow,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    )
  }, [currentExercise, targetSentence, isMuted, isSlow])

  // Auto-speak on exercise load (guarantees crystal-clear voice on every transition)
  useEffect(() => {
    setTyped('')
    setIsCompleted(false)
    setFeedbackMessage('')

    const timeout = setTimeout(() => {
      handlePlayVoice()
    }, 250)

    return () => {
      clearTimeout(timeout)
      stopSentenceVoice()
    }
  }, [currentExercise?.id, handlePlayVoice])

  // Calculate current active word index
  const getCurrentWordIndex = () => {
    if (!targetSentence) return 0
    const rawWords = targetSentence.trim().replace(/[.,?!]/g, '').split(/\s+/)
    let charCount = 0
    for (let i = 0; i < rawWords.length; i++) {
      const wordLen = rawWords[i].length
      if (typed.length <= charCount + wordLen) {
        return i
      }
      charCount += wordLen + 1
    }
    return rawWords.length - 1
  }

  // Calculate completed word indices
  const getCompletedWordIndices = () => {
    if (!targetSentence) return []
    const rawWords = targetSentence.trim().replace(/[.,?!]/g, '').split(/\s+/)
    const completed = []
    let charCount = 0
    for (let i = 0; i < rawWords.length; i++) {
      const wordLen = rawWords[i].length
      if (typed.length >= charCount + wordLen) {
        completed.push(i)
      }
      charCount += wordLen + 1
    }
    return completed
  }

  // Next exercise handler (automatic or manual skip)
  const handleNextExercise = useCallback(() => {
    unlockAudio()
    if (practiceMode === 'auto') {
      if (queueIndex + 1 < queue.length) {
        setQueueIndex((prev) => prev + 1)
      } else {
        const freshQueue = generateSmartQueue(ALL_EXERCISES)
        setQueue(freshQueue)
        setQueueIndex(0)
      }
    } else {
      if (lessonExerciseIndex + 1 < currentLesson.exercises.length) {
        setLessonExerciseIndex((prev) => prev + 1)
      }
    }
  }, [practiceMode, queueIndex, queue.length, lessonExerciseIndex, currentLesson.exercises.length])

  // Previous exercise handler
  const handlePreviousExercise = useCallback(() => {
    unlockAudio()
    if (practiceMode === 'auto') {
      if (queueIndex > 0) {
        setQueueIndex((prev) => prev - 1)
      }
    } else {
      if (lessonExerciseIndex > 0) {
        setLessonExerciseIndex((prev) => prev - 1)
      }
    }
  }, [practiceMode, queueIndex, lessonExerciseIndex])

  // Complete Sentence logic
  const handleCompleteSentence = () => {
    setIsCompleted(true)
    playExerciseSuccess(isMuted)
    setScore((prev) => prev + 100)
    setCombo((prev) => prev + 1)
    setFeedbackMessage('Correct! +100 XP')

    // Persist completed status in local storage
    if (currentExercise?.id) {
      markExerciseCompleted(currentExercise.id)
      setCompletedTotal((prev) => prev + 1)
    }

    // Auto-advance after 750ms so chime sound finishes smoothly
    setTimeout(() => {
      if (practiceMode === 'auto') {
        if (queueIndex + 1 < queue.length) {
          setQueueIndex((prev) => prev + 1)
        } else {
          // Finished entire cycle of 49 sentences! Generate fresh random round without stopping!
          const freshQueue = generateSmartQueue(ALL_EXERCISES)
          setQueue(freshQueue)
          setQueueIndex(0)
          playCelebrationSound(isMuted)
          setFeedbackMessage('🎉 Awesome! All sentences completed! Starting next round!')
        }
      } else {
        if (lessonExerciseIndex + 1 < currentLesson.exercises.length) {
          setLessonExerciseIndex((prev) => prev + 1)
        } else {
          setIsTimerRunning(false)
          setIsLessonFinished(true)
          playCelebrationSound(isMuted)
        }
      }
    }, 750)
  }

  // Super fluid character input
  const handleCharacterInput = (char) => {
    if (isCompleted || !targetSentence) return

    unlockAudio()
    if (!isTimerRunning) {
      setIsTimerRunning(true)
    }

    const cleanTarget = targetSentence.trim().replace(/[.,?!]/g, '')
    let currentIdx = typed.length
    let nextExpected = cleanTarget[currentIdx]
    if (!nextExpected) return

    setTotalKeypresses((prev) => prev + 1)

    // Case 1: Next character is a space between words
    if (nextExpected === ' ') {
      if (char === ' ') {
        const newTyped = typed + ' '
        setTyped(newTyped)
        setCorrectKeypresses((prev) => prev + 1)
        playKeySound(isMuted)
        playWordSuccess(isMuted)
        return
      } else {
        const nextCharAfterSpace = cleanTarget[currentIdx + 1]
        if (nextCharAfterSpace && char.toLowerCase() === nextCharAfterSpace.toLowerCase()) {
          const newTyped = typed + ' ' + nextCharAfterSpace
          setTyped(newTyped)
          setCorrectKeypresses((prev) => prev + 2)
          playKeySound(isMuted)
          playWordSuccess(isMuted)

          if (newTyped.length >= cleanTarget.length) {
            handleCompleteSentence()
          }
          return
        }
      }
    }

    // Case 2: Matching current letter
    if (char.toLowerCase() === nextExpected.toLowerCase()) {
      const newTyped = typed + nextExpected
      setTyped(newTyped)
      setCorrectKeypresses((prev) => prev + 1)
      playKeySound(isMuted)

      if (newTyped.length >= cleanTarget.length) {
        handleCompleteSentence()
      } else {
        if (cleanTarget[newTyped.length] === ' ') {
          playWordSuccess(isMuted)
        }
      }
    } else {
      playErrorSound(isMuted)
      setHasError(true)
      setCombo(0)
      setTimeout(() => setHasError(false), 250)
    }
  }

  // Backspace
  const handleBackspace = () => {
    if (typed.length > 0 && !isCompleted) {
      playKeySound(isMuted)
      if (typed.endsWith(' ')) {
        setTyped((prev) => prev.slice(0, -2))
      } else {
        setTyped((prev) => prev.slice(0, -1))
      }
    }
  }

  // Hint for current word
  const handleHintWord = () => {
    unlockAudio()
    const cleanTarget = targetSentence.trim().replace(/[.,?!]/g, '')
    const targetWordsList = cleanTarget.split(/\s+/)
    const currentWordIdx = getCurrentWordIndex()
    const currentWord = targetWordsList[currentWordIdx]

    if (currentWord) {
      const prevWords = targetWordsList.slice(0, currentWordIdx)
      const prefix = prevWords.length > 0 ? prevWords.join(' ') + ' ' : ''
      const newTyped = prefix + currentWord + (currentWordIdx < targetWordsList.length - 1 ? ' ' : '')
      setTyped(newTyped)
      playWordSuccess(isMuted)

      if (newTyped.length >= cleanTarget.length) {
        handleCompleteSentence()
      }
    }
  }

  // Keyboard shortcut listener
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault()
        handlePlayVoice()
      }
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault()
        handleHintWord()
      }
      if (e.ctrlKey && (e.key === 'h' || e.key === 'H')) {
        e.preventDefault()
        setIsPreviewHidden((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [handlePlayVoice])

  // Re-shuffle random sentences
  const handleShuffleAgain = () => {
    unlockAudio()
    const freshQueue = generateSmartQueue(ALL_EXERCISES)
    setQueue(freshQueue)
    setQueueIndex(0)
    setPracticeMode('auto')
    setTyped('')
    setIsCompleted(false)
    setFeedbackMessage('🔀 New random sentences loaded!')
  }

  // Switch back to auto mode
  const handleSwitchToAutoMode = () => {
    unlockAudio()
    setPracticeMode('auto')
    setTyped('')
    setIsCompleted(false)
    setIsLessonFinished(false)
  }

  // Restart current exercise
  const handleRestartCurrent = () => {
    unlockAudio()
    setTyped('')
    setIsCompleted(false)
    setFeedbackMessage('')
    setTimeout(() => handlePlayVoice(), 200)
  }

  // Select specific lesson from modal
  const handleSelectLesson = (course, lesson) => {
    unlockAudio()
    setCurrentCourse(course)
    setCurrentLesson(lesson)
    setLessonExerciseIndex(0)
    setPracticeMode('lesson')
    setTyped('')
    setIsCompleted(false)
    setIsLessonFinished(false)
  }

  // Custom text lesson
  const handleStartCustomLesson = (customLesson) => {
    unlockAudio()
    setCurrentCourse({
      id: 'custom-course',
      title: 'Custom Practice',
      subtitle: 'Personalized listening & typing',
      level: 'All Levels',
    })
    setCurrentLesson(customLesson)
    setLessonExerciseIndex(0)
    setPracticeMode('lesson')
    setTyped('')
    setIsCompleted(false)
    setIsLessonFinished(false)
  }

  const currentLessonIndex = currentCourse.lessons.findIndex((l) => l.id === currentLesson.id)
  const nextLesson = currentCourse.lessons[currentLessonIndex + 1]

  const handleContinueNextLesson = () => {
    if (nextLesson) {
      handleSelectLesson(currentCourse, nextLesson)
    } else {
      handleSwitchToAutoMode()
    }
  }

  const accuracy =
    totalKeypresses > 0
      ? Math.max(10, Math.round((correctKeypresses / totalKeypresses) * 100))
      : 100

  return (
    <div
      onClick={unlockAudio}
      className="min-h-screen flex flex-col justify-between bg-[#F3F4F8] text-slate-800 antialiased font-sans select-none overflow-x-hidden"
    >
      {/* Top Header */}
      <Header
        courseTitle={
          practiceMode === 'auto'
            ? currentExercise.courseTitle || 'All-in-One English'
            : currentCourse.title
        }
        lessonTitle={
          practiceMode === 'auto'
            ? currentExercise.lessonTitle || 'Daily Sentences'
            : currentLesson.title
        }
        category={currentExercise.category || 'Practice'}
        currentIndex={practiceMode === 'auto' ? queueIndex : lessonExerciseIndex}
        totalExercises={
          practiceMode === 'auto' ? queue.length : currentLesson.exercises.length
        }
        completedTotal={completedTotal}
        elapsedSeconds={elapsedSeconds}
        score={score}
        combo={combo}
        isMuted={isMuted}
        practiceMode={practiceMode}
        onToggleMute={() => setIsMuted(!isMuted)}
        onOpenLessonMenu={() => setIsLessonMenuOpen(true)}
        onRestartCurrentLesson={handleRestartCurrent}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onShuffleAgain={handleShuffleAgain}
        onSwitchToAutoMode={handleSwitchToAutoMode}
      />

      {/* 
        Main Practice Container - Auto-Centered with zero scrollbars:
      */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-3 sm:py-6 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 border border-slate-200/90 shadow-md flex flex-col items-center justify-between min-h-[580px] sm:min-h-[640px]">
          {/* Word Cards Box with Dynamic Responsive Layout and Large Bengali Translation */}
          <WordChips
            words={targetWords}
            bengaliMeaning={currentExercise ? currentExercise.bengaliMeaning : ''}
            currentWordIndex={getCurrentWordIndex()}
            completedWordIndices={getCompletedWordIndices()}
            showWords={!isPreviewHidden}
          />

          {/* Audio Equalizer Waveform & Prompt */}
          <PromptAudio
            isSpeaking={isSpeaking}
            onReplay={handlePlayVoice}
            feedbackMessage={feedbackMessage}
          />

          {/* Typing Area with Big Letters & Clearly Separated Word Slots */}
          <TypingInput
            targetSentence={targetSentence}
            currentTyped={typed}
            onCharacterInput={handleCharacterInput}
            onBackspace={handleBackspace}
            hasError={hasError}
            isCompleted={isCompleted}
          />

          {/* Bottom Shortcut Toolbar with Mascot and Next/Prev buttons */}
          <ShortcutBar
            onReplay={handlePlayVoice}
            onHint={handleHintWord}
            onToggleHidePreview={() => setIsPreviewHidden(!isPreviewHidden)}
            isPreviewHidden={isPreviewHidden}
            onPrevious={handlePreviousExercise}
            onNext={handleNextExercise}
          />
        </div>
      </main>

      {/* Lesson Complete Modal (only shown when a specific lesson ends) */}
      {isLessonFinished && (
        <LessonCompleteModal
          courseTitle={currentCourse.title}
          lessonTitle={currentLesson.title}
          lessonNumber={currentLesson.lessonNumber || currentLessonIndex + 1}
          completedCount={currentLesson.exercises.length}
          accuracy={accuracy}
          elapsedSeconds={elapsedSeconds}
          nextLessonTitle={nextLesson ? nextLesson.title : null}
          onContinueNext={handleContinueNextLesson}
          onRestartLesson={handleRestartCurrent}
          onOpenLessonMenu={() => {
            setIsLessonFinished(false)
            setIsLessonMenuOpen(true)
          }}
        />
      )}

      {/* Lesson Selector Modal */}
      <LessonSelectorModal
        isOpen={isLessonMenuOpen}
        onClose={() => setIsLessonMenuOpen(false)}
        currentLessonId={currentLesson.id}
        onSelectLesson={handleSelectLesson}
      />

      {/* Custom Text Modal */}
      <CustomTextModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onStartCustomLesson={handleStartCustomLesson}
      />
    </div>
  )
}
