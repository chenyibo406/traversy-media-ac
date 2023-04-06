// set local storage item
// localStorage.setItem("name", "John");

// remove from storages
// localStorage.removeItem("name");

// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");
  e.preventDefault();
});
