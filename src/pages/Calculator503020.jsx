import { useState } from 'react'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EducationalImage } from '../components/ui/EducationalImage'

export function Calculator503020() {
  const [currency, setCurrency] = useState('$')
  const [income, setIncome] = useState(2400)
  const [needsPct, setNeedsPct] = useState(50)
  const [wantsPct, setWantsPct] = useState(30)
  const [savingsPct, setSavingsPct] = useState(20)

  const presets = [
    { label: '$1,200', sub: '(Part-time)', amount: 1200 },
    { label: '$2,400', sub: '(Avg Intern)', amount: 2400 },
    { label: '$3,500', sub: '(Entry Level)', amount: 3500 },
    { label: '$5,000', sub: '(Dual/Co-op)', amount: 5000 },
  ]

  const totalPct = needsPct + wantsPct + savingsPct
  const isBalanced = totalPct === 100

  const safeIncome = Math.max(0, income || 0)
  const needsAmount = Math.round((safeIncome * needsPct) / 100)
  const wantsAmount = Math.round((safeIncome * wantsPct) / 100)
  const savingsAmount = Math.round((safeIncome * savingsPct) / 100)
  const annualSavings = savingsAmount * 12

  const handleResetRatios = () => {
    setNeedsPct(50)
    setWantsPct(30)
    setSavingsPct(20)
  }

  return (
    <div className="calculator-503020-page">
      <div className="page-container" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <section className="tool-lesson-intro" aria-labelledby="rule-lesson-title">
          <span className="section-eyebrow">Lesson 03 · A budgeting guideline</span>
          <h1 id="rule-lesson-title">The 50/30/20 rule: learn first, calculate second</h1>
          <p>The 50/30/20 framework divides an example income into needs, wants and savings. It is a starting point for organising a conversation about priorities, not a universal financial requirement.</p>
          <div className="tool-lesson-columns"><div><strong>50% needs</strong><span>Essentials such as housing, food, basic transport and required costs.</span></div><div><strong>30% wants</strong><span>Flexible choices such as entertainment, dining out and upgrades.</span></div><div><strong>20% savings</strong><span>Money set aside for a goal, a future cost or a buffer.</span></div></div>
        </section>
        {/* Top Context & Breadcrumbs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Tools', to: '/50-30-20' },
              { label: '50/30/20 Rule Calculator' },
            ]}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="brand-badge badge-secondary">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Educational example
            </span>
            <span style={{ fontSize: '11px', color: 'var(--color-outline)', letterSpacing: '0.04em' }}>
              READ AND TRY
            </span>
          </div>
        </div>

        {/* Editorial Masthead */}
        <section style={{ marginBottom: '24px' }}>
          <div className="stitch-card elevation-1" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'center' }}>
              <div>
                <span className="section-eyebrow">Budgeting Basics · Practical tool</span>
                <h1 className="hero-title" style={{ fontSize: '32px', margin: '4px 0 10px' }}>
                  The 50/30/20 Budgeting Rule
                </h1>
                <p className="hero-copy" style={{ fontSize: '15px', margin: '0 0 16px' }}>
                  A simple framework for allocating after-tax income into Needs, Wants, and Savings.
                  Enter an income amount to see the monthly breakdown.
                </p>

                <div style={{ background: 'var(--color-surface-container-low)', padding: '12px 16px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">school</span>
                  <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', lineHeight: 1.5, margin: 0 }}>
                    <strong>Educational Rule of Thumb:</strong> The 50/30/20 framework is a guiding benchmark, not a rigid mandate.
                    High cost-of-living students may adjust ratios (e.g. 60/25/15) based on living realities without losing control.
                  </p>
                </div>
              </div>

              {/* Ratio Metric Snapshot */}
              <div>
                <EducationalImage
                  asset="50-30-20-rule.png"
                  alt="Visual explanation of the 50/30/20 budgeting guideline."
                  className="rule-visual"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The three budget categories */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--gutter)' }}>
            <Card elevation={1} style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div className="edu-icon-wrap" style={{ background: 'var(--color-primary)', color: '#ffffff' }}>
                  <span className="material-symbols-outlined text-[20px]">home_work</span>
                </div>
                <span className="tabular-nums" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {needsPct}%
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Essentials & Needs</h3>
                <span className="brand-badge badge-primary">Essentials</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', lineHeight: 1.5, margin: '0 0 12px' }}>
                Critical living expenses required to survive and function responsibly while enrolled or starting your career.
              </p>
              <ul className="example-items-list">
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span><span>Rent, dorm fees, or base mortgage</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span><span>Core groceries, meal-plan base</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span><span>Utilities, WiFi, primary transit pass</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span><span>Prescriptions, minimum student loan dues</span></li>
              </ul>
            </Card>

            <Card elevation={1} style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div className="edu-icon-wrap" style={{ background: 'var(--color-tertiary-container)', color: '#ffffff' }}>
                  <span className="material-symbols-outlined text-[20px]">celebration</span>
                </div>
                <span className="tabular-nums" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-tertiary-container)' }}>
                  {wantsPct}%
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Lifestyle & Wants</h3>
                <span className="brand-badge badge-tertiary">Flexible spending</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', lineHeight: 1.5, margin: '0 0 12px' }}>
                Discretionary purchases that uplift student life, culture, recreation, and social bonds without guilt.
              </p>
              <ul className="example-items-list">
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-tertiary-container)' }}></span><span>Takeout, coffee runs & dining out</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-tertiary-container)' }}></span><span>Streaming services, gaming subscriptions</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-tertiary-container)' }}></span><span>Concert tickets, campus social outings</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-tertiary-container)' }}></span><span>Non-essential wardrobe upgrades & travel</span></li>
              </ul>
            </Card>

            <Card elevation={1} style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div className="edu-icon-wrap" style={{ background: 'var(--color-secondary)', color: '#ffffff' }}>
                  <span className="material-symbols-outlined text-[20px]">trending_up</span>
                </div>
                <span className="tabular-nums" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-secondary)' }}>
                  {savingsPct}%
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Future & Savings</h3>
                <span className="brand-badge badge-secondary">Future needs</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', lineHeight: 1.5, margin: '0 0 12px' }}>
                Direct safety netting, rapid emergency cash, and debt reduction to ensure post-graduation stability.
              </p>
              <ul className="example-items-list">
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-secondary)' }}></span><span>Liquid $1,000 emergency buffer fund</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-secondary)' }}></span><span>High-yield savings accounts (HYSA)</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-secondary)' }}></span><span>Aggressive debt principal prepayments</span></li>
                <li className="example-item"><span className="pulse-dot" style={{ width: '6px', height: '6px', background: 'var(--color-secondary)' }}></span><span>Starter Roth IRA or index micro-investments</span></li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Income and ratio controls */}
        <section className="calc-page-layout">
          {/* Controls Column (5 cols) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Card elevation={2} style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <span className="section-eyebrow">Step 01</span>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>Monthly Net Income</h2>
                </div>
                <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
              </div>

              {/* Currency & Input */}
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="income-input" style={{ fontSize: '13px', color: 'var(--color-secondary)', display: 'block', marginBottom: '6px' }}>
                  After-tax take-home earnings / allowance
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '90px', flexShrink: 0 }}>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="stitch-select"
                      style={{ padding: '10px 8px' }}
                      aria-label="Currency"
                    >
                      <option value="$">$ USD</option>
                      <option value="₦">₦ NGN</option>
                      <option value="€">€ EUR</option>
                      <option value="£">£ GBP</option>
                    </select>
                  </div>
                  <div className="stitch-input-wrap" style={{ flex: 1 }}>
                    <span className="input-prefix">{currency}</span>
                    <input
                      id="income-input"
                      type="number"
                      min="0"
                      step="50"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="stitch-input tabular-nums"
                      style={{ fontSize: '18px', fontWeight: 700 }}
                    />
                  </div>
                </div>
              </div>

              {/* Preset Student Chips */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-secondary)', display: 'block', marginBottom: '6px' }}>
                  Quick Student Benchmarks:
                </span>
                <div className="preset-chip-group">
                  {presets.map((p) => (
                    <button
                      key={p.amount}
                      type="button"
                      className={`preset-chip ${income === p.amount ? 'active' : ''}`}
                      onClick={() => setIncome(p.amount)}
                    >
                      <span>{currency}{p.amount.toLocaleString()}</span> <span style={{ fontSize: '11px', opacity: 0.8 }}>{p.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 02: Ratio Customizer */}
              <div style={{ borderTop: '1px solid var(--color-surface-container-high)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <span className="section-eyebrow">Step 02</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Adjust the percentages</h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetRatios}
                    style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Reset 50/30/20
                  </button>
                </div>

                {/* Needs Slider */}
                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <span style={{ color: 'var(--color-primary)' }}>Needs Target</span>
                    <span className="tabular-nums">{needsPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={needsPct}
                    onChange={(e) => setNeedsPct(Number(e.target.value))}
                    className="stitch-slider"
                    aria-label="Needs target percentage"
                  />
                </div>

                {/* Wants Slider */}
                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <span style={{ color: 'var(--color-tertiary-container)' }}>Wants Target</span>
                    <span className="tabular-nums">{wantsPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={wantsPct}
                    onChange={(e) => setWantsPct(Number(e.target.value))}
                    className="stitch-slider"
                    aria-label="Wants target percentage"
                  />
                </div>

                {/* Savings Slider */}
                <div className="ratio-slider-control">
                  <div className="slider-label-row">
                    <span style={{ color: 'var(--color-secondary)' }}>Savings Target</span>
                    <span className="tabular-nums">{savingsPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={savingsPct}
                    onChange={(e) => setSavingsPct(Number(e.target.value))}
                    className="stitch-slider"
                    aria-label="Savings target percentage"
                  />
                </div>

                {/* Balance Banner */}
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginTop: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    background: isBalanced ? 'var(--color-surface-container-low)' : 'var(--color-error-container)',
                    color: isBalanced ? 'var(--color-on-surface)' : 'var(--color-error)',
                  }}
                >
                  <span>Combined Allocation:</span>
                  <strong className="tabular-nums">
                    {totalPct}% {isBalanced ? '(Balanced)' : `(Adjust by ${100 - totalPct}%)`}
                  </strong>
                </div>
              </div>
            </Card>
          </div>

          {/* Results Output Column (7 cols) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Needs Card */}
            <div className="calc-breakdown-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow">Bucket 01</span>
                  <h3 className="breakdown-cat-title">Essential Needs ({needsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums" style={{ color: 'var(--color-primary)' }}>
                  {currency}{needsAmount.toLocaleString()} <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-secondary)' }}>/ month</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary)', margin: 0 }}>
                Covers your shelter, standard groceries, utilities, tuition dues, and healthcare maintenance.
              </p>
            </div>

            {/* Wants Card */}
            <div className="calc-breakdown-card" style={{ borderLeft: '4px solid var(--color-tertiary-container)' }}>
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow" style={{ color: 'var(--color-tertiary-container)' }}>Bucket 02</span>
                  <h3 className="breakdown-cat-title">Discretionary Wants ({wantsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums" style={{ color: 'var(--color-tertiary-container)' }}>
                  {currency}{wantsAmount.toLocaleString()} <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-secondary)' }}>/ month</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary)', margin: 0 }}>
                Covers dining out, streaming services, weekend social trips, and lifestyle upgrades without guilt.
              </p>
            </div>

            {/* Savings Card */}
            <div className="calc-breakdown-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
              <div className="breakdown-header">
                <div>
                  <span className="section-eyebrow" style={{ color: 'var(--color-secondary)' }}>Bucket 03</span>
                  <h3 className="breakdown-cat-title">Savings & Buffer ({savingsPct}%)</h3>
                </div>
                <div className="breakdown-allocated-val tabular-nums" style={{ color: 'var(--color-secondary)' }}>
                  {currency}{savingsAmount.toLocaleString()} <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-secondary)' }}>/ month</span>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-secondary)', margin: 0 }}>
                Emergency cushion, high-yield savings deposits, and student debt reduction buffer.
              </p>
            </div>

            {/* Annual Wealth Accrual Projection Banner */}
            <div style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '20px', borderRadius: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>
                  Educational estimate
                </span>
                <div className="tabular-nums" style={{ fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>
                  +{currency}{annualSavings.toLocaleString()} / year
                </div>
                <span style={{ fontSize: '13px', opacity: 0.9 }}>
                  This is a simple estimate based on the current income and savings percentage.
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
