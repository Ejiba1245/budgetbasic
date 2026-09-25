import { Card } from './Card'

export function CalculatorCard({
  title,
  subtitle,
  icon = 'calculate',
  badge,
  children,
  className = '',
}) {
  return (
    <Card elevation={2} className={`calculator-card ${className}`}>
      <div className="calc-card-header">
        <div className="calc-title-group">
          {icon && (
            <div className="calc-icon-wrap">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
          )}
          <div>
            <h3 className="calc-title">{title}</h3>
            {subtitle && <p className="calc-subtitle">{subtitle}</p>}
          </div>
        </div>
        {badge && <span className="calc-badge">{badge}</span>}
      </div>

      <div className="calc-card-content">
        {children}
      </div>
    </Card>
  )
}
