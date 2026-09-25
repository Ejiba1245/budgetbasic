import { Link } from 'react-router-dom'

export function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="stitch-breadcrumbs">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="breadcrumb-item">
              {item.to && !isLast ? (
                <Link to={item.to} className="breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-current" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="material-symbols-outlined breadcrumb-sep" aria-hidden="true">
                  chevron_right
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
