// High-Fidelity Audio Engine for YouType

let currentAudioInstance = null
let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

// Ensure audio context is ready on first user interaction
export function unlockAudio() {
  const ctx = getAudioContext()
  if (ctx && ctx.state === 'suspended') {
    ctx.resume()
  }
}

// 1. Play natural human voice for the sentence
export function playSentenceVoice(audioUrl, sentenceText, isSlow = false, onStart, onEnd) {
  // Stop any currently playing audio
  stopSentenceVoice()
  unlockAudio()

  let resolvedSrc = audioUrl

  // If no static audio url provided or custom text, use dynamic edge-tts API
  if (!resolvedSrc && sentenceText) {
    const rateParam = isSlow ? 'slow' : 'normal'
    resolvedSrc = `/api/tts?text=${encodeURIComponent(sentenceText)}&rate=${rateParam}`
  }

  if (resolvedSrc) {
    const audio = new Audio(resolvedSrc)
    currentAudioInstance = audio
    audio.volume = 0.85 // Comfortable, warm volume (not loud or piercing)
    audio.preload = 'auto'

    if (isSlow) {
      audio.playbackRate = 0.75
    }

    audio.onplay = () => {
      if (onStart) onStart()
    }

    audio.onended = () => {
      currentAudioInstance = null
      if (onEnd) onEnd()
    }

    audio.onerror = () => {
      // Fallback to browser Web Speech API if audio element fails
      currentAudioInstance = null
      fallbackBrowserSpeech(sentenceText, isSlow, onStart, onEnd)
    }

    audio.play().catch((err) => {
      console.warn('Audio play prevented or interrupted:', err)
      fallbackBrowserSpeech(sentenceText, isSlow, onStart, onEnd)
    })
  } else {
    fallbackBrowserSpeech(sentenceText, isSlow, onStart, onEnd)
  }
}

// Fallback browser speech synthesis with ultra-soft, natural human tone
function fallbackBrowserSpeech(text, isSlow, onStart, onEnd) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd()
    return
  }

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  // Calm, gentle conversational pacing and warm pitch
  utterance.rate = isSlow ? 0.72 : 0.92
  utterance.pitch = 0.96
  utterance.volume = 0.82
  utterance.lang = 'en-US'

  const voices = window.speechSynthesis.getVoices()
  // Prioritize modern, soft neural and natural voices
  const naturalSoftVoice = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      (v.name.includes('Ava') ||
        v.name.includes('Jenny') ||
        v.name.includes('Natural') ||
        v.name.includes('Neural') ||
        v.name.includes('Online') ||
        v.name.includes('Aria') ||
        v.name.includes('Google US English') ||
        v.name.includes('Samantha') ||
        v.name.includes('Victoria'))
  ) || voices.find((v) => v.lang.startsWith('en') && !v.name.toLowerCase().includes('desktop'))
    || voices.find((v) => v.lang.startsWith('en'))

  if (naturalSoftVoice) {
    utterance.voice = naturalSoftVoice
  }

  if (onStart) utterance.onstart = onStart
  if (onEnd) utterance.onend = onEnd
  utterance.onerror = () => {
    if (onEnd) onEnd()
  }

  window.speechSynthesis.speak(utterance)
}

// Stop any active sentence voice
export function stopSentenceVoice() {
  if (currentAudioInstance) {
    currentAudioInstance.pause()
    currentAudioInstance.currentTime = 0
    currentAudioInstance = null
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

// 2. Soft, tactile key click sound
export function playKeySound(isMuted = false) {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  try {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    const freq = 320 + Math.random() * 50
    osc.frequency.setValueAtTime(freq, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.035)

    // Soft mechanical click
    gain.gain.setValueAtTime(0.045, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.035)
  } catch (e) {
    // ignore
  }
}

// 3. Gentle error tap (gentle sine bump instead of harsh sawtooth buzz)
export function playErrorSound(isMuted = false) {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  try {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    // Soft sine wave instead of harsh buzz
    osc.type = 'sine'
    osc.frequency.setValueAtTime(180, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.09)

    gain.gain.setValueAtTime(0.035, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.09)
  } catch (e) {
    // ignore
  }
}

// 4. Word success tone
export function playWordSuccess(isMuted = false) {
  if (isMuted) return
  const ctx = getAudioContext()
  if (!ctx) return

  try {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(659.25, ctx.currentTime) // E5
    gain.gain.setValueAtTime(0.04, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.12)
  } catch (e) {
    // ignore
  }
}

// 5. Success chime (plays original MP3 from video)
export function playExerciseSuccess(isMuted = false) {
  if (isMuted) return
  try {
    const chime = new Audio('/audio/success_chime.mp3')
    chime.volume = 0.8
    chime.play().catch(() => {
      // fallback synth
    })
  } catch (e) {
    // ignore
  }
}

// 6. Celebration fanfare (plays original fanfare from video)
export function playCelebrationSound(isMuted = false) {
  if (isMuted) return
  try {
    const fanfare = new Audio('/audio/celebration.mp3')
    fanfare.volume = 0.85
    fanfare.play().catch(() => {
      // fallback
    })
  } catch (e) {
    // ignore
  }
}
