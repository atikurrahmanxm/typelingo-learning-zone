// Smart Non-Repeating Paragraph & Sentence Queue for Score / Speed Test
// Ensures 130+ diverse passages are delivered without annoying repetitions.
import { SPEED_PARAGRAPHS, SPEED_SENTENCES_POOL } from '../data/speedTestParagraphs'

const STORAGE_SEEN_PARAS_KEY = 'typelingo_speed_seen_paras'
const STORAGE_SEEN_SENTENCES_KEY = 'typelingo_speed_seen_sentences'

// Fisher-Yates array shuffle
export function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Retrieve seen paragraph IDs from localStorage
export function getSeenParagraphIds() {
  try {
    const raw = localStorage.getItem(STORAGE_SEEN_PARAS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

// Save seen paragraph ID
export function markParagraphSeen(id) {
  if (!id) return
  try {
    const seen = getSeenParagraphIds()
    if (!seen.includes(id)) {
      seen.push(id)
      localStorage.setItem(STORAGE_SEEN_PARAS_KEY, JSON.stringify(seen))
    }
  } catch (e) {}
}

// Retrieve seen sentence indices
export function getSeenSentenceIndices() {
  try {
    const raw = localStorage.getItem(STORAGE_SEEN_SENTENCES_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

export function markSentenceSeen(idx) {
  try {
    const seen = getSeenSentenceIndices()
    if (!seen.includes(idx)) {
      seen.push(idx)
      localStorage.setItem(STORAGE_SEEN_SENTENCES_KEY, JSON.stringify(seen))
    }
  } catch (e) {}
}

/**
 * Get next fresh, unrepeated paragraph
 * @param {Array<string>} activeIds - IDs already queued in the current active test
 */
export function getNextParagraph(activeIds = []) {
  const seenIds = new Set(getSeenParagraphIds())
  const activeSet = new Set(activeIds)

  // 1. Filter paragraphs that are not currently active and have not been seen
  let unseen = SPEED_PARAGRAPHS.filter(
    (p) => !activeSet.has(p.id) && !seenIds.has(p.id)
  )

  // 2. If all 130+ have been seen, recycle while protecting recent ones
  if (unseen.length === 0) {
    const recent = getSeenParagraphIds().slice(-10)
    // Clear old history in localStorage, keeping only the most recent 5
    try {
      localStorage.setItem(
        STORAGE_SEEN_PARAS_KEY,
        JSON.stringify(recent.slice(-5))
      )
    } catch (e) {}

    unseen = SPEED_PARAGRAPHS.filter(
      (p) => !activeSet.has(p.id) && !recent.includes(p.id)
    )

    // Fallback if still empty
    if (unseen.length === 0) {
      unseen = SPEED_PARAGRAPHS.filter((p) => !activeSet.has(p.id))
    }
  }

  // Shuffle candidate pool and pick the top one
  const shuffled = shuffle(unseen)
  return shuffled[0] || SPEED_PARAGRAPHS[0]
}

/**
 * Build initial word list for the speed test:
 * Supports 'paragraphs', 'sentences', and 'words'
 */
export function generateTestContent(mode = 'paragraphs', minWordCount = 120, speedWordsPool = []) {
  if (mode === 'paragraphs') {
    const nextPara = getNextParagraph([])
    const words = nextPara.text.trim().split(/\s+/)

    return {
      words,
      paragraphs: [nextPara],
      primaryParagraph: nextPara,
    }
  }

  if (mode === 'sentences') {
    const seenIndices = new Set(getSeenSentenceIndices())
    let unseenIndices = SPEED_SENTENCES_POOL.map((_, idx) => idx).filter(
      (idx) => !seenIndices.has(idx)
    )

    if (unseenIndices.length < 5) {
      // Recycle
      try {
        localStorage.setItem(STORAGE_SEEN_SENTENCES_KEY, JSON.stringify([]))
      } catch (e) {}
      unseenIndices = SPEED_SENTENCES_POOL.map((_, idx) => idx)
    }

    const shuffled = shuffle(unseenIndices)
    const words = []
    const usedIndices = []

    for (const idx of shuffled) {
      if (words.length >= minWordCount) break
      usedIndices.push(idx)
      markSentenceSeen(idx)
      const sWords = SPEED_SENTENCES_POOL[idx].trim().split(/\s+/)
      for (const w of sWords) {
        words.push(w)
      }
    }

    return {
      words,
      paragraphs: [],
      primaryParagraph: null,
    }
  }

  // mode === 'words'
  const words = []
  const pool = speedWordsPool.length > 0 ? speedWordsPool : ['the', 'quick', 'brown', 'fox']
  while (words.length < minWordCount) {
    const shuffled = shuffle(pool)
    for (const w of shuffled) {
      if (words.length >= minWordCount) break
      words.push(w)
    }
  }

  return {
    words,
    paragraphs: [],
    primaryParagraph: null,
  }
}
