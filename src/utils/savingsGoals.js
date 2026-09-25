export function calculateSavingsGoal({ targetAmount, currentSavings, monthlyContribution }) {
  const remaining = Math.max(targetAmount - currentSavings, 0)
  const progress = Math.min(100, Math.max(0, (currentSavings / targetAmount) * 100))

  return {
    remaining,
    progress,
    months: remaining > 0 ? Math.ceil(remaining / monthlyContribution) : null,
  }
}

