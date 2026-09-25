import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { PageContainer } from '../components/layout/PageContainer'

const mistakes = [
  {
    title: 'Spending Without a Budget',
    explanation: 'Without a spending plan, it becomes difficult to know where money is going or whether enough remains for important priorities.',
    habit: 'Create a simple budget before spending.',
  },
  {
    title: 'Impulse Buying',
    explanation: 'Buying something immediately because it looks attractive or feels necessary can lead to spending that was never part of your plan.',
    habit: 'Pause before purchasing and ask whether the item is actually needed.',
  },
  {
    title: 'Confusing Needs With Wants',
    explanation: 'Essential expenses support health, housing, safety, or responsibilities. Wants can be enjoyable, but they usually offer more flexibility.',
    habit: 'Prioritize needs before wants.',
    link: { to: '/needs-vs-wants', label: 'Practise with Needs vs Wants' },
  },
  {
    title: 'Not Tracking Expenses',
    explanation: 'Small purchases can accumulate and become a significant portion of spending before you notice the pattern.',
    habit: 'Record expenses regularly and review spending patterns.',
    link: { to: '/expense-planner', label: 'Try the Expense Planner' },
  },
  {
    title: 'Ignoring Savings',
    explanation: 'Spending all available money leaves little room for future goals or unexpected situations.',
    habit: 'Set aside part of available income consistently.',
    link: { to: '/savings-goals', label: 'Set a Savings Goal' },
  },
  {
    title: 'Spending More Than You Earn',
    explanation: 'When regular spending exceeds available income, the gap can make future budgets harder to manage.',
    habit: 'Adjust spending so essential expenses and financial goals remain within available income.',
  },
  {
    title: 'Taking Unnecessary Debt',
    explanation: 'Borrowing creates future obligations and can make later budgets harder to manage.',
    habit: 'Understand the total cost and repayment obligation before borrowing.',
  },
  {
    title: 'Having No Emergency Plan',
    explanation: 'Unexpected expenses can disrupt a budget when there is no money set aside to help absorb them.',
    habit: 'Build an emergency reserve gradually when possible.',
  },
]

export function MoneyMistakes() {
  const [openMistake, setOpenMistake] = useState(1)

  return (
    <PageContainer className="money-mistakes-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Learn', to: '/budgeting-basics' }, { label: 'Money Mistakes' }]} />

      <header className="money-mistakes-header">
        <div>
          <span className="section-eyebrow">Money habits</span>
          <h1 className="section-title">Money Mistakes</h1>
          <p className="section-description">Small financial habits can have a large effect over time. Recognising common mistakes is a useful first step toward making better decisions.</p>
        </div>
        <div className="money-mistakes-note"><span className="material-symbols-outlined" aria-hidden="true">school</span><p>Use these examples as prompts for reflection, not as judgements about your real financial situation.</p></div>
      </header>

      <section className="mistakes-learning-intro" aria-labelledby="mistakes-start-title">
        <span className="section-eyebrow">How to use this lesson</span>
        <h2 id="mistakes-start-title">Notice the pattern, then choose the next action.</h2>
        <p>Money mistakes are common learning moments. The useful question is not “what is wrong with me?” but “what happened, and what small change would make the next decision easier?”</p>
        <p>Work through the examples below in order: impulse buying, small expenses, late payments, unused subscriptions, spending without a plan, emotional spending and social pressure.</p>
      </section>

      <section className="mistakes-content" aria-labelledby="mistakes-list-title">
        <div className="mistakes-section-heading">
          <div>
            <span className="section-eyebrow">Eight patterns to notice</span>
            <h2 id="mistakes-list-title">Common mistakes and better habits</h2>
          </div>
          <span className="mistakes-instruction">Select a topic to read more</span>
        </div>

        <div className="mistakes-list">
          {mistakes.map((mistake, index) => {
            const number = index + 1
            const isOpen = openMistake === number
            const panelId = `mistake-panel-${number}`

            return (
              <article className={`mistake-item ${isOpen ? 'is-open' : ''}`} key={mistake.title}>
                <h3>
                  <button type="button" className="mistake-trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenMistake(isOpen ? null : number)}>
                    <span className="mistake-number">{String(number).padStart(2, '0')}</span>
                    <span className="mistake-title">{mistake.title}</span>
                    <span className="material-symbols-outlined mistake-chevron" aria-hidden="true">{isOpen ? 'remove' : 'add'}</span>
                  </button>
                </h3>
                <div id={panelId} className="mistake-panel" hidden={!isOpen}>
                  <p>{mistake.explanation}</p>
                  <div className="better-habit"><span>Better habit</span><strong>{mistake.habit}</strong></div>
                  {mistake.link && <Link className="mistake-link" to={mistake.link.to}>{mistake.link.label}<span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mistakes-reflection" aria-labelledby="reflection-title">
        <div>
          <span className="section-eyebrow">A useful next step</span>
          <h2 id="reflection-title">Choose one habit to practise this week.</h2>
        </div>
        <Link to="/expense-planner">Review a sample plan <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>
      </section>

      <details className="knowledge-check mistakes-check"><summary>Knowledge check: what is a constructive response after a money mistake?</summary><p><strong>Answer:</strong> Review what happened, adjust the plan if needed and choose one practical habit to try next. One mistake does not define a person’s financial future.</p></details>
    </PageContainer>
  )
}
