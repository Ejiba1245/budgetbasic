import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { ChatbotInput } from '../components/chatbot/ChatbotInput'
import { ChatbotMessage } from '../components/chatbot/ChatbotMessage'
import { SuggestedQuestions } from '../components/chatbot/SuggestedQuestions'
import { matchChatbotQuestion } from '../utils/chatbotMatcher'

const suggestedQuestions = [
  'What is a budget?',
  'Explain the 50/30/20 rule',
  'How can I start saving?',
  'What is the difference between needs and wants?',
  'How can I control impulse spending?',
]

export function Chatbot() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const [error, setError] = useState('')

  const askQuestion = (value = question) => {
    const cleanQuestion = value.trim()
    if (!cleanQuestion) {
      setError('Enter a question before asking BudgetBee.')
      return
    }
    const match = matchChatbotQuestion(cleanQuestion)
    setMessages((current) => [
      ...current,
      { role: 'user', text: cleanQuestion },
      { role: 'bot', text: match.response, example: match.example, link: match.link },
    ])
    setQuestion('')
    setError('')
  }

  const clearConversation = () => {
    setMessages([])
    setError('')
  }

  return (
    <PageContainer className="chatbot-page">
      <header className="chatbot-header">
        <div>
          <span className="lesson-eyebrow">BudgetBee Assistant</span>
          <h1>Ask BudgetBee</h1>
          <p>Get simple explanations about budgeting, saving, spending and everyday money decisions.</p>
        </div>
        <div className="chatbot-note">
          <strong>Educational assistant</strong>
          <span>
            BudgetBee matches your question against a fixed set of written answers stored in this
            project. It is not a live AI financial adviser and it does not send your question anywhere.
          </span>
        </div>
      </header>

      <section className="chatbot-shell" aria-labelledby="conversation-title">
        <div className="chatbot-shell-header">
          <div>
            <span className="lesson-eyebrow">Conversation</span>
            <h2 id="conversation-title">Learn through a question</h2>
          </div>
          {messages.length > 0 && (
            <button type="button" className="chat-clear-button" onClick={clearConversation}>
              Clear conversation
            </button>
          )}
        </div>

        <div className="chatbot-messages" role="log" aria-live="polite" aria-label="Conversation with BudgetBee">
          {messages.length === 0 ? (
            <div className="chatbot-empty">
              <span className="material-symbols-outlined" aria-hidden="true">menu_book</span>
              <h3>What would you like to understand?</h3>
              <p>Choose a suggested question or ask about one of the BudgetBasics lessons.</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <ChatbotMessage message={message} key={`${message.role}-${index}`} />
            ))
          )}
        </div>

        <SuggestedQuestions questions={suggestedQuestions} onSelect={askQuestion} />
        <ChatbotInput
          value={question}
          onChange={(value) => { setQuestion(value); if (error) setError('') }}
          onSubmit={() => askQuestion()}
          disabled={!question.trim()}
          error={error}
        />
      </section>

      <p className="chatbot-disclaimer">
        <strong>Educational note:</strong> BudgetBee provides general financial education and examples. It
        does not provide personalised financial advice, banking services or financial transactions.
      </p>
      <p className="chatbot-next">
        Prefer to read first? <Link to="/budgeting-basics">Start with Budgeting Basics →</Link>
      </p>
    </PageContainer>
  )
}
