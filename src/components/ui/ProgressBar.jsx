export function ProgressBar({
  value = 0,
  max = 100,
  color = 'primary',
  label,
  valueText,
  height = '8px',
  className = '',
  showIndicator = false,
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={`stitch-progress-wrap ${className}`}>
      {(label || valueText) && (
        <div className="progress-header">
          {label && <span className="progress-label">{label}</span>}
          {valueText ? (
            <span className="progress-value-text">{valueText}</span>
          ) : (
            showIndicator && <span className="progress-value-text">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="progress-track" style={{ height }}>
        <div
          className={`progress-fill bg-${color}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}
