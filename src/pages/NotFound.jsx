import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { routePaths } from '../data/navigation'

export function NotFound() {
  return (
    <PageContainer className="not-found-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Page not found' }]} />

      <header className="not-found-header">
        <span className="lesson-eyebrow">Error 404</span>
        <h1>That page isn&apos;t part of the learning path.</h1>
        <p>
          The address you followed does not match any BudgetBasics lesson or tool. The pages below are
          the ones that do exist.
        </p>
      </header>

      <section className="not-found-links" aria-labelledby="not-found-links-title">
        <h2 id="not-found-links-title">Available pages</h2>
        <ul>
          {routePaths.map((path) => (
            <li key={path}>
              <Link to={path}>{path === '/' ? 'Home' : path.replace('/', '').replace(/-/g, ' ')}</Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="not-found-actions">
        <Link to="/" className="stitch-btn stitch-btn-primary stitch-btn-md">Return home</Link>
        <Link to="/sitemap" className="stitch-btn stitch-btn-secondary stitch-btn-md">Open the sitemap</Link>
      </div>
    </PageContainer>
  )
}
