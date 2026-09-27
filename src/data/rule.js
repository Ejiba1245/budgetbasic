export const allocationBuckets = [
  {
    key: 'needs',
    title: 'Essentials & Needs',
    badge: 'Essentials',
    icon: 'home_work',
    tone: 'primary',
    description:
      'Critical living expenses required to survive and function responsibly while enrolled or starting your career.',
    examples: [
      'Rent, dorm fees, or base mortgage',
      'Core groceries, meal-plan base',
      'Utilities, WiFi, primary transit pass',
      'Prescriptions, minimum student loan dues',
    ],
  },
  {
    key: 'wants',
    title: 'Lifestyle & Wants',
    badge: 'Flexible spending',
    icon: 'celebration',
    tone: 'tertiary',
    description:
      'Discretionary purchases that uplift student life, culture, recreation and social bonds without guilt.',
    examples: [
      'Takeout, coffee runs and dining out',
      'Streaming services, gaming subscriptions',
      'Concert tickets, campus social outings',
      'Non-essential wardrobe upgrades and travel',
    ],
  },
  {
    key: 'savings',
    title: 'Future & Savings',
    badge: 'Future needs',
    icon: 'trending_up',
    tone: 'secondary',
    description:
      'Direct safety netting, rapid emergency cash and debt reduction to support stability after graduation.',
    examples: [
      'A small liquid emergency buffer fund',
      'A high-yield savings account (HYSA)',
      'Deliberate debt principal prepayments',
      'Long-term saving toward further study',
    ],
  },
]

export const defaultAllocation = { needsPct: 50, wantsPct: 30, savingsPct: 20 }
