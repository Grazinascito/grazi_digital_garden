---
type: moc
tags: []
publish: true
---

# Garden

This vault is a space for **production**, not storage. The rule that decides if something deserves to become a note: could I write this without the source open, and can I say why it matters to me?

## How notes grow

```
studylogs/     → daily capture when you study. Numbered days (100-day challenges). Synthesis title + date filename.
      ↓        → Sunday ritual: extract 1–2 ideas that still matter 48h later
notes/         → atomic concepts, title = claim, your own words
      ↓
essays/        → interpretation and argument (culture, art, philosophy, sociology)
how to/     → teach a mechanism or how to use something (engineering, CS, UI/UX)
      ↓
map-of-contents/  → Map of contents — meta-notes named MOC-{topic}.md
```

## Note types

| Type | Purpose | Publishes? |
|------|---------|------------|
| **Studylog** | Study diary, one entry per study day | Yes |
| **Note** | One atomic idea, rewritten in your words | When 🌿+ and ready |
| **Essay** | Defend an interpretation — intellectual repertoire | When it makes sense to a reader |
| **how to** | Teach something reproducible | When it makes sense to a reader |
| **MOC** | Map of content — links notes by subtheme, with context | Yes (index pages) |

## Growth stages

- 🌱 seed — just written, may be wrong
- 🌿 growing — reviewed once (Sunday ritual or 48h later)
- 🌳 evergreen — you'd defend this idea in conversation today

## Language

Each note has one language: `lang: pt` or `lang: en`. Links work across languages like any other wikilink. A PT/EN toggle on the site is planned — for now, filter by the `lang` property.

## Weekly ritual (Sunday, 30–45 min)

1. Re-read this week's studylogs
2. Mark passages that still interest you after 48h
3. Extract at most 1–2 into note, essay, or how to
4. Add extracted notes to relevant MOCs — one link + one sentence per note, under the right subtheme

## How MOCs work

A MOC is a **meta-note**: a table of contents for a topic, not a folder. Notes live wherever they live (`notes/`, `essays/`, `how to/`) — the MOC links to them regardless.

- Organize by **subtheme** (e.g. "Language & Thought"), not by note type
- Each link gets a comment: `- [[note-slug]] — why this matters here`
- The same note can appear in **multiple MOCs**
- Studylogs stay out of MOCs — only mature notes go in

## MOC of MOCs

See [[map-of-contents/index|Map of contents]] for all maps.

- [[MOC-philosophy|Philosophy]] — ethics, aesthetics, language, culture
- [[MOC-software-engineering|Software Engineering]] — architecture, security, practice
- [[MOC-cognitive-psychology|Cognitive Psychology]] — memory, attention, cognition

Philosophy and cognitive psychology overlap on language and mind. Software engineering connects to both through design and ethics.

New MOCs appear when a topic reaches ~5 notes. Tags handle fine-grained search.

## Studylog naming

- **Filename:** date — `2026-07-27.md`
- **Title (H1):** synthesis of what you studied — e.g. "Security, encryption in transit and at rest, granular permissions"
- **Frontmatter:** `study_day: 1` for 100-day challenge tracking
