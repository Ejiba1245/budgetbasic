import { Link } from 'react-router-dom'

export function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClass = `stitch-btn stitch-btn-${variant} stitch-btn-${size} ${className}`

  const content = (
    <>
      {icon && <span className="material-symbols-outlined btn-icon-left" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="material-symbols-outlined btn-icon-right" aria-hidden="true">{iconRight}</span>}
    </>
  )

  if (to && !disabled) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={baseClass} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
