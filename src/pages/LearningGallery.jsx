import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { PageContainer } from '../components/layout/PageContainer'

const topics = [
  {
    number: '02', type: 'comparison', title: 'Needs vs Wants',
    description: 'Needs support everyday living. Wants improve comfort or enjoyment but are not essential.',
    takeaway: 'Ask: Do I need this, or do I want this?', link: { to: '/needs-vs-wants', label: 'Open Needs vs Wants' },
  },
  {
    number: '03', type: 'rule', title: '50 / 30 / 20 Rule',
    description: 'A simple starting framework for thinking about needs, wants, and savings or financial goals.',
    takeaway: '50% needs · 30% wants · 20% savings', link: { to: '/50-30-20', label: 'Try the calculator' },
  },
  {
    number: '04', type: 'flow-save', title: 'Saving Money',
    description: 'Setting money aside before discretionary spending can make progress toward a goal easier to see.',
    takeaway: 'Income → Save → Spend', link: { to: '/savings-goals', label: 'Set a savings goal' },
  },
  {
    number: '05', type: 'categories', title: 'Tracking Expenses',
    description: 'Recording expenses helps reveal patterns and shows which categories are taking the most space in a plan.',
    takeaway: 'Notice patterns before adjusting your plan.', link: { to: '/expense-planner', label: 'Open Expense Planner' },
  },
  {
    number: '06', type: 'flow-reserve', title: 'Emergency Fund',
    description: 'Unexpected costs can interrupt a budget. A reserve can be built gradually when money is available.',
    takeaway: 'Regular income → Set aside → Emergency reserve',
  },
  {
    number: '07', type: 'debt', title: 'Good Debt vs Costly Debt',
    description: 'Borrowing creates a future repayment obligation. Compare the amount borrowed, interest, fees, and total repayment.',
    takeaway: 'Understand the full obligation before borrowing.',
  },
  {
    number: '08', type: 'goal', title: 'Financial Goal Planning',
    description: 'A clear goal connects what you want to save with an amount, a timeline, and regular contributions.',
    takeaway: 'Goal → Amount → Timeline → Regular saving', link: { to: '/savings-goals', label: 'Plan a savings goal' },
  },
]

function Diagram({ type }) {
  if (type === 'comparison') return <div className="gallery-comparison"><div><strong>Needs</strong><span>Essential living costs</span></div><div><strong>Wants</strong><span>Flexible choices</span></div></div>
  if (type === 'rule') return <div className="gallery-rule"><span className="rule-needs">50%</span><span className="rule-wants">30%</span><span className="rule-savings">20%</span></div>
  if (type === 'categories') return <div className="gallery-category-list"><span>Food</span><span>Transport</span><span>Education</span><span>Entertainment</span></div>
  if (type === 'debt') return <div className="gallery-debt-list"><span>Amount borrowed</span><span>+ Interest</span><span>+ Fees</span><strong>Total repayment</strong></div>
  if (type === 'goal') return <div className="gallery-goal-flow"><span>Goal</span><i>→</i><span>Amount</span><i>→</i><span>Timeline</span><i>→</i><span>Saving</span></div>
  return <div className="gallery-flow"><span>{type === 'flow-save' ? 'Income' : 'Regular income'}</span><i>→</i><span>{type === 'flow-save' ? 'Save' : 'Set aside'}</span><i>→</i><span>{type === 'flow-save' ? 'Spend' : 'Reserve'}</span></div>
}

export function LearningGallery() {
  return (
    <PageContainer className="learning-gallery-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/learning-gallery' }, { label: 'Learning Gallery' }]} />

      <header className="learning-gallery-header">
        <span className="section-eyebrow">Learning resources</span>
        <h1 className="section-title">Learning Gallery</h1>
        <p className="section-description">Quick visual explanations of important money concepts you can use in everyday financial decisions.</p>
      </header>

      <section className="gallery-featured" aria-labelledby="budgeting-basics-gallery-title">
        <div className="gallery-featured-copy">
          <span className="gallery-number">01 · START HERE</span>
          <h2 id="budgeting-basics-gallery-title">Budgeting Basics</h2>
          <p>A budget gives your income a job. It helps you see what comes in, what goes out, and what remains for future priorities.</p>
          <Link to="/budgeting-basics" className="gallery-text-link">Read the budgeting lesson <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>
        </div>
        <div className="gallery-budget-diagram" aria-label="Income leads to expenses and then remaining money">
          <div><span className="material-symbols-outlined" aria-hidden="true">payments</span><strong>Income</strong><small>Money in</small></div>
          <span className="gallery-arrow" aria-hidden="true">→</span>
          <div><span className="material-symbols-outlined" aria-hidden="true">receipt_long</span><strong>Expenses</strong><small>Money out</small></div>
          <span className="gallery-arrow" aria-hidden="true">→</span>
          <div className="gallery-remaining"><span className="material-symbols-outlined" aria-hidden="true">savings</span><strong>Remaining</strong><small>Money for goals</small></div>
        </div>
      </section>

      <section className="gallery-topics" aria-labelledby="gallery-topics-title">
        <div className="gallery-section-heading"><div><span className="section-eyebrow">Explore the concepts</span><h2 id="gallery-topics-title">Money ideas at a glance</h2></div><span className="gallery-section-note">Read, compare, and try</span></div>
        <div className="gallery-grid">
          {topics.map((topic) => (
            <article className={`gallery-item gallery-item-${topic.type}`} key={topic.title}>
              <div className="gallery-item-heading"><span className="gallery-number">{topic.number}</span><h3>{topic.title}</h3></div>
              <Diagram type={topic.type} />
              <p>{topic.description}</p>
              <div className="gallery-takeaway"><span>Simple takeaway</span><strong>{topic.takeaway}</strong></div>
              {topic.link && <Link to={topic.link.to} className="gallery-text-link">{topic.link.label}<span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>}
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

