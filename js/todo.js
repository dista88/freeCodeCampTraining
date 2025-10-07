// Select elements
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const searchInput = document.querySelector("#searchInput");
const taskList = document.querySelector("#taskList");

const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");
const remainingCount = document.querySelector("#remainingCount");

// Task array
let tasks = [];
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks();
  }
});
function renderTasks(filterText = "") {
  taskList.innerHTML = "";

  // Filter tasks by search
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filterText.toLowerCase())
  );

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <span style="text-decoration:${
          task.completed ? "line-through" : "none"
        }">
          ${task.text}
        </span>
        <button onclick="toggleTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">❌</button>
      `;

    taskList.appendChild(li);
  });

  updateStats();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(searchInput.value);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(searchInput.value);
}

function updateStats() {
  totalCount.textContent = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  completedCount.textContent = completed;
  remainingCount.textContent = tasks.length - completed;
}

searchInput.addEventListener("input", () => {
  renderTasks(searchInput.value);
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) tasks = JSON.parse(saved);
}

addBtn.addEventListener("click", saveTasks);
searchInput.addEventListener("input", saveTasks);

//idk
let count = 0;
let display = document.getElementById("display");

function add() {
  count++;
  display.textContent = count;
}
