# Chapter Notes — What to Watch For

For each chapter: the concepts that trip people up, and what changes in the coffee shop (☐ = to do).

---

## Introduction
- Folder habit: one folder per project. This follow-along folder *is* that.
- Get Chrome, VS Code, and Node.js LTS installed now — Node isn't needed until Ch 16, but it's one less thing later.

## Ch 1 — Getting Started
- **Three ways to run JS:** Console (quick tests), `<script>` in HTML, separate `.js` file. The separate file is how you'll work almost everywhere.
- **Script placement:** `<script src>` goes at the bottom of `<body>` so the elements exist before JS touches them. This comes back hard in Ch 8/9/13.
- **Semicolons:** the book skips them. Fine — just be consistent. (If you ever minify, use them.)
- `console.log` is your best debugging tool. Get used to keeping DevTools open.

**Shop:**
- ☐ Open `coffee-shop/index.html`, confirm the "now open!" message appears in the Console.

## Ch 2 — Variables
- **`let` / `const` vs undeclared:** the early examples assign without `let`. From here on, always use `const` by default and `let` only when the value changes. Avoid `var`.
- **Template literals** use backticks, not quotes. `${}` only works inside backticks — a very common bug.
- **Strings vs numbers:** `"1" + 1` is `"11"`. `parseInt(str, 10)` converts; always pass the `10`.
- **Arrays are zero-indexed.** The second item is `[1]`.
- `name` is a bad variable name in the browser (collides with `window.name`).

**Shop:** nothing yet — do the form/greeting examples in `scratch/`.

## Ch 3 — Program Flow
- **`==` vs `===`:** prefer `===` (checks type too). `1 == "1"` is true; `1 === "1"` is false.
- **Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`. `if (!v)` catches all of them.
- **Off-by-one:** `i <= 10` runs 11 times. Loop arrays with `i < array.length`.
- `switch` needs `break` or it falls through to the next case.
- Redeclaration errors in the Console → just refresh the page.

**Shop:**
- ☐ Remove the four `<li>`s from `index.html`; add `id="coffee-menu"` to the `<ul>`.
- ☐ In `shop.js`: names array, prices array, `getElementById`, `for` loop adding `<li>`s.
- ☐ Use `.toFixed(2)` so $3.50 doesn't show as $3.5.

## Ch 4 — Functions
- **`greeting` vs `greeting()`**: passing a function to `addEventListener` = **no parentheses**. With `()` it runs immediately. This is the #1 bug of the whole book — watch for it every time.
- **Default parameters** (`taxRate = 0.08`).
- **`return`** sends a value back; without it you get `undefined`.
- **Money math:** floating point is imprecise. `Math.round(x * 100) / 100` beats `parseFloat(x.toFixed(2))`.
- Declared functions are *hoisted*; function expressions are not.

**Shop:**
- ☐ Wrap the loop in `populateMenu(container)` and call it.

## Ch 5 — Closure
- **Hardest chapter conceptually.** Don't stall here — it clicks later (Ch 6, Ch 9's click counter).
- Scope flows **inward**: inner functions see outer variables, not the reverse.
- A closure = a function that "remembers" the variables around where it was created, even after the outer function finishes.
- Each call to the outer function makes a **separate** set of remembered variables (`item1`, `item2`…).

**Shop:** nothing — but type out the `cartItem` example; it's the seed of the Ch 12 cart.

## Ch 6 — Objects
- **Class = cookie cutter, object = cookie.** You can also make cookies by hand (object literals) — the book prefers that.
- **`this`** means "the object this method was called on." Inside an arrow function it does *not* — important in Ch 10/12.
- `for...in` gives you property **names**; use `obj[key]` for values.
- Iterators: `next()` returns `{ value, done }`. Note the "starts at 2 instead of 0" bug — understand why.

**Shop:**
- ☐ Replace arrays + function with one `menu` object: `inventory` (name → price) + `populate(container)` using `this.inventory`.

## Ch 7 — JSON
- JSON keys **must** be in double quotes. No functions, no trailing commas, no comments.
- `JSON.stringify` → object to string; `JSON.parse` → string to object. You'll use both constantly (cookies in Ch 12, fetch in Ch 16).

**Shop:**
- ☐ In the Console: assign new prices to `menu.inventory`, clear `menuList.innerHTML`, re-run `populate`.

## Ch 8 — The DOM
- **Singular vs plural:** `getElementById` returns one element; `getElementsByClassName` / `ByTagName` / `querySelectorAll` return a collection — you must loop or index `[0]`.
- `querySelectorAll` results **don't update** if the DOM changes; `getElementsBy…` do.
- CSS property names become camelCase: `font-weight` → `fontWeight`.
- Prefer `classList.add/remove` over setting individual styles.
- `createElement` + `appendChild` > `innerHTML +=` (safer, faster, keeps event listeners).
- Nothing edits the actual file — only the in-memory page.

**Shop:**
- ☐ Rewrite `populate` with `createElement("li")`, `textContent`, `appendChild`.

## Ch 9 — Asynchronous JS
- **`DOMContentLoaded`** — wrap code that touches elements in it (or use `defer`).
- Named handler functions > inline anonymous ones (reusable, easier to debug). Avoid `onclick="..."` in HTML.
- `this` inside a regular-function event handler = the element clicked.
- `setTimeout` (once) vs `setInterval` (repeat); always keep the id so you can `clearInterval`.
- **Promises:** `.then` runs later, when the work finishes. This is the foundation for `fetch` in Ch 16 — worth re-reading.

**Shop:** nothing — do the click counter and timeout examples in `scratch/`.

## Ch 10 — Design Patterns
- **Self-rendering objects:** data + the code to display it live together. This is the architecture for the rest of the book.
- **`Object.create(prototype)`** makes a new object that borrows the prototype's methods.
- Passing a function that needs arguments to an event: wrap it — `(event) => onChange(swatch, event)`.
- Optional parameters must come after required ones; to set a later one you must pass the earlier ones.
- Start your own `mycode.js` snippet file of utility functions (e.g. `capFirstLetter`).

**Shop:**
- ☐ `index.html`: replace the `<ul>` with `<div id="coffee-menu-container"></div>`.
- ☐ `shop.js`: `listPrototype` with `render(...)`; separate `inventory` object; `Object.create` + `render`.

## Ch 11 — JavaScript-Driven Website
- **SVG needs `createElementNS`** with the SVG namespace, not `createElement`, and `setAttribute`.
- **Render order:** the main menu must exist before the hamburger looks it up.
- `outerHTML` includes the element's own tags; `innerHTML` doesn't. But copying `outerHTML` **drops event listeners** — that's why the book switches to `appendChild`.
- `event.preventDefault()` stops a link from navigating.
- Long argument lists → pass one config object instead.
- The book sets styles in JS on purpose; in real projects you'd usually put them in CSS.

**Shop:**
- ☐ `index.html`: Open Sans link, wrap body content in `<div id="main">`.
- ☐ `style.css`: Ch 11 updates (darker body, `.hamburger`, `.shop`, `.contact-us`).
- ☐ `shop.js`: `hamburgerMenu`, `mainMenu`, `menuLinks`, `DOMContentLoaded` wrapper.
- ☐ Optional: `currentPage` + `#` links to show/hide sections as "pages."

