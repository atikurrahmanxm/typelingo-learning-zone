import React from 'react'
import { Check } from 'lucide-react'

// Sophisticated, harmonious semantic palette for grammar tokens
const ROLE_BADGE_STYLES = {
  orange: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200/80',
    activeGlow: 'ring-amber-400/20',
  },
  pink: {
    badge: 'bg-rose-50 text-rose-600 border-rose-200/80',
    activeGlow: 'ring-rose-400/20',
  },
  cyan: {
    badge: 'bg-sky-50 text-sky-700 border-sky-200/80',
    activeGlow: 'ring-sky-400/20',
  },
  blue: {
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    activeGlow: 'ring-indigo-400/20',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    activeGlow: 'ring-emerald-400/20',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200/80',
    activeGlow: 'ring-amber-400/20',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    activeGlow: 'ring-purple-400/20',
  },
}

// Responsive, dynamic sizing based on sentence length (word count)
// Optimized for 3 to 5-word medium sentences with zero clipping
const getLayoutConfig = (count) => {
  if (count >= 6) {
    return {
      cardClass: 'min-w-[75px] sm:min-w-[90px] md:min-w-[105px] px-3 sm:px-4 py-3 sm:py-3.5',
      wordText: 'text-xl sm:text-2xl md:text-3xl',
      roleText: 'text-[10px] sm:text-xs px-2.5 py-0.5',
      meaningText: 'text-xs sm:text-sm px-2.5 py-0.5',
      gap: 'gap-2 sm:gap-2.5 md:gap-3',
      checkIcon: 'w-4 h-4',
    }
  }
  // 3 - 5 words (spacious, prominent, beautifully centered)
  return {
    cardClass: 'min-w-[85px] sm:min-w-[110px] md:min-w-[130px] px-3.5 sm:px-5 md:px-6 py-3.5 sm:py-4.5',
    wordText: 'text-2xl sm:text-3xl md:text-4xl',
    roleText: 'text-[10px] sm:text-xs font-bold px-2.5 py-0.5',
    meaningText: 'text-xs sm:text-sm md:text-base font-bold px-3 py-0.5',
    gap: 'gap-2 sm:gap-3 md:gap-3.5',
    checkIcon: 'w-4 h-4',
  }
}

export function WordChips({
  words = [],
  bengaliMeaning = '',
  currentWordIndex = 0,
  completedWordIndices = [],
  showWords = true,
}) {
  const config = getLayoutConfig(words.length)

  return (
    <div className="w-full flex flex-col items-center justify-center my-2 sm:my-3">
      {/* Clean Full Bengali Sentence Translation (No redundant label) */}
      {bengaliMeaning && (
        <div className="text-center mb-5 sm:mb-7 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 font-siliguri tracking-normal leading-snug">
            {bengaliMeaning}
          </h2>
        </div>
      )}

      {/* 
        Clean & Modern Word Cards:
        - Airy 3-tier structure (Role -> English Word -> Bengali Meaning)
        - No redundant text or clutter
      */}
      <div className="w-full flex justify-center px-1">
        <div className={`bg-slate-100/50 pt-3 sm:pt-3.5 pb-2.5 sm:pb-3 px-3 sm:px-4 rounded-3xl border border-slate-200/60 inline-flex items-stretch justify-center flex-wrap sm:flex-nowrap ${config.gap} max-w-full`}>
          {words.map((item, idx) => {
            const isCurrent = idx === currentWordIndex
            const isDone = completedWordIndices.includes(idx)
            const styleConfig = ROLE_BADGE_STYLES[item.roleColor] || ROLE_BADGE_STYLES.blue

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-between ${config.cardClass} rounded-2xl border transition-all duration-200 relative select-none flex-shrink-0 ${
                  isCurrent
                    ? 'bg-white border-indigo-500 shadow-md ring-4 ring-indigo-500/15 -translate-y-1'
                    : isDone
                    ? 'bg-white border-emerald-300/80 shadow-2xs'
                    : 'bg-white border-slate-200/70 shadow-2xs hover:border-slate-300'
                }`}
              >
                {/* Active Indicator Top Dot */}
                {isCurrent && (
                  <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-indigo-600 rounded-full ring-4 ring-indigo-100 shadow-xs z-10" />
                )}

                {/* 1. Grammar Role Pill */}
                <div className="mb-1">
                  <span
                    className={`inline-block rounded-full font-bold tracking-wide border transition-colors ${config.roleText} ${styleConfig.badge}`}
                  >
                    {item.role || 'Word'}
                  </span>
                </div>

                {/* 2. English Word */}
                <div className="my-1.5 flex items-center gap-1 sm:gap-1.5">
                  <span
                    className={`font-extrabold tracking-tight transition-colors ${config.wordText} ${
                      isCurrent
                        ? 'text-indigo-950'
                        : isDone
                        ? 'text-emerald-700'
                        : 'text-slate-800'
                    }`}
                  >
                    {showWords || isDone ? item.word : '••••'}
                  </span>
                  {isDone && (
                    <Check className={`${config.checkIcon} text-emerald-600 stroke-[3]`} />
                  )}
                </div>

                {/* 3. Bengali Word Meaning */}
                {item.bn && (
                  <div
                    className={`font-bold font-siliguri rounded-lg border transition-colors mt-0.5 ${config.meaningText} ${
                      isCurrent
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200/80'
                        : isDone
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                        : 'bg-slate-50 text-slate-700 border-slate-200/60'
                    }`}
                  >
                    {item.bn}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
