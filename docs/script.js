$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds"); 
    var $buttonStart = $("#button-start"); 
    var $buttonStop = $("#button-stop"); 
    var $buttonReset = $("#button-reset"); 
    var interval;

    var $timerParagraph = $("#timer");

    $timerParagraph.attr("class", "timer-background");
    $timerParagraph.css("background-color", "gray");
    $timerParagraph.css("opacity", "1.0");
    $timerParagraph.css("position", "relative");
    $timerParagraph.css("left", "250px");
    $timerParagraph.css("top", "300px");
    $timerParagraph.css("width", "50px");
    $timerParagraph.css("border-style", "double");

    //add classes to buttons
    var $buttonStartClass = $buttonStart.attr("class", "start-class");
    var $buttonStopClass = $buttonStop.attr("class", "stop-class");
    var $buttonResetClass = $buttonReset.attr("class", "reset-class");

    // style buttons
    $buttonStartClass.css("background-color", "black");
    $buttonStartClass.css("color", "white");
    $buttonStartClass.css("border-radius", "15px");
    $buttonStartClass.css("position", "relative");
    $buttonStartClass.css("top", "300px");
    $buttonStartClass.css("left", "200px");

    $buttonStopClass.css("background-color", "black");
    $buttonStopClass.css("color", "white");
    $buttonStopClass.css("border-radius", "15px");
    $buttonStopClass.css("position", "relative");
    $buttonStopClass.css("top", "300px");
    $buttonStopClass.css("left", "200px");


    $buttonResetClass.css("background-color", "black");
    $buttonResetClass.css("color", "white");
    $buttonResetClass.css("border-radius", "15px");
    $buttonResetClass.css("position", "relative");
    $buttonResetClass.css("top", "300px");
    $buttonResetClass.css("left", "200px");
    
    

    //style stopwatch
    $(".wrapper").css("background-image", "url(stopwatch_image.png)");
    $(".wrapper").css("background-repeat", "no-repeat");
    $(".wrapper").css("background-size", "600px");
    $(".wrapper").css("height", "600px");
    $(".wrapper").css("background-color", "orange");

    $("h1").css("position", "relative");
    $("h1").css("top", "200px");
    $("h1").css("left", "220px"); 
    $("h1").css("font-style", "italic"); 

    $("h2").css("position", "relative");
    $("h2").css("top", "200px");
    $("h2").css("left", "150px"); 
    $("h2").css("font-style", "italic"); 

    $buttonStart.click(function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $timerParagraph.css("background-color", "green");
    });

    $buttonStop.click(function() {
        clearInterval(interval);
        $timerParagraph.css("background-color", "red");
    });

    $buttonReset.click(function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $timerParagraph.css("background-color", "gray");
        $timerParagraph.css("opacity", "1.0");
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }

        if(seconds % 2 == 0) {
            $timerParagraph.css("opacity", "1.0");
        }
        else {
            $timerParagraph.css("opacity", "0.8");
        }
    }
});