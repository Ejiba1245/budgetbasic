import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const learningTopics = [
  {
    to: '/budgeting-basics',
    title: 'Budgeting Fundamentals',
    description: 'Learn how income, expenses, spending plans, and remaining money fit together.',
    icon: 'menu_book',
  },
  {
    to: '/needs-vs-wants',
    title: 'Needs vs Wants',
    description: 'Understand how to separate essential survival expenses from flexible lifestyle choices.',
    icon: 'balance',
  },
  {
    to: '/50-30-20',
    title: 'The 50/30/20 Rule',
    description: 'Explore a simple educational split for needs (50%), wants (30%), and savings (20%).',
    icon: 'pie_chart',
  },
  {
    to: '/savings-goals',
    title: 'Savings Goals',
    description: 'Create savings targets, calculate monthly contributions, and track milestones.',
    icon: 'savings',
  },
  {
    to: '/expense-planner',
    title: 'Expense Planner',
    description: 'Plan monthly expenses and balance food, transport, housing, and utilities.',
    icon: 'receipt_long',
  },
  {
    to: '/money-mistakes',
    title: 'Common Money Mistakes',
    description: 'Learn to avoid common traps like impulse spending, high-interest debt, and no emergency fund.',
    icon: 'warning',
  },
  {
    to: '/learning-gallery',
    title: 'Visual Learning Gallery',
    description: 'Explore infographics, concept cheat sheets, and visual summaries of financial principles.',
    icon: 'photo_library',
  },
  {
    to: '/chatbot',
    title: 'BudgetBee Assistant',
    description: 'Ask conversational questions and receive fast explanations from our educational mascot.',
    icon: 'chat',
  },
  {
    to: '/search',
    title: 'Search',
    description: 'Look up a lesson or tool by keyword instead of browsing the curriculum in order.',
    icon: 'search',
  },
]

const audienceList = [
  {
    title: 'High School & Secondary Students',
    description: 'Learners managing their first allowances, gift money, or part-time earnings who want to build smart habits early.',
    icon: 'school',
  },
  {
    title: 'College & University Students',
    description: 'Students transitioning to independent living who need to budget for rent, food, transport, and study materials.',
    icon: 'apartment',
  },
  {
    title: 'Beginners in Personal Finance',
    description: 'Anyone who feels intimidated by complicated financial jargon and wants a friendly, practical, and clear starting point.',
    icon: 'person_celebrate',
  },
  {
    title: 'Educators & Mentors',
    description: 'Teachers and youth leaders looking for interactive, accessible digital tools to demonstrate budgeting principles.',
    icon: 'supervisor_account',
  },
]

const educationalSteps = [
  {
    step: 'Step 1',
    title: 'Learn',
    description: 'Read plain-English definitions and explanations without financial jargon or hidden commercial agendas.',
  },
  {
    step: 'Step 2',
    title: 'Understand',
    description: 'See how the principles operate through realistic student scenarios, case studies, and trade-off comparisons.',
  },
  {
    step: 'Step 3',
    title: 'Practise',
    description: 'Experiment with interactive calculators, simulate expense allocations, and test different budget scenarios.',
  },
  {
    step: 'Step 4',
    title: 'Reflect',
    description: 'Evaluate choices, review spending patterns, and identify realistic habits to practice in everyday life.',
  },
]

