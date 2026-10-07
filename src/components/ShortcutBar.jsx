import React from 'react'
import { ChevronLeft, ChevronRight, Ghost } from 'lucide-react'

export function ShortcutBar({
  onReplay,
  onHint,
  onToggleHidePreview,
  isPreviewHidden,
  onPrevious,
  onNext,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 select-none">
      {/* Left shortcut chips */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={onPrevious}
          className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
          title="Previous exercise"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
          title="Next exercise"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-slate-200/90 hover:bg-slate-50 transition-colors text-slate-700 font-medium"
        >
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            Tab
          </kbd>
          <span className="text-xs sm:text-sm">Replay exercise</span>
        </button>

        <button
          onClick={onHint}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-slate-200/90 hover:bg-slate-50 transition-colors text-slate-700 font-medium"
        >
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            Ctrl
          </kbd>
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            Space
          </kbd>
          <span className="ml-0.5 text-xs sm:text-sm">Hint for this word</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-slate-200/90 text-slate-700 font-medium">
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            Enter
          </kbd>
          <span className="text-xs sm:text-sm">Check</span>
        </div>

        <button
          onClick={onToggleHidePreview}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-slate-200/90 hover:bg-slate-50 transition-colors text-slate-700 font-medium"
        >
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            Ctrl
          </kbd>
          <kbd className="px-1.5 py-0.5 text-[11px] font-mono bg-slate-100 border border-slate-300 rounded text-slate-700 font-bold">
            H
          </kbd>
          <span className="ml-0.5 text-xs sm:text-sm">
            {isPreviewHidden ? 'Show preview' : 'Hide preview'}
          </span>
        </button>
      </div>

      {/* Right Mascot */}
      <div className="flex items-center gap-2 text-slate-400">
        <Ghost className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:text-indigo-600 transition-colors" />
      </div>
    </div>
  )
}
