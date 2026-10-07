import React from 'react'
import { Heart } from 'lucide-react'

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
              className="text-[11px] text-slate-400 hover:text-rose-500 hover:underline transition-colors ml-1"
              title="Reset progress"
            >
              Reset
            </button>
          )}
        </div>

        {/* Center / Right: Developer Credit by Atikur Rahman */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Developed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <button
              onClick={onOpenAboutCreator}
              className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Atikur Rahman
            </button>
          </div>

          <a
            href="https://github.com/atikurrahmanxm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
            title="GitHub: atikurrahmanxm"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
