import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import budgetBasicsLogo from '../../assets/budgetbasics-logo.png'
import { navGroups, primaryNav } from '../../data/navigation'

const homeLink = primaryNav.find((item) => item.to === '/')
const searchLink = primaryNav.find((item) => item.to === '/search')

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
  const location = useLocation()
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const closeMenus = () => setOpenMenu(null)
  const closeAllMenus = () => {
    closeMobileMenu()
    closeMenus()
  }

  useEffect(() => {
    if (!mobileMenuOpen && !openMenu) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeAllMenus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen, openMenu])

  const toggleMenu = (menu) => setOpenMenu((current) => (current === menu ? null : menu))

  return (
    <header className="stitch-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="brand-group" onClick={closeAllMenus}>
            <img src={budgetBasicsLogo} alt="BudgetBasics home" className="brand-logo-img" width="144" height="42" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <RouteLink item={homeLink} onClick={closeMenus} />
            {navGroups.map((group) => {
              const isActive = group.items.some((item) => item.to === location.pathname)
              return (
                <div className="nav-group" key={group.key}>
                  <button
                    type="button"
                    className={`nav-group-trigger${isActive ? ' is-active' : ''}`}
                    aria-haspopup="menu"
                    aria-expanded={openMenu === group.key}
                    onClick={() => toggleMenu(group.key)}
                  >
                    {group.title} <span className="nav-chevron" aria-hidden="true" />
                  </button>
                  {openMenu === group.key && (
                    <div className="nav-group-menu" role="menu">
                      {group.items.map((item) => (
                        <RouteLink key={item.to} item={item} onClick={closeMenus} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <RouteLink item={searchLink} onClick={closeMenus} />
          </nav>
        </div>

        <div className="navbar-right">
          <Link to="/budgeting-basics" className="navbar-get-started" onClick={closeAllMenus}>Get Started</Link>
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
          <RouteLink item={homeLink} className="mobile-nav-link" onClick={closeAllMenus} />
          {navGroups.map((group) => (
            <div key={group.key}>
              <p className="mobile-nav-section-title">{group.title}</p>
              {group.items.map((item) => (
                <RouteLink key={item.to} item={item} className="mobile-nav-link" onClick={closeAllMenus} />
              ))}
            </div>
          ))}
          <RouteLink item={searchLink} className="mobile-nav-link" onClick={closeAllMenus} />
        </nav>
      </div>
    </header>
  )
}
