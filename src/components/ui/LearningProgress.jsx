export function LearningProgress({
  course = 'COURSE: FOUNDATIONAL MONEY LITERACY • MODULE 01',
  sectionStatus = 'Section 1 of 3 (In Progress)',
  progressPct = 33,
}) {
  return (
    <div className="learning-progress-strip">
      <div className="progress-strip-container">
        <div className="course-title-group">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="course-text">{course}</span>
        </div>

        <div className="progress-status-group">
          <span className="section-status-text">{sectionStatus}</span>
          <div className="mini-track">
            <div
              className="mini-fill"
              style={{ width: `${progressPct}%` }}
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
