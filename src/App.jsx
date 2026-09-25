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
import { PlaceholderPage } from './pages/PlaceholderPage'
import { NotFound } from './pages/NotFound'
import { CreateProfile } from './pages/CreateProfile'
import { SignIn } from './pages/SignIn'
import { StudentDashboard } from './pages/StudentDashboard'
import { StudentProfileProvider } from './context/StudentProfileContext'
import './App.css'
import './components/ui/LessonSystem.css'

const placeholderRoutes = {
  '/gallery': ['Learning gallery', 'A future home for visual explainers and budgeting infographics.'],
  '/chatbot': ['BudgetBee', 'A friendly learning companion foundation for future budgeting conversations.'],
  '/about': ['About BudgetBasics', 'Learn about the educational purpose behind the NextGen BudgetBee project.'],
  '/feedback': ['Feedback', 'A foundation for sharing thoughts that can help improve the learning experience.'],
  '/contact': ['Contact', 'Find the project contact information and ways to connect in a future phase.'],
  '/sitemap': ['Sitemap', 'Browse the main learning areas and supporting pages.'],
}

function App() {
  return (
    <BrowserRouter>
      <StudentProfileProvider>
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          {Object.entries(placeholderRoutes).map(([path, [title, description]]) => (
            <Route
              key={path}
              path={path}
              element={<PlaceholderPage title={title} description={description} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AppShell>
      </StudentProfileProvider>
    </BrowserRouter>
  )
}

export default App
