import { useState } from 'react'
import { Link } from 'react-router-dom'
import moneyMistakesImage from '../assets/images/illustrations/common-money-mistakes.png'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { PageContainer } from '../components/layout/PageContainer'
import { EducationalImage } from '../components/ui/EducationalImage'
import { moneyMistakes } from '../data/mistakes'

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

      <figure className="money-mistakes-image">
        <img src={moneyMistakesImage} alt="Illustration of a wallet, falling coins and a warning sign representing common money mistakes." />
      </figure>

      <section className="mistakes-learning-intro" aria-labelledby="mistakes-start-title">
        <span className="section-eyebrow">How to use this lesson</span>
        <h2 id="mistakes-start-title">Notice the pattern, then choose the next action.</h2>
        <p>Money mistakes are common learning moments. The useful question is not “what is wrong with me?” but “what happened, and what small change would make the next decision easier?”</p>
        <p>Work through the eight patterns below in order. Each one pairs an explanation with a small habit you could actually practise, so the lesson ends with an action rather than a warning.</p>
      </section>

      <section className="mistakes-review-guide" aria-labelledby="mistakes-review-title"><EducationalImage asset="budgeting-basics.png" alt="Illustration representing a student reviewing a personal budget and making a new plan." className="mistakes-review-image" /><div><span className="section-eyebrow">A better response</span><h2 id="mistakes-review-title">Pause · Understand · Adjust</h2><p>A mistake is useful when it helps you see what happened. Review the choice without judgement, identify the pattern and make one practical change for next time.</p><div className="mistakes-review-steps"><span><b>01</b> Pause before reacting</span><span><b>02</b> Understand the cause</span><span><b>03</b> Adjust the next plan</span></div></div></section>

      <section className="mistakes-content" aria-labelledby="mistakes-list-title">
        <div className="mistakes-section-heading">
          <div>
            <span className="section-eyebrow">Eight patterns to notice</span>
            <h2 id="mistakes-list-title">Common mistakes and better habits</h2>
          </div>
          <span className="mistakes-instruction">Select a topic to read more</span>
        </div>

        <div className="mistakes-list">
          {moneyMistakes.map((mistake, index) => {
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

      <section className="mistakes-scenario-section" aria-labelledby="mistakes-scenario-title"><div><span className="section-eyebrow">Student scenario</span><h2 id="mistakes-scenario-title">A small purchase becomes a pattern.</h2><p>After several busy days, a student buys food and drinks on the way home instead of checking the weekly plan. The individual purchases feel manageable, but the repeated pattern leaves less money for transport and a savings goal.</p></div><div className="mistakes-corrective-list"><strong>What could help next?</strong><span>Record the purchases for one week.</span><span>Plan an easier lower-cost option.</span><span>Review the category before the next week begins.</span></div></section>

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
