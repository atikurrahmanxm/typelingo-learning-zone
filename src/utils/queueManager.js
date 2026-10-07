// Smart Non-Repeating Random Queue Engine & Streak System for TypeLingo Zone
// Built by Atikur Rahman

const STORAGE_SEEN_KEY = 'youtype_seen_exercise_ids'
const STORAGE_STREAK_KEY = 'youtype_streak_tracker'

// Helper: Get today's local date in YYYY-MM-DD
export function getTodayDateString() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Retrieve seen IDs from localStorage
export function getSeenExerciseIds() {
  try {
    const data = localStorage.getItem(STORAGE_SEEN_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    return []
  }
}

// Save seen IDs to localStorage & record daily activity
export function markExerciseCompleted(id) {
  if (!id) return
  try {
    const seen = getSeenExerciseIds()
    if (!seen.includes(id)) {
      seen.push(id)
      localStorage.setItem(STORAGE_SEEN_KEY, JSON.stringify(seen))
    }
    recordDailyStreak()
  } catch (e) {}
}

// Streak Tracker Manager
export function getStreakData() {
  try {
    const raw = localStorage.getItem(STORAGE_STREAK_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        streak: parsed.streak || 0,
        lastDate: parsed.lastDate || '',
        todayCount: parsed.lastDate === getTodayDateString() ? (parsed.todayCount || 0) : 0,
        totalCompleted: getSeenExerciseIds().length,
      }
    }
  } catch (e) {}

  return {
    streak: 0,
    lastDate: '',
    todayCount: 0,
    totalCompleted: getSeenExerciseIds().length,
  }
}

export function recordDailyStreak() {
  try {
    const today = getTodayDateString()
    const current = getStreakData()

    if (current.lastDate === today) {
      // Already practiced today, increment today's count
      const updated = {
        streak: Math.max(1, current.streak),
        lastDate: today,
        todayCount: current.todayCount + 1,
      }
      localStorage.setItem(STORAGE_STREAK_KEY, JSON.stringify(updated))
      return updated
    }

    // Check if practiced yesterday (consecutive day)
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`

    let newStreak = 1
    if (current.lastDate === yesterdayStr) {
      newStreak = (current.streak || 0) + 1
    }

    const updated = {
      streak: newStreak,
      lastDate: today,
      todayCount: 1,
    }
    localStorage.setItem(STORAGE_STREAK_KEY, JSON.stringify(updated))
    return updated
  } catch (e) {
    return { streak: 1, lastDate: getTodayDateString(), todayCount: 1 }
  }
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
 * Deterministic PRNG seeded by today's date string
 * Guarantees every user worldwide gets the same curated 10 sentences for today's quest!
 */
export function getDailyChallengeQueue(allExercises = []) {
  if (!allExercises || allExercises.length === 0) return []

  const dateStr = getTodayDateString()
  let seed = 0
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i)) & 0xffffffff
  }

  // Linear Congruential Generator
  const lcg = () => {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff
    return (seed >>> 0) / 4294967296
  }

  const pool = [...allExercises]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(lcg() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }

  return pool.slice(0, 10)
}

/**
 * Generate a smart queue from all exercises:
 * 1. Filter by category if specified (or 'all').
 * 2. Prioritize unseen exercises so the user always practices new sentences.
 * 3. Never repeat recent sentences across practice sessions.
 * 4. Shuffles unseen sentences, ensuring fresh variety.
 */
export function generateSmartQueue(allExercises = [], category = 'all') {
  if (!allExercises || allExercises.length === 0) return []

  // If daily challenge mode
  if (category === 'daily-challenge') {
    return getDailyChallengeQueue(allExercises)
  }

  // Filter pool by category if not 'all'
  let targetPool = allExercises
  if (category && category !== 'all') {
    targetPool = allExercises.filter((ex) => ex.category === category)
    if (targetPool.length === 0) {
      targetPool = allExercises
    }
  }

  const seenIds = new Set(getSeenExerciseIds())
  const unseen = targetPool.filter((ex) => !seenIds.has(ex.id))
  const seen = targetPool.filter((ex) => seenIds.has(ex.id))

  // If user has seen all exercises in this category/pool, reset history for this pool
  if (unseen.length === 0) {
    const recent = getSeenExerciseIds().slice(-10)
    const freshUnseen = targetPool.filter((ex) => !recent.includes(ex.id))
    const freshSeen = targetPool.filter((ex) => recent.includes(ex.id))
    return [...shuffleArray(freshUnseen), ...shuffleArray(freshSeen)]
  }

  // Shuffle unseen first, then append seen in shuffled order
  return [...shuffleArray(unseen), ...shuffleArray(seen)]
}
