const input_box = document.getElementById("input_box");
const list_container = document.getElementById("list_container");

var add_task = document.getElementById("add_task").addEventListener("click", ()=>{
    if(input_box.value === ""){
        alert("you must write something please ??")
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = "";
    savaData();
});

list_container.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savaData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
},false);

function savaData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}

showTask();