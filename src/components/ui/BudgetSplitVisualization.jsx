export function BudgetSplitVisualization({
  needsPct = 50,
  wantsPct = 30,
  savingsPct = 20,
  needsAmount,
  wantsAmount,
  savingsAmount,
  currency = '$',
  className = '',
}) {
  return (
    <div className={`budget-split-vis ${className}`}>
      {/* Visual Multi-segment Bar */}
      <div className="split-progress-bar" role="progressbar" aria-label="50/30/20 Ratio Distribution">
        <div
          className="split-segment segment-needs"
          style={{ width: `${needsPct}%` }}
          title={`Needs: ${needsPct}%`}
        />
        <div
          className="split-segment segment-wants"
          style={{ width: `${wantsPct}%` }}
          title={`Wants: ${wantsPct}%`}
        />
        <div
          className="split-segment segment-savings"
          style={{ width: `${savingsPct}%` }}
          title={`Savings: ${savingsPct}%`}
        />
      </div>

      {/* Legend & Values Row */}
      <div className="split-legend-grid">
        <div className="split-legend-item">
          <div className="split-legend-header">
            <span className="dot dot-needs" aria-hidden="true" />
            <span className="legend-label">Needs ({needsPct}%)</span>
          </div>
          {needsAmount !== undefined && (
            <span className="legend-amount tabular-nums">
              {currency}{typeof needsAmount === 'number' ? needsAmount.toLocaleString() : needsAmount}
            </span>
          )}
        </div>

        <div className="split-legend-item">
          <div className="split-legend-header">
            <span className="dot dot-wants" aria-hidden="true" />
            <span className="legend-label">Wants ({wantsPct}%)</span>
          </div>
          {wantsAmount !== undefined && (
            <span className="legend-amount tabular-nums">
              {currency}{typeof wantsAmount === 'number' ? wantsAmount.toLocaleString() : wantsAmount}
            </span>
          )}
        </div>

        <div className="split-legend-item">
          <div className="split-legend-header">
            <span className="dot dot-savings" aria-hidden="true" />
            <span className="legend-label">Savings ({savingsPct}%)</span>
          </div>
          {savingsAmount !== undefined && (
            <span className="legend-amount tabular-nums">
              {currency}{typeof savingsAmount === 'number' ? savingsAmount.toLocaleString() : savingsAmount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
