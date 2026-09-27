import { useState } from 'react'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EducationalImage } from '../components/ui/EducationalImage'
import { allocationPresets, allocationRanges, calculateBudgetSplit } from '../utils/budgetRule'
import { allocationBuckets } from '../data/rule'

function formatAmount(value) {
  return value.toLocaleString('en-US')
}

export function Calculator503020() {
  const [currency, setCurrency] = useState('$')
  const [incomeInput, setIncomeInput] = useState('2400')
  const [needsPct, setNeedsPct] = useState(50)
  const [wantsPct, setWantsPct] = useState(30)
  const [savingsPct, setSavingsPct] = useState(20)

  const split = calculateBudgetSplit({
    income: incomeInput,
    needsPct,
    wantsPct,
    savingsPct,
  })

  const handleResetRatios = () => {
    setNeedsPct(50)
    setWantsPct(30)
    setSavingsPct(20)
  }

  const allocationMessage = split.isBalanced
    ? 'Needs, wants and savings add up to 100%.'
    : split.difference > 0
      ? `Add ${split.difference}% to reach 100%.`
      : `Remove ${Math.abs(split.difference)}% to reach 100%.`

  return (
    <div className="calculator-503020-page">
      <div className="page-container" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <section className="tool-lesson-intro" aria-labelledby="rule-lesson-title">
          <span className="section-eyebrow">Lesson 03 · A budgeting guideline</span>
          <h1 id="rule-lesson-title">The 50/30/20 rule: learn first, calculate second</h1>
          <p>The 50/30/20 framework divides an example income into needs, wants and savings. It is a starting point for organising a conversation about priorities, not a universal financial requirement.</p>
          <div className="tool-lesson-columns">
            <div><strong>50% needs</strong><span>Essentials such as housing, food, basic transport and required costs.</span></div>
            <div><strong>30% wants</strong><span>Flexible choices such as entertainment, dining out and upgrades.</span></div>
            <div><strong>20% savings</strong><span>Money set aside for a goal, a future cost or a buffer.</span></div>
          </div>
        </section>

        <div className="calc-context-row">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Tools', to: '/50-30-20' },
              { label: '50/30/20 Rule Calculator' },
            ]}
          />
          <div className="calc-context-badges">
            <span className="brand-badge badge-secondary">
              <span className="material-symbols-outlined" aria-hidden="true">verified</span>
              Educational example
            </span>
            <span className="calc-context-kicker">READ AND TRY</span>
          </div>
        </div>

        <section className="rule-masthead">
          <div className="rule-masthead-card">
            <div className="rule-masthead-grid">
              <div>
                <span className="section-eyebrow">Budgeting Basics · Practical tool</span>
                <h2 className="rule-masthead-title">The 50/30/20 Budgeting Rule</h2>
                <p className="rule-masthead-copy">
                  A simple framework for allocating after-tax income into Needs, Wants and Savings.
                  Enter an income amount to see the monthly breakdown.
                </p>

                <div className="rule-guideline-note">
                  <span className="material-symbols-outlined" aria-hidden="true">school</span>
                  <p>
                    <strong>Educational rule of thumb:</strong> the 50/30/20 framework is a guiding
                    benchmark, not a rigid mandate. A student in a high cost-of-living area may adjust
                    the ratios (for example 60/25/15) to match their situation without losing control.
                  </p>
                </div>
              </div>

              <div>
                <EducationalImage
                  asset="50-30-20-student-rule.png"
                  alt="Pie chart showing needs, wants and savings proportions in the 50/30/20 guideline."
                  className="rule-visual"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rule-study-section" aria-labelledby="rule-study-title">
          <EducationalImage
            asset="50-30-20-student-rule.png"
            alt="Pie chart showing needs, wants and savings proportions in the 50/30/20 guideline."
            className="rule-study-image"
          />
          <div>
            <span className="section-eyebrow">Read the example</span>
            <h2 id="rule-study-title">How the guideline works in practice</h2>
            <p>
              For an illustrative monthly income of {currency}{formatAmount(split.income)}, the starting
              split would be {currency}{formatAmount(split.needsAmount)} for needs,{' '}
              {currency}{formatAmount(split.wantsAmount)} for wants and{' '}
              {currency}{formatAmount(split.savingsAmount)} for savings, provided the percentages total
              100%. If the sliders do not add up to 100%, the figures below are shown as a provisional
              example rather than a valid plan.
            </p>
            <p>
              The guideline may need adjustment when essential costs take more space, income changes or a
              student has a specific short-term goal. Use the sliders below to explore a different balance
              and keep the total at 100%.
            </p>
          </div>
        </section>

        <section className="rule-reflection-section">
          <div>
            <span className="section-eyebrow">Knowledge check</span>
            <h2>What makes this a guideline rather than a rule?</h2>
            <p>
              Individual income, essential costs, location, responsibilities and goals differ. The useful
              part is the act of assigning money to priorities, not following one fixed percentage.
            </p>
          </div>
          <details className="knowledge-check">
            <summary>Reveal the answer</summary>
            <p><strong>Answer:</strong> the percentages are a starting point that can be adjusted to fit a person’s circumstances.</p>
          </details>
        </section>

        <section className="rule-buckets" aria-labelledby="rule-buckets-title">
          <div className="rule-buckets-heading">
            <span className="section-eyebrow">The three buckets</span>
            <h2 id="rule-buckets-title">What belongs in each category</h2>
          </div>
          <div className="rule-buckets-grid">
            {allocationBuckets.map((bucket) => (
              <Card key={bucket.key} elevation={1} className={`rule-bucket-card is-${bucket.tone}`}>
                <div className="rule-bucket-top">
                  <span className="edu-icon-wrap" aria-hidden="true">
                    <span className="material-symbols-outlined">{bucket.icon}</span>
                  </span>
                  <span className="rule-bucket-pct tabular-nums">
                    {split[`${bucket.key}Pct`]}%
                  </span>
                </div>
                <div className="rule-bucket-heading">
                  <h3>{bucket.title}</h3>
                  <span className={`brand-badge badge-${bucket.tone}`}>{bucket.badge}</span>
                </div>
                <p>{bucket.description}</p>
                <ul className="example-items-list">
                  {bucket.examples.map((example) => (
                    <li className="example-item" key={example}>
                      <span className={`pulse-dot is-${bucket.tone}`} aria-hidden="true" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="calc-page-layout">
          <div className="calc-controls-column">
            <Card elevation={2} style={{ padding: '24px' }}>
              <div className="calc-step-heading">
                <div>
                  <span className="section-eyebrow">Step 01</span>
                  <h2>Monthly Net Income</h2>
                </div>
                <span className="material-symbols-outlined calc-step-icon" aria-hidden="true">payments</span>
              </div>

              <div className="calc-income-field">
                <label htmlFor="income-input" className="calc-field-label">
                  After-tax takehome earnings or allowance
                </label>
                <div className="calc-income-row">
                  <div className="calc-currency-field">
                    <label htmlFor="currency-select" className="sr-only">Currency</label>
                    <select
                      id="currency-select"
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                      className="stitch-select"
                    >
                      <option value="$">$ USD</option>
                      <option value="₦">₦ NGN</option>
                      <option value="€">€ EUR</option>
                      <option value="£">£ GBP</option>
                    </select>
                  </div>
                  <div className="stitch-input-wrap calc-income-input">
                    <span className="input-prefix">{currency}</span>
                    <input
                      id="income-input"
                      type="number"
                      min="0"
                      step="50"
                      value={incomeInput}
                      onChange={(event) => setIncomeInput(event.target.value)}
                      className="stitch-input tabular-nums"
                      aria-describedby="income-hint"
                    />
                  </div>
                </div>
                <span id="income-hint" className="calc-field-hint">
                  {split.hasValidIncome
                    ? 'Educational figures only. Never enter real account or payment details.'
                    : 'Enter an income amount greater than 0 to see a monthly breakdown.'}
                </span>
              </div>

              <div className="calc-presets">
                <span className="calc-field-label" id="preset-label">Quick student benchmarks</span>
                <div className="preset-chip-group" role="group" aria-labelledby="preset-label">
                  {allocationPresets.map((preset) => (
                    <button
                      key={preset.amount}
                      type="button"
                      className={`preset-chip ${split.income === preset.amount ? 'active' : ''}`}
                      onClick={() => setIncomeInput(String(preset.amount))}
                    >
                      <span>{currency}{formatAmount(preset.amount)}</span>{' '}
                      <span className="preset-chip-sub">{preset.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-ratio-section">
                <div className="calc-step-heading">
                  <div>
                    <span className="section-eyebrow">Step 02</span>
                    <h3>Adjust the percentages</h3>
                  </div>
                  <button type="button" className="calc-reset-button" onClick={handleResetRatios}>
                    Reset 50/30/20
                  </button>
                </div>

                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <label htmlFor="needs-slider" className="slider-label slider-label-needs">Needs target</label>
                    <span className="tabular-nums">{needsPct}%</span>
                  </div>
                  <input
                    id="needs-slider"
                    type="range"
                    min={allocationRanges.needs.min}
                    max={allocationRanges.needs.max}
                    step="1"
                    value={needsPct}
                    onChange={(event) => setNeedsPct(Number(event.target.value))}
                    className="stitch-slider"
                    aria-valuetext={`${needsPct} percent for needs`}
                  />
                </div>

                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <label htmlFor="wants-slider" className="slider-label slider-label-wants">Wants target</label>
                    <span className="tabular-nums">{wantsPct}%</span>
                  </div>
                  <input
                    id="wants-slider"
                    type="range"
                    min={allocationRanges.wants.min}
                    max={allocationRanges.wants.max}
                    step="1"
                    value={wantsPct}
                    onChange={(event) => setWantsPct(Number(event.target.value))}
                    className="stitch-slider"
                    aria-valuetext={`${wantsPct} percent for wants`}
                  />
                </div>

                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <label htmlFor="savings-slider" className="slider-label slider-label-savings">Savings target</label>
                    <span className="tabular-nums">{savingsPct}%</span>
                  </div>
                  <input
                    id="savings-slider"
                    type="range"
                    min={allocationRanges.savings.min}
                    max={allocationRanges.savings.max}
                    step="1"
                    value={savingsPct}
                    onChange={(event) => setSavingsPct(Number(event.target.value))}
                    className="stitch-slider"
                    aria-valuetext={`${savingsPct} percent for savings`}
                  />
                </div>

                <div
                  className={`calc-allocation-banner ${split.isBalanced ? 'is-balanced' : 'is-unbalanced'}`}
                  role="status"
                >
                  <span>Combined allocation</span>
                  <strong className="tabular-nums">{split.totalPct}%</strong>
                  <span className="calc-allocation-message">{allocationMessage}</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="calc-results-column">
            <div className={`calc-result-qualifier ${split.canShowResult ? 'is-valid' : 'is-provisional'}`} role="status">
              <span className="material-symbols-outlined" aria-hidden="true">
                {split.canShowResult ? 'verified' : 'info'}
              </span>
              <div>
                <strong>
                  {split.canShowResult
                    ? 'Valid 100% allocation'
                    : split.hasValidIncome
                      ? 'Provisional figures — allocation is not 100%'
                      : 'Enter an income amount greater than 0 to calculate a breakdown'}
                </strong>
                <p>
                  {split.canShowResult
                    ? `These amounts divide ${currency}${formatAmount(split.income)} into the ${split.totalPct}% allocation shown above.`
                    : 'These amounts do not describe a valid 50/30/20 plan. Adjust the sliders until the total reaches 100% before relying on any figure below.'}
                </p>
              </div>
            </div>

            <div className="calc-breakdown-card calc-breakdown-needs">
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow">Bucket 01</span>
                  <h3 className="breakdown-cat-title">Essential Needs ({needsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums">
                  {currency}{formatAmount(split.needsAmount)}{' '}
                  <span className="breakdown-period">/ month</span>
                </div>
              </div>
              <p>Covers your shelter, standard groceries, utilities, tuition dues, and healthcare maintenance.</p>
            </div>

            <div className="calc-breakdown-card calc-breakdown-wants">
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow">Bucket 02</span>
                  <h3 className="breakdown-cat-title">Discretionary Wants ({wantsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums">
                  {currency}{formatAmount(split.wantsAmount)}{' '}
                  <span className="breakdown-period">/ month</span>
                </div>
              </div>
              <p>Covers dining out, streaming services, weekend social trips, and lifestyle upgrades without guilt.</p>
            </div>

            <div className="calc-breakdown-card calc-breakdown-savings">
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow">Bucket 03</span>
                  <h3 className="breakdown-cat-title">Savings &amp; Buffer ({savingsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums">
                  {currency}{formatAmount(split.savingsAmount)}{' '}
                  <span className="breakdown-period">/ month</span>
                </div>
              </div>
              <p>Emergency cushion, high-yield savings deposits, and student debt reduction buffer.</p>
            </div>

            <div className="calc-annual-banner">
              <div>
                <span className="calc-annual-label">Educational estimate</span>
                <div className="calc-annual-value tabular-nums">
                  +{currency}{formatAmount(split.annualSavings)} / year
                </div>
                <span className="calc-annual-note">
                  Twelve times the monthly savings figure above. It is arithmetic, not a prediction.
                </span>
              </div>
              <Button to="/savings-goals" variant="accent" size="md">
                Set Savings Goal
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
