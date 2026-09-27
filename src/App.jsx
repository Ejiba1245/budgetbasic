import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Home } from './pages/Home'
import { BudgetingBasics } from './pages/BudgetingBasics'
import { NeedsVsWants } from './pages/NeedsVsWants'
import { Calculator503020 } from './pages/Calculator503020'
import { SavingsGoals } from './pages/SavingsGoals'
import { ExpensePlanner } from './pages/ExpensePlanner'
import { MoneyMistakes } from './pages/MoneyMistakes'
import { LearningGallery } from './pages/LearningGallery'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'
import { Chatbot } from './pages/Chatbot'
import { About } from './pages/About'
import { Feedback } from './pages/Feedback'
import { Contact } from './pages/Contact'
import { Sitemap } from './pages/Sitemap'
import './App.css'
import './components/ui/LessonSystem.css'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budgeting-basics" element={<BudgetingBasics />} />
          <Route path="/needs-vs-wants" element={<NeedsVsWants />} />
          <Route path="/50-30-20" element={<Calculator503020 />} />
          <Route path="/savings-goals" element={<SavingsGoals />} />
          <Route path="/expense-planner" element={<ExpensePlanner />} />
          <Route path="/money-mistakes" element={<MoneyMistakes />} />
          <Route path="/learning-gallery" element={<LearningGallery />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
