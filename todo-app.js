
// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btnOne = document.getElementById("myBtn");
// When the user clicks the button, open the modal
btnOne.onclick = ()=> {
  modal.style.display = "block";
}
let clearBtn=document.querySelector("#myBtn-1");
clearBtn.addEventListener("click",function(){
  let storage=window.localStorage;
 storage.clear();
 let display=document.querySelector(".todo-list");
display.innerHTML="";
})
// Get the <span> element that closes the modal
let spanOne = document.querySelectorAll('.close')[0];
// When the user clicks on <span> (x), close the modal
spanOne.onclick = () =>{
  document.querySelector("#noteTittle").value="";
  document.querySelector("#endDate").value="";
  document.querySelector("#todoNote").value="";
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let listItems=document.querySelectorAll(".todo-list li");
let listItem=document.querySelector(".todo-list");
let displayNote=document.querySelector(".noteDisplay");

let addNote=document.querySelector("#addNote");
addNote.onclick=()=>{
  let noteTitle=document.querySelector("#noteTittle").value;
  let endDate=document.querySelector("#endDate").value;
  let todoNote=document.querySelector("#todoNote").value;

  if (noteTitle==""||todoNote==""||endDate==""){
    let modalHeader=document.querySelector(".modalHeaderText");
let errMesage=document.createElement("span");
errMesage.classList.add("aler-warning");
errMesage.textContent=" You cannot Leave required fields Empty";
modalHeader.appendChild(errMesage);
setTimeout(function(){
errMesage.remove();
},1500);
//modalHeaderText
  } else {
  // The data Object that is gonna Be Stored to the Local Storage.
  let noteObj={title:noteTitle,eDate:endDate,notBody:todoNote,noteColor:"SpringGreen"};
// Seting the Ke of the Local Stirage data  to the Current date  and Time.
let noteKey=new Date();
//Decalring an Instance of the Local storage.
let dB=window.localStorage;
//sends the Data Item in JSON  format to the Local storge.
dB.setItem(noteKey,JSON.stringify(noteObj));
Object.keys(dB).forEach((key)=>{
  
  let todoNotes=JSON.parse(dB.getItem(key));

    let todoItem=document.createElement("div");
  todoItem.classList.add("todoItem");
  let newnoteTitle=document.createElement("h3");
  newnoteTitle.textContent=todoNotes.title;
  todoItem.appendChild(newnoteTitle);
   let newEndDate=document.createElement("span");
   newEndDate.classList.add("date");
   newEndDate.textContent=todoNotes.eDate;
   todoItem.appendChild(newEndDate);
   let myNote=document.createElement("p");
   myNote.textContent=todoNotes.notBody;
   todoItem.appendChild(myNote);
   let todoList=document.querySelector(".todo-list "); 
   todoList.appendChild(todoItem);
});

 document.querySelector("#noteTittle").value="";
  document.querySelector("#endDate").value="";
  document.querySelector("#todoNote").value="";
}}

