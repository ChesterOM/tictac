(function Game(){
    const GameBoard = (() => {
        let gameBoard = ["","","","","","","","",""];
       
        const render = () => {
            let boardHTML = "";
            gameBoard.forEach((square, index) => {
                boardHTML += '<div class="square" id="square-${index}">${square}<div/>'
            })
        }
        document.querySelector("#gameboard").innerHTML = boardHTML;
    })();
    const Player = {

    }
});

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
    // Game.start
})