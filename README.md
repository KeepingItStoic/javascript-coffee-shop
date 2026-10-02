# ClydeBank Coffee Shop — Follow-Along Build

One project that grows as you read *JavaScript QuickStart Guide* (Robert Oliver).
Instead of opening a new copy of the site each chapter, you keep editing the **same files** in `coffee-shop/`.

## Folder layout

| Folder | What it's for |
|---|---|
| `coffee-shop/` | The project. `index.html`, `style.css`, `shop.js`, `coffee-cup.svg`. Starts at the Chapter 1 state. |
| `scratch/` | The book's side examples (greetings, color picker, iterators, timers…). Keeps the shop code clean. |
| `backend/` | Chapter 16's Node.js server. Only a stub until then. |
| `CHAPTER-NOTES.md` | What to pay extra attention to, chapter by chapter, plus a checklist of what to add to the shop. |

## Workflow per chapter

1. Read the chapter, typing the side examples into `scratch/` (or the Console).
2. At the chapter's **ClydeBank Coffee Shop** section, edit `coffee-shop/` — `shop.js` has a labeled `TODO` block for each chapter.
3. Open `coffee-shop/index.html` in Chrome, press **F12**, check the Console for errors.
4. Tick the chapter off in `CHAPTER-NOTES.md`.
5. Optional but recommended: commit (`git add . && git commit -m "Ch 3 dynamic inventory"`). You'll have a history of every stage, and it's practice for Chapter 18.

## Checking your work

The official finished code is in your clone at
`D:\ProgrammingAndDevelopment\JavaScript\JavaScript-QuickStartGuide\JavaScript-CoffeeShopWebsite`.
Try each step yourself first, then compare — don't copy.

## Running it

- **Chapters 1–11:** double-click `coffee-shop/index.html`.
- **Chapter 12+ (cookies):** cookies don't work from `file://`. From this folder run
  `npx http-server coffee-shop` and open `http://127.0.0.1:8080` (Appendix II).
- **Chapter 16:** `cd backend` then `node server.js` → `http://127.0.0.1:3000`.
