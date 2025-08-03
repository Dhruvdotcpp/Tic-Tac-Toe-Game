let btns = document.querySelectorAll('.btn');
let rstbtn = document.querySelector('.reset');

let newGameBtn = document.querySelector('.new-btn');
let messContainer = document.querySelector('.messContainer');
let mess = document.querySelector('#message');

let page1 = document.querySelector('.page1');

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    messContainer.classList.add('hide');
    page1.classList.remove('hide');
}

let count = 0;
btns.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        if(turn0){
            btn.innerText='O';
            turn0 = false;
        }
        else{
            btn.innerText='X';
            turn0 = true;
        }
        btn.disabled = true;
        count++;

        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let btn of btns){
        btn.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = '';
    }
}

const showWinner = (winner) => {
    mess.innerHTML = `Congratulations, Winner is ${winner}`;
    messContainer.classList.remove("hide");
    page1.classList.add('hide');
    disableBoxes();
}

checkWinner = () => {

    let winnerFound = false;

    for(let pattern of winPattern){

        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if(pos1Val != '' && pos1Val != '' && pos1Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                winnerFound = true;
                return;
            }
        }
    }
    
    if(count===9 && !winnerFound){
        draw();
    }
}

const draw = () => {
    mess.innerHTML = `That a Tie. Play Again!`;
    messContainer.classList.remove("hide");
    page1.classList.add('hide');
    disableBoxes();
}

newGameBtn.addEventListener('click', resetGame);
rstbtn.addEventListener('click', resetGame);
