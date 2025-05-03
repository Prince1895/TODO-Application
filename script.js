function getDateandday() {
    const dateelement = document.getElementById("date");
    const dayelement = document.getElementById("day");
    const today = new Date();
    dateelement.innerText = today.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric"
});
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayelement.innerText = days[today.getDay()]; 
}
getDateandday();

const inputbox=document.getElementById("input");
const listcontainer=document.getElementById("listcontainer");
function addTask(){
    if(inputbox.value===""){
        alert("Please enter a task");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    savedata()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);

}

function showtasks(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtasks();