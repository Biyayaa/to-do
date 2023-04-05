let input = document.getElementById("input");
let task = document.getElementById("task");
let arr = [];


function displayTasks() {
    task.innerHTML = "";
    arr.forEach((el, i)=>{
        task.innerHTML += `
        <h2 id="event" class="event">
            ${i} ${el}
            <div class="edit-delete">
                <button onclick="editTask(${i})" id="edit-btn">Edit</button>
                <button onclick="deleteTask(${i})" id="delete-btn">Delete</button>
            </div>
        </h2>
        `;
    });
}

function add() {
    arr.push(input.value);
    displayTasks();
}

function deleteTask(index) {
    arr.splice(index, 1);
    displayTasks();
}


function editTask(index) {
    let updatedTask = prompt("Enter updated task:", arr[index]);
    if (updatedTask !== null) {
        arr[index] = updatedTask; 
        displayTasks();
    }
}


// let spliceArr = ['cat', 'dog', 'sheep']
// spliceArr.splice(1, 1, 'mango', 'pear');
// console.log(spliceArr);