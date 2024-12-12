let modeBtn = document.querySelector("#mode");
let curMode="green"; 

modeBtn.addEventListener("click",()=>{
    if (curMode === "green"){
        curMode = "blue";
        document.querySelector("body").style.backgroundColor = "#2a60de";
        modeBtn.innerText="Switch to Green"
    }else{
        curMode = "green"
        document.querySelector("body").style.backgroundColor= "#177818";
        modeBtn.innerText="Switch to blue"
    }
    console.log(curMode);
});


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Player O's turn initially

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


// Add click event listeners to all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = "none"; //  ekchoti click garisakesi disable further clicks  
        checkWinner();  // function call
    });
});

//  Function for if once won the game then probhiden to click in remainaining box
const disableBoxes = () => {   
    for (let box of boxes) {
        box.style.pointerEvents = "none"; // pointsEvents none .
    }
};


// Function to show the winner message  and call garne showWinner lai
const showWinner = (winner) => {  
    msg.innerText = `Congratulations!🎉🎉💥 \nWinner is: ${winner}`;
    msgContainer.classList.remove("hide");    // to unhide the msg-container which was hide in style.css
    disableBoxes();  // function call to disable further clicks
};

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner is:", pos1Val);
            showWinner(pos1Val);   // showinner function .
            
        }
    }
};