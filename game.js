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

        return {
            render,
            update,
        }
    })();

    const GameController = (() => {
        let players = [];
        let currentPlayer;
        let gameOver;

        const handleClick = (event) => {
            let index = parseInt(event.target.id.split("-")[1]);
            console.log(index);

            GameBoard.update(index, currentPlayer);
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
        }


        const start = () => {
            players = [document.querySelector("#select-player").value,
                    document.querySelector("#select-player").value === 'X' ? 'O' : 'X'];
            
            currentPlayer = players[0];
            console.log(players, currentPlayer);
            gameOver = false;
            GameBoard.render();
        }
        return{
            start,
            handleClick,
        };
    })();

    const startButton = document.querySelector("#start");
    startButton.addEventListener("click", () => {
        GameController.start();
    });
})();

