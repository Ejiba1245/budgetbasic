import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Card } from '../components/ui/Card'
import { FormField, Input } from '../components/ui/FormControls'
import { PageContainer } from '../components/layout/PageContainer'
import { ProgressBar } from '../components/ui/ProgressBar'
import { calculateSavingsGoal } from '../utils/savingsGoals'
import { EducationalImage } from '../components/ui/EducationalImage'

const initialValues = { goalName: '', targetAmount: '', currentSavings: '', monthlyContribution: '' }

function getAmountError(value, { required = false, positive = false, emptyMessage = 'Enter a valid amount.', negativeMessage = 'This amount cannot be negative.', positiveMessage = 'Enter an amount greater than 0.' } = {}) {
  if (value.trim() === '') return required ? emptyMessage : null
  const amount = Number(value)
  if (!Number.isFinite(amount)) return 'Enter a valid amount.'
  if (amount < 0) return negativeMessage
  if (positive && amount <= 0) return positiveMessage
  return null
}

function validate(values) {
  const errors = {}
  if (!values.goalName.trim()) errors.goalName = 'Enter a name for your savings goal.'
  errors.targetAmount = getAmountError(values.targetAmount, { required: true, positive: true, emptyMessage: 'Enter a target amount greater than 0.', negativeMessage: 'Enter a target amount greater than 0.', positiveMessage: 'Enter a target amount greater than 0.' })
  errors.currentSavings = getAmountError(values.currentSavings, { required: true, emptyMessage: 'Enter your current savings amount.', negativeMessage: 'Current savings cannot be negative.' })
  errors.monthlyContribution = getAmountError(values.monthlyContribution, { required: true, emptyMessage: 'Enter a monthly contribution greater than 0.', negativeMessage: 'Enter a monthly contribution greater than 0.' })
  if (values.monthlyContribution.trim() !== '' && Number.isFinite(Number(values.monthlyContribution)) && Number(values.monthlyContribution) === 0) errors.monthlyContribution = 'Enter a monthly contribution greater than 0.'
  return Object.fromEntries(Object.entries(errors).filter(([, error]) => error))
}

