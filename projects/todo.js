let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#todo-input");
const listContainer = document.querySelector(".todo-list");
const totalTask = document.querySelector("#total-tasks");
const totalCompleted = document.querySelector("#completed-tasks");
let total = 0;
let completed = 0;

function createTodoItem() {
  const text = input.value.trim();

  if (text === "") return;

  todos.push({
    id: Date.now(),
    text: text,
    completed: false,
  });
  saveTodo();
  // Create elements
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const actionsDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  // Add classes
  li.className = "todo-item";
  checkbox.className = "todo-checkbox";
  span.className = "todo-text";
  actionsDiv.className = "todo-actions";
  editBtn.className = "edit-btn";
  deleteBtn.className = "delete-btn";

  checkbox.type = "checkbox";
  span.textContent = text;
  editBtn.textContent = "✏️";
  deleteBtn.textContent = "🗑️";

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(actionsDiv);
  listContainer.appendChild(li);
  total++;
  totalTask.textContent = `${total} tasks`;

  input.value = "";
}

//modal
const editModal = document.getElementById("edit-modal");
const deleteModal = document.getElementById("delete-modal");
const backdrop = document.getElementById("modal-backdrop");
const editInput = document.getElementById("edit-input");
let currentTodo = null;

function openEditModal(todoId, currentText) {
  currentTodo = todoId;
  editInput.value = currentText;
  editModal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  editInput.focus();
}

//event delegation for remove and edit
listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".todo-item").remove();
    total--;
    completed--;
    totalTask.textContent = `${total} tasks`;
    totalCompleted.textContent = `${completed} completed`;
  }

  if (e.target.classList.contains("edit-btn")) {
    openEditModal();
  }
});

listContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-checkbox")) {
    const checkbox = e.target;
    const sibling = checkbox.nextElementSibling;
    sibling.classList.toggle("completed");
    if (checkbox.checked) {
      completed++;
    } else {
      completed--;
    }
  }
  totalCompleted.textContent = `${completed} completed`;
});

//saving
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todos.forEach((todo) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const actionsDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  li.className = "todo-item";
  checkbox.className = "todo-checkbox";
  span.className = "todo-text";
  actionsDiv.className = "todo-actions";
  editBtn.className = "edit-btn";
  deleteBtn.className = "delete-btn";

  checkbox.type = "checkbox";
  span.textContent = todo.text;
  if (todo.completed) {
    checkbox.checked = true;
    span.classList.add("completed");
  }
  editBtn.textContent = "✏️";
  deleteBtn.textContent = "🗑️";

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(actionsDiv);
  listContainer.appendChild(li);
});
addBtn.addEventListener("click", createTodoItem);