export function About() {
  return (
    <PageContainer className="information-page about-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      <header className="about-page-header">
        <span className="lesson-eyebrow">Project Story</span>
        <h1>About BudgetBasics</h1>
        <p className="information-lead">
          BudgetBasics helps students build practical budgeting and saving awareness through simple lessons, examples and interactive learning tools.
        </p>
      </header>

      <div className="information-reading">
        <section aria-labelledby="why-exists-title">
          <h2 id="why-exists-title">Why BudgetBasics exists</h2>
          <p>
            Students and beginners often understand that saving and budgeting are important, but they may not have a simple way to learn how income, expenses, needs, wants, and savings connect in everyday life. Many personal finance resources are either overly complex, dense with technical jargon, or tied directly to commercial financial products.
          </p>
          <p>
            BudgetBasics was designed to make those core concepts approachable, visual, and practical. Through guided lessons and interactive calculators, learners can experiment with numbers, see the real-world impact of their choices, and develop lifelong money confidence without pressure.
          </p>
        </section>

        <section aria-labelledby="learners-can-do-title" style={{ marginTop: '36px' }}>
          <h2 id="learners-can-do-title">What learners can do</h2>
          <p>
            Explore each interactive module to build a complete foundation in personal money management:
          </p>
          <div className="about-actions-grid">
            {learningTopics.map((topic) => (
              <Link key={topic.to} to={topic.to} className="about-topic-card">
                <div className="about-topic-card-top">
                  <span className="material-symbols-outlined" aria-hidden="true">{topic.icon}</span>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>
                    arrow_forward
                  </span>
                </div>
                <div className="about-topic-card-title">{topic.title}</div>
                <p className="about-topic-card-desc">{topic.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="educational-approach-title" style={{ marginTop: '40px' }}>
          <h2 id="educational-approach-title">Educational approach</h2>
          <p>
            BudgetBasics structures every concept around an active, inquiry-based learning rhythm:
          </p>

          <Card className="learning-path-card" elevation={1}>
            <div className="learning-path-steps" aria-label="Learn, Understand, Practise, Reflect">
              <span>Learn</span>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              <span>Understand</span>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              <span>Practise</span>
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              <span>Reflect</span>
            </div>
          </Card>

          <div className="learning-approach-grid">
            {educationalSteps.map((s) => (
              <div key={s.step} className="learning-step-card">
                <span className="learning-step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="who-it-is-for-title" style={{ marginTop: '40px' }}>
          <h2 id="who-it-is-for-title">Who it is for</h2>
          <p>
            BudgetBasics is thoughtfully tailored for anyone beginning their financial literacy journey:
          </p>
          <div className="audience-grid">
            {audienceList.map((item) => (
              <Card key={item.title} className="audience-card" elevation={1}>
                <div className="audience-card-heading">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="disclaimer-title" style={{ marginTop: '40px' }}>
          <div className="about-disclaimer-card" role="note">
            <h2 id="disclaimer-title">Important disclaimer</h2>
            <p>
              BudgetBasics is an educational tool. Its calculators, examples, and budgeting guidance provide learning estimates and should not be treated as professional financial, legal, or investment advice. BudgetBasics does not provide banking, investment, lending, payment, or monetary transaction services.
            </p>
          </div>
        </section>

        <section aria-labelledby="project-context-title" style={{ marginTop: '40px' }}>
          <h2 id="project-context-title">Project and creator context</h2>
          <p>
            BudgetBasics was created as an educational competition project (<strong>BudgetBasics / NextGen BudgetBee</strong>). It was built to demonstrate how modern, accessible web technology can make personal finance intuitive and engaging for students.
          </p>
          <p>
            The project operates entirely in the browser. There is no account system, no database and
            no application server that stores what you type: lesson content is static, every
            calculation runs on your own device, and planner entries exist only for the current page
            session.
          </p>
          <p>
            One honest caveat: the site loads its Inter typeface and icon font from Google Fonts, so
            your browser makes a normal request to <code>fonts.googleapis.com</code> and{' '}
            <code>fonts.gstatic.com</code> when the page loads. No BudgetBasics data is included in
            that request. The feedback form is the other place where your browser hands information
            somewhere else: it builds a <code>mailto:</code> link, so a message reaches the project
            only if you choose to send it from your own email client.
          </p>
          <div className="about-inline-actions">
            <Button to="/feedback" variant="secondary" size="sm" iconRight="arrow_forward">
              Give feedback on this project
            </Button>
            <Button to="/contact" variant="secondary" size="sm" iconRight="arrow_forward">
              View project contact details
            </Button>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
