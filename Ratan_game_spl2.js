//var randomnumber = Math.random();
//randomnumber = randomnumber * 4;
//randomnumber = Math.floor(randomnumber);

var randomnumber = 1;
$(".button4").hide();
document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
$(".button3").hide();
//document.querySelector(".Level").innerHTML = "Level 1"

function click_colors() {
    //click1 = [];
    $(".red_shape").on("click", function () {
        click1.push("red");
        //sound1.play();
        $(".red_shape").animate({
            opacity: 0.5
        }).animate({
            opacity: 2
        });
        $(".red_shape").off();
    });

    $(".blue_shape").on("click", function () {
        click1.push("blue");
        //sound1.play();
        $(".blue_shape").animate({
            opacity: 0.5
        }, 1000).animate({
            opacity: 2
        }, 1000);
        $(".blue_shape").off();
    });

    $(".green_shape").on("click", function () {
        click1.push("green");
        //sound1.play();
        $(".green_shape").animate({
            opacity: 0.5
        }, 1000).animate({
            opacity: 2
        }, 1000);
        $(".green_shape").off();
    });

    $(".yellow_shape").on("click", function () {
        click1.push("yellow");
        //sound1.play();
        $(".yellow_shape").animate({
            opacity: 0.5
        }, 1000).animate({
            opacity: 2
        }, 1000);
        $(".yellow_shape").off();
    });

    $(".purple_shape").on("click", function () {
        click1.push("purple");
        //sound1.play();
        $(".purple_shape").animate({
            opacity: 0.5
        }, 1000).animate({
            opacity: 2
        }, 1000);
        $(".purple_shape").off();
    });

    $(".orange_shape").on("click", function () {
        click1.push("orange");
        //sound1.play();
        $(".orange_shape").animate({
            opacity: 0.5
        }, 1000).animate({
            opacity: 2
        }, 1000);
        $(".orange_shape").off();
    });

}


function memory(shape0, shape1, shape2, shape3, shape4, shape5) {

    $(shape0).animate({
        opacity: 0.5
    }).animate({
        opacity: 2
    });

    $(shape1).animate({
        opacity: 0.5
    }, 1000).animate({
        opacity: 2
    }, 1000);

    $(shape2).animate({
        opacity: 0.5
    }, 1500).animate({
        opacity: 2
    }, 1000);

    $(shape3).animate({
        opacity: 0.5
    }, 2000).animate({
        opacity: 2
    }, 1000);

    $(shape4).animate({
        opacity: 0.5
    }, 3000).animate({
        opacity: 2
    }, 1000);

    $(shape5).animate({
        opacity: 0.5
    }, 4000).animate({
        opacity: 2
    }, 1000);
}

