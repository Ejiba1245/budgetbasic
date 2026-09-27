export const galleryCategories = ['All', 'Budgeting', 'Needs & Wants', 'Saving', 'Expenses']

export const infographics = [
  {
    id: 'needs-vs-wants',
    title: 'Needs vs Wants',
    category: 'Needs & Wants',
    caption: 'A need supports an essential responsibility; a want is usually more flexible.',
    alt: 'Illustration comparing essential needs with optional wants.',
    visual: { type: 'image', asset: 'needs-vs-wants.png' },
    to: '/needs-vs-wants',
  },
  {
    id: 'rule-503020',
    title: '50/30/20 Rule',
    category: 'Budgeting',
    caption: 'An educational guideline for thinking about needs, wants and savings.',
    alt: 'Infographic explaining the 50/30/20 budgeting guideline.',
    visual: { type: 'image', asset: '50-30-20-rule.png' },
    to: '/50-30-20',
  },
  {
    id: 'monthly-budget-cycle',
    title: 'Monthly Budget Cycle',
    category: 'Expenses',
    caption: 'Plan, spend, review and adjust as you learn what happened during the month.',
    alt: 'Four-step diagram: plan a budget, spend against it, review what happened, then adjust the next plan.',
    visual: { type: 'cycle', steps: ['Plan', 'Spend', 'Review', 'Adjust'] },
    to: '/budgeting-basics',
  },
  {
    id: 'savings-challenge',
    title: 'Saving Challenges',
    category: 'Saving',
    caption: 'Break a goal into smaller contributions and review progress regularly.',
    alt: 'Visual guide to breaking a savings target into manageable contributions.',
    visual: { type: 'image', asset: 'savings-challenge.png' },
    to: '/savings-goals',
  },
  {
    id: 'student-spending-choices',
    title: 'Student Spending Choices',
    category: 'Needs & Wants',
    caption: 'Study materials, food and transport can sit alongside flexible choices. Context helps you decide what to protect first.',
    alt: 'Illustration showing student choices including study materials, food, transport and entertainment.',
    visual: { type: 'image', asset: 'needs-wants-student-choices.png' },
    to: '/needs-vs-wants',
  },
  {
    id: 'small-expenses-add-up',
    title: 'Small Expenses Add Up',
    category: 'Expenses',
    caption: 'Review repeated small purchases together to notice patterns that are easy to miss one at a time.',
    alt: 'Diagram showing several small purchases grouped into one larger monthly total.',
    visual: { type: 'accumulation', amounts: ['$4', '$6', '$3', '$5', '$2'] },
    to: '/expense-planner',
  },
  {
    id: 'specific-saving-goal',
    title: 'A Specific Saving Goal',
    category: 'Saving',
    caption: 'A named target, amount, timeline and contribution make progress easier to review.',
    alt: 'Illustration representing a savings goal and progress toward it.',
    visual: { type: 'image', asset: 'savings-goals.png' },
    to: '/savings-goals',
  },
  {
    id: 'rule-503020-visual-guide',
    title: 'The 50/30/20 Visual Guide',
    category: 'Budgeting',
    caption: 'Use the proportions as a starting point for organising needs, wants and savings, then adjust them to fit the situation.',
    alt: 'Pie chart showing the educational 50/30/20 budgeting guideline.',
    visual: { type: 'image', asset: '50-30-20-student-rule.png' },
    to: '/50-30-20',
  },
  {
    id: 'savings-progress',
    title: 'Savings Progress',
    category: 'Saving',
    caption: 'A savings goal grows through a clear target, repeated contributions and regular review.',
    alt: 'Illustration of a piggy bank, growing savings bars and a plant.',
    visual: { type: 'image', asset: 'savings-goal-progress.png' },
    to: '/savings-goals',
  },
  {
    id: 'common-money-mistakes',
    title: 'Common Money Mistakes',
    category: 'Expenses',
    caption: 'Recognise spending patterns early, then choose one practical corrective action.',
    alt: 'Illustration of a wallet, falling coins and a warning sign representing money mistakes.',
    visual: { type: 'image', asset: 'common-money-mistakes.png' },
    to: '/money-mistakes',
  },
]

export function filterInfographics(category = 'All') {
  if (category === 'All') return infographics
  return infographics.filter((item) => item.category === category)
}
