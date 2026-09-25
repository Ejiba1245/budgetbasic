import { Link, Navigate, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { useStudentProfile } from '../hooks/useStudentProfile'

const lessons = [
  ['01', 'Budgeting Basics', 'Start with income, expenses and a monthly plan.', '/budgeting-basics'],
  ['02', 'Needs vs Wants', 'Practise making thoughtful spending decisions.', '/needs-vs-wants'],
  ['03', '50/30/20 Rule', 'Explore a guideline for organising priorities.', '/50-30-20'],
  ['04', 'Savings Goals', 'Turn a goal into a timeline and contribution.', '/savings-goals'],
  ['05', 'Expense Planning', 'Record examples and review a sample balance.', '/expense-planner'],
  ['06', 'Money Mistakes', 'Recognise patterns and choose a next step.', '/money-mistakes'],
]

export function StudentDashboard() {
  const navigate = useNavigate()
  const { currentStudent, signOut } = useStudentProfile()
  if (!currentStudent) return <Navigate to="/signin" replace />
  return <PageContainer className="dashboard-page"><header className="dashboard-header"><div><span className="lesson-eyebrow">Your learning home</span><h1>Welcome back, {currentStudent.name}.</h1><p>Continue learning how to manage your money with confidence.</p></div><button type="button" className="profile-outline-button" onClick={() => { signOut(); navigate('/signin') }}>Sign out</button></header><section className="dashboard-section"><div className="dashboard-section-heading"><div><span className="lesson-eyebrow">Learning journey</span><h2>Choose a lesson</h2></div><Link to="/budgeting-basics">Continue learning →</Link></div><div className="dashboard-lesson-list">{lessons.map(([number, title, description, to]) => <Link className="dashboard-lesson-row" to={to} key={title}><span>{number}</span><span><strong>{title}</strong><small>{description}</small></span><span aria-hidden="true">→</span></Link>)}</div></section><section className="dashboard-lower-grid"><div className="dashboard-section"><span className="lesson-eyebrow">Quick tools</span><h2>Practise an idea</h2><div className="dashboard-tools"><Link to="/50-30-20">50/30/20 Calculator →</Link><Link to="/savings-goals">Savings Goals →</Link><Link to="/expense-planner">Expense Planner →</Link></div></div><aside className="dashboard-profile-note"><span className="lesson-eyebrow">Local profile</span><h2>{currentStudent.name}</h2><p>{currentStudent.email}</p><small>This profile is stored only in this browser. No password or server account is used.</small></aside></section></PageContainer>
}
