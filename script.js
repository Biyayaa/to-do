// Get the necessary elements from the HTML document
let input = document.getElementById("input");
let task = document.getElementById("task");
let arr = JSON.parse(localStorage.getItem("tasks")) || []; // get tasks from localStorage or create an empty array
let taskStatus = document.getElementById('taskStatus');

// Display the tasks on the page
function displayTasks() {
  task.innerHTML = "";
  arr.forEach((el, i) => {
    task.innerHTML += `
      <h2 id="event" class="event">
        ${i + 1 + "."} ${el}
        <div class="edit-delete">
          <button onclick="editTask(${i})" id="edit-btn">Edit</button>
          <button onclick="deleteTask(${i})" id="delete-btn">Delete</button>
        </div>
      </h2>
    `;
  });
}

// Call the function when the page loads to display existing tasks
displayTasks();

// Add a new task to the array and display it on the page
function add() {
  if (input.value == "") {
    taskStatus.innerHTML = "<p id='error-message'> Add a task first!!!</p>"
  } else {
    arr.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(arr)); // save the updated task array to local storage
    displayTasks();
    taskStatus.innerHTML = "<p id='success-message'>Task updated successfully!!!</p>"
    setTimeout(() => {
      taskStatus.innerHTML = "";
    }, 3000);
  }
  input.value = '';
}

// Delete a task from the array and display the updated tasks on the page
function deleteTask(index) {
  arr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(arr)); // save the updated task array to local storage
  displayTasks();
  taskStatus.innerHTML = "<p id='error-message'>A task has been deleted!!</p>"
  setTimeout(() => {
    taskStatus.innerHTML = "";
  }, 3000);
}

// Edit a task in the array and display the updated tasks on the page
function editTask(index) {
  let updatedTask = prompt("Enter updated task:", arr[index]);
  if (updatedTask !== null) {
    arr[index] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(arr)); // save the updated task array to local storage
    displayTasks();
  }
}