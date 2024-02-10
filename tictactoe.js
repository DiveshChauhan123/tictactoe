let boxes=document.querySelectorAll(".box");
let mgwin=document.querySelector(".hide");
let reset=document.querySelector(".rest-game");
let turn="true";//player X
//for player0 turn is false;
let patterns=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box) =>{
    // Do something with each button, for example, add a click event listener
    box.addEventListener("click", ()=> {
        if(turn==="true"){
            turn="false";
            box.innerText="X";
            
        }
        else{
            turn="true";
            box.innerText="0";
        }
        box.disabled=true;
        checkwinner()
    });
});
let checkwinner=()=>{
    for(let x of patterns){
        let val1=boxes[x[0]].innerText;
        let val2=boxes[x[1]].innerText;
        let val3=boxes[x[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log("winner",val1);
                showwinner(val1);
            }
        }
    }
}
let showwinner=(val1)=>{
    
    mgwin.innerText=`winner ${val1}`
    
    
    
}
const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true;
        
    }
}
const resetgame=()=>{
    turn="true";
    for(box of boxes){
        box.disabled=false;
        box.innerText=""
    }
    mgwin.innerText=" ";
}
reset.addEventListener("click",(resetgame));