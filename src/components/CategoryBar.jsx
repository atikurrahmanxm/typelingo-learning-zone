import React from 'react'
import { Sparkles, Flame, Zap } from 'lucide-react'
import { CATEGORIES_SUMMARY } from '../data/lessons'

export function CategoryBar({
  selectedCategory = 'all',
  onSelectCategory,
  todayCompletedCount = 0,
  onOpenSpeedTest,
  isSpeedTestActive = false,
}) {
  return (
    <div className="w-full bg-slate-50/70 border-b border-slate-200/60 select-none py-1.5 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Category pills with horizontal scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5 flex-1 min-w-0">
          {CATEGORIES_SUMMARY.map((cat) => {
            const isSelected = !isSpeedTestActive && selectedCategory === cat.id
            const isDaily = cat.id === 'daily-challenge'

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 border ${
                  isSelected
                    ? isDaily
                      ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                      : 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                    : isDaily
                    ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {isDaily && <Flame className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-amber-500'}`} />}
                {cat.id === 'all' && <Sparkles className="w-3.5 h-3.5" />}
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Right side: Single Distinct Score Test Button with clean divider */}
        {onOpenSpeedTest && (
          <div className="flex items-center shrink-0 border-l border-slate-200/90 pl-2 sm:pl-3">
            <button
              onClick={onOpenSpeedTest}
              className={`flex items-center gap-1.5 px-3.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 border shadow-2xs ${
                isSpeedTestActive
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-400/30'
                  : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 hover:text-amber-900'
              }`}
              title="Typing Speed & Score Test"
            >
              <Zap className={`w-3.5 h-3.5 ${isSpeedTestActive ? 'text-white' : 'text-amber-500 fill-amber-500 animate-pulse'}`} />
              <span>Score Test</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
