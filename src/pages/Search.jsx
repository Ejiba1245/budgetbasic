import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { PageContainer } from '../components/layout/PageContainer'
import { filterResources, resourceTypes } from '../data/resources'

export function Search() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const results = useMemo(() => filterResources(query, category), [query, category])
  const isFiltered = query.trim() !== '' || category !== 'All'

  const resetSearch = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <PageContainer className="search-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />

      <header className="search-page-header">
        <span className="section-eyebrow">Find a learning resource</span>
        <h1 className="section-title">Search BudgetBasics</h1>
        <p className="section-description">Search lessons and tools by topic, then open the resource that fits your question.</p>
      </header>

      <section className="search-controls" aria-label="Search and filter resources">
        <div className="search-field-wrap">
          <label htmlFor="resource-search" className="sr-only">Search resources</label>
          <span className="material-symbols-outlined" aria-hidden="true">search</span>
          <input id="resource-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try savings, transport, or debt" autoComplete="off" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>}
        </div>
        <div className="search-filter-control">
          <label htmlFor="resource-type">Show</label>
          <select id="resource-type" value={category} onChange={(event) => setCategory(event.target.value)}>
            {resourceTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        {isFiltered && <button type="button" className="search-reset-button" onClick={resetSearch}>Reset</button>}
      </section>

      <section className="search-results" aria-labelledby="search-results-title" aria-live="polite">
        <div className="search-results-heading">
          <h2 id="search-results-title">{isFiltered ? `${results.length} ${results.length === 1 ? 'resource' : 'resources'} found` : 'Explore all resources'}</h2>
          <span>{category === 'All' ? 'Lessons and tools' : `${category} resources`}</span>
        </div>

        {results.length > 0 ? (
          <div className="search-results-list">
            {results.map((resource) => (
              <article className="search-result" key={resource.route}>
                <div className="search-result-number" aria-hidden="true"><span className="material-symbols-outlined">{resource.category === 'Tools' ? 'tune' : 'menu_book'}</span></div>
                <div className="search-result-body">
                  <div className="search-result-meta"><span>{resource.category}</span><i aria-hidden="true"></i><span>{resource.type}</span></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="search-result-topics"><span>Topics:</span> {resource.keywords.slice(0, 3).join(' · ')}</div>
                </div>
                <Link to={resource.route} className="search-open-link">Open resource <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="search-empty-state">
            <span className="material-symbols-outlined" aria-hidden="true">search_off</span>
            <h3>No resources found</h3>
            <p>Try a broader term, check the spelling, or clear the search and filter to see everything again.</p>
            <button type="button" className="search-reset-button" onClick={resetSearch}>Show all resources</button>
          </div>
        )}
      </section>
    </PageContainer>
  )
}

