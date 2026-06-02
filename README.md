# GlanceSQL

> **Master SQL in One Glance** — 131 topics, zero setup, one page.
> **Visit: https://glancesql.minisoft.bd/**

GlanceSQL is a single-file interactive SQL learning website. No build step, no backend, no database — just open it in a browser and start learning. Every SQL concept from `SELECT` to the CAP theorem, explained with simple analogies, executable examples, and visual data tables.

---

## Screenshot

```
┌──────────────────────────────────────────────────────────┐
│  🔍 GlanceSQL                    🌙  Progress: 72%      │
├─────────────┬────────────────────────────────────────────┤
│  Core       │  🎯 GROUP BY                              │
│  Concepts   │  Think of it like gathering LEGO bricks   │
│  ├─ What is │  by color — you sort them into piles and  │
│  │  SQL     │  count each pile.                         │
│  ├─ What is │                                           │
│  │  DB      │  ┌─────────────────────────────────────┐  │
│  ├─ ...     │  │ SELECT dept, COUNT(*) AS emp_count  │  │
│             │  │ FROM employees                      │  │
│  Querying   │  │ GROUP BY dept                       │  │
│  Data       │  └─────────────────────────────────────┘  │
│  ├─ SELECT  │                                           │
│  ├─ ...     │  dept        │ emp_count                   │
│             │  ─────────────────────────────────        │
│  Functions  │  Engineering │ 3                          │
│  ├─ COUNT   │  Sales       │ 2                          │
│  ├─ ...     │                                           │
│             │  ✅ Key Takeaway                           │
│  Anti-      │  GROUP BY collapses rows into summary     │
│  Patterns   │  buckets. Every col in SELECT must be     │
│  ├─ SQL Inj │  in GROUP BY or wrapped in an aggregate.  │
│  └─ ...     └───────────────────────────────────────────┘
└──────────────────────────────────────────────────────────┘
```

*(Styled with a dark-by-default theme, light mode toggle, and syntax-highlighted code blocks via Prism.js.)*

---

## Features

| Feature | Description |
|---|---|
| **131 Topics** | 18 categories from beginner to expert — every SQL concept covered |
| **Zero Setup** | No npm install, no build, no database — open `index.html` in any browser |
| **Dark/Light Theme** | Toggle with one click, persisted to localStorage |
| **Lazy Loading** | Content loads on demand — instant page load, smooth navigation |
| **Sidebar Search** | Filter 131 topics by name, ID, or category in real time |
| **Progress Tracking** | Mark topics as complete; progress bar and localStorage persistence |
| **Syntax Highlighting** | All code blocks rendered with Prism.js for clarity |
| **Keyboard Navigation** | Arrow keys to move between topics, Escape to close sidebar |
| **Fully Responsive** | Sidebar collapses on mobile, content scales to any screen |

---

## Topic Coverage

### 18 Categories, 131 Topics

```
Core Concepts (6)         ──  What is SQL, What is a Database, Relational Concepts,
                              Data Types, SQL Syntax, Comments

Querying Data (11)        ──  SELECT, SELECT DISTINCT, FROM, AS Alias, Comparison Ops,
                              AND/OR/NOT, ORDER BY, LIMIT/OFFSET, NULL, IS NULL, WHERE

Filtering & Patterns (5)  ──  LIKE, Wildcards, IN, BETWEEN, CASE Expression

Data Manipulation (4)     ──  INSERT, UPDATE, DELETE, TRUNCATE

Functions (15)            ──  COUNT, SUM/AVG, MIN/MAX, UPPER/LOWER, LENGTH, TRIM,
                              SUBSTRING, REPLACE, CONCAT, COALESCE, NULLIF, CAST,
                              ROUND/CEIL/FLOOR, ABS, Date Functions

Aggregation (5)           ──  GROUP BY, HAVING, GROUPING SETS, ROLLUP, CUBE

Joins (8)                 ──  INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN,
                              NATURAL JOIN, SELF JOIN, Non-Equi JOIN

Set Operations (3)        ──  UNION, INTERSECT, EXCEPT/MINUS

Subqueries (6)            ──  Scalar, Row, Table, Correlated, EXISTS, ANY/ALL

Schema & DDL (13)         ──  CREATE TABLE, ALTER TABLE, DROP TABLE, NOT NULL, UNIQUE,
                              PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, Indexes, Views,
                              Sequences, Temp Tables

Advanced SQL (15)         ──  CTE, Recursive CTE, ROW_NUMBER, LEAD/LAG, Window Frames,
                              FIRST_VALUE/LAST_VALUE, PIVOT/UNPIVOT, MERGE/UPSERT,
                              LATERAL, STRING_AGG, JSON Functions, Full-Text Search,
                              Spatial Data, Gaps & Islands, Running Totals

Transactions (5)          ──  BEGIN/COMMIT/ROLLBACK, SAVEPOINT, Isolation Levels,
                              LOCK TABLE, Deadlocks

Stored Logic (5)          ──  Stored Procedures, User Functions, Triggers, Cursors,
                              Dynamic SQL

Performance (7)           ──  EXPLAIN, Query Optimization, Indexing Strategies,
                              Index Maintenance, Partitioning, Query Hints,
                              CBO vs RBO

Database Design (11)      ──  1NF, 2NF, 3NF, BCNF, Denormalization, ER Modeling,
                              Referential Integrity, Sharding, Replication,
                              ACID vs BASE, CAP Theorem

Dialect Features (6)      ──  MySQL, PostgreSQL, SQL Server, SQLite, Oracle,
                              ANSI SQL Standards

Anti-Patterns (6)         ──  SQL Injection, N+1 Query, Cartesian Explosions,
                              Halloween Problem, Implicit vs Explicit Joins,
                              Index Bloat
```