## Ch 12 — Advanced Techniques
- `slice` / `substring` end index is **exclusive**. Months in `Date` are **0–11**.
- `Math.floor(Math.random() * n) + 1` for 1…n.
- `try / catch / finally` and `throw new Error(...)`.
- **Arrow functions** are shorthand — but they don't get their own `this`. (The book's `cartViewPrototype.render` uses an arrow + `this` and would break; see if you can spot why.)
- **Cookies:** one string of `name=value;` pairs, 4 KB max, editable by the user, **don't work from `file://`**. Use `npx http-server`.
- `encodeURIComponent` / `decodeURIComponent` when storing JSON in a cookie.
- Security takeaway: never trust prices coming from the browser — the server must check them.

**Shop:**
- ☐ `style.css`: `.add-to-cart-button`.
- ☐ `shop.js`: locale/currency + `Intl.NumberFormat`, cookie helpers, `addToCart` / `removeFromCart`, `buttonPrototype`, Add to Cart buttons.
- ☐ Test via `http-server`; run `getCart()` in the Console.

## Ch 13 — Animation
- `setInterval` animation: read position with `getComputedStyle`, change a bit each tick, `clearInterval` to stop.
- **Web Animations API** (`element.animate`) is smoother and lets the browser do the work — prefer it.
- Accessibility: honor `prefers-reduced-motion`, no flashing, give users enough time.

**Shop:** optional — animate the menu sliding in, or the Add to Cart confirmation.

## Ch 14 — Junk Drawer
- `window` is the global object: `location`, `history`, `navigator`.
- **Sets:** loop with `for...of`, **not** `for...in`.
- `Map` (key/value store) ≠ `array.map()` (transform an array).
- **Avoid `eval`** — security and performance risk.
- **Regex:** focus on `^`, `$`, `.`, `\d`, `[...]`, `{n,m}`, `( | )`, flags `i` `g` `m`. You already used one in `getCookie`.

**Shop:** optional — replace `replaceNonAlphanumericWithDashes` usage and understand its regex.

## Ch 15 — jQuery
- `$("#id")`, `$(".class")`, `$("tag")` — the `#` and `.` matter.
- `$(function(){ ... })` = DOMContentLoaded.
- Use `.on("click", fn)`, not `.click()`.
- Useful to *read*; many older sites use it. Newer projects usually skip it.

**Shop:** optional — make a copy of `shop.js` and rewrite a piece with jQuery for practice.

## Ch 16 — Node.js & AJAX
- **`fetch` returns a Promise**; `response.json()` returns *another* Promise → chained `.then`s.
- GET reads, POST sends (body = `JSON.stringify`, header `Content-Type: application/json`).
- **CORS:** a local HTML page calling `localhost:3000` gets blocked unless the server sends `Access-Control-Allow-Origin`. `"*"` is for development only.
- Status codes: 2xx ok, 3xx redirect, 4xx client error, 5xx server error.
- POST bodies arrive in chunks — collect on `data`, use on `end`.
- Restart the Node server after every change.

**Shop:**
- ☐ `backend/server.js`: `/cart` GET and POST routes, CORS headers.
- ☐ `shop.js`: `addToCart` / `getCart` use `fetch` instead of cookies.

## Ch 17 — React
- Uses its own folder (`npx create-next-app@latest .`). Don't create it inside `coffee-shop/`; put it next to this folder.
- Components are capitalized functions that return JSX. Props are the arguments.
- `onClick={handleClick}` — same "no parentheses" rule as Ch 4.
- Notice how `listPrototype` / `buttonPrototype` from Ch 10–12 are basically hand-made components.

**Shop:** optional — rebuild the menu list as a React `<InventoryList />`.

## Ch 18 — Git
- `git init` in this folder if you haven't. Then `add` → `commit` → `push`.
- Commit messages say *what* and *why*.
- Branch for experiments (`git checkout -b jquery-version`).
- Push to your own GitHub repo — a finished, commit-by-commit coffee shop is a solid portfolio piece.

**Shop:**
- ☐ Push the whole follow-along folder to GitHub.
