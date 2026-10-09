import React from 'react'
import {
  X,
  Sparkles,
  Flame,
  Gauge,
  BookOpen,
  ExternalLink,
  Code2,
  Heart,
  Check,
  Globe,
} from 'lucide-react'

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.64c0 .91.73 1.64 1.64 1.64s1.64-.73 1.64-1.64c0-.91-.73-1.64-1.64-1.64z" />
    </svg>
  )
}

export function AboutCreatorModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto select-none animate-pop-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg my-auto bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden text-center max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Container containing Banner, Avatar and all content together */}
        <div className="overflow-y-auto custom-scrollbar flex-1 relative">
          {/* Modern Gradient Banner with Geometric Dots */}
          <div className="relative h-28 sm:h-32 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shrink-0 overflow-hidden">
            {/* Subtle decorative dot grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />
            {/* Ambient light glow orbs */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-400/25 rounded-full blur-2xl pointer-events-none" />

            {/* Top-Right Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/25 hover:bg-black/40 text-white/90 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-xs active:scale-95"
              title="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Main Body */}
          <div className="px-5 sm:px-6 pb-5 pt-0">
            {/* Avatar Section */}
            <div className="relative -mt-14 sm:-mt-16 mb-2.5 inline-block z-20">
              <div className="w-24 h-24 sm:w-28 sm:h-28 p-1.5 bg-white rounded-2xl shadow-xl ring-2 ring-indigo-100">
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src="/creator_headshot.png"
                    alt="Atikur Rahman"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.retried) {
                        e.currentTarget.dataset.retried = '1'
                        e.currentTarget.src = '/creator_avatar.png'
                      } else if (e.currentTarget.dataset.retried === '1') {
                        e.currentTarget.dataset.retried = '2'
                        e.currentTarget.src = 'https://github.com/atikurrahmanxm.png'
                      }
                    }}
                  />
                </div>
              </div>

              {/* Verified Creator Badge */}
              <div
                className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-lg border-2 border-white shadow-md flex items-center justify-center"
                title="Verified Creator"
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Atikur Rahman
            </h3>

            {/* Creator Title Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mt-1 shadow-2xs">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Lead Developer & Creator of TypeLingo</span>
            </div>

            {/* Developer Bio in English */}
            <p className="text-xs sm:text-[13px] text-slate-600 mt-2.5 max-w-md mx-auto leading-relaxed">
              Full-Stack Developer passionate about crafting high-performance, user-centric web applications. Built <strong className="text-slate-800 font-bold">TypeLingo Zone</strong> to elevate English pronunciation, active listening, and high-speed typing into an intuitive daily practice.
            </p>

            {/* Action Links: Portfolio Website & LinkedIn */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3.5">
              <a
                href="https://atikurrahmanxm.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-indigo-500/25 cursor-pointer active:scale-95"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-200" />
                <span>Portfolio Website</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>

              <a
                href="https://www.linkedin.com/in/atikurrahmanxm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold rounded-xl transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-95"
              >
                <LinkedinIcon className="w-3.5 h-3.5 fill-white" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>
            </div>
            {/* Feature Highlights of the Platform */}
            <div className="pt-3.5 pb-2 space-y-2 text-left border-t border-slate-100 mt-4">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
                CORE PLATFORM HIGHLIGHTS
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {/* Card 1 */}
                <div className="p-2.5 bg-slate-50/90 rounded-2xl border border-slate-200/70 flex items-start gap-2.5 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="p-1.5 rounded-xl bg-emerald-100/90 text-emerald-700 shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900 text-xs">
                      3,000+ Practical Exercises
                    </strong>
                    <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">
                      17 structured categories covering everyday grammar & conversation.
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-2.5 bg-slate-50/90 rounded-2xl border border-slate-200/70 flex items-start gap-2.5 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="p-1.5 rounded-xl bg-indigo-100/90 text-indigo-700 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900 text-xs">
                      Smart Queue Engine
                    </strong>
                    <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">
                      Intelligent algorithm ensuring fresh, non-repeating sentences.
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-2.5 bg-slate-50/90 rounded-2xl border border-slate-200/70 flex items-start gap-2.5 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="p-1.5 rounded-xl bg-amber-100/90 text-amber-700 shrink-0 mt-0.5">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900 text-xs">
                      Daily Streaks & Goals
                    </strong>
                    <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">
                      Gamified 10-sentence challenges with streak tracking.
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="p-2.5 bg-slate-50/90 rounded-2xl border border-slate-200/70 flex items-start gap-2.5 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="p-1.5 rounded-xl bg-purple-100/90 text-purple-700 shrink-0 mt-0.5">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900 text-xs">
                      Real-Time Speed Analytics
                    </strong>
                    <span className="text-slate-500 text-[11px] leading-tight block mt-0.5">
                      Live WPM, keystroke accuracy, and instant feedback.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Note & Action */}
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <span>Developed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <a
              href="https://atikurrahmanxm.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-bold hover:underline"
            >
              Atikur Rahman
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow-indigo-500/20 transition-all active:scale-95 cursor-pointer"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  )
}
