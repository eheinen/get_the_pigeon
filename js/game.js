window.onload = function() {
    initialize();
    pigeonFly();

    canvas.addEventListener("click", onClick, false);

    function onClick(e) {
        //click_x = e.pageX - 232;
        click_x = e.pageX - 321;
        //click_y = e.pageY - 60;
        click_y = e.pageY - 62;
        pigeon_size = [pigeon_x, pigeon_x + 82, pigeon_y, pigeon_y + 75]

        if ((click_x >= pigeon_size[0] && click_x <= pigeon_size[1]) &&
            (click_y >= pigeon_size[2] && click_y <= pigeon_size[3])) {
            score += 1;
        } else {
            life_remains -= 1;
            renderLifeRemains();
            if(life_remains <= 0){
                buildGameOver();
            }
            if((click_x >= 350 && click_x <= 425) && (click_y >= 262 && click_y <= 274)){
                reset();
                initialize();
                pigeonFly();
            }
        }

        if(life_remains > 0){
            renderBackground();
            renderTop();
            pigeonFly();
        }
    }
};

function pigeonFly() {
    // Pigeon image:
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