function game()
{
$(".button1").on("click", function () {

    memory(".red_shape", ".blue_shape", ".green_shape", ".yellow_shape", ".purple_shape", ".orange_shape");
    $(".button1").off();
    $(".button1").hide();
    $(".button4").hide();

    click1 = [];
    sound1 = new Audio("Ratan_game_sound.mp3");
    sound1_err = new Audio("Ratan_game_sound1.mp3");
    sound1_win = new Audio("Ratan_game_sound2.mp3");
    click_colors();


    $(document).ready(function () {
        $(".button2").on("click", function () {

            if (click1[0] == "red" && click1[1] == "blue" && click1[2] == "green" && click1[3] == "yellow"
                && click1[4] == "purple" && click1[5] == "orange") {
                $(".red_shape").off();
                $(".blue_shape").off();
                $(".green_shape").off();
                $(".yellow_shape").off();
                $(".purple_shape").off();
                $(".orange_shape").off();
                $(".Result").text("Level 1 cleared. Click start game to begin next level");
                sound1_win.play();
                randomnumber = 2;
                click1 = [];
                //document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
                $(".button3").hide();
                $(".button2").off();
                $(".button1").show();

                $(".button1").on("click", function () {
                    document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
                    $(".Result").text("Result:");
                    memory(".green_shape", ".blue_shape", ".red_shape", ".yellow_shape", ".orange_shape", ".purple_shape");
                    $(".button1").off();
                    $(".button1").hide();


                    sound2 = new Audio("Ratan_game_sound.mp3");
                    sound2_err = new Audio("Ratan_game_sound1.mp3");
                    sound2_win = new Audio("Ratan_game_sound2.mp3");
                    click_colors();
                    $(document).ready(function () {
                        $(".button2").on("click", function () {
                            //$(".Result").text("Level 2 cleared");
                            if (click1[0] == "green" && click1[1] == "blue" && click1[2] == "red" && click1[3] == "yellow"
                                && click1[4] == "orange" && click1[5] == "purple") {
                                $(".red_shape").off();
                                $(".blue_shape").off();
                                $(".green_shape").off();
                                $(".yellow_shape").off();
                                $(".purple_shape").off();
                                $(".orange_shape").off();
                                $(".Result").text("Level 2 cleared. Click start game to begin next level");
                                sound2_win.play();
                                randomnumber = 3;
                                click1 = [];
                                //document.querySelector("h2").innerHTML = "Game Level " + randomnumber;

                                $(".button3").hide();
                                $(".button2").off();
                                $(".button1").show();

                                $(".button1").on("click", function () {
                                    document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
                                    $(".Result").text("Result:");
                                    memory(".blue_shape", ".yellow_shape", ".green_shape", ".red_shape", ".purple_shape", ".orange_shape");
                                    $(".button1").off();
                                    $(".button1").hide();


                                    sound2 = new Audio("Ratan_game_sound.mp3");
                                    sound2_err = new Audio("Ratan_game_sound1.mp3");
                                    sound2_win = new Audio("Ratan_game_sound2.mp3");
                                    click_colors();
                                    $(document).ready(function () {
                                        $(".button2").on("click", function () {
                                            //$(".Result").text("Level 2 cleared");
                                            if (click1[0] == "blue" && click1[1] == "yellow" && click1[2] == "green" && click1[3] == "red"
                                                && click1[4] == "purple" && click1[5] == "orange") {
                                                $(".red_shape").off();
                                                $(".blue_shape").off();
                                                $(".green_shape").off();
                                                $(".yellow_shape").off();
                                                $(".purple_shape").off();
                                                $(".orange_shape").off();
                                                $(".Result").text("Level 3 cleared. Click start game to begin next level");
                                                sound2_win.play();
                                                randomnumber = 4;
                                                click1 = [];
                                                //document.querySelector("h2").innerHTML = "Game Level " + randomnumber;

                                                $(".button3").hide();
                                                $(".button2").off();
                                                $(".button1").show();

                                                $(".button1").on("click", function () {
                                                    document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
                                                    $(".Result").text("Result:");
                                                    memory(".yellow_shape", ".blue_shape", ".red_shape", ".green_shape", ".orange_shape", ".purple_shape");
                                                    $(".button1").off();
                                                    $(".button1").hide();


                                                    sound2 = new Audio("Ratan_game_sound.mp3");
                                                    sound2_err = new Audio("Ratan_game_sound1.mp3");
                                                    sound2_win = new Audio("Ratan_game_sound2.mp3");
                                                    click_colors();

                                                    $(document).ready(function () {
                                                        $(".button2").on("click", function () {
                                                            //$(".Result").text("Level 2 cleared");
                                                            if (click1[0] == "yellow" && click1[1] == "blue" && click1[2] == "red" && click1[3] == "green"
                                                                && click1[4] == "orange" && click1[5] == "purple") {

                                                                $(".red_shape").off();
                                                                $(".blue_shape").off();
                                                                $(".green_shape").off();
                                                                $(".yellow_shape").off();
                                                                $(".purple_shape").off();
                                                                $(".orange_shape").off();
                                                                $(".Result").text("Level 4 cleared");
                                                                sound2_win.play();
                                                                click1 = [];
                                                                document.querySelector("h2").innerHTML = "Game Completed";
                                                                $(".button3").hide();
                                                                $(".button2").hide();
                                                                $(".button1").hide();
                                                                $(".button2").off();
                                                                $(".button3").off();
                                                                $(".button4").show();

                                                            }
                                                            else {
                                                                $(".red_shape").off();
                                                                $(".blue_shape").off();
                                                                $(".green_shape").off();
                                                                $(".yellow_shape").off();
                                                                $(".purple_shape").off();
                                                                $(".orange_shape").off();

                                                                $(".Result").text("Game Over");
                                                                sound1_err.play();
                                                                click1 = [];
                                                                $(".button3").show();
                                                                click_colors();

                                                                $(".button3").on("click", function () {

                                                                    memory(".yellow_shape", ".blue_shape", ".red_shape", ".green_shape", ".orange_shape", ".purple_shape");

                                                                    $(".button3").off();

                                                                });
                                                            }
                                                        });
                                                    });


                                                });


                                            }
                                            else {
                                                $(".red_shape").off();
                                                $(".blue_shape").off();
                                                $(".green_shape").off();
                                                $(".yellow_shape").off();
                                                $(".purple_shape").off();
                                                $(".orange_shape").off();

                                                $(".Result").text("Game Over");
                                                sound1_err.play();
                                                click1 = [];
                                                $(".button3").show();
                                                click_colors();

                                                $(".button3").on("click", function () {

                                                    memory(".blue_shape", ".yellow_shape", ".green_shape", ".red_shape", ".purple_shape", ".orange_shape");

                                                    $(".button3").off();

                                                });
                                            }

                                        });

                                    });



                                });

                            }
                            else {
                                $(".red_shape").off();
                                $(".blue_shape").off();
                                $(".green_shape").off();
                                $(".yellow_shape").off();
                                $(".purple_shape").off();
                                $(".orange_shape").off();

                                $(".Result").text("Game Over");
                                sound1_err.play();
                                click1 = [];
                                $(".button3").show();
                                click_colors();

                                $(".button3").on("click", function () {

                                    memory(".green_shape", ".blue_shape", ".red_shape", ".yellow_shape", ".orange_shape", ".purple_shape");

                                    $(".button3").off();

                                });
                            }
                        });

                    });
                });
            }


            else {
                $(".red_shape").off();
                $(".blue_shape").off();
                $(".green_shape").off();
                $(".yellow_shape").off();
                $(".purple_shape").off();
                $(".orange_shape").off();
                $(".Result").text("Game Over");
                sound1_err.play();
                click1 = [];
                $(".button3").show();
                click_colors();

                $(".button3").on("click", function () {

                    memory(".red_shape", ".blue_shape", ".green_shape", ".yellow_shape", ".purple_shape", ".orange_shape");

                    $(".button3").off();

                });

            }


        });

    });

});
}

game();

$(".button4").on("click", function () {
    var randomnumber = 1;
    $(".button2").show();
    $(".button1").show();
    $(".button4").hide();
document.querySelector("h2").innerHTML = "Game Level " + randomnumber;
$(".Result").text("Result:");
    game();
});