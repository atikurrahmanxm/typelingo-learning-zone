import React, { useState, useEffect, useCallback } from 'react'
import { COURSES, ALL_EXERCISES } from './data/lessons'
import {
  generateSmartQueue,
  markExerciseCompleted,
  getCompletedCount,
  getStreakData,
  resetExerciseHistory,
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
import { CategoryBar } from './components/CategoryBar'
import { WordChips } from './components/WordChips'
import { PromptAudio } from './components/PromptAudio'
import { TypingInput } from './components/TypingInput'
import { ShortcutBar } from './components/ShortcutBar'
import { Footer } from './components/Footer'
import { LessonCompleteModal } from './components/LessonCompleteModal'
import { LessonSelectorModal } from './components/LessonSelectorModal'
import { CustomTextModal } from './components/CustomTextModal'
import { AboutCreatorModal } from './components/AboutCreatorModal'
import { SpeedTestView } from './components/SpeedTestView'
import { PracticeMilestoneModal } from './components/PracticeMilestoneModal'

export function App() {
  // Practice Mode: 'auto' (smart randomized non-stop flow across all 3,000+ sentences) | 'lesson'
  const [practiceMode, setPracticeMode] = useState('auto')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Smart Random Queue with persistence memory (never repeats recent exercises across sessions)
  const [queue, setQueue] = useState(() => generateSmartQueue(ALL_EXERCISES, 'all'))
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

  // Metrics & Stats
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [score, setScore] = useState(100)
  const [combo, setCombo] = useState(0)
  const [totalKeypresses, setTotalKeypresses] = useState(0)
  const [correctKeypresses, setCorrectKeypresses] = useState(0)
  const [completedTotal, setCompletedTotal] = useState(() => getCompletedCount())
  const [streakData, setStreakData] = useState(() => getStreakData())

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
  const [isAboutCreatorOpen, setIsAboutCreatorOpen] = useState(false)
  const [isMilestoneOpen, setIsMilestoneOpen] = useState(false)
  const [sessionCompletedCount, setSessionCompletedCount] = useState(0)

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
    if (practiceMode === 'speedtest') return

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
  }, [currentExercise?.id, handlePlayVoice, practiceMode])

  // Calculate current active word index
  const getCurrentWordIndex = () => {
    if (!targetSentence) return 0
    const rawWords = targetSentence.trim().split(/\s+/)
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
    const rawWords = targetSentence.trim().split(/\s+/)
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
        const freshQueue = generateSmartQueue(ALL_EXERCISES, selectedCategory)
        setQueue(freshQueue)
        setQueueIndex(0)
      }
    } else {
      if (lessonExerciseIndex + 1 < currentLesson.exercises.length) {
        setLessonExerciseIndex((prev) => prev + 1)
      }
    }
  }, [practiceMode, queueIndex, queue.length, selectedCategory, lessonExerciseIndex, currentLesson.exercises.length])

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

    // Persist completed status in local storage & update streaks
    if (currentExercise?.id) {
      markExerciseCompleted(currentExercise.id)
      setCompletedTotal((prev) => prev + 1)
      setStreakData(getStreakData())
    }

    const nextSessionCount = sessionCompletedCount + 1
    setSessionCompletedCount(nextSessionCount)

    // Check if 5-sentence milestone reached!
    const isLastLessonExercise =
      practiceMode !== 'auto' &&
      lessonExerciseIndex + 1 >= currentLesson.exercises.length
    const isMilestoneHit =
      !isLastLessonExercise && nextSessionCount > 0 && nextSessionCount % 5 === 0

    // Auto-advance after 750ms so chime sound finishes smoothly
    setTimeout(() => {
      if (isMilestoneHit) {
        setIsMilestoneOpen(true)
        playCelebrationSound(isMuted)
        return
      }

      if (practiceMode === 'auto') {
        if (queueIndex + 1 < queue.length) {
          setQueueIndex((prev) => prev + 1)
        } else {
          // Finished entire cycle! Generate fresh random round without stopping!
          const freshQueue = generateSmartQueue(ALL_EXERCISES, selectedCategory)
          setQueue(freshQueue)
          setQueueIndex(0)
          playCelebrationSound(isMuted)
          setFeedbackMessage('🎉 দারুণ! এই রাউন্ডের বাক্যগুলো শেষ হয়েছে!')
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

  // Milestone continue handler (advances to the next exercise)
  const handleContinueFromMilestone = () => {
    setIsMilestoneOpen(false)
    if (practiceMode === 'auto') {
      if (queueIndex + 1 < queue.length) {
        setQueueIndex((prev) => prev + 1)
      } else {
        const freshQueue = generateSmartQueue(ALL_EXERCISES, selectedCategory)
        setQueue(freshQueue)
        setQueueIndex(0)
      }
    } else {
      if (lessonExerciseIndex + 1 < currentLesson.exercises.length) {
        setLessonExerciseIndex((prev) => prev + 1)
      } else {
        setIsTimerRunning(false)
        setIsLessonFinished(true)
      }
    }
  }

  // Super fluid character input
  const handleCharacterInput = (char) => {
    if (isCompleted || isMilestoneOpen || !targetSentence) return
    unlockAudio()

    if (!isTimerRunning) {
      setIsTimerRunning(true)
    }

    setTotalKeypresses((prev) => prev + 1)
    const expectedChar = targetSentence[typed.length]

    // Handle space: allow fluid progression if previous word was completed
    if (char === ' ') {
      if (expectedChar === ' ') {
        playWordSuccess(isMuted)
        setCorrectKeypresses((prev) => prev + 1)
        setTyped((prev) => prev + ' ')
        setHasError(false)
        return
      }

      // If user typed last word and presses Space when only ending punctuation remains (. or ?):
      if (typed.length === targetSentence.length - 1 && /[.,?!]/.test(expectedChar)) {
        playKeySound(isMuted)
        setCorrectKeypresses((prev) => prev + 1)
        const nextTyped = typed + expectedChar
        setTyped(nextTyped)
        setHasError(false)
        handleCompleteSentence()
        return
      }
    }

    // Check match
    if (char === expectedChar) {
      playKeySound(isMuted)
      setCorrectKeypresses((prev) => prev + 1)
      const nextTyped = typed + char
      setTyped(nextTyped)
      setHasError(false)

      if (nextTyped.length === targetSentence.length) {
        handleCompleteSentence()
      }
    } else {
      // Helpful punctuation feedback if user swapped . and ?
      if (expectedChar === '?' && char === '.') {
        playErrorSound(isMuted)
        setHasError(true)
        setFeedbackMessage('This is a question! Type "?" (Shift + /)')
        return
      }
      if (expectedChar === '.' && char === '?') {
        playErrorSound(isMuted)
        setHasError(true)
        setFeedbackMessage('This is a statement! Type "."')
        return
      }

      // Mismatch
      playErrorSound(isMuted)
      setHasError(true)
      setCombo(0)
      setScore((prev) => Math.max(0, prev - 10))
      setFeedbackMessage(`Mismatch! Expected "${expectedChar}"`)
    }
  }

  // Backspace handler
  const handleBackspace = () => {
    if (typed.length === 0 || isCompleted) return
    setTyped((prev) => prev.slice(0, -1))
    setHasError(false)
    setFeedbackMessage('')
    playKeySound(isMuted)
  }

  // Hint word: auto-fill next word
  const handleHintWord = () => {
    if (isCompleted || !targetSentence) return
    const rawWords = targetSentence.trim().split(/\s+/)
    let charCount = 0

    for (let i = 0; i < rawWords.length; i++) {
      const wordLen = rawWords[i].length
      if (typed.length < charCount + wordLen) {
        const remainingInWord = targetSentence.slice(typed.length, charCount + wordLen)
        const nextTyped = typed + remainingInWord
        setTyped(nextTyped)
        setScore((prev) => Math.max(0, prev - 25))
        setFeedbackMessage(`Hint applied: "${rawWords[i]}" (-25 XP)`)
        playWordSuccess(isMuted)

        if (nextTyped.length === targetSentence.length) {
          handleCompleteSentence()
        }
        return
      }
      charCount += wordLen + 1
    }
  }

  // Keyboard Shortcuts (Tab to replay, Ctrl+Space for hint, Ctrl+H to toggle preview)
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (practiceMode === 'speedtest' || isMilestoneOpen) return

      // Tab to replay voice
      if (e.key === 'Tab') {
        e.preventDefault()
        handlePlayVoice()
      }
      // Ctrl + Space for word hint
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault()
        handleHintWord()
      }
      // Ctrl + H to toggle preview
      if (e.ctrlKey && (e.key === 'h' || e.key === 'H')) {
        e.preventDefault()
        setIsPreviewHidden((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleGlobalKey)
    return () => window.removeEventListener('keydown', handleGlobalKey)
  }, [handlePlayVoice, practiceMode])

  // Select Category from Bar or Modal
  const handleSelectCategory = (categoryId) => {
    unlockAudio()
    setSelectedCategory(categoryId)
    setPracticeMode('auto')
    const freshQueue = generateSmartQueue(ALL_EXERCISES, categoryId)
    setQueue(freshQueue)
    setQueueIndex(0)
    setTyped('')
    setIsCompleted(false)
    setHasError(false)
    setFeedbackMessage(`Loaded ${categoryId === 'all' ? 'All 3,000+' : categoryId} sentences!`)
  }

  // Re-shuffle random sentences
  const handleShuffleAgain = () => {
    unlockAudio()
    const freshQueue = generateSmartQueue(ALL_EXERCISES, selectedCategory)
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

  // Reset Progress Handler
  const handleResetProgress = () => {
    if (window.confirm('আপনি কি সত্যিই আপনার পূর্বের সমস্ত অনুশীলন রেকর্ড রিসেট করতে চান?')) {
      resetExerciseHistory()
      setCompletedTotal(0)
      const freshQueue = generateSmartQueue(ALL_EXERCISES, selectedCategory)
      setQueue(freshQueue)
      setQueueIndex(0)
      setStreakData(getStreakData())
      setFeedbackMessage('প্রগ্রেস সফলভাবে রিসেট করা হয়েছে!')
    }
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

  // Real-time speed and accuracy calculations
  const wpm =
    elapsedSeconds > 1 && correctKeypresses > 0
      ? Math.round((correctKeypresses / 5) / (elapsedSeconds / 60))
      : 0

  const accuracy =
    totalKeypresses > 0
      ? Math.max(10, Math.round((correctKeypresses / totalKeypresses) * 100))
      : 100

  return (
    <div
      onClick={unlockAudio}
      className="min-h-screen flex flex-col justify-between bg-[#F8FAFC] text-slate-800 antialiased font-sans select-none overflow-x-hidden"
    >
      {/* Top Header */}
      <Header
        courseTitle={
          practiceMode === 'auto'
            ? currentExercise.category || 'TypeLingo Zone'
            : practiceMode === 'speedtest'
            ? 'Score & Speed Test'
            : currentCourse.title
        }
        lessonTitle={
          practiceMode === 'auto'
            ? currentExercise.category || '3,000+ Sentences'
            : practiceMode === 'speedtest'
            ? 'Speed Challenge'
            : currentLesson.title
        }
        category={
          practiceMode === 'speedtest'
            ? 'Speed Test'
            : currentExercise.category || 'Daily Conversation'
        }
        currentIndex={practiceMode === 'auto' ? queueIndex : lessonExerciseIndex}
        totalExercises={
          practiceMode === 'auto' ? queue.length : currentLesson.exercises.length
        }
        completedTotal={completedTotal}
        elapsedSeconds={elapsedSeconds}
        score={score}
        combo={combo}
        wpm={wpm}
        accuracy={accuracy}
        streak={Math.max(1, streakData.streak || 1)}
        isMuted={isMuted}
        practiceMode={practiceMode}
        onToggleMute={() => setIsMuted(!isMuted)}
        onOpenLessonMenu={() => setIsLessonMenuOpen(true)}
        onRestartCurrentLesson={handleRestartCurrent}
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onShuffleAgain={handleShuffleAgain}
        onSwitchToAutoMode={handleSwitchToAutoMode}
        onOpenAboutCreator={() => setIsAboutCreatorOpen(true)}
        onOpenSpeedTest={() =>
          setPracticeMode(practiceMode === 'speedtest' ? 'auto' : 'speedtest')
        }
      />

      {/* Category Pills Bar (Only shown in sentence practice mode, hidden in speed test to avoid clutter) */}
      {practiceMode === 'auto' && (
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            handleSelectCategory(catId)
          }}
          todayCompletedCount={streakData.todayCount || 0}
          onOpenSpeedTest={() => setPracticeMode('speedtest')}
          isSpeedTestActive={false}
        />
      )}

      {/* 
        Main Practice Container - Auto-Centered with zero scrollbars:
      */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2.5 flex flex-col items-center justify-center">
        {practiceMode === 'speedtest' ? (
          <SpeedTestView
            onBackToPractice={() => setPracticeMode('auto')}
            isMuted={isMuted}
          />
        ) : (
          <div className="w-full bg-white rounded-3xl p-4 sm:p-6 md:p-7 border border-slate-200/90 shadow-sm flex flex-col items-center justify-between min-h-[420px] sm:min-h-[450px]">
            {/* Word Cards Box with Dynamic Responsive Layout and Large Bengali Translation */}
            <WordChips
              words={targetWords}
              bengaliMeaning={currentExercise ? currentExercise.bengaliMeaning : ''}
              targetSentence={targetSentence}
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
        )}
      </main>

      {/* Modern Footer with Developer Attribution to Atikur Rahman */}
      <Footer
        completedTotal={completedTotal}
        totalSentences={ALL_EXERCISES.length}
        streak={streakData.streak}
        onResetProgress={handleResetProgress}
        onOpenAboutCreator={() => setIsAboutCreatorOpen(true)}
      />

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

      {/* Topic / Lesson Selector Modal with 17 categories and courses */}
      <LessonSelectorModal
        isOpen={isLessonMenuOpen}
        onClose={() => setIsLessonMenuOpen(false)}
        currentLessonId={currentLesson.id}
        selectedCategory={selectedCategory}
        onSelectLesson={handleSelectLesson}
        onSelectCategory={handleSelectCategory}
      />

      {/* Custom Text Modal */}
      <CustomTextModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onStartCustomLesson={handleStartCustomLesson}
      />

      {/* About Creator Modal (Atikur Rahman) */}
      <AboutCreatorModal
        isOpen={isAboutCreatorOpen}
        onClose={() => setIsAboutCreatorOpen(false)}
      />

      {/* 5-Sentence Milestone Encouragement Modal */}
      <PracticeMilestoneModal
        isOpen={isMilestoneOpen}
        onContinue={handleContinueFromMilestone}
        completedCount={sessionCompletedCount}
        wpm={wpm}
        accuracy={accuracy}
        streak={Math.max(1, streakData.streak || 1)}
      />
    </div>
  )
}
