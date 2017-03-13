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

function initialize() {
    canvas = document.getElementById("screen-pigeon");
    ctx = canvas.getContext("2d");
    gameWidth = 800;
    gameHeight = 480;

    canvas.width = gameWidth;
    canvas.height = gameHeight;

    renderBackground();

    // Build top line to get scores:
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, gameWidth, 50);

    // Life remains label:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Life: ", 20, 30);

    // Life remains value:
    var lifeImage = new Image();
    lifeImage.src = "imgs/life_" + life_remains + ".png";
    lifeImage.onload = function() {
        ctx.drawImage(lifeImage, 50, 12);
    };

    // Score label:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText("Score: ", 150, 30);

    // Score value:
    ctx.fillStyle = "#FFF";
    ctx.font = "14px sans-serif";
    ctx.fillText(score, 195, 31);

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
