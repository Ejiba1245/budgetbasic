import { describe, expect, it } from 'vitest'
import { calculateExpenseSummary, expenseCategories, formatExpenseCurrency, sampleBalance, validateExpense } from './expensePlanner'

const validExpense = {
  date: '2026-03-14',
  category: 'Food',
  description: 'Groceries',
  amount: '42.50',
}

describe('validateExpense', () => {
  it('accepts a complete, valid expense', () => {
    expect(validateExpense(validExpense)).toEqual({})
  })

  it('requires a date, category, description and amount', () => {
    const errors = validateExpense({ date: '', category: '', description: '', amount: '' })

    expect(Object.keys(errors).sort()).toEqual(['amount', 'category', 'date', 'description'])
  })

  it('rejects an unparseable date', () => {
    expect(validateExpense({ ...validExpense, date: 'not-a-date' }).date).toBe('Enter a valid date.')
  })

  it('rejects a category that is not in the allowed list', () => {
    expect(validateExpense({ ...validExpense, category: 'Crypto' }).category).toBe('Select an expense category.')
    expect(expenseCategories).toContain('Food')
  })

  it('rejects non-positive and non-numeric amounts', () => {
    expect(validateExpense({ ...validExpense, amount: '0' }).amount).toBe('Enter an amount greater than 0.')
    expect(validateExpense({ ...validExpense, amount: '-5' }).amount).toBe('Enter an amount greater than 0.')
    expect(validateExpense({ ...validExpense, amount: 'abc' }).amount).toBe('Enter an amount greater than 0.')
  })

  it('trims whitespace before checking the description', () => {
    expect(validateExpense({ ...validExpense, description: '   ' }).description).toBe('Enter a description.')
  })
})

describe('calculateExpenseSummary', () => {
  it('totals expenses and reports the remaining balance', () => {
    const summary = calculateExpenseSummary([
      { amount: 40 },
      { amount: 25.5 },
      { amount: '10' },
    ])

    expect(summary.total).toBeCloseTo(75.5, 5)
    expect(summary.remaining).toBeCloseTo(sampleBalance - 75.5, 5)
    expect(summary.isOverBudget).toBe(false)
  })

  it('flags an over-budget plan', () => {
    const summary = calculateExpenseSummary([{ amount: sampleBalance + 1 }])

    expect(summary.isOverBudget).toBe(true)
    expect(summary.remaining).toBeLessThan(0)
  })

  it('ignores unusable amounts instead of producing NaN', () => {
    const summary = calculateExpenseSummary([{ amount: 'abc' }, { amount: undefined }, { amount: 10 }])

    expect(summary.total).toBe(10)
    expect(Number.isNaN(summary.total)).toBe(false)
  })

  it('returns a zero total for an empty or missing list', () => {
    expect(calculateExpenseSummary([]).total).toBe(0)
    expect(calculateExpenseSummary().total).toBe(0)
  })
})

describe('formatExpenseCurrency', () => {
  it('formats a value with two decimal places', () => {
    expect(formatExpenseCurrency(1234.5)).toBe('$1,234.50')
  })

  it('formats unusable values as zero rather than NaN', () => {
    expect(formatExpenseCurrency('abc')).toBe('$0.00')
  })
})
