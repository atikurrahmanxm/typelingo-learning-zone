import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Zap,
  RotateCcw,
  Trophy,
  Timer,
  Target,
  ChevronLeft,
  Award,
  Sparkles,
  Flame,
  Clock,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { playKeySound, playErrorSound, playCelebrationSound } from '../utils/sound'

// Comprehensive pool of 350+ frequent, natural, high-yield English words
const SPEED_WORDS_POOL = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not',
  'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from',
  'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would',
  'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which',
  'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
  'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see',
  'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think',
  'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well',
  'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most',
  'us', 'great', 'world', 'school', 'learn', 'english', 'study', 'write', 'read',
  'speak', 'listen', 'focus', 'clean', 'simple', 'fast', 'smart', 'life', 'happy',
  'water', 'food', 'friend', 'family', 'home', 'house', 'city', 'night', 'morning',
  'early', 'today', 'tomorrow', 'always', 'never', 'again', 'peace', 'music', 'book',
  'sound', 'story', 'dream', 'heart', 'power', 'smile', 'light', 'mind', 'travel',
  'start', 'finish', 'better', 'best', 'future', 'action', 'truth', 'river', 'tree',
  'green', 'summer', 'winter', 'breeze', 'cloud', 'place', 'hand', 'small', 'large',
  'young', 'long', 'short', 'white', 'black', 'quiet', 'brave', 'clear', 'warm',
  'fresh', 'sweet', 'strong', 'stone', 'plant', 'flower', 'walk', 'run', 'drive',
  'climb', 'sleep', 'rest', 'coffee', 'tea', 'solve', 'check', 'build', 'create',
  'wonder', 'change', 'grow', 'stand', 'watch', 'share', 'teach', 'reach', 'guide',
  'practice', 'success', 'listen', 'number', 'system', 'program', 'typing', 'speed',
  'keyboard', 'letter', 'sentence', 'lesson', 'memory', 'moment', 'minute', 'second',
]

// Natural sentences pool for sentence mode
const SPEED_SENTENCES_POOL = [
  'Practice makes a person perfect in every way.',
  'Success comes to those who work hard every day.',
  'We should always speak the truth with kindness.',
  'Continuous learning leads to great personal growth.',
  'A healthy mind lives inside a healthy body.',
  'Time is the most valuable treasure in human life.',
  'Believe in your dreams and never give up hope.',
  'English is a global bridge connecting all people.',
  'Focus on progress rather than seeking perfection.',
  'Small daily efforts lead to remarkable achievements.',
  'Early to bed and early to rise brings good health.',
  'Patience and persistence can overcome any obstacle.',
]

function generateWordList(count = 120, mode = 'words') {
  if (mode === 'sentences') {
    const list = []
    while (list.length < count) {
      const sentence = SPEED_SENTENCES_POOL[Math.floor(Math.random() * SPEED_SENTENCES_POOL.length)]
      const words = sentence.split(' ')
      for (const w of words) {
        list.push(w)
      }
    }
    return list.slice(0, count)
  }

  const result = []
  for (let i = 0; i < count; i++) {
    const word = SPEED_WORDS_POOL[Math.floor(Math.random() * SPEED_WORDS_POOL.length)]
    result.push(word)
  }
  return result
}

function getSpeedRank(wpm) {
  if (wpm >= 100) return { title: 'Godspeed Master', badge: '👑', color: 'from-amber-500 to-yellow-400', desc: 'Top 1% elite typing velocity!' }
  if (wpm >= 80) return { title: 'Pro Speed Typer', badge: '🚀', color: 'from-violet-600 to-indigo-600', desc: 'Outstanding speed and fluid muscle memory!' }
  if (wpm >= 60) return { title: 'Fast & Fluent', badge: '⚡', color: 'from-indigo-600 to-sky-500', desc: 'Faster than 85% of all computer users!' }
  if (wpm >= 40) return { title: 'Solid Intermediate', badge: '🎯', color: 'from-emerald-600 to-teal-500', desc: 'Great functional speed for everyday work!' }
  if (wpm >= 25) return { title: 'Developing Typer', badge: '🌱', color: 'from-blue-600 to-cyan-500', desc: 'Good foundation! Keep up the daily practice!' }
  return { title: 'Beginner Explorer', badge: '💡', color: 'from-slate-600 to-slate-500', desc: 'Every champion started right here. Keep going!' }
}

