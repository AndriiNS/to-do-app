const inputField = document.querySelector(".input-text");
const taskList = document.querySelector(".task-list");

function addTask() {
  if (inputField.value === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = inputField.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close-icon";
    li.appendChild(span);
  }
  inputField.value = "";
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
