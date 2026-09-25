export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading align-${align} ${className}`}>
      <div className="heading-text-group">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2 className="section-title">{title}</h2>
        {children && <p className="section-description">{children}</p>}
      </div>
      {action && <div className="heading-action">{action}</div>}
    </div>
  )
}
