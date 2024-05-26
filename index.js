const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  const newItem = document.createElement("li");
  newItem.textContent = taskText;
  taskList.append(newItem);
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("remove");
  }
});
