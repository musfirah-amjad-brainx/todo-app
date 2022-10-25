// Getting inputs
const taskName = document.getElementById("input-field");
const listContainer = document.getElementById("todo-list");
// calling addItem function if Enter is pressed
taskName.addEventListener("keypress", (e) => {
    if (e.target.value!="" && e.key === "Enter") {
        addItem();
    }
}
)
//AddItem to list 
function addItem() {
    let li = document.createElement("li");
    text = taskName.value;

    //Append checkbox to list
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    li.appendChild(checkBox);

    // call taskCompleted func if checkbox is checked
    checkBox.addEventListener("click", (e) => {
        taskCompleted(e);
    })
    //Append text to list
    let span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(span);

    //Append delete button to list
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("deleteBtn");
    // call deleteTask func if button is clicked
    deleteBtn.addEventListener("click", (e) => {
        deleteTask(e);
    });
    li.appendChild(deleteBtn);

    //Append edit button to list
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("editBtn");
    // call editTask func if button is clicked
    editBtn.addEventListener("click", (e) => {
        editTask(e);
    })
    li.appendChild(editBtn);

    // append li to ul
    listContainer.append(li);
    taskName.value = "";
}
// Delete Task from the list
function deleteTask(e) {
    var element = e.target;
    console.log(element.parentElement)
    element.parentElement.remove(e);
}

// Edit Tasks
function editTask(e) {
    let element = e.target.parentElement;

    let deleteEle = e.target.previousElementSibling;
    console.log(deleteEle);

    let prevSpanEle = deleteEle.previousElementSibling;
    console.log(prevSpanEle);

    let checkboxEle = prevSpanEle.previousElementSibling;
    console.log(checkboxEle);

    // create input field for new text
    let newSpanEle = document.createElement("input");
    newSpanEle.setAttribute("type", "text");

    // call changeText func if enter is pressed
    newSpanEle.addEventListener("keypress", (e) => {
        if (e.key === "Enter")
            changeText(e, checkboxEle);
    })
    newSpanEle.value = prevSpanEle.textContent;
    element.replaceChild(newSpanEle, prevSpanEle);

}
// Chnage Text
function changeText(e, check) {
    let element = e.target;
    if (element.value != "") {
        let listItem = element.parentElement;
        let span = document.createElement("span");
        span.textContent = element.value;
        listItem.replaceChild(span, element);
        if(check.checked==true){
            span.style.textDecoration = "line-through";
        }
        else{
            span.style.textDecoration = none;
        }
        
    }
}

// Mark task as completed
function taskCompleted(e) {
    e.target.nextElementSibling.style.textDecoration = "line-through";
}