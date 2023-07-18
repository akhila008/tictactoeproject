console.log("welcome to tic tac toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="x"
let isgameover=false

//function to change the turn
function changeturn(){
    return turn === "x"?"0":"x"
}
//function to check the win
function checkwin(){
    boxtext=document.getElementsByClassName('boxtext')
    possibilities=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    possibilities.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won"
            gameover.play()
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
    
}
// music.play()

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="turn for "+turn;
                
            }
        }
    })

})

reset.addEventListener('click',() =>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    })
    turn='x'
    isgameover=false
    document.getElementsByClassName('info')[0].innerText="turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

})