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
        saveToLocalStorage();   // persist after add
    }
    TodoShow();
}

function saveToLocalStorage() {
   try{ localStorage.setItem("todoItems", JSON.stringify(todoarr));
   }catch(e){ alert("Local Storage is not supported in your browser.");  }
}

function loadFromLocalStorage() {
   try{
    var storedItems = localStorage.getItem("todoItems"); 
    todoarr = storedItems ? JSON.parse(storedItems) : [];
   }catch(e){ alert("Local Storage is not supported in your browser.");  }
   TodoShow();
}

function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function TodoShow() {
    var taskshow = document.getElementById("todo-list");
    var listHTML = "";
    for (let i = 0; i < todoarr.length; i++) {
        listHTML += `<li>
            <span class="todo-label">${escapeHtml(todoarr[i])}</span>
            <div class="todo-actions">
                <button class="delete-btn" onclick="Tododelete(${i})">Delete</button>
                <button class="edit-btn" onclick="TodoEdit(${i})">Edit</button>
            </div>
        </li>`;
    }
    taskshow.innerHTML = listHTML;
    // saveToLocalStorage();  <-- removed (save happens after add/update/delete)
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
        saveToLocalStorage();   // persist after update
    }
    // restore UI to Add mode
    task.value = "";
    document.getElementById("add-btn").style.display = "inline-block";
    document.getElementById("update-btn").style.display = "none";
    TodoShow();
    // saveToLocalStorage();  // already saved above
}

function Tododelete(index) {
    todoarr.splice(index, 1);
    saveToLocalStorage(); // persist after delete
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

// ensure saved todos load on page open
document.addEventListener('DOMContentLoaded', function () {
    loadFromLocalStorage();
});