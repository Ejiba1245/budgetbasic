import { Card } from './Card'

export function MetricHighlightCard({
  icon,
  label,
  value,
  subtitle,
  badge,
  className = '',
}) {
  return (
    <Card elevation={1} className={`metric-highlight-card ${className}`}>
      <div className="metric-header">
        {icon && (
          <div className="metric-icon-wrap">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        )}
        {badge && <span className="metric-badge">{badge}</span>}
      </div>
      <div className="metric-body">
        <span className="metric-label">{label}</span>
        <span className="metric-value tabular-nums">{value}</span>
        {subtitle && <span className="metric-subtitle">{subtitle}</span>}
      </div>
    </Card>
  )
}
