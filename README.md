# BudgetBasics — NextGen BudgetBee

> **Aptech TechWiz Competition — Web Innovation Unleashed**

BudgetBasics is a responsive financial-education web application designed to help students, college learners, and beginners understand budgeting, saving, spending decisions, and common money mistakes through structured lessons and interactive learning tools.

The project is built around the **NextGen BudgetBee** theme and focuses on education rather than banking or financial transactions.

---

## Team

| Student          | Student ID     | Role        |
| ---------------- | -------------- | ----------- |
| **Agwu Gevolor** | Student1627933 | Team Leader |
| **Ejiba Etaba**  | Student1610906 | Team Member |

---

## Project Overview

Students often begin managing allowances, income, transportation costs, school expenses, subscriptions, entertainment and savings without having a simple budgeting framework.

BudgetBasics addresses this problem through a guided learning experience that combines:

* Financial education lessons
* Student-focused examples and scenarios
* Interactive budgeting calculations
* Savings planning
* Temporary expense planning
* Needs-versus-wants activities
* Money-mistake awareness
* Educational infographics
* Search and filtering
* A rule-based BudgetBee educational chatbot
* Feedback and project information pages

The application is intentionally designed as an **educational system**, not a banking or transaction platform.

---

## Competition Category

**Category:** Web Innovation Unleashed
**Theme:** NextGen BudgetBee
**Project:** BudgetBasics

The implementation follows the project's Software Requirements Specification (SRS) as the primary functional reference.

---

# Features

## 1. Budgeting Basics

A structured introductory lesson covering:

* What a budget is
* Why budgeting matters
* Income
* Fixed expenses
* Variable expenses
* Needs
* Wants
* Savings
* Building a simple student budget
* Knowledge checks

The module combines explanations, examples and interactive learning elements.

---

## 2. Needs vs Wants

The Needs vs Wants module teaches students how to distinguish essential expenses from discretionary spending.

It includes:

* Practical examples
* Classification activities
* Decision guidance
* Feedback
* Student-oriented scenarios
* Learning checks

---

## 3. 50/30/20 Rule

BudgetBasics provides an educational implementation of the 50/30/20 budgeting guideline.

Users can enter an example income and see calculated allocations for:

* Needs — 50%
* Wants — 30%
* Savings — 20%

The module explains the concept before presenting the calculator so that the learner understands what the calculation represents.

> **Educational note:** The 50/30/20 rule is presented as a budgeting guideline rather than a guarantee that every individual's finances should follow the exact percentages.

---

## 4. Savings Goals

The Savings Goals module allows users to create a temporary savings-planning scenario.

Users can provide:

* Goal name
* Target amount
* Current savings
* Monthly contribution

The application can then demonstrate:

* Remaining amount
* Savings progress
* Estimated time to reach the goal
* Encouraging educational guidance

The information is used for the current application session and is not intended to create permanent financial records.

---

## 5. Expense Planner

The Expense Planner demonstrates how students can organise planned expenses.

Supported categories include:

* Food
* Transport
* Education
* Entertainment
* Shopping
* Utilities
* Miscellaneous

Users can:

* Add an expense
* Edit an expense
* Remove an expense
* View planned expenses
* Calculate total planned expenses
* View remaining sample balance

Expense-planner information is temporary and is not stored in a backend database.

---

## 6. Money Mistakes

The Money Mistakes module addresses common financial habits that can affect students.

Topics include:

* Impulse buying
* Small recurring expenses
* Late payments
* Unused subscriptions
* Spending without a plan
* Emotional and social spending

Each topic connects the mistake with a realistic situation and a possible corrective action.

---

## 7. Learning Gallery and Infographics

The learning gallery provides visual educational material around topics such as:

* Needs vs Wants
* 50/30/20 budgeting
* Monthly budgeting
* Saving challenges

Visual content is organised to support learning rather than function as decorative content only.

---

## 8. BudgetBee Educational Chatbot

BudgetBee includes a frontend-only educational chatbot.

The chatbot uses:

* Predefined educational knowledge
* Keyword matching
* Rule-based response selection
* Topic-specific responses
* Safe fallback responses

Supported areas include:

* Budgeting
* Needs vs Wants
* 50/30/20
* Savings
* Expenses
* Money mistakes

### Important implementation detail

The chatbot does **not** connect to OpenAI, Gemini, Claude or another external AI API.

It operates using application-controlled educational content and rule-based matching.

This keeps the implementation consistent with the frontend-only project scope.

---

## 9. Search and Filtering

The application provides educational content discovery through search and filtering.

Users can search for relevant topics such as:

* Saving
* Needs
* Expenses
* Goals
* Budgeting

The interface also provides a clear no-results state when appropriate.

---

## 10. Feedback

The Feedback page provides a client-side feedback form supporting:

* Name
* Email
* Rating
* Comments

