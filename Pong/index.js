var gameOn = true
var goingRight = true
var goingLeft = false


var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var ball = document.getElementById("ball")

ball.style.left = "13vw"
ball.style.top = "10vw"
ball.style.width = "2vw"
ball.style.height = "2vw"
player1.style.top = "10vw"
player1.style.left = "30vw"
player1.style.width = "1vw"
player1.style.height = "7.5vw"


setInterval(function () {
    if (gameOn && goingRight) {
        ball.style.left = parseInt(ball.style.left) + 3 + "vw"
        ball.style.left = parseInt(ball.style.left) - 2 + "vw"
    } else if (gameOn && goingLeft) {
        ball.style.left = parseInt(ball.style.left) - 3 + "vw"
        ball.style.left = parseInt(ball.style.left) + 2 + "vw"
    }
}, 100)


setInterval(function (){

    var player1X = parseInt(player1.style.left)
    var player1Y = parseInt(player1.style.top)
    var player1W = parseInt(player1.style.width)
    var player1H = parseInt(player1.style.height)
    var player1String = {x: player1X, y: player1Y, height: player1H, width: player1W}

    var ballX = parseInt(ball.style.left);
    var ballY = parseInt(ball.style.top);
    var ballW = parseInt(ball.style.width);
    var ballH = parseInt(ball.style.height);
    var ball2 = {x: ballX, y: ballY, width: ballW, height: ballH};
    if (ball2.x < player1String.x + player1String.width &&
        ball2.x + ball2.width > player1String.x &&
        ball2.y < player1String.y + player1String.height &&
        ball2.y + ball2.height > player1String.y && goingRight) {
        console.log("hitted")
        goingRight = false
        goingLeft = true
    } else if (ball.x < player1.x + player1.width &&
        ball.x + ball.width > player1.x &&
        ball.y < player1.y + player1.height &&
        ball.y + ball.height > player1.y && goingLeft) {
        goingRight = true
        goingLeft = false
    }
},10)

    function player1Up() {
    if (parseInt(player1.style.top) > 3) {
            player1.style.top = parseInt(player1.style.top) - 1.4 + "vw"
} }


function player1Down(){
    if (parseInt(player1.style.top) < 24) {
    player1.style.top = parseInt(player1.style.top) + 1.4 + "vw"
}}

document.onkeydown = keyDetect;

function keyDetect(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // arrow up
        player1Up()
    } else if (e.keyCode == '40') {
        player1Down()
    }
}