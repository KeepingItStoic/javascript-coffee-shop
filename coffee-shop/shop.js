// ClydeBank Coffee Shop — follow-along build
// This ONE file grows chapter by chapter. Leave the roadmap comments in place
// and fill in each section as you reach it in the book.

// ===== Ch 1: Getting started ==========================================
// Confirm the file is wired up — open DevTools (F12) > Console to see it.
console.log("ClydeBank Coffee Shop is now open!");


// ===== Ch 3: Dynamic inventory ========================================
// TODO: two parallel arrays (item names + prices), grab the menu <ul> by id,
//       and loop to add an <li> per item. Remember .toFixed(2) for prices.
// Our Inventory
// let inventory = ["Regular Coffee", "Espresso", "Cappuccino", "Latte"];
// let inventoryPrices = [3.00, 3.50, 4.00, 4.25];
/* These arrays are now replaced by the inventoryObject for better maintainability. In Chapter 6, we introduce the 
inventoryObject which consolidates both the data and the display logic. See Chapter 4 for the initial loop implementation 
with parallel arrays with notes on their limitations.
*/


// Reference the menu list by ID
let menuList = document.getElementById("coffee-menu");

// Loop through the inventory array and display each item in the array
/*
This loop has been commented out and replaced by the populateMenu function.
for (let i = 0; i < inventory.length; i++) {
    menuList.innerHTML += "<li>" + inventory[i] + " - $" +
    inventoryPrices[i].toFixed(2) + "</li>"
};

*/

// ===== Ch 4: Menu function ============================================
// TODO: wrap the Ch 3 loop in a function (e.g. populateMenu(container))
// and call it once.
/*
function populateMenu(container) {
    for (let i = 0; i < inventory.length; i++) {
        container.innerHTML += "<li>" + inventory[i] + " - $" +
            inventoryPrices[i].toFixed(2) + "</li>"
    }
}
populateMenu(menuList);
*/
/* Instead of using the populateMenu function with parallel arrays, we now use the inventoryObject with its populate method.
Parallel arrays presented a maintainability challenge, as adding or removing items required changes in multiple places. The
inventoryObject consolidates the data and the display logic into a single, cohesive structure. This would also keep new items
added later in sync with key value pairs instead of managing parallel arrays with 2 independent indices. */

// ===== Ch 6: Menu object ==============================================
// TODO: replace the arrays + function with ONE object that holds the
//       inventory (name: price pairs) AND a populate(container) method.
// The inventory object (named "menu" to match the book)
let menu = {
    inventory: {
        "Regular Coffee": 3.00,
        "Espresso": 3.50,
        "Cappuccino": 4.00,
        "Latte": 4.25
    },
    populate: function(container) {
        for (let item in this.inventory) {
            container.innerHTML += "<li>" + item + " - $" +
                this.inventory[item].toFixed(2) + "</li>";
        }
    }
};

menu.populate(menuList);


// ===== Ch 7: JSON =====================================================
// TODO (console practice): swap in a new inventory from a JSON-style object,
//       clear the list's innerHTML, and call populate again.


// ===== Ch 8: DOM menu =================================================
// TODO: rewrite populate to use document.createElement("li"),
//       textContent, and appendChild instead of innerHTML +=.


// ===== Ch 10: List prototype ==========================================
// TODO: a reusable listPrototype with render(values, parent, id, separator, className);
//       create the menu with Object.create(listPrototype). (index.html changes too!)


// ===== Ch 11: JavaScript-driven site ==================================
// TODO: hamburgerMenu (SVG built with createElementNS), mainMenu (hidden div),
//       menuLinks object, and everything run inside a DOMContentLoaded listener.
//       Optional: currentPage + "#" links to show/hide sections as pages.


// ===== Ch 12: Cart (frontend) =========================================
// TODO: locale/currency + Intl.NumberFormat, cookie helpers (getCookie,
//       saveCart, getCart), addToCart/removeFromCart, buttonPrototype,
//       "Add to Cart" buttons for every menu item.
//       NOTE: cookies need a real server — see README (http-server).


// ===== Ch 16: Cart (backend) ==========================================
// TODO: change addToCart/getCart to use fetch() against your Node server
//       (see ../backend/server.js) instead of cookies.
