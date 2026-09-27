import { useState } from 'react'

const ratingLevels = [
  { value: '1', score: 1, label: 'Needs improvement', full: '1 — Needs improvement' },
  { value: '2', score: 2, label: 'Fair', full: '2 — Fair' },
  { value: '3', score: 3, label: 'Good', full: '3 — Good' },
  { value: '4', score: 4, label: 'Very good', full: '4 — Very good' },
  { value: '5', score: 5, label: 'Excellent', full: '5 — Excellent' },
]

export function RatingInput({
  id = 'feedback-rating',
  name = 'rating',
  value,
  onChange,
  error,
  required = true,
  legend = 'Rating',
}) {
  const [hoverValue, setHoverValue] = useState(null)

  const activeScore = hoverValue || (value ? Number(value) : 0)
  const currentLevel = ratingLevels.find((r) => r.score === (hoverValue || (value ? Number(value) : 0)))

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(5, (Number(value) || 0) + 1)
      onChange(String(next))
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      const prev = Math.max(1, (Number(value) || 2) - 1)
      onChange(String(prev))
    }
  }

  return (
    <fieldset
      className={`normal-rating-fieldset ${error ? 'has-error' : ''}`}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <legend className="field-label">
        {legend} {required && <span className="required-mark" aria-hidden="true">*</span>}
      </legend>

      <div className="normal-rating-wrapper">
        {/* Star rating buttons */}
        <div
          className="star-rating-row"
          role="radiogroup"
          aria-label={legend}
          onMouseLeave={() => setHoverValue(null)}
        >
          {ratingLevels.map((lvl) => {
            const isFilled = lvl.score <= activeScore
            const isChecked = value === lvl.value

            return (
              <label
                key={lvl.value}
                className={`star-btn ${isFilled ? 'is-filled' : ''} ${isChecked ? 'is-checked' : ''}`}
                htmlFor={`${id}-${lvl.value}`}
                onMouseEnter={() => setHoverValue(lvl.score)}
                title={lvl.full}
              >
                <input
                  type="radio"
                  id={`${id}-${lvl.value}`}
                  name={name}
                  value={lvl.value}
                  checked={isChecked}
                  onChange={() => onChange(lvl.value)}
                  onKeyDown={handleKeyDown}
                  required={required}
                  className="sr-only"
                />
                <span
                  className="material-symbols-outlined star-icon"
                  style={{ fontVariationSettings: isFilled ? "'FILL' 1" : "'FILL' 0" }}
                  aria-hidden="true"
                >
                  star
                </span>
                <span className="sr-only">{lvl.full}</span>
              </label>
            )
          })}
        </div>

        {/* Dynamic active label badge */}
        <div className={`rating-status-badge ${currentLevel ? 'has-selection' : ''}`} aria-live="polite">
          {currentLevel ? (
            <>
              <span className="rating-score-num">{currentLevel.score} / 5</span>
              <span className="rating-score-sep" aria-hidden="true">—</span>
              <span className="rating-score-text">{currentLevel.label}</span>
            </>
          ) : (
            <span className="rating-placeholder-text">Click a star to rate (1–5)</span>
          )}
        </div>
      </div>

      {/* Quick selection buttons beneath */}
      <div className="rating-quick-pills" aria-label="Rating scale options">
        {ratingLevels.map((lvl) => {
          const isSelected = value === lvl.value
          return (
            <button
              key={lvl.value}
              type="button"
              className={`rating-quick-pill ${isSelected ? 'is-active' : ''}`}
              onClick={() => onChange(lvl.value)}
              onMouseEnter={() => setHoverValue(lvl.score)}
              onMouseLeave={() => setHoverValue(null)}
            >
              <span className="pill-num">{lvl.score}</span>
              <span className="pill-label">{lvl.label}</span>
            </button>
          )
        })}
      </div>

      {error && (
        <span id={`${id}-error`} className="field-error" role="alert" style={{ marginTop: '8px', display: 'block' }}>
          {error}
        </span>
      )}
    </fieldset>
  )
}
