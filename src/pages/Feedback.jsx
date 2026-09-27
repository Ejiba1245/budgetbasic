import { useState } from 'react'
import { PageContainer } from '../components/layout/PageContainer'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { FormField, Input, Textarea } from '../components/ui/FormControls'
import { RatingInput } from '../components/ui/RatingInput'

const ratingDescriptions = {
  1: 'Needs improvement',
  2: 'Fair',
  3: 'Good',
  4: 'Very good',
  5: 'Excellent',
}

const initialForm = {
  name: '',
  email: '',
  rating: '',
  comments: '',
}

const FEEDBACK_RECIPIENT_EMAIL = 'brightejiba@gmail.com'
const MAX_COMMENT_LENGTH = 1000
const MIN_COMMENT_LENGTH = 5
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateFeedback(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const comments = values.comments.trim()

  if (!name) errors.name = 'Please enter your name.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address, for example name@school.edu.'

  if (!values.rating) errors.rating = 'Please select a rating between 1 and 5.'

  if (!comments) errors.comments = 'Please enter your comments or suggestions.'
  else if (comments.length < MIN_COMMENT_LENGTH) errors.comments = `Please share at least ${MIN_COMMENT_LENGTH} characters of feedback.`

  return errors
}

function buildMailtoUrl({ name, email, rating, comments }) {
  const subject = `BudgetBasics Feedback from ${name}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Rating: ${rating}/5 — ${ratingDescriptions[rating] ?? rating}`,
    '',
    'Comments:',
    comments,
    '',
    'Composed in the BudgetBasics feedback form and sent from the visitor’s own email client.',
  ].join('\n')

  return `mailto:${FEEDBACK_RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Feedback() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [draft, setDraft] = useState(null)

  const handleChange = (field) => (event) => {
    const value = event?.target ? event.target.value : event
    setForm((previous) => ({ ...previous, [field]: value }))
    if (errors[field]) {
      setErrors((previous) => {
        const updated = { ...previous }
        delete updated[field]
        return updated
      })
    }
  }

  const handleBlur = (field) => () => {
    setTouched((previous) => ({ ...previous, [field]: true }))
    const validationErrors = validateFeedback(form)
    if (validationErrors[field]) {
      setErrors((previous) => ({ ...previous, [field]: validationErrors[field] }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched({ name: true, email: true, rating: true, comments: true })
    const validationErrors = validateFeedback(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setDraft({
      name: form.name.trim(),
      email: form.email.trim(),
      rating: Number(form.rating),
      comments: form.comments.trim(),
    })
    setForm(initialForm)
  }

  const handleReset = () => {
    setDraft(null)
    setForm(initialForm)
    setErrors({})
    setTouched({})
  }

  return (
    <PageContainer className="information-page feedback-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Feedback' }]} />

      <header className="feedback-page-header">
        <span className="lesson-eyebrow">Learner Feedback</span>
        <h1>Help Us Improve BudgetBasics</h1>
        <p className="information-lead">
          Learner feedback helps refine the lessons, tools and overall educational experience. This
          project has no server, so the form composes your message and hands it to your own email
          client. Nothing is uploaded, stored or transmitted by this website.
        </p>
      </header>

      <div className="feedback-layout">
        <div className="feedback-form-panel">
          {draft ? (
            <div className="feedback-success" role="status" aria-live="polite">
              <div className="feedback-success-header">
                <span className="material-symbols-outlined feedback-success-icon" aria-hidden="true">
                  check_circle
                </span>
                <h2>Your feedback is ready to send.</h2>
              </div>
              <p>
                This page has validated your entry and prepared an email. Choose the button below to
                open your email client. BudgetBasics itself has not sent or stored anything — the
                message only reaches {FEEDBACK_RECIPIENT_EMAIL} if you send it yourself.
              </p>

              <div className="feedback-summary-box">
                <dl>
                  <dt>Intended recipient</dt>
                  <dd><strong>{FEEDBACK_RECIPIENT_EMAIL}</strong></dd>
                  <dt>Name</dt>
                  <dd>{draft.name}</dd>
                  <dt>Email</dt>
                  <dd>{draft.email}</dd>
                  <dt>Rating</dt>
                  <dd>{draft.rating}/5 — {ratingDescriptions[draft.rating] ?? draft.rating}</dd>
                  <dt>Comments</dt>
                  <dd>{draft.comments}</dd>
                </dl>
              </div>

              <div className="feedback-actions">
                <a
                  href={buildMailtoUrl(draft)}
                  className="stitch-btn stitch-btn-primary stitch-btn-md"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                  <span>Open email client and send</span>
                </a>
                <Button type="button" variant="secondary" icon="refresh" onClick={handleReset}>
                  Write more feedback
                </Button>
              </div>
            </div>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit} noValidate>
              <FormField
                label="Name"
                id="feedback-name"
                error={touched.name ? errors.name : undefined}
                hint="Enter your name or preferred display name"
              >
                <Input
                  id="feedback-name"
                  value={form.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder="e.g. Amara O."
                  error={touched.name && Boolean(errors.name)}
                  aria-required="true"
                  aria-invalid={touched.name && Boolean(errors.name)}
                  autoComplete="name"
                  required
                />
              </FormField>

              <FormField
                label="Email"
                id="feedback-email"
                error={touched.email ? errors.email : undefined}
                hint="Only used to address the email you compose yourself"
              >
                <Input
                  id="feedback-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="name@school.edu"
                  error={touched.email && Boolean(errors.email)}
                  aria-required="true"
                  aria-invalid={touched.email && Boolean(errors.email)}
                  autoComplete="email"
                  required
                />
              </FormField>

              <RatingInput
                id="feedback-rating"
                name="rating"
                value={form.rating}
                onChange={handleChange('rating')}
                error={touched.rating ? errors.rating : undefined}
                required
                legend="Rating"
              />

              <FormField
                label="Comments"
                id="feedback-comments"
                error={touched.comments ? errors.comments : undefined}
                hint={`${form.comments.length}/${MAX_COMMENT_LENGTH} characters`}
              >
                <Textarea
                  id="feedback-comments"
                  value={form.comments}
                  onChange={handleChange('comments')}
                  onBlur={handleBlur('comments')}
                  placeholder="Tell us what was easy to understand, what could be improved, or what topics you would like added..."
                  rows={5}
                  maxLength={MAX_COMMENT_LENGTH}
                  error={touched.comments && Boolean(errors.comments)}
                  aria-required="true"
                  aria-invalid={touched.comments && Boolean(errors.comments)}
                  required
                />
              </FormField>

              <div className="feedback-privacy-callout">
                <span className="material-symbols-outlined" aria-hidden="true">lock</span>
                <span>
                  This form performs all validation in your browser. It never calls an API, never
                  writes to local or session storage, and never sends your feedback to a server. The
                  confirmation screen offers a <code>mailto:</code> link that you control.
                </span>
              </div>

              <div className="feedback-actions">
                <Button type="submit" variant="primary" icon="send">
                  Prepare my feedback
                </Button>
              </div>
            </form>
          )}
        </div>

        <aside className="feedback-sidebar">
          <Card className="feedback-note-card" elevation={1}>
            <span className="lesson-eyebrow">Session Privacy</span>
            <h2>Educational tool only</h2>
            <p>
              BudgetBasics is an educational learning project. Feedback is assembled inside this
              frontend session and is never sent to a remote database or third-party tracking
              provider.
            </p>
          </Card>

          <Card className="feedback-note-card" elevation={1}>
            <span className="lesson-eyebrow">Helpful prompts</span>
            <h2>What to share</h2>
            <ul className="information-list">
              <li>Did the 50/30/20 rule calculator help you understand income splits?</li>
              <li>Were the Needs vs Wants examples relatable for student budgets?</li>
              <li>Did BudgetBee answer your questions clearly?</li>
            </ul>
          </Card>

          <Card className="feedback-note-card" elevation={1}>
            <span className="lesson-eyebrow">Quick help</span>
            <h2>Have a question?</h2>
            <p>Need an instant explanation of a budgeting concept or financial calculation?</p>
            <Button to="/chatbot" variant="secondary" size="sm" iconRight="arrow_forward">
              Ask BudgetBee Assistant
            </Button>
          </Card>
        </aside>
      </div>
    </PageContainer>
  )
}
