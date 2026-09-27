import { useState } from 'react'
import { PageContainer } from '../components/layout/PageContainer'
import { EducationalImage } from '../components/ui/EducationalImage'
import { ComparisonTable, ExampleBlock, LearningObjectives, LessonHeader, LessonNavigation, LessonSection } from '../components/ui/LessonSystem'
import { needsVsWantsScenarios } from '../data/quiz'

export function NeedsVsWants() {
  const [choices, setChoices] = useState(() =>
    Object.fromEntries(needsVsWantsScenarios.map((scenario) => [scenario.id, 'NEED'])),
  )

  const score = needsVsWantsScenarios.filter((scenario) => choices[scenario.id] === scenario.type).length

  const choose = (id, choice) => setChoices((current) => ({ ...current, [id]: choice }))

  return (
    <PageContainer className="lesson-page">
      <LessonHeader
        eyebrow="Lesson 02 · Making choices"
        title="Needs vs Wants"
        intro="Learn how to separate essential expenses from flexible spending, then practise making a decision before you buy."
        asset="needs-vs-wants.png"
        alt="Illustration comparing essential needs with optional wants."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Learn', to: '/budgeting-basics' }, { label: 'Needs vs Wants' }]}
      />

      <LearningObjectives items={[
        'Define a need and a want.',
        'Use questions to examine a spending choice.',
        'Recognise that context can change a classification.',
      ]} />

      <div className="lesson-reading">
        <section className="needs-choice-visual">
          <EducationalImage
            asset="needs-wants-student-choices.png"
            alt="Illustration showing student choices including study materials, food, transport and entertainment."
            className="needs-choice-image"
          />
          <div>
            <span className="lesson-eyebrow">Look at the whole situation</span>
            <h2>Student choices can contain both needs and wants.</h2>
            <p>
              Books, food and transport may support daily responsibilities. Games, coffee and other extras
              may add enjoyment. The important skill is learning to identify the role each choice plays
              before spending.
            </p>
          </div>
        </section>

        <LessonSection number={1} title="What is a need?">
          <p>
            A need is something required for health, safety, basic living or an important responsibility.
            Needs are not identical for everyone: a required course resource may be a need for one student
            and not for another.
          </p>
        </LessonSection>

        <LessonSection number={2} title="What is a want?">
          <p>
            A want is something that adds comfort, enjoyment or convenience but can usually be delayed,
            changed or skipped. Wants are not bad; identifying them simply helps you make room for
            priorities.
          </p>
        </LessonSection>

        <LessonSection number={3} title="Why the difference matters">
          <p>
            When money is limited, needs usually come before wants. This distinction helps you decide what
            to protect when a budget is tight instead of treating every purchase as equally urgent.
          </p>
          <ExampleBlock title="Think in context">
            <p>
              Internet access may be a need when a student relies on it for classes. A faster plan for
              entertainment may be a want. The question is not whether the item is good; it is what role it
              plays in the current situation.
            </p>
          </ExampleBlock>
        </LessonSection>

        <LessonSection number={4} title="Everyday student examples">
          <ComparisonTable
            columns={['Possible need', 'Possible want']}
            rows={[
              ['Basic transport to campus', 'A premium ride when a lower-cost option works'],
              ['Required learning materials', 'A newer version of a device that still works'],
              ['Basic food for the week', 'An unplanned restaurant meal'],
            ]}
          />
        </LessonSection>

        <LessonSection number={5} title="A simple decision process">
          <ol className="lesson-steps">
            <li><strong>What happens if I wait?</strong> Consider safety, health and responsibilities.</li>
            <li><strong>Does it fit the plan?</strong> Check the money available after essentials.</li>
            <li><strong>Is there a lower-cost option?</strong> Compare alternatives.</li>
            <li><strong>Can I pause?</strong> A short pause can separate a need from an impulse.</li>
          </ol>
        </LessonSection>

        <LessonSection number={6} title="Borderline cases">
          <p>
            Some expenses sit between categories. A phone can be needed for communication, while an
            upgrade may be optional. A social event can matter for wellbeing, while every extra purchase
            around it may still be flexible. Explain the reason for your choice rather than relying on a
            label alone.
          </p>
        </LessonSection>

        <LessonSection number={7} title="Practice scenarios">
          <p>
            Choose Need or Want for each example. You can change an answer at any time to compare your
            reasoning with the educational classification.
          </p>

          <div className="scenario-practice">
            {needsVsWantsScenarios.map((scenario) => {
              const isCorrect = choices[scenario.id] === scenario.type
              const selected = choices[scenario.id]

              return (
                <div className="scenario-row" key={scenario.id}>
                  <strong id={`scenario-${scenario.id}-label`}>{scenario.name}</strong>
                  <div
                    className="scenario-choice"
                    role="group"
                    aria-labelledby={`scenario-${scenario.id}-label`}
                  >
                    <button
                      type="button"
                      className={selected === 'NEED' ? 'is-selected' : ''}
                      aria-pressed={selected === 'NEED'}
                      onClick={() => choose(scenario.id, 'NEED')}
                    >
                      Need
                    </button>
                    <button
                      type="button"
                      className={selected === 'WANT' ? 'is-selected' : ''}
                      aria-pressed={selected === 'WANT'}
                      onClick={() => choose(scenario.id, 'WANT')}
                    >
                      Want
                    </button>
                  </div>
                  <small className={isCorrect ? 'correct' : ''}>
                    {isCorrect
                      ? 'Matches the example explanation.'
                      : `For this example, the lesson classifies it as a ${scenario.type.toLowerCase()}.`}
                  </small>
                </div>
              )
            })}
          </div>

          <p className="practice-score" role="status">
            Practice result: {score} of {needsVsWantsScenarios.length} matched
          </p>
        </LessonSection>

        <LessonSection number={8} title="Decision guide">
          <p>
            Need or want is the beginning of a conversation, not a permanent identity for an item. Ask what
            you need it for, whether you can afford it now, what alternative exists and whether waiting
            would create a real problem.
          </p>
        </LessonSection>

        <LessonSection number={9} title="Student scenarios">
          <p>
            Imagine you have enough money for either a required course resource or an optional upgrade.
            Protect the requirement first, then check whether the upgrade still fits after your essential
            expenses and savings plan.
          </p>
          <ExampleBlock title="Try this reflection">
            <p>
              Write down one purchase you are considering. What happens if you wait one week? What
              lower-cost alternative could meet the same purpose?
            </p>
          </ExampleBlock>
        </LessonSection>

        <div className="lesson-takeaways">
          <span className="lesson-eyebrow">Key takeaways</span>
          <ul>
            <li>Needs protect essential responsibilities; wants offer flexibility.</li>
            <li>Context matters, so explain the reason behind a classification.</li>
            <li>A pause and a budget check can improve a spending decision.</li>
          </ul>
        </div>

        <details className="knowledge-check">
          <summary>Knowledge check: what should you ask before buying?</summary>
          <p>
            <strong>Answer:</strong> ask whether you need it now, what happens if you delay it, whether a
            lower-cost alternative exists and whether it fits your budget.
          </p>
        </details>

        <LessonNavigation previous={{ label: 'Budgeting Basics', to: '/budgeting-basics' }} next={{ label: '50/30/20', to: '/50-30-20' }} />
      </div>
    </PageContainer>
  )
}
