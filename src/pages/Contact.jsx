import { PageContainer } from '../components/layout/PageContainer'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { InstagramIcon } from '../components/ui/SocialIcons'

const contactMethods = [
  {
    icon: 'mail',
    label: 'Email',
    title: 'Project Enquiries',
    value: 'brightejiba@gmail.com',
    href: 'mailto:brightejiba@gmail.com',
    description: 'For educational enquiries, lesson questions and project collaboration. Your own email client sends the message.',
    actionLabel: 'Send an email',
  },
  {
    icon: 'code',
    label: 'Repository',
    title: 'Project Codebase',
    value: 'GitHub · Ejiba1245/budgetbasic',
    href: 'https://github.com/Ejiba1245/budgetbasic',
    description: 'Explore the source code, project documentation and implementation details.',
    actionLabel: 'View on GitHub',
    external: true,
  },
  {
    customIcon: <InstagramIcon size={28} className="contact-social-icon" />,
    label: 'Social',
    title: 'Instagram',
    value: '@ejay5628',
    href: 'https://www.instagram.com/ejay5628/',
    description: 'Project updates and student personal finance learning highlights.',
    actionLabel: 'Visit Instagram',
    external: true,
  },
]

export function Contact() {
  return (
    <PageContainer className="information-page contact-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <header className="contact-page-header">
        <span className="lesson-eyebrow">Project Contact</span>
        <h1>Contact BudgetBasics</h1>
        <p className="information-lead">
          BudgetBasics is an educational learning project. Reach out with questions about the lessons,
          interactive tools or a project demonstration using the channels below.
        </p>
      </header>

      <section aria-labelledby="contact-methods-heading">
        <h2 id="contact-methods-heading" className="sr-only">Contact Channels</h2>
        <div className="contact-grid">
          {contactMethods.map((item) => (
            <Card key={item.label} className="contact-card" elevation={1}>
              <div className="contact-card-top">
                {item.customIcon ? (
                  item.customIcon
                ) : (
                  <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                )}
                <span className="lesson-eyebrow">{item.label}</span>
              </div>
              <h3 className="contact-card-title">{item.title}</h3>
              <a
                href={item.href}
                className="contact-value-link"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                aria-label={`${item.title}: ${item.value}${item.external ? ' (opens in new tab)' : ''}`}
              >
                {item.value}
              </a>
              <p>{item.description}</p>
              <div className="contact-card-action">
                <span className="contact-action-hint" aria-hidden="true">
                  {item.actionLabel} →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="contact-support-row" aria-label="Support and project notices">
        <Card className="contact-note-card" elevation={1}>
          <span className="lesson-eyebrow">Project note</span>
          <h2>Channels that are not available</h2>
          <p>
            BudgetBasics is a single-developer student project and does not operate a support desk, a
            customer service line or a postal address. No telephone number is published because there is
            no genuine project line to publish. Feedback and questions are handled through email and the
            in-app feedback form.
          </p>
        </Card>

        <Card className="contact-feedback-card" elevation={1}>
          <span className="lesson-eyebrow">Learner feedback</span>
          <h2>Share your thoughts</h2>
          <p>
            Have feedback on how we can improve our explanations, interactive tools or navigation? We
            would like to hear from you.
          </p>
          <div className="contact-card-action">
            <Button to="/feedback" variant="secondary" size="sm" iconRight="arrow_forward">
              Go to feedback form
            </Button>
          </div>
        </Card>
      </section>

      <section className="contact-quick-section">
        <Card className="contact-note-card" elevation={1}>
          <span className="lesson-eyebrow">Instant answers</span>
          <h2>Need fast explanations?</h2>
          <p>
            BudgetBee answers questions about the 50/30/20 guideline, needs versus wants, savings
            goals and common money mistakes using the project&apos;s own learning content.
          </p>
          <Button to="/chatbot" variant="secondary" size="sm" iconRight="arrow_forward">
            Ask BudgetBee Assistant
          </Button>
        </Card>
      </section>
    </PageContainer>
  )
}
