
# 📋 Task Manager

Welcome to **Task Manager** – a simple, beautiful, and responsive web app for managing your daily tasks 🧠✅  
Built entirely with **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks, no libraries, just pure frontend magic! 🪄

---

## 🚀 Features

✨ Add, Edit, Delete Tasks  
🗂️ Set Task Priority (High / Medium / Low)  
📆 Save Due Dates  
🔍 Live Task Search  
💾 Data Stored in LocalStorage  
🎨 Color-coded by Priority  
📱 Mobile Responsive UI  

---




## 🖼️ Preview
https://drive.google.com/file/d/1z9LgmQRgT-xSM-oj0j09Bm6JSn_1XL_5/view?usp=sharing



## 🧠 How It Works (Code Explanation)

### 📥 1. Getting DOM Elements
```js
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const search = document.getElementById("search");
const taskContainer = document.getElementById("taskContainer");
````

👉 These fetch the user inputs and task display container.

---

### 💾 2. LocalStorage Handling

```js
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;
const save = () => localStorage.setItem("tasks", JSON.stringify(tasks));
```

📌 Your tasks are saved and fetched using `localStorage`, so your data stays even after page refresh 🔄

---



🧼 Clears all fields after adding or editing a task.

---

```

🔍 Supports **real-time search filtering**, and adds colorful borders by priority.

---



✅ Checks for required fields
✏️ If editing: updates the task
🆕 If new: adds it to the list

---



🖊️ Loads task into the form for editing.

---

## 📦 Tech Stack

* ✅ HTML5
* 🎨 CSS3
* ⚙️ JavaScript (Vanilla)
* 💾 localStorage

---


## 👨‍💻 Author

Made with 💙 by **Suraj Yadav**

---
