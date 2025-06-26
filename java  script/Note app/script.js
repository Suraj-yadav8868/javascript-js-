const textarea = document.getElementById("textarea");         // dom id getting here to using inbulid mathod (d.g.id);
const adbtn = document.getElementById("adbtn");     // dom id getting here to using inbulid mathod (d.g.id);
const output = document.getElementById("output");     // dom id getting here to using inbulid mathod (d.g.id);

let todos = [];    //cteate todo variable for store note detaile
let editIndex = -1;

function displayTodos() {   //creating a function  to dispaly all todo(note)
    output.innerHTML = ""; //Clear previous todo
    todos.forEach((todo, index) => {  // using loop for auto create div and buttons
        const div = document.createElement("div");
        const p = document.createElement("p");
        const div2 = document.createElement("div");
        const delbutton = document.createElement("button");
        const editbtn = document.createElement("button");

        div.className = "d-flex justify-content-between align-items-center my-2  w-50 border p-2 bg-white shadow-sm rounded";
        div2.className = "d-flex gap-4";

        editbtn.className = "btn btn-warning";
        delbutton.className = "btn btn-danger";

        p.textContent = todo;
        delbutton.textContent = "Delete";
        editbtn.textContent = "Edit";

         //// Delete the todo when delete button clicked
        delbutton.addEventListener("click", () => {  //here click event add
            todos.splice(index, 1);    //using splice mathod to delete one element in index number
            displayTodos(); //call to refresh 
        });

        editbtn.addEventListener("click", () => {  // Set the textarea with existing todo for editing
            textarea.value = todos[index];
            editIndex = index;
        });

        div.appendChild(p);             // Add todo text to div
        div2.appendChild(editbtn);      // Add edit button to div2
        div2.appendChild(delbutton);     ; // Add delete button to div2
        div.appendChild(div2);      // Add button div to main div
        output.appendChild(div);      // Add full todo to the output section
  });
}

adbtn.addEventListener("click", () => {
    const value = textarea.value.trim();  // Get input and remove extra spaces
    if (value === "") return;      // Don't add empty tasks
  
    if (editIndex !== -1) {
        todos[editIndex] = value;    // Update existing todo
        editIndex = -1;     // Reset edit mode
    } else {
        todos.push(value);   // Add new todo to array
    }

    textarea.value = "";     // Clear input
    displayTodos();
});

displayTodos();  //// Initial call to display the list