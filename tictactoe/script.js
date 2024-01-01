// Create Gameboard variable

const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],  
];

function playGame() {
       
        const userChoice = prompt('Choose a position on the board:');
        
        switch (userChoice) {
            case 'upperLeft':
                gameBoard[0][0] = 'X';
            case 'upperMiddle':
                gameBoard[0][1] = 'X';
            case 'upperRight':
                gameBoard[0][2] = 'X';
            case 'centerLeft':
                gameBoard[1][0] = 'X';
            case 'centerMiddle':
                gameBoard[1][1] = 'X';
            case 'centerRight':
                gameBoard[1][2] = 'X';    
            case 'bottomLeft':
                gameBoard[2][0] = 'X';
            case 'bottomMiddle':
                gameBoard[2][1] = 'X';
            case 'bottomRight': 
                gameBoard[2][2] = 'X';
        }
  
        
    }

    checkWinner();


playGame()


