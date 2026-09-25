export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  icon,
  className = '',
  ...props
}) {
  return (
    <span className={`stitch-badge badge-${variant} badge-${size} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined badge-icon" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