function formatCurrency(value) {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function SavingsGoals() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const errors = useMemo(() => validate(values), [values])
  const hasValidAmounts = Object.keys(errors).length === 0
  const calculation = hasValidAmounts ? calculateSavingsGoal({ targetAmount: Number(values.targetAmount), currentSavings: Number(values.currentSavings), monthlyContribution: Number(values.monthlyContribution) }) : null
  const updateValue = (field) => (event) => setValues((current) => ({ ...current, [field]: event.target.value }))

  return (
    <PageContainer className="savings-goals-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tools', to: '/50-30-20' }, { label: 'Savings Goals' }]} />

      <header className="savings-goals-header">
        <span className="section-eyebrow">Lesson · Saving well</span>
        <h1 className="section-title">Saving &amp; Financial Goals</h1>
        <p className="section-description">Learn how to turn a specific goal into a realistic saving plan, build a consistent habit, and adjust the plan when life changes.</p>
      </header>

      <section className="saving-lesson-intro" aria-labelledby="saving-lesson-intro-title">
        <div><span className="section-eyebrow">Start with the idea</span><h2 id="saving-lesson-intro-title">A savings goal gives a future choice a shape.</h2><p>Saving becomes easier to review when you can name the goal, set a target amount, choose a timeline and decide what regular contribution is realistic.</p></div>
        <div className="saving-lesson-steps"><span>Goal</span><b>→</b><span>Target</span><b>→</b><span>Timeline</span><b>→</b><span>Contribution</span></div>
      </section>

      <nav className="savings-lesson-nav" aria-label="Saving lesson sections">
        <a href="#why-save">Why save?</a><a href="#set-a-goal">Set a goal</a><a href="#build-the-habit">Build the habit</a><a href="#use-the-tool">Plan your goal</a>
      </nav>

      <section className="savings-lesson-intro" aria-labelledby="saving-intro-title">
        <div><span className="section-eyebrow">Start here</span><h2 id="saving-intro-title">Saving is a plan for future choices.</h2><p>Saving means setting money aside for a future need, want, opportunity, or unexpected cost. A short-term goal might be reached in a few weeks or months; a long-term goal may need a much longer timeline. Naming the goal and its deadline makes the amount you need to set aside easier to understand.</p></div>
        <div className="savings-lesson-visual"><EducationalImage asset="savings-goals.png" alt="A hand placing a euro coin into a savings jar." className="savings-goal-lesson-image" /><div className="savings-flow" aria-label="Goal planning flow"><span>Goal</span><span aria-hidden="true">→</span><span>Timeline</span><span aria-hidden="true">→</span><span>Regular contribution</span><span aria-hidden="true">→</span><span>Progress</span></div></div>
      </section>

      <section id="use-the-tool" className="savings-tool-section" aria-labelledby="tool-title">
        <div className="savings-tool-heading"><div><span className="section-eyebrow">Plan it now</span><h2 id="tool-title">Set up a savings goal</h2></div><p>A clear target turns saving into a simple monthly plan. The estimate is educational and does not predict changes in your circumstances.</p></div>
        <div className="savings-goals-layout">
          <Card elevation={1} className="savings-goal-form-card">
            <div className="savings-card-heading"><div><span className="section-eyebrow">Your monthly plan</span><h2>Enter your details</h2></div><span className="material-symbols-outlined savings-heading-icon" aria-hidden="true">flag</span></div>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} noValidate>
              <div className="savings-form-grid">
                <FormField id="goal-name" label="Goal name" hint="Give your goal a name you will recognise." error={submitted ? errors.goalName : undefined}><Input id="goal-name" value={values.goalName} onChange={updateValue('goalName')} placeholder="e.g. Laptop" error={submitted && Boolean(errors.goalName)} autoComplete="off" aria-invalid={submitted && Boolean(errors.goalName)} aria-describedby={submitted && errors.goalName ? 'goal-name-error' : undefined} /></FormField>
                <FormField id="target-amount" label="Target amount" hint="The total amount you want to save." error={submitted ? errors.targetAmount : undefined}><Input id="target-amount" type="text" inputMode="decimal" value={values.targetAmount} onChange={updateValue('targetAmount')} placeholder="0.00" prefix="$" error={submitted && Boolean(errors.targetAmount)} aria-invalid={submitted && Boolean(errors.targetAmount)} /></FormField>
                <FormField id="current-savings" label="Current savings" hint="What you have already set aside." error={submitted ? errors.currentSavings : undefined}><Input id="current-savings" type="text" inputMode="decimal" value={values.currentSavings} onChange={updateValue('currentSavings')} placeholder="0.00" prefix="$" error={submitted && Boolean(errors.currentSavings)} aria-invalid={submitted && Boolean(errors.currentSavings)} /></FormField>
                <FormField id="monthly-contribution" label="Monthly contribution" hint="The amount you plan to add each month." error={submitted ? errors.monthlyContribution : undefined}><Input id="monthly-contribution" type="text" inputMode="decimal" value={values.monthlyContribution} onChange={updateValue('monthlyContribution')} placeholder="0.00" prefix="$" error={submitted && Boolean(errors.monthlyContribution)} aria-invalid={submitted && Boolean(errors.monthlyContribution)} /></FormField>
              </div>
              <button type="submit" className="stitch-btn stitch-btn-primary savings-calculate-button">Calculate my plan <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
            </form>
          </Card>

          <Card elevation={1} className="savings-result-card" aria-live="polite">
            {!calculation ? <div className="savings-empty-state"><div className="savings-empty-icon" aria-hidden="true"><span className="material-symbols-outlined">track_changes</span></div><h2>Your plan will appear here</h2><p>Enter the four details to see the amount remaining, estimated time, and progress toward your goal.</p></div> : <>
              <div className="savings-result-heading"><div><span className="section-eyebrow">Savings goal</span><h2>{values.goalName.trim()}</h2></div><span className="brand-badge badge-secondary">Estimate</span></div>
              <div className="savings-progress-block"><div className="savings-progress-labels"><span>Progress</span><strong>{calculation.progress.toFixed(2)}%</strong></div><ProgressBar value={calculation.progress} valueText={`${calculation.progress.toFixed(2)}%`} height="12px" /><p className="savings-progress-caption">{formatCurrency(Number(values.currentSavings))} saved of {formatCurrency(Number(values.targetAmount))}</p></div>
              <div className="savings-metrics-grid"><div><span>Target amount</span><strong>{formatCurrency(Number(values.targetAmount))}</strong></div><div><span>Current savings</span><strong>{formatCurrency(Number(values.currentSavings))}</strong></div><div><span>Amount remaining</span><strong>{formatCurrency(calculation.remaining)}</strong></div><div><span>Monthly contribution</span><strong>{formatCurrency(Number(values.monthlyContribution))}</strong></div></div>
              <div className={`savings-time-callout ${calculation.remaining === 0 ? 'is-reached' : ''}`}><span className="material-symbols-outlined" aria-hidden="true">{calculation.remaining === 0 ? 'check_circle' : 'calendar_month'}</span><div><span className="savings-callout-label">Estimated time</span><strong>{calculation.remaining === 0 ? 'Goal reached' : `${calculation.months} ${calculation.months === 1 ? 'month' : 'months'}`}</strong><p>{calculation.remaining === 0 ? 'You have reached or exceeded this savings target.' : `At this monthly contribution, you could reach this goal in approximately ${calculation.months} ${calculation.months === 1 ? 'month' : 'months'}.`}</p></div></div>
              <div className="savings-tip"><span className="material-symbols-outlined" aria-hidden="true">school</span><p><strong>Helpful tip:</strong> Choose a monthly contribution that fits realistically within your budget.</p></div><p className="savings-disclaimer">Educational estimate only. This tool does not account for changes in income, expenses, or unexpected costs.</p>
            </>}
          </Card>
        </div>
      </section>

      <div className="savings-lesson-content">
        <section id="why-save" className="savings-lesson-section" aria-labelledby="why-save-title"><div className="savings-section-marker">01</div><div><span className="section-eyebrow">Understand</span><h2 id="why-save-title">Why save?</h2><p>People save for different reasons. These examples are illustrative, not instructions about what you personally should save for.</p><div className="savings-reasons-list"><article><h3>Emergencies</h3><p>Money reserved for unexpected expenses, such as an urgent repair or essential replacement.</p></article><article><h3>Short-term goals</h3><p>School materials, a course, a device, transportation needs, or an upcoming event.</p></article><article><h3>Medium-term goals</h3><p>Larger purchases, education costs, moving expenses, or business equipment.</p></article><article><h3>Long-term goals</h3><p>Higher education, starting a business, or another major financial goal.</p></article></div></div></section>

        <section className="savings-lesson-section" aria-labelledby="timeline-title"><div className="savings-section-marker">02</div><div><span className="section-eyebrow">Choose a timeline</span><h2 id="timeline-title">Short-term and long-term goals</h2><p>The timeline changes the regular contribution required. For example, a goal of $120,000 spread over 12 months requires a different monthly amount from the same goal spread over 24 months.</p><div className="savings-comparison"><div><strong>Short-term</strong><span>Reached relatively soon; contributions may need to be larger or more frequent.</span></div><div><strong>Long-term</strong><span>Allows more time for smaller repeated contributions and regular reviews.</span></div></div></div></section>

        <section id="set-a-goal" className="savings-lesson-section" aria-labelledby="goal-framework-title"><div className="savings-section-marker">03</div><div><span className="section-eyebrow">Define the plan</span><h2 id="goal-framework-title">How to set a good financial goal</h2><div className="savings-framework"><div><b>1</b><strong>What?</strong><span>What are you saving for?</span></div><div><b>2</b><strong>How much?</strong><span>What is the target amount?</span></div><div><b>3</b><strong>When?</strong><span>When do you want to reach it?</span></div><div><b>4</b><strong>How regularly?</strong><span>What can you save each week or month?</span></div><div><b>5</b><strong>Why?</strong><span>Why does this goal matter to you?</span></div></div></div></section>

        <section className="savings-lesson-section" aria-labelledby="break-down-title"><div className="savings-section-marker">04</div><div><span className="section-eyebrow">Make it manageable</span><h2 id="break-down-title">Break a large goal into smaller steps</h2><p>Dividing a target by the number of saving periods gives you a simple starting point for a regular contribution.</p><div className="savings-formula"><span>$120,000</span><b>÷</b><span>12 months</span><b>=</b><strong>$10,000 / month</strong></div><p className="savings-note">Goal amount ÷ number of saving periods = required contribution. This is a planning example, not financial advice.</p></div></section>

        <section id="build-the-habit" className="savings-lesson-section" aria-labelledby="habit-title"><div className="savings-section-marker">05</div><div><span className="section-eyebrow">Build the habit</span><h2 id="habit-title">Pay yourself first, then save consistently</h2><p>“Pay yourself first” means setting aside a planned amount before discretionary spending, when that fits your circumstances.</p><div className="savings-flow savings-flow-wide"><span>Income</span><b>→</b><strong>Save</strong><b>→</b><span>Planned spending</span></div><p>Regular smaller contributions can be easier to track than occasional large contributions. The right amount depends on income, expenses, and other priorities; there is no single percentage that fits everyone.</p><p>Automatic transfers are not part of this offline tool, but a student can still choose a repeatable day and record each contribution.</p></div></section>

        <section className="savings-lesson-section" aria-labelledby="emergency-title"><div className="savings-section-marker">06</div><div><span className="section-eyebrow">Protect the plan</span><h2 id="emergency-title">Emergency savings are different</h2><p>An emergency reserve is for unplanned costs such as urgent repairs, unexpected transportation, or essential replacements. It serves a different purpose from money saved for a planned purchase, so keep the two purposes clear when reviewing a goal.</p></div></section>

        <section className="savings-lesson-section" aria-labelledby="saving-investing-title"><div className="savings-section-marker">07</div><div><span className="section-eyebrow">Know the difference</span><h2 id="saving-investing-title">Saving versus investing</h2><div className="savings-comparison"><div><strong>Saving</strong><span>Generally focuses on preserving money for future use and keeping it accessible.</span></div><div><strong>Investing</strong><span>Generally puts money into assets with potential growth and the possibility of loss.</span></div></div><p>This lesson stays introductory and does not recommend investment products.</p></div></section>

        <section className="savings-lesson-section" aria-labelledby="tradeoffs-title"><div className="savings-section-marker">08</div><div><span className="section-eyebrow">Make trade-offs visible</span><h2 id="tradeoffs-title">Opportunity cost affects every goal</h2><p>When money is spent on one thing, it cannot be used for another purpose at the same time. For example, a $20 impulse purchase means that $20 cannot also be added to a savings goal.</p><p>Use the <Link to="/needs-vs-wants">Needs vs Wants guide</Link> to think through a purchase, or use the <Link to="/expense-planner">Expense Planner</Link> to see how spending choices affect the rest of your plan.</p></div></section>

        <section className="savings-lesson-section" aria-labelledby="adjust-title"><div className="savings-section-marker">09</div><div><span className="section-eyebrow">Review and adjust</span><h2 id="adjust-title">A changed plan is not a failed plan</h2><p>Review a goal when income changes, expenses increase, the target changes, or the deadline moves. You can adjust the contribution, timeline, or target so the plan reflects your current situation.</p><p>The <Link to="/50-30-20">50/30/20 calculator</Link> can help you think about a savings allocation alongside needs and wants.</p></div></section>

        <section className="savings-lesson-section" aria-labelledby="mistakes-title"><div className="savings-section-marker">10</div><div><span className="section-eyebrow">Learn from friction</span><h2 id="mistakes-title">Common saving mistakes</h2><ul className="savings-mistakes-list"><li>Setting an unrealistic target.</li><li>Having no specific goal or deadline.</li><li>Forgetting to track progress.</li><li>Spending money intended for the goal.</li><li>Ignoring unexpected expenses.</li><li>Relying on occasional motivation instead of a repeatable habit.</li></ul><Link to="/money-mistakes" className="savings-inline-link">Read more money mistakes <span aria-hidden="true">→</span></Link></div></section>

        <section className="savings-example" aria-labelledby="example-title"><span className="section-eyebrow">Worked example</span><h2 id="example-title">Turn one target into milestones</h2><div className="savings-example-grid"><div><span>Goal</span><strong>$60,000</strong></div><div><span>Timeline</span><strong>12 months</strong></div><div><span>Monthly target</span><strong>$5,000</strong></div></div><p>$60,000 ÷ 12 = $5,000 per month. Thinking of the target as 12 smaller milestones can make progress easier to review. The <Link to="/learning-gallery">Learning Gallery</Link> includes more visual explanations of financial goals.</p></section>
      </div>
    </PageContainer>
  )
}
