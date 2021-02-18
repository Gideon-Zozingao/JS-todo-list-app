
// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btnOne = document.getElementById("myBtn");
// When the user clicks the button, open the modal
btnOne.onclick = ()=> {
  modal.style.display = "block";
}
// Get the <span> element that closes the modal
let spanOne = document.querySelectorAll('.close')[0];
// When the user clicks on <span> (x), close the modal
spanOne.onclick = () =>{

 document.querySelector("#noteTittle").value="";
document.querySelector("#startDate").value="";
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

// let colorItem=document.querySelectorAll(".listInline li");
// for (let i=0; i<=colorItem.length; i++) {
// colorItem[i].onclick=function(){
//   colorItem[i].style.boder= '1px solid black';
//   let modalContent=document.querySelector(".modal-content");
//   modalContent.classList.add(colorItem[i].classList[1]);
// };
// }
//
// for (let i = 0;i<=listItems.length; i++) {
//   listItems[i].onclick=function(){
//   //alert(this.innerHTML);
//   displayNote.innerHTML=this.innerHTML;
// }
// }
let addNote=document.querySelector("#addNote");
addNote.onclick=()=>{

  let noteTitle=document.querySelector("#noteTittle").value;
  let startDate=document.querySelector("#startDate").value;
  let endDate=document.querySelector("#endDate").value;
  let todoNote=document.querySelector("#todoNote").value;
  if (noteTitle==""||todoNote==""||startDate==""||endDate=="") {
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
let noteObj={
  title:noteTitle,
  sDate:startDate,
  eDate:endDate,
  notBody:todoNote,
  noteColor:""

}
let noteKey=new Date();
let dB=window.localStorage;
dB.setItem(noteKey,JSON.stringify(noteObj));

Object.keys(dB).forEach((key)=>{
  //console.log(dB.getItem(key));

  let todoNotes=JSON.parse(dB.getItem(key));
  console.log(todoNotes.title+", "+todoNotes. notBody);
});

  //   let todoItem=document.createElement("div");
  // todoItem.classList.add("todoItem");
  // let newnoteTitle=document.createElement("h3");
  // newnoteTitle.textContent=noteTitle;
  // todoItem.appendChild(newnoteTitle);
  // let newStartDate=document.createElement("span");
  // newStartDate.classList.add("date");
  // newStartDate.textContent=startDate;
  //  todoItem.appendChild(newStartDate);
  //  let newEndDate=document.createElement("span");
  //  newEndDate.classList.add("date");
  //  newEndDate.textContent=endDate;
  //  todoItem.appendChild(newEndDate);
  //  let noteDiv=document.createElement("div");
  //  noteDiv.classList.add("myNote");
  //  let myNote=document.createElement("p");
  //  myNote.textContent=todoNote;
  //  noteDiv.appendChild(myNote);
  //  todoItem.appendChild(noteDiv);
  //  listItem.appendChild(todoItem);

   
 document.querySelector("#noteTittle").value="";
document.querySelector("#startDate").value="";
  document.querySelector("#endDate").value="";
  document.querySelector("#todoNote").value="";


   

  }
  
}