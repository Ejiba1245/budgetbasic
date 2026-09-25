import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
