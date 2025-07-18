   const title = document.getElementById("title");
    const desc = document.getElementById("desc");
    const date = document.getElementById("date");
    const priority = document.getElementById("priority");
    const search = document.getElementById("search");
    const taskContainer = document.getElementById("taskContainer");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let editId = null;

    const save = () => localStorage.setItem("tasks", JSON.stringify(tasks));

    const clearForm = () => {
      title.value = "";
      desc.value = "";
      date.value = "";
      priority.value = "Low";
      editId = null;
    };

    const displayTasks = () => {
      taskContainer.innerHTML = "";
      const searchVal = search.value.toLowerCase();
      tasks.forEach((t, i) => {
        if (t.title.toLowerCase().includes(searchVal) || t.desc.toLowerCase().includes(searchVal)) {
          taskContainer.innerHTML += `
            <div class="task ${t.priority.toLowerCase()}">
              <h3>${t.title}</h3>
              <small>Due: ${t.date}, Priority: ${t.priority}</small><br>
              <button class="btn edit-btn" onclick="editTask(${i})">Edit</button>
              <button class="btn delete-btn" onclick="deleteTask(${i})">Delete</button>
            </div>
          `;
        }
      });
    };

    const addTask = () => {
      if (!title.value.trim() || !date.value) return alert("Title & date required!");
      const newTask = {
        title: title.value.trim(),
        desc: desc.value.trim(),
        date: date.value,
        priority: priority.value
      };
      if (editId !== null) tasks[editId] = newTask;
      else tasks.push(newTask);
      save();
      displayTasks();
      clearForm();
    };

    const editTask = i => {
      const t = tasks[i];
      title.value = t.title;
      desc.value = t.desc;
      date.value = t.date;
      priority.value = t.priority;
      editId = i;
    };

    const deleteTask = i => {
      tasks.splice(i, 1);
      save();
      displayTasks();
    };

    document.querySelector(".add").onclick = addTask;
    search.oninput = displayTasks;
    displayTasks();

