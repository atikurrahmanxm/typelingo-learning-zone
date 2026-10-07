import React from 'react'
import {
  Volume2,
  VolumeX,
  RotateCcw,
  Flame,
  Shuffle,
  Zap,
  Target,
  SlidersHorizontal,
  UserCheck,
} from 'lucide-react'

export function Header({
  lessonTitle = 'Say Your Name and Role',
  courseTitle = 'Restart English',
  category = 'Daily Conversation',
  currentIndex = 0,
  totalExercises = 3000,
  completedTotal = 0,
  elapsedSeconds = 0,
  wpm = 0,
  accuracy = 100,
  streak = 1,
  isMuted = false,
  practiceMode = 'auto',
  onToggleMute,
  onOpenLessonMenu,
  onRestartCurrentLesson,
  onOpenCustomModal,
  onShuffleAgain,
  onOpenAboutCreator,
  onOpenSpeedTest,
}) {
  const progressPercent =
    totalExercises > 0 ? ((currentIndex + 1) / totalExercises) * 100 : 0

  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-30 select-none">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand + Category / Progress Counter */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenLessonMenu}
            className="flex items-center gap-1.5 focus:outline-none"
            title="Browse all topics"
          >
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              TypeLingo
            </span>
          </button>

          <span className="h-3.5 w-px bg-slate-200 hidden sm:inline-block" />

          {/* Current Topic Badge (Clickable to switch) */}
          <button
            onClick={onOpenLessonMenu}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200/70 px-2.5 py-1 rounded-lg transition-colors max-w-[130px] sm:max-w-[200px] truncate"
            title="টপিক বা ক্যাটাগরি পরিবর্তন করুন"
          >
            <span className="truncate">{category || courseTitle || lessonTitle}</span>
          </button>

          {/* Minimal Exercise Counter */}
          <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
            {currentIndex + 1} / {totalExercises}
          </span>
        </div>

        {/* Center: Unified Performance Capsule */}
        <div className="flex items-center bg-slate-50 border border-slate-200/90 rounded-full px-3.5 py-1 text-xs font-mono text-slate-700 shadow-2xs gap-2.5">
          {/* WPM */}
          <div
            className="flex items-center gap-1 font-bold text-indigo-700"
            title="Words Per Minute"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>{wpm}</span>
            <span className="text-[10px] uppercase font-sans font-medium text-indigo-500">wpm</span>
          </div>

          <span className="w-px h-3.5 bg-slate-200" />

          {/* Accuracy */}
          <div
            className="flex items-center gap-1 font-bold text-emerald-700"
            title="Accuracy"
          >
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>{accuracy}%</span>
          </div>

          <span className="w-px h-3.5 bg-slate-200 hidden sm:inline-block" />

          {/* Streak */}
          <div
            className="hidden sm:flex items-center gap-1 font-bold text-amber-700"
            title={`${streak} দিনের স্ট্রিক`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{streak}d</span>
          </div>
        </div>

        {/* Right: Clean Grouped Utility Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Icon Toolbar Box */}
          <div className="flex items-center bg-slate-100/80 border border-slate-200/80 rounded-xl p-0.5 gap-0.5">
            {/* Sound Mute/Unmute */}
            <button
              onClick={onToggleMute}
              className={`p-1.5 rounded-lg transition-colors ${
                isMuted
                  ? 'text-rose-500 hover:bg-rose-50'
                  : 'text-slate-500 hover:text-indigo-600 hover:bg-white'
              }`}
              title={isMuted ? 'শব্দ চালু করুন (Unmute)' : 'শব্দ বন্ধ করুন (Mute)'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Shuffle / Next Random Sentence */}
            <button
              onClick={onShuffleAgain}
              className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors"
              title="নতুন বাক্য এলোমেলো করুন (Shuffle)"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            {/* Restart Lesson */}
            <button
              onClick={onRestartCurrentLesson}
              className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-white rounded-lg transition-colors"
              title="পুনরায় শুরু করুন (Restart)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* All Topics Drawer */}
            <button
              onClick={onOpenLessonMenu}
              className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-white rounded-lg transition-colors"
              title="সব টপিক ও লেসন (Browse Lessons)"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Dev Attribution */}
          <button
            onClick={onOpenAboutCreator}
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-indigo-600 bg-slate-100/70 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-xl transition-colors border border-slate-200/60"
            title="Developer: Atikur Rahman"
          >
            <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[11px]">Atikur</span>
          </button>
        </div>
      </div>

      {/* Slim 2px Progress Line at the bottom edge */}
      <div className="w-full bg-slate-100 h-[2px] relative overflow-hidden">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${Math.max(1, progressPercent)}%` }}
        />
      </div>
    </header>
  )
}
