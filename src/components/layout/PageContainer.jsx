export function PageContainer({ children, className = '', maxWidth = '1200px' }) {
  return (
    <div className={`page-container ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  )
}
