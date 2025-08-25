
let turn = "O";
let total_turn = 0;

// winner ka logic kaise bnaye ..

let winner=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let board_element = new Array(9).fill('e');


function checkWinner(){

    for(let [index0,index1,index2] of winner){
        if(board_element[index0]!='e'&&board_element[index0]==board_element[index1]&&board_element[index1]==board_element[index2])
            return 1;
    }

    return 0;
}

// print krne sikhe hai kii "x" aur "o" ko kaise print krna hai 

const printer = (event)=>{
    const element = event.target;
    if(board_element[element.id]=='e')
   {

    total_turn++;

        if(turn==='O'){
        element.innerHTML = 'O';
        board_element[element.id]='O';
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "winner is : O";
            board.removeEventListener('click', printer );
            return;
        }
        turn = "x";
    }else{
        element.innerHTML = 'X';
        board_element[element.id]='X';
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "winner is : X"; 
            board.removeEventListener('click', printer );
            return;
        }
        turn = "O";
    }

   }

   if(total_turn==9){
    document.getElementById('winningMessage').innerHTML = "Match Is Draw";

   }
    

   
}


const board = document.querySelector('.board');
board.addEventListener('click' , printer);

const restart = document.getElementById('restartgame');
restart.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML= "";

    })


    turn = "O";
    total_turn = 0;
    board_element = new Array(9).fill('e');
    document.getElementById('winningMessage').innerHTML = "";
    board.addEventListener('click' , printer);

})