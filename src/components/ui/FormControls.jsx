export function FormField({ label, id, error, hint, children, className = '' }) {
  return (
    <div className={`stitch-form-field ${className}`}>
      {label && <label htmlFor={id} className="field-label">{label}</label>}
      {children}
      {hint && !error && <span id={`${id}-hint`} className="field-hint">{hint}</span>}
      {error && <span id={`${id}-error`} className="field-error" role="alert">{error}</span>}
    </div>
  )
}

export function Input({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  className = '',
  disabled = false,
  error = false,
  ...props
}) {
  return (
    <div className={`stitch-input-wrap ${prefix ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''} ${error ? 'has-error' : ''}`}>
      {prefix && <span className="input-prefix" aria-hidden="true">{prefix}</span>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`stitch-input ${className}`}
        {...props}
      />
      {suffix && <span className="input-suffix">{suffix}</span>}
    </div>
  )
}

export function Select({
  id,
  value,
  onChange,
  options = [],
  children,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <div className="stitch-select-wrap">
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`stitch-select ${className}`}
        {...props}
      >
        {options.length > 0
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      <span className="material-symbols-outlined select-chevron" aria-hidden="true">
        expand_more
      </span>
    </div>
  )
}

export function Textarea({
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`stitch-textarea ${className}`}
      {...props}
    />
  )
}
