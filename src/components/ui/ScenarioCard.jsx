import { Card } from './Card'

export function ScenarioCard({
  icon = 'payments',
  category = 'Expense',
  title,
  description,
  estimate,
  rationale,
  classification = 'NEED', // 'NEED' | 'WANT' | 'SAVINGS'
  className = '',
}) {
  const isNeed = classification === 'NEED'
  const isWant = classification === 'WANT'

  return (
    <Card elevation={1} className={`scenario-card ${isNeed ? 'type-need' : isWant ? 'type-want' : 'type-savings'} ${className}`}>
      <div className={`card-top-accent ${isNeed ? 'bg-need' : isWant ? 'bg-want' : 'bg-savings'}`} />

      <div className="scenario-body">
        <div className="scenario-header">
          <div className="scenario-cat-group">
            <span className="scenario-icon-wrap">
              <span className="material-symbols-outlined text-[18px]">{icon}</span>
            </span>
            <span className="scenario-cat-label">{category}</span>
          </div>

          <span className={`classification-badge ${isNeed ? 'badge-need' : isWant ? 'badge-want' : 'badge-savings'}`}>
            <span className="material-symbols-outlined text-[14px]">check</span>
            <span>{classification}</span>
          </span>
        </div>

        <h3 className="scenario-title">{title}</h3>
        <p className="scenario-desc">{description}</p>
      </div>

      <div className="scenario-footer">
        <span className="scenario-estimate tabular-nums">{estimate}</span>
        <span className="scenario-rationale">{rationale}</span>
      </div>
    </Card>
  )
}
