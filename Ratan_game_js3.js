var randomnumber = Math.random();
randomnumber = randomnumber * 4;
randomnumber = Math.floor(randomnumber);
//var randomlevel = 1;
//var click1 = [];
document.querySelector("h2").innerHTML = "Game level " + randomnumber;
$(".button3").hide();
//document.querySelector(".Level").innerHTML = "Level 1"

/*
$(".button3").on("click",function(){

    Level_1 = 0;
    location.reload();
    document.querySelector(".Level").innerHTML = "Level 1";
    
});  

if (Level_1 === 0)
$(".button3").on("click",function(){

    Level_2 = 1;
    document.querySelector(".Level").innerHTML = "Level 2";
    location.reload();
    
});  
*/
function click_colors()
{
    //click1 = [];
$(".red_shape").on("click",function(){
    click1.push("red");
    sound1.play();
    $(".red_shape").animate({
        opacity: 0.5
    }).animate({
        opacity: 2
    });

});  

$(".blue_shape").on("click",function(){
    click1.push("blue");
    sound1.play();
    $(".blue_shape").animate({
        opacity: 0.5
    },1000).animate({
        opacity: 2
    },1000);
    });

    $(".green_shape").on("click",function(){
        click1.push("green");
        sound1.play();
        $(".green_shape").animate({
            opacity: 0.5
        },1000).animate({
            opacity: 2
        },1000);
        });

        $(".yellow_shape").on("click",function(){
            click1.push("yellow");
            sound1.play();
            $(".yellow_shape").animate({
                opacity: 0.5
            },1000).animate({
                opacity: 2
            },1000);
            });

            $(".purple_shape").on("click",function(){
                click1.push("purple");
                sound1.play();
                $(".purple_shape").animate({
                    opacity: 0.5
                },1000).animate({
                    opacity: 2
                },1000);
                });

                $(".orange_shape").on("click",function(){
                    click1.push("orange");
                    sound1.play();
                    $(".orange_shape").animate({
                        opacity: 0.5
                    },1000).animate({
                        opacity: 2
                    },1000);
                    });
                }
/*
                function randomlevels()
                {
                randomlevel = randomlevel + 1;
                }
*/
function result(level,color0,color1,color2,color3,color4,color5)
{
    click1 = [];
    sound1 = new Audio("Ratan_game_sound.mp3");
    sound1_err = new Audio("Ratan_game_sound1.mp3");
    sound1_win = new Audio("Ratan_game_sound2.mp3");
    click_colors();  
  
                $(document).ready(function(){
                    $(".button2").on("click",function(){
                            
                            if (click1[0] == color0 && click1[1] == color1 && click1[2] == color2 && click1[3] == color3
                            && click1[4] == color4 && click1[5] == color5)
                            
                            {
                                //randomlevels();
                                //randomlevel = randomlevel + 1;
                                $(".Result").text("Level" + " " +  level + " " +"cleared");
                                sound1_win.play();
                                //click1 = [];
                                //document.querySelector("h2").innerHTML = "Game level " + randomlevel;
                                //$(".button1").show();
                                //$(".button2").hide();
                                //$(".button3").hide();
                                setTimeout(function () {

                                    window.location.reload();
                                  
                                    }, 5000);
                                    
                                    
                            }
                            else
                            {
                                $(".Result").text("Game Over");
                                sound1_err.play();
                                click1 = [];
                                $(".button3").show();

                            }
                });
                        });    
}
//randomlevels();

function memory(shape0,shape1,shape2,shape3,shape4,shape5)
{

    $(shape0).animate({
        opacity: 0.5
    }).animate({
        opacity: 2
    });

    $(shape1).animate({
        opacity: 0.5
    },1000).animate({
        opacity: 2
    },1000);

    $(shape2).animate({
        opacity: 0.5
    },1500).animate({
        opacity: 2
    },1000);
    
    $(shape3).animate({
        opacity: 0.5
    },2000).animate({
        opacity: 2
    },1000);

    $(shape4).animate({
        opacity: 0.5
    },3000).animate({
        opacity: 2
    },1000);

    $(shape5).animate({
        opacity: 0.5
    },4000).animate({
        opacity: 2
    },1000);
}


if (randomnumber === 1)
{

$(".button1").on("click",function(){

    memory(".red_shape",".blue_shape",".green_shape",".yellow_shape",".purple_shape",".orange_shape");
    $(".button1").hide();
    //result1();
    result("1","red","blue","green","yellow","purple","orange");
    //$(".button3").show();
});

$(".button3").on("click",function(){

    memory(".red_shape",".blue_shape",".green_shape",".yellow_shape",".purple_shape",".orange_shape");

});
    
}

else if (randomnumber === 2)
{
    $(".button1").on("click",function(){

        memory(".green_shape",".blue_shape",".red_shape",".yellow_shape",".orange_shape",".purple_shape");
        $(".button1").hide();
        result("2","green","blue","red","yellow","orange","purple");

    });

    $(".button3").on("click",function(){

        memory(".green_shape",".blue_shape",".red_shape",".yellow_shape",".orange_shape",".purple_shape");

    });
}

else if (randomnumber === 3)
{
    $(".button1").on("click",function(){

        memory(".blue_shape",".yellow_shape",".green_shape",".red_shape",".purple_shape",".orange_shape");
        $(".button1").hide();
        result("3","blue","yellow","green","red","purple","orange");

    });

    $(".button3").on("click",function(){

        memory(".blue_shape",".yellow_shape",".green_shape",".red_shape",".purple_shape",".orange_shape");
        
    });
}
else
{
    $(".button1").on("click",function(){

        memory(".yellow_shape",".blue_shape",".red_shape",".green_shape",".orange_shape",".purple_shape");
        $(".button1").hide();
        result("0","yellow","blue","red","green","orange","purple");
    });
    $(".button3").on("click",function(){

        memory(".yellow_shape",".blue_shape",".red_shape",".green_shape",".orange_shape",".purple_shape");

    });
}

/*
if ((click1 === "red") && (click2 === "blue") && (click3 === "green"))
{
    $(document).ready(function(){
        $(".Result").text("Result: Level 1 Cleared");
        });
 
}*/