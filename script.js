const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

function computerRandom() {
    let computerMove = Math.floor(Math.random() * 3);
    if (computerMove === 0) {
        return 'rock';
    }
    else if (computerMove === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function gameMove(playerMove) {
    let computerMove = computerRandom();
    console.log("player:", playerMove);
    console.log("computer:", computerMove);
    if (playerMove == 'rock') {
        if (computerMove === 'rock') {
            console.log('tie');
        }
        else if (computerMove === 'paper') {
            console.log('you loose');
        }
        else {
            console.log('your win');
        }
    }
    else if (playerMove == 'paper') {
        if (computerMove === 'rock') {
            console.log('you win');
        }
        else if (computerMove === 'paper') {
            console.log('tie');
        }
        else {
            console.log('you loose');
        }
    }

    else if (playerMove == 'scissors') {
        if (computerMove === 'rock') {
            console.log('you loose');
        }
        else if (computerMove === 'paper') {
            console.log('you win');
        }
        else {
            console.log('tie');
        }
    }
}


rock.onclick = function () {
    gameMove('rock');
}
paper.onclick = function () {
    gameMove('paper');
}
scissor.onclick = function () {
    gameMove('scissors');
}