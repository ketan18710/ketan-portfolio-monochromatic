
# Portfolio Website – System Context, Vision & Build Specification

> **This document is the single source of truth for the portfolio project.**
> It defines *what* to build, *why* it exists, *who* it is for, *how* it should feel, and *how engineering decisions should be made*.
> Any ambiguity must be resolved in favor of clarity, authority, and conversion.

---

## 1. Project Overview

### 1.1 What This Project Is

A **high-end, motion-driven personal portfolio website** for **Ketan Verma**, positioned as:

* A **senior full-stack engineer**
* Someone who works with **founders, startups, and remote teams**
* Someone trusted with **large systems, real revenue, and production-scale work**

This is **NOT**:

* A resume website
* A student portfolio
* A generic “developer profile”
* A blog or content site

---

### 1.2 Primary Objective

The portfolio must **convert interest into contact**.

Specifically:

* A founder should land on the site and quickly think:

  > “This person is senior, credible, and can ship. I should talk to them.”

Time-to-understanding target:

* **5–10 seconds** to understand who Ketan is and why he’s valuable.

---

### 1.3 Secondary Objectives

* Establish authority without arrogance
* Signal trust through:

  * Experience
  * Company names
  * Revenue numbers
  * Scale of work
* Feel *expensive*, not flashy

---

## 2. Target Audience

### 2.1 Primary Audience

* Startup founders
* Early to mid-stage companies
* Product-driven teams
* Remote-first organizations

### 2.2 Secondary Audience

* Hiring managers
* Tech leads looking for contract help
* Agencies looking for senior contractors

### 2.3 Audience Expectations

This audience:

* Has limited time
* Has seen many portfolios
* Cares more about **outcomes** than **tech buzzwords**
* Values:

  * Reliability
  * Speed
  * Judgment
  * Communication

---

## 3. Positioning & Messaging

### 3.1 Core Positioning Statement

> “Senior Full-Stack Developer with 5+ years building scalable, production-grade systems for real businesses.”

### 3.2 What Must Be Emphasized

* **5+ years experience**
* Full-stack capability (frontend + backend + infra awareness)
* Real companies
* Real revenue
* Real users
* AI/LLM training as **credibility**, not main identity

### 3.3 What Must Be De-emphasized

* Degrees (AI/ML MTech should NOT be prominent)
* Academic framing
* Junior-style skill lists
* Buzzwords without proof

---

## 4. Visual & Design Philosophy

### 4.1 Overall Feel

* Dark-first
* Minimalist
* Studio / agency-grade
* Calm, confident, controlled
* Motion used with intent

### 4.2 Emotional Target

The site should feel:

* Trustworthy
* Capable
* Modern
* Precise

NOT:

* Loud
* Playful
* Experimental-for-the-sake-of-it

---

### 4.3 Motion Philosophy

Motion is used to:

* Guide attention
* Create hierarchy
* Add polish
* Signal quality

Motion is NOT used to:

* Entertain
* Show off
* Distract from content

Rules:

* Prefer subtle entrance animations
* Prefer transform + opacity
* Avoid unnecessary continuous animations
* Respect reduced motion preferences

---

## 5. Technical Stack (Locked)

### 5.1 Framework

* **Next.js (App Router)**

Rationale:

* Modern routing
* Layout control
* Server components when needed
* Vercel-native deployment

---

### 5.2 Styling

* **Tailwind CSS**

Rules:

* Utility-first
* Consistent spacing scale
* No inline styles
* No CSS files unless absolutely necessary

---

### 5.3 Component Library

* **shadcn/ui**

Usage philosophy:

* Use only when it speeds up development
* Customize styles heavily
* Avoid “default shadcn look”

---

### 5.4 Animation

* **Framer Motion**

Rules:

* No global animation wrappers
* Animations must be local and intentional
* Prefer variants and shared motion configs

---

### 5.5 Icons

