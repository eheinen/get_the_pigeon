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
gameOverBuilt = false;

function reset(){
    score = 0;
    velocity = 0;
    time_remains = 0;
    life_remains = 3;
    gameOverBuilt = false;
}

function initialize() {
    buildScenario();
    renderTop();
}

function buildGameOver(){
    if(gameOverBuilt == false){
        ctx.fillStyle = "#333";
        ctx.globalAlpha = 0.75;
        ctx.fillRect(0, 51, 1000, 1000);

        ctx.fillStyle = "#FFF";
        ctx.font = "30px sans-serif";
        ctx.fillText("GAME OVER", (canvas.width / 2) - 100, (canvas.height / 2));

        ctx.fillStyle = "#FFF";
        ctx.font = "18px sans-serif";
        ctx.fillText("Try Again", (canvas.width / 2) - 50, (canvas.height / 2) + 35);

        gameOverBuilt = true;
    }
}

function buildScenario(){
    canvas = document.getElementById("screen-pigeon");
    ctx = canvas.getContext("2d");
    gameWidth = 800;
    gameHeight = 480;

    canvas.width = gameWidth;
    canvas.height = gameHeight;

    renderBackground();
    renderTop();
}

function renderTop(){
    // Build top line to get scores:
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, gameWidth, 50);

    // Life remains label:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Life: ", 20, 30);

    renderLifeRemains();
    renderScore();
    renderTime();
}

function renderLifeRemains(){
    // Life remains value:
    if(life_remains >= 0){
        var lifeImage = new Image();
        lifeImage.src = "imgs/life_" + life_remains + ".png";
        lifeImage.onload = function() {
            ctx.drawImage(lifeImage, 50, 12);
        };
    }
}

function renderScore(){
    // Score label:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Score: ", 150, 30);

    // Score value:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText(score, 195, 31);
}

function renderTime(){
    // Time label:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Time: ", 700, 30);

    // Time value:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("00:00", 740, 31);
}

function renderBackground() {
    // Background image:
    var bgImage = new Image();
    bgImage.src = "imgs/background.jpg";
    bgImage.onload = function() {
        ctx.drawImage(bgImage, 0, 51);
    };
}
