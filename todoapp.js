var todoarr = [];
var editIndex = -1;

function Todolist() {
    var task = document.getElementById("todoinput");
    var value = task.value.trim();
    if (value === "") {
        alert("Please Enter The Value");
    } else if (!isNaN(value)) {
        alert("Please Dont Enter the numbers Only");
    } else {
        // normal add
        todoarr.push(value);
        task.value = "";
    }
    TodoShow();
}

function TodoShow() {
    var taskshow = document.getElementById("todo-list");
    var listHTML = "";
    for (let i = 0; i < todoarr.length; i++) {
        listHTML += `<li>
            <span class="todo-label">${todoarr[i]}</span>
            <div class="todo-actions">
                <button class="delete-btn" onclick="Tododelete(${i})">Delete</button>
                <button class="edit-btn" onclick="TodoEdit(${i})">Edit</button>
            </div>
        </li>`;
    }
    taskshow.innerHTML = listHTML;
}

function TodoEdit(index) {
    var task = document.getElementById("todoinput");
    // load value for editing but do NOT change the array yet
    task.value = todoarr[index];
    editIndex = index;
    // toggle buttons (make sure IDs match your HTML: "add-btn" and "update-btn")
    document.getElementById("add-btn").style.display = "none";
    document.getElementById("update-btn").style.display = "inline-block";
    task.focus();
    try { task.setSelectionRange(task.value.length, task.value.length); } catch(e){}
}

// new function to be called by the Update button
function updateTask() {
    var task = document.getElementById("todoinput");
    var value = task.value.trim();
    if (value === "") {
        alert("Please Enter The Value");
        return;
    }
    if (!isNaN(value)) {
        alert("Please Dont Enter the numbers Only");
        return;
    }
    if (editIndex > -1) {
        // replace the item at editIndex with edited value
        todoarr.splice(editIndex, 1, value);
        editIndex = -1;
    }
    // restore UI to Add mode
    task.value = "";
    document.getElementById("add-btn").style.display = "inline-block";
    document.getElementById("update-btn").style.display = "none";
    TodoShow();
}

function Tododelete(index) {
    todoarr.splice(index, 1);
    // if deleting the item being edited, reset edit state
    if (editIndex === index) {
        editIndex = -1;
        var task = document.getElementById("todoinput");
        task.value = "";
        document.getElementById("add-btn").style.display = "inline-block";
        document.getElementById("update-btn").style.display = "none";
    } else if (editIndex > index) {
        // adjust saved index after removal
        editIndex--;
    }
    TodoShow();
}