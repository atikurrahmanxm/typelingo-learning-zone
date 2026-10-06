import React from 'react'
import { Check } from 'lucide-react'

const ROLE_BADGE_STYLES = {
  orange: {
    badge: 'bg-orange-50 text-orange-600 border-orange-200',
    activeGlow: 'ring-orange-400/20',
  },
  pink: {
    badge: 'bg-pink-50 text-pink-600 border-pink-200',
    activeGlow: 'ring-pink-400/20',
  },
  cyan: {
    badge: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    activeGlow: 'ring-cyan-400/20',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-600 border-blue-200',
    activeGlow: 'ring-blue-400/20',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    activeGlow: 'ring-emerald-400/20',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-600 border-amber-200',
    activeGlow: 'ring-amber-400/20',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-600 border-purple-200',
    activeGlow: 'ring-purple-400/20',
  },
}

// Responsive, dynamic sizing based on sentence length (word count)
// Ensures sentences with 6-7 words never overflow or trigger scrollbars on PC screens
const getLayoutConfig = (count) => {
  if (count >= 7) {
    return {
      cardClass: 'min-w-[65px] sm:min-w-[80px] md:min-w-[95px] lg:min-w-[105px] px-2.5 sm:px-3.5 md:px-4 py-3 sm:py-3.5',
      wordText: 'text-xl sm:text-2xl md:text-3xl',
      roleText: 'text-[9px] sm:text-[10px] md:text-[11px] px-2 py-0.5',
      meaningText: 'text-[11px] sm:text-xs md:text-sm px-2 py-0.5',
      posText: 'text-[9px] sm:text-[10px] md:text-[11px]',
      gap: 'gap-1.5 sm:gap-2 md:gap-2.5',
      checkIcon: 'w-3.5 h-3.5',
    }
  }
  if (count >= 6) {
    return {
      cardClass: 'min-w-[75px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[120px] px-3 sm:px-4 md:px-5 py-3.5 sm:py-4',
      wordText: 'text-2xl sm:text-3xl md:text-3.5xl',
      roleText: 'text-[10px] sm:text-xs px-2.5 py-0.5',
      meaningText: 'text-xs sm:text-sm md:text-base px-2.5 py-0.5',
      posText: 'text-[10px] sm:text-xs',
      gap: 'gap-2 sm:gap-2.5 md:gap-3',
      checkIcon: 'w-4 h-4',
    }
  }
  // 4 - 5 words (spacious and prominent)
  return {
    cardClass: 'min-w-[90px] sm:min-w-[115px] md:min-w-[135px] lg:min-w-[145px] px-4 sm:px-6 md:px-7 py-4 sm:py-5',
    wordText: 'text-2xl sm:text-3xl md:text-4xl',
    roleText: 'text-[10px] sm:text-xs font-bold px-2.5 py-0.5',
    meaningText: 'text-xs sm:text-sm md:text-base font-bold px-3 py-0.5',
    posText: 'text-[10px] sm:text-xs',
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
    <div className="w-full flex flex-col items-center justify-center my-2 sm:my-4">
      {/* 
        Full Sentence Bengali Translation (Clean, large & clearly legible):
      */}
      {bengaliMeaning && (
        <div className="text-center mb-5 sm:mb-7 px-4">
          <span className="text-xs sm:text-sm text-slate-400 font-normal mr-2.5 font-siliguri">
            বাংলা অর্থ:
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-siliguri tracking-normal leading-snug">
            "{bengaliMeaning}"
          </span>
        </div>
      )}

      {/* 
        Clean & Modern Word Cards Sector:
        - Auto-scales seamlessly to fit 4 to 7+ word sentences without horizontal scrollbars
        - Ample vertical padding so active card elevation and top dot never clip
        - Uses .no-scrollbar to hide any default browser scrollbars
      */}
      <div className="w-full flex justify-center px-1">
        <div className={`bg-slate-100/70 pt-3.5 sm:pt-4 pb-2.5 sm:pb-3 px-2 sm:px-3 rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] inline-flex items-stretch justify-center ${config.gap} max-w-full overflow-x-auto no-scrollbar`}>
          {words.map((item, idx) => {
            const isCurrent = idx === currentWordIndex
            const isDone = completedWordIndices.includes(idx)
            const styleConfig = ROLE_BADGE_STYLES[item.roleColor] || ROLE_BADGE_STYLES.blue

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-between ${config.cardClass} rounded-2xl border transition-all duration-300 relative select-none flex-shrink-0 ${
                  isCurrent
                    ? 'bg-white border-purple-400 shadow-md ring-4 ring-purple-500/10 -translate-y-1'
                    : isDone
                    ? 'bg-white/95 border-emerald-200 shadow-xs'
                    : 'bg-white border-slate-200/70 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Active Indicator Top Dot (centered on top edge, zero clipping) */}
                {isCurrent && (
                  <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full ring-4 ring-purple-100 shadow-sm animate-pulse-slow z-10" />
                )}

                {/* 1. Grammar Role Pill */}
                <div className="mb-1 sm:mb-1.5">
                  <span
                    className={`inline-block rounded-full font-bold tracking-wide border transition-colors ${config.roleText} ${styleConfig.badge}`}
                  >
                    {item.role || 'Word'}
                  </span>
                </div>

                {/* 2. The English Word (Bold, crisp typography) */}
                <div className="my-1.5 sm:my-2 flex items-center gap-1 sm:gap-1.5">
                  <span
                    className={`font-extrabold tracking-tight transition-colors ${config.wordText} ${
                      isCurrent
                        ? 'text-purple-900'
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

                {/* 3. Bengali Word Meaning (Soft Pill Tag in Hind Siliguri) */}
                {item.bn && (
                  <div
                    className={`font-bold font-siliguri rounded-lg border transition-colors my-1 ${config.meaningText} ${
                      isCurrent
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : isDone
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-slate-50 text-slate-700 border-slate-200/60'
                    }`}
                  >
                    {item.bn}
                  </div>
                )}

                {/* 4. Lowercase Part of Speech */}
                <div className={`font-medium text-slate-400 capitalize mt-0.5 sm:mt-1 ${config.posText}`}>
                  {item.pos || 'word'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
