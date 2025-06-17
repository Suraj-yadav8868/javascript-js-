const textarea = document.getElementById("textarea");
const adbtn = document.getElementById("adbtn");
const output = document.getElementById("output");

let todos = [];
let editIndex = -1;

function displayTodos() {
    output.innerHTML = "";
    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const div2 = document.createElement("div");
        const delbutton = document.createElement("button");
        const editbtn = document.createElement("button");

        div.className = "d-flex justify-content-between align-items-center my-2 w-75 border p-2";
        div2.className = "d-flex gap-4";

        editbtn.className = "btn btn-warning";
        delbutton.className = "btn btn-danger";

        p.textContent = todo;
        delbutton.textContent = "Delete";
        editbtn.textContent = "Edit";

        delbutton.addEventListener("click", () => {
            todos.splice(index, 1);
            displayTodos();
        });

        editbtn.addEventListener("click", () => {
            textarea.value = todos[index];
            editIndex = index;
        });

        div.appendChild(p);
        div2.appendChild(editbtn);
        div2.appendChild(delbutton);
        div.appendChild(div2);
        output.appendChild(div);
    });
}

adbtn.addEventListener("click", () => {
    const value = textarea.value.trim();
    if (value === "") return;

    if (editIndex !== -1) {
        todos[editIndex] = value;
        editIndex = -1;
    } else {
        todos.push(value);
    }

    textarea.value = "";
    displayTodos();
});

displayTodos();