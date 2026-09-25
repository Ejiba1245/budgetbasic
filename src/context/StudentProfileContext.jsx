import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { createStudentId, isValidEmail, normaliseEmail, readStudentProfile, writeStudentProfile } from '../utils/studentProfile'

const StudentProfileContext = createContext(null)

export function StudentProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => readStudentProfile())

  const createProfile = useCallback(({ name, email }) => {
    const cleanName = name.trim()
    const cleanEmail = normaliseEmail(email)
    if (!cleanName) return { error: 'Enter your first name.' }
    if (!isValidEmail(cleanEmail)) return { error: 'Enter a valid email address.' }
    const existing = readStudentProfile()
    if (existing?.email === cleanEmail) return { error: 'A local profile already exists with that email. Try signing in instead.' }
    const nextProfile = { id: createStudentId(), name: cleanName, email: cleanEmail, createdAt: new Date().toISOString(), lastSignedInAt: new Date().toISOString(), signedIn: true }
    if (!writeStudentProfile(nextProfile)) return { error: 'This browser could not save a local profile. Check storage permissions and try again.' }
    setProfile(nextProfile)
    return { success: true }
  }, [])

  const signIn = useCallback((email) => {
    const cleanEmail = normaliseEmail(email)
    if (!isValidEmail(cleanEmail)) return { error: 'Enter a valid email address.' }
    const existing = readStudentProfile()
    if (!existing || existing.email !== cleanEmail) return { error: "We couldn't find a local BudgetBee profile with that email." }
    const nextProfile = { ...existing, lastSignedInAt: new Date().toISOString(), signedIn: true }
    if (!writeStudentProfile(nextProfile)) return { error: 'This browser could not update the local profile.' }
    setProfile(nextProfile)
    return { success: true }
  }, [])

  const signOut = useCallback(() => {
    const existing = readStudentProfile()
    if (existing) {
      const nextProfile = { ...existing, signedIn: false }
      writeStudentProfile(nextProfile)
      setProfile(nextProfile)
    }
  }, [])

  const refreshProfile = useCallback(() => setProfile(readStudentProfile()), [])
  const value = useMemo(() => ({ currentStudent: profile?.signedIn ? profile : null, storedProfile: profile, isSignedIn: Boolean(profile?.signedIn), createProfile, signIn, signOut, refreshProfile }), [profile, createProfile, signIn, signOut, refreshProfile])

  return <StudentProfileContext.Provider value={value}>{children}</StudentProfileContext.Provider>
}

// The hook is intentionally colocated with its provider's context definition.
// eslint-disable-next-line react-refresh/only-export-components
export function useStudentProfile() {
  const context = useContext(StudentProfileContext)
  if (!context) throw new Error('useStudentProfile must be used inside StudentProfileProvider')
  return context
}
