import { describe, expect, it } from 'vitest'
import { filterResources, normalizeSearchText } from './search'
import { resources } from '../data/resources'

describe('normalizeSearchText', () => {
  it('lowercases, strips punctuation and collapses whitespace', () => {
    expect(normalizeSearchText('  50/30-20 Rule!  ')).toBe('50 30 20 rule')
  })
})

describe('filterResources', () => {
  it('returns every resource for a blank query', () => {
    expect(filterResources('')).toHaveLength(resources.length)
    expect(filterResources('   ')).toHaveLength(resources.length)
  })

  it('matches a query against titles, descriptions and keywords', () => {
    expect(filterResources('savings').map((item) => item.route)).toContain('/savings-goals')
    expect(filterResources('impulse').map((item) => item.route)).toContain('/money-mistakes')
  })

  it('is case-insensitive', () => {
    expect(filterResources('SAVINGS')).toEqual(filterResources('savings'))
  })

  it('requires every token in a multi-word query to match', () => {
    expect(filterResources('savings cryptocurrency')).toEqual([])
    expect(filterResources('savings goal').length).toBeGreaterThan(0)
    expect(filterResources('savings goal').every((item) => item.route === '/savings-goals')).toBe(true)
  })

  it('returns an empty result set when nothing matches', () => {
    expect(filterResources('crypto mining')).toEqual([])
  })

  it('combines the query with the category filter', () => {
    const tools = filterResources('', 'Tools')

    expect(tools.length).toBeGreaterThan(0)
    expect(tools.every((item) => item.category === 'Tools')).toBe(true)
    expect(filterResources('emergency fund')).toHaveLength(1)
  })
})
