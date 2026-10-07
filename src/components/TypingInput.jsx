import React, { useRef, useEffect } from 'react'

export function TypingInput({
  targetSentence,
  currentTyped,
  onCharacterInput,
  onBackspace,
  hasError,
  isCompleted,
}) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [targetSentence])

  const handleClickArea = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Parse words cleanly
  const targetWords = targetSentence.trim().replace(/[.,?!]/g, '').split(/\s+/)

  return (
    <div
      onClick={handleClickArea}
      className="w-full max-w-4xl mx-auto my-4 sm:my-6 flex flex-col items-center justify-center cursor-text select-none"
    >
      {/* Hidden input to receive keyboard events */}
      <input
        ref={inputRef}
        type="text"
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        value={currentTyped}
        onChange={() => {}}
        onKeyDown={(e) => {
          if (isCompleted) return

          if (e.key === 'Backspace') {
            e.preventDefault()
            onBackspace()
            return
          }

          if (e.key === 'Tab') {
            return
          }

          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault()
            onCharacterInput(e.key)
          }
        }}
        className="absolute opacity-0 pointer-events-none w-0 h-0"
      />

      {/* 
        Clear, Big & Distinct Word-by-Word Slots with Underlines:
        Scales up smoothly on desktop displays (1080p, 2K, 4K)
      */}
      <div className="flex flex-wrap items-end justify-center gap-x-5 sm:gap-x-8 md:gap-x-10 gap-y-3 sm:gap-y-4 py-2 sm:py-3 px-2 sm:px-4 min-h-[64px] sm:min-h-[80px]">
        {targetWords.map((word, wordIndex) => {
          const prevWords = targetWords.slice(0, wordIndex)
          const wordStartIndex = prevWords.length > 0 ? prevWords.join(' ').length + 1 : 0
          const wordEndIndex = wordStartIndex + word.length

          const currentTypedLength = currentTyped.length
          const isWordCompleted = currentTypedLength >= wordEndIndex
          const isWordActive = currentTypedLength >= wordStartIndex && currentTypedLength < wordEndIndex

          return (
            <div
              key={wordIndex}
              className={`flex items-center gap-[6px] sm:gap-[9px] pb-1 border-b-[3px] sm:border-b-4 transition-all duration-150 ${
                isWordActive
                  ? 'border-indigo-600 bg-indigo-50/50 px-2 sm:px-2.5 rounded-t-lg shadow-2xs'
                  : isWordCompleted
                  ? 'border-emerald-500 bg-emerald-50/25 px-2 sm:px-2.5 rounded-t-lg'
                  : 'border-slate-300 px-2'
              }`}
            >
              {word.split('').map((char, charIdx) => {
                const charAbsoluteIndex = wordStartIndex + charIdx
                const isCharTyped = charAbsoluteIndex < currentTyped.length
                const typedChar = isCharTyped ? currentTyped[charAbsoluteIndex] : null
                const isCharCurrent = charAbsoluteIndex === currentTyped.length

                return (
                  <span
                    key={charIdx}
                    className={`relative inline-flex items-center justify-center min-w-[22px] sm:min-w-[30px] md:min-w-[36px] h-12 sm:h-14 md:h-16 text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans transition-all ${
                      isCharTyped
                        ? 'text-slate-900'
                        : isCharCurrent && isWordActive
                        ? 'text-slate-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {/* Blinking cursor */}
                    {isCharCurrent && !isCompleted && (
                      <span className="absolute -top-1 bottom-1 w-[3px] sm:w-[3.5px] bg-indigo-600 rounded-full animate-cursor" />
                    )}

                    {/* Character or light underline dash */}
                    {isCharTyped ? (
                      typedChar
                    ) : (
                      <span className="text-slate-300 font-normal">
                        _
                      </span>
                    )}
                  </span>
                )
              })}
            </div>
          )
        })}

        {/* Punctuation dot */}
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 pb-1">.</span>
      </div>

      {/* Helper text */}
      <p className="text-xs sm:text-sm text-slate-400 text-center mt-3 tracking-normal">
        Space: next word, or submit when all words are filled. Punctuation is optional.
      </p>
    </div>
  )
}
