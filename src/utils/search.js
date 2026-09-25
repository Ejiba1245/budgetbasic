export function searchItems(items, query) { const term = query.trim().toLowerCase(); return term ? items.filter((item) => JSON.stringify(item).toLowerCase().includes(term)) : items }
