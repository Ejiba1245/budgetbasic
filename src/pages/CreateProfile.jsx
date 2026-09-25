import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { EducationalImage } from '../components/ui/EducationalImage'
import { useStudentProfile } from '../hooks/useStudentProfile'

export function CreateProfile() {
  const navigate = useNavigate()
  const { createProfile } = useStudentProfile()
  const [form, setForm] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    const result = createProfile(form)
    if (result.error) setError(result.error)
    else navigate('/student-dashboard')
  }

  return <PageContainer className="profile-page"><div className="profile-layout"><section className="profile-form-column"><span className="lesson-eyebrow">A local learner profile</span><h1>Create your BudgetBee profile</h1><p className="profile-intro">Save your name on this browser so you can return to your learning home more easily. This is not a secure account and no password is collected.</p><form className="profile-form" onSubmit={submit} noValidate>{error && <p className="profile-error" role="alert">{error}</p>}<div className="profile-field"><label htmlFor="profile-name">First name</label><input id="profile-name" name="name" value={form.name} onChange={update('name')} autoComplete="given-name" required /></div><div className="profile-field"><label htmlFor="profile-email">Email address</label><input id="profile-email" name="email" type="email" value={form.email} onChange={update('email')} autoComplete="email" required /><small>Used only to recognise this local profile on this browser.</small></div><button className="profile-primary-button" type="submit">Create Profile</button></form><p className="profile-switch">Already have a local profile? <Link to="/signin">Sign in</Link></p></section><aside className="profile-visual"><EducationalImage asset="student-budget-planning.jpg" alt="Student planning a budget at a desk with a laptop and notebook." className="profile-visual-image" /><div><span className="lesson-eyebrow">Keep learning</span><p>Explore every lesson without creating a profile. The profile simply gives you a familiar place to return to.</p></div></aside></div></PageContainer>
}
