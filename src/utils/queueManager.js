// Smart Non-Repeating Random Queue Engine for YouType
// Ensures sentences appear randomly, avoids repeating recent sentences,
// and supports seamless infinite automated practice.

const STORAGE_SEEN_KEY = 'youtype_seen_exercise_ids'

// Retrieve seen IDs from localStorage
export function getSeenExerciseIds() {
  try {
    const data = localStorage.getItem(STORAGE_SEEN_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    return []
  }
}

// Save seen IDs to localStorage
export function markExerciseCompleted(id) {
  if (!id) return
  try {
    const seen = getSeenExerciseIds()
    if (!seen.includes(id)) {
      seen.push(id)
      localStorage.setItem(STORAGE_SEEN_KEY, JSON.stringify(seen))
    }
  } catch (e) {}
}

// Reset history if user wants a complete fresh start
export function resetExerciseHistory() {
  try {
    localStorage.removeItem(STORAGE_SEEN_KEY)
  } catch (e) {}
}

export function getCompletedCount() {
  return getSeenExerciseIds().length
}

// Modern Fisher-Yates array shuffle
export function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Generate a smart queue from all exercises:
 * 1. Prioritize unseen exercises so the user always practices new sentences.
 * 2. If all sentences have been practiced, reset history (keeping last 5 to prevent immediate replay).
 * 3. Shuffles the unseen sentences, ensuring high variety across Present, Past, Future, Modals, etc.
 */
export function generateSmartQueue(allExercises = []) {
  if (!allExercises || allExercises.length === 0) return []

  const seenIds = new Set(getSeenExerciseIds())
  const unseen = allExercises.filter((ex) => !seenIds.has(ex.id))
  const seen = allExercises.filter((ex) => seenIds.has(ex.id))

  // If user has seen all (or 95% of) exercises, start a fresh cycle
  if (unseen.length === 0) {
    const recent = getSeenExerciseIds().slice(-6)
    try {
      localStorage.setItem(STORAGE_SEEN_KEY, JSON.stringify(recent))
    } catch (e) {}

    const freshUnseen = allExercises.filter((ex) => !recent.includes(ex.id))
    const freshSeen = allExercises.filter((ex) => recent.includes(ex.id))
    return [...shuffleArray(freshUnseen), ...shuffleArray(freshSeen)]
  }

  // Shuffle unseen first, then append seen in shuffled order
  return [...shuffleArray(unseen), ...shuffleArray(seen)]
}
