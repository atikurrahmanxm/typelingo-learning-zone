import React from 'react'

export function PromptAudio({ isSpeaking, onReplay, feedbackMessage }) {
  const baseHeights = [10, 18, 26, 34, 40, 34, 26, 18, 10]

  return (
    <div className="flex flex-col items-center justify-center my-3 sm:my-5 text-center select-none">
      {/* Sleek Royal Indigo Audio Equalizer Waveform */}
      <button
        type="button"
        onClick={onReplay}
        className="group p-2 flex items-center justify-center gap-1.5 focus:outline-none rounded-2xl hover:bg-indigo-50/70 transition-all duration-200"
        title="Click to replay audio (Shortcut: Tab)"
      >
        <div className="flex items-center gap-[4px] sm:gap-[5px] h-10 px-2.5 py-1 rounded-xl group-hover:scale-105 transition-transform">
          {baseHeights.map((h, i) => (
            <span
              key={i}
              className={`w-[4px] sm:w-[5px] rounded-full transition-all duration-150 ${
                isSpeaking
                  ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]'
                  : 'bg-indigo-500/80 group-hover:bg-indigo-600'
              }`}
              style={{
                height: isSpeaking ? undefined : `${h}px`,
                animation: isSpeaking ? `equalizer 0.7s ease-in-out infinite alternate` : 'none',
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
      </button>

      {/* Main Instruction Text matching cohesive typography */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-700 tracking-tight mt-1">
        Listen and write what you hear
      </h3>

      {/* Floating feedback alert */}
      {feedbackMessage && (
        <div className="mt-2 text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 rounded-full animate-pop-in shadow-2xs">
          {feedbackMessage}
        </div>
      )}
    </div>
  )
}