---

## Architecture

GlanceSQL is a **pure frontend** application — three files, no dependencies beyond CDN scripts.

```
index.html    (̃6430 lines)  — Layout, Alpine.js templates, sidebar, Prism integration
main.js       (̃6430 lines)  — 131 topics, content generator, Alpine component, datasets
styles.css    (  ~450 lines)  — Theme variables, Prism overrides, animations, responsive rules
```

### How It Works

1. **Topics Array:** `main.js` defines 131 topic objects (`{ id, t, c, d, i }`) organized into 18 categories.
2. **Content Generator:** A `generateContent()` function with 131 `else if` branches returns custom HTML, SQL syntax, example data, and result tables for each topic.
3. **Lazy Loading:** When a user clicks a topic, `loadContent()` calls `generateContent()` once and caches the result. Subsequent clicks are instant.
4. **Alpine.js Component:** `window.__gsComponent` manages state — current topic, search, dark mode, progress, sidebar visibility.
5. **Theming:** CSS custom properties for dark/light mode. A single class toggle on `<html>` swaps all colors.

### CDN Dependencies

- **[Tailwind CSS](https://tailwindcss.com/)** (CDN) — utility-first CSS for layout
- **[Alpine.js](https://alpinejs.dev/)** (CDN) — reactive state management
- **[Prism.js](https://prismjs.com/)** (CDN) — SQL syntax highlighting

No build step, no package managers, no backend.

---

## Content Style

Every topic follows a consistent pedagogical structure:

| Section | What It Contains |
|---|---|
| **🎯 Analogy** | A real-world comparison that makes the concept intuitive |
| **📝 Syntax Block** | Correct SQL with comments explaining each part |
| **🔢 Example Data** | A small dataset displayed as a table (e.g., 5–10 rows) |
| **📊 Result Table** | What the query produces — shown as a formatted table |
| **✅ Key Takeaway** | One-paragraph summary with the essential rules |
| **💡 Pro Tip / ⚠️ Warning** | Practical advice or common pitfalls |

Where appropriate, topics include **multiple examples** (e.g., CTE shows two different datasets; window functions compare ROW_NUMBER vs RANK vs DENSE_RANK).

---

## Customization

### Adding a New Topic

1. Add an entry to the `TOPICS` array in `main.js`:
   ```js
   { id:'my-new-topic', t:'My New Topic', c:'category-id', d:'intermediate', i:'📘' },
   ```
2. Add an `else if` branch in `generateContent()` with `sections.push({...})` calls.
3. The topic appears in the sidebar automatically.

### Changing the Theme

All colors are defined as CSS custom properties in `styles.css`. Edit the `:root` (light) and `.dark` (dark) blocks.

---

## FAQ

**Does it work offline?**
Once loaded, all content is cached in memory. The CDN scripts are the only online dependency. You can download all three files and serve them locally for full offline use.

**Do I need to know JavaScript to use it?**
No. The website is fully usable through the browser UI. JavaScript knowledge is only needed if you want to add or modify topics.

**Can I add my own examples?**
Absolutely. Fork the repo, edit `main.js`, and add your topic. Content is always loaded from the file — no server or API involved.

**Why no database?**
GlanceSQL is a learning tool, not a query executor. Example datasets and result tables are hardcoded to illustrate concepts clearly. The focus is on understanding SQL syntax and semantics, not on executing live queries.

---

## License

MIT — free to use, modify, and distribute.

Built with ❤️ for SQL learners everywhere.
