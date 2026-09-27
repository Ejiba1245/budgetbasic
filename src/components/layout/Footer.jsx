import { Link } from 'react-router-dom'
import budgetBasicsLogo from '../../assets/budgetbasics-logo.png'
import { InstagramIcon } from '../ui/SocialIcons'

export function Footer() {
  return (
    <footer className="stitch-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              <img src={budgetBasicsLogo} alt="BudgetBasics" width="132" height="32" className="footer-brand-mark" />
            </Link>
            <p className="footer-bio">A practical learning space for budgeting basics, smart spending habits and simple money confidence.</p>
            <div className="footer-social-links" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <a
                href="https://www.instagram.com/ejay5628/"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}
                aria-label="BudgetBasics Instagram profile @ejay5628 (opens in new tab)"
              >
                <InstagramIcon size={18} />
                <span>@ejay5628</span>
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Learn</h3>
            <ul className="footer-nav-list">
              <li><Link to="/budgeting-basics">Budgeting Basics</Link></li>
              <li><Link to="/needs-vs-wants">Needs vs Wants</Link></li>
              <li><Link to="/50-30-20">50/30/20 Rule</Link></li>
              <li><Link to="/savings-goals">Savings Goals</Link></li>
              <li><Link to="/money-mistakes">Money Mistakes</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Tools & Explore</h3>
            <ul className="footer-nav-list">
              <li><Link to="/expense-planner">Expense Planner</Link></li>
              <li><Link to="/50-30-20">Budget Calculator</Link></li>
              <li><Link to="/learning-gallery">Learning Gallery</Link></li>
              <li><Link to="/search">Search Resources</Link></li>
              <li><Link to="/chatbot">BudgetBee Assistant</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Project</h3>
            <ul className="footer-nav-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-disclaimer">Educational platform only. BudgetBasics does not provide financial advice, process payments or store permanent financial records.</p>
    </footer>
  )
}
