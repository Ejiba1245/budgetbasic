import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Badge } from './Badge'

export function EducationalModuleCard({
  moduleNumber,
  title,
  description,
  badgeText,
  badgeVariant = 'secondary',
  icon = 'auto_stories',
  readTime = '5 min read',
  to = '#',
  linkText = 'Explore Lesson →',
  className = '',
  children,
}) {
  return (
    <Card elevation={1} hoverEffect className={`edu-module-card ${className}`}>
      <div className="edu-card-top">
        <div className="edu-card-header-row">
          <div className="edu-icon-wrap">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          {badgeText && (
            <Badge variant={badgeVariant}>
              {badgeText}
            </Badge>
          )}
        </div>

        {moduleNumber && (
          <span className="edu-module-id">{moduleNumber}</span>
        )}

        <h3 className="edu-module-title">{title}</h3>
        <p className="edu-module-desc">{description}</p>

        {children}
      </div>

      <div className="edu-card-bottom">
        <span className="edu-read-time">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          <span>{readTime}</span>
        </span>
        <Link to={to} className="edu-link">
          {linkText}
        </Link>
      </div>
    </Card>
  )
}
