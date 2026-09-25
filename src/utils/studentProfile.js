export const STUDENT_PROFILE_KEY = 'budgetbee_student_profile'

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function readStudentProfile() {
  if (!canUseStorage()) return null
  try {
    const stored = window.localStorage.getItem(STUDENT_PROFILE_KEY)
    if (!stored) return null
    const profile = JSON.parse(stored)
    if (!profile || typeof profile !== 'object' || typeof profile.name !== 'string' || typeof profile.email !== 'string') return null
    return profile
  } catch {
    return null
  }
}

export function writeStudentProfile(profile) {
  if (!canUseStorage()) return false
  try {
    window.localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile))
    return true
  } catch {
    return false
  }
}

export function createStudentId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `student-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function normaliseEmail(email) {
  return email.trim().toLowerCase()
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
