window.onload = function() {
    initialize();
    pigeonFly();

    canvas.addEventListener("click", onClick, false);

    function onClick(e) {
        shoot(e);
    }
};

function pigeonFly() {
    var pigeonImage = new Image();
    pigeonImage.src = "imgs/pigeon.png";

    pigeon_x = randomIntFromInterval(100, 700);
    pigeon_y = randomIntFromInterval(100, 300);

    pigeonImage.onload = function() {
        ctx.drawImage(pigeonImage, pigeon_x, pigeon_y);
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shoot(eventClick) {
    clickPositions = getMousePosition(eventClick);
    click_x = clickPositions.x;
    click_y = clickPositions.y;

    pigeon_size = [pigeon_x, pigeon_x + 58, pigeon_y + 21, pigeon_y + 70]
    pigeon_head = [pigeon_x + 59, pigeon_x + 82, pigeon_y, pigeon_y + 20]

    if ((click_x >= pigeon_head[0] && click_x <= pigeon_head[1]) &&
        (click_y >= pigeon_head[2] && click_y <= pigeon_head[3])) {
        score += 3;
    }
    else if ((click_x >= pigeon_size[0] && click_x <= pigeon_size[1]) &&
        (click_y >= pigeon_size[2] && click_y <= pigeon_size[3])) {
        score += 1;
    } else {
        life_remains -= 1;
        renderLifeRemains();
        if (life_remains <= 0) {
            buildGameOver();
        }
        if (gameOver) {
            if ((click_x >= 340 && click_x <= 435) && (click_y >= 252 && click_y <= 284)) {
                reset();
                initialize();
                pigeonFly();
            }
        }
    }

    if (life_remains > 0) {
        renderBackground();
        renderTop();
        pigeonFly();
    }
}

function getMousePosition(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function msToMMSS(ms) {
    var seconds = ms / 1000;
    var minutes = parseInt(seconds / 60).toString();
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    seconds = parseInt(seconds % 60).toString();
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }
    return (minutes + ":" + seconds);
}
