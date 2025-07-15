This is a simple Product Listing and Cart Application built using HTML, CSS, and JavaScript. It simulates an e-commerce shopping page that allows users to:

Browse products
Add items to the cart
View and remove cart items
See total price
Maintain cart state with localStorage

📸 Preview



https://github.com/user-attachments/assets/65d5a20b-80ad-4d05-beac-1708a1e78b37





🚀 Features
✅ Display product cards dynamically
✅ Add to cart with quantity tracking
✅ Remove products from the cart
✅ Sticky right-side cart panel
✅ Total price calculation
✅ Persist cart with localStorage
✅ Responsive & clean UI using Flexbox

🛠️ Tech Stack
HTML – Structure

CSS – Styling (Flexbox layout, responsive design)

JavaScript – Dynamic functionality (DOM manipulation, event handling, cart logic)

🧠 How It Works
📦 Product Rendering
Products are stored in a JavaScript array and rendered inside .main using document.createElement.

🛒 Add to Cart
When the "Add to Cart" button is clicked:

If item exists, quantity increases

If new, item is pushed into the cardlist[] with quantity = 1

Cart is saved to localStorage

🗑️ Remove from Cart
Each cart item has a "Remove" button to delete it from cardlist[] and update localStorage.

💾 LocalStorage
Cart contents persist on reload using:

js
Copy
Edit
localStorage.setItem("cartItems", JSON.stringify(cardlist));
🧪 How to Run
📁 Clone or download the project

🖥️ Open index.html in your browser

✅ Enjoy shopping with fake products!

📌 Future Improvements
➕ Quantity buttons (➖➕)

🌙 Dark mode toggle

🔍 Product search/filter

🧾 "Clear Cart" button

💾 Full checkout simulation

📝 Credits
Products data used from: Fake Store API

📄 License
This project is free to use under the MIT License.

THANK YOU .............
