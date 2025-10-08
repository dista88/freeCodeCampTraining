const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("todo-list");

function addTask() {
  if (!inputBox.value === "") {
    alert("Write Somethin");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
