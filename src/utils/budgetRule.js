function toFiniteNumber(value, fallback = 0) {
  const amount = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(amount) ? amount : fallback
}

export const totalAllocation = 100

export const allocationPresets = [
  { label: '$1,200', sub: '(Part-time)', amount: 1200 },
  { label: '$2,400', sub: '(Avg Intern)', amount: 2400 },
  { label: '$3,500', sub: '(Entry Level)', amount: 3500 },
  { label: '$5,000', sub: '(Dual/Co-op)', amount: 5000 },
]

export const allocationRanges = {
  needs: { min: 20, max: 80 },
  wants: { min: 0, max: 60 },
  savings: { min: 0, max: 50 },
}

export function calculateBudgetSplit({ income, needsPct, wantsPct, savingsPct } = {}) {
  const safeIncome = Math.max(0, toFiniteNumber(income))
  const needs = Math.max(0, toFiniteNumber(needsPct))
  const wants = Math.max(0, toFiniteNumber(wantsPct))
  const savings = Math.max(0, toFiniteNumber(savingsPct))
  const totalPct = needs + wants + savings
  const isBalanced = Math.abs(totalPct - totalAllocation) < 0.0001
  const difference = Math.round((totalAllocation - totalPct) * 10) / 10

  const needsAmount = Math.round((safeIncome * needs) / totalAllocation)
  const wantsAmount = Math.round((safeIncome * wants) / totalAllocation)
  const savingsAmount = Math.round((safeIncome * savings) / totalAllocation)

  return {
    income: safeIncome,
    hasValidIncome: safeIncome > 0,
    needsPct: needs,
    wantsPct: wants,
    savingsPct: savings,
    totalPct,
    isBalanced,
    difference,
    needsAmount,
    wantsAmount,
    savingsAmount,
    annualSavings: savingsAmount * 12,
    canShowResult: isBalanced && safeIncome > 0,
  }
}
