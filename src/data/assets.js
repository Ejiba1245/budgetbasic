const availableAssets = import.meta.glob('../assets/images/**/*.{webp,png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const imageAssets = {
  hero: { name: 'budgetbee-student-budgeting.png', alt: 'Student planning a monthly budget using income, expenses, and savings categories.' },
  lessons: {
    budgetingBasics: { name: 'budgeting-basics.png', alt: 'Abstract visual representing budgeting, planning, and organising financial choices.' },
    needsVsWants: { name: 'needs-vs-wants.png', alt: 'Illustration comparing essential needs with optional wants.' },
    savingsGoals: { name: 'savings-goals.png', alt: 'Illustration of setting a savings target and tracking progress toward it.' },
  },
  infographics: {
    needsVsWantsGuide: { name: 'needs-vs-wants-guide.webp', alt: 'Decision guide for comparing needs and wants before a purchase.' },
    rule503020: { name: '50-30-20-rule.png', alt: 'Visual explanation of the 50/30/20 budgeting guideline.' },
    monthlyBudgetCycle: { name: 'monthly-budget-cycle.webp', alt: 'Diagram showing the cycle of planning, spending, reviewing, and adjusting a monthly budget.' },
    savingsChallenge: { name: 'savings-challenge.png', alt: 'Visual guide to breaking a savings target into manageable contributions.' },
  },
  illustrations: {
    budgetPlanning: { name: 'budget-planning.webp', alt: 'Illustration of planning a monthly budget.' },
    savingMoney: { name: 'saving-money.webp', alt: 'Illustration of building savings through regular contributions.' },
    expensePlanning: { name: 'expense-planning.webp', alt: 'Illustration of organising regular and flexible expenses.' },
  },
  gallery: {
    needsVsWants: { name: 'needs-vs-wants.webp', alt: 'Visual comparison of needs and wants.' },
    budgetRule: { name: 'budget-rule.webp', alt: 'Visual summary of a budgeting rule.' },
    monthlyCycle: { name: 'monthly-cycle.webp', alt: 'Visual summary of the monthly budgeting cycle.' },
    savingsChallenge: { name: 'savings-challenge.webp', alt: 'Visual summary of a savings challenge.' },
  },
}

export function resolveAsset(name) {
  const entry = Object.entries(availableAssets).find(([path]) => path.endsWith(`/${name}`))
  return entry?.[1] || null
}
