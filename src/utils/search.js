import { resources } from '../data/resources'

export function normalizeSearchText(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[-_/]+/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function searchableTextOf(resource) {
  return normalizeSearchText(
    [resource.title, resource.description, resource.category, resource.type, ...resource.keywords].join(' '),
  )
}

export function matchesQuery(resource, query) {
  const tokens = normalizeSearchText(query).split(' ').filter(Boolean)
  if (tokens.length === 0) return true
  const haystack = searchableTextOf(resource)
  return tokens.every((token) => haystack.includes(token))
}

export function filterResources(query = '', category = 'All') {
  return resources.filter(
    (resource) => (category === 'All' || resource.category === category) && matchesQuery(resource, query),
  )
}
