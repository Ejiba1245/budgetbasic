export function Card({
  children,
  elevation = 1,
  className = '',
  hoverEffect = false,
  as: Component = 'div',
  ...props
}) {
  const cardClass = `stitch-card elevation-${elevation} ${hoverEffect ? 'hover-lift' : ''} ${className}`

  return (
    <Component className={cardClass} {...props}>
      {children}
    </Component>
  )
}
