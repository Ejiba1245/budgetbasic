import { Link } from 'react-router-dom'
import { Breadcrumbs } from './Breadcrumbs'
import { resolveAsset } from '../../data/assets'

export function LessonHeader({ eyebrow, title, intro, asset, alt, breadcrumbs = [] }) {
  return (
    <header className="lesson-header">
      <Breadcrumbs items={breadcrumbs} />
      <div className="lesson-header-grid">
        <div>
          <span className="lesson-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {asset && <img className="lesson-header-image" src={resolveAsset(asset) || asset} alt={alt} />}
      </div>
    </header>
  )
}

export function LearningObjectives({ items }) {
  return <section className="lesson-objectives" aria-labelledby="objectives-title"><div><span className="lesson-eyebrow">Before you begin</span><h2 id="objectives-title">By the end of this lesson, you can</h2></div><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

export function LessonSection({ number, eyebrow, title, children, id }) {
  return <section className="lesson-section" id={id}><div className="lesson-section-number">{String(number).padStart(2, '0')}</div><div className="lesson-section-content">{eyebrow && <span className="lesson-eyebrow">{eyebrow}</span>}<h2>{title}</h2>{children}</div></section>
}

export function ExampleBlock({ title = 'Example', children }) { return <aside className="lesson-example"><span className="lesson-eyebrow">{title}</span>{children}</aside> }

export function KeyTakeaways({ items }) { return <section className="lesson-takeaways"><span className="lesson-eyebrow">Key takeaways</span><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section> }

export function KnowledgeCheck({ question, options, answer, explanation }) {
  return <details className="knowledge-check"><summary>Knowledge check: {question}</summary><div className="knowledge-options">{options.map((option) => <span key={option}>{option}</span>)}</div><p><strong>Answer:</strong> {answer}. {explanation}</p></details>
}

export function LessonNavigation({ previous, next }) {
  return <nav className="lesson-navigation" aria-label="Lesson navigation">{previous ? <Link to={previous.to}>← {previous.label}</Link> : <span />}{next && <Link to={next.to}>{next.label} →</Link>}</nav>
}

export function ComparisonTable({ columns, rows }) {
  return <div className="lesson-table-wrap"><table className="lesson-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`} data-label={columns[index]}>{cell}</td>)}</tr>)}</tbody></table></div>
}