Input validation is performed in the browser before confirmation.

The application does not maintain a backend feedback database.

---

## 11. About, Contact and Sitemap

The project also includes supporting pages for:

* About
* Contact
* Sitemap

These pages provide project information and make the website's information architecture easier to navigate.

---

# Technology Stack

| Technology        | Purpose                                       |
| ----------------- | --------------------------------------------- |
| **React**         | Frontend application framework                |
| **JavaScript**    | Application logic and interaction             |
| **HTML5**         | Semantic structure                            |
| **CSS3**          | Responsive design and visual styling          |
| **React Router**  | Client-side routing                           |
| **Vite**          | Development server and build tooling          |
| **Git**           | Version control                               |
| **GitHub**        | Source-code repository                        |
| **Google Stitch** | UI/UX design exploration and design reference |

---

# Architecture

BudgetBasics uses a frontend-focused architecture.

```text
┌─────────────────────────────┐
│           User              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       React Application      │
│                             │
│  Pages / Components / UI    │
└──────────────┬──────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌───────────────┐
│ Application  │  │ Static Data / │
│ Logic        │  │ Educational   │
│              │  │ Content       │
└──────┬───────┘  └───────────────┘
       │
       ▼
┌─────────────────────────────┐
│ Client-side Utilities       │
│                             │
│ Calculations                │
│ Validation                  │
│ Search                      │
│ Chatbot Matching            │
└─────────────────────────────┘
```

There is no required backend database or transaction-processing layer.

---

# Project Structure

The project follows a component-based React structure.

```text
BudgetBasic/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── illustrations/
│   │   ├── infographics/
│   │   └── gallery/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── learning/
│   │   └── ui/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── pages/
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

The exact structure may change as the project is refined.

---

# Application Routes

The main application areas include:

| Route               | Purpose            |
| ------------------- | ------------------ |
| `/`                 | Home               |
| `/budgeting-basics` | Budgeting Basics   |
| `/needs-vs-wants`   | Needs vs Wants     |
| `/50-30-20`         | 50/30/20 Rule      |
| `/savings-goals`    | Savings Goals      |
| `/expense-planner`  | Expense Planner    |
| `/money-mistakes`   | Money Mistakes     |
| `/learning-gallery` | Learning Gallery   |
| `/search`           | Educational Search |
| `/chatbot`          | BudgetBee Chatbot  |
| `/feedback`         | Feedback           |
| `/contact`          | Contact            |
| `/about`            | About              |
| `/sitemap`          | Sitemap            |

Always verify the final route list against the current `App.jsx` before submission.

---

# Getting Started

## Prerequisites

Install:

* Node.js
* npm
* Git
* A modern web browser

Recommended browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## Installation

Clone the project repository or obtain the project source code.

Open a terminal in the project directory:

```bash
cd C:\Users\hp\OneDrive\Desktop\BudgetBasic
```

Install dependencies:

```bash
npm install
```

---

# Development

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173
```

Open the displayed URL in a supported browser.

---

# Production Build

To create a production build:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

---

# Code Quality

Run the project's lint command:

```bash
npm run lint
```

The final competition submission should be checked using the actual scripts defined in `package.json`.

---

# Testing

Testing should cover both normal and invalid inputs.

Important areas include:

### Budgeting

* Lesson content loads
* Knowledge checks work
* Navigation works

### 50/30/20 Calculator

* Valid income
* Blank input
* Non-numeric input
* Negative input
* Correct percentage calculations

### Savings Goals

* Valid target amount
* Current savings
* Monthly contribution
* Invalid and negative values
* Progress calculation
* Estimated timeline

### Expense Planner

* Add expense
* Edit expense
* Remove expense
* Invalid amount
* Total calculation
* Remaining balance

### Needs vs Wants

* Classification
* Feedback
* Decision guidance

### Chatbot

* Supported question
* Different wording for supported topic
* Unsupported question
* Safe fallback

### Search

* Matching keyword
* No-results search
* Filtering

### Responsive Design

The application should be manually checked at:

* Desktop
* Tablet
* Mobile

---

# Educational and Privacy Scope

BudgetBasics is an educational application.

It does **not** provide:

* Banking
* Payment processing
* Money transfers
* Investment transactions
* Financial-account connections
* Banking credentials
* Permanent financial-record storage

Users should not enter sensitive banking information into the application.

The project demonstrates budgeting concepts using example and temporary data.

---

# Accessibility

The application is designed with accessibility in mind, including:

* Semantic HTML
* Form labels
* Keyboard-accessible controls
* Visible focus states
* Meaningful alternative text for educational images
* Responsive layouts
* Readable typography
* Clear validation feedback

Accessibility should be manually reviewed against the final build before submission.

---

# Responsive Design

BudgetBasics is designed for:

### Desktop

Structured multi-column layouts with larger educational visual areas.

