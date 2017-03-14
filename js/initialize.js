canvas = null;
ctx = null;
gameWidth = null;
gameHeight = null;
score = 0;
velocity = 0;
time_remains = 0;
life_remains = 3;
pigeon_x = 0;
pigeon_y = 0;
gameOver = false;
startToPlay = new Date();
timePlayed = "00:00";

function reset() {
    score = 0;
    velocity = 0;
    time_remains = 0;
    life_remains = 3;
    gameOver = false;
    startToPlay = new Date();
    timePlayed = "00:00";
}

function initialize() {
    buildScenario();
    renderTop();
}

// Build game over:
function buildGameOver() {
    if (gameOver == false) {
        ctx.fillStyle = "#333";
        ctx.globalAlpha = 0.75;
        ctx.fillRect(0, 51, 1000, 1000);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px sans-serif";
        ctx.fillText("SCORE: " + score, (canvas.width / 2) - 350, (canvas.height / 2) - 125);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px sans-serif";
        ctx.fillText("TIME: " + timePlayed, (canvas.width / 2) + 185, (canvas.height / 2) - 125);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px sans-serif";
        ctx.fillText("GAME OVER", (canvas.width / 2) - 100, (canvas.height / 2));

        ctx.fillStyle = "#FFF";
        ctx.font = "18px sans-serif";
        ctx.fillText("Try Again", (canvas.width / 2) - 50, (canvas.height / 2) + 35);

        renderTop();

        gameOver = true;
    }
}

// Build scenario:
function buildScenario() {
    canvas = document.getElementById("screen-pigeon");
    ctx = canvas.getContext("2d");
    gameWidth = 800;
    gameHeight = 480;

    canvas.width = gameWidth;
    canvas.height = gameHeight;

    renderBackground();
    renderTop();
}

// Render top line to get scores:
function renderTop() {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, gameWidth, 50);

    renderLifeRemains();
    renderScore();
    renderTime();
}

// Render Life remains:
function renderLifeRemains() {
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Life: ", 20, 30);

    if (life_remains >= 0) {
        var lifeImage = new Image();
        lifeImage.src = "imgs/life_" + life_remains + ".png";
        lifeImage.onload = function() {
            ctx.drawImage(lifeImage, 50, 12);
        };
    }
}

// Render Score label and value:
function renderScore() {
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Score: ", 150, 30);

    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText(score, 195, 31);
}

// Render Time label and value:
function renderTime() {
    ctx.fillStyle = "#333";
    ctx.fillRect(690, 10, 90, 31);

    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Time: ", 700, 30);

    var timeNow = new Date();
    timePlayed = msToMMSS(timeNow - startToPlay);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText(timePlayed, 740, 31);

    if (!gameOver) {
        requestAnimationFrame(renderTime);
    }
}

// Render Background image:
function renderBackground() {
    var bgImage = new Image();
    bgImage.src = "imgs/background.jpg";
    bgImage.onload = function() {
        ctx.drawImage(bgImage, 0, 51);
    };
}
