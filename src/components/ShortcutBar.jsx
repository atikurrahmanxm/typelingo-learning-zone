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
    <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-400 select-none">
      {/* Navigation & Essential Shortcuts */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={onPrevious}
          className="p-1 sm:p-1.5 rounded-lg border border-slate-200/80 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          title="পূর্ববর্তী বাক্য (Previous)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          className="p-1 sm:p-1.5 rounded-lg border border-slate-200/80 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          title="পরবর্তী বাক্য (Next)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="w-px h-3.5 bg-slate-200 mx-1 hidden sm:inline-block" />

        <button
          onClick={onReplay}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200/70 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors"
          title="Replay audio"
        >
          <kbd className="px-1 py-0.2 text-[10px] font-mono bg-slate-100 border border-slate-300 rounded font-semibold text-slate-600">
            Tab
          </kbd>
          <span className="text-[11px] font-medium">Replay</span>
        </button>

        <button
          onClick={onHint}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200/70 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors"
          title="Hint word"
        >
          <kbd className="px-1 py-0.2 text-[10px] font-mono bg-slate-100 border border-slate-300 rounded font-semibold text-slate-600">
            Ctrl+Space
          </kbd>
          <span className="text-[11px] font-medium">Hint</span>
        </button>

        <button
          onClick={onToggleHidePreview}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200/70 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors"
          title="Toggle preview hide"
        >
          <kbd className="px-1 py-0.2 text-[10px] font-mono bg-slate-100 border border-slate-300 rounded font-semibold text-slate-600">
            Ctrl+H
          </kbd>
          <span className="text-[11px] font-medium">
            {isPreviewHidden ? 'Show' : 'Blind Mode'}
          </span>
        </button>
      </div>

      {/* Subtle indicator */}
      <div className="text-[11px] text-slate-400 font-medium">
        <span>Press <kbd className="px-1 py-0.2 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">Space</kbd> between words</span>
      </div>
    </div>
  )
}
