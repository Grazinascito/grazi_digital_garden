---
type: moc
tags: []
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
technical/     → teach a mechanism or how to use something (engineering, CS, UI/UX)
      ↓
mocs/          → curated maps per area — also the site sections
```

## Note types

| Type | Purpose | Publishes? |
|------|---------|------------|
| **Studylog** | Study diary, one entry per study day | Never |
| **Note** | One atomic idea, rewritten in your words | When 🌿+ and ready |
| **Essay** | Defend an interpretation — intellectual repertoire | When it makes sense to a reader |
| **Technical** | Teach something reproducible | When it makes sense to a reader |
| **MOC** | Commented map of an area | Yes (index pages) |

## Growth stages

- 🌱 seed — just written, may be wrong
- 🌿 growing — reviewed once (Sunday ritual or 48h later)
- 🌳 evergreen — you'd defend this idea in conversation today

## Language

Each note has one language: `lang: pt` or `lang: en`. Links work across languages like any other wikilink. The site toggle filters by language — no auto-translation.

## Weekly ritual (Sunday, 30–45 min)

1. Re-read this week's studylogs
2. Mark passages that still interest you after 48h
3. Extract at most 1–2 into note, essay, or technical
4. Update relevant MOCs with a comment on why each link matters

## Default MOCs (areas)

- [[mocs/philosophy|Philosophy]]
- [[mocs/software-engineering|Software Engineering]]
- [[mocs/cognitive-psychology|Cognitive Psychology]]

New MOCs appear when an area reaches ~5 notes. Until then, tags and links are enough.

## Studylog naming

- **Filename:** date — `2026-07-27.md`
- **Title (H1):** synthesis of what you studied — e.g. "Security, encryption in transit and at rest, granular permissions"
- **Frontmatter:** `study_day: 1` for 100-day challenge tracking
