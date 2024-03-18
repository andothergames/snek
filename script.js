
//board
var blockSize = 25;
var rows = 18;
var cols = 18;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var velocityY = 0;

//snake body

var snakeBody = [];

//food
var foodX;
var foodY;


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10); // every 100ms runs update
}

function update() {
    //board
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    //food
    context.fillStyle="deeppink";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    //eating food
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood()
    }

    //snake
    context.fillStyle="aquamarine";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX  = 0;
        velocityY  = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX  = 0;
        velocityY  = +1;
    }
    else if (e.code == "ArrowLeft"  && velocityX != 1) {
        velocityX  = -1;
        velocityY  = 0;
    }
    else if (e.code == "ArrowRight"  && velocityX != -1) {
        velocityX  = 1;
        velocityY  = 0;
    }


}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
