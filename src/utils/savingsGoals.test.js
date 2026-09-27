import { describe, expect, it } from 'vitest'
import { calculateSavingsGoal } from './savingsGoals'

describe('calculateSavingsGoal', () => {
  it('calculates the remaining amount, progress and timeline for a normal goal', () => {
    const result = calculateSavingsGoal({
      targetAmount: 1200,
      currentSavings: 200,
      monthlyContribution: 100,
    })

    expect(result.remaining).toBe(1000)
    expect(result.progress).toBeCloseTo(16.67, 1)
    expect(result.months).toBe(10)
    expect(result.isTargetReached).toBe(false)
  })

  it('rounds the estimated timeline up to a whole month', () => {
    expect(calculateSavingsGoal({ targetAmount: 1000, currentSavings: 0, monthlyContribution: 300 }).months).toBe(4)
    expect(calculateSavingsGoal({ targetAmount: 1001, currentSavings: 0, monthlyContribution: 300 }).months).toBe(4)
  })

  it('reports a reached target with no remaining amount and no timeline', () => {
    const result = calculateSavingsGoal({
      targetAmount: 500,
      currentSavings: 500,
      monthlyContribution: 50,
    })

    expect(result.remaining).toBe(0)
    expect(result.months).toBeNull()
    expect(result.isTargetReached).toBe(true)
    expect(result.progress).toBe(100)
  })

  it('caps progress at 100 when savings exceed the target', () => {
    const result = calculateSavingsGoal({
      targetAmount: 400,
      currentSavings: 900,
      monthlyContribution: 50,
    })

    expect(result.remaining).toBe(0)
    expect(result.progress).toBe(100)
  })

  it('returns no timeline when the monthly contribution is zero', () => {
    const result = calculateSavingsGoal({
      targetAmount: 800,
      currentSavings: 100,
      monthlyContribution: 0,
    })

    expect(result.months).toBeNull()
    expect(result.isContributionUsable).toBe(false)
    expect(result.remaining).toBe(700)
  })

  it('handles missing values without producing NaN or Infinity', () => {
    const result = calculateSavingsGoal({})

    expect(result.target).toBe(0)
    expect(result.remaining).toBe(0)
    expect(result.progress).toBe(0)
    expect(result.months).toBeNull()
    expect(Number.isNaN(result.progress)).toBe(false)
    expect(Number.isFinite(result.progress)).toBe(true)
  })

  it('treats negative and non-numeric inputs as zero instead of dividing by them', () => {
    const negative = calculateSavingsGoal({
      targetAmount: -100,
      currentSavings: -50,
      monthlyContribution: -20,
    })

    expect(negative.progress).toBe(0)
    expect(negative.remaining).toBe(0)

    const nonNumeric = calculateSavingsGoal({
      targetAmount: 'abc',
      currentSavings: null,
      monthlyContribution: undefined,
    })

    expect(nonNumeric.progress).toBe(0)
    expect(Number.isFinite(nonNumeric.progress)).toBe(true)
  })

  it('accepts numeric strings so it is safe to call with form values', () => {
    const result = calculateSavingsGoal({
      targetAmount: '600',
      currentSavings: '100',
      monthlyContribution: '50',
    })

    expect(result.remaining).toBe(500)
    expect(result.months).toBe(10)
  })
})
