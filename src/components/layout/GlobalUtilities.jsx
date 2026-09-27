import { useEffect, useState } from 'react'

export function GlobalUtilities() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => { const scroll = () => setShowTop(window.scrollY > 500); window.addEventListener('scroll', scroll); return () => window.removeEventListener('scroll', scroll) }, [])
  return showTop ? <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><span className="material-symbols-outlined" aria-hidden="true">north</span></button> : null
}
