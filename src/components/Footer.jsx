import React from 'react'
import { Globe } from 'lucide-react'

function LinkedinIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.64c0 .91.73 1.64 1.64 1.64s1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64z" />
    </svg>
  )
}

export function Footer({
  completedTotal = 0,
  totalSentences = 3000,
  streak = 0,
  onResetProgress,
  onOpenAboutCreator,
}) {
  const percentCompleted = totalSentences > 0 ? ((completedTotal / totalSentences) * 100).toFixed(0) : 0

  return (
    <footer className="w-full bg-white border-t border-slate-200/70 py-3.5 px-3 sm:px-6 select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-500">
        {/* Left: Minimal Progress */}
        <div className="flex items-center gap-2.5">
          <span className="font-semibold text-slate-700">
            {completedTotal} / {totalSentences}
          </span>
          <span className="text-[11px] text-slate-400">
            ({percentCompleted}% Done)
          </span>

          {completedTotal > 0 && (
            <button
              onClick={onResetProgress}
              className="text-[11px] text-slate-400 hover:text-rose-500 hover:underline transition-colors ml-1 cursor-pointer"
              title="Reset progress"
            >
              Reset
            </button>
          )}
        </div>

        {/* Center / Right: Developer Credit by Atikur Rahman & Portfolio */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Developed by</span>
            <button
              onClick={onOpenAboutCreator}
              className="font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors cursor-pointer"
              title="View Creator Details"
            >
              Atikur Rahman
            </button>
          </div>

          <span className="text-slate-300">·</span>

          <a
            href="https://atikurrahmanxm.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-indigo-600 transition-colors p-1 rounded-md"
            title="Portfolio: Atikur Rahman"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-500" />
            <span className="font-semibold text-[11px] sm:text-xs">Portfolio</span>
          </a>

          <span className="text-slate-300">·</span>

          <a
            href="https://www.linkedin.com/in/atikurrahmanxm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0A66C2] transition-colors p-1 rounded-md"
            title="LinkedIn: Atikur Rahman"
          >
            <LinkedinIcon className="w-3.5 h-3.5 fill-[#0A66C2]" />
            <span className="font-semibold text-[11px] sm:text-xs">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
