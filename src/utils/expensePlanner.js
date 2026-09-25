export const expenseCategories = [
  'Food',
  'Transport',
  'Education',
  'Entertainment',
  'Shopping',
  'Utilities',
  'Miscellaneous',
]

export const sampleBalance = 100000

export function calculateExpenseSummary(expenses) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return {
    total,
    remaining: sampleBalance - total,
  }
}

export function validateExpense(values) {
  const errors = {}

  if (!values.date) errors.date = 'Select a date.'
  else if (Number.isNaN(new Date(`${values.date}T00:00:00`).getTime())) errors.date = 'Enter a valid date.'

  if (!expenseCategories.includes(values.category)) errors.category = 'Select an expense category.'
  if (!values.description.trim()) errors.description = 'Enter a description.'

  if (values.amount.trim() === '') errors.amount = 'Enter an amount greater than 0.'
  else if (!Number.isFinite(Number(values.amount)) || Number(values.amount) <= 0) errors.amount = 'Enter an amount greater than 0.'

  return errors
}

export function formatExpenseCurrency(value) {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

