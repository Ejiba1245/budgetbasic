import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { navGroups, primaryNav } from '../data/navigation'

const homeLink = primaryNav.find((item) => item.to === '/')
const searchLink = primaryNav.find((item) => item.to === '/search')

const sitemapGroups = [
  {
    key: 'start',
    title: 'Start',
    icon: 'home',
    items: [
      {
        ...homeLink,
        description: 'Overview of the BudgetBasics platform, core pathways and featured learning tools.',
      },
      {
        ...searchLink,
        description: 'Find lessons, interactive calculators and specific financial topics quickly.',
      },
    ],
  },
  ...navGroups,
]

export function Sitemap() {
  return (
    <PageContainer className="information-page sitemap-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Sitemap' }]} />

      <header className="sitemap-page-header">
        <span className="lesson-eyebrow">Site Structure</span>
        <h1>Sitemap</h1>
        <p className="information-lead">
          This sitemap is generated from the same navigation data used by the site header, so every link
          below points at a route that is currently registered in the application.
        </p>
      </header>

      <nav className="sitemap-grid" aria-label="Sitemap sections">
        {sitemapGroups.map((group) => (
          <section key={group.key} className="sitemap-section">
            <div className="sitemap-section-header">
              <span className="material-symbols-outlined sitemap-group-icon" aria-hidden="true">
                {group.icon}
              </span>
              <h2>{group.title}</h2>
            </div>
            <div className="sitemap-links">
              {group.items.map((item) => (
                <Link key={`${group.key}-${item.to}`} to={item.to} className="sitemap-item">
                  <div className="sitemap-item-header">
                    <strong>{item.label}</strong>
                    <span className="sitemap-badge" aria-hidden="true">{item.to}</span>
                  </div>
                  {item.description && <small>{item.description}</small>}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </PageContainer>
  )
}
