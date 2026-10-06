import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Trophy, ArrowRight, RotateCcw, Target, Clock, CheckCircle2, Sparkles } from 'lucide-react'

export function LessonCompleteModal({
  courseTitle = 'Restart English',
  lessonTitle = 'Say Your Name and Role',
  lessonNumber = 1,
  completedCount = 3,
  accuracy = 78,
  elapsedSeconds = 70,
  nextLessonTitle = 'Talk About Your Home and Day',
  onContinueNext,
  onRestartLesson,
  onOpenLessonMenu,
}) {
  useEffect(() => {
    // Joyful celebration confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7c3aed', '#f59e0b', '#10b981', '#3b82f6', '#ec4899'],
    })
  }, [])

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-pop-in">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-center relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-100 rounded-full blur-3xl -z-10 opacity-70" />

        {/* Celebration Trophy Icon */}
        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-amber-400 via-amber-500 to-orange-400 rounded-3xl shadow-lg shadow-amber-500/25 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform mb-4">
          <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-white fill-white" />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Lesson {lessonNumber} Complete!
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-purple-600 mt-1 mb-6">
          {lessonTitle}
        </p>

        {/* Clean Stats Row (Simple & Clear for Beginners) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Accuracy Card */}
          <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
              <Target className="w-3.5 h-3.5 text-emerald-500" />
              <span>Accuracy</span>
            </div>
            <span className="text-2xl font-extrabold text-slate-800">
              {accuracy}%
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 mt-0.5">
              {accuracy >= 80 ? 'অসাধারণ!' : 'ভালো হয়েছে!'}
            </span>
          </div>

          {/* Time Taken Card */}
          <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>Time</span>
            </div>
            <span className="text-2xl font-extrabold text-slate-800 font-mono">
              {formatTime(elapsedSeconds)}
            </span>
            <span className="text-[11px] font-semibold text-blue-600 mt-0.5">
              {completedCount} টি বাক্য শেষ
            </span>
          </div>
        </div>

        {/* Up Next Preview */}
        {nextLessonTitle && (
          <div className="bg-purple-50/70 border border-purple-200/70 rounded-2xl p-3 mb-6 text-left flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-600 tracking-wider block">
                পরবর্তী লেসন (Up Next)
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {nextLessonTitle}
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {nextLessonTitle ? (
            <button
              type="button"
              onClick={onContinueNext}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>পরবর্তী লেসনে যান (Continue)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : null}

          <button
            type="button"
            onClick={onRestartLesson}
            className="w-full py-2.5 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>আবার প্র্যাকটিস করুন (Practice Again)</span>
          </button>

          <button
            type="button"
            onClick={onOpenLessonMenu}
            className="w-full text-center text-xs text-slate-400 hover:text-purple-600 font-medium py-1 transition-colors"
          >
            সব লেসন দেখুন (View All Lessons)
          </button>
        </div>

      </div>
    </div>
  )
}
