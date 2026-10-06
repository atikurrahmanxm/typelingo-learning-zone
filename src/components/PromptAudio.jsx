import React from 'react'

export function PromptAudio({ isSpeaking, onReplay, feedbackMessage }) {
  const baseHeights = [10, 18, 26, 34, 40, 34, 26, 18, 10]

  return (
    <div className="flex flex-col items-center justify-center my-3 sm:my-5 text-center select-none">
      {/* Orange/Coral Audio Equalizer Waveform */}
      <button
        type="button"
        onClick={onReplay}
        className="group p-2 flex items-center justify-center gap-1.5 focus:outline-none rounded-2xl hover:bg-orange-50/60 transition-colors"
        title="Click to replay audio (Shortcut: Tab)"
      >
        <div className="flex items-center gap-[4px] sm:gap-[5px] h-10 px-2">
          {baseHeights.map((h, i) => (
            <span
              key={i}
              className="w-[4px] sm:w-[5px] rounded-full bg-[#FF6B4A] transition-all duration-150 group-hover:scale-y-110"
              style={{
                height: isSpeaking ? undefined : `${h}px`,
                animation: isSpeaking ? `equalizer 0.7s ease-in-out infinite alternate` : 'none',
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
      </button>

      {/* Main Instruction Text matching video */}
      <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-slate-700 tracking-tight mt-1">
        Listen and write what you hear
      </h3>

      {/* Floating feedback alert */}
      {feedbackMessage && (
        <div className="mt-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full animate-pop-in">
          {feedbackMessage}
        </div>
      )}
    </div>
  )
}
