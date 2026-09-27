function toFiniteAmount(value) {
  const amount = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(amount) ? amount : 0
}

export const expenseCategories = [
  'Food',
  'Transport',
  'Education',
  'Entertainment',
  'Shopping',
  'Utilities',
  'Miscellaneous',
]

export const sampleBalance = 1200

export function calculateExpenseSummary(expenses = []) {
  const total = expenses.reduce((sum, expense) => sum + toFiniteAmount(expense?.amount), 0)

  return {
    total,
    remaining: sampleBalance - total,
    isOverBudget: total > sampleBalance,
  }
}

export function validateExpense(values = {}) {
  const errors = {}

  if (!values.date) errors.date = 'Select a date.'
  else if (Number.isNaN(new Date(`${values.date}T00:00:00`).getTime())) errors.date = 'Enter a valid date.'

  if (!expenseCategories.includes(values.category)) errors.category = 'Select an expense category.'

  const description = typeof values.description === 'string' ? values.description.trim() : ''
  if (!description) errors.description = 'Enter a description.'

  const rawAmount = typeof values.amount === 'string' ? values.amount.trim() : values.amount
  if (rawAmount === '' || rawAmount === undefined || rawAmount === null) errors.amount = 'Enter an amount greater than 0.'
  else if (!Number.isFinite(Number(rawAmount)) || Number(rawAmount) <= 0) errors.amount = 'Enter an amount greater than 0.'

  return errors
}

export function formatExpenseCurrency(value) {
  const amount = toFiniteAmount(value)
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
