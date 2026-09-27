export const needsVsWantsScenarios = [
  { id: 'textbook', name: 'Required course textbook', type: 'NEED' },
  { id: 'coffee', name: 'Daily premium coffee', type: 'WANT' },
  { id: 'toiletries', name: 'Basic toiletries', type: 'NEED' },
  { id: 'gaming-accessory', name: 'New gaming accessory', type: 'WANT' },
]

export const sampleBudgetRows = [
  ['Income', 'Part-time work and allowance', '$1,200'],
  ['Fixed expense', 'Shared accommodation', '$420'],
  ['Variable expense', 'Food and transport', '$260'],
  ['Flexible spending', 'Entertainment and social plans', '$120'],
  ['Savings', 'Goal contribution', '$150'],
]

export const variableExpenseQuestion = {
  id: 'variable-expense',
  prompt: 'Which item is most likely to be a variable expense?',
  options: [
    { value: 'a', label: 'A monthly rent payment' },
    { value: 'b', label: 'Transport used during the month' },
    { value: 'c', label: 'A fixed school fee' },
  ],
  correctOption: 'b',
  correctFeedback: 'Correct. Transport can change based on use.',
  incorrectFeedback: 'Not quite. Think about which cost can change from month to month.',
}
