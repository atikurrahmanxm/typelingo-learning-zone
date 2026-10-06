import React from 'react'
import {
  ChevronLeft,
  Sliders,
  Volume2,
  VolumeX,
  RotateCcw,
  Clock,
  Flame,
  Shuffle,
  Sparkles,
} from 'lucide-react'

export function Header({
  lessonTitle = 'Say Your Name and Role',
  courseTitle = 'Restart English',
  category = 'Present',
  currentIndex = 0,
  totalExercises = 49,
  completedTotal = 0,
  elapsedSeconds = 15,
  score = 300,
  combo = 0,
  isMuted = false,
  practiceMode = 'auto',
  onToggleMute,
  onOpenLessonMenu,
  onRestartCurrentLesson,
  onOpenCustomModal,
  onShuffleAgain,
  onSwitchToAutoMode,
}) {
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const progressPercent =
    totalExercises > 0 ? ((currentIndex + 1) / totalExercises) * 100 : 0

  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-30 select-none shadow-xs">
      {/* Row 1: Course navigation, Lesson Title and Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Mode Indicator & Shuffle / Course Menu */}
        <div className="flex items-center gap-2">
          {practiceMode === 'auto' ? (
            <button
              onClick={onShuffleAgain}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 px-3 py-1.5 rounded-xl transition-all shadow-2xs hover:scale-102"
              title="Reshuffle all 49 sentences randomly"
            >
              <Shuffle className="w-3.5 h-3.5 text-purple-600 animate-spin-slow" />
              <span>Smart Random (অটোমেটিক)</span>
            </button>
          ) : (
            <button
              onClick={onSwitchToAutoMode}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl border border-purple-200 transition-colors"
              title="Switch back to non-stop automatic practice"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Go to Auto Mode</span>
            </button>
          )}

          <button
            onClick={onOpenLessonMenu}
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-purple-600 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors hidden md:flex"
            title="Choose specific topic"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Topics</span>
          </button>
        </div>

        {/* Center: Topic Tag & Exercise Counter */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200/70 line-clamp-1">
            {courseTitle || lessonTitle}
          </span>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
            {currentIndex + 1} / {totalExercises}
          </span>
        </div>

        {/* Right: Theme, Settings, Volume */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCustomModal}
            className="text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors hidden sm:inline-block"
            title="Add custom sentence"
          >
            + Custom
          </button>

          <button
            onClick={onOpenLessonMenu}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            title="Browse all topics & tenses"
          >
            <Sliders className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleMute}
            className={`p-1.5 rounded-lg transition-colors ${
              isMuted
                ? 'text-red-500 hover:bg-red-50'
                : 'text-slate-500 hover:text-purple-600 hover:bg-slate-100'
            }`}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Row 2: Slim Progress bar */}
      <div className="w-full bg-slate-100 h-1 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-r-full transition-all duration-300"
          style={{ width: `${Math.max(2, progressPercent)}%` }}
        />
      </div>

      {/* Row 3: Meta metrics (Practice time, Score, Combo) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-1.5 flex items-center justify-between text-xs sm:text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <button
            onClick={onRestartCurrentLesson}
            className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors flex items-center gap-1.5 text-xs font-medium text-slate-500"
            title="Restart exercise"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Restart</span>
          </button>

          {completedTotal > 0 && (
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 hidden sm:inline-block">
              ✓ {completedTotal} Solved
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Time{' '}
              <strong className="text-slate-700 font-semibold">
                {formatTime(elapsedSeconds)}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>
              Score{' '}
              <strong className="text-slate-700 font-semibold">{score}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>
              Combo{' '}
              <strong className="text-slate-700 font-semibold">{combo}</strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
