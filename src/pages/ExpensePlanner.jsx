import { useMemo, useState } from 'react'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Card } from '../components/ui/Card'
import { FormField, Input, Select } from '../components/ui/FormControls'
import { PageContainer } from '../components/layout/PageContainer'
import { Button } from '../components/ui/Button'
import { EducationalImage } from '../components/ui/EducationalImage'
import { calculateExpenseSummary, expenseCategories, formatExpenseCurrency, sampleBalance, validateExpense } from '../utils/expensePlanner'

const blankExpense = { date: '', category: '', description: '', amount: '' }

function createExpenseId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
}

function formatDate(value) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00`))
}

export function ExpensePlanner() {
  const [form, setForm] = useState(blankExpense)
  const [expenses, setExpenses] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [confirmation, setConfirmation] = useState('')

  const errors = useMemo(() => validateExpense(form), [form])
  const summary = useMemo(() => calculateExpenseSummary(expenses), [expenses])
  const isOverBudget = summary.isOverBudget

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setConfirmation('')
  }

  const resetForm = () => {
    setForm(blankExpense)
    setEditingId(null)
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    if (Object.keys(errors).length > 0) return

    const expense = {
      id: editingId || createExpenseId(),
      date: form.date,
      category: form.category,
      description: form.description.trim(),
      amount: Number(form.amount),
    }

    setExpenses((current) => editingId ? current.map((item) => item.id === editingId ? expense : item) : [...current, expense])
    setConfirmation(editingId ? 'Expense updated.' : 'Expense added.')
    resetForm()
  }

  const editExpense = (expense) => {
    setForm({ ...expense, amount: String(expense.amount) })
    setEditingId(expense.id)
    setSubmitted(false)
    setConfirmation('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const removeExpense = (id) => {
    setExpenses((current) => current.filter((expense) => expense.id !== id))
    if (editingId === id) resetForm()
    setConfirmation('Expense removed.')
  }

  const feedback = expenses.length === 0
    ? 'Add a few planned expenses to see how your spending adds up.'
    : isOverBudget
      ? `Your planned expenses exceed the sample balance by ${formatExpenseCurrency(Math.abs(summary.remaining))}. Review which expenses are essential and which could be reduced or postponed.`
      : summary.total >= sampleBalance * 0.8
        ? 'Your planned expenses are using most of the sample balance. Review the larger amounts before adding more.'
        : 'Your planned expenses are currently within the sample balance.'

  return (
    <PageContainer className="expense-planner-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tools', to: '/50-30-20' }, { label: 'Expense Planner' }]} />

      <header className="expense-planner-header expense-planner-header-arranged">
        <div className="expense-header-copy">
        <span className="section-eyebrow">Practical tool · Planning</span>
        <h1 className="section-title">Expense Planner</h1>            <p className="section-description">Plan a few expenses and see how they affect a {formatExpenseCurrency(sampleBalance)} sample monthly balance.</p><p className="expense-header-note">Use the planner after reading the short guide. Entries stay on this page and reset when it is refreshed.</p>
        </div>
        <EducationalImage asset="student-budget-planning.jpg" alt="Student writing down expenses beside a laptop while planning a budget." className="expense-header-image" loading="eager" />
      </header>

      <section className="planner-learning-intro" aria-labelledby="planner-learning-title">
        <span className="section-eyebrow">Read before you plan</span>
        <h2 id="planner-learning-title">What expense tracking can teach you</h2>
        <p>Tracking means recording what you planned to spend and what you actually spent. Over time, the record can help you notice categories, timing and patterns that are easy to miss when purchases happen one at a time.</p>
        <EducationalImage asset="budgeting-basics.png" alt="Illustration representing a student organising spending into a clear plan." className="planner-learning-image" />
        <div className="planner-learning-grid"><div><strong>Categories</strong><span>Group expenses such as food, transport, school and entertainment.</span></div><div><strong>Planned vs actual</strong><span>Compare your intention with what happened, without treating the difference as a failure.</span></div><div><strong>Patterns</strong><span>Look for repeated small costs or periods when spending rises.</span></div></div>
        <p>Use the planner below as a session-only educational example. It does not save a financial record.</p>
      </section>

      <section className="expense-visual-guide" aria-labelledby="expense-guide-title"><div><span className="section-eyebrow">A simple review path</span><h2 id="expense-guide-title">Record · Group · Compare · Adjust</h2><p>Start with a clear description, place the expense in a category, compare the total with the sample balance and decide what should change in the next plan.</p></div><div className="expense-flow" aria-label="Record, group, compare and adjust expenses"><span>Record</span><i>→</i><span>Group</span><i>→</i><span>Compare</span><i>→</i><span>Adjust</span></div></section>

      <Card elevation={1} className="expense-entry-surface">
        <div className="expense-entry-heading">
          <div>
            <span className="section-eyebrow">{editingId ? 'Edit expense' : 'Add to your plan'}</span>
            <h2>{editingId ? 'Update an expense' : 'Plan an expense'}</h2>
          </div>
          {editingId && <button type="button" className="expense-cancel-button" onClick={resetForm}>Cancel</button>}
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="expense-form-grid">
            <FormField id="expense-date" label="Date" error={submitted ? errors.date : undefined}>
              <Input id="expense-date" type="date" value={form.date} onChange={updateField('date')} error={submitted && Boolean(errors.date)} aria-invalid={submitted && Boolean(errors.date)} aria-describedby={submitted && errors.date ? 'expense-date-error' : undefined} />
            </FormField>
            <FormField id="expense-category" label="Category" error={submitted ? errors.category : undefined}>
              <Select id="expense-category" value={form.category} onChange={updateField('category')} options={[{ value: '', label: 'Select a category' }, ...expenseCategories.map((category) => ({ value: category, label: category }))]} aria-invalid={submitted && Boolean(errors.category)} />
            </FormField>
            <FormField id="expense-description" label="Description" error={submitted ? errors.description : undefined}>
              <Input id="expense-description" value={form.description} onChange={updateField('description')} placeholder="e.g. Groceries" error={submitted && Boolean(errors.description)} aria-invalid={submitted && Boolean(errors.description)} />
            </FormField>
            <FormField id="expense-amount" label="Amount" hint="Use the project currency format." error={submitted ? errors.amount : undefined}>
              <Input id="expense-amount" type="text" inputMode="decimal" value={form.amount} onChange={updateField('amount')} placeholder="0.00" prefix="$" error={submitted && Boolean(errors.amount)} aria-invalid={submitted && Boolean(errors.amount)} />
            </FormField>          </div>
          <div className="expense-form-footer">
            {confirmation && <span className="expense-confirmation" role="status">{confirmation}</span>}
            <Button type="submit" variant="primary">{editingId ? 'Save changes' : 'Add expense'}</Button>
          </div>
        </form>
      </Card>

      <section className="expense-list-section" aria-labelledby="planned-expenses-title">
        <div className="expense-section-heading">
          <div>
            <span className="section-eyebrow">Current session</span>
            <h2 id="planned-expenses-title">Planned expenses</h2>
          </div>
          <span className="expense-count">{expenses.length} {expenses.length === 1 ? 'expense' : 'expenses'}</span>
        </div>

        {expenses.length === 0 ? (
          <div className="expense-empty-state">
            <span className="material-symbols-outlined" aria-hidden="true">receipt_long</span>
            <h3>No expenses planned yet.</h3>
            <p>Add your first expense above to start seeing how your planned spending affects the sample balance.</p>
          </div>
        ) : (
          <div className="expense-table-wrap">
            <table className="expense-table">
              <thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Actions</th></tr></thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td data-label="Date">{formatDate(expense.date)}</td>
                    <td data-label="Category"><span className="expense-category-label">{expense.category}</span></td>
                    <td data-label="Description">{expense.description}</td>
                    <td data-label="Amount" className="expense-amount-cell">{formatExpenseCurrency(expense.amount)}</td>
                    <td data-label="Actions" className="expense-actions"><button type="button" onClick={() => editExpense(expense)}>Edit</button><button type="button" onClick={() => removeExpense(expense.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className={`expense-summary ${isOverBudget ? 'is-over-budget' : ''}`} aria-labelledby="expense-summary-title">
        <div className="expense-summary-heading"><span className="section-eyebrow">Educational estimate</span><h2 id="expense-summary-title">Sample balance</h2></div>
        <div className="expense-summary-values"><div><span>Sample balance</span><strong>{formatExpenseCurrency(sampleBalance)}</strong></div><div><span>Planned expenses</span><strong>{formatExpenseCurrency(summary.total)}</strong></div><div><span>Remaining balance</span><strong>{summary.remaining < 0 ? `-${formatExpenseCurrency(Math.abs(summary.remaining))}` : formatExpenseCurrency(summary.remaining)}</strong></div></div>
        <p className="expense-feedback"><span className="material-symbols-outlined" aria-hidden="true">info</span>{feedback}</p>
      </section>

      <p className="expense-disclaimer">Educational estimate only. This sample balance is not a recommended income or a measure of your real financial position. Expenses stay on this page only and reset when the page is refreshed.</p>
    </PageContainer>
  )
}
