import { Button } from './Button'

export function EmptyState({
  icon = 'inbox',
  title = 'No items found',
  description,
  actionLabel,
  onAction,
  actionTo,
}) {
  return (
    <div className="feedback-state empty-state">
      <div className="state-icon-circle">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="state-title">{title}</h3>
      {description && <p className="state-desc">{description}</p>}
      {(actionLabel && (onAction || actionTo)) && (
        <Button to={actionTo} onClick={onAction} variant="secondary">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export function ErrorState({
  title = 'Something went wrong',
  description,
  retryLabel = 'Try Again',
  onRetry,
}) {
  return (
    <div className="feedback-state error-state" role="alert">
      <div className="state-icon-circle error">
        <span className="material-symbols-outlined">error</span>
      </div>
      <h3 className="state-title">{title}</h3>
      {description && <p className="state-desc">{description}</p>}
      {onRetry && (
        <Button onClick={onRetry} variant="secondary">
          {retryLabel}
        </Button>
      )}
    </div>
  )
}

export function SuccessState({
  title = 'Success!',
  description,
  actionLabel,
  onAction,
  actionTo,
}) {
  return (
    <div className="feedback-state success-state">
      <div className="state-icon-circle success">
        <span className="material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="state-title">{title}</h3>
      {description && <p className="state-desc">{description}</p>}
      {(actionLabel && (onAction || actionTo)) && (
        <Button to={actionTo} onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
