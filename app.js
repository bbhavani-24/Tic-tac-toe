
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msgBtn=document.querySelector("#msg");


let turn0=true;


let winPatterns=[
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

const resetGame=()=>
{
  turn0=true;
  enabledBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    console.log("Box was clicked");
    if(turn0){
      box.innerText="O";
      turn0=false;
    }
    else{
      box.innerText="X"
      turn0=true;
    }
    box.disabled=true;

    checkWinner();
  });
});

const disabledBoxes=()=>
{
  for(let box of boxes)
  {
    box.disabled=true;
  }
}

const enabledBoxes=()=>
{
  for(let box of boxes)
  {
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>
{
  msg.innerText=`Congratulations, The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const checkWinner = ()=> 
{
  for(let i of winPatterns)
  {
    let value1=boxes[i[0]].innerText;
    let value2=boxes[i[1]].innerText;
    let value3=boxes[i[2]].innerText;
    if(value1!="" && value2!="" && value3!= "")
    {
      if(value1===value2 && value2===value3)
      {
        console.log("Winner");
        showWinner(value1);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);