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

  // Parse words with their punctuation preserved
  const targetWords = targetSentence.trim().split(/\s+/)

  return (
    <div
      onClick={handleClickArea}
      className="w-full max-w-5xl mx-auto my-2 sm:my-4 flex flex-col items-center justify-center cursor-text select-none"
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

          if (e.key === 'Enter') {
            e.preventDefault()
            onCharacterInput(' ') // triggers space / completion logic
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
      <div className="flex flex-wrap items-end justify-center gap-x-4 sm:gap-x-6 md:gap-x-7 gap-y-2 sm:gap-y-3 py-1 sm:py-2 px-2 sm:px-4 min-h-[56px] sm:min-h-[64px]">
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
              className={`flex items-center gap-[4px] sm:gap-[6px] pb-1 border-b-[3px] transition-all duration-150 ${
                isWordActive
                  ? 'border-indigo-600 bg-indigo-50/50 px-1.5 sm:px-2 rounded-t-lg shadow-2xs'
                  : isWordCompleted
                  ? 'border-emerald-500 bg-emerald-50/25 px-1.5 sm:px-2 rounded-t-lg'
                  : 'border-slate-300 px-1.5'
              }`}
            >
              {word.split('').map((char, charIdx) => {
                const charAbsoluteIndex = wordStartIndex + charIdx
                const isCharTyped = charAbsoluteIndex < currentTyped.length
                const typedChar = isCharTyped ? currentTyped[charAbsoluteIndex] : null
                const isCharCurrent = charAbsoluteIndex === currentTyped.length
                const isPunctuation = /[.,?!]/.test(char)

                return (
                  <span
                    key={charIdx}
                    className={`relative inline-flex items-center justify-center ${
                      isPunctuation ? 'min-w-[14px] sm:min-w-[18px] md:min-w-[22px]' : 'min-w-[18px] sm:min-w-[24px] md:min-w-[28px]'
                    } h-10 sm:h-12 md:h-14 text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans transition-all ${
                      isCharTyped
                        ? 'text-slate-900'
                        : isCharCurrent && isWordActive
                        ? isPunctuation ? 'text-indigo-600' : 'text-slate-400'
                        : isPunctuation ? 'text-indigo-400/80' : 'text-slate-300'
                    }`}
                  >
                    {/* Blinking cursor */}
                    {isCharCurrent && !isCompleted && (
                      <span className="absolute -top-1 bottom-1 w-[2.5px] sm:w-[3px] bg-indigo-600 rounded-full animate-cursor" />
                    )}

                    {/* Character or ghost punctuation mark */}
                    {isCharTyped ? (
                      typedChar
                    ) : isPunctuation ? (
                      <span className={`font-black ${char === '?' ? 'text-amber-500 font-sans' : 'text-indigo-400'}`}>
                        {char}
                      </span>
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
      </div>
    </div>
  )
}
