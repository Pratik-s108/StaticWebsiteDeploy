let btn1= document.getElementById("btn1")
let btn2= document.getElementById("btn2")
let btn3= document.getElementById("btn3")
let btn4= document.getElementById("btn4")
let btn5= document.getElementById("btn5")
let btn6= document.getElementById("btn6")
let btn7= document.getElementById("btn7")
let btn8= document.getElementById("btn8")
let btn9= document.getElementById("btn9")
let boxs= document.querySelectorAll(".cell")
let winnerMessage = document.getElementById('winnerMessage');
let winnerText = document.getElementById('winnerText');
let restartButton = document.getElementById('restartButton');


const allbutton = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]


function setPlayerColor(button) {
    if (button.innerText === 'X') {
        button.style.color = 'red';
    } else if (button.innerText === 'O') {
        button.style.color = 'green';
    }
};

let winsound = new Audio ("used/winner.mp3");
let clickSound = new Audio("used/sound2.mp3"); // Replace with your sound file path
let clickSound2 = new Audio("used/sound3.mp3"); // Replace with your sound file path
let drawsound = new Audio("used/draw.mp3");

function playClickSound() {
    if (chance ==='X'){
        clickSound.currentTime = 0; // Reset audio to play from start
        clickSound.play(); // Play sound
    }
    else{
        clickSound2.currentTime = 0; // Reset audio to play from start
        clickSound2.play(); // Play sound
    }
    
};
function winnerSoundplay() {
    if (winnerText.innerText == "") {
        winsound.currentTime = 0; // Reset audio to play from start
        winsound.play(); // Play sound
    }
    
};
function drawSoundplay() {
    if (winnerText.innerText == "") {
        drawsound.currentTime = 0; // Reset audio to play from start
        drawsound.play(); // Play sound
    }

};

function disableButtons() {
    let allButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    allButtons.forEach(btn => {
        btn.style.pointerEvents = "none";  // Disable all buttons
    });
}

function checkwin(){
    let currentplayer = chance;

    if(btn1.innerText==btn2.innerText &&
        btn1.innerText==btn3.innerText &&
        btn1.innerText !=""
        ){
            // Change the background color of the winning cells
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn2.style.backgroundColor = "#90ee90";
            btn3.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn4.innerText==btn5.innerText &&
        btn4.innerText==btn6.innerText &&
        btn4.innerText !=""
        ){
            btn4.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn6.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn7.innerText==btn8.innerText &&
        btn7.innerText==btn9.innerText &&
        btn9.innerText !=""
        ){
            btn7.style.backgroundColor = "#90ee90"; // Light green
            btn8.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn1.innerText==btn5.innerText &&
        btn1.innerText==btn9.innerText &&
        btn1.innerText !=""
        ){
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
           // Disable all buttons
           disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn3.innerText==btn5.innerText &&
        btn3.innerText==btn7.innerText &&
        btn3.innerText !=""
        ){
            btn3.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn7.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn1.innerText==btn4.innerText &&
        btn1.innerText==btn7.innerText &&
        btn1.innerText !=""
        ){
            btn1.style.backgroundColor = "#90ee90"; // Light green
            btn4.style.backgroundColor = "#90ee90";
            btn7.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn2.innerText==btn5.innerText &&
        btn2.innerText==btn8.innerText &&
        btn2.innerText !=""
        ){
            btn2.style.backgroundColor = "#90ee90"; // Light green
            btn5.style.backgroundColor = "#90ee90";
            btn8.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
    if(btn3.innerText==btn6.innerText &&
        btn3.innerText==btn9.innerText &&
        btn3.innerText !=""
        ){
            btn3.style.backgroundColor = "#90ee90"; // Light green
            btn6.style.backgroundColor = "#90ee90";
            btn9.style.backgroundColor = "#90ee90";
            // Disable all buttons
            disableButtons();
            // Display winner message
            winnerSoundplay();
            setTimeout(() => {
                winnerText.innerText = `${currentplayer} Wins!`;
                winnerMessage.classList.add('show');
            }, 3000);
            return true; // Stop further checks
        };
        if (
            btn1.innerText !== "" &&
            btn2.innerText !== "" &&
            btn3.innerText !== "" &&
            btn4.innerText !== "" &&
            btn5.innerText !== "" &&
            btn6.innerText !== "" &&
            btn7.innerText !== "" &&
            btn8.innerText !== "" &&
            btn9.innerText !== ""
        ) {
            
            // Display draw message
            btn1.style.backgroundColor = "#58c3f5"
            btn2.style.backgroundColor = "#58c3f5"
            btn3.style.backgroundColor = "#58c3f5"
            btn4.style.backgroundColor = "#58c3f5"
            btn5.style.backgroundColor = "#58c3f5"
            btn6.style.backgroundColor = "#58c3f5"
            btn7.style.backgroundColor = "#58c3f5"
            btn8.style.backgroundColor = "#58c3f5"
            btn9.style.backgroundColor = "#58c3f5"
            drawSoundplay()
            setTimeout(() => {
                winnerText.innerText = "It's a Draw!";
                winnerMessage.classList.add('show');
            }, 500);
            return true; // Stop further checks
        }
    
};


function restartGame() {
    // Clear all cell contents
    let allButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    
    // Clear all cell contents and reset background color
    allButtons.forEach(btn => {
        btn.innerText = "";
        btn.style.backgroundColor = ""; // Reset to default color
        btn.style.pointerEvents = "auto";
    });

    // Hide the winner message
    winnerMessage.classList.remove('show');
    winnerText.innerText = "";  // Reset winner text
    // Reset the chance to "X"
    chance = "X";
};

let chance = "X";

chance_chance = function(){
    if ( chance == "X"){
        chance = "O";
       
    }
    else{
        chance ="X"
        
    }
}

btn1.onclick = function(){
    if (btn1.innerText === "") {  // Prevent change if already set
        btn1.innerText = chance;
        setPlayerColor(btn1);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
   
};
btn2.onclick = function(){
    if (btn2.innerText === "") {  // Prevent change if already set
        btn2.innerText = chance;
        setPlayerColor(btn2);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn3.onclick = function(){
    if (btn3.innerText === "") {  // Prevent change if already set
        btn3.innerText = chance;
    }
        setPlayerColor(btn3);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    
};
btn4.onclick = function(){
    if (btn4.innerText === "") {  // Prevent change if already set
        btn4.innerText = chance;
        setPlayerColor(btn4);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn5.onclick = function(){
    if (btn5.innerText === "") {  // Prevent change if already set
        btn5.innerText = chance;
        setPlayerColor(btn5);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn6.onclick = function(){
    if (btn6.innerText === "") {  // Prevent change if already set
        btn6.innerText = chance;
        setPlayerColor(btn6);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn7.onclick = function(){
    if (btn7.innerText === "") {  // Prevent change if already set
        btn7.innerText = chance;
        setPlayerColor(btn7);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn8.onclick = function(){
    if (btn8.innerText === "") {  // Prevent change if already set
        btn8.innerText = chance;
        setPlayerColor(btn8);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};
btn9.onclick = function(){
    if (btn9.innerText === "") {  // Prevent change if already set
        btn9.innerText = chance;
        setPlayerColor(btn9);
        playClickSound(); // Play sound on click
        checkwin();
        chance_chance();
    }
    
};