### Tablet

Adapted grids and content spacing.

### Mobile

Single-column reading and interaction patterns with responsive navigation and controls.

The final build should be tested using actual browser viewport sizes before competition submission.

---

# Design System

The visual identity is based around the NextGen BudgetBee concept.

Primary design characteristics include:

* Deep BudgetBee green
* Warm gold accent
* Light neutral backgrounds
* Clean white content surfaces
* Inter typography
* Restrained shadows
* Moderate corner radius
* Strong visual hierarchy
* Educational imagery
* Subtle animation
* Responsive spacing

The design intentionally avoids excessive card layouts, unnecessary gradients, fake statistics and generic dashboard styling.

The goal is to create a professional educational website rather than a generic AI-generated interface.

---

# Data Handling

BudgetBasics does not require a backend database.

The application primarily works with:

* Static educational content
* Client-side calculations
* Client-side validation
* Temporary application state
* Predefined chatbot knowledge

The application should not be treated as a system for permanently storing personal financial information.

---

# AI-Assisted Development

AI-assisted development tools were used during the creation and refinement of the project.

These tools supported areas including:

* UI/UX exploration
* Refactoring
* Documentation
* Project auditing
* Development troubleshooting

Google Stitch was used as a UI/UX design reference.
The final project was reviewed and adapted by the student team, and the team is responsible for understanding the implementation submitted for evaluation.

The BudgetBee chatbot itself is implemented as a predefined, rule-based educational system rather than as a connection to an external generative-AI API.

---

# Competition Readiness

Before submission, the team should verify:

* [ ] All required SRS modules are implemented
* [ ] All major routes work
* [ ] No fake contact information remains
* [ ] No placeholder content remains
* [ ] No encoding corruption remains
* [ ] All educational images are final
* [ ] Gallery/infographic content is complete
* [ ] README reflects the actual project
* [ ] Installation instructions work
* [ ] `npm run lint` passes
* [ ] `npm run build` passes
* [ ] Major functions have been manually tested
* [ ] Desktop layout has been tested
* [ ] Tablet layout has been tested
* [ ] Mobile layout has been tested
* [ ] Accessibility has been reviewed
* [ ] Final screenshots have been captured
* [ ] Project documentation is complete
* [ ] Required test data is included
* [ ] Required MP4 demonstration has been recorded
* [ ] GitHub repository contains the intended final version
* [ ] Team names and student IDs are consistent across submission materials

---

# Project Documentation

The complete project documentation contains:

* Project background
* Problem definition
* Objectives
* Scope
* Functional requirements
* Non-functional requirements
* Architecture
* Sitemap
* User flow
* UI/UX specifications
* Module descriptions
* Testing strategy
* Test data
* Installation instructions
* Privacy and security considerations
* AI-assisted development acknowledgement
* Limitations
* Future enhancements
* Screenshot placeholders
* Final submission checklist

---

# Known Project Principles

The following principles should be maintained during further development:

1. **Education first**
   Every major interactive feature should support financial learning.

2. **No fake functionality**
   Do not claim that a feature connects to a backend, AI service or database when it does not.

3. **No fake information**
   Contact details, statistics, testimonials and other factual information should be genuine or clearly identified as examples.

4. **No unnecessary data collection**
   The application should not request sensitive financial information.

5. **Responsive by design**
   Features should remain usable on desktop, tablet and mobile.

6. **Accessible interaction**
   Forms, buttons, navigation and educational content should be usable with keyboard and assistive technologies.

7. **Understandable code**
   The team should be able to explain the implementation during project evaluation.

8. **SRS compliance**
   The official BudgetBasics SRS remains the primary requirements reference.

---

# Future Enhancements

Potential future improvements include:

* Additional financial education lessons
* More student scenarios
* Expanded infographic library
* More savings challenges
* Additional knowledge checks
* Expanded rule-based chatbot knowledge
* Automated test coverage
* More extensive accessibility testing
* Additional educational content formats
* Optional hosted deployment

Future enhancements should continue to respect the educational purpose and privacy constraints of the project.

---

# Authors

### Agwu Gevolor

**Student ID:** Student1627933
**Role:** Team Leader

### Ejiba Etaba

**Student ID:** Student1610906
**Role:** Team Member

---

# Project Status

**Project:** BudgetBasics
**Theme:** NextGen BudgetBee
**Category:** Web Innovation Unleashed
**Institution:** Aptech
**Status:** Competition Development / Submission Preparation

---

## License / Competition Submission

This project was developed as part of an Aptech student competition submission.

The source code and project materials should be treated according to the competition's submission and ownership requirements.

---

## Final Note

BudgetBasics is intended to make financial education easier to understand through practical examples and interactive learning.

The project does not attempt to perform real financial transactions. Its purpose is to help learners understand budgeting concepts and develop better financial awareness.
