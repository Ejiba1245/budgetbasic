import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { EducationalImage } from '../components/ui/EducationalImage'
import { useStudentProfile } from '../hooks/useStudentProfile'

export function SignIn() {
  const navigate = useNavigate()
  const { signIn } = useStudentProfile()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const submit = (event) => { event.preventDefault(); const result = signIn(email); if (result.error) setError(result.error); else navigate('/student-dashboard') }
  return <PageContainer className="profile-page"><div className="profile-layout"><section className="profile-form-column"><span className="lesson-eyebrow">Welcome back</span><h1>Continue your learning journey.</h1><p className="profile-intro">Pick up where you left off and keep building better money habits. BudgetBee profiles are stored locally on this browser.</p><form className="profile-form" onSubmit={submit} noValidate>{error && <p className="profile-error" role="alert">{error}</p>}<div className="profile-field"><label htmlFor="signin-email">Email address</label><input id="signin-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setError('') }} autoComplete="email" required /></div><button className="profile-primary-button" type="submit">Sign In</button></form><p className="profile-switch">New to BudgetBee? <Link to="/create-profile">Create a local profile</Link></p></section><aside className="profile-visual"><EducationalImage asset="budgeting-basics.png" alt="Illustration representing a student organising a budget." className="profile-visual-image" /><div><span className="lesson-eyebrow">Educational first</span><p>All lessons and tools remain available without signing in.</p></div></aside></div></PageContainer>
}
