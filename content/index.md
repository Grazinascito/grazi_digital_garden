---
type: moc
tags: []
publish: true
---

# Garden

This vault is a space for **production**, not storage. The rule that decides if something deserves to become a note: could I write this without the source open, and can I say why it matters to me?

## How notes grow

```
daily-notes/      → inbox privado (captura, estudo bruto, timeline) — local only (git + site)
      ↓           → fim do dia: extrair Study Log → studylogs/
studylogs/        → registro público do que estudou
      ↓           → domingo: extrair 1–2 ideias que ainda importam 48h depois
notes/            → atomic concepts, title = claim, your own words
      ↓
essays/           → interpretation and argument — mainly outros interesses (philosophy, art, culture)
how to/           → teach a mechanism or how to use something (engineering, CS, UI/UX)
      ↓
map-of-contents/  → MOCs do eixo principal (About me, Computação, Carreira, Engenharia, UI/UX)
outros-interesses/  → MOCs pessoais (Filosofia, Arte, Música, Psicologia)
```

## Note types

| Type | Purpose | Publishes? |
|------|---------|------------|
| **Daily note** | Inbox privado do dia — captura, estudo, timeline, fechamento | No |
| **Studylog** | O que estudou hoje — refinado do daily note, para o garden público | Yes |
| **Note** | One atomic idea, rewritten in your words | When `status: digesting` or `final` and ready |
| **Essay** | Defend an interpretation — intellectual repertoire | When it makes sense to a reader |
| **how to** | Teach something reproducible | When it makes sense to a reader |
| **MOC** | Map of content — links notes by subtheme, with context | Yes (index pages) |

## Status

Public notes use `status: draft`, `digesting`, or `final` in frontmatter:

| Status | Meaning |
|--------|---------|
| `draft` | Just written, may be wrong |
| `digesting` | Reviewed once — Sunday ritual or 48h later, still refining |
| `final` | You'd defend this idea in conversation today |

Daily notes (private) use a separate lifecycle: `status: inbox | processed`.

## Note metadata

The Properties panel shows: **date**, **status**, **tags**, **type**, **lang**. Daily notes: `date`, `tags: [daily-note]`, `status: inbox`. Studylogs and mature notes: `status: draft` by default, plus `lang` when set.

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
- Daily notes and studylogs stay out of MOCs — only mature notes go in

## Editorial focus

This garden prioritizes **technology, career, and studies**. Personal interests live in **`outros-interesses/`** — a separate folder in the sidebar, like `essays/` or `studylogs/`.

| Focus                      | Where notes live | Index |
|-------|------------------|-------|
| **Estudos (público)**      | `studylogs/` | [[studylogs/index|Studylogs]] |
| **Inbox (privado)**        | `daily-notes/` | local only — `.gitignore` + `ignorePatterns` |
| **Sobre**                  | `notes/`, `essays/` | [[MOC-about-me|Sobre mim]] |
| **Computação**             | `notes/`, `How to/` | [[MOC-computacao|Computação]] |
| **Carreira**               | `notes/`, `essays/` | [[MOC-career|Carreira]] |
| **Engenharia de Software** | `How to/`, `notes/` | [[MOC-software-engineering|Engenharia de Software]] |
| **UI/UX Design**           | `notes/`, `How to/` | [[MOC-ui-ux-design|UI/UX Design]] |
| **Outros interesses**      | `essays/`, `notes/` | [[outros-interesses/index|Outros interesses]] → Filosofia, Arte, Música, Psicologia |

## MOC of MOCs

**Eixo principal** — [[map-of-contents/index|Map of contents]]

- [[MOC-about|Sobre mim]] — quem sou, o que estou aprendendo
- [[MOC-computacao|Computação]] — fundamentos de CS
- [[MOC-career|Carreira]] — transição, entrevistas, aprendizado aplicado ao mercado
- [[MOC-software-engineering|Engenharia de Software]] — arquitetura, segurança, prática
- [[MOC-ui-ux-design|UI/UX Design]] — experiência, interface, acessibilidade

**Outros interesses** — [[outros-interesses/index|pasta própria no sidebar]]

- [[MOC-philosophy|Filosofia]] — ética, linguagem, política
- [[MOC-art|Arte]] — interpretação visual, crítica, referências culturais
- [[MOC-music|Música]] — escuta, composição, crítica musical
- [[MOC-cognitive-psychology|Psicologia]] — memória, atenção, cognição

New MOCs appear when a topic reaches ~5 notes. Tags handle fine-grained search. MOC filenames stay in English (`MOC-{topic}.md`); displayed titles mix PT and EN as listed above.

## Daily note & studylog naming

**Daily note (privado)**

- **Filename:** `YYYY-MM-DD.md` in `daily-notes/`
- **Template:** `templates/DailyNote.md`
- **Frontmatter:** `date`, `tags: [daily-note]`, `status: inbox`
- **Privacidade:** pasta em `.gitignore` (não sobe pro Git) e `ignorePatterns: daily-notes` no Quartz (não publica)

**Studylog (público)**

- **Filename:** `YYYY-MM-DD.md` in `studylogs/` — mesma data do daily note
- **Template:** `templates/Studylog.md`
- **Frontmatter:** `date`, `tags: [studylog]`, `status: draft`, `publish: true`
- **Title (H1):** síntese do que estudou
