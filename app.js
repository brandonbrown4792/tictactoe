let firstPlayer = 0;
let turn = 0;
let board = new Array(9);
let gameOver = false;
let player1Score = 0;
let player2Score = 0;
const player1Label_div = document.getElementById("player1-label");
const player2Label_div = document.getElementById("player2-label");
const player1Score_div = document.getElementById("player1-score");
const player2Score_div = document.getElementById("player2-score");
const result_p = document.querySelector(".result > p");
const end_p = document.querySelector(".end > p");
const topLeft_td = document.getElementById("top-left");
const topMid_td = document.getElementById("top-mid");
const topRight_td = document.getElementById("top-right");
const midLeft_td = document.getElementById("mid-left");
const midMid_td = document.getElementById("mid-mid");
const midRight_td = document.getElementById("mid-right");
const botLeft_td = document.getElementById("bot-left");
const botMid_td = document.getElementById("bot-mid");
const botRight_td = document.getElementById("bot-right");

function playerSelect(event, player) {
    if (event.target.id == "player1-label") {
        player1Label_div.style.backgroundColor = "#225E1A"
        player2Label_div.style.backgroundColor = "#751E1E"
    }
    else {
        player1Label_div.style.backgroundColor = "#751E1E"
        player2Label_div.style.backgroundColor = "#225E1A"
    }
    firstPlayer = player;
    turn = firstPlayer;
}

function fillTile(event, tile) {
    if (gameOver) {
        newGame();
        return;
    }

    item = event.target;
    if (item.innerHTML != "") {
        alert("Cannot click a spot that already has something in it!");
    }
    else {
        if (!turn) {
            item.innerHTML = "X";
            board[tile] = "X";
        }
        else {
            item.innerHTML = "O";
            board[tile] = "O";
        }
        turn = !turn;
        checkWinner(board);
    }
}

function checkWinner(board) {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != null || 
        board[3] === board[4] && board[3] === board[5] && board[3] != null || 
        board[6] === board[7] && board[6] === board[8] && board[6] != null || 
        board[0] === board[3] && board[0] === board[6] && board[0] != null || 
        board[1] === board[4] && board[1] === board[7] && board[1] != null || 
        board[2] === board[5] && board[2] === board[8] && board[2] != null || 
        board[0] === board[4] && board[0] === board[8] && board[0] != null || 
        board[2] === board[4] && board[2] === board[6] && board[2] != null) {
            if (turn) {
                result_p.innerHTML = "We have a winner! Player 1 wins!";
                player1Score++;
                player1Score_div.innerHTML = player1Score;
            }
            else {
                result_p.innerHTML = "We have a winner! Player 2 wins!";
                player2Score++;
                player2Score_div.innerHTML = player2Score;
            }
            
            end_p.hidden = false;
            gameOver = true;
    }
}

function newGame() {
    turn = firstPlayer;
    gameOver = false;
    topLeft_td.innerHTML = null;
    topMid_td.innerHTML = null
    topRight_td.innerHTML = null
    midLeft_td.innerHTML = null
    midMid_td.innerHTML = null
    midRight_td.innerHTML = null
    botLeft_td.innerHTML = null
    botMid_td.innerHTML = null
    botRight_td.innerHTML = null
    result_p.innerHTML = "Begin game below! You can select who goes first above.";
    end_p.hidden = true;
    for (i = 0; i < board.length; i++) {
        board[i] = null;
    }
}