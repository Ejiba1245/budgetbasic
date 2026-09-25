export function QuizOption({
  id,
  name,
  label,
  value,
  selected = false,
  correct,
  onChange,
  disabled = false,
}) {
  let stateClass = ''
  if (selected) {
    if (correct === true) stateClass = 'is-correct'
    else if (correct === false) stateClass = 'is-incorrect'
    else stateClass = 'is-selected'
  } else if (correct === true) {
    stateClass = 'was-correct-answer'
  }

  return (
    <label className={`quiz-option-card ${stateClass} ${disabled ? 'is-disabled' : ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selected}
        onChange={onChange}
        disabled={disabled}
        className="quiz-radio-input"
      />
      <div className="custom-radio-mark" aria-hidden="true">
        <span className="radio-inner-dot" />
      </div>
      <span className="quiz-option-text">{label}</span>
      {correct === true && selected && (
        <span className="material-symbols-outlined state-icon correct" aria-hidden="true">
          check_circle
        </span>
      )}
      {correct === false && selected && (
        <span className="material-symbols-outlined state-icon incorrect" aria-hidden="true">
          cancel
        </span>
      )}
    </label>
  )
}
