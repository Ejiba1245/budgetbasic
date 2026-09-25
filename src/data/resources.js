export const resourceTypes = ['All', 'Learn', 'Tools']

export const resources = [
  {
    title: 'Budgeting Basics',
    description: 'Learn how income, expenses, spending plans, and remaining money fit together.',
    category: 'Learn',
    keywords: ['budget', 'budgeting', 'income', 'expenses', 'spending', 'money plan'],
    route: '/budgeting-basics',
    type: 'Lesson',
  },
  {
    title: 'Needs vs Wants',
    description: 'Learn to separate essential expenses from flexible choices and spending priorities.',
    category: 'Learn',
    keywords: ['needs', 'wants', 'essential', 'non-essential', 'spending priorities', 'purchases'],
    route: '/needs-vs-wants',
    type: 'Lesson',
  },
  {
    title: '50 / 30 / 20 Rule',
    description: 'Try a simple percentage framework for needs, wants, savings, and financial goals.',
    category: 'Learn',
    keywords: ['50 30 20', '50/30/20', 'needs', 'wants', 'save', 'savings', 'budgeting', 'percentage'],
    route: '/50-30-20',
    type: 'Calculator',
  },
  {
    title: 'Savings Goals',
    description: 'Set a target, add your current savings, and estimate a regular monthly contribution.',
    category: 'Tools',
    keywords: ['save', 'saving', 'savings', 'goal', 'financial goal', 'target', 'money goal'],
    route: '/savings-goals',
    type: 'Calculator',
  },
  {
    title: 'Expense Planner',
    description: 'Plan expenses and see how food, transport, education, and other costs affect a sample balance.',
    category: 'Tools',
    keywords: ['expenses', 'expense', 'spending', 'tracking', 'food', 'transport', 'education', 'entertainment', 'shopping', 'utilities'],
    route: '/expense-planner',
    type: 'Planner',
  },
  {
    title: 'Money Mistakes',
    description: 'Recognise common habits involving impulse buying, debt, emergencies, spending, and saving.',
    category: 'Learn',
    keywords: ['money mistakes', 'impulse buying', 'budget mistakes', 'debt', 'emergency', 'spending', 'save', 'saving', 'financial habits'],
    route: '/money-mistakes',
    type: 'Guide',
  },
  {
    title: 'Learning Gallery',
    description: 'Explore concise visual explanations of budgeting, needs, wants, savings, debt, and financial goals.',
    category: 'Learn',
    keywords: ['learning', 'infographic', 'budgeting', 'needs', 'wants', 'save', 'savings', 'emergency fund', 'debt', 'financial goals', 'expense tracking'],
    route: '/learning-gallery',
    type: 'Resource gallery',
  },
]

export function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .replace(/[-_/]+/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function filterResources(query, category = 'All') {
  const normalizedQuery = normalizeSearchText(query)
  const queryTokens = normalizedQuery ? normalizedQuery.split(' ') : []

  return resources.filter((resource) => {
    const matchesCategory = category === 'All' || resource.category === category
    const searchableText = normalizeSearchText([resource.title, resource.description, resource.category, resource.type, ...resource.keywords].join(' '))
    const matchesSearch = queryTokens.length === 0 || queryTokens.every((token) => searchableText.includes(token))
    return matchesCategory && matchesSearch
  })
}
