let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
let pi = Math.PI;
const keys = [];
let speed = 9;
let score1 = 0;
let score2 = 0;

let player_1 = {
    x: 0,
    y: 0,
    width: 40,
    height: 150,
}

let player_2 = {
    width: 40,
    height: 150,
    x: canvas.width - 40,
    y: 0
}

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speedX: -9,
    speedY: 7,
    radius: 20
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#309c1f";
    ctx.fillRect(player_1.x, player_1.y, player_1.width, player_1.height);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#9c224b";
    ctx.fillRect(player_2.x, player_2.y, player_2.width, player_2.height);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#2c3bbf";
    ctx.arc(ball.x, ball.y, ball.radius, 0, pi * 2, false);
    ctx.fill();

    playerMove();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    console.log(e.keyCode);
});

window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
});

function rightButtonListenet() {
    player_1.y -= speed;
}

function leftButtonListenet() {
    player_1.y += speed;
}

function playerMove() {
    if (keys[87] && player_1.y > 0) {
        player_1.y -= speed;
    }
    if (keys[83] && player_1.y < canvas.height - player_1.height) {
        player_1.y += speed;
    }
    if (keys[219] && player_2.y > 0) {
        player_2.y -= speed;
    }
    if (keys[186] && player_2.y < canvas.height - player_2.height) {
        player_2.y += speed;
    }

    if (ball.x < player_1.width + ball.radius) {
        if (ball.y > player_1.y && ball.y < player_1.y + player_1.height) {
            ball.speedX *= -1;
        } else {
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.speedX *= -1;
            score2++;
        }
    }
    if (ball.x > canvas.width - player_2.width - ball.radius) {
        if (ball.y > player_2.y && ball.y < player_2.y + player_2.height) {
            ball.speedX *= -1;
        } else {
            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.speedX *= -1;
            score1++;
        }
    }

    if (ball.y < ball.radius) {
        ball.speedY *= -1;
    }
    if (ball.y > canvas.height - ball.radius) {
        ball.speedY *= -1;
    }

    document.getElementById("firstPlayer").innerText = score1;
    document.getElementById("secondPlayer").innerText = score2;
    player_2.y += (ball.y - player_2.y - player_2.height / 2) * 0.5;

    ball.x += ball.speedX;
    ball.y += ball.speedY;
}

canvas.onmousemove = function (event) {
    player_1.y = event.offsetY;
}



//canvas.KEYBOARD

/*
    //Прямоугольники ();
    //ctx.fillRect(x, y, width, height);
ctx.fillStyle = "yellow";
ctx.fillRect(100, 50, 150, 75);
ctx.fillStyle = "blue";
ctx.fillRect(150, 75, 100, 100);
ctx.clearRect(0, 0, 400, 200);

ctx.strokeStyle = "green";
ctx.lineWidth = "5";
ctx.rect(50, 50, 300, 100);
ctx.stroke();
ctx.fill();

//линии();
ctx.beginPath();

ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineWidth = "5";
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "round"; //round, square, butt
ctx.lineWidth = "20";
ctx.strokeStyle = "orange";
ctx.moveTo(200, 100);
ctx.lineTo(300, 50);
ctx.stroke();

let color = "black";
let pi = Math.PI;
document.getElementById("color").oninput = function () {
    color = this.value;
}

canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, pi * 2, false);
        ctx.fillStyle = color;
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

*/
