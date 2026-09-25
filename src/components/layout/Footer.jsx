import { Link } from 'react-router-dom'
import budgetBasicsLogo from '../../assets/budgetbasics-logo.png'

export function Footer() {
  return (
    <footer className="stitch-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              <img src={budgetBasicsLogo} alt="BudgetBasics" width="132" height="32" className="footer-brand-mark" />
            </Link>
            <p className="footer-bio">Empowering the next generation with foundational financial knowledge and simple, effective tools.</p>
            <div className="footer-social-links" aria-label="Social links">
              <a href="#twitter" aria-label="Twitter"><span className="material-symbols-outlined" aria-hidden="true">alternate_email</span></a>
              <a href="#instagram" aria-label="Instagram"><span className="material-symbols-outlined" aria-hidden="true">camera_alt</span></a>
              <a href="#linkedin" aria-label="LinkedIn"><span className="material-symbols-outlined" aria-hidden="true">business_center</span></a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Platform</h3>
            <ul className="footer-nav-list">
              <li><Link to="/budgeting-basics">Courses</Link></li>
              <li><Link to="/50-30-20">Tools</Link></li>
              <li><Link to="/gallery">Resources</Link></li>
              <li><Link to="/chatbot">AI Assistant</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">About</h3>
            <ul className="footer-nav-list">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/about">The Team</Link></li>
              <li><Link to="/about">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-col-title">Newsletter</h3>
            <p>Get monthly financial tips and platform updates delivered to your inbox.</p>
            <form className="footer-newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <div className="footer-email-field">
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                <input id="newsletter-email" type="email" placeholder="Email address" required />
              </div>
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
