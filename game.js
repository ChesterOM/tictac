(function Game(){
    const GameBoard = (() => {
        let gameBoard = ["","","","","","","","",""];
       
        const render = () => {
            let boardHTML = "";
            gameBoard.forEach((square, index) => {
                boardHTML += `<div class="square" id="square-${index}">${square}</div>`
            });
            document.querySelector("#gameboard").innerHTML = boardHTML;

            const squares = document.querySelectorAll(".square");
            squares.forEach((square) => {
                square.addEventListener('click',GameController.handleClick);
            });
        }

        const update = (index, value) => {
            gameBoard[index] = value;
            render()
        }

        const getGameBoard = () => gameBoard

        return {
            render,
            update,
            getGameBoard,
        }
    })();

    const GameController = (() => {
        let players = [];
        let currentPlayer;
        let gameOver;

        const handleClick = (event) => {
            if (gameOver){
                return
            }
            let index = parseInt(event.target.id.split("-")[1]);
            console.log(index);

            if (GameBoard.getGameBoard()[index] !== "")
            return;

            GameBoard.update(index, currentPlayer);

            if (checkForWin(GameBoard.getGameBoard(), currentPlayer)) {
                gameOver = true
                alert(`${currentPlayer} has won`)
            } else if (checkForTie(GameBoard.getGameBoard())) {
                gameOver = true 
                alert("It is a Tie!")
            }

            currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
        }


        const start = () => {
            if (GameBoard.getGameBoard !== ""){
                reset()
            };

            players = [document.querySelector("#select-player").value,
                    document.querySelector("#select-player").value === 'X' ? 'O' : 'X'];
            
            currentPlayer = players[0];
            console.log(players, currentPlayer);
            gameOver = false;
            GameBoard.render();
        }

        const reset = () => {
            gameOver = false
            for (let i = 0; i < 9; i++){
                GameBoard.update(i, "");
            };
            GameBoard.render();
        };

        return{
            start,
            handleClick,
            reset,
        };
    })();

    function checkForWin(board) {
        const winingCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i = 0; i < winingCombos.length; i++) {
            const [a,b,c] = winingCombos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]){
                return true
            }
        }
        return false
    }

    function checkForTie(board) {
        return board.every(cell => cell !== "")
    }

    const startButton = document.querySelector("#start");
    const resetButton = document.querySelector("#reset-button")

    startButton.addEventListener("click", () => {
        GameController.start();
    });
    resetButton.addEventListener("click", () => {
        GameController.reset();
    });
})();

