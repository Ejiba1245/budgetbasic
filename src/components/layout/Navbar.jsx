import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import budgetBasicsLogo from '../../assets/budgetbasics-logo.png'
import { useStudentProfile } from '../../hooks/useStudentProfile'

const learnItems = [
  { to: '/budgeting-basics', label: 'Budgeting Basics' },
  { to: '/needs-vs-wants', label: 'Needs vs Wants' },
  { to: '/50-30-20', label: '50/30/20 Rule' },
  { to: '/money-mistakes', label: 'Money Mistakes' },
  { to: '/learning-gallery', label: 'Learning Gallery' },
]

const toolItems = [
  { to: '/savings-goals', label: 'Savings Goals' },
  { to: '/expense-planner', label: 'Expense Planner' },
]

function RouteLink({ item, className = 'desktop-nav-link', onClick }) {
  return (
    <NavLink
      to={item.to}
      end
      className={({ isActive }) => `${className}${isActive ? ' active' : ''}`}
      onClick={onClick}
    >
      {item.label}
    </NavLink>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const { currentStudent } = useStudentProfile()
  const location = useLocation()
  const learnActive = learnItems.some((item) => item.to === location.pathname)
  const toolsActive = toolItems.some((item) => item.to === location.pathname)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const closeMenus = () => setOpenMenu(null)

  useEffect(() => {
    if (!mobileMenuOpen && !openMenu) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
        closeMenus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen, openMenu])

  const toggleMenu = (menu) => setOpenMenu((current) => (current === menu ? null : menu))
  const closeAllMenus = () => {
    closeMobileMenu()
    closeMenus()
  }

  return (
    <header className="stitch-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="brand-group" onClick={closeAllMenus}>
            <img src={budgetBasicsLogo} alt="BudgetBasics home" className="brand-logo-img" width="144" height="42" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink to="/" end className="desktop-nav-link">Home</NavLink>
            <div className="nav-group">
              <button type="button" className={`nav-group-trigger${learnActive ? ' is-active' : ''}`} aria-haspopup="menu" aria-expanded={openMenu === 'learn'} onClick={() => toggleMenu('learn')}>
                Learn <span className="material-symbols-outlined" aria-hidden="true">expand_more</span>
              </button>
              {openMenu === 'learn' && <div className="nav-group-menu" role="menu">{learnItems.map((item) => <RouteLink key={item.to} item={item} onClick={closeMenus} />)}</div>}
            </div>
            <div className="nav-group">
              <button type="button" className={`nav-group-trigger${toolsActive ? ' is-active' : ''}`} aria-haspopup="menu" aria-expanded={openMenu === 'tools'} onClick={() => toggleMenu('tools')}>
                Tools <span className="material-symbols-outlined" aria-hidden="true">expand_more</span>
              </button>
              {openMenu === 'tools' && <div className="nav-group-menu" role="menu">{toolItems.map((item) => <RouteLink key={item.to} item={item} onClick={closeMenus} />)}</div>}
            </div>
            <NavLink to="/search" end className="desktop-nav-link">Search</NavLink>
          </nav>
        </div>

        <div className="navbar-right">
          <Link to={currentStudent ? '/student-dashboard' : '/signin'} className="navbar-profile-link" onClick={closeAllMenus}>{currentStudent ? currentStudent.name : 'Sign In'}</Link>
          <Link to={currentStudent ? '/student-dashboard' : '/create-profile'} className="navbar-get-started" onClick={closeAllMenus}>{currentStudent ? 'Dashboard' : 'Get Started'}</Link>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => { setMobileMenuOpen((isOpen) => !isOpen); closeMenus() }}
          >
            <span className="material-symbols-outlined" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav-drawer${mobileMenuOpen ? ' is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          <RouteLink item={{ to: '/', label: 'Home' }} className="mobile-nav-link" onClick={closeAllMenus} />
          <p className="mobile-nav-section-title">Learn</p>
          {learnItems.map((item) => <RouteLink key={item.to} item={item} className="mobile-nav-link" onClick={closeAllMenus} />)}
          <p className="mobile-nav-section-title">Tools</p>
          {toolItems.map((item) => <RouteLink key={item.to} item={item} className="mobile-nav-link" onClick={closeAllMenus} />)}
          <RouteLink item={{ to: '/search', label: 'Search' }} className="mobile-nav-link" onClick={closeAllMenus} />
          <p className="mobile-nav-section-title">Profile</p>
          <RouteLink item={{ to: currentStudent ? '/student-dashboard' : '/signin', label: currentStudent ? 'Dashboard' : 'Sign In' }} className="mobile-nav-link" onClick={closeAllMenus} />
          {!currentStudent && <RouteLink item={{ to: '/create-profile', label: 'Create Profile' }} className="mobile-nav-link" onClick={closeAllMenus} />}
        </nav>
      </div>
    </header>
  )
}
