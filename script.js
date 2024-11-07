const input = document.getElementById("input");
const submit = document.querySelector(".add-task");
const button = document.getElementById("submit");
const taskList = document.querySelector(".task-list ul");
const listContainer = document.querySelector(".task-list");

submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTask();
})


function addTask() {
    if (input.value==="") {
        alert("please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskList.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        input.value="";
        saveData()
    }
    
}

listContainer.addEventListener("click",function(e) {
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data",taskList.innerHTML)
}

function LoadData() {
    const data = localStorage.getItem("data");
    if (data) {
        taskList.innerHTML = data;
    }
}


LoadData();