import { chatbotFallback, chatbotKnowledge } from '../data/chatbotKnowledge'

const STOP_TOKENS = new Set([
  'the', 'and', 'for', 'you', 'your', 'are', 'was', 'can', 'could', 'should', 'would',
  'what', 'which', 'when', 'where', 'how', 'why', 'who', 'does', 'did', 'with', 'from',
  'that', 'this', 'there', 'have', 'has', 'had', 'been', 'being', 'about', 'into',
  'difference', 'mean', 'means', 'please', 'help', 'tell', 'give',
])

function stem(token) {
  return token.length > 3 && token.endsWith('s') ? token.slice(0, -1) : token
}

function keywordTokens(keyword) {
  return normalizeChatbotQuestion(keyword)
    .split(' ')
    .filter((token) => token.length > 2 && !STOP_TOKENS.has(token))
    .map(stem)
}

export function normalizeChatbotQuestion(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9/ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function scoreEntry(normalized, entry) {
  const phraseScore = entry.keywords.reduce(
    (total, keyword) => total + (normalized.includes(normalizeChatbotQuestion(keyword)) ? entry.priority + keyword.length / 100 : 0),
    0,
  )

  if (phraseScore > 0) return phraseScore

  const questionTokens = new Set(normalized.split(' ').filter((token) => token.length > 2 && !STOP_TOKENS.has(token)).map(stem))

  return entry.keywords.reduce((total, keyword) => {
    const tokens = keywordTokens(keyword)
    if (tokens.length === 0) return total
    const allMatched = tokens.every((token) => questionTokens.has(token))
    return total + (allMatched ? entry.priority : 0)
  }, 0)
}

export function matchChatbotQuestion(question) {
  const normalized = normalizeChatbotQuestion(question)
  if (!normalized) return { id: 'fallback', title: 'BudgetBee', response: chatbotFallback }

  const best = chatbotKnowledge
    .map((entry) => ({ entry, score: scoreEntry(normalized, entry) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)[0]

  return best?.entry || { id: 'fallback', title: 'BudgetBee', response: chatbotFallback }
}
