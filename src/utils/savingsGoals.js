function toSafeNumber(value) {
  const amount = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(amount) ? amount : 0
}

export function calculateSavingsGoal({ targetAmount, currentSavings, monthlyContribution } = {}) {
  const target = Math.max(0, toSafeNumber(targetAmount))
  const saved = Math.max(0, toSafeNumber(currentSavings))
  const contribution = Math.max(0, toSafeNumber(monthlyContribution))

  const remaining = Math.max(target - saved, 0)
  const progress = target > 0 ? Math.min(100, Math.max(0, (saved / target) * 100)) : 0
  const months = remaining > 0 ? (contribution > 0 ? Math.ceil(remaining / contribution) : null) : null

  return {
    target,
    currentSavings: saved,
    monthlyContribution: contribution,
    remaining,
    progress: Number.isFinite(progress) ? progress : 0,
    months,
    isTargetReached: remaining === 0,
    isContributionUsable: contribution > 0,
  }
}
