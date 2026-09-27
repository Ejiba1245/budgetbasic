import { describe, expect, it } from 'vitest'
import { calculateBudgetSplit } from './budgetRule'

const balanced = { income: 2400, needsPct: 50, wantsPct: 30, savingsPct: 20 }

describe('calculateBudgetSplit', () => {
  it('splits income into needs, wants and savings for a balanced 50/30/20 allocation', () => {
    const result = calculateBudgetSplit(balanced)

    expect(result.needsAmount).toBe(1200)
    expect(result.wantsAmount).toBe(720)
    expect(result.savingsAmount).toBe(480)
    expect(result.annualSavings).toBe(5760)
    expect(result.totalPct).toBe(100)
    expect(result.isBalanced).toBe(true)
    expect(result.canShowResult).toBe(true)
  })

  it('marks the allocation as unbalanced when the percentages do not total 100', () => {
    const result = calculateBudgetSplit({ income: 2400, needsPct: 40, wantsPct: 30, savingsPct: 20 })

    expect(result.totalPct).toBe(90)
    expect(result.isBalanced).toBe(false)
    expect(result.difference).toBe(10)
    expect(result.canShowResult).toBe(false)
  })

  it('reports a negative difference when the percentages exceed 100', () => {
    const result = calculateBudgetSplit({ income: 1000, needsPct: 60, wantsPct: 40, savingsPct: 20 })

    expect(result.totalPct).toBe(120)
    expect(result.difference).toBe(-20)
    expect(result.isBalanced).toBe(false)
  })

  it('refuses to show a result when the income is zero, blank or negative', () => {
    for (const income of [0, '', -500, 'abc', null, undefined]) {
      const result = calculateBudgetSplit({ ...balanced, income })
      expect(result.hasValidIncome).toBe(false)
      expect(result.canShowResult).toBe(false)
      expect(result.needsAmount).toBe(0)
      expect(Number.isFinite(result.annualSavings)).toBe(true)
    }
  })

  it('handles being called with no arguments at all', () => {
    const result = calculateBudgetSplit()

    expect(result.income).toBe(0)
    expect(result.totalPct).toBe(0)
    expect(result.isBalanced).toBe(false)
    expect(result.canShowResult).toBe(false)
    expect(Number.isNaN(result.needsAmount)).toBe(false)
  })

  it('handles decimal percentages that still total 100', () => {
    const result = calculateBudgetSplit({ income: 1000, needsPct: 45.5, wantsPct: 29.5, savingsPct: 25 })

    expect(result.isBalanced).toBe(true)
    expect(result.canShowResult).toBe(true)
  })

  it('clamps negative percentages to zero rather than producing negative amounts', () => {
    const result = calculateBudgetSplit({ income: 1000, needsPct: -10, wantsPct: 110, savingsPct: 0 })

    expect(result.needsPct).toBe(0)
    expect(result.needsAmount).toBe(0)
    expect(result.isBalanced).toBe(false)
  })

  it('handles very large income values without producing Infinity', () => {
    const result = calculateBudgetSplit({ ...balanced, income: 1e12 })

    expect(result.needsAmount).toBe(5e11)
    expect(Number.isFinite(result.annualSavings)).toBe(true)
  })
})
