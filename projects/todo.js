const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#todo-input");
const listContainer = document.querySelector(".todo-list");
const totalTask = document.querySelector("#total-tasks");
let total = 0;
let completed = 0;

function createTodoItem() {
  const text = input.value.trim();

  if (text === "") return;

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
  input.focus();
}

//event delegation for remove and edit

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".todo-item").remove();
    total--;
    totalTask.textContent = `${total} tasks`;
  }
});
listContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-checkbox")) {
    e.target.nextElementSibling.classList.toggle("completed");
  }
});

addBtn.addEventListener("click", createTodoItem);
