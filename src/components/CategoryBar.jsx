import React, { useRef, useState, useEffect } from 'react'
import { Sparkles, Flame, Gauge, ChevronLeft, ChevronRight } from 'lucide-react'
import { CATEGORIES_SUMMARY } from '../data/lessons'

export function CategoryBar({
  selectedCategory = 'all',
  onSelectCategory,
  todayCompletedCount = 0,
  onOpenSpeedTest,
  isSpeedTestActive = false,
}) {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const updateScrollArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeftArrow(el.scrollLeft > 6)
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 6)
  }

  useEffect(() => {
    updateScrollArrows()
    window.addEventListener('resize', updateScrollArrows)
    return () => window.removeEventListener('resize', updateScrollArrows)
  }, [])

  const handleScroll = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
      setTimeout(updateScrollArrows, 300)
    }
  }

  const handleWheel = (e) => {
    if (scrollRef.current) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scrollRef.current.scrollLeft += e.deltaY * 0.8
        updateScrollArrows()
      }
    }
  }

  return (
    <div className="w-full bg-slate-50/70 border-b border-slate-200/60 select-none py-1.5 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Category pills with horizontal scroll & smooth navigation chevrons */}
        <div className="flex items-center gap-1 flex-1 min-w-0 relative">
          {showLeftArrow && (
            <button
              onClick={() => handleScroll(-180)}
              className="p-1 rounded-xl bg-white text-slate-500 hover:text-indigo-600 hover:bg-slate-50 shadow-xs border border-slate-200 transition-all shrink-0 z-10 cursor-pointer"
              title="পূর্ববর্তী ক্যাটাগরি"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollArrows}
            onWheel={handleWheel}
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 flex-1 min-w-0"
          >
            {CATEGORIES_SUMMARY.map((cat) => {
              const isSelected = !isSpeedTestActive && selectedCategory === cat.id
              const isDaily = cat.id === 'daily-challenge'

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 border cursor-pointer ${
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

          {showRightArrow && (
            <button
              onClick={() => handleScroll(180)}
              className="p-1 rounded-xl bg-white text-slate-500 hover:text-indigo-600 hover:bg-slate-50 shadow-xs border border-slate-200 transition-all shrink-0 z-10 cursor-pointer"
              title="পরবর্তী ক্যাটাগরি"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right side: High-Visibility Speed Test Button with clean divider */}
        {onOpenSpeedTest && (
          <div className="flex items-center shrink-0 border-l border-slate-200/90 pl-2 sm:pl-3">
            <button
              onClick={onOpenSpeedTest}
              className={`group flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 border shadow-xs cursor-pointer active:scale-95 ${
                isSpeedTestActive
                  ? 'bg-indigo-600 text-white border-indigo-700 ring-2 ring-indigo-400/30 shadow-xs'
                  : 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white border-indigo-700 shadow-xs hover:shadow-sm'
              }`}
              title="টাইপিং স্পিড টেস্ট (Speed Test — WPM ও নিখুঁততার পরীক্ষা)"
              aria-label="Open Typing Speed Test"
            >
              <Gauge className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform duration-200" />
              <span>Speed Test</span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider bg-amber-400 text-slate-900 rounded font-mono shadow-2xs">
                WPM
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
