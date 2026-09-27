import { describe, expect, it } from 'vitest'
import { matchChatbotQuestion, normalizeChatbotQuestion } from './chatbotMatcher'
import { chatbotFallback, chatbotKnowledge } from '../data/chatbotKnowledge'

describe('normalizeChatbotQuestion', () => {
  it('lowercases and removes punctuation but keeps digits and slashes', () => {
    expect(normalizeChatbotQuestion('  What is the 50/30-20 Rule? ')).toBe('what is the 50/30 20 rule')
  })
})

describe('matchChatbotQuestion', () => {
  it('matches a keyword question to its knowledge entry', () => {
    expect(matchChatbotQuestion('how can I start saving?').id).toBe('saving-goal')
  })

  it('matches the 50/30/20 guideline', () => {
    expect(matchChatbotQuestion('Explain the 50/30/20 rule').id).toBe('rule-503020')
  })

  it('matches needs versus wants', () => {
    expect(matchChatbotQuestion('what is the difference between needs and wants').id).toBe('needs-wants')
  })

  it('prefers the higher-priority entry when several keywords match', () => {
    expect(matchChatbotQuestion('50/30/20 rule for my budget').id).toBe('rule-503020')
    expect(['budget-definition', 'budget-create']).toContain(matchChatbotQuestion('budget').id)
    expect(matchChatbotQuestion('emergency fund').id).toBe('emergency')
    expect(matchChatbotQuestion('savings goal').id).toBe('saving-goal')
  })

  it('matches the suggested question shown on the chatbot page', () => {
    expect(matchChatbotQuestion('What is the difference between needs and wants?').id).toBe('needs-wants')
    expect(matchChatbotQuestion('How can I control impulse spending?').id).toBe('impulse')
  })

  it('falls back when no keyword matches', () => {
    const result = matchChatbotQuestion('what is the best cryptocurrency to buy?')

    expect(result.id).toBe('fallback')
    expect(result.response).toBe(chatbotFallback)
  })

  it('falls back for an empty question', () => {
    expect(matchChatbotQuestion('   ').id).toBe('fallback')
  })

  it('always returns a usable response object for a matched entry', () => {
    for (const entry of chatbotKnowledge) {
      const result = matchChatbotQuestion(entry.keywords[0])
      expect(result.response).toEqual(expect.any(String))
      expect(result.response.length).toBeGreaterThan(0)
    }
  })
})
