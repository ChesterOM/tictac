(function Game(){
    const GameBoard = (() => {
        let gameBoard = ["","","","","","","","",""];
       
        const render = () => {
            let boardHTML = "";
            gameBoard.forEach((square, index) => {
                boardHTML += `<div class="square" id="square-${index}">${square}</div>`
            });

            document.querySelector("#gameboard").innerHTML = boardHTML;
        }
        
        return {
            render
        }
    })();

    const GameController = (() => {
        let players = [];
        let currentPlayer;
        let gameOver = false;

        const start = () => {
            players = [document.querySelector("#select-player").value,
                    document.querySelector("#select-player").value === 'X' ? 'O' : 'X'];
            
            currentPlayer = players[0];
            console.log(players, currentPlayer);
            GameBoard.render()
            gameOver = false;
        }

        return{
            start
        }
    })();

    const startButton = document.querySelector("#start");
    startButton.addEventListener("click", () => {
        GameController.start()
    });
})();

