import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Sparkles, ArrowRight, Zap, Target, Flame, X, Trophy } from 'lucide-react'

export function PracticeMilestoneModal({
  isOpen,
  onContinue,
  completedCount = 5,
  wpm = 0,
  accuracy = 100,
  streak = 1,
}) {
  // Joyful confetti celebration burst on open
  useEffect(() => {
    if (!isOpen) return

    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.55 },
        colors: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'],
      })
    } catch (e) {
      // ignore
    }
  }, [isOpen])

  // Keyboard shortcut listener: Enter or Space to quickly continue without mouse
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onContinue()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onContinue()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onContinue])

  if (!isOpen) return null

  // Dynamic motivational encouragement message based on milestone count
  const getEncouragementText = () => {
    if (completedCount <= 5) {
      return {
        title: 'ওয়াও! দারুণ উন্নতি হচ্ছে! 🚀',
        subtitle: 'You are improving noticeably!',
        body: 'টানা ৫টি বাক্য সফলভাবে সম্পন্ন করেছেন! প্রতিটি বাক্যের সাথে আপনার আঙুলের গতি ও টাইপিং আত্মবিশ্বাস চমৎকারভাবে বাড়ছে।',
      }
    }
    if (completedCount <= 10) {
      return {
        title: 'অসাধারণ স্পিড ও ফোকাস! 🔥',
        subtitle: 'Unstoppable Momentum!',
        body: 'টানা ১০টি বাক্য শেষ! আপনার টাইপিংয়ের নির্ভুলতা ও গতি দারুণ পর্যায়ে চলে এসেছে। এই রিদম ধরে রাখুন!',
      }
    }
    return {
      title: 'চমৎকার পারফরম্যান্স! 🏆',
      subtitle: 'Typing Master in Progress!',
      body: `টানা ${completedCount}টি বাক্য সম্পন্ন করেছেন! আপনার টাইপিং রিফ্লেক্স আগের চেয়ে অনেক বেশি ক্ষিপ্র ও স্বাভাবিক হয়ে উঠছে।`,
    }
  }

  const encouragement = getEncouragementText()

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-pop-in"
      onClick={onContinue}
    >
      <div
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 text-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Soft background ambient gradient */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-52 h-52 bg-indigo-100/70 rounded-full blur-3xl -z-10" />

        {/* Top-Right Quick Close */}
        <button
          onClick={onContinue}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          title="চালিয়ে যান (Close / Continue)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Icon Badge */}
        <div className="mx-auto w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 rounded-3xl shadow-lg shadow-orange-500/25 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform mb-3.5">
          {completedCount >= 15 ? (
            <Trophy className="w-9 h-9 sm:w-10 sm:h-10 text-white fill-white" />
          ) : completedCount >= 10 ? (
            <Flame className="w-9 h-9 sm:w-10 sm:h-10 text-white fill-white" />
          ) : (
            <Sparkles className="w-9 h-9 sm:w-10 sm:h-10 text-white fill-white" />
          )}
        </div>

        {/* Milestone Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80 mb-2">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{completedCount}টি বাক্য সম্পন্ন • Milestone Reached</span>
        </div>

        {/* Main Title */}
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {encouragement.title}
        </h2>
        <p className="text-xs font-semibold text-indigo-600 mt-0.5 mb-2.5">
          {encouragement.subtitle}
        </p>

        {/* Friendly Bengali Motivation */}
        <p className="text-xs text-slate-600 leading-relaxed px-2 mb-4">
          {encouragement.body}
        </p>

        {/* Performance Capsule Row */}
        <div className="grid grid-cols-3 gap-2 bg-slate-50 border border-slate-100 rounded-2xl p-2.5 mb-5 font-mono">
          {/* WPM */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-sans font-semibold text-slate-400 flex items-center gap-1">
              <Zap className="w-3 h-3 text-indigo-500" /> Speed
            </span>
            <span className="text-lg font-black text-indigo-700 mt-0.5">
              {wpm}
            </span>
            <span className="text-[10px] font-sans font-medium text-slate-500">
              wpm
            </span>
          </div>

          {/* Accuracy */}
          <div className="flex flex-col items-center border-x border-slate-200/70">
            <span className="text-[10px] uppercase font-sans font-semibold text-slate-400 flex items-center gap-1">
              <Target className="w-3 h-3 text-emerald-500" /> Accuracy
            </span>
            <span className="text-lg font-black text-emerald-700 mt-0.5">
              {accuracy}%
            </span>
            <span className="text-[10px] font-sans font-medium text-slate-500">
              {accuracy >= 95 ? 'নিখুঁত' : 'ভালো'}
            </span>
          </div>

          {/* XP Gained */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-sans font-semibold text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> XP Earned
            </span>
            <span className="text-lg font-black text-amber-600 mt-0.5">
              +{completedCount * 100}
            </span>
            <span className="text-[10px] font-sans font-medium text-slate-500">
              XP
            </span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onContinue}
          autoFocus
          className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
        >
          <span>পরবর্তী বাক্য চালিয়ে যান (Continue)</span>
          <ArrowRight className="w-4 h-4" />
          <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono font-medium text-white/90 bg-white/20 rounded border border-white/20">
            Enter ↵
          </kbd>
        </button>
      </div>
    </div>
  )
}
