import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { EducationalImage } from '../components/ui/EducationalImage'
import { filterInfographics, galleryCategories } from '../data/infographics'

function GalleryVisual({ item }) {
  if (item.visual.type === 'image') {
    return <EducationalImage asset={item.visual.asset} alt={item.alt} className="gallery-reconstruction-image" />
  }

  if (item.visual.type === 'cycle') {
    return (
      <div className="gallery-cycle-visual" role="img" aria-label={item.alt}>
        {item.visual.steps.map((step, index) => (
          <span className="gallery-cycle-step" key={step}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            {step}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="gallery-accumulation-visual" role="img" aria-label={item.alt}>
      <div className="gallery-accumulation-items">
        {item.visual.amounts.map((amount) => (
          <span key={amount}>{amount}</span>
        ))}
      </div>
      <span className="gallery-accumulation-arrow" aria-hidden="true">→</span>
      <span className="gallery-accumulation-total">one monthly total</span>
    </div>
  )
}

export function LearningGallery() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => filterInfographics(filter), [filter])

  return (
    <PageContainer className="gallery-reconstruction">
      <header className="gallery-reconstruction-header">
        <span className="lesson-eyebrow">Explore · Visual learning</span>
        <h1>Learning Gallery</h1>
        <p>Use concise visual guides to revisit budgeting, spending and saving concepts.</p>
      </header>

      <div className="gallery-filters" role="group" aria-label="Filter learning gallery">
        {galleryCategories.map((name) => (
          <button
            key={name}
            type="button"
            className={filter === name ? 'is-active' : ''}
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="gallery-no-results">
          <h2>No learning content matches this filter.</h2>
          <button type="button" onClick={() => setFilter('All')}>Show all topics</button>
        </div>
      ) : (
        <div className="gallery-reconstruction-grid">
          {filtered.map((item, index) => (
            <article className="gallery-reconstruction-item" key={item.id}>
              <GalleryVisual item={item} />
              <div className="gallery-reconstruction-copy">
                <span className="gallery-reconstruction-number">
                  {String(index + 1).padStart(2, '0')} · {item.category}
                </span>
                <h2>{item.title}</h2>
                <p>{item.caption}</p>
                <Link to={item.to}>
                  Open topic <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </PageContainer>
  )
}