export function SpeedTestView({ onBackToPractice, isMuted = false }) {
  // Test configuration
  const [duration, setDuration] = useState(60) // 15, 30, 60, 120
  const [testMode, setTestMode] = useState('words') // 'words' | 'sentences'

  // Test state: 'idle' | 'running' | 'finished'
  const [testStatus, setTestStatus] = useState('idle')
  const [timeLeft, setTimeLeft] = useState(60)
  const [words, setWords] = useState(() => generateWordList(150, 'words'))

  // Typing tracking
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentInput, setCurrentInput] = useState('')
  const [wordHistory, setWordHistory] = useState([]) // Array of { word, typed, isCorrect }

  // Detailed stats
  const [correctKeystrokes, setCorrectKeystrokes] = useState(0)
  const [incorrectKeystrokes, setIncorrectKeystrokes] = useState(0)
  const [totalKeystrokes, setTotalKeystrokes] = useState(0)

  // Personal Best & History
  const [bestWpm, setBestWpm] = useState(() => {
    const saved = localStorage.getItem('typelingo_best_wpm')
    return saved ? parseInt(saved, 10) : 0
  })
  const [recentHistory, setRecentHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('typelingo_speed_history')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })
  const [isNewRecord, setIsNewRecord] = useState(false)

  const inputRef = useRef(null)
  const wordsContainerRef = useRef(null)
  const timerRef = useRef(null)

  // Focus input automatically
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    focusInput()
  }, [testStatus])

  // Reset test cleanly
  const handleResetTest = useCallback((newDuration = duration, newMode = testMode) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setTestStatus('idle')
    setTimeLeft(newDuration)
    setCurrentWordIndex(0)
    setCurrentInput('')
    setWordHistory([])
    setCorrectKeystrokes(0)
    setIncorrectKeystrokes(0)
    setTotalKeystrokes(0)
    setIsNewRecord(false)
    setWords(generateWordList(150, newMode))
    setTimeout(focusInput, 50)
  }, [duration, testMode])

  // Handle countdown timer
  useEffect(() => {
    if (testStatus === 'running') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            finishTest()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [testStatus])

  // Finish test & calculate results
  const finishTest = useCallback(() => {
    setTestStatus('finished')
    playCelebrationSound(isMuted)

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#3b82f6', '#10b981'],
      })
    } catch (e) {
      // ignore
    }
  }, [isMuted])

  // Save score when test finishes
  useEffect(() => {
    if (testStatus === 'finished') {
      const elapsedMinutes = duration / 60
      const finalWpm = Math.max(0, Math.round((correctKeystrokes / 5) / elapsedMinutes))
      const finalAccuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100

      // Check personal best
      if (finalWpm > bestWpm) {
        setBestWpm(finalWpm)
        setIsNewRecord(true)
        localStorage.setItem('typelingo_best_wpm', finalWpm.toString())
      }

      // Record in history
      const newEntry = {
        date: new Date().toLocaleDateString('bn-BD', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        wpm: finalWpm,
        accuracy: finalAccuracy,
        duration: `${duration}s`,
      }
      const updatedHistory = [newEntry, ...recentHistory.slice(0, 4)]
      setRecentHistory(updatedHistory)
      localStorage.setItem('typelingo_speed_history', JSON.stringify(updatedHistory))
    }
  }, [testStatus])

  // Handle input changes
  const handleInputChange = (e) => {
    if (testStatus === 'finished') return

    const val = e.target.value

    // Start timer on first keystroke
    if (testStatus === 'idle' && val.length > 0) {
      setTestStatus('running')
    }

    const targetWord = words[currentWordIndex] || ''

    // If space pressed -> submit current word
    if (val.endsWith(' ')) {
      const typedWord = val.trim()
      const isWordMatch = typedWord === targetWord

      // Play soft sounds
      if (isWordMatch) {
        playKeySound(isMuted)
      } else {
        playErrorSound(isMuted)
      }

      // Record word in history
      setWordHistory((prev) => [
        ...prev,
        { word: targetWord, typed: typedWord, isCorrect: isWordMatch },
      ])

      // Advance to next word
      setCurrentWordIndex((prev) => prev + 1)
      setCurrentInput('')

      // Auto-append more words if nearing end of list
      if (currentWordIndex >= words.length - 20) {
        setWords((prev) => [...prev, ...generateWordList(50, testMode)])
      }
      return
    }

    // Regular character typing
    playKeySound(isMuted)
    setCurrentInput(val)

    // Keystroke statistics
    setTotalKeystrokes((prev) => prev + 1)
    const charIndex = val.length - 1
    if (charIndex < targetWord.length && val[charIndex] === targetWord[charIndex]) {
      setCorrectKeystrokes((prev) => prev + 1)
    } else {
      setIncorrectKeystrokes((prev) => prev + 1)
    }
  }

  // Keyboard shortcut for quick restart (Tab / Esc)
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      handleResetTest(duration, testMode)
    }
    if (e.key === 'Escape') {
      handleResetTest(duration, testMode)
    }
  }

  // Live WPM calculation
  const elapsedSecs = duration - timeLeft
  const liveMinutes = elapsedSecs > 0 ? elapsedSecs / 60 : 0.01
  const liveWpm = elapsedSecs > 1 ? Math.round((correctKeystrokes / 5) / liveMinutes) : 0
  const liveAccuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100

  // Final score calculations
  const finalMinutes = duration / 60
  const finalWpm = Math.max(0, Math.round((correctKeystrokes / 5) / finalMinutes))
  const rawWpm = Math.max(0, Math.round((totalKeystrokes / 5) / finalMinutes))
  const finalAccuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100
  const rank = getSpeedRank(finalWpm)

  return (
    <div
      onClick={focusInput}
      className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 flex flex-col items-center select-none"
    >
      {/* 
        Top Controls Bar: Back button, Duration pills, Mode switch
      */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
        {/* Back to practice button */}
        <button
          onClick={onBackToPractice}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Practice</span>
        </button>

        {/* Duration Selector (15s, 30s, 60s, 120s) */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200/80 shadow-2xs">
          {[15, 30, 60, 120].map((sec) => (
            <button
              key={sec}
              onClick={() => {
                setDuration(sec)
                handleResetTest(sec, testMode)
              }}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                duration === sec
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {sec}s
            </button>
          ))}
        </div>

        {/* Mode Selector: Words vs Sentences */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200/80 shadow-2xs">
          {[
            { id: 'words', label: 'Words' },
            { id: 'sentences', label: 'Sentences' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setTestMode(m.id)
                handleResetTest(duration, m.id)
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                testMode === m.id
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* 
        MAIN CONTENT: TYPING CARD OR RESULT CARD
      */}
      {testStatus !== 'finished' ? (
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between min-h-[460px] relative">
          {/* Top Live Stats HUD */}
          <div className="w-full flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            {/* Countdown Timer with clean glowing ring */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold">
                <Timer className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-indigo-600">
                  {timeLeft}
                </span>
                <span className="text-xs text-slate-400 font-semibold ml-1">sec</span>
              </div>
            </div>

            {/* Live Real-time WPM & Accuracy */}
            <div className="flex items-center gap-3 sm:gap-6 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span className="text-lg sm:text-xl font-bold text-slate-900">
                  {liveWpm}
                </span>
                <span className="text-[10px] uppercase font-sans text-slate-400 font-bold">WPM</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <Target className="w-4 h-4 text-emerald-600" />
                <span className="text-lg sm:text-xl font-bold text-slate-900">
                  {liveAccuracy}%
                </span>
                <span className="text-[10px] uppercase font-sans text-slate-400 font-bold">ACC</span>
              </div>
            </div>
          </div>

          {/* 
            Interactive Typing Box (Inspired by Monkeytype / 10FastFingers)
            Auto-scrolling 3-line word display with real-time character coloring
          */}
          <div
            ref={wordsContainerRef}
            className="w-full flex-1 flex flex-wrap content-start gap-x-3 sm:gap-x-4 gap-y-2.5 sm:gap-y-3.5 text-2xl sm:text-3xl md:text-[34px] font-mono leading-relaxed max-h-[220px] overflow-hidden relative cursor-text select-none py-2"
          >
            {words.slice(Math.max(0, currentWordIndex - 5), currentWordIndex + 25).map((word, relIdx) => {
              const absIdx = Math.max(0, currentWordIndex - 5) + relIdx
              const isCurrent = absIdx === currentWordIndex
              const pastWord = wordHistory[absIdx]

              // 1. Current Active Word (with character-by-character coloring & caret)
              if (isCurrent) {
                return (
                  <span
                    key={absIdx}
                    className="relative inline-flex items-center bg-indigo-50/70 text-slate-900 px-2 py-0.5 rounded-xl border border-indigo-300/80 shadow-2xs font-extrabold"
                  >
                    {word.split('').map((char, cIdx) => {
                      const typedChar = currentInput[cIdx]
                      let charClass = 'text-slate-400' // untyped
                      if (typedChar !== undefined) {
                        charClass = typedChar === char ? 'text-indigo-950' : 'text-rose-600 bg-rose-100 rounded-xs'
                      }

                      return (
                        <span key={cIdx} className={`relative ${charClass}`}>
                          {/* Blinking Caret */}
                          {cIdx === currentInput.length && (
                            <span className="absolute -top-1 -bottom-1 left-0 w-[2.5px] bg-indigo-600 rounded-full animate-cursor" />
                          )}
                          {char}
                        </span>
                      )
                    })}

                    {/* Caret at end of word */}
                    {currentInput.length >= word.length && (
                      <span className="relative">
                        <span className="absolute -top-1 -bottom-1 left-0 w-[2.5px] bg-indigo-600 rounded-full animate-cursor" />
                        {currentInput.slice(word.length).split('').map((extraChar, eIdx) => (
                          <span key={eIdx} className="text-rose-500 bg-rose-100 rounded-xs">
                            {extraChar}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                )
              }

              // 2. Past Words (Already typed)
              if (pastWord) {
                return (
                  <span
                    key={absIdx}
                    className={`inline-block transition-colors ${
                      pastWord.isCorrect
                        ? 'text-emerald-700/80'
                        : 'text-rose-600 line-through decoration-rose-400'
                    }`}
                  >
                    {word}
                  </span>
                )
              }

              // 3. Upcoming Words
              return (
                <span key={absIdx} className="text-slate-400/90 font-medium transition-colors">
                  {word}
                </span>
              )
            })}
          </div>

          {/* Hidden input to capture keystrokes anywhere on the screen */}
          <input
            ref={inputRef}
            type="text"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={currentInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="absolute opacity-0 pointer-events-none w-0 h-0"
          />

          {/* Bottom Bar: Helper info & Restart button */}
          <div className="w-full pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span className="hidden sm:inline">
              {testStatus === 'idle'
                ? 'Type any letter to start the countdown automatically...'
                : 'Press Space to advance to the next word.'}
            </span>

            <button
              onClick={() => handleResetTest(duration, testMode)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors font-medium ml-auto"
              title="Restart test (Shortcut: Tab)"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Restart (Tab)</span>
            </button>
          </div>
        </div>
      ) : (
        /* 
          RICH RESULT SCOREBOARD & CERTIFICATE CARD
        */
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-md flex flex-col items-center animate-pop-in">
          {/* New Personal Record Pill */}
          {isNewRecord && (
            <div className="mb-3 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>NEW PERSONAL RECORD!</span>
            </div>
          )}

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{rank.badge}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              {rank.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 text-center max-w-md">
            {rank.desc}
          </p>

          {/* Hero Numbers (WPM & Accuracy) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-lg mb-8">
            {/* WPM Hero */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-6 bg-gradient-to-b from-indigo-50/70 to-indigo-100/40 rounded-3xl border border-indigo-200/80 shadow-xs">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                Net Speed
              </span>
              <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-indigo-700">
                {finalWpm}
              </span>
              <span className="text-xs font-extrabold text-slate-500 mt-1 uppercase">
                Words Per Minute
              </span>
            </div>

            {/* Accuracy Hero */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-6 bg-gradient-to-b from-emerald-50/70 to-emerald-100/40 rounded-3xl border border-emerald-200/80 shadow-xs">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                Accuracy
              </span>
              <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-emerald-700">
                {finalAccuracy}%
              </span>
              <span className="text-xs font-extrabold text-slate-500 mt-1 uppercase">
                Precision
              </span>
            </div>
          </div>

          {/* Detailed Stats Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block">Raw WPM</span>
              <span className="text-lg font-bold text-slate-800 font-mono">{rawWpm}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block">Keystrokes</span>
              <span className="text-lg font-bold text-slate-800 font-mono">
                <span className="text-emerald-600">{correctKeystrokes}</span> /{' '}
                <span className="text-rose-500">{incorrectKeystrokes}</span>
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block">Completed Words</span>
              <span className="text-lg font-bold text-slate-800 font-mono">{wordHistory.length}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
              <span className="text-[11px] text-slate-400 font-semibold block">Personal Best</span>
              <span className="text-lg font-bold text-amber-600 font-mono">{bestWpm} WPM</span>
            </div>
          </div>

          {/* Recent History Table */}
          {recentHistory.length > 1 && (
            <div className="w-full max-w-2xl mb-8 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                <span>Recent Test History</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {recentHistory.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                      <span>{item.date}</span>
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center justify-between font-mono font-bold">
                      <span className="text-indigo-600">{item.wpm} WPM</span>
                      <span className="text-slate-600">{item.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleResetTest(duration, testMode)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md hover:shadow-lg hover:scale-102 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Test (Enter)</span>
            </button>

            <button
              onClick={onBackToPractice}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors"
            >
              <span>Back to Practice</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
