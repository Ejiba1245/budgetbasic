import { Link } from 'react-router-dom'

export function ChatbotMessage({ message }) {
  return <article className={`chat-message chat-message-${message.role}`}><span className="chat-message-label">{message.role === 'user' ? 'You' : 'BudgetBee'}</span><p>{message.text}</p>{message.example && <div className="chat-example"><strong>Example</strong><span>{message.example}</span></div>}{message.link && <Link className="chat-learn-link" to={message.link.to}>{message.link.label} →</Link>}</article>
}
