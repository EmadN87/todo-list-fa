const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

let addTask = () => {
    if(inputBox.value === ''){
        alert("لطفا متن را وارد کنید");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveTime();
    }  
    inputBox.value = ''; // پاک کردن input بعد از اضافه شدن تسک

}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTime();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTime();
    }
}, false);

let saveTime = () =>{
    localStorage.setItem("data",listContainer.innerHTML);
}
let showTask = () =>{
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();
btn.addEventListener('click', addTask);