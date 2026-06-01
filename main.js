/* =============================================
   GlanceSQL — Topics Data + Alpine Component
   All 130 SQL topics, lazy-loaded content
   ============================================= */

/* ─── Categories ─── */
const CATEGORIES = [
  { id: 'core-concepts',    title: 'Core Concepts',      icon: '📖', order: 0 },
  { id: 'querying-data',    title: 'Querying Data',      icon: '🔍', order: 1 },
  { id: 'filtering',        title: 'Filtering & Patterns',icon: '🎯', order: 2 },
  { id: 'dml',              title: 'Data Manipulation',  icon: '✏️', order: 3 },
  { id: 'functions',        title: 'Functions',          icon: '⚙️', order: 4 },
  { id: 'aggregation',      title: 'Aggregation & Grouping', icon: '📊', order: 5 },
  { id: 'joins',            title: 'Joins',              icon: '🔗', order: 6 },
  { id: 'set-operations',   title: 'Set Operations',     icon: '∪',  order: 7 },
  { id: 'subqueries',       title: 'Subqueries',         icon: '🔬', order: 8 },
  { id: 'schema',           title: 'Schema & DDL',       icon: '🏗️', order: 9 },
  { id: 'advanced',         title: 'Advanced SQL',       icon: '⚡', order: 10 },
  { id: 'transactions',     title: 'Transactions & Concurrency', icon: '🔄', order: 11 },
  { id: 'stored-logic',     title: 'Stored Logic',       icon: '📦', order: 12 },
  { id: 'performance',      title: 'Performance & Tuning', icon: '🚀', order: 13 },
  { id: 'design',           title: 'Database Design',    icon: '📐', order: 14 },
  { id: 'dialects',         title: 'Dialect Features',   icon: '🌐', order: 15 },
  { id: 'anti-patterns',    title: 'Anti-Patterns & Security', icon: '⚠️', order: 16 },
];

/* ─── All 130 Topics ─── */
const TOPICS = [
  /* ───────── CORE CONCEPTS ───────── */
  { id:'what-is-sql',         t:'What is SQL?',              c:'core-concepts', d:'beginner', i:'🗄️' },
  { id:'what-is-database',    t:'What is a Database?',       c:'core-concepts', d:'beginner', i:'💾' },
  { id:'relational-concepts', t:'Relational DB Concepts',    c:'core-concepts', d:'beginner', i:'🔗' },
  { id:'data-types',          t:'Data Types',                c:'core-concepts', d:'beginner', i:'📋' },
  { id:'sql-syntax',          t:'SQL Syntax & Structure',    c:'core-concepts', d:'beginner', i:'📝' },
  { id:'comments',            t:'Comments',                  c:'core-concepts', d:'beginner', i:'💬' },

  /* ───────── QUERYING DATA ───────── */
  { id:'select',              t:'SELECT Statement',          c:'querying-data', d:'beginner', i:'🔍' },
  { id:'select-distinct',     t:'SELECT DISTINCT',           c:'querying-data', d:'beginner', i:'🔍' },
  { id:'from-clause',         t:'FROM Clause',               c:'querying-data', d:'beginner', i:'📄' },
  { id:'as-alias',            t:'Column & Table Aliases',    c:'querying-data', d:'beginner', i:'🏷️' },
  { id:'where',               t:'WHERE Clause',              c:'querying-data', d:'beginner', i:'🎯' },
  { id:'comparison-ops',      t:'Comparison Operators',      c:'querying-data', d:'beginner', i:'⚖️' },
  { id:'and-or-not',          t:'AND, OR, NOT',              c:'querying-data', d:'beginner', i:'🧩' },
  { id:'order-by',            t:'ORDER BY',                  c:'querying-data', d:'beginner', i:'📊' },
  { id:'limit-offset',        t:'LIMIT & OFFSET',            c:'querying-data', d:'beginner', i:'📄' },
  { id:'null-values',         t:'NULL Values',               c:'querying-data', d:'beginner', i:'❓' },
  { id:'is-null',             t:'IS NULL / IS NOT NULL',     c:'querying-data', d:'beginner', i:'❓' },

  /* ───────── FILTERING & PATTERNS ───────── */
  { id:'like',                t:'LIKE Operator',             c:'filtering', d:'beginner', i:'🔤' },
  { id:'wildcards',           t:'SQL Wildcards',             c:'filtering', d:'beginner', i:'*️⃣' },
  { id:'in-operator',         t:'IN Operator',               c:'filtering', d:'beginner', i:'📋' },
  { id:'between',             t:'BETWEEN Operator',          c:'filtering', d:'beginner', i:'↔️' },
  { id:'case-expression',     t:'CASE Expression',           c:'filtering', d:'intermediate', i:'🔀' },

  /* ───────── DATA MANIPULATION ───────── */
  { id:'insert',              t:'INSERT INTO',               c:'dml', d:'beginner', i:'➕' },
  { id:'update',              t:'UPDATE Statement',          c:'dml', d:'beginner', i:'✏️' },
  { id:'delete',              t:'DELETE Statement',          c:'dml', d:'beginner', i:'🗑️' },
  { id:'truncate',            t:'TRUNCATE TABLE',            c:'dml', d:'beginner', i:'✂️' },

  /* ───────── FUNCTIONS ───────── */
  { id:'count',               t:'COUNT()',                   c:'functions', d:'beginner', i:'🔢' },
  { id:'sum-avg',             t:'SUM() & AVG()',             c:'functions', d:'beginner', i:'➕' },
  { id:'min-max',             t:'MIN() & MAX()',             c:'functions', d:'beginner', i:'📈' },
  { id:'upper-lower',         t:'UPPER() & LOWER()',         c:'functions', d:'beginner', i:'🔤' },
  { id:'length',              t:'LENGTH()',                  c:'functions', d:'beginner', i:'📏' },
  { id:'trim',                t:'TRIM Functions',            c:'functions', d:'beginner', i:'✂️' },
  { id:'substring',           t:'SUBSTRING()',               c:'functions', d:'beginner', i:'✂️' },
  { id:'replace',             t:'REPLACE()',                 c:'functions', d:'beginner', i:'🔄' },
  { id:'concat',              t:'CONCAT()',                  c:'functions', d:'beginner', i:'🔗' },
  { id:'coalesce',            t:'COALESCE()',                c:'functions', d:'intermediate', i:'🔀' },
  { id:'nullif',              t:'NULLIF()',                  c:'functions', d:'intermediate', i:'❓' },
  { id:'cast-convert',        t:'CAST() & CONVERT()',        c:'functions', d:'intermediate', i:'🔄' },
  { id:'round-ceil-floor',    t:'ROUND(), CEIL(), FLOOR()',  c:'functions', d:'beginner', i:'🔢' },
  { id:'abs',                 t:'ABS()',                     c:'functions', d:'beginner', i:'📏' },
  { id:'date-functions',      t:'Date & Time Functions',     c:'functions', d:'intermediate', i:'📅' },

  /* ───────── AGGREGATION & GROUPING ───────── */
  { id:'group-by',            t:'GROUP BY',                  c:'aggregation', d:'intermediate', i:'📊' },
  { id:'having',              t:'HAVING Clause',             c:'aggregation', d:'intermediate', i:'🎯' },
  { id:'grouping-sets',       t:'GROUPING SETS',             c:'aggregation', d:'advanced', i:'📊' },
  { id:'rollup',              t:'ROLLUP',                    c:'aggregation', d:'advanced', i:'📊' },
  { id:'cube',                t:'CUBE',                      c:'aggregation', d:'advanced', i:'📊' },

  /* ───────── JOINS ───────── */
  { id:'inner-join',          t:'INNER JOIN',                c:'joins', d:'intermediate', i:'🔗' },
  { id:'left-join',           t:'LEFT JOIN',                 c:'joins', d:'intermediate', i:'🔗' },
  { id:'right-join',          t:'RIGHT JOIN',                c:'joins', d:'intermediate', i:'🔗' },
  { id:'full-join',           t:'FULL OUTER JOIN',           c:'joins', d:'intermediate', i:'🔗' },
  { id:'cross-join',          t:'CROSS JOIN',                c:'joins', d:'intermediate', i:'❌' },
  { id:'natural-join',        t:'NATURAL JOIN',              c:'joins', d:'intermediate', i:'🔗' },
  { id:'self-join',           t:'Self-Join',                 c:'joins', d:'intermediate', i:'🔄' },
  { id:'non-equi-join',       t:'Non-Equi Joins',            c:'joins', d:'advanced', i:'⚖️' },

  /* ───────── SET OPERATIONS ───────── */
  { id:'union',               t:'UNION & UNION ALL',         c:'set-operations', d:'intermediate', i:'∪' },
  { id:'intersect',           t:'INTERSECT',                 c:'set-operations', d:'intermediate', i:'∩' },
  { id:'except-minus',        t:'EXCEPT / MINUS',            c:'set-operations', d:'intermediate', i:'−' },

  /* ───────── SUBQUERIES ───────── */
  { id:'scalar-subquery',     t:'Scalar Subquery',           c:'subqueries', d:'intermediate', i:'🔬' },
  { id:'row-subquery',        t:'Row Subquery',              c:'subqueries', d:'intermediate', i:'🔬' },
  { id:'table-subquery',      t:'Table Subquery (Derived)',  c:'subqueries', d:'intermediate', i:'🔬' },
  { id:'correlated-subquery', t:'Correlated Subquery',       c:'subqueries', d:'advanced', i:'🔬' },
  { id:'exists',              t:'EXISTS / NOT EXISTS',       c:'subqueries', d:'intermediate', i:'✅' },
  { id:'any-all',             t:'ANY / ALL',                 c:'subqueries', d:'intermediate', i:'🔬' },

  /* ───────── SCHEMA & DDL ───────── */
  { id:'create-table',        t:'CREATE TABLE',              c:'schema', d:'beginner', i:'🏗️' },
  { id:'alter-table',         t:'ALTER TABLE',               c:'schema', d:'intermediate', i:'🏗️' },
  { id:'drop-table',          t:'DROP TABLE',                c:'schema', d:'beginner', i:'🗑️' },
  { id:'not-null',            t:'NOT NULL Constraint',       c:'schema', d:'beginner', i:'🚫' },
  { id:'unique-constraint',   t:'UNIQUE Constraint',         c:'schema', d:'beginner', i:'🔑' },
  { id:'primary-key',         t:'PRIMARY KEY',               c:'schema', d:'beginner', i:'🔑' },
  { id:'foreign-key',         t:'FOREIGN KEY',               c:'schema', d:'intermediate', i:'🔗' },
  { id:'check-constraint',    t:'CHECK Constraint',          c:'schema', d:'intermediate', i:'✅' },
  { id:'default-constraint',  t:'DEFAULT Constraint',        c:'schema', d:'beginner', i:'📋' },
  { id:'indexes',             t:'CREATE / DROP INDEX',       c:'schema', d:'intermediate', i:'📑' },
  { id:'views',               t:'CREATE / DROP VIEW',        c:'schema', d:'intermediate', i:'👁️' },
  { id:'sequences',           t:'Sequences & Auto-Increment',c:'schema', d:'intermediate', i:'🔢' },
  { id:'temp-tables',         t:'Temporary Tables',          c:'schema', d:'intermediate', i:'📄' },

  /* ───────── ADVANCED SQL ───────── */
  { id:'cte',                 t:'Common Table Expressions (CTE)', c:'advanced', d:'advanced', i:'📦' },
  { id:'recursive-cte',       t:'Recursive CTE',             c:'advanced', d:'advanced', i:'🔄' },
  { id:'window-row-number',   t:'ROW_NUMBER(), RANK()',      c:'advanced', d:'advanced', i:'📊' },
  { id:'window-lead-lag',     t:'LEAD() & LAG()',            c:'advanced', d:'advanced', i:'📊' },
  { id:'window-frames',       t:'Window Frame Clauses',      c:'advanced', d:'expert', i:'📊' },
  { id:'window-first-last',   t:'FIRST_VALUE / LAST_VALUE',  c:'advanced', d:'advanced', i:'📊' },
  { id:'pivot-unpivot',       t:'PIVOT / UNPIVOT',           c:'advanced', d:'advanced', i:'🔄' },
  { id:'merge-upsert',        t:'MERGE / UPSERT',            c:'advanced', d:'advanced', i:'🔄' },
  { id:'lateral-apply',       t:'LATERAL / APPLY',           c:'advanced', d:'expert', i:'🔗' },
  { id:'string-aggregation',  t:'STRING_AGG / LISTAGG',      c:'advanced', d:'advanced', i:'🔗' },
  { id:'json-functions',      t:'JSON in SQL',               c:'advanced', d:'expert', i:'📦' },
  { id:'full-text-search',    t:'Full-Text Search',          c:'advanced', d:'advanced', i:'🔍' },
  { id:'spatial-data',        t:'Spatial Data & GIS',        c:'advanced', d:'expert', i:'🌍' },
  { id:'gaps-islands',        t:'Gaps & Islands Problems',   c:'advanced', d:'expert', i:'🏝️' },
  { id:'running-totals',      t:'Running Totals & Moving Avg',c:'advanced', d:'advanced', i:'📈' },

  /* ───────── TRANSACTIONS & CONCURRENCY ───────── */
  { id:'begin-commit-rollback', t:'BEGIN, COMMIT, ROLLBACK', c:'transactions', d:'intermediate', i:'🔄' },
  { id:'savepoint',           t:'SAVEPOINT',                 c:'transactions', d:'intermediate', i:'📍' },
  { id:'isolation-levels',    t:'Transaction Isolation Levels', c:'transactions', d:'advanced', i:'🔒' },
  { id:'lock-table',          t:'LOCK TABLE',                c:'transactions', d:'advanced', i:'🔒' },
  { id:'deadlocks',           t:'Deadlocks',                 c:'transactions', d:'advanced', i:'💀' },

  /* ───────── STORED LOGIC ───────── */
  { id:'stored-procedures',   t:'Stored Procedures',         c:'stored-logic', d:'advanced', i:'📦' },
  { id:'user-functions',      t:'User-Defined Functions',    c:'stored-logic', d:'advanced', i:'⚙️' },
  { id:'triggers',            t:'Triggers',                  c:'stored-logic', d:'advanced', i:'🔔' },
  { id:'cursors',             t:'Cursors',                   c:'stored-logic', d:'advanced', i:'📇' },
  { id:'dynamic-sql',         t:'Dynamic SQL',               c:'stored-logic', d:'expert', i:'⚡' },

  /* ───────── PERFORMANCE & TUNING ───────── */
  { id:'explain-plan',        t:'EXPLAIN / Execution Plans', c:'performance', d:'advanced', i:'📊' },
  { id:'query-optimization',  t:'Query Optimization',        c:'performance', d:'advanced', i:'⚡' },
  { id:'indexing-strategies', t:'Indexing Strategies',       c:'performance', d:'advanced', i:'📑' },
  { id:'index-maintenance',   t:'Index Maintenance',         c:'performance', d:'advanced', i:'🔧' },
  { id:'partitioning',        t:'Table Partitioning',        c:'performance', d:'expert', i:'📦' },
  { id:'query-hints',         t:'Query Hints',               c:'performance', d:'expert', i:'💡' },
  { id:'optimizer-basics',    t:'Cost-Based vs Rule-Based',  c:'performance', d:'expert', i:'⚖️' },

  /* ───────── DATABASE DESIGN ───────── */
  { id:'normalization-1nf',   t:'1NF — First Normal Form',   c:'design', d:'intermediate', i:'📐' },
  { id:'normalization-2nf',   t:'2NF — Second Normal Form',  c:'design', d:'intermediate', i:'📐' },
  { id:'normalization-3nf',   t:'3NF — Third Normal Form',   c:'design', d:'intermediate', i:'📐' },
  { id:'bcnf',                t:'BCNF — Boyce-Codd',         c:'design', d:'advanced', i:'📐' },
  { id:'denormalization',     t:'Denormalization',           c:'design', d:'advanced', i:'📐' },
  { id:'erd-modeling',        t:'Entity-Relationship Modeling', c:'design', d:'intermediate', i:'📐' },
  { id:'referential-integrity', t:'Referential Integrity',   c:'design', d:'intermediate', i:'🔗' },
  { id:'sharding',            t:'Database Sharding',         c:'design', d:'expert', i:'🔀' },
  { id:'replication',         t:'Replication',               c:'design', d:'expert', i:'🔄' },
  { id:'acid-vs-base',        t:'ACID vs BASE',              c:'design', d:'expert', i:'⚖️' },
  { id:'cap-theorem',         t:'CAP Theorem',               c:'design', d:'expert', i:'🎯' },

  /* ───────── DIALECT FEATURES ───────── */
  { id:'mysql-specific',      t:'MySQL Features',            c:'dialects', d:'advanced', i:'🐬' },
  { id:'postgres-specific',   t:'PostgreSQL Features',       c:'dialects', d:'advanced', i:'🐘' },
  { id:'sqlserver-specific',  t:'SQL Server Features',       c:'dialects', d:'advanced', i:'🪟' },
  { id:'sqlite-specific',     t:'SQLite Features',           c:'dialects', d:'intermediate', i:'📦' },
  { id:'oracle-specific',     t:'Oracle Features',           c:'dialects', d:'advanced', i:'☁️' },
  { id:'ansi-sql-standards',  t:'ANSI SQL Standards History',c:'dialects', d:'expert', i:'📜' },

  /* ───────── ANTI-PATTERNS & SECURITY ───────── */
  { id:'sql-injection',       t:'SQL Injection Prevention',  c:'anti-patterns', d:'intermediate', i:'🛡️' },
  { id:'n-plus-one',          t:'N+1 Query Problem',         c:'anti-patterns', d:'advanced', i:'➕' },
  { id:'cartesian-explosion', t:'Cartesian Explosions',      c:'anti-patterns', d:'intermediate', i:'💥' },
  { id:'halloween-problem',   t:'Halloween Problem',         c:'anti-patterns', d:'expert', i:'🎃' },
  { id:'implicit-vs-explicit',t:'Implicit vs Explicit Joins',c:'anti-patterns', d:'intermediate', i:'🔗' },
  { id:'index-bloat',         t:'Index Bloat & Maintenance', c:'anti-patterns', d:'advanced', i:'📈' },
];

/* ─── Content Helpers ─── */
function t(id) { return TOPICS.find(t => t.id === id); }

/* ─── Topic Content Map (Lazy-Loaded) ─── */
const CONTENT = {};

function loadContent(id) {
  if (CONTENT[id]) return Promise.resolve(CONTENT[id]);
  return new Promise(resolve => {
    setTimeout(() => {
      const topic = t(id);
      if (!topic) { CONTENT[id] = []; return resolve([]); }
      CONTENT[id] = generateContent(topic);
      resolve(CONTENT[id]);
    }, 80);
  });
}

function generateContent(topic) {
  const sections = [];
  const T = topic.t;
  const I = topic.i;

  if (topic.id === 'what-is-sql') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>SQL</strong> (Structured Query Language) is how you talk to databases. It's the world's most popular database language — used by companies like Google, Amazon, and Netflix.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">SQL is like a <strong>restaurant menu</strong>. You tell the waiter (SQL) what you want: <em>"I want a cheeseburger with fries"</em>. The kitchen (database) figures out how to make it. You don't need to know the recipe — you just order what you want.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        <div class="p-3 rounded-lg text-center" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <div class="text-xl mb-1">📝</div>
          <div class="text-xs font-semibold uppercase tracking-wide" style="color:var(--accent);">Write</div>
          <div class="text-xs mt-1" style="color:var(--text-secondary);">You write a SQL query</div>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <div class="text-xl mb-1">⚡</div>
          <div class="text-xs font-semibold uppercase tracking-wide" style="color:var(--accent);">Execute</div>
          <div class="text-xs mt-1" style="color:var(--text-secondary);">Database runs the query</div>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <div class="text-xl mb-1">📊</div>
          <div class="text-xs font-semibold uppercase tracking-wide" style="color:var(--accent);">Result</div>
          <div class="text-xs mt-1" style="color:var(--text-secondary);">You get back a table of data</div>
        </div>
      </div>` });
    sections.push({ type:'visual-sql-flow' });
    sections.push({ type:'syntax',
      sql:`-- SQL is easy to read. It reads like English:
SELECT name, email
FROM customers
WHERE city = 'London'
ORDER BY name;

-- Translation:
-- "SELECT name and email FROM customers
--  WHERE city is London, ORDER BY name"` });
    sections.push({ type:'example', title:'Your First SQL Query',
      data:[
        { id:1, name:'Alice Johnson', email:'alice@email.com', city:'London', age:30 },
        { id:2, name:'Bob Smith',     email:'bob@email.com',   city:'Paris',  age:25 },
        { id:3, name:'Charlie Brown', email:'charlie@email.com', city:'London', age:35 },
        { id:4, name:'Diana Prince',  email:'diana@email.com',  city:'Berlin', age:28 },
      ],
      sql:'SELECT name, city\nFROM customers\nWHERE city = \'London\'\nORDER BY name;',
      result:[
        { name:'Alice Johnson', city:'London' },
        { name:'Charlie Brown', city:'London' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">SQL is <strong>declarative</strong>: you say WHAT you want, not HOW to get it. The database figures out the most efficient way to fetch your data.</p>
      </div>` });
  }
  else if (topic.id === 'what-is-database') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>database</strong> is an organized collection of data stored electronically. Think of it as a <strong>digital filing cabinet</strong> for all your information.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Real-World Analogy: A Library</p>
        <p class="text-sm" style="color:var(--text-secondary);">A library has <strong>bookshelves</strong> (tables). Each bookshelf holds <strong>books</strong> (rows of data). Each book has a <strong>title, author, and ISBN</strong> (columns). The <strong>librarian</strong> (database system) helps you find any book instantly — you never search every shelf manually.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="mt-4">
        <p class="font-semibold text-sm mb-3">🗂️ The Hierarchy:</p>
        <div class="space-y-2 font-mono text-sm">
          <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
            💻 Database Server <span class="text-xs" style="color:var(--text-secondary);">(MySQL, PostgreSQL)</span>
          </div>
          <div class="ml-6 pl-4 border-l-2" style="border-color:var(--border);">
            <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
              📁 Database <span class="text-xs" style="color:var(--text-secondary);">("library_db")</span>
            </div>
            <div class="ml-6 pl-4 border-l-2" style="border-color:var(--border);">
              <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
                📋 Table <span class="text-xs" style="color:var(--text-secondary);">("books")</span>
              </div>
              <div class="ml-6 pl-4 border-l-2" style="border-color:var(--border);">
                <div class="py-1">├─ 📄 <strong>Row</strong> (a single book record)</div>
                <div class="py-1">└─ 📌 <strong>Columns</strong>: id, title, author, year</div>
              </div>
            </div>
          </div>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Create a new database
CREATE DATABASE library_db;

-- Switch to using it (MySQL)
USE library_db;

-- Create a table inside the database
CREATE TABLE books (
  id     INT,
  title  VARCHAR(200),
  author VARCHAR(100),
  year   INT
);

-- Add a book
INSERT INTO books VALUES (1, 'Dune', 'Frank Herbert', 1965);` });
    sections.push({ type:'example', title:'A Database in Action',
      data:[
        { id:1, title:'The Great Gatsby',      author:'F. Scott Fitzgerald', year:1925 },
        { id:2, title:'1984',                  author:'George Orwell',       year:1949 },
        { id:3, title:'To Kill a Mockingbird', author:'Harper Lee',          year:1960 },
        { id:4, title:'Dune',                  author:'Frank Herbert',       year:1965 },
      ],
      sql:'SELECT title, author\nFROM books\nWHERE year > 1950\nORDER BY year;',
      result:[
        { title:'To Kill a Mockingbird', author:'Harper Lee' },
        { title:'Dune',                  author:'Frank Herbert' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A database organizes data into <strong>tables</strong> (like spreadsheets), with <strong>rows</strong> (records) and <strong>columns</strong> (fields). Multiple databases can live on one server.</p>
      </div>` });
  }
  else if (topic.id === 'relational-concepts') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Relational databases</strong> store data in <strong>tables</strong> that <strong>connect</strong> to each other. This is the "R" in "RDBMS" — and it's what makes SQL databases powerful.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Real-World Analogy: A School</p>
        <p class="text-sm" style="color:var(--text-secondary);">A school has a <strong>"Students"</strong> table and a <strong>"Classes"</strong> table. Instead of copying every student's name, email, and phone into each class roster, you just write the <strong>student ID</strong> on the roster. That ID connects (relates) the two tables. If a student changes their name, update it once — every class sees the change.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="mt-4">
        <p class="font-semibold text-sm mb-3">🔑 Key Concepts:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
            <span class="font-semibold text-sm" style="color:var(--accent);">PRIMARY KEY</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">A unique ID for each row. Like a student ID number — no two students share the same one. <code>UNIQUE + NOT NULL</code>.</p>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
            <span class="font-semibold text-sm" style="color:var(--green);">FOREIGN KEY</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">A column that references another table's primary key. Like writing a student's ID on a class roster.</p>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
            <span class="font-semibold text-sm">👤 One-to-Many</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">One customer → many orders. The most common relationship type.</p>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
            <span class="font-semibold text-sm">🔗 Many-to-Many</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">Students ↔ Classes. Needs a third "join table" to connect them.</p>
          </div>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Customers table (the "one" side)
CREATE TABLE customers (
  id   INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Orders table (the "many" side)
-- customer_id links back to customers
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT,
  total       DECIMAL(10,2),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);` });
    sections.push({ type:'example', title:'Tables Working Together',
      data:[
        { id:1, name:'Alice',  email:'alice@example.com' },
        { id:2, name:'Bob',    email:'bob@example.com' },
        { id:3, name:'Charlie',email:'charlie@example.com' },
      ],
      sql:'SELECT customers.name, orders.total\nFROM customers\nJOIN orders ON customers.id = orders.customer_id;',
      result:[
        { name:'Alice',  total:29.99 },
        { name:'Alice',  total:49.99 },
        { name:'Charlie',total:89.97 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Why This Matters</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Relationships <strong>eliminate duplicate data</strong>. Alice's name is stored <strong>once</strong> in customers. Her orders just reference her ID. If Alice changes her email, it updates everywhere.</p>
      </div>` });
  }
  else if (topic.id === 'data-types') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Data types</strong> tell the database what <strong>kind</strong> of information a column will hold. Think of them like different containers for different things:</p>
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">🥤</span>
          <span class="font-semibold text-sm ml-1">VARCHAR(100)</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a cup — holds short text. "Alice", "London", "alice@email.com".</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">📦</span>
          <span class="font-semibold text-sm ml-1">INT</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a box — holds whole numbers. 42, -7, 0, 999. No decimals.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">⚖️</span>
          <span class="font-semibold text-sm ml-1">DECIMAL(10,2)</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a scale — holds precise decimals. 29.99, 149.50, 0.75.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">📅</span>
          <span class="font-semibold text-sm ml-1">DATE / DATETIME</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a calendar — 2024-01-15 or 2024-01-15 10:30:00.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">✅</span>
          <span class="font-semibold text-sm ml-1">BOOLEAN</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a light switch — TRUE or FALSE. In stock? Yes or no.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="text-lg">📄</span>
          <span class="font-semibold text-sm ml-1">TEXT</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Like a binder — holds paragraphs, articles. No character limit.</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE products (
  id          INT PRIMARY KEY,         -- Whole numbers
  name        VARCHAR(100) NOT NULL,   -- Text, max 100 chars
  description TEXT,                    -- Unlimited text
  price       DECIMAL(10,2) NOT NULL,  -- 12345678.99
  in_stock    BOOLEAN DEFAULT TRUE,    -- TRUE or FALSE
  created_at  DATETIME                 -- '2024-01-15 10:30:00'
);` });
    sections.push({ type:'example', title:'Data Types in Action',
      data:[
        { id:1, name:'Wireless Mouse',      price:29.99,  in_stock:'TRUE',  created:'2024-01-10' },
        { id:2, name:'USB-C Cable',         price:12.50,  in_stock:'TRUE',  created:'2024-01-12' },
        { id:3, name:'Mechanical Keyboard', price:149.99, in_stock:'FALSE', created:'2024-01-05' },
        { id:4, name:'Monitor Stand',       price:79.99,  in_stock:'TRUE',  created:'2024-01-15' },
      ],
      sql:'SELECT name, price, in_stock\nFROM products\nWHERE price < 50 AND in_stock = TRUE\nORDER BY price;',
      result:[
        { name:'USB-C Cable',     price:12.50, in_stock:'TRUE' },
        { name:'Wireless Mouse',  price:29.99, in_stock:'TRUE' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Why Data Types Matter</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Data types <strong>prevent errors</strong> — if a column is INT, you can't accidentally store "hello" in it. They also <strong>save space</strong> — a BOOLEAN uses 1 byte, TEXT would waste space for a yes/no value.</p>
      </div>` });
  }
  else if (topic.id === 'select') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>SELECT</code> is how you <strong>read</strong> data from a database. It's the most-used SQL command — you'll write it in every single query.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're at a restaurant looking at the menu. <code>SELECT</code> is "what do you want to eat?" You say: "I want the <strong>name</strong> and <strong>price</strong> of all desserts." The kitchen brings you back a list — that's your result table.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Select specific columns:
SELECT name, email
FROM users;

-- Select ALL columns (use * sparingly):
SELECT *
FROM users;

-- Result: a table with only the columns you asked for.` });
    sections.push({ type:'example', title:'SELECT in Action — Pick Your Columns',
      data:[
        { id:1, name:'Alice Johnson', email:'alice@email.com',    city:'London', age:30, salary:50000 },
        { id:2, name:'Bob Smith',     email:'bob@email.com',      city:'Paris',  age:25, salary:42000 },
        { id:3, name:'Charlie Brown', email:'charlie@email.com',  city:'London', age:35, salary:65000 },
        { id:4, name:'Diana Prince',  email:'diana@email.com',    city:'Berlin', age:28, salary:48000 },
      ],
      sql:'SELECT name, salary\nFROM employees;',
      result:[
        { name:'Alice Johnson', salary:50000 },
        { name:'Bob Smith',     salary:42000 },
        { name:'Charlie Brown', salary:65000 },
        { name:'Diana Prince',  salary:48000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>SELECT</code> picks <strong>columns</strong> (vertical). <code>*</code> means "all columns". Only request the columns you actually need — it's faster and cleaner.</p>
      </div>` });
  }
  else if (topic.id === 'select-distinct') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>SELECT DISTINCT</code> removes <strong>duplicate</strong> rows from your results. If multiple rows have the same value in the selected column, you only see it once.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You ask your friends "what cities do you live in?" Alice and Charlie both say "London". Without DISTINCT: "London, Paris, London, Berlin". With DISTINCT: "London, Paris, Berlin" — each city appears once.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Without DISTINCT (all rows, duplicates included):
SELECT city FROM customers;
-- London, Paris, London, Berlin

-- With DISTINCT (each value once):
SELECT DISTINCT city FROM customers;
-- London, Paris, Berlin

-- DISTINCT works on all selected columns together.` });
    sections.push({ type:'example', title:'DISTINCT vs Plain SELECT',
      data:[
        { id:1,  name:'Alice',   city:'London', dept:'Engineering' },
        { id:2,  name:'Bob',     city:'Paris',   dept:'Sales' },
        { id:3,  name:'Charlie', city:'London',  dept:'Engineering' },
        { id:4,  name:'Diana',   city:'Berlin',  dept:'Marketing' },
        { id:5,  name:'Eve',     city:'London',  dept:'Sales' },
      ],
      sql:'SELECT DISTINCT city\nFROM employees;',
      result:[
        { city:'Berlin' },
        { city:'London' },
        { city:'Paris' },
      ]});
    sections.push({ type:'example', title:'DISTINCT on Multiple Columns',
      data:[
        { id:1, name:'Alice',   city:'London', dept:'Engineering' },
        { id:2, name:'Bob',     city:'Paris',   dept:'Sales' },
        { id:3, name:'Charlie', city:'London',  dept:'Engineering' },
        { id:4, name:'Diana',   city:'Berlin',  dept:'Marketing' },
        { id:5, name:'Eve',     city:'London',  dept:'Sales' },
      ],
      sql:'SELECT DISTINCT city, dept\nFROM employees\nORDER BY city;',
      result:[
        { city:'Berlin',  dept:'Marketing' },
        { city:'London',  dept:'Engineering' },
        { city:'London',  dept:'Sales' },
        { city:'Paris',   dept:'Sales' },
      ]});
  }
  else if (topic.id === 'from-clause') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxel"><code>FROM</code> tells the database which <strong>table</strong> to pull data from. It's the source — without it, SQL doesn't know where to look.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Imagine a giant filing cabinet with many drawers. <code>FROM</code> is like saying "open the drawer labeled <strong>Employees</strong>". If you don't say which drawer, nobody knows where to search.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- FROM tells SQL which table to use:
SELECT * FROM employees;    -- Get everything from employees
SELECT * FROM orders;       -- Get everything from orders
SELECT * FROM products;     -- Get everything from products

-- You can also use multiple tables (we'll learn this in JOINs)
SELECT * FROM employees, departments;` });
    sections.push({ type:'example', title:'Switching Tables with FROM',
      data:[
        { id:1, title:'Widget',    price:29.99,  stock:100 },
        { id:2, title:'Gadget',    price:49.99,  stock:42 },
        { id:3, title:'Doohickey', price:99.99,  stock:15 },
      ],
      sql:'SELECT title, price\nFROM products;',
      result:[
        { title:'Widget',    price:29.99 },
        { title:'Gadget',    price:49.99 },
        { title:'Doohickey', price:99.99 },
      ]});
  }
  else if (topic.id === 'as-alias') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Aliases</strong> give a column or table a <strong>temporary nickname</strong> in your query results. The original names in the database stay unchanged.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Your friend <strong>Robert</strong> goes by <strong>"Bob"</strong>. Same person, shorter name — easier to say. An alias renames <code>employee_name</code> to just <code>name</code> in your results, without changing the actual column.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Column alias: renames the column in results
SELECT name AS employee_name, salary AS annual_pay
FROM employees;

-- Table alias: shortens table name in the query
SELECT e.name, e.salary
FROM employees AS e;

-- The AS keyword is optional (but recommended for clarity):
SELECT name employee_name FROM employees;` });
    sections.push({ type:'example', title:'Aliases Make Results Cleaner',
      data:[
        { id:1, name:'Alice',   salary:50000, bonus:5000 },
        { id:2, name:'Bob',     salary:42000, bonus:3000 },
        { id:3, name:'Charlie', salary:65000, bonus:7000 },
      ],
      sql:'SELECT name,\n       (salary + bonus) AS total_compensation\nFROM employees\nORDER BY total_compensation DESC;',
      result:[
        { name:'Charlie', total_compensation:72000 },
        { name:'Alice',   total_compensation:55000 },
        { name:'Bob',     total_compensation:45000 },
      ]});
  }
  else if (topic.id === 'comparison-ops') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Comparison operators</strong> compare values in SQL. They're the building blocks of conditions — you use them in <code>WHERE</code> to filter rows.</p>
      <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">=</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Equal to</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">&lt;&gt; or !=</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Not equal to</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">&gt;</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Greater than</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">&lt;</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Less than</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">&gt;=</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Greater or equal</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--accent);">&lt;=</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Less or equal</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Each operator filters differently:
SELECT * FROM products WHERE price = 29.99;    -- exactly $29.99
SELECT * FROM products WHERE price > 50;       -- over $50
SELECT * FROM products WHERE price <= 20;      -- $20 or less
SELECT * FROM products WHERE price <> 99.99;   -- not $99.99` });
    sections.push({ type:'example', title:'Comparison Operators in Action',
      data:[
        { id:1, name:'Widget',           price:29.99,  stock:100 },
        { id:2, name:'USB Cable',        price:12.50,  stock:250 },
        { id:3, name:'Mechanical Keyboard', price:149.99, stock:30 },
        { id:4, name:'Mouse Pad',        price:9.99,   stock:500 },
        { id:5, name:'Monitor',          price:299.99, stock:15 },
      ],
      sql:'SELECT name, price, stock\nFROM products\nWHERE price >= 20\n  AND price <= 100\nORDER BY price;',
      result:[
        { name:'Widget',    price:29.99,  stock:100 },
        { name:'USB Cable', price:12.50,  stock:250 },
      ]});
  }
  else if (topic.id === 'and-or-not') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>AND</code>, <code>OR</code>, and <code>NOT</code> let you <strong>combine multiple conditions</strong> in a single <code>WHERE</code> clause. They're like the logic switches in your brain when you make decisions.</p>
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--accent);">AND</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">All conditions must be true. Like "I want a car that is <strong>red AND</strong> under $30k". Both must match.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--green);">OR</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Any condition can be true. Like "I'll take <strong>coffee OR tea</strong>". Either works.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--amber);">NOT</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Reverses a condition. Like "Any color <strong>NOT black</strong>". Excludes matches.</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- AND: both must be true
SELECT * FROM employees
WHERE dept = 'Engineering' AND salary > 90000;

-- OR: either can be true
SELECT * FROM employees
WHERE dept = 'Sales' OR dept = 'Marketing';

-- NOT: reverse a condition
SELECT * FROM employees
WHERE NOT city = 'London';

-- Combine them: parentheses control order
SELECT * FROM products
WHERE (category = 'Electronics' OR category = 'Computers')
  AND price < 100;` });
    sections.push({ type:'example', title:'AND, OR, NOT Side by Side',
      data:[
        { id:1,  name:'Alice',   dept:'Engineering', salary:95000,  city:'London' },
        { id:2,  name:'Bob',     dept:'Sales',       salary:72000,  city:'Paris' },
        { id:3,  name:'Charlie', dept:'Engineering', salary:110000, city:'London' },
        { id:4,  name:'Diana',   dept:'Marketing',   salary:68000,  city:'Berlin' },
        { id:5,  name:'Eve',     dept:'Sales',       salary:85000,  city:'Madrid' },
        { id:6,  name:'Frank',   dept:'Engineering', salary:92000,  city:'Rome' },
        { id:7,  name:'Grace',   dept:'Marketing',   salary:71000,  city:'London' },
        { id:8,  name:'Hank',    dept:'Sales',       salary:95000,  city:'Paris' },
      ],
      sql:'SELECT name, dept, salary, city\nFROM employees\nWHERE (dept = \'Engineering\' OR dept = \'Sales\')\n  AND salary >= 90000\n  AND NOT city = \'Paris\';',
      result:[
        { name:'Alice',   dept:'Engineering', salary:95000,  city:'London' },
        { name:'Charlie', dept:'Engineering', salary:110000, city:'London' },
        { name:'Frank',   dept:'Engineering', salary:92000,  city:'Rome' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Rule of Thumb</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Use <strong>parentheses</strong> to group <code>OR</code> conditions together. Without them, <code>AND</code> binds tighter than <code>OR</code> (just like in math: multiplication before addition).</p>
      </div>` });
  }
  else if (topic.id === 'order-by') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ORDER BY</code> <strong>sorts</strong> your results. You can sort by any column, in ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a playlist of songs. You can sort by <strong>title A→Z</strong> (ASC) or by <strong>rating highest→lowest</strong> (DESC). ORDER BY is your sorting button — pick a column and direction.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Ascending (A→Z, 0→9) — this is the default:
SELECT name, salary FROM employees
ORDER BY salary;

-- Descending (Z→A, 9→0):
SELECT name, salary FROM employees
ORDER BY salary DESC;

-- Sort by multiple columns:
SELECT name, dept, salary FROM employees
ORDER BY dept ASC, salary DESC;
-- First by department alphabetically,
-- then by salary highest-to-lowest within each dept` });
    sections.push({ type:'example', title:'Sorting in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:72000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:110000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:68000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:85000 },
      ],
      sql:'SELECT name, dept, salary\nFROM employees\nORDER BY salary DESC;',
      result:[
        { name:'Charlie', dept:'Engineering', salary:110000 },
        { name:'Alice',   dept:'Engineering', salary:95000 },
        { name:'Eve',     dept:'Sales',       salary:85000 },
        { name:'Bob',     dept:'Sales',       salary:72000 },
        { name:'Diana',   dept:'Marketing',   salary:68000 },
      ]});
    sections.push({ type:'example', title:'Multi-Column Sort',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:72000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:110000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:68000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:85000 },
      ],
      sql:'SELECT name, dept, salary\nFROM employees\nORDER BY dept, salary DESC;',
      result:[
        { name:'Charlie', dept:'Engineering', salary:110000 },
        { name:'Alice',   dept:'Engineering', salary:95000 },
        { name:'Diana',   dept:'Marketing',   salary:68000 },
        { name:'Eve',     dept:'Sales',       salary:85000 },
        { name:'Bob',     dept:'Sales',       salary:72000 },
      ]});
  }
  else if (topic.id === 'limit-offset') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LIMIT</code> controls <strong>how many</strong> rows to return. <code>OFFSET</code> controls <strong>where to start</strong>. Together they let you <strong>paginate</strong> through large result sets.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're reading a book with 100 search results. <strong>LIMIT 10</strong> = show 10 results per page. <strong>OFFSET 20</strong> = skip the first 20 results, start from page 3. Together: "LIMIT 10 OFFSET 20" gives you results 21–30.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- First 5 employees alphabetically:
SELECT name, salary FROM employees
ORDER BY name
LIMIT 5;

-- Skip first 5, show next 5 (page 2):
SELECT name, salary FROM employees
ORDER BY name
LIMIT 5 OFFSET 5;

-- MySQL/PostgreSQL shorthand:
LIMIT 5 OFFSET 5;   -- Standard SQL
LIMIT 5, 5;          -- MySQL alternative (skip, take)` });
    sections.push({ type:'example', title:'Pagination with LIMIT & OFFSET',
      data:[
        { id:1,  name:'Alice',    salary:95000 },
        { id:2,  name:'Bob',      salary:72000 },
        { id:3,  name:'Charlie',  salary:110000 },
        { id:4,  name:'Diana',    salary:68000 },
        { id:5,  name:'Eve',      salary:85000 },
        { id:6,  name:'Frank',    salary:92000 },
        { id:7,  name:'Grace',    salary:71000 },
        { id:8,  name:'Hank',     salary:95000 },
        { id:9,  name:'Ivy',      salary:88000 },
        { id:10, name:'Jack',     salary:105000 },
      ],
      sql:'SELECT name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3 OFFSET 0;',
      result:[
        { name:'Charlie', salary:110000 },
        { name:'Jack',    salary:105000 },
        { name:'Alice',   salary:95000 },
      ]});
    sections.push({ type:'example', title:'Page 2 (next 3)',
      data:[
        { id:1,  name:'Alice',    salary:95000 },
        { id:2,  name:'Bob',      salary:72000 },
        { id:3,  name:'Charlie',  salary:110000 },
        { id:4,  name:'Diana',    salary:68000 },
        { id:5,  name:'Eve',      salary:85000 },
        { id:6,  name:'Frank',    salary:92000 },
        { id:7,  name:'Grace',    salary:71000 },
        { id:8,  name:'Hank',     salary:95000 },
        { id:9,  name:'Ivy',      salary:88000 },
        { id:10, name:'Jack',     salary:105000 },
      ],
      sql:'SELECT name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3 OFFSET 3;',
      result:[
        { name:'Hank',  salary:95000 },
        { name:'Frank', salary:92000 },
        { name:'Ivy',   salary:88000 },
      ]});
  }
  else if (topic.id === 'null-values') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>NULL</code> represents <strong>missing</strong> or <strong>unknown</strong> data. It's <strong>not</strong> zero, <strong>not</strong> an empty string, and <strong>not</strong> false — it's "we don't know yet".</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You fill out a form. You leave the "Middle Name" field blank. That's NULL — not "no middle name" (which would be empty string), just "not provided". The database stores NULL to say "this value was never entered".</p>
      </div>
      <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--amber);">NULL</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Unknown / missing</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg">0</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">A real number (zero)</p>
        </div>
        <div class="p-3 rounded-lg text-center" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold text-lg" style="color:var(--green);">''</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Empty string (known to be blank)</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- NULL is NOT equal to anything — even itself!
-- These are ALL FALSE:
NULL = 0
NULL = ''
NULL = NULL

-- Always use IS NULL or IS NOT NULL to check.
SELECT * FROM employees
WHERE phone IS NULL;
-- Finds employees who haven't provided a phone number` });
    sections.push({ type:'example', title:'NULL vs Real Values',
      data:[
        { id:1, name:'Alice',   phone:'555-0100', email:'alice@email.com' },
        { id:2, name:'Bob',     phone:'NULL',     email:'bob@email.com' },
        { id:3, name:'Charlie', phone:'555-0200', email:'charlie@email.com' },
        { id:4, name:'Diana',   phone:'NULL',     email:'NULL' },
        { id:5, name:'Eve',     phone:'',         email:'eve@email.com' },
      ],
      sql:'SELECT name, phone\nFROM customers\nWHERE phone IS NULL;',
      result:[
        { name:'Bob',   phone:'NULL' },
        { name:'Diana', phone:'NULL' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">⚠️ Common Mistake</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Writing <code>column = NULL</code> will <strong>never</strong> work — it always returns false! Always use <code>IS NULL</code> or <code>IS NOT NULL</code>. This is one of the most common SQL bugs.</p>
      </div>` });
  }
  else if (topic.id === 'is-null') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">To check for <code>NULL</code> values, you must use <code>IS NULL</code> or <code>IS NOT NULL</code>. Regular operators like <code>=</code> and <code>!=</code> <strong>don't work</strong> with NULL.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Imagine a box. You <strong>don't know</strong> what's inside it (NULL). Can you say the box "equals" anything? No, because you don't know! You can only say "the box <strong>IS</strong> unknown" or "the box is <strong>NOT</strong> unknown". That's why SQL has special NULL-check operators.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Correct way to check for NULL:
SELECT * FROM employees WHERE phone IS NULL;
SELECT * FROM employees WHERE phone IS NOT NULL;

-- WRONG — these never work:
SELECT * FROM employees WHERE phone = NULL;    -- Always 0 rows
SELECT * FROM employees WHERE phone <> NULL;   -- Always 0 rows` });
    sections.push({ type:'example', title:'IS NULL vs IS NOT NULL',
      data:[
        { id:1, name:'Alice',   phone:'555-0100', email:'alice@email.com' },
        { id:2, name:'Bob',     phone:'NULL',     email:'bob@email.com' },
        { id:3, name:'Charlie', phone:'555-0200', email:'NULL' },
        { id:4, name:'Diana',   phone:'NULL',     email:'NULL' },
      ],
      sql:'SELECT name, phone\nFROM customers\nWHERE phone IS NOT NULL\n  AND email IS NOT NULL;',
      result:[
        { name:'Alice',   phone:'555-0100' },
        { name:'Charlie', phone:'555-0200' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Quick Rule</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">If you're checking for missing data: <code>IS NULL</code>. If you're checking for filled data: <code>IS NOT NULL</code>. Never use <code>=</code> or <code>!=</code> with NULL — they always return false (or NULL themselves).</p>
      </div>` });
  }
  else if (topic.id === 'where') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>WHERE</code> <strong>filters</strong> rows — only rows that satisfy the condition make it into your results. It's one of the most powerful SQL tools.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a bucket of mixed LEGO bricks. <code>WHERE color = 'red'</code> is like picking out only the red pieces. Every brick gets checked — red ones go into your result, all others stay behind.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- WHERE filters before SELECT returns results:
SELECT name, dept, salary
FROM employees
WHERE salary >= 90000;

-- Filter by text:
SELECT * FROM employees
WHERE city = 'London';

-- Filter by multiple conditions:
SELECT * FROM products
WHERE price > 20 AND stock < 200;` });
    sections.push({ type:'visual-filter-table' });
    sections.push({ type:'example', title:'WHERE Step-by-Step',
      steps:[
        { text:'Imagine 5 employees in the table. We want only Engineering dept.', highlight:-1 },
        { text:'Row 1: Alice — Engineering ✓ included', highlight:0 },
        { text:'Row 2: Bob — Sales ✗ filtered out', highlight:[] },
        { text:'Row 3: Charlie — Engineering ✓ included', highlight:[2] },
        { text:'Row 4: Diana — Marketing ✗ filtered out', highlight:[] },
        { text:'Row 5: Eve — Sales ✗ filtered out', highlight:[] },
        { text:'Final result: 2 Engineering employees returned.', highlight:[0,2] },
      ]});
    sections.push({ type:'example', title:'WHERE with Real Data',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000,  city:'London' },
        { id:2, name:'Bob',     dept:'Sales',       salary:72000,  city:'Paris' },
        { id:3, name:'Charlie', dept:'Engineering', salary:110000, city:'London' },
        { id:4, name:'Diana',   dept:'Marketing',   salary:68000,  city:'Berlin' },
        { id:5, name:'Eve',     dept:'Sales',       salary:85000,  city:'Madrid' },
      ],
      sql:'SELECT name, dept, salary\nFROM employees\nWHERE dept = \'Engineering\'\n  AND salary > 90000;',
      result:[
        { name:'Alice',   dept:'Engineering', salary:95000 },
        { name:'Charlie', dept:'Engineering', salary:110000 },
      ]});
  }
  else if (topic.id === 'insert') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>INSERT INTO</code> adds <strong>new rows</strong> to a table. You tell SQL which table, which columns, and what values — it creates a brand new record.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're adding a new book to a library catalog. You fill out a card: <strong>Title</strong> = "Dune", <strong>Author</strong> = "Frank Herbert", <strong>Shelf</strong> = "A12". The librarian drops that card into the catalog drawer. <code>INSERT</code> does the same — it adds a new row to the table.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Insert a single row (specify columns):
INSERT INTO users (name, email, city, age)
VALUES ('Diana', 'diana@email.com', 'Berlin', 28);

-- Insert multiple rows at once:
INSERT INTO users (name, email, city, age)
VALUES
  ('Eve',   'eve@email.com',   'Madrid', 32),
  ('Frank', 'frank@email.com', 'Rome',   40);

-- Insert without column names (all columns, in order):
INSERT INTO users VALUES (11, 'Grace', 'grace@email.com', 'London', 22, 'Marketing');

-- Insert from another table (INSERT ... SELECT):
INSERT INTO vip_customers (name, email)
SELECT name, email FROM users WHERE total_spent > 1000;` });
    sections.push({ type:'example', title:'INSERT in Action',
      data:[
        { id:1, name:'Alice', email:'alice@email.com',   city:'London', age:30 },
        { id:2, name:'Bob',   email:'bob@email.com',     city:'Paris',  age:25 },
        { id:3, name:'Carlos',email:'carlos@email.com',  city:'Madrid', age:35 },
        { id:4, name:'Diana', email:'diana@email.com',   city:'Berlin', age:28 },
      ],
      sql:"INSERT INTO users (name, email, city, age)\nVALUES ('Eve', 'eve@email.com', 'Paris', 27);\n\nSELECT * FROM users;",
      result:[
        { id:1, name:'Alice', email:'alice@email.com',   city:'London', age:30 },
        { id:2, name:'Bob',   email:'bob@email.com',     city:'Paris',  age:25 },
        { id:3, name:'Carlos',email:'carlos@email.com',  city:'Madrid', age:35 },
        { id:4, name:'Diana', email:'diana@email.com',   city:'Berlin', age:28 },
        { id:5, name:'Eve',   email:'eve@email.com',     city:'Paris',  age:27 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Pro Tips</p>
        <ul class="text-sm mt-2 space-y-1" style="color:var(--text-secondary);">
          <li>• Always specify column names — it's safer and more readable</li>
          <li>• Omitted columns get their <code>DEFAULT</code> value or <code>NULL</code></li>
          <li>• Use <code>INSERT ... SELECT</code> to copy rows between tables</li>
          <li>• Many DBs support <code>RETURNING</code> (PostgreSQL) or <code>OUTPUT</code> (SQL Server) to see inserted data</li>
        </ul>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>INSERT</code> creates new rows. You can add one row, many rows at once, or copy rows from another table. Always specify columns explicitly for clarity.</p>
      </div>` });
  }
  else if (topic.id === 'update') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>UPDATE</code> modifies <strong>existing rows</strong> in a table. You choose which rows to change and what new values to set.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A student moves to a new city. You pull out their file, cross out the old address, and write the new one. <strong>You don't create a new file</strong> — you update the existing one. That's exactly what <code>UPDATE</code> does.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Update a single column for one row:
UPDATE users
SET city = 'Berlin'
WHERE id = 3;

-- Update multiple columns at once:
UPDATE users
SET city = 'Berlin', age = 29
WHERE id = 3;

-- Update all rows (BE CAREFUL!):
UPDATE users
SET status = 'active';

-- Update with a calculation:
UPDATE products
SET price = price * 1.10
WHERE category = 'Electronics';` });
    sections.push({ type:'example', title:'UPDATE in Action',
      data:[
        { id:1, name:'Alice', email:'alice@email.com',   city:'London', age:30 },
        { id:2, name:'Bob',   email:'bob@email.com',     city:'Paris',  age:25 },
        { id:3, name:'Carlos',email:'carlos@email.com',  city:'Madrid', age:35 },
      ],
      sql:"UPDATE users\nSET city = 'Berlin', age = 36\nWHERE id = 3;\n\nSELECT * FROM users;",
      result:[
        { id:1, name:'Alice', email:'alice@email.com',   city:'London', age:30 },
        { id:2, name:'Bob',   email:'bob@email.com',     city:'Paris',  age:25 },
        { id:3, name:'Carlos',email:'carlos@email.com',  city:'Berlin', age:36 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
        <p class="text-sm font-semibold" style="color:var(--red);">⚠️ Warning</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">If you forget the <code>WHERE</code> clause, <strong>all rows</strong> get updated! Always write your <code>WHERE</code> first, then add the <code>SET</code>. Or do a <code>SELECT</code> first to preview which rows match.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>UPDATE</code> changes existing rows. Use <code>WHERE</code> to target specific rows — without it, every row changes. You can update one column or many at once.</p>
      </div>` });
  }
  else if (topic.id === 'delete') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>DELETE</code> removes <strong>existing rows</strong> from a table. It's reversible (in a transaction) — you can undo a mistake.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're cleaning out a filing cabinet. <code>DELETE</code> is like pulling out a specific document, reading it one more time (logging), and then shredding it. If you change your mind before the shredder finishes (within a transaction), you can grab it back.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Delete specific rows (with WHERE):
DELETE FROM users WHERE id = 5;

-- Delete multiple matching rows:
DELETE FROM users WHERE city = 'Inactive';

-- Delete all rows (but logged — slower but reversible in a transaction):
DELETE FROM users;

-- Delete based on another table:
DELETE FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders);` });
    sections.push({ type:'example', title:'DELETE in Action',
      data:[
        { id:1, name:'Alice', email:'alice@email.com',   city:'London', age:30 },
        { id:2, name:'Bob',   email:'bob@email.com',     city:'Paris',  age:25 },
        { id:3, name:'Carlos',email:'carlos@email.com',  city:'Madrid', age:35 },
      ],
      sql:"DELETE FROM users WHERE id = 2;\n\nSELECT * FROM users;",
      result:[
        { id:1, name:'Alice', email:'alice@email.com',  city:'London', age:30 },
        { id:3, name:'Carlos',email:'carlos@email.com', city:'Madrid', age:35 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🗑️ DELETE</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Removes rows one by one. Fires triggers. Logs each row. <strong>Can be rolled back</strong> in a transaction. Slower on large tables.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--accent);">✂️ TRUNCATE</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Removes all rows at once. No triggers. Minimal logging. <strong>Cannot be rolled back</strong> in most DBs. Much faster.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
        <p class="text-sm font-semibold" style="color:var(--red);">⚠️ Warning</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>DELETE</code> without <code>WHERE</code> removes <strong>every row</strong>! Always write <code>WHERE</code> first. Unlike <code>TRUNCATE</code>, <code>DELETE</code> can be rolled back if wrapped in a transaction.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>DELETE</code> removes rows with full logging — it's slower but safer. Always use <code>WHERE</code> to avoid wiping the table. For removing all rows, consider <code>TRUNCATE</code> (faster but less reversible).</p>
      </div>` });
  }
  else if (topic.id === 'truncate') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>TRUNCATE TABLE</code> removes <strong>all rows</strong> from a table instantly. It's like deleting everything but keeping the table structure (columns, constraints) intact.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a whiteboard full of notes. <code>DELETE</code> is like erasing each word one by one with a tissue. <code>TRUNCATE</code> is like wiping the entire board with one swipe of an eraser. The board (table) is still there — it's just clean and empty.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Remove all rows from a table:
TRUNCATE TABLE temp_logs;

-- Some DBs allow restarting auto-increment:
TRUNCATE TABLE temp_logs RESTART IDENTITY;

-- TRUNCATE multiple tables at once:
TRUNCATE TABLE temp_logs, staging_data, cache;

-- Compare: DELETE keeps the auto-increment counter,
-- TRUNCATE resets it:
DELETE FROM users;     -- next INSERT gets id = 11
TRUNCATE TABLE users;  -- next INSERT gets id = 1` });
    sections.push({ type:'example', title:'TRUNCATE vs DELETE',
      data:[
        { id:1, name:'Tmp1', created:'2024-01-01' },
        { id:2, name:'Tmp2', created:'2024-01-02' },
        { id:3, name:'Tmp3', created:'2024-01-03' },
      ],
      sql:"TRUNCATE TABLE temp_data;\n\nSELECT * FROM temp_data;",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ When to TRUNCATE</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Clearing staging tables, resetting test data, emptying log tables. You want the table structure to stay but all data gone — fast.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">❌ When NOT to TRUNCATE</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">When you need row-level triggers, when you need to roll back (some DBs don't allow it), or when you only want to remove some rows.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>TRUNCATE</code> is the <strong>fastest way to empty a table</strong>. It removes all rows, resets auto-increment counters, and uses minimal logging. But it can't be rolled back (in most DBs) and doesn't fire row-level triggers.</p>
      </div>` });
  }
  else if (topic.id === 'count') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>COUNT()</code> returns the <strong>number of rows</strong> that match a condition. It's the simplest way to answer "how many?"</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're a teacher taking attendance. You count: <em>"How many students are here today?"</em> <code>COUNT(*)</code> counts every body in the room. <code>COUNT(email)</code> counts only students who filled in the email field.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Count all rows:
SELECT COUNT(*) FROM users;                    -- 10 users

-- Count non-null values in a column:
SELECT COUNT(email) FROM users;                -- 8 (2 have NULL email)

-- Count distinct values:
SELECT COUNT(DISTINCT city) FROM users;        -- 5 unique cities

-- Count with a condition:
SELECT COUNT(*) FROM users WHERE age > 30;     -- 4 users over 30` });
    sections.push({ type:'example', title:'COUNT in Action',
      data:[
        { id:1, name:'Alice',  city:'London', age:30 },
        { id:2, name:'Bob',    city:'Paris',  age:25 },
        { id:3, name:'Charlie',city:'London', age:35 },
        { id:4, name:'Diana',  city:'Berlin', age:28 },
        { id:5, name:'Eve',    city:'Madrid', age:32 },
        { id:6, name:'Frank',  city:'Rome',   age:40 },
      ],
      sql:'SELECT COUNT(*) AS total,\n  COUNT(DISTINCT city) AS unique_cities\nFROM users\nWHERE age >= 30;',
      result:[
        { total:4, unique_cities:4 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>COUNT(*)</code> counts all rows. <code>COUNT(column)</code> counts non-null values. <code>COUNT(DISTINCT column)</code> counts unique values. Always pairs with <code>GROUP BY</code> for per-group counts.</p>
      </div>` });
  }
  else if (topic.id === 'sum-avg') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>SUM()</code> adds up all values in a column. <code>AVG()</code> computes the average (mean). Both only work with <strong>numeric columns</strong>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're a cashier at the end of the day. <code>SUM()</code> is the <strong>total</strong> in the register — every sale added up. <code>AVG()</code> is the <strong>average sale</strong> — total divided by number of customers.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Total sales:
SELECT SUM(amount) AS total_revenue FROM orders;

-- Average order value:
SELECT AVG(amount) AS avg_order FROM orders;

-- Total per customer:
SELECT user_id, SUM(amount) AS total_spent
FROM orders GROUP BY user_id;

-- Average with condition:
SELECT AVG(amount) FROM orders WHERE qty > 1;` });
    sections.push({ type:'example', title:'SUM & AVG in Action',
      data:[
        { id:1, user_id:1, product:'Widget', amount:29.99, qty:2 },
        { id:2, user_id:2, product:'Gadget', amount:49.99, qty:1 },
        { id:3, user_id:1, product:'Doohickey', amount:14.99, qty:3 },
        { id:4, user_id:3, product:'Widget', amount:29.99, qty:1 },
        { id:5, user_id:2, product:'Thingy', amount:9.99, qty:5 },
      ],
      sql:'SELECT SUM(amount) AS total_revenue,\n  AVG(amount) AS avg_order_value,\n  COUNT(*) AS order_count\nFROM orders\nWHERE qty >= 2;',
      result:[
        { total_revenue:54.97, avg_order_value:18.32, order_count:3 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>SUM()</code> adds up numbers, <code>AVG()</code> finds the mean. Both ignore <code>NULL</code> values. Use with <code>GROUP BY</code> to calculate per-category totals.</p>
      </div>` });
  }
  else if (topic.id === 'min-max') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>MIN()</code> finds the <strong>smallest</strong> value in a column. <code>MAX()</code> finds the <strong>largest</strong>. They work with numbers, text, and dates.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're picking teams for a race. <code>MIN()</code> finds the <strong>youngest</strong> runner. <code>MAX()</code> finds the <strong>oldest</strong>. They scan the whole list and grab the extreme ends.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Earliest and latest order dates:
SELECT MIN(order_date) AS first_order,
       MAX(order_date) AS last_order
FROM orders;

-- Cheapest and most expensive products:
SELECT MIN(price) AS cheapest,
       MAX(price) AS most_expensive
FROM products;

-- Alphabetically first/last name:
SELECT MIN(name) AS first_name,
       MAX(name) AS last_name
FROM users;` });
    sections.push({ type:'example', title:'MIN & MAX in Action',
      data:[
        { id:1, name:'Widget',   price:29.99,  stock:100 },
        { id:2, name:'USB Cable',price:12.50,  stock:250 },
        { id:3, name:'Keyboard', price:149.99, stock:30 },
        { id:4, name:'Mouse Pad',price:9.99,   stock:500 },
        { id:5, name:'Monitor',  price:299.99, stock:15 },
      ],
      sql:"SELECT MIN(price) AS cheapest,\n  MAX(price) AS most_expensive,\n  MIN(name) AS first_alpha,\n  MAX(name) AS last_alpha\nFROM products;",
      result:[
        { cheapest:9.99, most_expensive:299.99, first_alpha:'Keyboard', last_alpha:'Widget' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>MIN()</code> and <code>MAX()</code> find extremes in any data type — numbers, strings (alphabetically), or dates (chronologically).</p>
      </div>` });
  }
  else if (topic.id === 'upper-lower') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>UPPER()</code> converts text to <strong>uppercase</strong>. <code>LOWER()</code> converts to <strong>lowercase</strong>. Neither changes the original data — they return a new transformed value.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're filling out a form that requires ALL CAPS for a passport. You write "alice" — then click a button that converts it to "ALICE". The original text stays lowercase, but the output is uppercase. That's what <code>UPPER()</code> does.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Convert to uppercase:
SELECT UPPER(name) AS name_caps FROM users;

-- Convert to lowercase for case-insensitive comparison:
SELECT * FROM users
WHERE LOWER(email) = LOWER('ALICE@EXAMPLE.COM');

-- Use in UPDATE to normalize data:
UPDATE users SET email = LOWER(email);` });
    sections.push({ type:'example', title:'UPPER & LOWER in Action',
      data:[
        { id:1, name:'Alice Johnson', email:'Alice@Example.Com' },
        { id:2, name:'Bob Smith',     email:'BOB@example.com' },
        { id:3, name:'Charlie Brown', email:'charlie@EXAMPLE.com' },
      ],
      sql:"SELECT name,\n  UPPER(name) AS shouting,\n  LOWER(email) AS normalized_email\nFROM users;",
      result:[
        { name:'Alice Johnson', shouting:'ALICE JOHNSON', normalized_email:'alice@example.com' },
        { name:'Bob Smith',     shouting:'BOB SMITH',     normalized_email:'bob@example.com' },
        { name:'Charlie Brown', shouting:'CHARLIE BROWN', normalized_email:'charlie@example.com' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>UPPER()</code> and <code>LOWER()</code> transform text case. They don't modify the stored data — only the query output. Use <code>LOWER()</code> for case-insensitive comparisons.</p>
      </div>` });
  }
  else if (topic.id === 'length') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LENGTH()</code> returns the <strong>number of characters</strong> in a string. It's useful for validation, formatting, and data analysis.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're checking if a tweet fits in 280 characters. You count every letter, space, and punctuation mark. <code>LENGTH()</code> does that automatic count for any text.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Find how long each name is:
SELECT name, LENGTH(name) AS char_count FROM users;

-- Find unusually short or long entries:
SELECT * FROM products WHERE LENGTH(name) > 20;

-- Validate phone numbers (should be 10 digits):
SELECT * FROM users WHERE LENGTH(phone) <> 10;

-- Combine with other functions:
SELECT UPPER(name), LENGTH(name) FROM users
WHERE LENGTH(name) > 5;` });
    sections.push({ type:'example', title:'LENGTH in Action',
      data:[
        { id:1, name:'Alice',   email:'alice@mail.com' },
        { id:2, name:'Bob',     email:'bob@mail.com' },
        { id:3, name:'Charlie', email:'charlie@mail.com' },
      ],
      sql:"SELECT name,\n  LENGTH(name) AS name_len,\n  LENGTH(email) AS email_len\nFROM users;",
      result:[
        { name:'Alice',   name_len:5, email_len:15 },
        { name:'Bob',     name_len:3, email_len:13 },
        { name:'Charlie', name_len:7, email_len:17 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LENGTH()</code> counts characters in a string. Spaces and punctuation count. Some DBs use <code>LEN()</code> (SQL Server) or <code>CHAR_LENGTH()</code> (MySQL) for multi-byte safety.</p>
      </div>` });
  }
  else if (topic.id === 'trim') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>TRIM()</code> removes <strong>leading and trailing spaces</strong> from text. <code>LTRIM()</code> removes left-side spaces only. <code>RTRIM()</code> removes right-side spaces only.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You receive a package covered in packing tape. <code>TRIM()</code> cuts off ALL the excess tape (both ends). <code>LTRIM()</code> cuts the left end. <code>RTRIM()</code> cuts the right end. Inside is your clean text.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Remove leading and trailing spaces:
SELECT TRIM('  hello world  ') AS cleaned;
-- Result: 'hello world'

-- Remove only leading spaces:
SELECT LTRIM('  hello') AS cleaned;
-- Result: 'hello'

-- Remove only trailing spaces:
SELECT RTRIM('hello  ') AS cleaned;
-- Result: 'hello'

-- Clean up messy data in a table:
UPDATE users SET name = TRIM(name);` });
    sections.push({ type:'example', title:'TRIM in Action',
      data:[
        { id:1, name:'  Alice  ', email:'alice@email.com' },
        { id:2, name:'Bob   ',   email:'bob@email.com' },
        { id:3, name:'   Charlie',email:'charlie@email.com' },
      ],
      sql:"SELECT name,\n  TRIM(name) AS trimmed_name,\n  LENGTH(name) AS before_len,\n  LENGTH(TRIM(name)) AS after_len\nFROM users;",
      result:[
        { name:'  Alice  ', trimmed_name:'Alice',  before_len:9,  after_len:5 },
        { name:'Bob   ',   trimmed_name:'Bob',    before_len:6,  after_len:3 },
        { name:'   Charlie',trimmed_name:'Charlie',before_len:10, after_len:7 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>TRIM()</code> removes whitespace from both ends. Use it in <code>UPDATE</code> statements to clean messy data. Some DBs support <code>TRIM(LEADING/TRAILING 'x' FROM string)</code> to remove specific characters.</p>
      </div>` });
  }
  else if (topic.id === 'substring') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>SUBSTRING()</code> extracts a <strong>portion of a string</strong>. You specify the starting position and how many characters to take.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a long rope and need a 3-foot piece. You measure 2 feet from the left end and cut 3 feet. <code>SUBSTRING('rope', 2, 3)</code> takes 3 characters starting at position 2.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Extract from position 2, take 3 characters:
SELECT SUBSTRING('Hello World', 2, 3);
-- Result: 'ell'

-- From position 1 to end (no length = rest of string):
SELECT SUBSTRING('Hello World', 1);
-- Result: 'Hello World'

-- Extract first 3 characters:
SELECT SUBSTRING(name, 1, 3) AS short_name FROM users;

-- Extract last 4 characters (using LENGTH):
SELECT SUBSTRING(email, LENGTH(email) - 3) AS domain_ext FROM users;` });
    sections.push({ type:'example', title:'SUBSTRING in Action',
      data:[
        { id:1, name:'Alice Johnson',   email:'alice@gmail.com' },
        { id:2, name:'Bob Smith',       email:'bob@yahoo.com' },
        { id:3, name:'Charlie Brown',   email:'charlie@outlook.com' },
      ],
      sql:"SELECT name,\n  SUBSTRING(name, 1, 5) AS first_5_chars,\n  SUBSTRING(email, 1, 5) AS email_start\nFROM users;",
      result:[
        { name:'Alice Johnson', first_5_chars:'Alice', email_start:'alice' },
        { name:'Bob Smith',     first_5_chars:'Bob S', email_start:'bob@y' },
        { name:'Charlie Brown', first_5_chars:'Char',  email_start:'charl' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>SUBSTRING(str, start, length)</code> extracts text from a string. Positions start at 1. Omit length to get everything from start to end. Some DBs call it <code>SUBSTR()</code>.</p>
      </div>` });
  }
  else if (topic.id === 'replace') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>REPLACE()</code> substitutes <strong>all occurrences</strong> of a substring with a new value. It's search-and-replace for SQL.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You wrote "teh" instead of "the" in a document. You hit Ctrl+H (find and replace all): Find "teh" → Replace with "the". <code>REPLACE()</code> does that for your data.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Replace all hyphens with spaces:
SELECT REPLACE(phone, '-', ' ') FROM users;

-- Remove a character (replace with empty string):
SELECT REPLACE(name, ' ', '') AS nospaces FROM users;

-- Fix common misspellings:
UPDATE products SET name = REPLACE(name, 'T-Shirt', 'T-Shirt');
-- Wait, that's the same — be specific:
UPDATE products SET name = REPLACE(name, 'Tshirt', 'T-Shirt');

-- Replace email domain:
UPDATE users SET email = REPLACE(email, '@oldcompany.com', '@newcompany.com');` });
    sections.push({ type:'example', title:'REPLACE in Action',
      data:[
        { id:1, name:'Alice-Smith',   email:'alice@oldco.com',  phone:'555-123-4567' },
        { id:2, name:'Bob-Johnson',   email:'bob@oldco.com',    phone:'555-987-6543' },
        { id:3, name:'Charlie-Brown', email:'charlie@newco.com',phone:'555-555-5555' },
      ],
      sql:"SELECT name,\n  REPLACE(name, '-', ' ') AS name_fixed,\n  REPLACE(email, '@oldco.com', '@newco.com') AS email_updated\nFROM users;",
      result:[
        { name:'Alice-Smith',   name_fixed:'Alice Smith',   email_updated:'alice@newco.com' },
        { name:'Bob-Johnson',   name_fixed:'Bob Johnson',   email_updated:'bob@newco.com' },
        { name:'Charlie-Brown', name_fixed:'Charlie Brown', email_updated:'charlie@newco.com' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>REPLACE(str, from, to)</code> changes every occurrence of <code>from</code> to <code>to</code>. It's case-sensitive. Use it in <code>SELECT</code> to transform output or <code>UPDATE</code> to fix stored data.</p>
      </div>` });
  }
  else if (topic.id === 'concat') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CONCAT()</code> joins multiple strings together end-to-end. It's like gluing pieces of text to form a complete sentence.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have three pieces of paper: "Hello", " ", "World". You tape them together: "Hello World". <code>CONCAT('Hello', ' ', 'World')</code> does the same — it joins values into one string.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Combine first and last name:
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;

-- Build a full address line:
SELECT CONCAT(city, ', ', state, ' ', zip) AS full_address FROM users;

-- Add labels to values:
SELECT CONCAT(name, ' earns $', salary, ' per year') AS description FROM employees;

-- MySQL/PostgreSQL also support || operator:
SELECT name || ' (' || email || ')' AS contact FROM users;` });
    sections.push({ type:'example', title:'CONCAT in Action',
      data:[
        { id:1, name:'Alice',  city:'London', age:30 },
        { id:2, name:'Bob',    city:'Paris',  age:25 },
        { id:3, name:'Charlie',city:'London', age:35 },
      ],
      sql:"SELECT CONCAT(name, ' is ', age, ' years old and lives in ', city) AS profile\nFROM users;",
      result:[
        { profile:'Alice is 30 years old and lives in London' },
        { profile:'Bob is 25 years old and lives in Paris' },
        { profile:'Charlie is 35 years old and lives in London' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CONCAT()</code> joins strings together. It handles <code>NULL</code> gracefully (treats as empty string). Many DBs also support <code>||</code> as a concatenation operator.</p>
      </div>` });
  }
  else if (topic.id === 'coalesce') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>COALESCE()</code> returns the <strong>first non-NULL value</strong> from a list. It's your safety net for missing data.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You ask three friends for directions. Friend A says "I don't know" (NULL). Friend B says "I don't know" (NULL). Friend C says "Turn left." <code>COALESCE(A, B, C)</code> gives you "Turn left" — the first actual answer.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Provide a default for missing values:
SELECT name, COALESCE(phone, 'No phone on file') AS phone FROM users;

-- Fallback chain: nickname → first_name → 'Anonymous':
SELECT COALESCE(nickname, first_name, 'Anonymous') AS display_name FROM users;

-- Prevent NULL in arithmetic:
SELECT price * COALESCE(discount, 0) AS final_price FROM products;

-- COALESCE can take 2+ arguments:
SELECT COALESCE(NULL, NULL, 'default', 'never reached'); -- 'default'` });
    sections.push({ type:'example', title:'COALESCE in Action',
      data:[
        { id:1, name:'Alice',   phone:'555-0100', email:'alice@email.com' },
        { id:2, name:'Bob',     phone:null,       email:'bob@email.com' },
        { id:3, name:'Charlie', phone:null,       email:null },
      ],
      sql:"SELECT name,\n  COALESCE(phone, email, 'No contact info') AS contact\nFROM users;",
      result:[
        { name:'Alice',   contact:'555-0100' },
        { name:'Bob',     contact:'bob@email.com' },
        { name:'Charlie', contact:'No contact info' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>COALESCE()</code> walks through a list of values and returns the first one that isn't <code>NULL</code>. Perfect for providing defaults, building display strings, and preventing NULL errors in calculations.</p>
      </div>` });
  }
  else if (topic.id === 'nullif') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>NULLIF()</code> compares two values. If they're <strong>equal</strong>, it returns <code>NULL</code>. If they're <strong>different</strong>, it returns the first value.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A teacher has two answer sheets — the student's answer and the correct answer. If they <strong>match</strong>, the teacher says nothing (NULL). If they <strong>differ</strong>, the teacher returns the student's wrong answer.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Divide by zero protection:
SELECT product, amount / NULLIF(qty, 0) AS per_unit
FROM orders;
-- If qty is 0, NULLIF turns it into NULL, preventing divide-by-zero

-- Find records where two columns differ:
SELECT * FROM users
WHERE NULLIF(shipping_address, billing_address) IS NOT NULL;

-- Replace a specific value with NULL for analysis:
SELECT NULLIF(status, 'Unknown') AS clean_status FROM orders;` });
    sections.push({ type:'example', title:'NULLIF in Action',
      data:[
        { id:1, product:'Widget', amount:29.99, qty:2 },
        { id:2, product:'Gadget', amount:49.99, qty:0 },
        { id:3, product:'Doohickey', amount:14.99, qty:1 },
      ],
      sql:"SELECT product,\n  amount,\n  qty,\n  amount / NULLIF(qty, 0) AS unit_price\nFROM orders;",
      result:[
        { product:'Widget',   amount:29.99, qty:2, unit_price:14.995 },
        { product:'Gadget',   amount:49.99, qty:0, unit_price:null },
        { product:'Doohickey',amount:14.99, qty:1, unit_price:14.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>NULLIF(a, b)</code> returns NULL if a = b, otherwise returns a. It's the <strong>inverse</strong> of <code>COALESCE</code>. Commonly used to prevent division by zero and to flag data inconsistencies.</p>
      </div>` });
  }
  else if (topic.id === 'cast-convert') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CAST()</code> and <code>CONVERT()</code> change a value from one <strong>data type</strong> to another. They let you treat text as numbers, numbers as text, and so on.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a $5 bill (number) but the vending machine only takes coins. You go to the change machine — it converts your bill into 5 loonies. Same value, different format. That's what <code>CAST()</code> does.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Convert text to number:
SELECT CAST('123' AS INT) + 1;
-- Result: 124

-- Convert number to text:
SELECT CAST(price AS VARCHAR) FROM products;

-- Standard SQL syntax (CAST):
SELECT CAST(order_date AS DATE) FROM orders;

-- SQL Server / MySQL alternative (CONVERT):
SELECT CONVERT(VARCHAR, price) FROM products;

-- Date formatting (SQL Server):
SELECT CONVERT(VARCHAR, order_date, 103) AS uk_format FROM orders;` });
    sections.push({ type:'example', title:'CAST in Action',
      data:[
        { id:1, name:'Widget',   price:'29.99',  stock:'100' },
        { id:2, name:'USB Cable',price:'12.50',  stock:'250' },
      ],
      sql:"SELECT name,\n  CAST(price AS DECIMAL) * CAST(stock AS INT) AS inventory_value\nFROM products;",
      result:[
        { name:'Widget',   inventory_value:2999.00 },
        { name:'USB Cable',inventory_value:3125.00 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CAST(expr AS type)</code> changes data types. Use it when a column's type doesn't match what you need (e.g., text stored as VARCHAR that you need to sum). <code>CONVERT()</code> is a DB-specific alternative with extra formatting options.</p>
      </div>` });
  }
  else if (topic.id === 'round-ceil-floor') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ROUND()</code> rounds to a specified decimal place. <code>CEIL()</code> rounds <strong>up</strong> to the nearest integer. <code>FLOOR()</code> rounds <strong>down</strong> to the nearest integer.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A child is 4.7 years old. <code>ROUND(4.7)</code> → 5 (standard rounding). <code>CEIL(4.7)</code> → 5 (always up). <code>FLOOR(4.7)</code> → 4 (always down). Same number, different rounding rules.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Round to 2 decimal places:
SELECT ROUND(price, 2) FROM products;    -- 19.995 → 20.00

-- Round to nearest integer (no second arg):
SELECT ROUND(AVG(age)) FROM users;       -- 32.7 → 33

-- CEIL always rounds up:
SELECT CEIL(4.1), CEIL(4.9);             -- 5, 5

-- FLOOR always rounds down:
SELECT FLOOR(4.1), FLOOR(4.9);           -- 4, 4

-- Round to negative decimals (tens):
SELECT ROUND(1234, -2);                  -- 1200` });
    sections.push({ type:'example', title:'Rounding Functions in Action',
      data:[
        { id:1, name:'Widget',   price:29.99,  rating:4.2 },
        { id:2, name:'Gadget',   price:49.99,  rating:3.8 },
        { id:3, name:'Doohickey',price:14.99,  rating:4.7 },
        { id:4, name:'Thingy',   price:9.99,   rating:3.2 },
        { id:5, name:'Whatsit',  price:19.99,  rating:4.5 },
      ],
      sql:"SELECT name,\n  ROUND(AVG(price), 2) AS avg_price,\n  CEIL(AVG(rating)) AS rating_ceil,\n  FLOOR(AVG(rating)) AS rating_floor\nFROM products;",
      result:[
        { avg_price:24.99, rating_ceil:5, rating_floor:3 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ROUND(x, d)</code> rounds x to d decimals. <code>CEIL(x)</code> rounds up to the next whole number. <code>FLOOR(x)</code> rounds down. Use CEIL/FLOOR for precise control over rounding direction.</p>
      </div>` });
  }
  else if (topic.id === 'abs') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ABS()</code> returns the <strong>absolute value</strong> of a number — the positive distance from zero. Negative numbers become positive; positive numbers stay the same.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You owe $50 and you have $50. Both are "50 dollars away from zero." Debt (-50) and cash (+50) have the same <strong>absolute value</strong>. <code>ABS()</code> tells you the distance, ignoring direction.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Get absolute value:
SELECT ABS(-42), ABS(42);          -- 42, 42

-- Calculate absolute difference:
SELECT ABS(price - 50) AS diff_from_50 FROM products;

-- Find closest values to a target:
SELECT name, ABS(price - 100) AS price_gap
FROM products
ORDER BY ABS(price - 100);` });
    sections.push({ type:'example', title:'ABS in Action',
      data:[
        { id:1, name:'Alice',   salary:5000,  expense:5200 },
        { id:2, name:'Bob',     salary:4800,  expense:4500 },
        { id:3, name:'Charlie', salary:5100,  expense:5100 },
      ],
      sql:"SELECT name,\n  salary - expense AS net,\n  ABS(salary - expense) AS gap\nFROM users;",
      result:[
        { name:'Alice',   net:-200, gap:200 },
        { name:'Bob',     net:300,  gap:300 },
        { name:'Charlie', net:0,    gap:0 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ABS(x)</code> turns negative numbers into positive. It's the <strong>distance from zero</strong>. Use it to calculate differences, gaps, and errors where direction doesn't matter.</p>
      </div>` });
  }
  else if (topic.id === 'date-functions') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">SQL provides many functions to <strong>extract, manipulate, and calculate</strong> dates and times. They vary by database, but the concepts are universal.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a calendar. You can ask: <em>"What day of the week is June 1st?"</em> (extract). <em>"What's 7 days from now?"</em> (add). <em>"How many days until Christmas?"</em> (difference). Date functions answer all these.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Get current date and time:
SELECT NOW(), CURRENT_DATE, CURRENT_TIME;

-- Extract parts of a date:
SELECT EXTRACT(YEAR FROM order_date) AS year,
       EXTRACT(MONTH FROM order_date) AS month
FROM orders;

-- Or use dedicated functions:
SELECT YEAR(order_date), MONTH(order_date), DAY(order_date) FROM orders;

-- Add / subtract intervals:
SELECT order_date + INTERVAL '7 days' AS one_week_later FROM orders;
SELECT order_date - INTERVAL '1 month' FROM orders;

-- Date difference:
SELECT DATEDIFF('2024-12-25', '2024-06-01') AS days_until_christmas;` });
    sections.push({ type:'example', title:'Date Functions in Action',
      data:[
        { id:1, product:'Widget',   order_date:'2024-01-15', amount:29.99 },
        { id:2, product:'Gadget',   order_date:'2024-03-22', amount:49.99 },
        { id:3, product:'Doohickey',order_date:'2024-06-10', amount:14.99 },
        { id:4, product:'Thingy',   order_date:'2024-09-05', amount:9.99 },
        { id:5, product:'Whatsit',  order_date:'2024-12-20', amount:19.99 },
      ],
      sql:"SELECT product,\n  order_date,\n  EXTRACT(MONTH FROM order_date) AS month,\n  EXTRACT(YEAR FROM order_date) AS year\nFROM orders\nWHERE EXTRACT(MONTH FROM order_date) <= 6\nORDER BY order_date;",
      result:[
        { product:'Widget',   order_date:'2024-01-15', month:1, year:2024 },
        { product:'Gadget',   order_date:'2024-03-22', month:3, year:2024 },
        { product:'Doohickey',order_date:'2024-06-10', month:6, year:2024 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 DB Differences</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>EXTRACT()</code> is standard SQL. MySQL also has <code>YEAR()</code>, <code>MONTH()</code> shortcuts. PostgreSQL uses <code>INTERVAL '1 day'</code>. SQL Server uses <code>DATEADD()</code>, <code>DATEDIFF()</code>. Always check your DB docs!</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Date functions let you extract parts (year/month/day), add/subtract intervals, and calculate differences. Syntax varies by database — <code>EXTRACT()</code> is the most portable option.</p>
      </div>` });
  }
  else if (topic.id === 'group-by') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>GROUP BY</code> groups rows that share the same values into <strong>summary rows</strong>. It's the key to answering "per X" questions — per department, per city, per month.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're sorting laundry. You put all white socks in one pile, all dark shirts in another. <code>GROUP BY color</code> would tell you: "Whites: 12 items, Darks: 8 items, Colors: 5 items." It collapses rows by a common attribute.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Count employees per department:
SELECT department, COUNT(*) AS headcount
FROM employees
GROUP BY department;

-- Average salary per department:
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

-- Group by multiple columns:
SELECT city, department, COUNT(*) AS count
FROM employees
GROUP BY city, department
ORDER BY city, department;` });
    sections.push({ type:'example', title:'GROUP BY in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000,  city:'London' },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000,  city:'Paris' },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000, city:'London' },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000,  city:'Berlin' },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000,  city:'Madrid' },
        { id:6, name:'Frank',   dept:'Engineering', salary:38000,  city:'Rome' },
      ],
      sql:"SELECT dept, COUNT(*) AS count, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY dept\nORDER BY avg_salary DESC;",
      result:[
        { dept:'Engineering', count:3, avg_salary:84333 },
        { dept:'Marketing',   count:1, avg_salary:72000 },
        { dept:'Sales',       count:2, avg_salary:48500 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>GROUP BY</code> turns many rows into summary rows — one per group. Every column in <code>SELECT</code> must be either in <code>GROUP BY</code> or wrapped in an aggregate function. It runs before <code>ORDER BY</code> but after <code>WHERE</code>.</p>
      </div>` });
  }
  else if (topic.id === 'having') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>HAVING</code> filters groups <strong>after</strong> aggregation. It's like <code>WHERE</code> — but <code>WHERE</code> filters rows <strong>before</strong> grouping, while <code>HAVING</code> filters <strong>after</strong>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're sorting candy into jars by color (GROUP BY). <code>WHERE</code> is like removing all green candies <strong>before</strong> sorting — they never go in any jar. <code>HAVING</code> is like counting each jar and then saying: "Only keep jars with more than 10 candies."</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- WHERE filters rows before grouping:
SELECT dept, COUNT(*) AS count
FROM employees
WHERE salary > 50000     -- exclude low salaries first
GROUP BY dept;

-- HAVING filters groups after grouping:
SELECT dept, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept
HAVING AVG(salary) > 60000;   -- only depts with avg > 60k

-- WHERE + HAVING together:
SELECT dept, COUNT(*) AS count, AVG(salary) AS avg_sal
FROM employees
WHERE salary > 30000
GROUP BY dept
HAVING COUNT(*) > 1;` });
    sections.push({ type:'example', title:'HAVING in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
      ],
      sql:"SELECT dept, COUNT(*) AS emp_count, AVG(salary) AS avg_sal\nFROM employees\nGROUP BY dept\nHAVING AVG(salary) > 60000\nORDER BY avg_sal DESC;",
      result:[
        { dept:'Engineering', emp_count:2, avg_sal:107500 },
        { dept:'Marketing',   emp_count:1, avg_sal:72000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>WHERE</code> filters rows <strong>before</strong> grouping. <code>HAVING</code> filters groups <strong>after</strong> aggregation. You can use both: <code>WHERE</code> first, then <code>GROUP BY</code>, then <code>HAVING</code>.</p>
      </div>` });
  }
  else if (topic.id === 'grouping-sets') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>GROUPING SETS</code> lets you define <strong>multiple groupings</strong> in a single query. Instead of running separate queries for each grouping level, you get all results at once.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You need three reports: (1) sales per product, (2) sales per region, (3) total sales overall. Normally that's three queries. <code>GROUPING SETS</code> is like a 3-in-1 printer — one machine, three reports.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`SELECT product, region, SUM(amount) AS total
FROM sales
GROUP BY GROUPING SETS (
  (product),       -- subtotal per product
  (region),        -- subtotal per region
  ()               -- grand total
);

-- Same as running these three queries:
-- SELECT product, NULL, SUM(amount) FROM sales GROUP BY product;
-- SELECT NULL, region, SUM(amount) FROM sales GROUP BY region;
-- SELECT NULL, NULL, SUM(amount) FROM sales;` });
    sections.push({ type:'example', title:'GROUPING SETS in Action',
      data:[
        { product:'Widget',   region:'North', amount:100 },
        { product:'Widget',   region:'South', amount:150 },
        { product:'Gadget',   region:'North', amount:200 },
        { product:'Gadget',   region:'South', amount:250 },
        { product:'Doohickey',region:'North', amount:300 },
      ],
      sql:"SELECT product, region, SUM(amount) AS total\nFROM sales\nGROUP BY GROUPING SETS (\n  (product),\n  (region),\n  ()\n)\nORDER BY product, region;",
      result:[
        { product:'Doohickey', region:null, total:300 },
        { product:'Gadget',    region:null, total:450 },
        { product:'Widget',    region:null, total:250 },
        { product:null,        region:'North', total:600 },
        { product:null,        region:'South', total:400 },
        { product:null,        region:null,  total:1000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>GROUPING SETS</code> lets you specify exactly which subtotals you want in one query. Each set is a list of columns to group by. Use <code>()</code> for the grand total. <code>NULL</code> appears in columns that aren't part of that grouping.</p>
      </div>` });
  }
  else if (topic.id === 'rollup') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ROLLUP</code> is a shortcut for <strong>hierarchical subtotals</strong>. It adds subtotal rows at each level of the grouping hierarchy, ending with a grand total.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A yearly sales report: you want totals per month, subtotals per quarter, and a grand total for the year. <code>ROLLUP</code> is like a toggling magnifying glass — zoom in (month), zoom out (quarter), zoom all the way out (year).</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ROLLUP adds subtotals for each level:
SELECT year, quarter, SUM(revenue) AS total
FROM sales
GROUP BY ROLLUP (year, quarter);

-- Same as GROUPING SETS:
-- (year, quarter), (year), ()
-- But cleaner to write and read

-- Partial ROLLUP:
SELECT year, quarter, month, SUM(revenue)
FROM sales
GROUP BY year, ROLLUP (quarter, month);` });
    sections.push({ type:'example', title:'ROLLUP in Action',
      data:[
        { year:2024, quarter:'Q1', revenue:50000 },
        { year:2024, quarter:'Q1', revenue:60000 },
        { year:2024, quarter:'Q2', revenue:70000 },
        { year:2024, quarter:'Q2', revenue:55000 },
        { year:2025, quarter:'Q1', revenue:80000 },
        { year:2025, quarter:'Q1', revenue:75000 },
      ],
      sql:"SELECT year, quarter, SUM(revenue) AS total\nFROM sales\nGROUP BY ROLLUP (year, quarter)\nORDER BY year, quarter;",
      result:[
        { year:2024, quarter:'Q1', total:110000 },
        { year:2024, quarter:'Q2', total:125000 },
        { year:2024, quarter:null, total:235000 },
        { year:2025, quarter:'Q1', total:155000 },
        { year:2025, quarter:null, total:155000 },
        { year:null, quarter:null, total:390000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ROLLUP</code> creates a hierarchy of subtotals: group by all columns → group by all but last → ... → grand total. Perfect for reports that need drill-down summaries (year → quarter → month).</p>
      </div>` });
  }
  else if (topic.id === 'cube') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CUBE</code> generates subtotals for <strong>every possible combination</strong> of the grouping columns. If ROLLUP is a hierarchy, CUBE is all combinations.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A Rubik's Cube has 3 dimensions. You can look at any face: front (color), top (material), side (size). <code>CUBE</code> gives you every possible view: by color, by material, by size, by color+material, by color+size, by material+size, and the grand total.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- CUBE generates all combinations:
SELECT product, region, SUM(amount) AS total
FROM sales
GROUP BY CUBE (product, region);

-- Same as GROUPING SETS:
-- (product, region), (product), (region), ()
-- All 2^2 = 4 combinations

-- With 3 columns, CUBE creates 2^3 = 8 groupings:
SELECT year, quarter, product, SUM(revenue)
FROM sales
GROUP BY CUBE (year, quarter, product);` });
    sections.push({ type:'example', title:'CUBE in Action',
      data:[
        { product:'Widget',   region:'North', amount:100 },
        { product:'Widget',   region:'South', amount:150 },
        { product:'Gadget',   region:'North', amount:200 },
        { product:'Gadget',   region:'South', amount:250 },
      ],
      sql:"SELECT product, region, SUM(amount) AS total\nFROM sales\nGROUP BY CUBE (product, region)\nORDER BY product, region;",
      result:[
        { product:'Gadget', region:'North', total:200 },
        { product:'Gadget', region:'South', total:250 },
        { product:'Gadget', region:null,    total:450 },
        { product:'Widget', region:'North', total:100 },
        { product:'Widget', region:'South', total:150 },
        { product:'Widget', region:null,    total:250 },
        { product:null,     region:'North', total:300 },
        { product:null,     region:'South', total:400 },
        { product:null,     region:null,    total:700 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CUBE</code> generates subtotals for <strong>all combinations</strong> of grouping columns (2^n groupings). Use it for multi-dimensional analysis. <code>ROLLUP</code> is a subset of <code>CUBE</code> — use CUBE when you need every permutation.</p>
      </div>` });
  }
  else if (topic.id === 'inner-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>INNER JOIN</code> returns only rows where there's a <strong>match in both tables</strong>. If a user has no orders, they don't appear. If an order has no user, it doesn't appear.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're arranging a <strong>buddy system</strong> between two classrooms. Every student needs a partner from the other class. If a student has no partner, they sit out. <code>INNER JOIN</code> pairs only students who have a matching buddy.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Only users who have placed orders:
SELECT users.name, orders.amount, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Only matching rows on both sides:
-- Alice has orders → shows up
-- Bob has no orders → excluded
-- Order #3 has user_id=99 → excluded (no such user)` });
    sections.push({ type:'example', title:'INNER JOIN in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      sql:"SELECT users.name, orders.product, orders.amount\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nORDER BY users.name;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      rightTable:[
        { id:1, user_id:1, product:'Widget',    amount:29.99 },
        { id:2, user_id:3, product:'Gadget',    amount:49.99 },
        { id:3, user_id:99,product:'Doohickey', amount:14.99 },
      ],
      result:[
        { name:'Alice',   product:'Widget',  amount:29.99 },
        { name:'Charlie', product:'Gadget',  amount:49.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>INNER JOIN</code> keeps only rows with matches on <strong>both</strong> sides. If a row has zero matches, it disappears. It's the most common join type — use it when you only care about related data.</p>
      </div>` });
  }
  else if (topic.id === 'left-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LEFT JOIN</code> returns <strong>all rows from the left table</strong>, plus any matches from the right. Unmatched right-side columns become <code>NULL</code>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're taking attendance in a class. Every student on the <strong>roster</strong> (left table) is listed. If a student is present today (right table), you write their grade next to their name. If absent, you write "N/A". Everyone on the roster shows up.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- All users, with order info if available:
SELECT users.name, orders.product, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Bob has no orders → product and amount are NULL
-- Alice has orders → shows her order details
-- Every user appears at least once` });
    sections.push({ type:'example', title:'LEFT JOIN in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      sql:"SELECT users.name, orders.product, orders.amount\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id\nORDER BY users.name;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      rightTable:[
        { id:1, user_id:1, product:'Widget',    amount:29.99 },
        { id:2, user_id:3, product:'Gadget',    amount:49.99 },
      ],
      result:[
        { name:'Alice',   product:'Widget',  amount:29.99 },
        { name:'Bob',     product:null,      amount:null },
        { name:'Charlie', product:'Gadget',  amount:49.99 },
        { name:'Diana',   product:null,      amount:null },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LEFT JOIN</code> preserves all rows from the left table. Right-table columns are <code>NULL</code> where no match exists. Use it when you need a complete list from the left, with optional data from the right.</p>
      </div>` });
  }
  else if (topic.id === 'right-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>RIGHT JOIN</code> is the mirror of <code>LEFT JOIN</code> — it returns <strong>all rows from the right table</strong>, plus matches from the left. Unmatched left-side columns become <code>NULL</code>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Same attendance scenario, but now the <strong>grade sheet</strong> (right table) is the master list. Every grade is shown. If a student has no attendance record, their name shows as "Unknown."</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- All orders, with user info if available:
SELECT users.name, orders.product, orders.amount
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- Order #3 has user_id=99 (no such user) → name is NULL
-- Every order appears, even without a matching user

-- Most DBs rewrite RIGHT JOIN as LEFT JOIN with table order swapped` });
    sections.push({ type:'example', title:'RIGHT JOIN in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' },
      ],
      sql:"SELECT users.name, orders.product, orders.amount\nFROM users\nRIGHT JOIN orders ON users.id = orders.user_id\nORDER BY orders.id;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' },
      ],
      rightTable:[
        { id:1, user_id:1, product:'Widget',    amount:29.99 },
        { id:2, user_id:2, product:'Gadget',    amount:49.99 },
        { id:3, user_id:99,product:'Doohickey', amount:14.99 },
      ],
      result:[
        { name:'Alice',   product:'Widget',    amount:29.99 },
        { name:'Bob',     product:'Gadget',    amount:49.99 },
        { name:null,      product:'Doohickey', amount:14.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>RIGHT JOIN</code> is the opposite of <code>LEFT JOIN</code> — it keeps all right-table rows. Many developers avoid it and just swap table order with <code>LEFT JOIN</code>. Use whichever is more readable for your query.</p>
      </div>` });
  }
  else if (topic.id === 'full-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>FULL OUTER JOIN</code> returns <strong>all rows from both tables</strong>. Where matches exist, they're combined. Unmatched rows on either side get <code>NULL</code> for the other table's columns.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're combining two contact lists. Everyone from List A is included. Everyone from List B is included. If someone is on both lists, you see one row with all info combined. If they're only on List A, the List B columns are blank — and vice versa.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Every user and every order:
SELECT users.name, orders.product, orders.amount
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;

-- Users without orders → product/amount NULL
-- Orders without users → name NULL
-- Matched rows → combined

-- Not supported in MySQL (use UNION of LEFT + RIGHT JOIN instead)` });
    sections.push({ type:'example', title:'FULL OUTER JOIN in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' },
      ],
      sql:"SELECT users.name, orders.product, orders.amount\nFROM users\nFULL OUTER JOIN orders ON users.id = orders.user_id\nORDER BY users.name;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' },
      ],
      rightTable:[
        { id:1, user_id:1, product:'Widget', amount:29.99 },
        { id:2, user_id:99,product:'Gadget', amount:49.99 },
      ],
      result:[
        { name:'Alice', product:'Widget', amount:29.99 },
        { name:'Bob',   product:null,     amount:null },
        { name:null,    product:'Gadget', amount:49.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>FULL OUTER JOIN</code> = all left + all right. It's like <code>LEFT JOIN</code> and <code>RIGHT JOIN</code> combined. Use it when you need every record from both tables, matched where possible.</p>
      </div>` });
  }
  else if (topic.id === 'cross-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CROSS JOIN</code> creates a <strong>Cartesian product</strong> — every row from the left table paired with every row from the right. No <code>ON</code> condition needed.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have 3 hats and 4 shirts. How many outfits? 3 × 4 = 12. Every hat with every shirt. <code>CROSS JOIN</code> does the same — pairs every row in table A with every row in table B.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Every possible user-product combination:
SELECT users.name, products.name AS product
FROM users
CROSS JOIN products;

-- 4 users × 5 products = 20 rows
-- No ON clause needed (and can't have one)

-- Implicit cross join (old syntax, same result):
SELECT * FROM users, products;` });
    sections.push({ type:'example', title:'CROSS JOIN in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' },
      ],
      sql:"SELECT users.name, sizes.size\nFROM users\nCROSS JOIN (VALUES ('S'), ('M'), ('L')) AS sizes(size)\nORDER BY users.name, sizes.size;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' },
      ],
      rightTable:[
        { size:'S' }, { size:'M' }, { size:'L' },
      ],
      result:[
        { name:'Alice', size:'S' },
        { name:'Alice', size:'M' },
        { name:'Alice', size:'L' },
        { name:'Bob',   size:'S' },
        { name:'Bob',   size:'M' },
        { name:'Bob',   size:'L' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CROSS JOIN</code> creates every possible row pair (Cartesian product). Result size = rows_in_A × rows_in_B. Use it for generating combinations, test data, or lookup matrices. Be careful — large tables can produce billions of rows!</p>
      </div>` });
  }
  else if (topic.id === 'natural-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>NATURAL JOIN</code> automatically joins two tables by matching columns with the <strong>same name</strong>. You don't write <code>ON</code> — SQL figures out the join condition.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Two friends both have a list of people with "Name" and "Phone" columns. You say: "Match them up by 'Name'." <code>NATURAL JOIN</code> finds all shared column names and joins on them automatically.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Both tables have a 'city' column → auto-joined:
SELECT users.name, stores.name AS store_name
FROM users
NATURAL JOIN stores;
-- Same as: users.city = stores.city

-- CAUTION: if both tables also both have 'id',
-- it joins on id too, which is usually wrong!

-- Better to be explicit with INNER JOIN:
SELECT users.name, stores.name
FROM users
INNER JOIN stores ON users.city = stores.city;` });
    sections.push({ type:'example', title:'NATURAL JOIN in Action',
      data:[
        { id:1, name:'Alice', city:'London' },
        { id:2, name:'Bob',   city:'Paris' },
        { id:3, name:'Charlie', city:'Berlin' },
      ],
      sql:"SELECT users.name, stores.store_name\nFROM users\nNATURAL JOIN stores\nORDER BY users.name;",
      leftTable:[
        { id:1, name:'Alice', city:'London' },
        { id:2, name:'Bob',   city:'Paris' },
        { id:3, name:'Charlie', city:'Berlin' },
      ],
      rightTable:[
        { id:1, store_name:'London Store', city:'London' },
        { id:2, store_name:'Paris Shop',   city:'Paris' },
        { id:3, store_name:'Berlin Boutique', city:'Berlin' },
        { id:4, store_name:'Tokyo Market', city:'Tokyo' },
      ],
      result:[
        { name:'Alice',   store_name:'London Store' },
        { name:'Bob',     store_name:'Paris Shop' },
        { name:'Charlie', store_name:'Berlin Boutique' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Warning</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>NATURAL JOIN</code> is convenient but <strong>dangerous</strong>. If both tables accidentally share a column like <code>id</code> or <code>status</code>, it silently joins on those too — often giving wrong results. Prefer explicit <code>INNER JOIN ... ON</code> for production code.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>NATURAL JOIN</code> joins on all columns with matching names. It's concise but risky — one extra matching column can silently corrupt results. Use it only for quick ad-hoc queries with well-known schemas.</p>
      </div>` });
  }
  else if (topic.id === 'self-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>self-join</strong> joins a table with <strong>itself</strong>. You use table aliases to treat the same table as two different copies. Useful for hierarchies and comparisons.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a list of employees and their managers (both stored in the same table). You need to find each employee's manager's name. You look at the same list twice: once for the employee, once for the manager. That's a self-join.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Find each employee and their manager:
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- e and m are aliases for the same table
-- e = employee view, m = manager view
-- LEFT JOIN so employees without managers (CEO) still appear

-- Another use: find duplicate emails:
SELECT a.name, a.email
FROM users a
INNER JOIN users b ON a.email = b.email AND a.id <> b.id;` });
    sections.push({ type:'example', title:'Self-Join in Action',
      data:[
        { id:1, name:'Alice',   manager_id:null },
        { id:2, name:'Bob',     manager_id:1 },
        { id:3, name:'Charlie', manager_id:1 },
        { id:4, name:'Diana',   manager_id:2 },
        { id:5, name:'Eve',     manager_id:2 },
      ],
      sql:"SELECT e.name AS employee,\n  COALESCE(m.name, 'CEO') AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id\nORDER BY e.name;",
      result:[
        { employee:'Alice',   manager:'CEO' },
        { employee:'Bob',     manager:'Alice' },
        { employee:'Charlie', manager:'Alice' },
        { employee:'Diana',   manager:'Bob' },
        { employee:'Eve',     manager:'Bob' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>self-join</strong> joins a table to itself using aliases. Common uses: employee-manager hierarchies, finding duplicates, comparing rows within the same table (e.g., products with similar prices).</p>
      </div>` });
  }
  else if (topic.id === 'non-equi-join') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>non-equi join</strong> uses a condition <strong>other than equality</strong> (<code>=</code>). You can use <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>BETWEEN</code>, or any boolean expression.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a list of students and a list of grade thresholds (A ≥ 90, B ≥ 80, etc.). You want to assign each student a grade. No exact match — you find where the student's score <strong>falls within</strong> a range. That's a non-equi join.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Match products to their price tier:
SELECT p.name, p.price, t.tier_name
FROM products p
INNER JOIN price_tiers t
  ON p.price BETWEEN t.min_price AND t.max_price;

-- Find employees who earn more than their manager:
SELECT e.name AS employee, e.salary,
       m.name AS manager, m.salary AS mgr_salary
FROM employees e
INNER JOIN employees m ON e.manager_id = m.id
  AND e.salary > m.salary;

-- Date range join:
SELECT o.order_id, s.shipping_method
FROM orders o
INNER JOIN shipping_rules s
  ON o.order_date BETWEEN s.effective_from AND s.effective_to;` });
    sections.push({ type:'example', title:'Non-Equi Join in Action',
      data:[
        { id:1, name:'Widget',   price:29.99 },
        { id:2, name:'Gadget',   price:49.99 },
        { id:3, name:'Doohickey',price:14.99 },
        { id:4, name:'Premium Widget', price:149.99 },
      ],
      sql:"SELECT p.name, p.price, t.tier\nFROM products p\nINNER JOIN (\n  VALUES ('Budget', 0, 20),\n         ('Standard', 20, 100),\n         ('Premium', 100, 1000)\n) AS t(tier, min_p, max_p)\n  ON p.price BETWEEN t.min_p AND t.max_p\nORDER BY p.price;",
      result:[
        { name:'Doohickey',      price:14.99,  tier:'Budget' },
        { name:'Widget',         price:29.99,  tier:'Standard' },
        { name:'Gadget',         price:49.99,  tier:'Standard' },
        { name:'Premium Widget', price:149.99, tier:'Premium' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>non-equi join</strong> uses any comparison operator (<code>&gt;</code>, <code>&lt;</code>, <code>BETWEEN</code>, <code>&lt;&gt;</code>) instead of <code>=</code>. Use it for range matching, tier assignment, date windows, and any relationship that isn't exact equality.</p>
      </div>` });
  }
  else if (topic.id === 'union') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>UNION</code> combines results from two or more <code>SELECT</code> queries into one result set. <code>UNION</code> removes duplicates; <code>UNION ALL</code> keeps everything.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have two guest lists — one for Friday's party and one for Saturday's. <code>UNION</code> combines them into one master list. If "Alice" is on both lists, <code>UNION</code> writes her name once. <code>UNION ALL</code> writes her twice (once for each party).</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- UNION (removes duplicates):
SELECT name FROM current_employees
UNION
SELECT name FROM former_employees;
-- Alice shows once even if she appears in both

-- UNION ALL (keeps duplicates — faster!):
SELECT name FROM current_employees
UNION ALL
SELECT name FROM former_employees;
-- Alice shows twice if in both tables

-- Rules: same number of columns, compatible data types
-- ORDER BY goes at the very end` });
    sections.push({ type:'example', title:'UNION vs UNION ALL',
      data:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      sql:"SELECT name FROM current_employees\nUNION\nSELECT name FROM former_employees\nORDER BY name;",
      leftTable:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      rightTable:[
        { name:'Alice' }, { name:'Diana' }, { name:'Eve' },
      ],
      result:[
        { name:'Alice' },
        { name:'Bob' },
        { name:'Charlie' },
        { name:'Diana' },
        { name:'Eve' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>UNION</code> stacks query results vertically. Use <code>UNION</code> when you want unique rows across all queries. Use <code>UNION ALL</code> when duplicates are fine (it's faster since no dedup step). Both queries must have the same column count and compatible types.</p>
      </div>` });
  }
  else if (topic.id === 'intersect') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>INTERSECT</code> returns only rows that appear in <strong>both</strong> result sets. Think of it as "find what's common."</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have two lists: "Students who passed Math" and "Students who passed Science." <code>INTERSECT</code> tells you who passed <strong>both</strong> — the common students. It's the overlap in a Venn diagram.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Employees who are in BOTH tables:
SELECT name FROM current_employees
INTERSECT
SELECT name FROM former_employees;
-- Alice worked here, left, and came back → shows up

-- Can chain multiple INTERSECTs:
SELECT product_id FROM orders_2023
INTERSECT
SELECT product_id FROM orders_2024
INTERSECT
SELECT product_id FROM orders_2025;
-- Products ordered every year` });
    sections.push({ type:'example', title:'INTERSECT in Action',
      data:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      sql:"SELECT name FROM current_employees\nINTERSECT\nSELECT name FROM former_employees\nORDER BY name;",
      leftTable:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      rightTable:[
        { name:'Alice' }, { name:'Diana' }, { name:'Eve' },
      ],
      result:[
        { name:'Alice' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>INTERSECT</code> returns rows common to all queries. It's the SQL way to find overlaps. Not supported in MySQL — use <code>IN</code> with a subquery instead.</p>
      </div>` });
  }
  else if (topic.id === 'except-minus') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>EXCEPT</code> (or <code>MINUS</code> in Oracle) returns rows from the <strong>first</strong> query that are <strong>not</strong> in the <strong>second</strong> query. It's subtraction for result sets.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have all your friends' birthdays (List A) and the birthdays you've already bought gifts for (List B). <code>EXCEPT</code> tells you who still needs a gift — friends in List A but not in List B.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Current employees who were NEVER former employees:
SELECT name FROM current_employees
EXCEPT
SELECT name FROM former_employees;
-- Bob and Charlie never left the company

-- Former employees who never came back:
SELECT name FROM former_employees
EXCEPT
SELECT name FROM current_employees;
-- Diana and Eve left and never returned

-- Oracle uses MINUS instead of EXCEPT:
SELECT name FROM current_employees
MINUS
SELECT name FROM former_employees;` });
    sections.push({ type:'example', title:'EXCEPT in Action',
      data:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      sql:"SELECT name FROM current_employees\nEXCEPT\nSELECT name FROM former_employees\nORDER BY name;",
      leftTable:[
        { name:'Alice' }, { name:'Bob' }, { name:'Charlie' },
      ],
      rightTable:[
        { name:'Alice' }, { name:'Diana' }, { name:'Eve' },
      ],
      result:[
        { name:'Bob' },
        { name:'Charlie' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>EXCEPT</code> (or <code>MINUS</code>) returns rows from the first query that don't exist in the second. Order matters — <code>A EXCEPT B</code> is not the same as <code>B EXCEPT A</code>. Not supported in MySQL.</p>
      </div>` });
  }
  else if (topic.id === 'scalar-subquery') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>scalar subquery</strong> returns exactly <strong>one value</strong> (one row, one column). You can use it anywhere a single value is allowed — in <code>SELECT</code>, <code>WHERE</code>, or <code>HAVING</code>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're shopping and want to know: "Which products cost <strong>more than average</strong>?" First you calculate the average price (one number). Then you compare each product against it. The average calculation is a scalar subquery.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Scalar subquery in SELECT:
SELECT name, price,
  (SELECT AVG(price) FROM products) AS avg_price,
  price - (SELECT AVG(price) FROM products) AS vs_avg
FROM products;

-- Scalar subquery in WHERE:
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Must return exactly one row and one column
-- If it returns zero rows → becomes NULL
-- If it returns multiple rows → ERROR!` });
    sections.push({ type:'example', title:'Scalar Subquery in Action',
      data:[
        { id:1, name:'Widget',   price:29.99 },
        { id:2, name:'Gadget',   price:49.99 },
        { id:3, name:'Doohickey',price:14.99 },
        { id:4, name:'Premium Widget', price:149.99 },
      ],
      sql:"SELECT name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products)\nORDER BY price;",
      result:[
        { name:'Widget',   price:29.99 },
        { name:'Gadget',   price:49.99 },
        { name:'Premium Widget', price:149.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>scalar subquery</strong> returns one value (1 row, 1 column). Use it in <code>SELECT</code> to compute inline values, in <code>WHERE</code> to compare against a computed result. Must not return multiple rows!</p>
      </div>` });
  }
  else if (topic.id === 'row-subquery') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>row subquery</strong> returns a single row with <strong>multiple columns</strong>. You compare it against a row of values using row constructors.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You want to find the employee with the <strong>highest salary in each department</strong>. A row subquery can grab the entire row (name, salary, dept) of that top earner, not just the salary number.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Find the employee with the highest salary:
SELECT name, salary, dept
FROM employees
WHERE (dept, salary) IN (
  SELECT dept, MAX(salary)
  FROM employees
  GROUP BY dept
);

-- Row constructor comparison:
SELECT * FROM employees
WHERE (salary, age) > (
  SELECT salary, age FROM employees WHERE name = 'Alice'
);
-- "More than Alice in both salary AND age"` });
    sections.push({ type:'example', title:'Row Subquery in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
      ],
      sql:"SELECT name, dept, salary\nFROM employees\nWHERE (dept, salary) IN (\n  SELECT dept, MAX(salary)\n  FROM employees\n  GROUP BY dept\n)\nORDER BY salary DESC;",
      result:[
        { name:'Charlie', dept:'Engineering', salary:120000 },
        { name:'Diana',   dept:'Marketing',   salary:72000 },
        { name:'Bob',     dept:'Sales',       salary:55000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>row subquery</strong> returns one row with multiple columns. Use row constructors like <code>(col1, col2) IN (subquery)</code> for multi-column comparisons. Great for finding top-per-group or matching composite keys.</p>
      </div>` });
  }
  else if (topic.id === 'table-subquery') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>table subquery</strong> (also called a <strong>derived table</strong>) returns a full result set used as a <code>FROM</code> source. You query it like a regular table.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're cooking a multi-step recipe. First you make a sauce (subquery), then you use that sauce as an ingredient in the final dish (outer query). The sauce doesn't exist permanently — it's created on the spot for this recipe.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Derived table in FROM (must have an alias):
SELECT dept, avg_salary
FROM (
  SELECT dept, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY dept
) AS dept_stats
WHERE avg_salary > 60000;

-- Nested derived tables:
SELECT *
FROM (
  SELECT dept, COUNT(*) AS cnt
  FROM employees
  GROUP BY dept
) d
WHERE cnt > 1;` });
    sections.push({ type:'example', title:'Table Subquery in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
        { id:6, name:'Frank',   dept:'Engineering', salary:38000 },
      ],
      sql:"SELECT dept, headcount\nFROM (\n  SELECT dept, COUNT(*) AS headcount,\n         AVG(salary) AS avg_sal\n  FROM employees\n  GROUP BY dept\n) AS stats\nWHERE headcount >= 2\nORDER BY headcount DESC;",
      result:[
        { dept:'Engineering', headcount:3 },
        { dept:'Sales',       headcount:2 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>table subquery</strong> (derived table) is a subquery in the <code>FROM</code> clause. It must have an alias. Use it to pre-process or aggregate data before the outer query. It runs once when the query starts.</p>
      </div>` });
  }
  else if (topic.id === 'correlated-subquery') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>correlated subquery</strong> references columns from the <strong>outer query</strong>. It runs <strong>once for each row</strong> of the outer query — like a loop in SQL.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A teacher goes through a class roster one student at a time. For each student, they check: "Has this student submitted their permission slip?" The question is <strong>different</strong> for each student because it depends on who the student is. That's a correlated subquery.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Find employees who earn more than their dept average:
SELECT e1.name, e1.salary, e1.dept
FROM employees e1
WHERE e1.salary > (
  SELECT AVG(e2.salary)
  FROM employees e2
  WHERE e2.dept = e1.dept   -- references outer e1.dept
);
-- Runs the subquery once per employee

-- Correlated with EXISTS:
SELECT name FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.customer_id = c.id
  AND o.total > 100
);` });
    sections.push({ type:'example', title:'Correlated Subquery in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
        { id:6, name:'Frank',   dept:'Engineering', salary:38000 },
      ],
      sql:"SELECT e.name, e.dept, e.salary\nFROM employees e\nWHERE e.salary > (\n  SELECT AVG(e2.salary)\n  FROM employees e2\n  WHERE e2.dept = e.dept\n)\nORDER BY e.salary DESC;",
      result:[
        { name:'Charlie', dept:'Engineering', salary:120000 },
        { name:'Alice',   dept:'Engineering', salary:95000 },
        { name:'Diana',   dept:'Marketing',   salary:72000 },
        { name:'Bob',     dept:'Sales',       salary:55000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Performance Note</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Correlated subqueries run <strong>once per outer row</strong>. For a table with 10,000 rows, the subquery runs 10,000 times. They can be slow on large datasets. Sometimes a <code>JOIN</code> or window function is faster.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">A <strong>correlated subquery</strong> references the outer query and runs per-row. Use it for "per-X" comparisons (e.g., above dept average). Powerful but potentially slow — consider <code>JOIN</code> or window functions for large data.</p>
      </div>` });
  }
  else if (topic.id === 'exists') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>EXISTS</code> checks whether a subquery returns <strong>any rows</strong>. It returns <code>TRUE</code> if the subquery has at least one row, <code>FALSE</code> otherwise. <code>NOT EXISTS</code> is the opposite.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're checking your mailbox. You don't care <strong>how many</strong> letters are inside. You just want to know: "Are there any letters?" Yes / No. <code>EXISTS</code> answers "are there any?" — it stops as soon as it finds the first match.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Customers who have placed at least one order:
SELECT name FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.customer_id = c.id
);

-- Customers who have NEVER placed an order:
SELECT name FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM orders o
  WHERE o.customer_id = c.id
);

-- SELECT 1 is convention (we don't care about the data)
-- EXISTS stops at the first match — very fast` });
    sections.push({ type:'example', title:'EXISTS in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      sql:"SELECT name FROM customers c\nWHERE EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.customer_id = c.id\n)\nORDER BY name;",
      leftTable:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' }, { id:3, name:'Charlie' }, { id:4, name:'Diana' },
      ],
      rightTable:[
        { id:1, customer_id:1, total:29.99 },
        { id:2, customer_id:3, total:49.99 },
      ],
      result:[
        { name:'Alice' },
        { name:'Charlie' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>EXISTS</code> tests for the <strong>presence</strong> of rows. Use <code>SELECT 1</code> in the subquery (data doesn't matter). <code>NOT EXISTS</code> finds missing relationships. Often faster than <code>IN</code> because it stops at the first match.</p>
      </div>` });
  }
  else if (topic.id === 'any-all') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ANY</code> and <code>ALL</code> compare a value against a <strong>list of values</strong> from a subquery. <code>ANY</code> is true if the comparison is true for <strong>any</strong> (at least one) value. <code>ALL</code> is true if it's true for <strong>every</strong> value.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're lining up for a roller coaster. <code>ANY</code>: "Is this person taller than <strong>any</strong> person in the front row?" (taller than at least one). <code>ALL</code>: "Is this person taller than <strong>every</strong> person in the front row?" (taller than all).</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ANY: greater than at least one value:
SELECT name, salary
FROM employees
WHERE salary > ANY (
  SELECT salary FROM employees WHERE dept = 'Sales'
);
-- True if salary > 42000 (the lowest in Sales)

-- ALL: greater than every value:
SELECT name, salary
FROM employees
WHERE salary > ALL (
  SELECT salary FROM employees WHERE dept = 'Sales'
);
-- True if salary > 55000 (the highest in Sales)

-- = ANY is the same as IN:
SELECT * FROM products
WHERE category_id = ANY (
  SELECT id FROM categories WHERE name LIKE 'E%'
);
-- Same as: WHERE category_id IN (...)` });
    sections.push({ type:'example', title:'ANY vs ALL in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
        { id:6, name:'Frank',   dept:'Engineering', salary:38000 },
      ],
      sql:"SELECT name, dept, salary\nFROM employees\nWHERE salary > ALL (\n  SELECT salary FROM employees WHERE dept = 'Sales'\n)\nORDER BY salary;",
      result:[
        { name:'Diana',   dept:'Marketing',   salary:72000 },
        { name:'Alice',   dept:'Engineering', salary:95000 },
        { name:'Charlie', dept:'Engineering', salary:120000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ANY</code> = true if condition holds for at least one subquery value. <code>ALL</code> = true if condition holds for every value. <code>= ANY</code> is equivalent to <code>IN</code>. Use <code>&gt; ALL</code> to find values exceeding an entire set.</p>
      </div>` });
  }
  else if (topic.id === 'create-table') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CREATE TABLE</code> defines a new table's structure — its columns, data types, and constraints. It's the starting point for storing data.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're building a house. <code>CREATE TABLE</code> is the <strong>blueprint</strong> — it defines every room (column), what goes in each room (data type), and the rules (constraints). No actual furniture (data) yet — just the plan.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE users (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(255) UNIQUE NOT NULL,
  city       VARCHAR(100) DEFAULT 'Unknown',
  age        INT CHECK (age >= 0 AND age < 150),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Column name, data type, optional constraints
-- Common types: INT, VARCHAR(n), DECIMAL, DATE, BOOLEAN` });
    sections.push({ type:'example', title:'CREATE TABLE in Action',
      data:[],
      sql:"CREATE TABLE products (\n  id          INT PRIMARY KEY,\n  name        VARCHAR(200) NOT NULL,\n  category    VARCHAR(100),\n  price       DECIMAL(10,2) CHECK (price >= 0),\n  stock       INT DEFAULT 0,\n  created_at  DATE\n);\n\n-- Table created successfully (0 rows affected)",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CREATE TABLE</code> defines the schema — column names, types, and constraints. No data is inserted yet. You can add, modify, and drop tables as your schema evolves.</p>
      </div>` });
  }
  else if (topic.id === 'alter-table') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ALTER TABLE</code> modifies an <strong>existing table</strong> — adding, dropping, or changing columns and constraints. It's like renovating a house after the blueprints are done.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You already built your house, but now you want to add a window (new column), remove a wall (drop column), or make a door wider (change type). <code>ALTER TABLE</code> handles these structural changes without demolishing everything.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Add a new column:
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Drop a column:
ALTER TABLE users DROP COLUMN phone;

-- Modify column type:
ALTER TABLE users MODIFY COLUMN age SMALLINT;

-- Rename a column (MySQL):
ALTER TABLE users RENAME COLUMN city TO hometown;

-- Add a constraint:
ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);

-- Drop a constraint:
ALTER TABLE users DROP CONSTRAINT uq_email;` });
    sections.push({ type:'example', title:'ALTER TABLE in Action',
      data:[],
      sql:"ALTER TABLE products\nADD COLUMN description TEXT;\n\nALTER TABLE products\nMODIFY COLUMN price DECIMAL(12,2);\n\nALTER TABLE products\nADD CONSTRAINT chk_price CHECK (price >= 0);",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ALTER TABLE</code> changes existing tables without losing data. You can add/drop columns, modify types, and manage constraints. Syntax varies by database — always check your DB docs!</p>
      </div>` });
  }
  else if (topic.id === 'drop-table') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>DROP TABLE</code> <strong>permanently removes</strong> a table and all its data. There's no undo (unless you have a backup).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're demolishing a building completely. Not just emptying it — the entire structure is gone, foundation and all. If you need it again, you start from scratch. <code>DROP TABLE</code> is that demolition.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Drop a single table:
DROP TABLE temp_data;

-- Drop only if it exists (prevents error):
DROP TABLE IF EXISTS temp_data;

-- Drop with CASCADE (removes dependent objects like views):
DROP TABLE users CASCADE;

-- TRUNCATE removes data, keeps table structure
-- DROP removes both data and structure
-- DELETE removes rows, keeps structure, can be rolled back` });
    sections.push({ type:'example', title:'DROP TABLE in Action',
      data:[],
      sql:"DROP TABLE IF EXISTS staging_data;\n\n-- Table 'staging_data' has been removed\n-- All data and structure are gone permanently",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
        <p class="text-sm font-semibold" style="color:var(--red);">⚠️ Warning</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>DROP TABLE</code> is <strong>permanent</strong> — the table and all its data are gone. Use <code>IF EXISTS</code> to avoid errors. Most DBs cannot roll back a <code>DROP TABLE</code> unless wrapped in a transaction (some support DDL transactions).</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>DROP TABLE</code> removes the table and its data permanently. <code>TRUNCATE</code> removes data but keeps the structure. <code>DELETE</code> removes rows but can be rolled back. Know the difference!</p>
      </div>` });
  }
  else if (topic.id === 'not-null') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>NOT NULL</code> ensures a column <strong>must have a value</strong> — it cannot be <code>NULL</code> (empty/missing). It's the most basic data integrity rule.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A paper form with a <strong>required field</strong> marked by a red asterisk (*). You can't submit the form without filling it in. <code>NOT NULL</code> is that red asterisk — the database rejects any row missing this value.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE users (
  id    INT PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,   -- required
  email VARCHAR(255) NOT NULL,   -- required
  phone VARCHAR(20),             -- optional (can be NULL)
  bio   TEXT                     -- optional
);

-- Adding NOT NULL to an existing column:
ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
-- Fails if existing rows have NULL in that column!` });
    sections.push({ type:'example', title:'NOT NULL in Action',
      data:[],
      sql:"CREATE TABLE students (\n  id        INT PRIMARY KEY,\n  name      VARCHAR(100) NOT NULL,\n  email     VARCHAR(255) NOT NULL,\n  phone     VARCHAR(20)\n);\n\n-- This works:\nINSERT INTO students (id, name, email) VALUES (1, 'Alice', 'a@b.com');\n\n-- This FAILS (name is NULL and NOT NULL):\nINSERT INTO students (id, name, email) VALUES (2, NULL, 'b@c.com');\n-- ERROR: Column 'name' cannot be null",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>NOT NULL</code> makes a column required — every row must have a value. Use it for critical fields like IDs, names, and emails. Adding it to an existing column fails if there are NULL values already.</p>
      </div>` });
  }
  else if (topic.id === 'unique-constraint') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>UNIQUE</code> ensures all values in a column (or combination of columns) are <strong>different</strong> from each other. No duplicates allowed.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">License plates — every car has a <strong>different</strong> plate number. If two cars had the same plate, you couldn't tell them apart. <code>UNIQUE</code> guarantees no two rows have the same value in that column.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE users (
  id    INT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,      -- no two users share an email
  ssn   VARCHAR(11) UNIQUE        -- no two users share an SSN
);

-- Composite UNIQUE (two columns together must be unique):
CREATE TABLE course_enrollments (
  student_id INT,
  course_id  INT,
  UNIQUE (student_id, course_id)  -- one enrollment per student per course
);

-- NULL values: most DBs allow multiple NULLs in a UNIQUE column
-- (each NULL is considered different from other NULLs)` });
    sections.push({ type:'example', title:'UNIQUE in Action',
      data:[],
      sql:"CREATE TABLE employees (\n  id       INT PRIMARY KEY,\n  email    VARCHAR(255) UNIQUE NOT NULL,\n  username VARCHAR(50) UNIQUE NOT NULL\n);\n\n-- This works:\nINSERT INTO employees VALUES (1, 'alice@co.com', 'alice01');\n\n-- This FAILS (email already exists):\nINSERT INTO employees VALUES (2, 'alice@co.com', 'bob01');\n-- ERROR: Duplicate entry 'alice@co.com' for key 'email'",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>UNIQUE</code> prevents duplicate values in a column. A table can have multiple <code>UNIQUE</code> columns (but only one <code>PRIMARY KEY</code>). Use composite <code>UNIQUE</code> for multi-column uniqueness.</p>
      </div>` });
  }
  else if (topic.id === 'primary-key') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>PRIMARY KEY</code> uniquely identifies <strong>each row</strong> in a table. It's a combination of <code>NOT NULL</code> and <code>UNIQUE</code>. A table can have only one primary key.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Every student gets a <strong>student ID number</strong>. No two students share the same ID (UNIQUE). Every student has an ID (NOT NULL). You use that ID to look up grades, schedule classes, etc. That's the primary key for the students table.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Single column PK (most common):
CREATE TABLE employees (
  id   INT PRIMARY KEY,    -- shorthand: PRIMARY KEY = UNIQUE + NOT NULL
  name VARCHAR(100) NOT NULL
);

-- Composite PK (two+ columns together form the key):
CREATE TABLE order_items (
  order_id   INT,
  product_id INT,
  quantity   INT,
  PRIMARY KEY (order_id, product_id)  -- one row per product per order
);

-- Adding PK to existing table:
ALTER TABLE users ADD PRIMARY KEY (id);` });
    sections.push({ type:'example', title:'PRIMARY KEY in Action',
      data:[],
      sql:"CREATE TABLE products (\n  id    INT PRIMARY KEY,\n  name  VARCHAR(200) NOT NULL,\n  price DECIMAL(10,2)\n);\n\n-- This works:\nINSERT INTO products VALUES (1, 'Widget', 29.99);\n\n-- This FAILS (id=1 already exists):\nINSERT INTO products VALUES (1, 'Gadget', 49.99);\n-- ERROR: Duplicate entry '1' for key 'PRIMARY'\n\n-- This FAILS (PK can't be NULL):\nINSERT INTO products VALUES (NULL, 'Gadget', 49.99);\n-- ERROR: Column 'id' cannot be null",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>PRIMARY KEY</code> = <code>NOT NULL</code> + <code>UNIQUE</code>. Every table should have one. It uniquely identifies each row and is used for foreign key references. A composite PK uses multiple columns.</p>
      </div>` });
  }
  else if (topic.id === 'foreign-key') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>FOREIGN KEY</code> links a column in one table to the <code>PRIMARY KEY</code> of another. It ensures <strong>referential integrity</strong> — no orphan records.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A library has a <strong>Members</strong> table and a <strong>Loans</strong> table. Every loan must belong to an existing member. You can't have a loan on record for a member who doesn't exist. The <code>FOREIGN KEY</code> enforces this rule.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT,
  amount      DECIMAL(10,2),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
  -- Ensures every customer_id exists in customers.id
);

-- With ON DELETE CASCADE (delete customer → deletes their orders):
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT,
  amount      DECIMAL(10,2),
  FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE CASCADE
);` });
    sections.push({ type:'example', title:'FOREIGN KEY in Action',
      data:[],
      sql:"CREATE TABLE customers (\n  id   INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT,\n  amount      DECIMAL(10,2),\n  FOREIGN KEY (customer_id) REFERENCES customers(id)\n);\n\n-- This fails (customer 99 doesn't exist):\nINSERT INTO orders VALUES (1, 99, 29.99);\n-- ERROR: Cannot add or update a child row: a foreign key constraint fails",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>FOREIGN KEY</code> links a child table to a parent table's primary key. It prevents orphan records. Use <code>ON DELETE CASCADE</code> to auto-delete child rows when the parent is deleted.</p>
      </div>` });
  }
  else if (topic.id === 'check-constraint') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>CHECK</code> validates that column values satisfy a <strong>boolean condition</strong>. It's like a bouncer at a club — only rows that pass the check get in.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A roller coaster has a height requirement: "You must be at least 48 inches tall." The attendant checks every rider. <code>CHECK (height >= 48)</code> does the same — it rejects any row that doesn't meet the condition.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Inline CHECK:
CREATE TABLE products (
  id    INT PRIMARY KEY,
  name  VARCHAR(200),
  price DECIMAL(10,2) CHECK (price >= 0),
  age   INT CHECK (age >= 0 AND age < 150)
);

-- Named CHECK (easier to drop later):
CREATE TABLE employees (
  id     INT PRIMARY KEY,
  salary DECIMAL(10,2),
  CONSTRAINT chk_salary_positive CHECK (salary >= 0)
);

-- Multi-column CHECK:
CHECK (end_date > start_date)` });
    sections.push({ type:'example', title:'CHECK Constraint in Action',
      data:[],
      sql:"CREATE TABLE accounts (\n  id       INT PRIMARY KEY,\n  balance  DECIMAL(12,2) CHECK (balance >= 0),\n  type     VARCHAR(10) CHECK (type IN ('Savings', 'Checking', 'Credit')),\n  apr      DECIMAL(5,2) CHECK (apr >= 0 AND apr <= 30)\n);\n\n-- This works:\nINSERT INTO accounts VALUES (1, 1000.00, 'Savings', 2.5);\n\n-- This FAILS (negative balance):\nINSERT INTO accounts VALUES (2, -50.00, 'Checking', 0);\n-- ERROR: Check constraint 'accounts_chk_1' is violated",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CHECK</code> enforces custom validation rules on column values. Use it for ranges (<code>age >= 0</code>), enum-like lists (<code>status IN ('A', 'B')</code>), or multi-column comparisons (<code>end > start</code>).</p>
      </div>` });
  }
  else if (topic.id === 'default-constraint') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>DEFAULT</code> sets a <strong>fallback value</strong> for a column when no value is provided in an <code>INSERT</code>. It's the "auto-fill" for your data.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A hotel check-in form: if you don't specify a room preference, they default to "Standard." If you don't specify a check-in time, it defaults to "3:00 PM." <code>DEFAULT</code> fills in the blanks when you don't provide a value.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`CREATE TABLE users (
  id         INT PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  city       VARCHAR(100) DEFAULT 'Unknown',
  is_active  BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT without specifying defaults:
INSERT INTO users (id, name) VALUES (1, 'Alice');
-- city = 'Unknown', is_active = TRUE, created_at = current time

-- Explicitly override a default:
INSERT INTO users (id, name, city) VALUES (2, 'Bob', 'Paris');` });
    sections.push({ type:'example', title:'DEFAULT in Action',
      data:[],
      sql:"CREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  product     VARCHAR(100),\n  qty         INT DEFAULT 1,\n  status      VARCHAR(20) DEFAULT 'Pending',\n  order_date  DATE DEFAULT CURRENT_DATE\n);\n\nINSERT INTO orders (id, product) VALUES (1, 'Widget');\n-- qty=1, status='Pending', order_date=today\n\nSELECT * FROM orders;",
      result:[
        { id:1, product:'Widget', qty:1, status:'Pending', order_date:'2024-06-01' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>DEFAULT</code> provides automatic values when <code>INSERT</code> doesn't specify a column. Common defaults: <code>0</code>, <code>'Unknown'</code>, <code>TRUE</code>, <code>CURRENT_TIMESTAMP</code>. If no default and column allows NULL, it defaults to NULL.</p>
      </div>` });
  }
  else if (topic.id === 'indexes') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Indexes</strong> speed up data retrieval at the cost of slower writes. Think of them as the database's version of a book's index — you find what you need faster without flipping every page.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A phone book has an alphabetical index — you don't read every name to find "Smith." You jump to the S section. An <strong>index</strong> on a column works the same way: the database creates a sorted lookup structure so it can jump directly to matching rows.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Create an index on one column:
CREATE INDEX idx_users_email ON users(email);

-- Create a unique index (same as UNIQUE constraint):
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Composite index (multiple columns):
CREATE INDEX idx_users_city_age ON users(city, age);

-- Drop an index:
DROP INDEX idx_users_email ON users;

-- Index on an expression (PostgreSQL):
CREATE INDEX idx_products_lower_name ON products(LOWER(name));` });
    sections.push({ type:'example', title:'Indexes in Action',
      data:[],
      sql:"-- Without index (full table scan):\nSELECT * FROM users WHERE email = 'alice@co.com';\n-- Database reads EVERY row to find the match\n\n-- With index (direct lookup):\nCREATE INDEX idx_email ON users(email);\nSELECT * FROM users WHERE email = 'alice@co.com';\n-- Database uses the index → instantly finds the row\n\n-- Check if index is used (MySQL):\nEXPLAIN SELECT * FROM users WHERE email = 'alice@co.com';",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Trade-offs</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Indexes speed up <code>SELECT</code>, <code>WHERE</code>, and <code>JOIN</code> queries <strong>but</strong> slow down <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> (the index must be updated too). Index columns you frequently search on — don't index everything!</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Indexes</strong> speed up read queries by creating a sorted lookup structure. They're essential for performance on large tables. But they add write overhead — index strategically, not everything.</p>
      </div>` });
  }
  else if (topic.id === 'views') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>view</strong> is a <strong>saved SQL query</strong> that acts like a virtual table. It doesn't store data — it stores the query definition and fetches data from underlying tables when you query it.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a complex recipe you make often. Instead of re-finding all ingredients every time, you save it as <strong>"My Favorite Pasta"</strong>. A view is the same — you save a complex query and run it by name.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Create a view:
CREATE VIEW dept_summary AS
SELECT dept, COUNT(*) AS headcount, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept;

-- Query it like a table:
SELECT * FROM dept_summary WHERE headcount > 5;

-- Views can hide sensitive columns:
CREATE VIEW public_user_info AS
SELECT id, name, city FROM users;
-- Excludes email, password, ssn

-- Drop a view:
DROP VIEW IF EXISTS dept_summary;` });
    sections.push({ type:'example', title:'Views in Action',
      data:[],
      sql:"CREATE VIEW active_customers AS\nSELECT id, name, email, total_spent\nFROM customers\nWHERE status = 'Active'\n  AND last_order_date > '2024-01-01';\n\n-- Now this simple query gives you the complex result:\nSELECT name, total_spent\nFROM active_customers\nORDER BY total_spent DESC\nLIMIT 10;",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Views</strong> are saved queries that act like virtual tables. They simplify complex queries, hide sensitive columns, and provide a stable interface even if the underlying schema changes. Some views can also be updated.</p>
      </div>` });
  }
  else if (topic.id === 'sequences') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Sequences</strong> (and <strong>auto-increment</strong>) automatically generate unique numbers, typically for primary keys. You don't specify the value — the database hands you the next number in line.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A deli counter has a <strong>take-a-number</strong> dispenser. You pull a ticket: 47. The next customer pulls: 48. Nobody tells the machine what number to give — it just increments. That's exactly what <code>AUTO_INCREMENT</code> does for primary keys.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL: AUTO_INCREMENT
CREATE TABLE users (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
INSERT INTO users (name) VALUES ('Alice');  -- id = 1
INSERT INTO users (name) VALUES ('Bob');    -- id = 2

-- PostgreSQL: SERIAL (auto-incrementing integer)
CREATE TABLE users (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

-- PostgreSQL: Explicit sequence
CREATE SEQUENCE user_id_seq START 100;
CREATE TABLE users (
  id   INT DEFAULT NEXTVAL('user_id_seq') PRIMARY KEY,
  name VARCHAR(100)
);` });
    sections.push({ type:'example', title:'Sequences in Action',
      data:[],
      sql:"CREATE TABLE orders (\n  id          INT AUTO_INCREMENT PRIMARY KEY,\n  product     VARCHAR(100),\n  amount      DECIMAL(10,2)\n);\n\nINSERT INTO orders (product, amount) VALUES ('Widget', 29.99);\nINSERT INTO orders (product, amount) VALUES ('Gadget', 49.99);\nINSERT INTO orders (product, amount) VALUES ('Doohickey', 14.99);\n\nSELECT * FROM orders;",
      result:[
        { id:1, product:'Widget',   amount:29.99 },
        { id:2, product:'Gadget',   amount:49.99 },
        { id:3, product:'Doohickey',amount:14.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Auto-increment</strong> / <strong>sequences</strong> automatically generate unique numbers. MySQL uses <code>AUTO_INCREMENT</code>, PostgreSQL uses <code>SERIAL</code> or explicit <code>SEQUENCE</code>. The sequence never repeats — even if a row is deleted.</p>
      </div>` });
  }
  else if (topic.id === 'temp-tables') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Temporary tables</strong> exist only for the duration of a <strong>session</strong> (or transaction). They're private — other users can't see them. They automatically disappear when you disconnect.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're at a coffee shop working on a puzzle. You spread pieces on your table. When you leave, the staff clears everything. Your puzzle pieces don't affect anyone else's table. Temporary tables are your private workspace.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Create a temporary table (MySQL, PostgreSQL):
CREATE TEMP TABLE high_value_orders AS
SELECT * FROM orders WHERE amount > 100;

-- Use it like a regular table:
SELECT customer_id, COUNT(*) FROM high_value_orders
GROUP BY customer_id;

-- It's automatically dropped when your session ends
-- Or you can explicitly drop it:
DROP TABLE IF EXISTS high_value_orders;

-- SQL Server uses # prefix:
-- CREATE TABLE #temp_results (...)` });
    sections.push({ type:'example', title:'Temp Tables in Action',
      data:[],
      sql:"-- Step 1: Create a temp table of top spenders\nCREATE TEMP TABLE top_spenders AS\nSELECT customer_id, SUM(amount) AS total\nFROM orders\nGROUP BY customer_id\nHAVING SUM(amount) > 100;\n\n-- Step 2: Use it in a join\nSELECT c.name, t.total\nFROM customers c\nJOIN top_spenders t ON c.id = t.customer_id\nORDER BY t.total DESC;\n\n-- Step 3: Temp table auto-deletes when session ends",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Temporary tables</strong> are session-private scratch spaces. They auto-delete when you disconnect. Use them to break complex queries into steps, cache intermediate results, or test without affecting other users.</p>
      </div>` });
  }
  else if (topic.id === 'cte') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>Common Table Expression (CTE)</strong> is a temporary named result set defined with <code>WITH</code>. It makes complex queries more readable by breaking them into named steps.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're baking a cake. Instead of one giant instruction: "mix flour, sugar, eggs, bake at 350° for 30 min" — you write steps: <strong>Step 1: make batter</strong> (mix dry + wet), <strong>Step 2: prepare pan</strong> (grease + flour), <strong>Step 3: bake</strong>. A CTE is like naming each step so you can refer to it later.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- CTE: name a subquery, then use it like a table
WITH high_value_orders AS (
  SELECT customer_id, SUM(amount) AS total
  FROM orders
  GROUP BY customer_id
  HAVING SUM(amount) > 100
)
SELECT c.name, h.total
FROM customers c
JOIN high_value_orders h ON c.id = h.customer_id
ORDER BY h.total DESC;

-- Multiple CTEs (separate by comma):
WITH
dept_stats AS (
  SELECT dept, AVG(salary) AS avg_sal
  FROM employees GROUP BY dept
),
top_earners AS (
  SELECT name, salary, dept
  FROM employees
  WHERE salary > 80000
)
SELECT t.name, t.salary, d.avg_sal
FROM top_earners t
JOIN dept_stats d ON t.dept = d.dept;` });
    sections.push({ type:'example', title:'CTE Example 1 — Sales by Category',
      data:[
        { id:1, product:'Widget',   category:'Electronics', amount:29.99 },
        { id:2, product:'Gadget',   category:'Electronics', amount:49.99 },
        { id:3, product:'Notebook', category:'Stationery',  amount:4.99 },
        { id:4, product:'Pen Set',  category:'Stationery',  amount:12.50 },
        { id:5, product:'T-Shirt',  category:'Clothing',    amount:19.99 },
      ],
      sql:"WITH cat_sales AS (\n  SELECT category, SUM(amount) AS total\n  FROM orders\n  GROUP BY category\n)\nSELECT category, total\nFROM cat_sales\nWHERE total > 20\nORDER BY total DESC;",
      result:[
        { category:'Electronics', total:79.98 },
        { category:'Stationery',  total:17.49 },
        { category:'Clothing',    total:19.99 },
      ]});
    sections.push({ type:'example', title:'CTE Example 2 — Multiple CTEs',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
      ],
      sql:"WITH dept_avg AS (\n  SELECT dept, AVG(salary) AS avg_sal\n  FROM employees GROUP BY dept\n),\nabove_avg AS (\n  SELECT e.name, e.salary, e.dept, d.avg_sal\n  FROM employees e\n  JOIN dept_avg d ON e.dept = d.dept\n  WHERE e.salary > d.avg_sal\n)\nSELECT * FROM above_avg ORDER BY salary DESC;",
      result:[
        { name:'Charlie', salary:120000, dept:'Engineering', avg_sal:107500 },
        { name:'Bob',     salary:55000,  dept:'Sales',       avg_sal:48500 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>CTEs</strong> (WITH clause) name subqueries for reuse. They make complex queries readable, can reference each other, and behave like temporary views for a single query. Unlike subqueries, you can reference a CTE multiple times in the same query.</p>
      </div>` });
  }
  else if (topic.id === 'recursive-cte') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>Recursive CTE</strong> calls itself to work through <strong>hierarchical or sequential data</strong>. It has two parts: an <strong>anchor</strong> (starting point) and a <strong>recursive</strong> part (that adds rows).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're in a family tree. Start at you (anchor). Find your parents (step 1). Then find your grandparents (step 2). Keep going until no more parents exist. Each step uses the results of the previous step. That's a recursive CTE.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Basic structure: anchor UNION ALL recursive part
WITH RECURSIVE numbers(n) AS (
  SELECT 1           -- anchor: start at 1
  UNION ALL
  SELECT n + 1       -- recursive: add 1 each time
  FROM numbers
  WHERE n < 10       -- stop condition
)
SELECT * FROM numbers;
-- Result: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

-- The recursive part references the CTE itself!
-- Must have UNION ALL (not UNION)
-- Must have a termination condition (infinite loop otherwise!)` });
    sections.push({ type:'example', title:'Recursive CTE — Employee Hierarchy',
      data:[
        { id:1, name:'Alice',   manager_id:null },
        { id:2, name:'Bob',     manager_id:1 },
        { id:3, name:'Charlie', manager_id:1 },
        { id:4, name:'Diana',   manager_id:2 },
        { id:5, name:'Eve',     manager_id:2 },
        { id:6, name:'Frank',   manager_id:3 },
        { id:7, name:'Grace',   manager_id:3 },
      ],
      sql:"WITH RECURSIVE org_tree AS (\n  -- Anchor: top-level manager (CEO)\n  SELECT id, name, manager_id, 1 AS level\n  FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  -- Recursive: find direct reports\n  SELECT e.id, e.name, e.manager_id, t.level + 1\n  FROM employees e\n  JOIN org_tree t ON e.manager_id = t.id\n)\nSELECT * FROM org_tree ORDER BY level, name;",
      result:[
        { id:1, name:'Alice',   manager_id:null, level:1 },
        { id:2, name:'Bob',     manager_id:1,    level:2 },
        { id:3, name:'Charlie', manager_id:1,    level:2 },
        { id:4, name:'Diana',   manager_id:2,    level:3 },
        { id:5, name:'Eve',     manager_id:2,    level:3 },
        { id:6, name:'Frank',   manager_id:3,    level:3 },
        { id:7, name:'Grace',   manager_id:3,    level:3 },
      ]});
    sections.push({ type:'example', title:'Recursive CTE — Number Series',
      data:[], sql:"WITH RECURSIVE fibonacci(a, b) AS (\n  SELECT 0, 1\n  UNION ALL\n  SELECT b, a + b FROM fibonacci\n  WHERE b < 100\n)\nSELECT a AS fib_number FROM fibonacci;",
      result:[
        { fib_number:0 }, { fib_number:1 }, { fib_number:1 }, { fib_number:2 },
        { fib_number:3 }, { fib_number:5 }, { fib_number:8 }, { fib_number:13 },
        { fib_number:21 }, { fib_number:34 }, { fib_number:55 }, { fib_number:89 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Important Rules</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Recursive CTEs must have <code>UNION ALL</code> (not <code>UNION</code>). The recursive part references the CTE by name. Always include a <strong>termination condition</strong> (<code>WHERE n &lt; 10</code>) — without it, the query runs forever and crashes!</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Recursive CTEs</strong> let you traverse hierarchies (org charts, family trees) and generate sequences (numbers, dates, Fibonacci). Anchor + recursive step + termination = safe recursion.</p>
      </div>` });
  }
  else if (topic.id === 'window-row-number') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>ROW_NUMBER()</code>, <code>RANK()</code>, and <code>DENSE_RANK()</code> assign numbers to rows <strong>within a partition</strong>. They're like "give me the top 3 per category."</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Students line up by test score within each class. <code>ROW_NUMBER()</code> gives each student a unique position (1,2,3...). <code>RANK()</code> gives ties the same rank, skipping numbers. <code>DENSE_RANK()</code> gives ties the same rank, no skipping.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ROW_NUMBER: unique number per partition (no ties)
SELECT name, dept, salary,
  ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
FROM employees;

-- RANK: ties get same rank, next rank skips
SELECT name, dept, salary,
  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk
FROM employees;

-- DENSE_RANK: ties get same rank, no skipping
SELECT name, dept, salary,
  DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dr
FROM employees;` });
    sections.push({ type:'example', title:'Ranking Functions in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Engineering', salary:95000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
        { id:6, name:'Frank',   dept:'Sales',       salary:55000 },
      ],
      sql:"SELECT name, dept, salary,\n  ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS row_num,\n  RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) AS rank,\n  DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dense\nFROM employees\nORDER BY dept, salary DESC;",
      result:[
        { name:'Charlie', dept:'Engineering', salary:120000, row_num:1, rank:1, dense:1 },
        { name:'Alice',   dept:'Engineering', salary:95000,  row_num:2, rank:2, dense:2 },
        { name:'Diana',   dept:'Engineering', salary:95000,  row_num:3, rank:2, dense:2 },
        { name:'Bob',     dept:'Sales',       salary:55000,  row_num:1, rank:1, dense:1 },
        { name:'Frank',   dept:'Sales',       salary:55000,  row_num:2, rank:1, dense:1 },
        { name:'Eve',     dept:'Sales',       salary:42000,  row_num:3, rank:3, dense:2 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>ROW_NUMBER()</code> = unique number, no ties. <code>RANK()</code> = ties share rank, gaps appear. <code>DENSE_RANK()</code> = ties share rank, no gaps. Use <code>PARTITION BY</code> to reset numbering per group.</p>
      </div>` });
  }
  else if (topic.id === 'window-lead-lag') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LEAD()</code> accesses the <strong>next</strong> row's value. <code>LAG()</code> accesses the <strong>previous</strong> row's value. They let you compare rows without self-joins.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're looking at a timeline of stock prices. For each day, you want to know: "What was yesterday's price? (LAG) What will tomorrow's price be? (LEAD)" You're peeking at adjacent rows.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Compare each employee's salary to their predecessor:
SELECT name, salary,
  LAG(salary) OVER (ORDER BY salary) AS prev_salary,
  salary - LAG(salary) OVER (ORDER BY salary) AS diff_from_prev
FROM employees;

-- LEAD: look at the next row:
SELECT month, revenue,
  LEAD(revenue) OVER (ORDER BY month) AS next_month_rev
FROM sales;

-- With default value (3rd arg) if no next/prev row:
SELECT name, salary,
  LAG(salary, 1, 0) OVER (ORDER BY salary) AS prev_salary
FROM employees;` });
    sections.push({ type:'example', title:'LEAD & LAG in Action',
      data:[
        { month:'Jan', revenue:10000 },
        { month:'Feb', revenue:15000 },
        { month:'Mar', revenue:12000 },
        { month:'Apr', revenue:18000 },
      ],
      sql:"SELECT month, revenue,\n  LAG(revenue) OVER (ORDER BY month) AS prev_month,\n  revenue - LAG(revenue) OVER (ORDER BY month) AS change,\n  LEAD(revenue) OVER (ORDER BY month) AS next_month\nFROM monthly_revenue\nORDER BY month;",
      result:[
        { month:'Jan', revenue:10000, prev_month:null, change:null, next_month:15000 },
        { month:'Feb', revenue:15000, prev_month:10000, change:5000, next_month:12000 },
        { month:'Mar', revenue:12000, prev_month:15000, change:-3000, next_month:18000 },
        { month:'Apr', revenue:18000, prev_month:12000, change:6000, next_month:null },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LAG()</code> looks at previous rows, <code>LEAD()</code> at next rows. Use them for period-over-period comparisons (this month vs last month), deltas, and trend analysis without self-joins.</p>
      </div>` });
  }
  else if (topic.id === 'window-frames') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Window frames</strong> define which rows are included in the window function calculation — rows <strong>before</strong> and <strong>after</strong> the current row. They make running totals and moving averages possible.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're looking at a year's worth of sales data. A <strong>running total</strong> looks at "all rows from Jan up to current row." A <strong>3-month moving average</strong> looks at "current month + 1 before + 1 after." The frame specifies the window boundaries.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Running total (default frame: UNBOUNDED PRECEDING TO CURRENT ROW):
SELECT month, revenue,
  SUM(revenue) OVER (ORDER BY month) AS running_total
FROM sales;

-- Same, but explicit frame:
SUM(revenue) OVER (
  ORDER BY month
  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
)

-- 3-month moving average:
SELECT month, revenue,
  AVG(revenue) OVER (
    ORDER BY month
    ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
  ) AS moving_avg_3mo
FROM sales;` });
    sections.push({ type:'example', title:'Window Frames in Action',
      data:[
        { month:'Jan', revenue:100 },
        { month:'Feb', revenue:200 },
        { month:'Mar', revenue:150 },
        { month:'Apr', revenue:300 },
        { month:'May', revenue:250 },
      ],
      sql:"SELECT month, revenue,\n  SUM(revenue) OVER (ORDER BY month ROWS UNBOUNDED PRECEDING) AS running_total,\n  AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg\nFROM monthly_revenue;",
      result:[
        { month:'Jan', revenue:100, running_total:100, moving_avg:150 },
        { month:'Feb', revenue:200, running_total:300, moving_avg:150 },
        { month:'Mar', revenue:150, running_total:450, moving_avg:217 },
        { month:'Apr', revenue:300, running_total:750, moving_avg:233 },
        { month:'May', revenue:250, running_total:1000, moving_avg:275 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Window frames</strong> control which rows the window function sees. <code>ROWS BETWEEN ... PRECEDING AND ... FOLLOWING</code> defines the boundary. Default frame is all rows from start to current row.</p>
      </div>` });
  }
  else if (topic.id === 'window-first-last') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>FIRST_VALUE()</code> returns the <strong>first</strong> value in a window. <code>LAST_VALUE()</code> returns the <strong>last</strong> value. They're useful for comparing extremes within a group.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have race results per category. <code>FIRST_VALUE()</code> tells you the winner's time. <code>LAST_VALUE()</code> tells you the last place time. Each runner can compare themselves against the extremes.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- First and last salary in each department:
SELECT name, dept, salary,
  FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC) AS top_salary,
  LAST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_salary
FROM employees;

-- NOTE: LAST_VALUE needs explicit frame to get the actual last value
-- Without it, the default frame is just UP TO CURRENT ROW` });
    sections.push({ type:'example', title:'FIRST_VALUE / LAST_VALUE in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:3, name:'Diana',   dept:'Engineering', salary:72000 },
        { id:4, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
      ],
      sql:"SELECT name, dept, salary,\n  FIRST_VALUE(name) OVER (PARTITION BY dept ORDER BY salary DESC) AS top_earner,\n  LAST_VALUE(name) OVER (PARTITION BY dept ORDER BY salary DESC\n    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_earner\nFROM employees\nORDER BY dept, salary DESC;",
      result:[
        { name:'Charlie', dept:'Engineering', salary:120000, top_earner:'Charlie', lowest_earner:'Diana' },
        { name:'Alice',   dept:'Engineering', salary:95000,  top_earner:'Charlie', lowest_earner:'Diana' },
        { name:'Diana',   dept:'Engineering', salary:72000,  top_earner:'Charlie', lowest_earner:'Diana' },
        { name:'Bob',     dept:'Sales',       salary:55000,  top_earner:'Bob',     lowest_earner:'Eve' },
        { name:'Eve',     dept:'Sales',       salary:42000,  top_earner:'Bob',     lowest_earner:'Eve' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>FIRST_VALUE()</code> gets the first row in a window. <code>LAST_VALUE()</code> gets the last — but needs an explicit frame (<code>UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code>) to work correctly.</p>
      </div>` });
  }
  else if (topic.id === 'pivot-unpivot') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>PIVOT</code> rotates rows into <strong>columns</strong>. <code>UNPIVOT</code> rotates columns back into <strong>rows</strong>. They transform data between "tall" and "wide" formats.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have sales data with rows: (Product, Quarter, Revenue). <code>PIVOT</code> turns each quarter into its own column: Product | Q1_Rev | Q2_Rev | Q3_Rev | Q4_Rev. <code>UNPIVOT</code> goes the other way.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PIVOT (SQL Server / Oracle syntax):
SELECT * FROM (
  SELECT product, quarter, revenue FROM sales
) src
PIVOT (
  SUM(revenue)
  FOR quarter IN ('Q1' AS Q1, 'Q2' AS Q2, 'Q3' AS Q3, 'Q4' AS Q4)
) pvt;

-- Manual PIVOT (any DB — using CASE):
SELECT product,
  SUM(CASE WHEN quarter = 'Q1' THEN revenue END) AS Q1,
  SUM(CASE WHEN quarter = 'Q2' THEN revenue END) AS Q2,
  SUM(CASE WHEN quarter = 'Q3' THEN revenue END) AS Q3,
  SUM(CASE WHEN quarter = 'Q4' THEN revenue END) AS Q4
FROM sales
GROUP BY product;` });
    sections.push({ type:'example', title:'PIVOT in Action (manual)',
      data:[
        { product:'Widget', quarter:'Q1', revenue:100 },
        { product:'Widget', quarter:'Q2', revenue:150 },
        { product:'Widget', quarter:'Q3', revenue:200 },
        { product:'Gadget', quarter:'Q1', revenue:300 },
        { product:'Gadget', quarter:'Q2', revenue:250 },
        { product:'Gadget', quarter:'Q3', revenue:350 },
      ],
      sql:"SELECT product,\n  SUM(CASE WHEN quarter = 'Q1' THEN revenue END) AS Q1,\n  SUM(CASE WHEN quarter = 'Q2' THEN revenue END) AS Q2,\n  SUM(CASE WHEN quarter = 'Q3' THEN revenue END) AS Q3\nFROM sales\nGROUP BY product\nORDER BY product;",
      result:[
        { product:'Gadget', Q1:300, Q2:250, Q3:350 },
        { product:'Widget', Q1:100, Q2:150, Q3:200 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>PIVOT</strong> turns row values into column headers (wide format). <strong>UNPIVOT</strong> does the reverse. Native <code>PIVOT</code> syntax is DB-specific; the <code>CASE</code> + <code>GROUP BY</code> workaround works everywhere.</p>
      </div>` });
  }
  else if (topic.id === 'merge-upsert') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>MERGE</code> (also called <strong>upsert</strong>) combines <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> in one statement. If a row exists, update it. If not, insert it.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're updating a contact list from a new spreadsheet. For each person: if they're already in your phone, update their number. If they're new, add them. <code>MERGE</code> does both in one go — no need for separate <code>UPDATE</code> + <code>INSERT</code> checks.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`MERGE INTO target_table AS t
USING source_table AS s ON t.id = s.id
WHEN MATCHED THEN
  UPDATE SET t.name = s.name, t.email = s.email
WHEN NOT MATCHED THEN
  INSERT (id, name, email) VALUES (s.id, s.name, s.email);

-- MySQL alternative (INSERT ... ON DUPLICATE KEY UPDATE):
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'a@b.com')
ON DUPLICATE KEY UPDATE name = VALUES(name), email = VALUES(email);

-- PostgreSQL alternative (INSERT ... ON CONFLICT):
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'a@b.com')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;` });
    sections.push({ type:'example', title:'MERGE / UPSERT in Action',
      data:[], sql:"MERGE INTO products AS t\nUSING (VALUES (1, 'Widget Updated', 34.99)) AS s(id, name, price)\nON t.id = s.id\nWHEN MATCHED THEN\n  UPDATE SET t.name = s.name, t.price = s.price\nWHEN NOT MATCHED THEN\n  INSERT (id, name, price) VALUES (s.id, s.name, s.price);\n\n-- If product 1 exists → price updates to 34.99\n-- If product 1 doesn't exist → new row is inserted",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>MERGE</code> (upsert) combines insert + update in one atomic operation. <code>WHEN MATCHED</code> = update, <code>WHEN NOT MATCHED</code> = insert. MySQL uses <code>ON DUPLICATE KEY UPDATE</code>, PostgreSQL uses <code>ON CONFLICT</code>.</p>
      </div>` });
  }
  else if (topic.id === 'lateral-apply') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LATERAL</code> (or <code>APPLY</code> in SQL Server) lets a subquery in <code>FROM</code> reference columns from <strong>previous</strong> tables. It runs once per row of the outer query.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">For each customer, you want their <strong>top 3 orders</strong>. A regular subquery can't reference the outer customer_id. <code>LATERAL</code> lets the subquery see the outer row — it's like a correlated subquery that returns multiple columns and rows.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL / standard SQL:
SELECT c.name, top_orders.product, top_orders.amount
FROM customers c,
LATERAL (
  SELECT product, amount
  FROM orders o
  WHERE o.customer_id = c.id
  ORDER BY amount DESC
  LIMIT 3
) top_orders;

-- SQL Server: CROSS APPLY (same concept):
SELECT c.name, top_orders.product, top_orders.amount
FROM customers c
CROSS APPLY (
  SELECT TOP 3 product, amount
  FROM orders o
  WHERE o.customer_id = c.id
  ORDER BY amount DESC
) top_orders;` });
    sections.push({ type:'example', title:'LATERAL in Action',
      data:[
        { id:1, name:'Alice' }, { id:2, name:'Bob' },
      ],
      sql:"SELECT c.name, top.product, top.amount\nFROM customers c,\nLATERAL (\n  SELECT product, amount\n  FROM orders o\n  WHERE o.customer_id = c.id\n  ORDER BY amount DESC\n  LIMIT 2\n) top\nORDER BY c.name, top.amount DESC;",
      result:[
        { name:'Alice', product:'Gadget', amount:49.99 },
        { name:'Alice', product:'Widget', amount:29.99 },
        { name:'Bob',   product:'Doohickey', amount:14.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LATERAL</code> lets a subquery reference earlier tables in <code>FROM</code>. Perfect for "top N per group" queries. SQL Server calls it <code>CROSS APPLY</code> / <code>OUTER APPLY</code>. Not supported in MySQL.</p>
      </div>` });
  }
  else if (topic.id === 'string-aggregation') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>STRING_AGG()</code> (PostgreSQL) and <code>LISTAGG()</code> (Oracle) <strong>concatenate values from multiple rows</strong> into a single string, separated by a delimiter.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a list of students per class. Instead of returning many rows, you want one row per class with all student names in one cell: "Alice, Bob, Charlie". <code>STRING_AGG</code> does that collapsing.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL: STRING_AGG
SELECT dept, STRING_AGG(name, ', ' ORDER BY name) AS employees
FROM employees
GROUP BY dept;

-- Oracle: LISTAGG
SELECT dept, LISTAGG(name, ', ') WITHIN GROUP (ORDER BY name) AS employees
FROM employees
GROUP BY dept;

-- MySQL: GROUP_CONCAT
SELECT dept, GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') AS employees
FROM employees
GROUP BY dept;

-- SQL Server: STRING_AGG (since 2017)
SELECT dept, STRING_AGG(name, ', ') WITHIN GROUP (ORDER BY name) AS employees
FROM employees
GROUP BY dept;` });
    sections.push({ type:'example', title:'String Aggregation in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering' },
        { id:2, name:'Charlie', dept:'Engineering' },
        { id:3, name:'Frank',   dept:'Engineering' },
        { id:4, name:'Bob',     dept:'Sales' },
        { id:5, name:'Eve',     dept:'Sales' },
      ],
      sql:"SELECT dept,\n  STRING_AGG(name, ', ' ORDER BY name) AS employees\nFROM employees\nGROUP BY dept\nORDER BY dept;",
      result:[
        { dept:'Engineering', employees:'Alice, Charlie, Frank' },
        { dept:'Sales',       employees:'Bob, Eve' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>STRING_AGG</code> / <code>LISTAGG</code> / <code>GROUP_CONCAT</code> collapses multiple rows into one delimited string. Great for creating CSV lists, tags, and summaries per group.</p>
      </div>` });
  }
  else if (topic.id === 'json-functions') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">Modern databases support <strong>JSON functions</strong> for storing, querying, and generating JSON data. You can extract values, build JSON objects, and search inside JSON documents.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Your database usually has rigid columns — like a spreadsheet. JSON columns are like a <strong>bulletin board</strong> where you can pin flexible, semi-structured notes. Each row can have different fields.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL / MySQL / SQL Server:

-- Extract a value from JSON:
SELECT name, JSON_EXTRACT(metadata, '$.age') AS age FROM users;
-- Shorthand (PostgreSQL): data->'age', data->>'age'

-- Build JSON from columns:
SELECT JSON_OBJECT('name', name, 'city', city) AS json_data FROM users;

-- Check if JSON path exists:
SELECT * FROM users WHERE JSON_CONTAINS_PATH(metadata, 'one', '$.phone');

-- Aggregate rows into JSON array (MySQL):
SELECT JSON_ARRAYAGG(name) FROM users GROUP BY city;` });
    sections.push({ type:'example', title:'JSON Functions in Action',
      data:[
        { id:1, name:'Alice', metadata:'{"age":30,"city":"London","prefs":{"theme":"dark"}}' },
        { id:2, name:'Bob',   metadata:'{"age":25,"city":"Paris","prefs":{"theme":"light"}}' },
      ],
      sql:"SELECT name,\n  JSON_EXTRACT(metadata, '$.age') AS age,\n  JSON_EXTRACT(metadata, '$.prefs.theme') AS theme\nFROM users\nWHERE JSON_EXTRACT(metadata, '$.city') = '\"London\"';",
      result:[
        { name:'Alice', age:30, theme:'"dark"' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>JSON functions</strong> bridge relational and document databases. Use <code>JSON_EXTRACT</code> / <code>-></code> to read JSON fields, <code>JSON_OBJECT</code> to build JSON, and <code>JSON_ARRAYAGG</code> to aggregate into arrays.</p>
      </div>` });
  }
  else if (topic.id === 'full-text-search') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Full-Text Search</strong> finds text based on <strong>words and phrases</strong> — not just LIKE patterns. It understands language: stemming, ranking, relevance, and even fuzzy matches.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);"><code>LIKE '%cat%'</code> finds "cat" but not "cats" or "feline". Full-text search is like <strong>Google for your database</strong> — it finds "cats" when you search "cat", ranks results by relevance, and ignores common words.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL:
SELECT title FROM articles
WHERE MATCH(title, body) AGAINST('database optimization' IN NATURAL LANGUAGE MODE);

-- PostgreSQL:
SELECT title FROM articles
WHERE to_tsvector('english', title || ' ' || body) @@ to_tsquery('english', 'database & optimization');

-- Full-text has built-in ranking:
SELECT title, MATCH(title, body) AGAINST('search terms') AS relevance
FROM articles
WHERE MATCH(title, body) AGAINST('search terms')
ORDER BY relevance DESC;

-- Boolean mode (+, -, wildcards):
SELECT * FROM products
WHERE MATCH(name, description) AGAINST('+laptop -gaming' IN BOOLEAN MODE);` });
    sections.push({ type:'example', title:'Full-Text Search in Action',
      data:[], sql:"CREATE FULLTEXT INDEX idx_articles ON articles(title, body);\n\nSELECT title,\n  MATCH(title, body) AGAINST('sql joins') AS relevance\nFROM articles\nWHERE MATCH(title, body) AGAINST('sql joins')\nORDER BY relevance DESC\nLIMIT 5;",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Full-Text Search</strong> goes beyond <code>LIKE</code> — it understands language, ranks results, and ignores stop words. You need a <strong>full-text index</strong> on the columns first. Syntax varies widely by database.</p>
      </div>` });
  }
  else if (topic.id === 'spatial-data') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Spatial data</strong> represents geographic information — points (a store), lines (a road), and polygons (a country). SQL spatial functions calculate distances, check containment, and find nearest neighbors.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're building a "find nearby restaurants" feature. You have restaurant coordinates (latitude, longitude). Spatial SQL answers: "Which restaurants are within 1 km of me?" using geographic math — no trigonometry required.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL with PostGIS:
SELECT name, ST_Distance(location, ST_MakePoint(-73.98, 40.76)) AS dist_meters
FROM places
ORDER BY location <-> ST_MakePoint(-73.98, 40.76)
LIMIT 5;

-- MySQL:
SELECT name, ST_Distance_Sphere(location, POINT(-73.98, 40.76)) AS dist_meters
FROM places
HAVING dist_meters < 1000
ORDER BY dist_meters;

-- Spatial index for performance:
CREATE SPATIAL INDEX idx_location ON places(location);` });
    sections.push({ type:'example', title:'Spatial Queries in Action',
      data:[], sql:"-- Find stores within 1 km of a given point\nSELECT name, address,\n  ST_Distance_Sphere(location, POINT(-73.985, 40.748)) AS distance_m\nFROM stores\nWHERE ST_Distance_Sphere(location, POINT(-73.985, 40.748)) < 1000\nORDER BY distance_m;",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Spatial SQL</strong> handles geographic data — points, lines, polygons. Use <code>ST_Distance</code> for distance, <code>ST_Contains</code> for containment, and spatial indexes for performance. PostGIS (PostgreSQL) is the most mature implementation.</p>
      </div>` });
  }
  else if (topic.id === 'gaps-islands') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Gaps and Islands</strong> problems identify <strong>gaps</strong> (missing data) and <strong>islands</strong> (contiguous sequences) in ordered data. Classic examples: missing dates in a sales calendar, consecutive login streaks.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A calendar with dates: 1, 2, 3, 5, 6, 7, 9. <strong>Islands</strong> are the groups of consecutive numbers: [1-3], [5-7], [9]. <strong>Gaps</strong> are the missing numbers: 4, 8. The technique uses window functions to identify these patterns.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Find gaps in a sequence:
WITH numbered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY id) AS rn
  FROM sequence_table
)
SELECT (id - rn) AS gap_group, MIN(id) AS gap_start, MAX(id) AS gap_end
FROM numbered
GROUP BY (id - rn)
HAVING MIN(id) <> MAX(id);

-- Find consecutive date islands:
WITH dates AS (
  SELECT order_date,
    order_date - ROW_NUMBER() OVER (ORDER BY order_date) AS grp
  FROM orders
  WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31'
)
SELECT MIN(order_date) AS island_start, MAX(order_date) AS island_end,
  COUNT(*) AS days
FROM dates
GROUP BY grp
HAVING COUNT(*) >= 3;  -- at least 3 consecutive days` });
    sections.push({ type:'example', title:'Gaps & Islands in Action',
      data:[
        { id:1 }, { id:2 }, { id:3 }, { id:5 }, { id:6 }, { id:9 },
      ],
      sql:"WITH numbered AS (\n  SELECT id, ROW_NUMBER() OVER (ORDER BY id) AS rn\n  FROM sequence\n)\nSELECT MIN(id) AS island_start, MAX(id) AS island_end,\n  COUNT(*) AS length, MAX(id) - MIN(id) + 1 - COUNT(*) AS gap_count\nFROM numbered\nGROUP BY id - rn\nORDER BY island_start;",
      result:[
        { island_start:1, island_end:3, length:3, gap_count:0 },
        { island_start:5, island_end:6, length:2, gap_count:0 },
        { island_start:9, island_end:9, length:1, gap_count:0 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Gaps & Islands</strong> uses <code>ROW_NUMBER()</code> and subtraction to group consecutive sequences. Subtract the row number from the value — consecutive values share the same difference. This groups them into "islands."</p>
      </div>` });
  }
  else if (topic.id === 'running-totals') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Running totals</strong> and <strong>moving averages</strong> compute cumulative aggregates over ordered data. They show trends over time — not just snapshot values.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You add money to a piggy bank each week. The <strong>running total</strong> is: "How much total is in the bank after each deposit?" The <strong>moving average</strong> is: "What's the average of the last 4 weeks?" Both give you trend context.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Running total (SUM with ORDER BY):
SELECT month, revenue,
  SUM(revenue) OVER (ORDER BY month) AS running_total
FROM monthly_sales;

-- Running total with partition (resets per year):
SELECT year, month, revenue,
  SUM(revenue) OVER (PARTITION BY year ORDER BY month) AS ytd_total
FROM monthly_sales;

-- Moving average (3-month):
SELECT month, revenue,
  AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS mov_avg_3mo
FROM monthly_sales;

-- Running count:
SELECT name, salary,
  COUNT(*) OVER (ORDER BY salary) AS running_count
FROM employees;` });
    sections.push({ type:'example', title:'Running Totals in Action',
      data:[
        { month:'Jan', revenue:1000 },
        { month:'Feb', revenue:1500 },
        { month:'Mar', revenue:900 },
        { month:'Apr', revenue:2000 },
        { month:'May', revenue:1800 },
      ],
      sql:"SELECT month, revenue,\n  SUM(revenue) OVER (ORDER BY month) AS running_total,\n  AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3mo\nFROM monthly_revenue\nORDER BY month;",
      result:[
        { month:'Jan', revenue:1000, running_total:1000, moving_avg_3mo:1000 },
        { month:'Feb', revenue:1500, running_total:2500, moving_avg_3mo:1250 },
        { month:'Mar', revenue:900,  running_total:3400, moving_avg_3mo:1133 },
        { month:'Apr', revenue:2000, running_total:5400, moving_avg_3mo:1467 },
        { month:'May', revenue:1800, running_total:7200, moving_avg_3mo:1567 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Running totals</strong> use <code>SUM() OVER (ORDER BY ...)</code> to cumulatively add up values. <strong>Moving averages</strong> use frame clauses (like <code>ROWS BETWEEN 2 PRECEDING AND CURRENT ROW</code>) to smooth trends over a sliding window.</p>
      </div>` });
  }
  else if (topic.id === 'begin-commit-rollback') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Transactions</strong> group multiple SQL operations into one atomic unit. Either <strong>all succeed</strong> (COMMIT), or <strong>all roll back</strong> (ROLLBACK). There's no in-between.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're transferring $100 from Savings to Checking. Two steps: <strong>Debit Savings</strong> (subtract $100) and <strong>Credit Checking</strong> (add $100). If the power fails after step 1, you lost $100. A transaction ensures both steps complete or <strong>neither</strong> does.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;  -- debit savings
UPDATE accounts SET balance = balance + 100 WHERE id = 2;  -- credit checking

COMMIT;  -- both succeed, money transferred safely

-- If anything goes wrong before COMMIT:
ROLLBACK;  -- both changes undone, money stays in savings` });
    sections.push({ type:'example', title:'Transaction Flow',
      data:[
        { id:1, name:'Savings',  balance:1000 },
        { id:2, name:'Checking', balance:500 },
      ],
      sql:"-- Before transaction:\nSELECT * FROM accounts;\n-- Savings: $1000, Checking: $500\n\nBEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n\n-- After transaction:\nSELECT * FROM accounts;",
      result:[
        { id:1, name:'Savings',  balance:900 },
        { id:2, name:'Checking', balance:600 },
      ]});
    sections.push({ type:'example', title:'ROLLBACK on Error',
      data:[
        { id:1, name:'Savings',  balance:1000 },
        { id:2, name:'Checking', balance:500 },
      ],
      sql:"BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 200 WHERE id = 1;\n-- Oops! Account 3 doesn't exist:\nUPDATE accounts SET balance = balance + 200 WHERE id = 3;\n-- Error! We're in an inconsistent state\n\nROLLBACK;  -- Savings goes back to $1000\n-- Both changes undone, database is consistent again",
      result:[
        { id:1, name:'Savings',  balance:1000 },
        { id:2, name:'Checking', balance:500 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">BEGIN</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Starts a transaction. From here, your changes are invisible to others until you COMMIT.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">COMMIT</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Makes all changes permanent. Other users can now see the result.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">ROLLBACK</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Undoes everything since BEGIN. The database returns to the state before the transaction.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ ACID — The Four Properties</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>A</strong>tomicity: all or nothing. <strong>C</strong>onsistency: data follows all rules. <strong>I</strong>solation: concurrent transactions don't interfere. <strong>D</strong>urability: committed data survives crashes.</p>
      </div>` });
  }
  else if (topic.id === 'savepoint') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>SAVEPOINT</code> creates a <strong>bookmark</strong> inside a transaction. You can roll back to a savepoint <strong>without</strong> undoing the entire transaction — like a checkpoint in a video game.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're playing a RPG and enter a dungeon. You save at the entrance (savepoint 1). You defeat a boss and save again (savepoint 2). If you die later, you don't restart the <strong>whole game</strong> — you go back to your last savepoint.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT after_debit;  -- bookmark here

UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- Oops! Wrong account. Let's undo just this update:

ROLLBACK TO SAVEPOINT after_debit;  -- undo only the credit
-- Account 1 is still debited $100

UPDATE accounts SET balance = balance + 100 WHERE id = 3;  -- correct account

COMMIT;  -- saves everything since BEGIN` });
    sections.push({ type:'example', title:'Savepoints in Action',
      data:[
        { id:1, name:'Alice', balance:500 },
        { id:2, name:'Bob',   balance:300 },
        { id:3, name:'Charlie', balance:200 },
      ],
      sql:"BEGIN TRANSACTION;\n\nUPDATE accounts SET balance = balance - 50 WHERE id = 1;\nSAVEPOINT step1;\n\nUPDATE accounts SET balance = balance + 50 WHERE id = 2;\n-- Wait, Bob wasn't supposed to get this!\n\nROLLBACK TO SAVEPOINT step1;\n-- Alice still has -$50 pending\n\nUPDATE accounts SET balance = balance + 50 WHERE id = 3;\n-- Charlie gets it instead\n\nCOMMIT;",
      result:[
        { id:1, name:'Alice',  balance:450 },
        { id:2, name:'Bob',    balance:300 },
        { id:3, name:'Charlie',balance:250 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>SAVEPOINT</code> creates partial rollback points within a transaction. <code>ROLLBACK TO savepoint_name</code> undoes changes after the savepoint but keeps earlier changes. Great for complex multi-step operations where some steps might fail.</p>
      </div>` });
  }
  else if (topic.id === 'isolation-levels') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Isolation levels</strong> control how transactions interact with each other. Higher isolation = more safety but less concurrency. Lower isolation = faster but riskier.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Four rooms with windows: <strong>READ UNCOMMITTED</strong> = wide open, anyone sees everything (even dirty data). <strong>READ COMMITTED</strong> = curtains closed during changes. <strong>REPEATABLE READ</strong> = your view is frozen. <strong>SERIALIZABLE</strong> = one person in the room at a time.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Set isolation level for a transaction:
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
SELECT * FROM accounts WHERE id = 1;
-- Another transaction might UPDATE this row between reads
COMMIT;

-- Four standard levels from lowest to highest:
-- 1. READ UNCOMMITTED  — can see uncommitted changes (dirty reads)
-- 2. READ COMMITTED    — only sees committed data (default in most DBs)
-- 3. REPEATABLE READ   — same data throughout transaction
-- 4. SERIALIZABLE      — transactions run as if one at a time` });
    sections.push({ type:'example', title:'Isolation Levels Compared',
      data:[], sql:"-- Transaction A (REPEATABLE READ):\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN;\nSELECT balance FROM accounts WHERE id = 1;  -- sees $1000\n\n-- Meanwhile, Transaction B commits:\nUPDATE accounts SET balance = 500 WHERE id = 1; COMMIT;\n\nSELECT balance FROM accounts WHERE id = 1;  -- still sees $1000!\n-- REPEATABLE READ: same snapshot throughout\nCOMMIT;\n\nSELECT balance FROM accounts WHERE id = 1;  -- now sees $500",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Problems Prevented</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>Dirty read</strong>: seeing uncommitted data. <strong>Non-repeatable read</strong>: same query returns different results. <strong>Phantom read</strong>: new rows appear in subsequent queries.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">📊 Isolation Matrix</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">READ UNCOMMITTED: no protection. READ COMMITTED: no dirty reads. REPEATABLE READ: + no non-repeatable reads. SERIALIZABLE: + no phantoms.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Isolation levels</strong> trade safety for speed. <code>READ COMMITTED</code> is the default for most databases — safe enough, fast enough. Use <code>SERIALIZABLE</code> only when absolute accuracy is critical (financial systems).</p>
      </div>` });
  }
  else if (topic.id === 'lock-table') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>LOCK TABLE</code> explicitly controls <strong>access to a table</strong> during a transaction. You can prevent others from reading (exclusive) or just writing (shared).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're in a study room at the library. <strong>Shared lock</strong> = "Anyone can look at the whiteboard, but don't erase it." <strong>Exclusive lock</strong> = "Only I can write. Everyone else waits outside until I'm done."</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL / MariaDB:

-- Shared lock: others can READ but not WRITE
LOCK TABLES accounts READ;
-- Other sessions can SELECT but not INSERT/UPDATE/DELETE

-- Exclusive lock: only I can READ or WRITE
LOCK TABLES accounts WRITE;
-- Other sessions wait for the lock to release

-- Unlock (releases all locks):
UNLOCK TABLES;

-- PostgreSQL uses row-level locking by default
-- Explicit table-level lock:
LOCK TABLE accounts IN ACCESS EXCLUSIVE MODE;

-- Most DBs handle locking automatically — explicit locks
-- are rarely needed in well-designed applications` });
    sections.push({ type:'example', title:'Lock Table in Action',
      data:[], sql:"-- Session A:\nLOCK TABLES accounts WRITE;\n-- Now Session A has exclusive access\n\nUPDATE accounts SET balance = 0 WHERE id = 1;\n-- Session B tries to read:\n-- SELECT * FROM accounts;  → BLOCKED (waits)\n\nUNLOCK TABLES;\n-- Session B's query can now proceed\n\n-- AUTO-COMMIT must be disabled for LOCK TABLES to work\n-- Always release locks as quickly as possible!",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Best Practice</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Most databases handle locking automatically. Explicit <code>LOCK TABLE</code> is rarely needed. Overusing locks causes <strong>contention</strong> — other queries wait, performance drops. Let the database manage locks unless you have a specific reason not to.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LOCK TABLE</code> manually restricts access. <strong>READ</strong> lock = others can read but not write. <strong>WRITE</strong> lock = exclusive access. Locking is automatic in most DBs — only use explicit locks when you need precise control.</p>
      </div>` });
  }
  else if (topic.id === 'deadlocks') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>deadlock</strong> happens when two transactions each wait for a resource the <strong>other</strong> holds. Neither can proceed — they're stuck forever unless the database intervenes.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Two cars meet at a narrow bridge from opposite ends. Car A needs Car B to back up. Car B needs Car A to back up. <strong>Neither moves.</strong> The database acts like a traffic officer — it picks one car to "rollback" (reverse), letting the other pass.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Transaction A:
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;  -- locks row 1
UPDATE accounts SET balance = balance + 100 WHERE id = 2;  -- waits for row 2
COMMIT;

-- Transaction B (running at the same time):
BEGIN;
UPDATE accounts SET balance = balance - 50 WHERE id = 2;   -- locks row 2
UPDATE accounts SET balance = balance + 50 WHERE id = 1;   -- waits for row 1
COMMIT;

-- A holds row 1, needs row 2. B holds row 2, needs row 1.
-- DEADLOCK! Database kills one transaction, rolls it back.` });
    sections.push({ type:'example', title:'Deadlock Scenario',
      data:[], sql:"-- Session A:\nBEGIN;\nUPDATE accounts SET balance = 0 WHERE id = 1;  -- acquires lock on row 1\n-- Session A now needs row 2, but Session B has it...\nUPDATE accounts SET balance = 0 WHERE id = 2;\n-- Session A is now BLOCKED waiting for Session B\n\n-- Session B:\nBEGIN;\nUPDATE accounts SET balance = 0 WHERE id = 2;  -- acquires lock on row 2\n-- Session B now needs row 1, but Session A has it...\nUPDATE accounts SET balance = 0 WHERE id = 1;\n-- DEADLOCK! Database detects this and kills one session.\n\n-- One session gets: \"ERROR: deadlock detected\"\n-- The other session's transaction completes successfully.",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔍 How DBs Detect Deadlocks</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">The database maintains a <strong>wait-for graph</strong>: A waits for B, B waits for A → cycle detected. The DB kills the transaction that did the least work (cheapest to rollback).</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">🛡️ Prevention Tips</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Access resources in the <strong>same order</strong> everywhere (always update account 1 then 2, never 2 then 1). Keep transactions short. Use lower isolation levels when possible.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Deadlocks</strong> occur when transactions compete for the same resources in different orders. The database detects and kills one. <strong>Prevention</strong>: always access tables in the same order, keep transactions short, and handle deadlock errors gracefully with retry logic.</p>
      </div>` });
  }
  else if (topic.id === 'stored-procedures') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>stored procedure</strong> is a reusable block of SQL saved in the database. You call it by name — it can accept parameters, run multiple queries, and return results.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You have a recipe book. Instead of writing out "chop onions, sauté garlic, add tomatoes, simmer 20 min" every time, you call it <strong>"Make Sauce."</strong> A stored procedure is the same — save a complex operation once, call it by name.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL:
DELIMITER //
CREATE PROCEDURE TransferMoney(IN from_id INT, IN to_id INT, IN amount DECIMAL(10,2))
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    RESIGNAL;
  END;

  START TRANSACTION;
  UPDATE accounts SET balance = balance - amount WHERE id = from_id;
  UPDATE accounts SET balance = balance + amount WHERE id = to_id;
  COMMIT;
END//
DELIMITER ;

-- Call it:
CALL TransferMoney(1, 2, 100.00);

-- PostgreSQL:
CREATE OR REPLACE FUNCTION TransferMoney(from_id INT, to_id INT, amount DECIMAL)
RETURNS VOID AS $$
BEGIN
  UPDATE accounts SET balance = balance - amount WHERE id = from_id;
  UPDATE accounts SET balance = balance + amount WHERE id = to_id;
END;
$$ LANGUAGE plpgsql;` });
    sections.push({ type:'example', title:'Stored Procedure for Order Total',
      data:[], sql:"CREATE PROCEDURE GetOrderTotal(IN orderId INT, OUT total DECIMAL(10,2))\nBEGIN\n  SELECT SUM(quantity * price) INTO total\n  FROM order_items\n  WHERE order_id = orderId;\nEND;\n\nCALL GetOrderTotal(101, @total);\nSELECT @total AS total;\n\n-- Benefits:\n-- 1. Reusable — write once, call anywhere\n-- 2. Secure — users get procedure access, not table access\n-- 3. Network efficient — one CALL instead of multiple queries\n-- 4. Consistent — everyone uses the same logic",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Stored procedures</strong> package SQL logic into reusable, callable units. They support IN/OUT parameters, transactions, error handling, and conditional logic. Use for complex operations that run in the database (transfers, batch updates, reporting).</p>
      </div>` });
  }
  else if (topic.id === 'user-functions') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>user-defined function (UDF)</strong> is like a stored procedure that <strong>returns a value</strong>. You use it inside SQL expressions — SELECT, WHERE, even in other functions.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A calculator button. You click "√25" and get 5. You don't care how it computes the square root — you just need the <strong>result</strong>. A UDF is the same: give it inputs, get back a calculated value.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL (scalar function):
CREATE FUNCTION CalculateDiscountedPrice(
  price DECIMAL(10,2),
  discount_pct DECIMAL(5,2)
)
RETURNS DECIMAL(10,2)
DETERMINISTIC  -- same inputs → same output
BEGIN
  DECLARE discounted DECIMAL(10,2);
  SET discounted = price - (price * discount_pct / 100);
  RETURN discounted;
END;

-- Use it in queries:
SELECT id, name, price,
       CalculateDiscountedPrice(price, 15) AS sale_price
FROM products;

-- PostgreSQL:
CREATE FUNCTION calculate_discounted_price(
  price NUMERIC, discount_pct NUMERIC
) RETURNS NUMERIC AS $$
BEGIN
  RETURN price - (price * discount_pct / 100);
END;
$$ LANGUAGE plpgsql;` });
    sections.push({ type:'example', title:'UDF in Action',
      data:[
        { id:1, name:'Widget',  price:100.00 },
        { id:2, name:'Gadget',  price:250.00 },
        { id:3, name:'Doohickey', price:50.00 },
      ],
      sql:"CREATE FUNCTION TaxPlusShipping(base DECIMAL(10,2), rate DECIMAL(5,2))\nRETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  RETURN base * (1 + rate / 100) + 9.99;\nEND;\n\nSELECT name, price,\n       TaxPlusShipping(price, 8.5) AS final_total\nFROM products;",
      result:[
        { name:'Widget',  price:100.00, final_total:'118.49' },
        { name:'Gadget',  price:250.00, final_total:'281.24' },
        { name:'Doohickey', price:50.00, final_total:'64.24' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔑 Types of UDFs</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>Scalar</strong>: returns one value (e.g., calculated price). <strong>Table</strong>: returns a result set (use like a table in FROM). <strong>Aggregate</strong>: custom aggregate function.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Performance Tip</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Mark functions as <code>DETERMINISTIC</code> when possible — it lets the DB cache results and optimize better. Non-deterministic functions (e.g., using <code>NOW()</code>) are called per row.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>UDFs</strong> encapsulate reusable calculation logic. Declare input params, specify <code>RETURNS</code> type, implement the body. Examples: tax calculator, discount engine, formatting helpers. Use <code>DETERMINISTIC</code> for performance.</p>
      </div>` });
  }
  else if (topic.id === 'triggers') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>trigger</strong> is SQL code that <strong>automatically runs</strong> when a table event occurs — <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>. You can fire it <strong>before</strong> or <strong>after</strong> the event.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A motion sensor light. When someone enters the room (event), the light turns on automatically (trigger action). You don't flip a switch — the system responds for you.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL — BEFORE INSERT trigger:
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  -- Auto-set created_at timestamp
  SET NEW.created_at = NOW();

  -- Auto-validate email format
  IF NEW.email NOT LIKE '%@%.%' THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Invalid email format';
  END IF;
END;

-- AFTER INSERT trigger (for audit logging):
CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
  INSERT INTO audit_log(table_name, action, record_id, changed_at)
  VALUES ('employees', 'INSERT', NEW.id, NOW());
END;` });
    sections.push({ type:'example', title:'Trigger for Salary History',
      data:[
        { id:1, name:'Alice', salary:55000 },
      ],
      sql:"-- Audit log table:\nCREATE TABLE salary_audit (\n  employee_id INT, old_salary DECIMAL(10,2),\n  new_salary DECIMAL(10,2), changed_at TIMESTAMP\n);\n\n-- Trigger to track salary changes:\nCREATE TRIGGER track_salary_change\nAFTER UPDATE ON employees\nFOR EACH ROW\nBEGIN\n  IF OLD.salary <> NEW.salary THEN\n    INSERT INTO salary_audit(employee_id, old_salary, new_salary, changed_at)\n    VALUES (NEW.id, OLD.salary, NEW.salary, NOW());\n  END IF;\nEND;\n\n-- Now when salary changes:\nUPDATE employees SET salary = 60000 WHERE id = 1;\n-- The trigger automatically logs:\n-- Alice: $55,000 → $60,000",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">⏱ BEFORE vs AFTER</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>BEFORE</strong>: validate/modify data before it's written. <strong>AFTER</strong>: react after data is committed (audit, sync, notifications).</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔗 FOR EACH ROW vs STATEMENT</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>FOR EACH ROW</strong>: fires per affected row (e.g., 10 rows = 10 triggers). <strong>FOR EACH STATEMENT</strong>: fires once per SQL statement (e.g., 10-row UPDATE = 1 trigger).</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Triggers</strong> automate database reactions: validation, auditing, cascading changes, sync. Use <code>BEFORE</code> for enforcement (check before write), <code>AFTER</code> for reactions (log after write). Avoid complex trigger chains — they're hard to debug.</p>
      </div>` });
  }
  else if (topic.id === 'cursors') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>cursor</strong> lets you process query results <strong>row by row</strong> inside a stored procedure. Instead of getting all results at once, you fetch one row, process it, fetch the next.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're checking items off a shopping list. You look at item 1, decide if you need it, cross it off. Then item 2, then item 3. A cursor works the same — fetch → process → fetch next → repeat until done.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Stored procedure with cursor:
CREATE PROCEDURE ApplyBonus(bonus_amount DECIMAL(10,2))
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE emp_salary DECIMAL(10,2);

  -- 1. Declare cursor (the query)
  DECLARE emp_cursor CURSOR FOR
    SELECT id, salary FROM employees WHERE active = 1;

  -- 2. Handler to detect end of results
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  -- 3. Open the cursor
  OPEN emp_cursor;

  -- 4. Loop through each row
  read_loop: LOOP
    FETCH emp_cursor INTO emp_id, emp_salary;
    IF done THEN
      LEAVE read_loop;
    END IF;

    -- 5. Process this row
    UPDATE employees
    SET salary = salary + bonus_amount
    WHERE id = emp_id;
  END LOOP;

  -- 6. Close the cursor
  CLOSE emp_cursor;
END;` });
    sections.push({ type:'example', title:'Cursor for Processing Orders',
      data:[], sql:"CREATE PROCEDURE ShipPendingOrders()\nBEGIN\n  DECLARE done INT DEFAULT FALSE;\n  DECLARE order_id_val INT;\n  \n  DECLARE order_cursor CURSOR FOR\n    SELECT id FROM orders WHERE status = 'pending';\n  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;\n  \n  OPEN order_cursor;\n  \n  process_loop: LOOP\n    FETCH order_cursor INTO order_id_val;\n    IF done THEN LEAVE process_loop; END IF;\n    \n    UPDATE orders SET status = 'shipped', shipped_at = NOW()\n    WHERE id = order_id_val;\n    \n    -- Could add inventory deduction, invoice, notification here\n  END LOOP;\n  \n  CLOSE order_cursor;\nEND;\n\nCALL ShipPendingOrders();\n-- Iterates every 'pending' order and marks it 'shipped'",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔄 Cursor Lifecycle</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>DECLARE</strong> → define the query. <strong>OPEN</strong> → execute query, prepare results. <strong>FETCH</strong> → get next row. <strong>CLOSE</strong> → release resources. Always close when done!</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Performance Warning</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Cursors are <strong>slow</strong> — row-by-row processing is far less efficient than set-based SQL (a single UPDATE with JOIN). Use cursors only when you MUST process each row individually.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Cursors</strong> process query results row by row in stored procedures. Steps: DECLARE → OPEN → FETCH in loop → CLOSE. Use sparingly — set-based SQL (UPDATE with subquery, joins) is almost always faster.</p>
      </div>` });
  }
  else if (topic.id === 'dynamic-sql') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Dynamic SQL</strong> builds and executes SQL statements <strong>on the fly</strong> as strings. Use it when you don't know the query structure ahead of time — dynamic table names, dynamic conditions, or reporting tools.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're ordering at a diner with a build-your-own menu. You pick a base (burger, bowl, wrap), then toppings, then sauce. The kitchen doesn't have a fixed recipe — they <strong>assemble</strong> your order from your choices. Dynamic SQL is the same: assemble a query from user choices at runtime.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL:
SET @table_name = 'employees';
SET @column_name = 'salary';
SET @condition = 'department_id = 3';

SET @sql = CONCAT(
  'SELECT ', @column_name,
  ' FROM ', @table_name,
  ' WHERE ', @condition
);

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- PostgreSQL:
EXECUTE FORMAT(
  'SELECT %I FROM %I WHERE %I = $1',
  'salary', 'employees', 'department_id'
) USING 3;` });
    sections.push({ type:'example', title:'Dynamic Search Filter',
      data:[], sql:"CREATE PROCEDURE SearchUsers(\n  IN search_col VARCHAR(50),\n  IN search_val VARCHAR(100)\n)\nBEGIN\n  SET @sql = CONCAT(\n    'SELECT id, name, email FROM users WHERE ',\n    search_col, ' LIKE ''%', search_val, '%'''\n  );\n  \n  PREPARE stmt FROM @sql;\n  EXECUTE stmt;\n  DEALLOCATE PREPARE stmt;\nEND;\n\n-- Call with different columns at runtime:\nCALL SearchUsers('name', 'Alice');\nCALL SearchUsers('email', '@example.com');",
      result:[]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ SQL Injection Risk</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Building SQL from user input is dangerous! Always use <strong>parameterized queries</strong> (<code>PREPARE ... USING</code>) or quote identifiers with <code>QUOTENAME()</code> / <code>quote_ident()</code>. Never concatenate user input directly.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ When To Use</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Dynamic reporting (user picks columns/table). Admin tools (backup/restore across tables). ETL pipelines (source/target vary). Schema migration generators.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Dynamic SQL</strong> builds queries at runtime using string concatenation. Powerful for flexible tools but <strong>risky</strong> — SQL injection is the #1 vulnerability. <strong>Always</strong> use prepared statements or proper escaping when handling user input.</p>
      </div>` });
  }
  else if (topic.id === 'explain-plan') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><code>EXPLAIN</code> shows the <strong>execution plan</strong> the database chooses for your query — which indexes it uses, join order, scan types, and cost estimates. It's your #1 tool for performance debugging.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You ask Google Maps for the fastest route. It shows you the turn-by-turn plan: "Take highway, exit 12, turn left, arrive in 25 min." That's EXPLAIN for your query — the database shows you <strong>exactly</strong> how it plans to execute it.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Basic EXPLAIN (shows plan without running query):
EXPLAIN SELECT u.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.city = 'London'
ORDER BY o.amount DESC;

-- Output might show:
-- Seq Scan on users (cost=0.00..12.00 rows=1)  → slow!
--   Filter: (city = 'London')
-- Hash Join (cost=14.00..18.00 rows=5)
--   -> Seq Scan on orders (cost=0.00..8.00 rows=8)

-- With index, plan improves:
-- Index Scan on idx_users_city (cost=0.25..2.00 rows=1)
--   -> Nested Loop (cost=2.00..6.00 rows=5)
--     -> Index Scan on idx_orders_user_id (cost=0.25..3.00 rows=5)

-- ANALYZE runs the query too (shows actual vs estimated):
EXPLAIN ANALYZE SELECT * FROM orders WHERE amount > 100;` });
    sections.push({ type:'example', title:'Reading an Execution Plan',
      data:[], sql:"EXPLAIN ANALYZE\nSELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at > '2024-01-01'\nGROUP BY u.name\nHAVING COUNT(o.id) > 3;",
      result:[
        { id:'Step 1', type:'Index Scan', object:'idx_users_date', cost:'0.25..12.00', rows:50, actual:'51', detail:'Filters users created after 2024-01-01'},
        { id:'Step 2', type:'Hash Join', object:'(inner) orders', cost:'12.00..30.00', rows:50, actual:'48', detail:'Hashes orders.user_id for lookup'},
        { id:'Step 3', type:'HashAggregate', object:'GROUP BY name', cost:'30.00..35.00', rows:10, actual:'8', detail:'Groups and counts per user'},
        { id:'Step 4', type:'Filter', object:'HAVING count > 3', cost:'35.00..36.00', rows:5, actual:'3', detail:'Keeps only users with 3+ orders'},
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Red Flags in Plans</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Look for <strong>Seq Scan</strong> on large tables (bad), <strong>nested loops</strong> without index, <strong>rows estimate</strong> far off from actual, and <strong>Sort</strong> without index. These indicate missing indexes or bad query design.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ What to Look For</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Prefer <strong>Index Scan</strong> over Seq Scan. <strong>Hash Join</strong> is good for medium tables. <strong>Merge Join</strong> for sorted data. <strong>Index Only Scan</strong> is ideal (covers all columns). Plans read inside-out, bottom-up.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>EXPLAIN</code> reveals the database's query plan — scan type, join method, cost estimates, actual vs estimated rows. Use <code>EXPLAIN ANALYZE</code> to run and measure. Read plans inside-out, look for Seq Scans on large tables as performance red flags.</p>
      </div>` });
  }
  else if (topic.id === 'query-optimization') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Query optimization</strong> is the art of rewriting SQL to run faster. Small changes — adding an index, rewriting a join, avoiding functions in WHERE — can turn a 30-second query into a millisecond query.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Two people shopping: one walks aisle by aisle reading every label (slow). The other checks the store map, goes directly to the right aisles, and checks out (fast). Query optimization is giving your database a <strong>store map</strong> instead of making it scan every shelf.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ❌ SLOW: function on indexed column
SELECT * FROM orders WHERE YEAR(created_at) = 2024;
-- This can't use the index on created_at!

-- ✅ FAST: use range comparison instead
SELECT * FROM orders
WHERE created_at >= '2024-01-01'
  AND created_at < '2025-01-01';
-- Index on created_at CAN be used

-- ❌ SLOW: implicit type conversion
SELECT * FROM users WHERE phone_number = 5551234;
-- phone_number is VARCHAR, index won't be used

-- ✅ FAST: match the column type
SELECT * FROM users WHERE phone_number = '555-1234';` });
    sections.push({ type:'example', title:'Before and After Optimization',
      data:[], sql:"-- 🔴 BEFORE (slow — runs table scan + full sort):\nSELECT id, name, email\nFROM users\nWHERE YEAR(created_at) = 2023\nORDER BY RAND()\nLIMIT 10;\n-- This filters with YEAR() (can't use index)\n-- then picks 10 random rows (sorts entire result set!)\n\n-- 🟢 AFTER (fast — uses index + avoids full sort):\nSELECT id, name, email\nFROM users\nWHERE created_at >= '2023-01-01'\n  AND created_at < '2024-01-01'\nORDER BY created_at DESC\nLIMIT 10;\n-- Uses index on created_at, sorts only 10 rows",
      result:[
        { technique:'Bad Query', 'Execution Time':'~2,800 ms', 'Rows Examined':'500,000', 'Index Used':'No (Seq Scan)' },
        { technique:'Optimized', 'Execution Time':'~3 ms', 'Rows Examined':'10', 'Index Used':'Yes (Index Scan)' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 1. Sargable WHERE</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Don't wrap columns in functions: <code>col = 5</code> 🟢, <code>FUNC(col) = 5</code> 🔴.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 2. Covering Indexes</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Include all SELECT columns in the index to avoid table lookups.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 3. Avoid SELECT *</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Only fetch columns you need. Less I/O = faster queries.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Query optimization</strong> is about making WHERE clauses <strong>sargable</strong> (index-friendly), reducing data scanned, and choosing efficient join methods. Small rewrites = huge speedups. Always check with <code>EXPLAIN</code>.</p>
      </div>` });
  }
  else if (topic.id === 'indexing-strategies') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Indexing strategies</strong> decide which columns to index and what <strong>type</strong> of index to use. A good index makes queries fly; a bad index wastes space and slows writes.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A library index card system. You can index by <strong>author</strong>, <strong>title</strong>, or <strong>subject</strong>. A composite index (author + title) is like a drawer organized by last name, then first name within each — you can find "Smith, John" instantly but not "anyone named John".</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Single-column index (simplest):
CREATE INDEX idx_users_email ON users(email);

-- Composite index (multiple columns, order matters!):
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
-- Great for: WHERE user_id = ? AND created_at > ?
-- NOT helpful for: WHERE created_at > ? (user_id must come first)

-- Partial index (only some rows):
CREATE INDEX idx_active_users ON users(email) WHERE active = 1;

-- Unique index (enforces uniqueness + speeds lookups):
CREATE UNIQUE INDEX idx_unique_username ON users(username);

-- Covering index (includes extra columns to avoid table lookup):
CREATE INDEX idx_covering ON users(city, status) INCLUDE (name, email);` });
    sections.push({ type:'example', title:'Which Index to Choose?',
      data:[], sql:"-- Query pattern:\nSELECT id, name, email\nFROM users\nWHERE city = 'London'\nORDER BY created_at DESC\nLIMIT 20;\n\n-- ❌ BAD index on ORDER BY column alone:\nCREATE INDEX idx_created ON users(created_at);\n-- Can't filter by city, still scans many rows\n\n-- ❌ BAD composite with wrong order:\nCREATE INDEX idx_city_created ON users(created_at, city);\n-- created_at leads, can't use index for city filter\n\n-- ✅ GOOD: filter column first, sort column second:\nCREATE INDEX idx_city_created ON users(city, created_at DESC);\n-- Quickly finds all London users, already sorted by date",
      result:[
        { strategy:'Index Type', when:'Use Case', downside:'Trade-off' },
        { strategy:'Single-column', when:'Filter by one column', downside:'Only helps one query pattern' },
        { strategy:'Composite (filter col first)', when:'Multi-condition WHERE', downside:'Order matters; reordering columns breaks it' },
        { strategy:'Partial', when:'Filter on a subset (e.g., active=1)', downside:'Only helps if condition matches' },
        { strategy:'Covering (INCLUDE)', when:'Index has all needed columns', downside:'Larger index, slower writes' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Composite Index Column Order</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Put <strong>equality</strong> columns first (<code>WHERE city = 'London'</code>), then <strong>range</strong> columns (<code>WHERE created_at > '2024'</code>), then <strong>ORDER BY</strong> columns. The index matches leftmost columns — a 3-column index on <code>(a, b, c)</code> helps queries on <code>a</code>, <code>a+b</code>, and <code>a+b+c</code>, but NOT <code>b</code> alone or <code>b+c</code>.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Index strategy</strong> is about matching your index to your query patterns. Equality cols first → range cols → sort cols. Composite indexes help multiple queries but column order is critical. Too many indexes hurt INSERT/UPDATE performance.</p>
      </div>` });
  }
  else if (topic.id === 'index-maintenance') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Index maintenance</strong> keeps your indexes healthy over time. As rows are inserted, updated, and deleted, indexes can become <strong>bloated</strong> or <strong>fragmented</strong>, slowing down queries.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A filing cabinet where you keep adding new papers. Over time, the folders bulge, papers get out of order, and finding anything takes longer. <strong>Rebuilding</strong> the index is like reorganizing the cabinet — everything neat and fast again.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Check index fragmentation (PostgreSQL):
SELECT schemaname, tablename, indexname,
       pg_size_pretty(pg_relation_size(indexrelid)) AS size,
       percent_scan  -- % of index that's dead tuples
FROM pg_stat_user_indexes
WHERE idx_scan > 0
ORDER BY percent_scan DESC;

-- Rebuild an index (PostgreSQL):
REINDEX INDEX idx_users_email;
-- Or all indexes on a table:
REINDEX TABLE users;

-- MySQL / MariaDB:
OPTIMIZE TABLE users;  -- rebuilds indexes + reclaims space

-- SQL Server:
ALTER INDEX idx_users_email ON users REBUILD;

-- SQLite:
REINDEX;` });
    sections.push({ type:'example', title:'When Maintenance Matters',
      data:[], sql:"-- Check fragmentation level (MySQL):\nSELECT table_name, index_name,\n       ROUND(stat_value * @@innodb_page_size / 1024, 2) AS index_size_kb\nFROM mysql.innodb_index_stats\nWHERE stat_name = 'size' AND table_name = 'users';\n\n-- Rule of thumb for maintenance:\n-- < 10% fragmentation → OK, no action needed\n-- 10-30% fragmentation → consider reorganizing\n-- > 30% fragmentation → rebuild needed!\n\n-- Scheduled maintenance (cron / event):\n-- Daily: REINDEX TABLE high_churn_tables;\n-- Weekly: REINDEX DATABASE production;\n-- Monthly: full OPTIMIZE on all tables",
      result:[
        { metric:'After 100k inserts', bloat:'~5%', action:'None needed' },
        { metric:'After 1M updates', bloat:'~22%', action:'Reindex recommended' },
        { metric:'After mass DELETE (50%)', bloat:'~45%', action:'REINDEX required' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔄 Rebuild vs Reorganize</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>REBUILD</strong> = create new index from scratch (drops old, builds new). <strong>REORGANIZE</strong> = defrag in place (less locking, incremental). Use REORGANIZE during business hours, REBUILD during maintenance windows.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Locking Impact</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><code>REINDEX</code> locks the table against writes. Use <code>CONCURRENTLY</code> (PostgreSQL) or schedule during low traffic. MySQL's <code>OPTIMIZE</code> also locks — use replication or online DDL tools.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Index maintenance</strong> prevents performance degradation. Monitor fragmentation, rebuild when > 30%. Schedule during low traffic. <code>REINDEX</code> / <code>OPTIMIZE TABLE</code> are the main tools. High-churn tables need more frequent maintenance.</p>
      </div>` });
  }
  else if (topic.id === 'partitioning') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Table partitioning</strong> splits a large table into smaller, manageable <strong>partitions</strong> while keeping the logical view of a single table. Queries that filter on the partition key only scan relevant partitions.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A filing cabinet with labeled drawers: "Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec". When you need February's receipts, you only open the <strong>first drawer</strong>, not all four. Partitioning is the same — data is physically separated but logically unified.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL — Range Partitioning by date:
CREATE TABLE orders (
  id INT, created_at DATE, amount DECIMAL, customer_id INT
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024_q1 PARTITION OF orders
  FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
CREATE TABLE orders_2024_q2 PARTITION OF orders
  FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');
CREATE TABLE orders_2024_q3 PARTITION OF orders
  FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');
CREATE TABLE orders_2024_q4 PARTITION OF orders
  FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');

-- Queries are transparent — same SQL:
SELECT * FROM orders WHERE created_at BETWEEN '2024-02-01' AND '2024-02-28';
-- Only scans orders_2024_q1 partition!` });
    sections.push({ type:'example', title:'Partitioning Types',
      data:[], sql:"-- 🔵 RANGE: by date range, ID range, etc.\nCREATE TABLE sales (\n  id INT, sale_date DATE, amount DECIMAL\n) PARTITION BY RANGE (sale_date);\n\n-- 🟢 LIST: by discrete values\nCREATE TABLE users (\n  id INT, name TEXT, country_code CHAR(2)\n) PARTITION BY LIST (country_code);\nCREATE TABLE users_us PARTITION OF users FOR VALUES IN ('US');\nCREATE TABLE users_eu PARTITION OF users FOR VALUES IN ('GB','DE','FR','IT');\n\n-- 🟡 HASH: distribute evenly across N partitions\nCREATE TABLE logs (\n  id INT, level TEXT, message TEXT, logged_at TIMESTAMP\n) PARTITION BY HASH (id);\nCREATE TABLE logs_p0 PARTITION OF logs FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE logs_p1 PARTITION OF logs FOR VALUES WITH (MODULUS 4, REMAINDER 1);\nCREATE TABLE logs_p2 PARTITION OF logs FOR VALUES WITH (MODULUS 4, REMAINDER 2);\nCREATE TABLE logs_p3 PARTITION OF logs FOR VALUES WITH (MODULUS 4, REMAINDER 3);",
      result:[
        { type:'RANGE', use_case:'Date-based data (orders, logs)', benefits:'Easy archiving — drop old partitions' },
        { type:'LIST', use_case:'Categorical data (regions, types)', benefits:'Query by category only scans relevant partition' },
        { type:'HASH', use_case:'Even distribution (IDs, hashes)', benefits:'Writes spread across partitions, no hot spots' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Benefits</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Faster queries (partition pruning). Easy archiving (DROP whole partition). Parallel scans. Smaller indexes per partition. Bulk delete without locking the whole table.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Caveats</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Not all constraints/indexes work cross-partition. <code>UNIQUE</code> indexes must include the partition key. Too many partitions can hurt performance. Schema changes affect all partitions.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Partitioning</strong> splits big tables into smaller physical chunks. <code>RANGE</code> for dates, <code>LIST</code> for categories, <code>HASH</code> for distribution. Queries filter on the partition key to scan only relevant partitions. Great for time-series data and archiving.</p>
      </div>` });
  }
  else if (topic.id === 'query-hints') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Query hints</strong> are instructions you give the database optimizer to override its default plan. Use them when the optimizer picks a <strong>bad plan</strong> and you know better — but use sparingly.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">GPS navigation. Normally it picks the best route automatically. But if you know there's a traffic jam ahead, you tell it "avoid this road." Query hints are like that — you override the optimizer's automatic choice with your knowledge.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL — FORCE INDEX:
SELECT * FROM orders
FORCE INDEX (idx_created_at)
WHERE created_at > '2024-01-01';

-- MySQL — USE INDEX / IGNORE INDEX:
SELECT * FROM orders
USE INDEX (idx_user_id)
WHERE user_id = 5;

-- PostgreSQL — no hints! But you can influence:
SET enable_seqscan = OFF;  -- discourage sequential scans
SET enable_hashjoin = OFF; -- discourage hash joins

-- SQL Server — table hint:
SELECT * FROM orders WITH (INDEX(idx_created_at))
WHERE created_at > '2024-01-01';

-- Oracle — optimizer hint (the most powerful):
SELECT /*+ INDEX(orders idx_created_at) */ *
FROM orders
WHERE created_at > '2024-01-01';` });
    sections.push({ type:'example', title:'When Hints Help and Hurt',
      data:[], sql:"-- Scenario: query that uses wrong index\n\n-- 🔴 Without hint (optimizer picks index on status):\nSELECT * FROM orders\nWHERE status = 'shipped' AND created_at > '2024-06-01';\n-- Picks idx_status → 50k shipped rows → slow filter on date\n-- (3,200 ms)\n\n-- 🟢 With hint:\nSELECT * FROM orders\nFORCE INDEX (idx_created_at)\nWHERE status = 'shipped' AND created_at > '2024-06-01';\n-- Picks idx_created_at → 1k recent rows → fast filter on status\n-- (45 ms)\n\n-- ⚠️ Danger: data changes, now idx_created_at is wrong!\n-- Hints force a plan that may become bad over time",
      result:[
        { approach:'No hint (default plan)', 'Execution Time':'3,200 ms', 'Rows Scanned':'52,000', 'Risk':'None (adapts to data)' },
        { approach:'FORCE INDEX hint', 'Execution Time':'45 ms', 'Rows Scanned':'1,200', 'Risk':'Plan may become outdated' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Hints Are a Last Resort</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">First try: adding indexes, rewriting queries, updating statistics. Hints <strong>freeze</strong> a plan — as data grows, the hinted plan may become terrible. Hint now, pay later.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ When to Hint</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">The optimizer consistently picks a bad plan. Statistics are up to date. You've tested the hint thoroughly. You monitor the hinted query regularly. You have a plan to fix the root cause.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Query hints</strong> override the optimizer. Syntax differs by DB: <code>FORCE INDEX</code> (MySQL), <code>WITH (INDEX(...))</code> (SQL Server), <code>/*+ */</code> (Oracle). PostgreSQL doesn't support hints directly. Use hints as a <strong>temporary fix</strong> while you address the root cause.</p>
      </div>` });
  }
  else if (topic.id === 'optimizer-basics') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <strong>query optimizer</strong> decides <strong>how</strong> to execute your SQL. It considers multiple plans and picks the cheapest. Older databases used <strong>rule-based</strong> optimization (RBO); modern ones use <strong>cost-based</strong> optimization (CBO).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);"><strong>RBO</strong> = a cookbook with fixed rules: "Always use the index if one exists." <strong>CBO</strong> = a chef who tastes the soup, reads the recipe, checks the time — then decides: "Actually, this soup is almost done, let's just simmer." CBO is smarter because it uses <strong>actual data statistics</strong>.</p>
      </div>` });
    sections.push({ type:'example', title:'CBO vs RBO Decision Making',
      data:[], sql:"-- Same query, different optimizer decisions:\nSELECT * FROM orders WHERE status = 'pending';\n\n-- RBO (Rule-Based):\n-- 'Always use index on status if it exists'\n-- Result: uses idx_status index\n-- Problem: 90% of orders are 'pending'! Index scan is SLOWER\n--         than just scanning the whole table\n\n-- CBO (Cost-Based):\n-- Checks statistics: status='pending' → 900k of 1M rows (90%)\n-- Full table scan cost: 100\n-- Index scan cost: 1000 (900k lookups + random I/O)\n-- Decision: Full table scan (cheaper!)\n\n-- CBO with different stats:\n-- status='shipped' → 50k of 1M rows (5%)\n-- Full table scan cost: 100\n-- Index scan cost: 10 (much cheaper!)\n-- Decision: Index scan 🟢",
      result:[
        { 'Condition':'status = pending (90%)', 'RBO Plan':'Index Scan', 'CBO Plan':'Full Table Scan', 'Winner':'CBO 🏆' },
        { 'Condition':'status = shipped (5%)', 'RBO Plan':'Index Scan', 'CBO Plan':'Index Scan', 'Winner':'Tie 🤝' },
        { 'Condition':'No index on status', 'RBO Plan':'Full Table Scan', 'CBO Plan':'Full Table Scan', 'Winner':'Tie 🤝' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">📊 How CBO Estimates Cost</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Uses table statistics: row count, data distribution (histograms), index depth, distinct values, physical storage size. Cost = (I/O cost × I/O weight) + (CPU cost × CPU weight).</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Stale Statistics</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">CBO is only as good as its statistics. After large INSERT/UPDATE/DELETE, run <code>ANALYZE TABLE</code> or <code>UPDATE STATISTICS</code>. Stale stats = bad plans. Automate with <code>autovacuum</code> (PostgreSQL) or maintenance jobs.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Cost-Based Optimizer (CBO)</strong> uses table statistics to pick the cheapest query plan. <strong>Rule-Based (RBO)</strong> follows fixed rules regardless of data size. Modern databases (PostgreSQL, MySQL 8+, SQL Server) all use CBO. Keep statistics updated for optimal plans.</p>
      </div>` });
  }
  else if (topic.id === 'normalization-1nf') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>First Normal Form (1NF)</strong> is the most basic level of normalization. It ensures data is <strong>atomic</strong> — each cell holds one value, not a list.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A contact form has one field for "Phone Number". If someone writes "555-0100, 555-0200, 555-0300", that phone field violates 1NF — it should be three separate rows. 1NF says: <strong>one value per cell, no lists allowed</strong>.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ❌ VIOLATES 1NF (multiple values in one column):
CREATE TABLE contacts (
  id     INT PRIMARY KEY,
  name   VARCHAR(100),
  phones VARCHAR(255)  -- "555-0100,555-0200" — not atomic!
);

-- ✅ 1NF COMPLIANT (separate rows per phone):
CREATE TABLE contacts (
  id   INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE contact_phones (
  contact_id INT,
  phone      VARCHAR(20),
  PRIMARY KEY (contact_id, phone),
  FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

-- Now we can query each phone individually:
SELECT c.name, cp.phone
FROM contacts c
JOIN contact_phones cp ON c.id = cp.contact_id
WHERE cp.phone = '555-0100';` });
    sections.push({ type:'example', title:'1NF: Before and After',
      data:[], sql:"-- 🔴 BEFORE (1NF violation):\nCREATE TABLE courses (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  students VARCHAR(255)  -- 'Alice,Bob,Charlie'\n);\n-- Problems: can't find 'Alice' without string matching,\n-- can't add a student without rewriting whole string\n\n-- 🟢 AFTER (1NF compliant):\nCREATE TABLE courses (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\nCREATE TABLE enrollments (\n  course_id   INT,\n  student_name VARCHAR(50),\n  PRIMARY KEY (course_id, student_name),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);\n\nSELECT * FROM enrollments WHERE student_name = 'Alice';  -- 🟢 works!",
      result:[
        { rule:'Atomic values', example:'phones: "555-0100,555-0200"', impact:'Cannot search or index individual phone numbers' },
        { rule:'Unique rows', example:'Duplicate rows with no PK', impact:'Cannot identify a specific record' },
        { rule:'Same type per column', example:'phone column mixing mobile + landline', impact:'Cannot sort or filter by phone type' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>1NF</strong> = atomic values + unique rows + single-type columns. If a column stores multiple values (comma-separated, JSON array, etc.), split into a child table. This is the foundation of all normalization.</p>
      </div>` });
  }
  else if (topic.id === 'normalization-2nf') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Second Normal Form (2NF)</strong> builds on 1NF. It removes <strong>partial dependencies</strong> — when a non-key column depends on only <strong>part</strong> of a composite primary key.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A school schedule table has <code>(student_id, course_id)</code> as the key. The <strong>course name</strong> only depends on <code>course_id</code>, not on which student takes it. If a student drops the course, you'd lose the course name! 2NF says: <strong>split that into its own table</strong>.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ❌ VIOLATES 2NF (partial dependency with composite PK):
CREATE TABLE enrollments (
  student_id   INT,
  course_id    INT,
  student_name VARCHAR(100),  -- depends ONLY on student_id
  course_name  VARCHAR(100),  -- depends ONLY on course_id
  grade        CHAR(1),       -- depends on BOTH (good!)
  PRIMARY KEY (student_id, course_id)
);

-- ✅ 2NF COMPLIANT (split the partial dependencies):
CREATE TABLE students (
  id   INT PRIMARY KEY,
  name VARCHAR(100)
);
CREATE TABLE courses (
  id   INT PRIMARY KEY,
  name VARCHAR(100)
);
CREATE TABLE enrollments (
  student_id INT REFERENCES students(id),
  course_id  INT REFERENCES courses(id),
  grade      CHAR(1),
  PRIMARY KEY (student_id, course_id)
);` });
    sections.push({ type:'example', title:'2NF: Identify the Partial Dependency',
      data:[], sql:"-- 🔴 BEFORE (2NF violation):\n-- Table: order_items with PK (order_id, product_id)\nCREATE TABLE order_items (\n  order_id     INT,\n  product_id   INT,\n  product_name VARCHAR(100),  -- depends ONLY on product_id!\n  quantity     INT,           -- depends on BOTH (good)\n  order_date   DATE,          -- depends ONLY on order_id!\n  PRIMARY KEY (order_id, product_id)\n);\n\n-- 🟢 AFTER (2NF compliant):\nCREATE TABLE products (\n  id   INT PRIMARY KEY,\n  name VARCHAR(100)\n);\nCREATE TABLE orders (\n  id   INT PRIMARY KEY,\n  date DATE\n);\nCREATE TABLE order_items (\n  order_id   INT REFERENCES orders(id),\n  product_id INT REFERENCES products(id),\n  quantity   INT,\n  PRIMARY KEY (order_id, product_id)\n);",
      result:[
        { column:'product_name', dependency:'product_id only', type:'Partial ❌', fix:'Move to products table' },
        { column:'order_date', dependency:'order_id only', type:'Partial ❌', fix:'Move to orders table' },
        { column:'quantity', dependency:'order_id + product_id', type:'Full ✅', fix:'Keep in order_items' },
        { column:'grade', dependency:'student_id + course_id', type:'Full ✅', fix:'Keep in enrollments' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>2NF</strong> eliminates partial dependencies. For tables with composite keys, every non-key column must depend on <strong>all</strong> parts of the key, not just some. Otherwise, split into separate tables.</p>
      </div>` });
  }
  else if (topic.id === 'normalization-3nf') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Third Normal Form (3NF)</strong> removes <strong>transitive dependencies</strong> — when a non-key column depends on another <strong>non-key</strong> column instead of directly on the primary key.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">An employee table has <code>employee_id → department_id → department_name</code>. The department name depends on the department, <strong>not</strong> the employee. If the department moves, you update it in one place, not every employee. 3NF says: <strong>no A → B → C chains</strong>.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ❌ VIOLATES 3NF (transitive dependency):
CREATE TABLE employees (
  id              INT PRIMARY KEY,
  name            VARCHAR(100),
  department_id   INT,
  department_name VARCHAR(100),  -- depends on department_id, NOT on id!
  department_city VARCHAR(100)   -- also depends on department_id
);

-- If a department changes its name, you must update EVERY employee row.
-- If the last employee in a department leaves, you lose the department info!

-- ✅ 3NF COMPLIANT:
CREATE TABLE departments (
  id   INT PRIMARY KEY,
  name VARCHAR(100),
  city VARCHAR(100)
);
CREATE TABLE employees (
  id            INT PRIMARY KEY,
  name          VARCHAR(100),
  department_id INT REFERENCES departments(id)
);` });
    sections.push({ type:'example', title:'3NF: Breaking the Chain',
      data:[], sql:"-- 🔴 BEFORE (3NF violation):\nCREATE TABLE orders (\n  id            INT PRIMARY KEY,\n  customer_id   INT,\n  customer_name VARCHAR(100),  -- depends on customer_id, not order_id!\n  product_id    INT,\n  product_name  VARCHAR(100),  -- depends on product_id, not order_id!\n  quantity      INT\n);\n-- If Alice changes her name, every order row for Alice needs updating.\n-- If product 'Widget' is renamed, every order row with Widget changes.\n\n-- 🟢 AFTER (3NF compliant):\nCREATE TABLE customers (\n  id   INT PRIMARY KEY,\n  name VARCHAR(100)\n);\nCREATE TABLE products (\n  id   INT PRIMARY KEY,\n  name VARCHAR(100)\n);\nCREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  product_id  INT REFERENCES products(id),\n  quantity    INT\n);",
      result:[
        { dependency:'transitive', 'Before':'customer_name in orders', 'After':'customers.name', benefit:'Update once, all orders reflect it' },
        { dependency:'transitive', 'Before':'product_name in orders', 'After':'products.name', benefit:'No inconsistent data across orders' },
        { dependency:'direct', 'Before':'quantity in orders', 'After':'quantity in orders', benefit:'Already 3NF — depends on order_id' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>3NF</strong> eliminates transitive dependencies: non-key columns must depend <strong>only</strong> on the primary key, not on other non-key columns. Rule of thumb: if a column describes something other than the table's main entity, it belongs in its own table.</p>
      </div>` });
  }
  else if (topic.id === 'bcnf') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Boyce-Codd Normal Form (BCNF)</strong> is a stricter version of 3NF. A table is in BCNF if for <strong>every</strong> functional dependency X → Y, X must be a <strong>superkey</strong> (a column or set of columns that uniquely identifies a row).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A library assigns each book to one shelf. The rule is: <strong>one shelf, one librarian</strong>. But a librarian can manage multiple shelves. If you put <code>(book, shelf, librarian)</code> in one table, the dependency <code>shelf → librarian</code> violates BCNF because <code>shelf</code> is not a unique identifier for the row.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ❌ VIOLATES BCNF (shelf → librarian, but shelf isn't a superkey):
CREATE TABLE library_books (
  book_id   INT PRIMARY KEY,
  shelf     VARCHAR(10),
  librarian VARCHAR(100)
  -- Each shelf has one librarian.
  -- But shelf doesn't uniquely identify a row (multiple books per shelf).
  -- shelf → librarian violates BCNF
);

-- ✅ BCNF COMPLIANT (split into two tables):
CREATE TABLE shelves (
  id        VARCHAR(10) PRIMARY KEY,
  librarian VARCHAR(100)
);
CREATE TABLE library_books (
  book_id  INT PRIMARY KEY,
  shelf_id VARCHAR(10) REFERENCES shelves(id)
);` });
    sections.push({ type:'example', title:'BCNF vs 3NF — The Difference',
      data:[], sql:"-- Consider: student can take multiple subjects,\n-- each subject taught by one professor,\n-- a professor teaches only one subject.\n\n-- Table: enrollments (student_id, subject, professor)\n-- Dependencies:\n--   student_id + subject → professor  (a student in a subject → professor)\n--   subject → professor               (NOT a superkey! violates BCNF)\n--   professor → subject               (also: professor determines subject)\n\n-- This table IS in 3NF (no transitive deps) but NOT in BCNF:\n-- subject → professor exists, but subject is NOT a superkey.\n\n-- ✅ BCNF solution:\nCREATE TABLE subjects (\n  name VARCHAR(50) PRIMARY KEY,\n  professor VARCHAR(100) UNIQUE\n);\nCREATE TABLE enrollments (\n  student_id INT,\n  subject    VARCHAR(50) REFERENCES subjects(name),\n  PRIMARY KEY (student_id, subject)\n);",
      result:[
        { concept:'Functional dependency', '3NF Says':'Any dependency OK as long as no transitive chains', 'BCNF Says':'Every determinant MUST be a superkey' },
        { concept:'Example', '3NF Says':'subject → professor (3NF: OK)', 'BCNF Says':'subject → professor (BCNF: NOT OK — subject is not a superkey)' },
        { concept:'Fix', '3NF Says':'Keep all in one table', 'BCNF Says':'Split into subjects + enrollments tables' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>BCNF</strong> requires every functional dependency's left side to be a superkey. It's stricter than 3NF — a table in 3NF may not be in BCNF. In practice, most databases aim for 3NF; BCNF is applied when anomalies from overlapping candidate keys arise.</p>
      </div>` });
  }
  else if (topic.id === 'denormalization') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Denormalization</strong> is the intentional <strong>reversal</strong> of normalization — adding redundant data back for <strong>performance</strong>. Normalized schemas use fewer joins but are slower for reads; denormalized schemas are faster to read but take more space and are harder to keep consistent.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A grocery store could keep inventory in a separate warehouse (normalized — no duplicates, efficient storage). But for popular items, they stock them <strong>near the checkout counter</strong> too (denormalized — duplicate data, faster access). The cost: more space, need to restock both locations.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 NORMALIZED (no redundancy, but JOIN required):
SELECT o.id, c.name, SUM(oi.quantity * p.price) AS total
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.id = 1001;

-- 🟢 DENORMALIZED (redundant total stored on order):
ALTER TABLE orders ADD COLUMN total_amount DECIMAL(10,2);
ALTER TABLE orders ADD COLUMN customer_name VARCHAR(100);

SELECT id, customer_name, total_amount
FROM orders WHERE id = 1001;  -- no joins!` });
    sections.push({ type:'example', title:'When to Denormalize',
      data:[], sql:"-- DENORMALIZED: Dashboard for an e-commerce site\n-- Storing aggregated data for fast reads:\nCREATE TABLE daily_sales_summary (\n  sale_date      DATE PRIMARY KEY,\n  total_revenue  DECIMAL(12,2),   -- precomputed\n  order_count    INT,             -- precomputed\n  top_product    VARCHAR(100),    -- precomputed\n  avg_order_value DECIMAL(10,2)   -- precomputed\n);\n\n-- Query is instant:\nSELECT * FROM daily_sales_summary\nWHERE sale_date BETWEEN '2024-01-01' AND '2024-01-31';\n\n-- Compare with normalized version (slower):\nSELECT DATE(o.created_at), SUM(oi.quantity * p.price),\n       COUNT(DISTINCT o.id), ...\nFROM orders o ...\nGROUP BY DATE(o.created_at);",
      result:[
        { approach:'Normalized (3NF)', 'Read Speed':'Slower (joins)', 'Write Speed':'Faster', 'Storage':'Minimal', 'Consistency':'Perfect', 'Use Case':'Transactional (OLTP)' },
        { approach:'Denormalized', 'Read Speed':'Fast', 'Write Speed':'Slower (more updates)', 'Storage':'Larger', 'Consistency':'Must maintain', 'Use Case':'Reporting / Analytics (OLAP)' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 When to Denormalize</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Read-heavy</strong> dashboards and reports. <strong>Cached</strong> aggregations. <strong>Pre-joined</strong> views for speed. Use denormalization deliberately — start normalized, then denormalize only when performance measurements prove you need it.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Denormalization</strong> adds redundant data for faster reads at the cost of storage and write complexity. Tools: computed columns, summary tables, materialized views. Always normalize first, denormalize only when performance demands it.</p>
      </div>` });
  }
  else if (topic.id === 'erd-modeling') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Entity-Relationship (ER) modeling</strong> is a visual way to design your database schema. You draw <strong>entities</strong> (tables), <strong>attributes</strong> (columns), and <strong>relationships</strong> (foreign keys) before writing a single CREATE TABLE.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">An architect draws blueprints before building a house. ER diagrams are the <strong>blueprints</strong> for your database — they show how tables connect before you build them. A good ER diagram catches design flaws before they become costly migrations.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ER modeling translates directly to SQL:

-- Entity: Customer
-- Attributes: id, name, email
CREATE TABLE customers (
  id    INT PRIMARY KEY,
  name  VARCHAR(100),
  email VARCHAR(255) UNIQUE
);

-- Entity: Order
-- Attributes: id, date, total
-- Relationship: Customer → Order (one-to-many)
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  order_date  DATE,
  total       DECIMAL(10,2)
);` });
    sections.push({ type:'example', title:'Common Relationship Patterns',
      data:[], sql:"-- 🔵 ONE-TO-ONE (1:1): each user has one profile\nCREATE TABLE users (\n  id INT PRIMARY KEY, name VARCHAR(100)\n);\nCREATE TABLE profiles (\n  user_id INT PRIMARY KEY REFERENCES users(id),\n  bio TEXT, avatar_url VARCHAR(255)\n);\n\n-- 🟢 ONE-TO-MANY (1:N): one category, many products\nCREATE TABLE categories (\n  id INT PRIMARY KEY, name VARCHAR(100)\n);\nCREATE TABLE products (\n  id INT PRIMARY KEY, name VARCHAR(100),\n  category_id INT REFERENCES categories(id)  -- FK on the 'many' side\n);\n\n-- 🟡 MANY-TO-MANY (M:N): students ↔ courses (junction table)\nCREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE courses (id INT PRIMARY KEY, title VARCHAR(100));\nCREATE TABLE enrollments (\n  student_id INT REFERENCES students(id),\n  course_id  INT REFERENCES courses(id),\n  PRIMARY KEY (student_id, course_id)\n);",
      result:[
        { type:'1:1', 'Table Count':'2', 'FK On':'Either side (unique FK)', 'Example':'User ↔ Profile' },
        { type:'1:N', 'Table Count':'2', 'FK On':'The "many" side', 'Example':'Category → Products' },
        { type:'M:N', 'Table Count':'3', 'FK On':'Junction table', 'Example':'Students ↔ Courses via Enrollments' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">📐 Entity</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">A thing: Customer, Product, Order. Becomes a table. Drawn as a rectangle.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔤 Attribute</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">A property: name, price, date. Becomes a column. Drawn as an oval.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔗 Relationship</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">A connection: "places", "belongs to". Becomes a foreign key. Drawn as a diamond.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>ER modeling</strong> is database design using entities, attributes, and relationships. Three relationship types: 1:1 (split vertically), 1:N (FK on many side), M:N (junction table). Draw before you code.</p>
      </div>` });
  }
  else if (topic.id === 'referential-integrity') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Referential integrity</strong> ensures that relationships between tables stay <strong>consistent</strong>. A foreign key value in one table must exist in the referenced table — no <strong>orphan records</strong> allowed.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A library checkout system. Every book checked out must <strong>exist in the catalog</strong> and must be <strong>assigned to a real member</strong>. No unregistered books on the checkout list. Referential integrity is the database enforcing: "If you reference it, it must exist."</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Define referential integrity with FOREIGN KEY:
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- What happens when the referenced row is deleted?
-- 1. RESTRICT (default): prevent delete if references exist
-- 2. CASCADE: delete orders when customer is deleted
-- 3. SET NULL: set customer_id to NULL on delete
-- 4. SET DEFAULT: set to default value on delete

-- Example with CASCADE:
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT REFERENCES customers(id) ON DELETE CASCADE
);

-- Example with RESTRICT (safest):
CREATE TABLE orders (
  id          INT PRIMARY KEY,
  customer_id INT REFERENCES customers(id) ON DELETE RESTRICT
);` });
    sections.push({ type:'example', title:'Referential Actions Compared',
      data:[], sql:"-- Customers table:\n-- 1 | Alice\n-- 2 | Bob\n\n-- Orders referencing customers:\n-- 101 | 1 (Alice's order)\n-- 102 | 2 (Bob's order)\n\n-- What happens when we delete customer 1 (Alice)?\n\n-- RESTRICT: DELETE fails with error → safest, requires manual cleanup\n-- CASCADE: order 101 is also deleted → clean but potentially destructive\n-- SET NULL: order 101.customer_id becomes NULL → data survives but orphaned\n-- SET DEFAULT: order 101.customer_id becomes default value → depends on default\n\n-- Often a good pattern: SOFT DELETE (add deleted_at column)\n-- instead of hard delete:\nALTER TABLE customers ADD COLUMN deleted_at TIMESTAMP NULL;\n-- Then cascade actions are never triggered!",
      result:[
        { action:'ON DELETE RESTRICT', 'Order 101 survives?':'Yes', 'Delete Allowed?':'No (error)', 'Use Case':'Prevent accidental data loss' },
        { action:'ON DELETE CASCADE', 'Order 101 survives?':'No', 'Delete Allowed?':'Yes', 'Use Case':'Child data is meaningless without parent' },
        { action:'ON DELETE SET NULL', 'Order 101 survives?':'Yes (orphaned)', 'Delete Allowed?':'Yes', 'Use Case':'Preserve history, unlink from deleted parent' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Referential integrity</strong> via foreign keys prevents orphan records. Four <code>ON DELETE</code> actions: <code>RESTRICT</code> (safe, prevents delete), <code>CASCADE</code> (auto-delete children), <code>SET NULL</code> / <code>SET DEFAULT</code> (preserve children). Choose based on whether child data should survive parent deletion.</p>
      </div>` });
  }
  else if (topic.id === 'sharding') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Sharding</strong> splits a database across <strong>multiple servers</strong> (shards) horizontally. Each shard holds a subset of rows. Together, they form the complete dataset. It's a scaling technique for when a single server can't handle the load.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">One checkout line at a grocery store handles 10 customers/minute. When the store gets 100 customers/minute, you open <strong>10 checkout lines</strong>. Each line handles some customers. Sharding is the same — <strong>multiple database servers</strong>, each handling a slice of data.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Application-level sharding by user_id (range-based):
-- Server 1 (Shard A): user_id 1–10,000
-- Server 2 (Shard B): user_id 10,001–20,000
-- Server 3 (Shard C): user_id 20,001–30,000

-- The application decides which shard to query:
function getShard(userId) {
  if (userId <= 10000) return 'shard_a';
  if (userId <= 20000) return 'shard_b';
  return 'shard_c';
}

-- Each shard has identical schema:
-- Shard A: CREATE TABLE users (...); CREATE TABLE orders (...);
-- Shard B: CREATE TABLE users (...); CREATE TABLE orders (...);
-- Shard C: CREATE TABLE users (...); CREATE TABLE orders (...);` });
    sections.push({ type:'example', title:'Sharding Strategies',
      data:[], sql:"-- 🔵 RANGE SHARDING:\n-- user_id 1-10000 → Shard 1\n-- user_id 10001-20000 → Shard 2\n-- Pro: simple, easy to add shards\n-- Con: hot spots (new users go to last shard)\n\n-- 🟢 HASH SHARDING:\n-- shard = HASH(user_id) % 4\n-- user_id=42  → 42 % 4 = 2 → Shard 2\n-- user_id=99  → 99 % 4 = 3 → Shard 3\n-- Pro: even distribution\n-- Con: resharding is painful (data must move)\n\n-- 🟡 DIRECTORY SHARDING:\n-- Lookup table: user_id → shard_id\n-- Pro: flexible, easy to migrate\n-- Con: extra lookup, single point of failure\n\n-- Cross-shard queries are hard:\n-- SELECT * FROM users WHERE email = 'alice@example.com';\n-- → must query ALL shards!",
      result:[
        { strategy:'Range', 'Distribution':'Sequential', 'Resharding':'Easy (split range)', 'Cross-Shard Queries':'Same as others', 'Complexity':'Low' },
        { strategy:'Hash', 'Distribution':'Even', 'Resharding':'Hard (move data)', 'Cross-Shard Queries':'Same as others', 'Complexity':'Medium' },
        { strategy:'Directory', 'Distribution':'Flexible', 'Resharding':'Easy (update map)', 'Cross-Shard Queries':'Same as others', 'Complexity':'High' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Sharding Challenges</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Cross-shard JOINs are slow. No global unique constraints across shards. Rebalancing is complex. Application must know which shard to query. Transactions across shards are hard (2-phase commit).</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ When to Shard</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Data too large for one server (100s of GBs+). Write throughput exceeds single server capacity. Geographic distribution (users near their shard). Read replicas not enough.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Sharding</strong> splits data across servers horizontally. Three strategies: <code>RANGE</code> (by ID range), <code>HASH</code> (modulo), <code>DIRECTORY</code> (lookup table). Powerful but complex — cross-shard queries, joins, and transactions are difficult. Shard only when necessary.</p>
      </div>` });
  }
  else if (topic.id === 'replication') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Replication</strong> copies data from one database server to <strong>one or more replicas</strong>. The primary handles writes; replicas handle reads. This improves <strong>read throughput</strong> and provides <strong>fault tolerance</strong>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A newspaper: one printing press (primary) creates copies, and delivery trucks (replicas) take copies to different neighborhoods. If one truck breaks down, others still deliver. Readers get newspapers from their <strong>local truck</strong> — faster than going to the press.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Primary-Replica replication setup (conceptual):
-- PRIMARY (handles all writes):
--   CREATE TABLE users (...);
--   INSERT INTO users VALUES (1, 'Alice');  → written to primary
--   Changes streamed to replicas via WAL (PostgreSQL) / binlog (MySQL)

-- REPLICA 1 (read-only, for web app reads):
--   SELECT * FROM users WHERE id = 1;  → fast, local read

-- REPLICA 2 (read-only, for reporting):
--   SELECT COUNT(*) FROM users;  → heavy query, doesn't affect primary

-- Replication lag: replica may be a few ms behind primary
-- Always read your own writes from the primary!` });
    sections.push({ type:'example', title:'Replication Topologies',
      data:[], sql:"-- 🔵 PRIMARY → REPLICA (single replica):\n-- Primary: writes\n-- Replica: reads, backups\n-- Simple, one point of failure for writes\n\n-- 🟢 PRIMARY → MULTIPLE REPLICAS:\n-- Primary: writes\n-- Replica 1: web app reads\n-- Replica 2: analytics / reporting\n-- Replica 3: backup / disaster recovery\n-- Most common setup\n\n-- 🟡 CASCADING REPLICATION:\n-- Primary → Replica A → Replica B → Replica C\n-- Reduces load on primary (A serves B, B serves C)\n-- Higher lag at end of chain\n\n-- 🟠 SYNCHRONOUS REPLICATION:\n-- Primary waits for at least one replica to confirm write\n-- Slower writes, no data loss guarantee\n\n-- 🔴 MULTI-PRIMARY (active-active):\n-- Multiple primaries, each accepts writes\n-- Conflict resolution needed! Complex.",
      result:[
        { topology:'Single Replica', 'Read Capacity':'2x', 'Write Capacity':'1x', 'Failover':'Promote replica', 'Complexity':'Low' },
        { topology:'Multiple Replicas', 'Read Capacity':'Nx', 'Write Capacity':'1x', 'Failover':'Promote best replica', 'Complexity':'Medium' },
        { topology:'Multi-Primary', 'Read Capacity':'Nx', 'Write Capacity':'Nx', 'Failover':'Automatic', 'Complexity':'Very High' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔄 Synchronous vs Async</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>Sync</strong>: primary waits for replica to confirm. Slower writes, zero data loss. <strong>Async</strong>: primary doesn't wait. Faster, but brief data loss possible if primary crashes before replication.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 Read-Your-Writes</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">After a user writes data, read from the <strong>primary</strong> (not a replica) to avoid seeing stale data. Switch to replica after a safe delay. This is called "read-after-write consistency."</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Replication</strong> copies primary data to read replicas. Improves read throughput and provides failover. Types: single replica, multiple replicas, cascading, multi-primary. Trade-off: replication lag vs write performance vs data durability.</p>
      </div>` });
  }
  else if (topic.id === 'acid-vs-base') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>ACID</strong> and <strong>BASE</strong> are two philosophies for database transactions. ACID prioritizes <strong>consistency</strong> (traditional SQL databases). BASE prioritizes <strong>availability</strong> (NoSQL / distributed systems). They sit at opposite ends of the <strong>CAP theorem</strong> spectrum.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">ACID is like a bank vault — strict, slow, every transaction logged perfectly. BASE is like a social media feed — it's OK if you see a post 2 seconds late (eventual consistency), but the system must <strong>stay up</strong> even if servers fail. Different tools for different jobs.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ACID: Atomicity, Consistency, Isolation, Durability
-- Used by: PostgreSQL, MySQL, SQL Server, SQLite

BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- ACID guarantees: either both succeed or both fail.
-- Your bank balance is never wrong.

-- BASE: Basically Available, Soft state, Eventual consistency
-- Used by: Cassandra, DynamoDB, MongoDB (some configs)

-- In BASE, the same operation might look like:
-- "Update account 1, update account 2"
-- The system promises the update will spread eventually.
-- For a moment, money might appear in both accounts or neither.` });
    sections.push({ type:'example', title:'ACID vs BASE — When to Use Each',
      data:[], sql:"-- 🔵 ACID (Banking, Booking, Inventory):\n-- Every transaction is precise and safe\n-- Slower but predictable\n\n-- 🟢 BASE (Social feeds, Analytics, Logging):\n-- System must always accept writes\n-- Data inconsistency is tolerated temporarily\n-- Much faster at scale\n\n-- Example: E-commerce platform\n-- Product Inventory: ACID (can't oversell)\n-- Product Reviews: BASE (2-second delay is fine)\n-- Shopping Cart: ACID (items must not disappear)\n-- Recommendations: BASE (stale data is acceptable)",
      result:[
        { property:'Consistency', acid:'Strong (immediate)', base:'Eventual (seconds/minutes)' },
        { property:'Availability', acid:'Lower (can block on conflicts)', base:'High (always accepts writes)' },
        { property:'Partition Tolerance', acid:'Limited', base:'Designed for' },
        { property:'Performance', acid:'Slower (locks, waits)', base:'Faster (no locks)' },
        { property:'Use Case', acid:'Financial, medical, booking', base:'Social, IoT, logging, analytics' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔠 ACID Explained</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>A</strong>tomic: all or nothing. <strong>C</strong>onsistent: data follows rules. <strong>I</strong>solated: concurrent transactions don't interfere. <strong>D</strong>urable: committed data survives crashes.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔠 BASE Explained</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>B</strong>asically Available: system stays up. <strong>S</strong>oft state: data can change over time. <strong>E</strong>ventual consistency: given enough time, all replicas converge.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>ACID</strong> = strong consistency, slower, traditional SQL. <strong>BASE</strong> = eventual consistency, faster, distributed NoSQL. Choose based on your requirements: financial data needs ACID; social feeds work fine with BASE. Many modern systems use both (polyglot persistence).</p>
      </div>` });
  }
  else if (topic.id === 'cap-theorem') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>CAP theorem</strong> states a distributed database can only provide <strong>two of three</strong> guarantees: <strong>C</strong>onsistency, <strong>A</strong>vailability, <strong>P</strong>artition tolerance. When a network partition occurs, you must choose between consistency and availability.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Two friends (Node A and Node B) try to agree on who has the last piece of cake. The phone line cuts (partition). <strong>Consistency</strong>: "Let's wait until the line is fixed to agree." <strong>Availability</strong>: "You take it, I'll take it, we'll figure it out later." You can't have both during a partition — you must choose.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- CAP in practice (database choices):

-- CP (Consistency + Partition Tolerance):
-- PostgreSQL with sync replication, HBase, MongoDB (default)
-- During partition: rejects writes until consistency restored
-- "I'd rather be wrong than inconsistent" ← wait, that's wrong
-- "I'd rather be unavailable than serve stale data"

-- AP (Availability + Partition Tolerance):
-- Cassandra, CouchDB, DynamoDB
-- During partition: accepts writes, resolves conflicts later
-- "I'll accept any write now, sort out conflicts later"

-- CA (Consistency + Availability):
-- Single-node MySQL, SQLite
-- No partition tolerance (single server). Can have both C and A
-- But if this server fails → unavailable` });
    sections.push({ type:'example', title:'CAP Database Landscape',
      data:[], sql:"-- 🔴 CP Systems (Consistency + Partition Tolerance):\n-- PostgreSQL (sync replication)\n-- MongoDB (default configuration)\n-- HBase / Zookeeper\n-- Redis (cluster mode with quorum)\n-- Behavior during partition: reject writes until quorum restored\n\n-- 🟢 AP Systems (Availability + Partition Tolerance):\n-- Cassandra\n-- CouchDB\n-- Amazon DynamoDB\n-- Riak\n-- Behavior during partition: accept writes, eventual consistency\n\n-- 🟡 CA Systems (Consistency + Availability):\n-- Single-node PostgreSQL / MySQL / SQLite\n-- Behavior: no partition tolerance — the single server is the point of failure\n\n-- Tradeoff: DynamoDB (AP) vs Aurora (CP) — same company, different tools!",
      result:[
        { category:'Examples', cp:'PostgreSQL, HBase, MongoDB', ap:'Cassandra, DynamoDB, CouchDB', ca:'Single-node MySQL, SQLite' },
        { category:'During Partition', cp:'Rejects writes', ap:'Accepts writes (maybe conflicting)', ca:'N/A (no partition)' },
        { category:'Best For', cp:'Financial, booking, inventory', ap:'Social, IoT, logging', ca:'Small apps, embedded, dev' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 Common Misconception</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">CAP says you pick <strong>two of three</strong> — but only during a partition. When there's no partition, you get all three! The real trade-off is: what happens when the network fails? CP systems choose consistency; AP systems choose availability.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ PACELC Extension</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">CAP only addresses partitions. PACELC adds: else (when no partition), trade off <strong>L</strong>atency vs <strong>C</strong>onsistency. DynamoDB chooses low latency (eventual consistency); Aurora chooses strong consistency (higher latency).</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>CAP theorem</strong>: pick 2 of 3 — Consistency, Availability, Partition tolerance. <strong>CP</strong> (PostgreSQL, HBase): consistent but may reject writes. <strong>AP</strong> (Cassandra, DynamoDB): always writable but eventual consistency. <strong>CA</strong> (single-node): both but no partition tolerance. Choose based on your tolerance for inconsistency vs unavailability.</p>
      </div>` });
  }
  else if (topic.id === 'mysql-specific') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>MySQL</strong> has unique features that set it apart: <code>ON DUPLICATE KEY UPDATE</code>, <code>REPLACE INTO</code>, <code>INSERT IGNORE</code>, <code>LIMIT</code> with UPDATE/DELETE, <code>AUTO_INCREMENT</code>, and storage engine choices (InnoDB vs MyISAM).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">MySQL is like a toolbox with <strong>extra gadgets</strong> compared to standard SQL. Need to upsert? <code>ON DUPLICATE KEY UPDATE</code>. Need to skip errors? <code>INSERT IGNORE</code>. Big batch delete? <code>DELETE ... LIMIT</code>. These shortcuts save time but aren't portable to other databases.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- MySQL-specific features:

-- UPSERT: insert or update if exists
INSERT INTO users (id, name, visits)
VALUES (1, 'Alice', 1)
ON DUPLICATE KEY UPDATE visits = visits + 1;

-- Skip rows that would cause errors
INSERT IGNORE INTO users (id, name) VALUES (1, 'Alice'), (2, 'Bob');

-- REPLACE (delete + re-insert):
REPLACE INTO users (id, name) VALUES (1, 'Charlie');

-- LIMIT with DELETE/UPDATE (not standard SQL):
DELETE FROM logs WHERE status = 'archived' LIMIT 1000;
UPDATE users SET status = 'inactive' WHERE last_login < '2020-01-01' LIMIT 100;

-- AUTO_INCREMENT:
CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

-- Storage engine per table:
CREATE TABLE my_table (id INT) ENGINE=InnoDB;
CREATE TABLE cache_table (id INT) ENGINE=MEMORY;` });
    sections.push({ type:'example', title:'MySQL vs Standard SQL',
      data:[], sql:"-- Standard SQL (works everywhere):\nINSERT INTO products (id, name, price)\nSELECT 1, 'Widget', 9.99\nWHERE NOT EXISTS (\n  SELECT 1 FROM products WHERE id = 1\n);\n-- Update if exists:\nUPDATE products SET name='Widget', price=9.99 WHERE id = 1;\n\n-- Same thing in MySQL (one statement):\nINSERT INTO products (id, name, price)\nVALUES (1, 'Widget', 9.99)\nON DUPLICATE KEY UPDATE\n  name = VALUES(name),\n  price = VALUES(price);\n\n-- MySQL's SHOW commands (not standard SQL at all):\nSHOW TABLES;\nSHOW DATABASES;\nSHOW CREATE TABLE products;",
      result:[
        { feature:'Upsert', mysql:'ON DUPLICATE KEY UPDATE', standard:'MERGE / ON CONFLICT', notes:'MySQL-specific, simple syntax' },
        { feature:'Skip errors', mysql:'INSERT IGNORE', standard:'Various (DB-dependent)', notes:'Silently skips duplicates' },
        { feature:'Delete limit', mysql:'DELETE ... LIMIT N', standard:'DELETE ... WHERE ... FETCH', notes:'MySQL, MariaDB only' },
        { feature:'Full-text MATCH', mysql:'MATCH(col) AGAINST(?)', standard:'CONTAINS / @@', notes:'Built-in fulltext on MyISAM/InnoDB' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 Storage Engines</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>InnoDB</strong>: transactions, foreign keys, row-level locking (default since MySQL 5.5). <strong>MyISAM</strong>: full-text search, table-level locking, no transactions (deprecated). <strong>MEMORY</strong>: data in RAM, fast but lost on restart.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>MySQL</strong> offers <code>ON DUPLICATE KEY UPDATE</code>, <code>INSERT IGNORE</code>, <code>LIMIT</code> in DML, <code>AUTO_INCREMENT</code>, and multiple storage engines. Convenient but not portable. MariaDB is a fork with additional features (e.g., <code>RETURNING</code> clauses).</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'postgres-specific') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>PostgreSQL</strong> is known for <strong>standards compliance</strong> and powerful features: <code>RETURNING</code>, <code>ON CONFLICT</code> (upsert), <code>DISTINCT ON</code>, <code>GENERATED</code> columns, <code>LATERAL</code> joins, array types, JSONB, <code>WINDOW</code> functions, table inheritance, and extensions via <code>CREATE EXTENSION</code>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">PostgreSQL is the <strong>Swiss Army knife</strong> of databases. Need JSON? Built in. Need custom data types? <code>CREATE TYPE</code>. Need geospatial? Just install PostGIS. It does everything — sometimes with more syntax, but always correct by the SQL standard.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- PostgreSQL-specific features:

-- RETURNING (get back modified data):
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com')
RETURNING id, created_at;

UPDATE users SET status = 'active'
WHERE id = 42
RETURNING id, name, status;

DELETE FROM users WHERE id = 7
RETURNING *;

-- ON CONFLICT (upsert):
INSERT INTO users (id, name, visits)
VALUES (1, 'Alice', 1)
ON CONFLICT (id) DO UPDATE
SET visits = EXCLUDED.visits + 1;

-- DISTINCT ON (unique per column):
SELECT DISTINCT ON (department_id) id, name, department_id
FROM employees
ORDER BY department_id, salary DESC;
-- Keeps one employee per department (highest salary)

-- GENERATED columns:
CREATE TABLE products (
  id INT PRIMARY KEY,
  price DECIMAL(10,2),
  tax DECIMAL(10,2) GENERATED ALWAYS AS (price * 0.08) STORED
);` });
    sections.push({ type:'example', title:'PostgreSQL Superpowers',
      data:[], sql:"-- 🔵 RETURNING is a game-changer:\nINSERT INTO bookings (user_id, event_id)\nVALUES (1, 101) RETURNING *;\n-- Returns the full row without a second query!\n\n-- 🟢 ON CONFLICT with DO NOTHING:\nINSERT INTO subscribers (email)\nVALUES ('existing@example.com')\nON CONFLICT (email) DO NOTHING;\n-- No error, no update — just silence\n\n-- 🟡 Full-Text Search (built-in):\nSELECT * FROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('english', 'database & performance');\n\n-- 🔴 Custom data types:\nCREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');\nCREATE TABLE journal (entry TEXT, current_mood mood);\n\n-- 🟠 JSONB operations:\nSELECT * FROM users WHERE prefs->>'theme' = 'dark';",
      result:[
        { feature:'RETURNING', pg:'INSERT/UPDATE/DELETE ... RETURNING *', benefit:'No separate SELECT needed after DML' },
        { feature:'ON CONFLICT', pg:'INSERT ... ON CONFLICT DO UPDATE', benefit:'Clean upsert, no dead tuples' },
        { feature:'DISTINCT ON', pg:'SELECT DISTINCT ON (col1) col1, col2', benefit:'Top-N per group without subquery' },
        { feature:'JSONB', pg:'Column type + operators (@>, ->, ->>)', benefit:'Full NoSQL within SQL database' },
        { feature:'Extensions', pg:'CREATE EXTENSION postgis;', benefit:'Add geospatial, crypto, stats, etc.' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 PostgreSQL Niceties</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>EXCLUDED</strong> keyword in ON CONFLICT refers to the proposed values. <strong>ILIKE</strong> for case-insensitive LIKE. <strong>SIMILAR TO</strong> for regex-like patterns. <strong>NOWAIT</strong> to fail fast on lock contention. <strong>LISTEN/NOTIFY</strong> for real-time events.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>PostgreSQL</strong> excels at standards compliance and advanced features: <code>RETURNING</code>, <code>ON CONFLICT</code>, <code>DISTINCT ON</code>, <code>JSONB</code>, custom types, extensions. If you need a database that does <strong>everything</strong> well, PostgreSQL is the answer.</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'sqlserver-specific') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>SQL Server</strong> (T-SQL) offers: <code>TOP</code> instead of <code>LIMIT</code>, <code>OUTPUT</code> (like <code>RETURNING</code>), <code>MERGE</code> (upsert), <code>PIVOT</code>/<code>UNPIVOT</code> (built-in), Common Table Expressions (CTE), table-valued parameters, <code>GO</code> batch separator, and <code>@@IDENTITY</code>/<code>SCOPE_IDENTITY()</code>.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">SQL Server is the <strong>enterprise workhorse</strong>. It's like a luxury SUV — comfortable, powerful, lots of features, but has its own way of doing things. <code>SELECT TOP 10</code> instead of <code>LIMIT 10</code>, <code>OUTPUT</code> instead of <code>RETURNING</code>. Different vocabulary, same destination.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- SQL Server (T-SQL) specific features:

-- TOP instead of LIMIT:
SELECT TOP 10 * FROM users ORDER BY created_at DESC;

-- TOP with ties:
SELECT TOP 3 WITH TIES name, score
FROM exam_results
ORDER BY score DESC;
-- Returns 3 rows + any ties for 3rd place

-- OUTPUT (like PostgreSQL's RETURNING):
INSERT INTO users (name, email)
OUTPUT INSERTED.id, INSERTED.created_at
VALUES ('Alice', 'alice@example.com');

UPDATE users SET status = 'active'
OUTPUT DELETED.status AS old_status, INSERTED.status AS new_status
WHERE id = 42;

-- MERGE (upsert):
MERGE users AS target
USING (VALUES (1, 'Alice')) AS source (id, name)
ON target.id = source.id
WHEN MATCHED THEN UPDATE SET name = source.name
WHEN NOT MATCHED THEN INSERT (id, name) VALUES (source.id, source.name);` });
    sections.push({ type:'example', title:'SQL Server vs Other Dialects',
      data:[], sql:"-- 🔵 TOP with PERCENT (unique to SQL Server):\nSELECT TOP 10 PERCENT *\nFROM products ORDER BY price DESC;\n-- Returns the top 10% most expensive products\n\n-- 🟢 GETDATE() vs NOW() vs CURRENT_TIMESTAMP:\nSELECT GETDATE();      -- SQL Server\nSELECT NOW();           -- MySQL, PostgreSQL\nSELECT SYSDATE FROM DUAL; -- Oracle\n\n-- 🟡 PIVOT / UNPIVOT (built-in, not manual CASE):\nSELECT * FROM (\n  SELECT year, quarter, revenue FROM sales\n) src\nPIVOT (\n  SUM(revenue)\n  FOR quarter IN ([Q1], [Q2], [Q3], [Q4])\n) pvt;\n\n-- 🔴 Sequence objects:\nCREATE SEQUENCE order_seq START WITH 1 INCREMENT BY 1;\nSELECT NEXT VALUE FOR order_seq;",
      result:[
        { concept:'Limit rows', tsql:'SELECT TOP 10', other:'SELECT ... LIMIT 10 / FETCH 10' },
        { concept:'Return after DML', tsql:'OUTPUT INSERTED.*', other:'RETURNING *' },
        { concept:'Upsert', tsql:'MERGE', other:'ON DUPLICATE KEY / ON CONFLICT' },
        { concept:'Pagination', tsql:'OFFSET / FETCH NEXT', other:'OFFSET / FETCH NEXT (similar in modern)' },
        { concept:'Built-in PIVOT', tsql:'PIVOT / UNPIVOT keywords', other:'Manual CASE aggregation' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 SQL Server Tips</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Use <code>SCOPE_IDENTITY()</code> over <code>@@IDENTITY</code> to get the last insert ID in scope. <code>GO</code> marks batch boundaries. <code>WAITFOR DELAY</code> pauses execution. Table variables (<code>@table</code>) are faster than temp tables for small sets.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>SQL Server</strong> uses <code>TOP</code> for limiting, <code>OUTPUT</code> for returning data, <code>MERGE</code> for upsert, and built-in <code>PIVOT</code>. It integrates deeply with the Microsoft ecosystem (.NET, Azure, SSMS). T-SQL has its own idioms but is very capable for enterprise workloads.</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'sqlite-specific') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>SQLite</strong> is a <strong>serverless</strong>, embedded SQL database engine. It stores the entire database in a single file. Features: dynamic typing (affinity), <code>AUTOINCREMENT</code>, <code>VACUUM</code>, <code>ATTACH DATABASE</code>, <code>WITHOUT ROWID</code> tables, and JSON support (since 3.38).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">SQLite is the <strong>pocket notebook</strong> of databases. No server to install, no config, just a file. Every smartphone has one. It handles moderate workloads fine, but it's not designed for high concurrency or multi-user access. Perfect for mobile apps, prototypes, and embedded use.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- SQLite-specific features:

-- Dynamic typing (column affinity, not strict types):
CREATE TABLE items (
  id    INTEGER,   -- can store text or numbers
  name  TEXT,      -- but the 'type' is a hint, not a rule
  price REAL
);
INSERT INTO items VALUES (1, 42, 'not a number');  -- allowed!

-- Strict tables (SQLite 3.37+):
CREATE TABLE items (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  price REAL
) STRICT;

-- AUTOINCREMENT (only on INTEGER PRIMARY KEY):
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

-- ATTACH other databases:
ATTACH DATABASE 'backup.db' AS backup;
INSERT INTO backup.users SELECT * FROM main.users;

-- VACUUM (reclaim space):
VACUUM;` });
    sections.push({ type:'example', title:'SQLite Quirks and Features',
      data:[], sql:"-- 🔵 Dynamic typing in action:\nCREATE TABLE test (val ANY);\nINSERT INTO test VALUES (1), ('hello'), (3.14), (X'FFFF');\nSELECT val, typeof(val) FROM test;\n-- 1      | integer\n-- hello  | text\n-- 3.14   | real\n-- [FFFF] | blob\n\n-- 🟢 UPSERT (PostgreSQL-style):\nINSERT INTO users (id, name) VALUES (1, 'Alice')\nON CONFLICT(id) DO UPDATE SET name = EXCLUDED.name;\n\n-- 🟡 No RIGHT JOIN or FULL OUTER JOIN!\n-- Must simulate with LEFT JOIN + UNION\n\n-- 🟠 LIMIT/OFFSET for pagination:\nSELECT * FROM products\nORDER BY name LIMIT 10 OFFSET 20;\n\n-- 🔴 Create a virtual table (FTS5 full-text search):\nCREATE VIRTUAL TABLE docs USING fts5(title, body);\nINSERT INTO docs VALUES ('SQLite Guide', 'SQLite is lightweight...');\nSELECT * FROM docs WHERE docs MATCH 'lightweight';",
      result:[
        { property:'Server', value:'None (embedded)', implication:'No install, no config, no network' },
        { property:'Typing', value:'Dynamic (affinity)', implication:'Stores any type in any column (STRICT mode available)' },
        { property:'Concurrency', value:'Single-writer', implication:'One write at a time, multiple readers OK' },
        { property:'Max size', value:'~281 TB', implication:'Practically limited by file system' },
        { property:'Portability', value:'Single .sqlite file', implication:'Copy the file to move the database' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 When to Use SQLite</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Mobile apps (Android, iOS). Desktop apps (local storage). Prototyping and testing. Embedded devices. Small-to-medium websites (<100k visits/day). Browser storage. Never use for multi-server or high-write-concurrency scenarios.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>SQLite</strong> is serverless, file-based, and zero-config. Dynamic typing, <code>AUTOINCREMENT</code>, <code>VACUUM</code>, <code>ATTACH</code>. Great for embedded/mobile/development. <code>STRICT</code> mode (3.37+) enforces traditional typing. Not for high-concurrency production use.</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'oracle-specific') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Oracle Database</strong> has a distinct SQL dialect: <code>DUAL</code> table, <code>ROWNUM</code> / <code>ROW_NUMBER()</code>, <code>SEQUENCE</code> objects, <code>CONNECT BY</code> for hierarchical queries, <code>MATERIALIZED VIEWS</code>, <code>FLASHBACK QUERY</code>, <code>PARTITION BY</code> (extensive), <code>MERGE</code>, <code>PIVOT</code>, and packages (PL/SQL).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Oracle is the <strong>spaceship</strong> of databases — incredibly powerful, packed with features, but requires a trained crew to operate. <code>DUAL</code> for computing values, <code>CONNECT BY</code> for tree queries, <code>FLASHBACK</code> to see past data. It does things other databases can't, but the learning curve is steep.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Oracle-specific features:

-- DUAL (dummy table for expressions):
SELECT SYSDATE, USER, 1 + 1
FROM DUAL;

-- ROWNUM (pseudo-column for row numbering):
SELECT * FROM (
  SELECT * FROM employees ORDER BY hire_date DESC
) WHERE ROWNUM <= 5;
-- Note: ROWNUM is applied BEFORE ORDER BY in simple queries!

-- Sequences:
CREATE SEQUENCE emp_seq START WITH 1000 INCREMENT BY 1;
INSERT INTO employees (id, name)
VALUES (emp_seq.NEXTVAL, 'Alice');

-- CONNECT BY (hierarchical queries):
SELECT employee_id, manager_id, LEVEL
FROM employees
START WITH manager_id IS NULL
CONNECT BY PRIOR employee_id = manager_id;

-- FLASHBACK (query past data):
SELECT * FROM employees AS OF TIMESTAMP (SYSTIMESTAMP - INTERVAL '1' HOUR);` });
    sections.push({ type:'example', title:'Oracle Quirks and Powers',
      data:[], sql:"-- 🔵 ROWNUM vs ROW_NUMBER():\nSELECT * FROM (\n  SELECT e.*, ROW_NUMBER() OVER (ORDER BY salary DESC) rn\n  FROM employees e\n) WHERE rn <= 10;\n-- ROW_NUMBER() is the modern way. ROWNUM is legacy.\n\n-- 🟢 MERGE (upsert pattern):\nMERGE INTO accounts a\nUSING (SELECT 1 AS id, 500 AS amount FROM DUAL) s\nON (a.id = s.id)\nWHEN MATCHED THEN UPDATE SET a.balance = a.balance + s.amount\nWHEN NOT MATCHED THEN INSERT (id, balance) VALUES (s.id, s.amount);\n\n-- 🟡 Materialized View (snapshot, refreshed on schedule):\nCREATE MATERIALIZED VIEW sales_summary\nREFRESH COMPLETE ON DEMAND\nAS SELECT EXTRACT(YEAR FROM sale_date) yr,\n          SUM(amount) total\nFROM sales GROUP BY EXTRACT(YEAR FROM sale_date);\n\n-- 🔴 Recursive WITH (alternative to CONNECT BY):\nWITH RECURSIVE org_tree AS (\n  SELECT id, name, 1 AS level FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, t.level + 1\n  FROM employees e JOIN org_tree t ON e.manager_id = t.id\n) SELECT * FROM org_tree;",
      result:[
        { feature:'DUAL table', oracle:'SELECT 1+1 FROM DUAL', why:'Oracle requires FROM; DUAL fills this need' },
        { feature:'ROWNUM', oracle:'Limits rows before sort', why:'Easy to misuse — prefer ROW_NUMBER()' },
        { feature:'CONNECT BY', oracle:'Hierarchical queries', why:'Simpler than recursive CTEs for trees' },
        { feature:'FLASHBACK', oracle:'See data as of past time', why:'Undo mistakes, audit, time-travel queries' },
        { feature:'PL/SQL packages', oracle:'Encapsulated procedures', why:"Oracle's answer to stored procedure organization" },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
          <span class="font-semibold text-sm" style="color:var(--amber);">💡 Oracle Tips</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>ROWNUM</strong> is applied before sorting — always subquery with <code>ORDER BY</code> first. Use <code>ROW_NUMBER()</code> instead. <code>DUAL</code> is a real table with one row. <code>SYSDATE</code> returns current date/time. <code>EXTRACT</code> pulls parts of dates.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>Oracle</strong> features: <code>DUAL</code>, <code>ROWNUM</code>, <code>SEQUENCE</code>, <code>CONNECT BY</code>, <code>FLASHBACK</code>, <code>MATERIALIZED VIEWS</code>, rich PL/SQL. Powerful but complex. Many features (like <code>CONNECT BY</code>) have modern SQL standard equivalents (recursive CTEs).</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'ansi-sql-standards') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>ANSI SQL standards</strong> define the official SQL language specification. Major revisions: <strong>SQL:86</strong> (first standard), <strong>SQL:92</strong> (major revision — joins, set operations), <strong>SQL:99</strong> (recursive CTEs, triggers, OO), <strong>SQL:2003</strong> (window functions, XML), <strong>SQL:2008</strong> (TRUNCATE, INSTEAD OF), <strong>SQL:2011</strong> (temporal), <strong>SQL:2016</strong> (JSON, row pattern matching).</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">ANSI SQL is like the <strong>constitution</strong>. PostgreSQL is the country that follows the constitution most closely. MySQL adds shortcuts. Oracle adds powerful extras. SQL Server has its own interpretations. All claim to be constitutional, but each has local laws (extensions).</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- SQL:92 standard (basic SELECT):
SELECT id, name FROM users WHERE active = 1 ORDER BY name;

-- SQL:99 (CTE / recursive queries):
WITH RECURSIVE org_chart AS (
  SELECT id, name, 1 AS level FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, oc.level + 1
  FROM employees e JOIN org_chart oc ON e.manager_id = oc.id
) SELECT * FROM org_chart;

-- SQL:2003 (window functions):
SELECT name, department,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
FROM employees;

-- SQL:2016 (JSON support):
SELECT JSON_VALUE(doc, '$.name') AS name
FROM documents
WHERE JSON_VALUE(doc, '$.status') = 'active';` });
    sections.push({ type:'example', title:'Standard Compliance by Database',
      data:[], sql:"-- Which database follows the standard most closely?\n\n-- 🏆 PostgreSQL: highest compliance (~95%)\n--   Full CTE, WINDOW, JSON, recursive queries\n--   Minimal extensions beyond standard\n\n-- SQL Server: ~85%\n--   TOP instead of LIMIT, GO batches\n--   OFFSET/FETCH added in 2012\n\n-- MySQL: ~75%\n--   ON DUPLICATE KEY (non-standard)\n--   LIMIT in DML (non-standard)\n--   No FULL OUTER JOIN until 8.0\n\n-- Oracle: ~70%\n--   DUAL table, CONNECT BY (non-standard but powerful)\n--   FLASHBACK, MATERIALIZED VIEWS\n--   Now supports standard JSON, WINDOW\n\n-- SQLite: ~60%\n--   Missing RIGHT/FULL OUTER JOIN\n--   Dynamic typing (affinity, not strict)\n--   No window function frame until 3.25",
      result:[
        { db:'PostgreSQL', sql92:'Full ✅', sql99:'Full ✅', sql2003:'Full ✅', sql2016:'Full ✅' },
        { db:'SQL Server', sql92:'Full ✅', sql99:'Full ✅', sql2003:'Full ✅', sql2016:'Partial' },
        { db:'MySQL', sql92:'Full ✅', sql99:'Full ✅', sql2003:'Partial', sql2016:'Partial' },
        { db:'Oracle', sql92:'Full ✅', sql99:'Partial', sql2003:'Full ✅', sql2016:'Full ✅' },
        { db:'SQLite', sql92:'Partial', sql99:'Partial', sql2003:'Partial', sql2016:'Newer' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">📜 Key Standards Milestones</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>SQL:86</strong> — first standard. <strong>SQL:92</strong> — joins, UNIONS, constraints. <strong>SQL:99</strong> — CTE, recursive, triggers, OO types. <strong>SQL:2003</strong> — WINDOW, MERGE, sequences. <strong>SQL:2008</strong> — TRUNCATE, INSTEAD OF triggers. <strong>SQL:2016</strong> — JSON, row pattern matching, polymorphic tables.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>ANSI SQL</strong> evolves over time. Each database implements the standard at its own pace. When writing portable SQL, stick to <strong>SQL:92</strong> basics (SELECT, JOIN, WHERE, GROUP BY). For advanced features, expect dialect differences. PostgreSQL is the gold standard for compliance.</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'sql-injection') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>SQL injection</strong> (SQLi) is the #1 database security vulnerability. It happens when user input is <strong>concatenated directly</strong> into SQL queries, allowing attackers to execute arbitrary database commands.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A bank teller asks "What's your account number?" You say: "12345 OR 1=1". If the teller reads that as a valid number, you just got access to <strong>every</strong> account. Parameterized queries are like a teller who <strong>always</strong> treats your input as a number, never as instructions.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 VULNERABLE (never do this in application code):
query = "SELECT * FROM users WHERE id = " + userInput;
-- Input: "1; DROP TABLE users;--"
-- Becomes: SELECT * FROM users WHERE id = 1; DROP TABLE users;--
-- Database executes BOTH queries!

-- 🟢 SAFE (parameterized / prepared statement):
query = "SELECT * FROM users WHERE id = ?";
stmt.execute(query, [userInput]);
-- The ? placeholder is always treated as a value, never as SQL

-- 🟢 SAFE (ORM approach):
User.find_by_id(userInput)  -- ORM handles escaping

-- 🟢 SAFE (stored procedure):
CALL GetUserById(?)  -- procedure handles parameters` });
    sections.push({ type:'example', title:'SQL Injection Attack Types',
      data:[], sql:"-- 🔴 1. Classic Tautology Attack:\n-- Input: ' OR '1'='1\nSELECT * FROM users WHERE email = '' OR '1'='1';\n-- Returns ALL users! Login bypassed.\n\n-- 🔴 2. UNION-based Data Theft:\n-- Input: ' UNION SELECT username, password FROM admins--\nSELECT name, email FROM users WHERE id = ''\nUNION SELECT username, password FROM admins--';\n-- Returns admin credentials alongside user data\n\n-- 🔴 3. Blind SQL Injection (boolean-based):\n-- Input: ' OR (SELECT SUBSTRING(password,1,1) FROM admins WHERE id=1)='a\n-- True/false responses reveal passwords character by character\n\n-- 🔴 4. Second-Order Injection:\n-- Malicious data stored in DB, later executed unsafely\n-- Stored name: '; DROP TABLE logs;--\n-- Later: \"SELECT * FROM users WHERE name = '\" + storedName + \"'\";\n\n-- 🟢 Parameterized queries prevent ALL of the above!",
      result:[
        { attack:'Tautology', example:"' OR '1'='1", 'Risk':'Login bypass, data theft', prevention:'Parameterized WHERE clause' },
        { attack:'UNION injection', example:"' UNION SELECT ...--", 'Risk':'Read other tables', prevention:'Parameterized + least privilege' },
        { attack:'Blind (boolean)', example:"' OR (SELECT ...)='a", 'Risk':'Data extraction char by char', prevention:'Parameterized everywhere' },
        { attack:'Second-order', example:'Malicious stored data', 'Risk':'Delayed attack', prevention:'Always parameterize, even for stored data' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">🛡️ Defense Layers</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>Parameterized queries</strong> (non-negotiable). <strong>Input validation</strong> (reject unexpected). <strong>Least privilege</strong> (read-only user for SELECTs). <strong>WAF</strong> (web app firewall). <strong>Escaping</strong> (last resort, not as safe).</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Real-World Impact</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">SQL injection has caused billions in damages. Sony (2011): 77M accounts breached. Heartland (2008): 130M credit cards. Equifax (2017): 147M SSNs. All could have been prevented with parameterized queries.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>SQL injection</strong> is 100% preventable. Use <strong>parameterized queries</strong> / prepared statements for every query. Never concatenate user input into SQL. Validate input. Apply least privilege. Use ORMs safely. This is the single most important security practice in database development.</p>
      </div>` });
  }
  else if (topic.id === 'n-plus-one') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <strong>N+1 query problem</strong> occurs when you fetch a list of N records, then execute <strong>one additional query per record</strong>. Common with ORMs: <code>User.find_each { |u| u.orders.load }</code> — 1 query for users + N queries for orders = N+1.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You want to know what each person in a photo album is wearing. Instead of looking at the group photo (1 query with JOIN), you look at each person's individual photo separately (N+1 queries). It's 100x slower for no good reason.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 N+1 QUERY PROBLEM:
-- Step 1: fetch all users (1 query):
SELECT * FROM users;

-- Step 2: for each user, fetch their orders (N queries!):
SELECT * FROM orders WHERE user_id = 1;
SELECT * FROM orders WHERE user_id = 2;
SELECT * FROM orders WHERE user_id = 3;
-- ... 100 users = 101 total queries!

-- 🟢 FIX: use a JOIN or eager load (1 query):
SELECT u.name, o.id AS order_id, o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- 1 query, same data, 100x faster

-- In ORMs (Rails ActiveRecord):
-- 🔴 N+1:
users = User.all  -- 1 query
users.each { |u| u.orders }  -- N queries

-- 🟢 Eager load:
users = User.includes(:orders)  -- 2 queries (users + orders)
users.each { |u| u.orders }  -- no additional queries` });
    sections.push({ type:'example', title:'N+1 in Action',
      data:[], sql:"-- Scenario: Show all blog posts with their authors\n\n-- 🔴 N+1 approach:\nposts = Post.all                        -- 1 query: SELECT * FROM posts\nposts.each do |post|\n  puts post.author.name                  -- N queries: SELECT * FROM authors WHERE id = ?\nend\n-- 100 posts → 101 queries\n-- Execution time: ~5,000 ms\n\n-- 🟢 Eager load approach:\nposts = Post.includes(:author).all      -- 2 queries: SELECT * FROM posts\n                                          --           SELECT * FROM authors WHERE id IN (...)\nposts.each do |post|\n  puts post.author.name                  -- 0 queries (data already loaded)\nend\n-- 100 posts → 2 queries\n-- Execution time: ~50 ms (100x faster!)",
      result:[
        { approach:'N+1 (lazy load)', queries:'101', time:'~5,000 ms', load:'Very high (N round trips)' },
        { approach:'Eager load (JOIN)', queries:'1', time:'~50 ms', load:'Low (1 round trip)' },
        { approach:'Batch load', queries:'2', time:'~60 ms', load:'Low (2 round trips)' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ How ORMs Make It Worse</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">ActiveRecord's <code>lazy loading</code> (Rails), Hibernate's <code>lazy="true"</code> (Java), Entity Framework's lazy loading (C#) all default to N+1. Always use <code>includes</code>, <code>eager_load</code>, or <code>JOIN</code> to batch fetch related data.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔍 How to Detect N+1</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Watch for many identical queries with different WHERE values. Use <code>bullet</code> gem (Rails), <code>nhibernate-profiler</code> (.NET), or DB query logging. <strong>N+1 is the #1 performance bug in ORM-based applications.</strong></p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>N+1</strong> = 1 query for list + N queries for each item. Fix with <strong>JOINs</strong> or <strong>eager loading</strong> (IN clause). ORMs make this easy to trigger accidentally. Monitor your query log for repeated identical patterns. 100x speedup is typical.</p>
      </div>` });
  }
  else if (topic.id === 'cartesian-explosion') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">A <strong>Cartesian explosion</strong> (or <strong>cross join accident</strong>) happens when two tables are joined <strong>without proper conditions</strong>. Every row in table A pairs with every row in table B — if A has 1,000 rows and B has 1,000,000 rows, you get <strong>1 billion rows</strong>!</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're making sandwiches. You have 3 types of bread and 5 fillings. A proper join = 3 sandwiches (one filling per bread). A <strong>Cartesian join</strong> = 15 sandwiches (every filling with every bread). Now imagine 1,000 breads and 1,000,000 fillings...</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 CARTESIAN EXPLOSION (accidental cross join):
-- Forgetting the join condition:
SELECT u.name, o.id AS order_id
FROM users u
JOIN orders o;   -- NO ON clause! → every user with every order
-- 100 users × 10,000 orders = 1,000,000 rows!

-- 🟢 PROPER JOIN (with condition):
SELECT u.name, o.id AS order_id
FROM users u
JOIN orders o ON u.id = o.user_id;  -- correct!
-- 100 users, each with their orders → maybe 200 rows

-- Another common cause: comma-separated FROM (old syntax):
SELECT * FROM users, orders;  -- implicit cross join!
-- Always use explicit JOIN with ON clause` });
    sections.push({ type:'example', title:'Cartesian Explosion Scenarios',
      data:[], sql:"-- Scenario 1: Missing ON clause\nSELECT c.name, p.name\nFROM customers c\nJOIN products p;\n-- 1,000 customers × 500 products = 500,000 rows (wrong!)\n-- Fix: ON c.id = p.customer_id (if ordered products)\n\n-- Scenario 2: Two one-to-many joins on same level\nSELECT u.name, o.id, oi.id\nFROM users u\nJOIN orders o ON o.user_id = u.id\nJOIN order_items oi ON oi.order_id = o.id;\n-- User with 3 orders, each with 4 items → 12 rows (correct)\n-- But if you JOIN ORDERS twice unintentionally:\nSELECT *\nFROM users u\nJOIN orders o1 ON o1.user_id = u.id\nJOIN orders o2 ON o2.user_id = u.id; -- 2nd join without filter!\n-- Wrong: every order pairs with every other order!",
      result:[
        { scenario:'Forgotten ON clause', query:'FROM a JOIN b', result_size:'|a| × |b|', fix:'Add ON condition' },
        { scenario:'Comma in FROM', query:'FROM a, b', result_size:'|a| × |b|', fix:'Use explicit JOIN with ON' },
        { scenario:'Duplicate join path', query:'Two joins, same relationship', result_size:'|a| × |b| × |b|', fix:'Ensure one-to-many joins are correct' },
        { scenario:'Unrelated tables joined', query:'JOIN without logical link', result_size:'|a| × |b|', fix:'Add proper foreign key condition' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ How to Detect</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Query returns far more rows than expected. Server memory spikes. Query never finishes. <code>EXPLAIN</code> shows <code>Nested Loop</code> without index. A sudden <code>WHERE</code> that returns rows = product of table sizes is a dead giveaway.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Prevention</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Always specify <code>ON</code> with JOIN. Never use comma-separated FROM. Use <code>INNER JOIN</code> instead of just <code>JOIN</code> for clarity. Test with small datasets first. Set <code>query_timeout</code> to catch runaway queries.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Cartesian explosions</strong> occur from missing JOIN conditions or comma-separated FROM. Result = |table A| × |table B| rows. Always use explicit <code>JOIN ... ON</code>. Never <code>FROM a, b</code>. Check <code>EXPLAIN</code> for unexpected Nested Loops.</p>
      </div>` });
  }
  else if (topic.id === 'halloween-problem') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <strong>Halloween Problem</strong> occurs when an <code>UPDATE</code> statement <strong>reads rows that it just wrote</strong>, causing an infinite loop or incorrect updates. Named after a 1976 Halloween that IBM researchers discovered it while designing System R.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're giving a $10 raise to every employee earning under $50k. As you process the list, Alice ($45k) gets raised to $55k. Now Alice <strong>still qualifies</strong> for the raise (under $50k original rule), so you raise her again! And again! The Halloween Problem = <strong>updating rows that move into the update's own filter</strong>.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 HALLOWEEN PROBLEM (bad):
-- Give a 10% bonus to employees earning less than $50k
UPDATE employees
SET salary = salary * 1.1
WHERE salary < 50000;
-- Problem: As rows are updated, their salary increases.
-- If salary goes from $49k → $53.9k, it still passes the
-- WHERE salary < 50000 check IF re-evaluated.
-- Without protection, the same row could be updated repeatedly!

-- 🟢 MODERN DATABASES handle this:
-- PostgreSQL, MySQL (InnoDB), SQL Server, Oracle all use
-- snapshot isolation or row-level locking to prevent it.
-- The database captures the matching rows BEFORE updating.

-- When it still bites (older DBs or explicit cursor):
-- DECLARE cursor FOR SELECT ... WHERE salary < 50000
-- LOOP
--   UPDATE ... SET salary = salary * 1.1
--   WHERE CURRENT OF cursor
-- END LOOP
-- This is safe because it processes one row at a time.` });
    sections.push({ type:'example', title:'Halloween Problem in Practice',
      data:[], sql:"-- 🔴 Classic scenario: salary increase\nCREATE TABLE employees (\n  id INT, name VARCHAR(50), salary DECIMAL(10,2)\n);\n\nINSERT INTO employees VALUES\n  (1, 'Alice', 45000),\n  (2, 'Bob',   52000),\n  (3, 'Charlie', 48000);\n\n-- Update everyone under $50k by 10%:\nUPDATE employees SET salary = salary * 1.1 WHERE salary < 50000;\n\n-- Expected result:\n-- Alice: 45000 → 49500 (now over $50k, stops)\n-- Bob:   52000 → 52000 (not in original set)\n-- Charlie: 48000 → 52800 (now over $50k, stops)\n\n-- Without Halloween protection:\n-- Alice: 45000 → 49500 → 54450 → 59895 → ... INFINITE LOOP!\n-- Charlie: 48000 → 52800 → 58080 → ... INFINITE LOOP!\n\n-- Modern databases prevent this. But custom loops in\n-- stored procedures can still trigger it!",
      result:[
        { scenario:'UPDATE with WHERE', risk:'Rows move in/out of filter', behavior:'Automatic protection ✓', worry:'Legacy DBs, custom cursor loops' },
        { scenario:'INSERT ... SELECT', risk:'New rows match the SELECT', behavior:'Use snapshot isolation', worry:'No snapshot mode (MyISAM)' },
        { scenario:'Cursor-based loop', risk:'FETCH sees updated row again', behavior:'Not protected automatically', worry:'Always fetch into variables first' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">🔬 How DBs Prevent It</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Modern DBs use <strong>snapshot isolation</strong> (MVCC): the UPDATE reads a snapshot of matching rows from before the update began. PostgreSQL's <code>ctid</code> tracking and MySQL's InnoDB locking also prevent re-reading updated rows.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Still Relevant in Stored Procedures</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">If you write a cursor-based stored procedure that updates a table and then continues scanning, you can still trigger the Halloween Problem. Always <strong>fetch into variables</strong> before updating.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Halloween Problem</strong>: UPDATE reads rows it just modified, causing infinite loops or over-updates. Modern DBs (PostgreSQL, MySQL InnoDB, SQL Server) prevent it automatically. Concern yourself with it only when writing custom cursor-based stored procedures that modify the same table they scan.</p>
      </div>` });
  }
  else if (topic.id === 'implicit-vs-explicit') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Explicit joins</strong> use <code>JOIN ... ON</code> syntax. <strong>Implicit joins</strong> use the older comma-separated <code>FROM a, b WHERE a.id = b.id</code> syntax. Explicit is always preferred — it's clearer, less error-prone, and prevents Cartesian explosions.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">Explicit joins are like a well-organized recipe: "Mix eggs AND flour (combined)." Implicit joins are like: "Mix eggs, mix flour, combine them somewhere." Both make the same dish, but one is <strong>much</strong> easier to read and less likely to cause accidents (forgetting the AND).</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- 🔴 IMPLICIT JOIN (old style, avoid):
SELECT u.name, o.amount
FROM users u, orders o
WHERE u.id = o.user_id;
-- The join condition is buried in the WHERE clause
-- Easy to forget the WHERE → Cartesian explosion!

-- 🟢 EXPLICIT JOIN (modern, preferred):
SELECT u.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id;
-- The JOIN structure is clear
-- Missing ON → syntax error, not silent data explosion

-- Multiple tables comparison:
-- IMPLICIT:
SELECT * FROM a, b, c WHERE a.id = b.a_id AND b.id = c.b_id;
-- EXPLICIT:
SELECT * FROM a JOIN b ON a.id = b.a_id JOIN c ON b.id = c.b_id;
-- Which one is easier to understand at a glance?` });
    sections.push({ type:'example', title:'Explicit vs Implicit — Real Code',
      data:[], sql:"-- 🔴 IMPLICIT (legacy code you'll find in old apps):\nSELECT u.name, o.order_date, p.name AS product, oi.quantity\nFROM users u, orders o, order_items oi, products p\nWHERE u.id = o.user_id\n  AND o.id = oi.order_id\n  AND oi.product_id = p.id\n  AND o.order_date > '2024-01-01'\n  AND u.active = 1;\n-- WHERE clause mixes join conditions with filters!\n-- Hard to tell what's a join vs a filter\n\n-- 🟢 EXPLICIT (modern, clear):\nSELECT u.name, o.order_date, p.name AS product, oi.quantity\nFROM users u\nJOIN orders o ON u.id = o.user_id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id\nWHERE o.order_date > '2024-01-01'\n  AND u.active = 1;\n-- JOINs are clearly separated from filters!\n-- Missing a condition? Syntax error catches it.",
      result:[
        { aspect:'Syntax', implicit:'FROM a, b WHERE a.id=b.id', explicit:'FROM a JOIN b ON a.id=b.id' },
        { aspect:'Readability', implicit:'Conditions mixed with WHERE', explicit:'Separate ON for joins, WHERE for filters' },
        { aspect:'Safety', implicit:'Missing condition = Cartesian', explicit:'Missing ON = syntax error' },
        { aspect:'OUTER JOIN', implicit:'WHERE a.id *= b.id (ugly)', explicit:'LEFT / RIGHT / FULL JOIN (clear)' },
        { aspect:'Best Practice', implicit:'Avoid in new code', explicit:'Always prefer' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);">
          <span class="font-semibold text-sm" style="color:var(--red);">⚠️ Hidden Danger of Implicit Joins</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><code>FROM a, b</code> without WHERE = unintended Cartesian product. Worse: when refactoring, adding a new table via implicit join often lacks the join condition. Explicit joins make this impossible — the ON clause is right there with the table.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Key Takeaway</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Always use <strong>explicit JOIN</strong> syntax. It separates join conditions from filters, prevents Cartesian explosions, and is more readable. Implicit joins are a legacy anti-pattern — don't write them in new code, refactor them when you find them.</p>
        </div>
      </div>` });
  }
  else if (topic.id === 'index-bloat') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Index bloat</strong> occurs when indexes accumulate <strong>dead tuples</strong> or become <strong>fragmented</strong> over time. As rows are inserted, updated, and deleted, the index grows larger than necessary, slowing down queries and wasting memory.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A phone book where people move in and out but their old entries remain. Dead names pile up. To find "Smith, John" you have to skip past 50 deleted entries for every real one. Eventually the phone book is 80% dead names — that's index bloat.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Check bloat (PostgreSQL):
SELECT schemaname, tablename, indexname,
       pg_size_pretty(pg_relation_size(indexrelid)) AS size,
       round(100 * (1 - avg_leaf_density / 100)::numeric, 2) AS bloat_pct
FROM pg_stat_user_indexes;

-- Quick size comparison:
SELECT pg_size_pretty(pg_relation_size('orders')) AS table_size,
       pg_size_pretty(pg_total_relation_size('orders')) AS table_plus_indexes;
-- If table_plus_indexes is 2-5x the table_size, indexes may be bloated

-- Rebuild indexes to fix bloat:
-- PostgreSQL:
REINDEX INDEX idx_orders_user_id;
REINDEX TABLE orders;

-- MySQL / MariaDB:
OPTIMIZE TABLE orders;

-- SQL Server:
ALTER INDEX ALL ON orders REBUILD;

-- Daily maintenance (PostgreSQL):
VACUUM ANALYZE orders;  -- reclaim space + update stats` });
    sections.push({ type:'example', title:'Index Bloat Over Time',
      data:[], sql:"-- Track bloat growth:\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT, amount DECIMAL(10,2), status TEXT\n);\nCREATE INDEX idx_orders_user ON orders(user_id);\nCREATE INDEX idx_orders_status ON orders(status);\n\n-- After 1M inserts:\n-- Table size: 150 MB\n-- Indexes:    60 MB total\n-- Bloat:      ~2% (minimal)\n\n-- After 500k updates + 200k deletes:\n-- Table size: 200 MB (includes dead rows)\n-- Indexes:    180 MB (bloated! dead entries not reused)\n-- Bloat:      ~40%\n\n-- After REINDEX:\n-- Indexes:    80 MB (back to healthy size)\n-- Bloat:      ~2%\n\n-- Best practice: monitor bloat weekly,\n-- REINDEX when bloat exceeds 30%",
      result:[
        { metric:'Size', healthy:'60 MB', bloated:'180 MB (3x larger!)', after:'80 MB' },
        { metric:'Query speed (lookup)', healthy:'~2 ms', bloated:'~15 ms', after:'~2 ms' },
        { metric:'Query speed (scan)', healthy:'~100 ms', bloated:'~350 ms', after:'~100 ms' },
        { metric:'Memory usage', healthy:'Normal', bloated:'3x more RAM in buffer', after:'Normal' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">📊 Causes of Index Bloat</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><strong>High write volume</strong>: frequent INSERT/UPDATE/DELETE. <strong>Large rows</strong>: indexes on wide columns bloat faster. <strong>No maintenance</strong>: never running VACUUM/REINDEX. <strong>Fillfactor too low</strong>: leaves too much empty space. <strong>MVCC dead rows</strong>: PostgreSQL's old row versions.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">✅ Prevention</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Set <code>fillfactor</code> appropriately (90 for mostly-read tables, 70 for high-write). Schedule regular <code>VACUUM</code> / <code>REINDEX</code> during low traffic. Monitor index size vs table size. Consider <code>pg_repack</code> (PostgreSQL) for online rebuilds without locks.</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><strong>Index bloat</strong> = indexes grow beyond their useful size due to dead tuples and fragmentation. Monitor with <code>pg_stat_user_indexes</code> (PG) or <code>sys.dm_db_index_physical_stats</code> (SQL Server). <code>REINDEX</code> / <code>OPTIMIZE TABLE</code> to fix. Schedule maintenance before bloat exceeds 30%.</p>
      </div>` });
  }
  else if (topic.id === 'sql-syntax') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">SQL has a few simple <strong>rules</strong>. Don't worry — it's designed to read like plain English!</p>
      <div class="mt-4 space-y-3">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">📐 Structure</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">A SQL statement is built from <strong>clauses</strong>: <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>. Each clause does one job. They stack in a specific order.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">🔤 Case</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Keywords are <strong>case-insensitive</strong>. <code>select</code> = <code>SELECT</code>. Convention: write keywords in <strong>UPPERCASE</strong>, table/column names in lowercase.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">🔚 Semicolons</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Statements end with <code>;</code>. It tells the database: "I'm done, run my query now."</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">💧 Whitespace</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Spaces, tabs, and newlines are <strong>ignored</strong>. Write a query on one line or split across ten — SQL doesn't care. Use line breaks to make it readable.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">📝 Strings vs Numbers</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Text goes inside <strong>single quotes</strong>: <code>'London'</code>. Numbers are bare: <code>42</code>, <code>19.99</code>.</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- SQL Clause Order (simplified):
SELECT column1, column2     -- 3. Which columns to show
FROM table_name            -- 1. Which table to use
WHERE condition            -- 2. Filter rows
ORDER BY column;           -- 4. Sort results

-- Real example with all parts:
SELECT name, age
FROM users
WHERE city = 'London'
ORDER BY age DESC;

-- Reads like: "show me names and ages
--  from the users table, only for London,
--  oldest first."` });
    sections.push({ type:'visual-sql-flow' });
    sections.push({ type:'example', title:'Reading SQL Like English',
      data:[
        { id:1, name:'Alice',   city:'London', age:30, salary:50000 },
        { id:2, name:'Bob',     city:'Paris',  age:25, salary:42000 },
        { id:3, name:'Charlie', city:'London', age:35, salary:65000 },
        { id:4, name:'Diana',   city:'Berlin', age:28, salary:48000 },
      ],
      sql:'SELECT name, salary\nFROM employees\nWHERE salary >= 50000\nORDER BY salary DESC;',
      result:[
        { name:'Charlie', salary:65000 },
        { name:'Alice',   salary:50000 },
      ]});
  }
  else if (topic.id === 'comments') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>Comments</strong> are notes in your SQL code for <strong>humans</strong> to read. The database ignores them completely — like sticky notes on your code.</p>
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">-- Single Line</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Two dashes <code>--</code> comment out everything after them on that line. Use for short notes.</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">/* Multi-Line */</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Wrap text in <code>/* ... */</code> to comment out multiple lines. Use for documenting queries or temporarily disabling code.</p>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- ================================
-- 🔍 Monthly Sales Report
-- Author: Alice
-- Last Modified: 2024-03-15
-- ================================

/* Step 1: Calculate total sales
   grouped by product category.
   Joins orders + products tables. */
SELECT
  p.category,
  SUM(o.amount) AS total_sales
FROM orders o
JOIN products p ON o.product_id = p.id
WHERE o.order_date >= '2024-01-01'
  -- AND o.status = 'completed'  -- temp disabled
GROUP BY p.category
ORDER BY total_sales DESC;

-- This query powers the dashboard chart` });
    sections.push({ type:'example', title:'Why Comments Matter',
      steps:[
        { text:'You write a query today. Every detail is fresh in your mind.', highlight:0 },
        { text:'You come back 6 months later. "Why did I use this JOIN?" No comments = confusion.', highlight:1 },
        { text:'With helpful comments: "This JOIN filters returns only active customers." Saves hours.', highlight:2 },
        { text:'Good comments explain WHY, not WHAT. The code already shows what it does.', highlight:3 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Pro Tip</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);">Comment the <strong>business logic</strong> and <strong>why</strong> you chose a certain approach. Don't state the obvious (<code>-- SELECT names</code> is useless). Answer: "What business rule is this handling?"</p>
      </div>` });
  }
  else if (topic.id === 'like') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <code>LIKE</code> operator searches for a <strong>pattern</strong> in a text column. Instead of "is this exactly equal to X?", you ask "does this look like X?"</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You walk into a library and tell the librarian: <em>"I want a book that starts with 'The Great'."</em> The librarian doesn't need the exact title — they scan the shelves and find <strong>The Great Gatsby</strong>. <code>LIKE</code> does the same: it finds partial matches.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="mt-4">
        <p class="font-semibold text-sm mb-3">🔤 Wildcard Characters Used with LIKE:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
            <span class="font-mono font-bold" style="color:var(--accent);">%</span>
            <span class="text-sm ml-2 font-semibold">Percent</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">Matches <strong>zero or more</strong> characters. Like a wildcard in a card game — it stands for "anything."</p>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
            <span class="font-mono font-bold">_</span>
            <span class="text-sm ml-2 font-semibold">Underscore</span>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">Matches exactly <strong>one</strong> character. Like a blank tile in Scrabble — you know one letter is missing.</p>
          </div>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Starts with 'L':
SELECT * FROM products WHERE name LIKE 'L%';
-- Laptop, Lamp, Lemonade

-- Ends with 'e':
SELECT * FROM products WHERE name LIKE '%e';
-- Apple, Orange, Skateboard

-- Contains 'book' anywhere:
SELECT * FROM products WHERE name LIKE '%book%';
-- Notebook, Bookmark, Textbook

-- Exactly 5 letters, ends with 'e':
SELECT * FROM products WHERE name LIKE '____e';
-- Apple (5 chars, ends in e), Table` });
    sections.push({ type:'example', title:'LIKE in Action',
      data:[
        { id:1, name:'Laptop',     category:'Electronics', price:999.99 },
        { id:2, name:'Notebook',   category:'Stationery',  price:4.99 },
        { id:3, name:'Lamp',       category:'Home',        price:29.99 },
        { id:4, name:'Apple',      category:'Food',        price:1.29 },
        { id:5, name:'Table',      category:'Home',        price:149.99 },
        { id:6, name:'Textbook',   category:'Books',       price:59.99 },
        { id:7, name:'Skateboard', category:'Sports',      price:39.99 },
      ],
      sql:"SELECT name, category, price\nFROM products\nWHERE name LIKE 'L%'\n   OR name LIKE '%book%'\nORDER BY price;",
      result:[
        { name:'Lamp',     category:'Home',       price:29.99 },
        { name:'Laptop',   category:'Electronics', price:999.99 },
        { name:'Notebook', category:'Stationery',  price:4.99 },
        { name:'Textbook', category:'Books',       price:59.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>LIKE</code> with <code>%</code> is for <strong>flexible text searching</strong>. Use <code>%text%</code> to find "contains," <code>text%</code> for "starts with," and <code>%text</code> for "ends with." The underscore <code>_</code> matches exactly one character.</p>
      </div>` });
  }
  else if (topic.id === 'wildcards') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed"><strong>SQL Wildcards</strong> are special characters used with <code>LIKE</code> to match patterns in text. They fill in the missing pieces when you don't know the exact value.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're searching your phone contacts. You remember the name starts with "Dan" but not the rest. You type <strong>Dan</strong> and scroll — finding Daniel, Danielle, Danny. The <code>%</code> wildcard does the same: <code>LIKE 'Dan%'</code> finds all of them.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- % (percent) — any number of characters (0 or more):
SELECT * FROM employees WHERE name LIKE 'J%';     -- starts with J
SELECT * FROM employees WHERE name LIKE '%son';   -- ends with "son"
SELECT * FROM employees WHERE name LIKE '%a%';    -- contains letter "a"

-- _ (underscore) — exactly one character:
SELECT * FROM employees WHERE name LIKE 'J_n';    -- Jan, Jen, Jon
SELECT * FROM employees WHERE email LIKE '____@%';-- emails with 4-char usernames
SELECT * FROM employees WHERE phone LIKE '___-___-____';` });
    sections.push({ type:'example', title:'Wildcards at Work',
      data:[
        { id:1, name:'Alice Johnson', email:'alice@co.com', dept:'Engineering' },
        { id:2, name:'Bob Smith',     email:'bob@co.com',   dept:'Marketing' },
        { id:3, name:'Charlie Brown', email:'charlie@co.com', dept:'Sales' },
        { id:4, name:'Diana Prince',  email:'diana@co.com', dept:'Engineering' },
        { id:5, name:'Eve Davis',     email:'eve@co.com',   dept:'Marketing' },
        { id:6, name:'Frank Johnson', email:'frank@co.com', dept:'Sales' },
        { id:7, name:'Grace Hopper',  email:'grace@co.com', dept:'Engineering' },
        { id:8, name:'Hank Johnson',  email:'hank@co.com',  dept:'Marketing' },
      ],
      sql:"SELECT name, email, dept\nFROM employees\nWHERE name LIKE '%J%'\n  AND name LIKE '%son%'\nORDER BY name;",
      result:[
        { name:'Alice Johnson', email:'alice@co.com', dept:'Engineering' },
        { name:'Frank Johnson', email:'frank@co.com', dept:'Sales' },
        { name:'Hank Johnson',  email:'hank@co.com',  dept:'Marketing' },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold" style="color:var(--accent);">LIKE 'J%'</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Starts with J → Johnson, Jackson, James</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold" style="color:var(--accent);">LIKE '%son'</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Ends with "son" → Jackson, Anderson</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold" style="color:var(--accent);">LIKE '%a%'</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">Contains "a" anywhere → Alice, Charlie, Diana</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-mono font-bold" style="color:var(--accent);">LIKE 'J___'</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);">J + exactly 3 chars → Jack, June, Jane</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>%</code> is the <strong>"anything"</strong> wildcard (zero or more chars). <code>_</code> is the <strong>"something"</strong> wildcard (exactly one char). Combine them to build precise pattern matchers.</p>
      </div>` });
  }
  else if (topic.id === 'in-operator') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <code>IN</code> operator checks if a value <strong>matches any item</strong> in a list. It's a cleaner, faster way to write multiple <code>OR</code> conditions.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're at a VIP club. The bouncer has a <strong>guest list</strong>: ["Alice", "Bob", "Charlie"]. He checks: <em>"Is your name on the list?"</em> If yes, you enter. <code>IN</code> does exactly that — checks membership in a set.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Instead of multiple ORs:
SELECT * FROM products
WHERE category = 'Electronics' OR category = 'Books' OR category = 'Sports';

-- Use IN — much cleaner:
SELECT * FROM products
WHERE category IN ('Electronics', 'Books', 'Sports');

-- NOT IN — exclude a list:
SELECT * FROM products
WHERE category NOT IN ('Food', 'Stationery');

-- IN with a subquery:
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders WHERE total > 100);` });
    sections.push({ type:'example', title:'IN Operator in Action',
      data:[
        { id:1, name:'Laptop',     category:'Electronics', price:999.99, stock:15 },
        { id:2, name:'Notebook',   category:'Stationery',  price:4.99,   stock:200 },
        { id:3, name:'T-Shirt',    category:'Clothing',    price:19.99,  stock:80 },
        { id:4, name:'Mouse',      category:'Electronics', price:29.99,  stock:120 },
        { id:5, name:'Textbook',   category:'Books',       price:59.99,  stock:40 },
        { id:6, name:'Soccer Ball',category:'Sports',      price:24.99,  stock:60 },
        { id:7, name:'Apple',      category:'Food',        price:1.29,   stock:500 },
        { id:8, name:'Backpack',   category:'Clothing',    price:49.99,  stock:35 },
      ],
      sql:"SELECT name, category, price\nFROM products\nWHERE category IN ('Electronics', 'Books', 'Sports')\nORDER BY price;",
      result:[
        { name:'Soccer Ball', category:'Sports',      price:24.99 },
        { name:'Mouse',       category:'Electronics', price:29.99 },
        { name:'Textbook',    category:'Books',       price:59.99 },
        { name:'Laptop',      category:'Electronics', price:999.99 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Pro Tips</p>
        <ul class="text-sm mt-2 space-y-1" style="color:var(--text-secondary);">
          <li>• <code>IN</code> with a list is <strong>faster</strong> than many <code>OR</code> conditions</li>
          <li>• <code>NOT IN</code> with a <code>NULL</code> in the list returns <strong>no rows</strong> — the result is unknown!</li>
          <li>• The list can be numbers, text, or dates: <code>IN (1, 3, 5)</code> or <code>IN ('NYC', 'LAX')</code></li>
        </ul>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>IN</code> checks membership in a set. It's shorter, faster, and more readable than chaining <code>OR</code>. Use <code>NOT IN</code> to exclude values — but watch out for <code>NULL</code> in the list!</p>
      </div>` });
  }
  else if (topic.id === 'between') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <code>BETWEEN</code> operator selects values within a <strong>range</strong>. It's inclusive — the start and end values are part of the result.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">You're at a bowling alley picking a ball. You want one <strong>between 10 and 14 pounds</strong>. The clerk shows you: 10, 11, 12, 13, and 14-pound balls. Both ends are included. That's exactly what <code>BETWEEN</code> does.</p>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- BETWEEN is inclusive (10 and 20 are included):
SELECT * FROM products WHERE price BETWEEN 10 AND 20;
-- Same as: price >= 10 AND price <= 20

-- Works with dates too:
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';

-- Works with text (alphabetical range):
SELECT * FROM products WHERE name BETWEEN 'Apple' AND 'Orange';
-- Apple, Banana, Cherry... but NOT Orange (orange > Orange alphabetically!)

-- NOT BETWEEN (exclude a range):
SELECT * FROM products WHERE price NOT BETWEEN 50 AND 100;` });
    sections.push({ type:'example', title:'BETWEEN in Action',
      data:[
        { id:1, name:'USB Drive',    price:12.99,  stock:200, category:'Electronics' },
        { id:2, name:'Mouse',        price:29.99,  stock:120, category:'Electronics' },
        { id:3, name:'Keyboard',     price:79.99,  stock:45,  category:'Electronics' },
        { id:4, name:'Monitor',      price:299.99, stock:30,  category:'Electronics' },
        { id:5, name:'Desk Lamp',    price:39.99,  stock:80,  category:'Home' },
        { id:6, name:'Bookshelf',    price:149.99, stock:15,  category:'Home' },
        { id:7, name:'Water Bottle', price:9.99,   stock:300, category:'Sports' },
        { id:8, name:'Backpack',     price:49.99,  stock:35,  category:'Clothing' },
      ],
      sql:"SELECT name, price, stock\nFROM products\nWHERE price BETWEEN 25 AND 100\nORDER BY price;",
      result:[
        { name:'Mouse',     price:29.99,  stock:120 },
        { name:'Desk Lamp', price:39.99,  stock:80 },
        { name:'Backpack',  price:49.99,  stock:35 },
        { name:'Keyboard',  price:79.99,  stock:45 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
          <span class="font-semibold text-sm" style="color:var(--accent);">💰 Numbers</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><code>BETWEEN 25 AND 100</code> → prices from $25 to $100, both ends included</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
          <span class="font-semibold text-sm" style="color:var(--green);">📅 Dates</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><code>BETWEEN '2024-01-01' AND '2024-03-31'</code> → all Q1 orders</p>
        </div>
        <div class="p-3 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
          <span class="font-semibold text-sm">🔤 Text</span>
          <p class="text-xs mt-1" style="color:var(--text-secondary);"><code>BETWEEN 'A' AND 'M'</code> → names starting with A through M</p>
        </div>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>BETWEEN</code> is <strong>inclusive</strong> on both ends. It works with numbers, dates, and text. For exclusive ranges (excluding the endpoints), use <code>&gt; AND &lt;</code> instead.</p>
      </div>` });
  }
  else if (topic.id === 'case-expression') {
    sections.push({ type:'explanation',
      html:`<p class="text-lg leading-relaxed">The <code>CASE</code> expression adds <strong>if-then-else logic</strong> to SQL. It checks conditions and returns values based on which condition is true — like a switch statement in programming.</p>
      <div class="mt-4 p-4 rounded-lg" style="background:var(--bg-elevated);border:1px solid var(--border);">
        <p class="font-semibold text-sm mb-2">🎯 Think of it like this:</p>
        <p class="text-sm" style="color:var(--text-secondary);">A teacher grading papers: <em>"If score >= 90 → 'A', else if score >= 80 → 'B', else if score >= 70 → 'C', else 'F'."</em> That's exactly what <code>CASE</code> does — it translates raw values into meaningful categories.</p>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="mt-4">
        <p class="font-semibold text-sm mb-3">📝 Two Forms of CASE:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 rounded-lg" style="background:var(--accent-soft);border:1px solid var(--border-accent);">
            <p class="font-semibold text-sm" style="color:var(--accent);">Simple CASE</p>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">Compares one expression to specific values. Like a <strong>vending machine</strong> — A1 → Coke, A2 → Sprite, default → Water.</p>
          </div>
          <div class="p-3 rounded-lg" style="background:var(--green-soft);border:1px solid var(--green);">
            <p class="font-semibold text-sm" style="color:var(--green);">Searched CASE</p>
            <p class="text-xs mt-1" style="color:var(--text-secondary);">Evaluates independent boolean conditions. Like <strong>hospital triage</strong> — fever > 102 → urgent, stable → wait.</p>
          </div>
        </div>
      </div>` });
    sections.push({ type:'syntax',
      sql:`-- Searched CASE (most common — flexible conditions):
SELECT name, salary,
  CASE
    WHEN salary >= 100000 THEN 'Executive'
    WHEN salary >= 70000  THEN 'Senior'
    WHEN salary >= 40000  THEN 'Mid-Level'
    ELSE 'Junior'
  END AS level
FROM employees;

-- Simple CASE (one column, specific values):
SELECT name,
  CASE dept
    WHEN 'Engineering' THEN '🔧'
    WHEN 'Sales'       THEN '💰'
    WHEN 'Marketing'   THEN '📢'
    ELSE '❓'
  END AS icon
FROM employees;` });
    sections.push({ type:'example', title:'CASE Expression in Action',
      data:[
        { id:1, name:'Alice',   dept:'Engineering', salary:95000 },
        { id:2, name:'Bob',     dept:'Sales',       salary:55000 },
        { id:3, name:'Charlie', dept:'Engineering', salary:120000 },
        { id:4, name:'Diana',   dept:'Marketing',   salary:72000 },
        { id:5, name:'Eve',     dept:'Sales',       salary:42000 },
        { id:6, name:'Frank',   dept:'Engineering', salary:38000 },
      ],
      sql:"SELECT name,\n  CASE\n    WHEN salary >= 70000 THEN 'Senior'\n    WHEN salary >= 40000 THEN 'Mid-Level'\n    ELSE 'Junior'\n  END AS level,\n  salary\nFROM employees\nORDER BY salary DESC;",
      result:[
        { name:'Charlie', level:'Senior',    salary:120000 },
        { name:'Alice',   level:'Senior',    salary:95000 },
        { name:'Diana',   level:'Senior',    salary:72000 },
        { name:'Bob',     level:'Mid-Level', salary:55000 },
        { name:'Eve',     level:'Mid-Level', salary:42000 },
        { name:'Frank',   level:'Junior',    salary:38000 },
      ]});
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);">
        <p class="text-sm font-semibold" style="color:var(--amber);">💡 Where to Use CASE</p>
        <ul class="text-sm mt-2 space-y-1" style="color:var(--text-secondary);">
          <li>• In <code>SELECT</code> — create calculated columns (labels, categories, score grades)</li>
          <li>• In <code>ORDER BY</code> — custom sort: <code>ORDER BY CASE status WHEN 'Urgent' THEN 1 WHEN 'Normal' THEN 2 END</code></li>
          <li>• In <code>UPDATE</code> — conditionally set values: <code>SET price = CASE WHEN ...</code></li>
          <li>• The first matching <code>WHEN</code> wins — <strong>order matters!</strong> Put the most specific condition first</li>
          <li>• Always include an <code>ELSE</code> to handle unexpected values</li>
        </ul>
      </div>` });
    sections.push({ type:'explanation',
      html:`<div class="p-4 rounded-lg" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);">
        <p class="text-sm font-semibold" style="color:var(--green);">✅ Key Takeaway</p>
        <p class="text-sm mt-1" style="color:var(--text-secondary);"><code>CASE</code> brings <strong>conditional logic</strong> into SQL. Use searched CASE for flexible conditions, simple CASE for one-column comparisons. Always provide an <code>ELSE</code> for safety!</p>
      </div>` });
  }
  else {
    // Generic content for any topic
    sections.push({ type:'explanation',
      html:`<p>This topic covers <strong>${T}</strong>. Select a specific subtopic or example below to explore the concept in detail with interactive visuals.</p>` });
    sections.push({ type:'explanation',
      html:`<p class="text-[var(--text-secondary)]">Understanding ${T.toLowerCase()} is essential for writing efficient and correct SQL. Master the syntax, study the examples, and experiment in the sandbox.</p>` });
    sections.push({ type:'syntax',
      sql:`-- ${T}\n-- Add your SQL example here\nSELECT *\nFROM information_schema.tables\nWHERE table_schema = 'public';` });
  }

  return sections;
}

/* ─── Demo Datasets ─── */
const DATASETS = {
  users: [
    { id:1, name:'Alice',   email:'alice@example.com',   city:'London',     age:30, dept:'Engineering' },
    { id:2, name:'Bob',     email:'bob@example.com',     city:'Paris',      age:25, dept:'Sales' },
    { id:3, name:'Charlie', email:'charlie@example.com', city:'London',     age:35, dept:'Engineering' },
    { id:4, name:'Diana',   email:'diana@example.com',   city:'Berlin',     age:28, dept:'Marketing' },
    { id:5, name:'Eve',     email:'eve@example.com',     city:'Madrid',     age:32, dept:'Sales' },
    { id:6, name:'Frank',   email:'frank@example.com',   city:'Rome',       age:40, dept:'Engineering' },
    { id:7, name:'Grace',   email:'grace@example.com',   city:'London',     age:22, dept:'Marketing' },
    { id:8, name:'Hank',    email:'hank@example.com',   city:'Paris',      age:45, dept:'Engineering' },
    { id:9, name:'Ivy',     email:'ivy@example.com',     city:'Berlin',     age:29, dept:'Sales' },
    { id:10,name:'Jack',    email:'jack@example.com',    city:'London',     age:38, dept:'Engineering' },
  ],
  orders: [
    { id:1, user_id:1, product:'Widget',    amount:29.99,  qty:2 },
    { id:2, user_id:1, product:'Gadget',    amount:49.99,  qty:1 },
    { id:3, user_id:3, product:'Widget',    amount:29.99,  qty:3 },
    { id:4, user_id:3, product:'Doohickey', amount:99.99,  qty:1 },
    { id:5, user_id:5, product:'Gadget',    amount:49.99,  qty:2 },
    { id:6, user_id:6, product:'Widget',    amount:29.99,  qty:5 },
    { id:7, user_id:8, product:'Doohickey', amount:99.99,  qty:1 },
    { id:8, user_id:10,product:'Gadget',    amount:49.99,  qty:2 },
  ],
  employees: [
    { id:1, name:'Alice',   dept:'Engineering', salary:95000,  city:'London' },
    { id:2, name:'Bob',     dept:'Sales',       salary:72000,  city:'Paris' },
    { id:3, name:'Charlie', dept:'Engineering', salary:110000, city:'London' },
    { id:4, name:'Diana',   dept:'Marketing',   salary:68000,  city:'Berlin' },
    { id:5, name:'Eve',     dept:'Sales',       salary:85000,  city:'Madrid' },
  ],
};

/* ─── Alpine.js Component ─── */
window.__gsComponent = () => ({
  /* ── State ── */
  currentId: null,
  loading: false,
  search: '',
  dark: localStorage.getItem('gs-dark') !== 'false',
  sidebarOpen: true,
  topicContent: {},
  completed: new Set(JSON.parse(localStorage.getItem('gs-completed') || '[]')),
  stepIndex: 0,

  /* ── Init ── */
  init() {
    this.applyTheme();
    if (window.innerWidth <= 768) this.sidebarOpen = false;
    const hash = location.hash.replace('#', '');
    if (hash && window.TOPICS.some(t => t.id === hash)) {
      this.$nextTick(() => this.selectTopic(hash));
    }
    window.addEventListener('hashchange', () => {
      const id = location.hash.replace('#', '');
      if (id && window.TOPICS.some(t => t.id === id)) this.selectTopic(id);
    });
  },

  /* ── Computed ── */
  get current() {
    return window.TOPICS.find(t => t.id === this.currentId) || null;
  },
  get sections() {
    return this.topicContent[this.currentId] || [];
  },
  get groupedTopics() {
    const map = {};
    const filtered = this.filteredTopics;
    for (const t of filtered) {
      if (!map[t.c]) map[t.c] = [];
      map[t.c].push(t);
    }
    const result = [];
    for (const cat of window.CATEGORIES) {
      if (map[cat.id]) result.push({ ...cat, topics: map[cat.id] });
    }
    return result;
  },
  get filteredTopics() {
    if (!this.search.trim()) return window.TOPICS;
    const q = this.search.toLowerCase();
    return window.TOPICS.filter(t =>
      t.t.toLowerCase().includes(q) ||
      t.id.includes(q) ||
      window.CATEGORIES.find(c => c.id === t.c)?.title.toLowerCase().includes(q)
    );
  },
  get progress() {
    return Math.round((this.completed.size / window.TOPICS.length) * 100);
  },
  get prevTopic() {
    const idx = window.TOPICS.findIndex(t => t.id === this.currentId);
    return idx > 0 ? window.TOPICS[idx - 1] : null;
  },
  get nextTopic() {
    const idx = window.TOPICS.findIndex(t => t.id === this.currentId);
    return idx < window.TOPICS.length - 1 ? window.TOPICS[idx + 1] : null;
  },

  /* ── Methods ── */
  async selectTopic(id) {
    if (id === this.currentId) return;
    this.currentId = id;
    this.loading = true;
    this.stepIndex = 0;
    this.search = '';

    if (!this.topicContent[id]) {
      this.topicContent[id] = await window.loadContent(id);
    }

    this.loading = false;
    location.hash = id;

    this.$nextTick(() => {
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (window.innerWidth <= 768) this.sidebarOpen = false;
  },

  toggleDark() {
    this.dark = !this.dark;
    this.applyTheme();
    localStorage.setItem('gs-dark', this.dark);
  },

  applyTheme() {
    document.documentElement.classList.toggle('dark', this.dark);
  },

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  },

  closeSidebar() {
    if (window.innerWidth <= 768) this.sidebarOpen = false;
  },

  markComplete(id) {
    if (this.completed.has(id)) this.completed.delete(id);
    else this.completed.add(id);
    localStorage.setItem('gs-completed', JSON.stringify([...this.completed]));
  },

  goTo(topic) {
    if (topic) this.selectTopic(topic.id);
  },

  goPrev() {
    const p = this.prevTopic;
    if (p) this.selectTopic(p.id);
  },

  goNext() {
    const n = this.nextTopic;
    if (n) this.selectTopic(n.id);
  },

  catOpen(cat) {
    return this.filteredTopics.some(t => t.c === cat.id &&
      t.id === this.currentId);
  },

  sectionKey(section, idx) {
    return `${this.currentId}-${idx}`;
  },

  getDataset(name) {
    return window.DATASETS[name] || window.DATASETS.users;
  },

  onKeydown(e) {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowLeft') this.goPrev();
    if (e.key === 'ArrowRight') this.goNext();
    if (e.key === 'Escape') this.sidebarOpen = false;
  },
});

/* ─── Expose to Alpine template scope ─── */
window.TOPICS = TOPICS;
window.CATEGORIES = CATEGORIES;
window.loadContent = loadContent;
window.CONTENT = CONTENT;
window.DATASETS = DATASETS;