* Lucide icons only
* No mixed icon packs

---

### 5.6 Deployment

* **Vercel**
* No custom backend required

---

## 6. Performance Philosophy

Target:

* Balanced performance

Rules:

* Avoid unnecessary JavaScript
* Lazy-load heavy sections
* Avoid huge images
* Motion should not block interaction
* Lighthouse score matters, but is not the top priority

---

## 7. Content Strategy

### 7.1 Content Source

* All content is **hardcoded** for now
* No CMS
* No JSON configs
* Simplicity > abstraction

---

### 7.2 Copy Rules

* Short sentences
* Declarative statements
* Numbers over adjectives
* No filler words
* No motivational fluff

Bad:

> “Passionate developer with a love for clean code”

Good:

> “Built systems serving thousands of users.”

---

## 8. Page Structure & Sections (Detailed)

---

### 8.1 Hero Section

**Purpose**

* Immediate clarity
* Authority
* Positioning

**Must Contain**

* Name: Ketan Verma
* Title: Senior Full-Stack Developer
* Experience: 5+ years
* One strong value statement
* Clear visual hierarchy

**Motion**

* Subtle entrance
* Possibly staggered text
* No gimmicks

**Avoid**

* Long intros
* Skill lists
* Buttons overload

---

### 8.2 Services / Capabilities Section

**Purpose**

* Show what problems are solved
* Productized offerings

**Structure**

* Interactive cards or blocks
* Each item feels like a service
* Inspired by lesmarteau.com (motion + transitions)

**Examples of Capabilities**

* Full-stack product development
* Backend architecture & APIs
* Performance optimization
* Rapid MVP → production

**Motion**

* Hover-based interaction
* Scroll-based reveal
* Smooth but controlled

---

### 8.3 Selected Work / Capabilities (Lightweight)

**Purpose**

* Show range without deep case studies

**Rules**

* No long text
* No deep storytelling
* Teaser-level information only

---

### 8.4 LLM Training & AI Credibility Section

**Purpose**

* Differentiation
* Authority

**Must Explicitly Mention**

* ChatGPT
* Gemini
* Grok
* Outlier / Scale AI
* **$80,000+ earned**

**Tone**

* Factual
* Confident
* Brief

This section should feel like a **proof stamp**, not a pitch.

---

### 8.5 Companies Worked With

**Purpose**

* Trust signal

**Implementation**

* Logos or text list
* Clean grid
* Minimal interaction

**No**

* Case studies
* Descriptions
* Testimonials (for now)

---

### 8.6 Experience Summary

**Purpose**

* Reinforce seniority

**Rules**

* No resume dump
* Focus on:

  * Scale
  * Impact
  * Outcomes

Education:

* Mentioned lightly or omitted
* AI/ML degree NOT highlighted

---

### 8.7 Footer / Contact

**Purpose**

* Conversion

**Primary CTA**

* Email contact

**Tone**

* Direct
* Confident
* No desperation

---

## 9. Development Workflow

### 9.1 Design Approach

* **Mobile-first**
* Expand to tablet and desktop
* Motion must adapt across breakpoints

---

### 9.2 Build Order

1. Project scaffolding
2. Global layout
3. Theme tokens
4. Hero section
5. Services section
6. Remaining sections
7. Motion polish
8. Performance pass

---

## 10. Explicit Non-Goals

Do NOT:

* Build admin panels
* Add CMS
* Add blog
* Over-abstract
* Add unnecessary dependencies
* Chase trends

---

## 11. Future (Out of Scope)

* Case studies
* CMS
* Blog
* Multi-language support

---

## 12. Definition of Done

The project is done when:

* The site feels premium
* The message is instantly clear
* Motion enhances clarity
* Founders feel confident reaching out

---

## 13. Guiding Principle

> **If a choice is unclear, choose the option that makes the site feel more senior, more intentional, and more trustworthy.**

---

### END OF CONTEXT

---
