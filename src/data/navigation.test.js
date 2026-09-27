import { describe, expect, it } from 'vitest'
import { navItems, primaryNav, routePaths } from './navigation'

const declaredRoutes = [
  '/',
  '/budgeting-basics',
  '/needs-vs-wants',
  '/50-30-20',
  '/savings-goals',
  '/expense-planner',
  '/money-mistakes',
  '/learning-gallery',
  '/search',
  '/chatbot',
  '/about',
  '/feedback',
  '/contact',
  '/sitemap',
]

describe('navigation data', () => {
  it('exposes exactly the routes registered in App.jsx', () => {
    expect([...routePaths].sort()).toEqual([...declaredRoutes].sort())
  })

  it('has no duplicate navigation entries', () => {
    expect(new Set(routePaths).size).toBe(routePaths.length)
  })

  it('gives every navigation item a label and a description used by the sitemap', () => {
    for (const item of [...primaryNav, ...navItems]) {
      expect(item.to.startsWith('/')).toBe(true)
      expect(item.label).toEqual(expect.any(String))
      expect(item.label.length).toBeGreaterThan(0)
    }
    for (const item of navItems) {
      expect(item.description).toEqual(expect.any(String))
    }
  })
})

describe('resource data', () => {
  it('only links search results to registered routes', async () => {
    const { resources } = await import('./resources')

    for (const resource of resources) {
      expect(declaredRoutes).toContain(resource.route)
    }
  })
})
