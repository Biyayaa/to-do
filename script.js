let input = document.getElementById("input");
let task = document.getElementById("task");
let arr = [];

let taskStatus = document.getElementById('taskStatus');



function displayTasks() {
    task.innerHTML = "";
    arr.forEach((el, i)=>{
        task.innerHTML += `
        <h2 id="event" class="event">
            ${i+1+"."} ${el}
            <div class="edit-delete">
                <button onclick="editTask(${i})" id="edit-btn">Edit</button>
                <button onclick="deleteTask(${i})" id="delete-btn">Delete</button>
            </div>
        </h2>
        `;
    });
}

function add() {
    if (input.value == "") {
        taskStatus.innerHTML = "<p id='error-message'> Add a task first!!!</p>"
    }
    else{
        arr.push(input.value);
        displayTasks();
        taskStatus.innerHTML =  "<p id='sucess-message'>task updated successfully!!!</p>"
        setTimeout(() => {
            taskStatus.innerHTML = "";
        }, 3000);
    }
}

function deleteTask(index) {
    arr.splice(index, 1);
    displayTasks();
    taskStatus.innerHTML =  "<p id='error-message'>a task has been deleted!!</p>"
        setTimeout(() => {
            taskStatus.innerHTML = "";
        }, 3000);
}


function editTask(index) {
    let updatedTask = prompt("Enter updated task:", arr[index]);
    if (updatedTask !== null) {
        arr[index] = updatedTask; 
        displayTasks();
    }
}