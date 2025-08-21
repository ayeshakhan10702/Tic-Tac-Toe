let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgameBtn= document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drawmsg=document.querySelector("#draw-msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((btn) => {
btn.addEventListener("click" , ()=>{
if(turnO===true){
    btn.innerText="O";
    btn.style.color = "#f72585"; 
    turnO=false;
}
else{
    btn.innerText="X"
    btn.style.color = "#178fd5ff";
    turnO=true;
}
 btn.disabled=true;
count++;
checkWinner();
if (count === 9) {
  drawGame();
}
});
});
const resetgame=()=>{
turnO=true;
count = 0;
enableboxes();
msgcontainer.classList.add("hide");
drawmsg.innerText = "";
}
const disableboxes=()=>{
  for (let box of boxes){
    box.disabled=true;
  }
}
const enableboxes=()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulations! 🎉 Player ${winner} is winner`;
msgcontainer.classList.remove("hide");
drawmsg.innerText = "";
disableboxes();
}
let count=0;
const drawGame=()=>{
    drawmsg.innerText="Game is draw 🤝";
    msgcontainer.classList.remove("hide");
    msg.innerText = "";
    disableboxes();
}
const checkWinner=()=>{
for (let pattern of winPatterns){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
  if(pos1Val==pos2Val && pos2Val==pos3Val){
    showWinner(pos1Val);
  }
}
} 
};
const resetGame=()=>{}
newgameBtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);