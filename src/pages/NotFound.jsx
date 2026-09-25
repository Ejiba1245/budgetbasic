import { Link } from 'react-router-dom'
export function NotFound() { return <section className="not-found container"><span className="eyebrow">Page not found</span><h1>404</h1><p className="page-intro">That page isn’t part of the BudgetBasics learning path.</p><Link className="button button-primary" to="/">Return home</Link></section> }
