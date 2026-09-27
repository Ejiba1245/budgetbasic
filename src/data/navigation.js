export const primaryNav = [
  { to: '/', label: 'Home' },
  { to: '/search', label: 'Search' },
]

export const navGroups = [
  {
    key: 'learn',
    title: 'Learn',
    icon: 'school',
    items: [
      {
        to: '/budgeting-basics',
        label: 'Budgeting Basics',
        description: 'Build a foundation in income, expenses, needs, wants and a balanced monthly plan.',
      },
      {
        to: '/needs-vs-wants',
        label: 'Needs vs Wants',
        description: 'Practise separating essential living expenses from flexible lifestyle choices.',
      },
      {
        to: '/50-30-20',
        label: '50/30/20 Rule',
        description: 'Explore a balanced percentage split for needs, wants and savings, then try the calculator.',
      },
      {
        to: '/money-mistakes',
        label: 'Money Mistakes',
        description: 'Learn from common habits such as impulse buying, costly debt and a missing emergency fund.',
      },
      {
        to: '/learning-gallery',
        label: 'Learning Gallery',
        description: 'Browse visual guides and quick-reference summaries of the core concepts.',
      },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    icon: 'calculate',
    items: [
      {
        to: '/savings-goals',
        label: 'Savings Goals',
        description: 'Set a target amount, choose a contribution and estimate a realistic timeline.',
      },
      {
        to: '/expense-planner',
        label: 'Expense Planner',
        description: 'Plan sample expenses by category and see the remaining balance for the session.',
      },
      {
        to: '/chatbot',
        label: 'BudgetBee Assistant',
        description: 'Ask rule-based educational questions about budgeting, saving and spending.',
      },
    ],
  },
  {
    key: 'project',
    title: 'Project',
    icon: 'info',
    items: [
      {
        to: '/about',
        label: 'About',
        description: 'Project purpose, educational approach, target audience and disclaimers.',
      },
      {
        to: '/feedback',
        label: 'Feedback',
        description: 'Share a rating and comments about the learning experience.',
      },
      {
        to: '/contact',
        label: 'Contact',
        description: 'Genuine project contact channels and demonstration notes.',
      },
      {
        to: '/sitemap',
        label: 'Sitemap',
        description: 'A visual index of every route in the BudgetBasics learning experience.',
      },
    ],
  },
]

export const navItems = navGroups.flatMap((group) => group.items)

export const routePaths = [...primaryNav.map((item) => item.to), ...navItems.map((item) => item.to)]
