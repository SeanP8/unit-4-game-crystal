// 4 crystals with a random result

// Every crystal needs to have a random number between 1-12

//A new random number should be generated every time we win or lose to the crystals

//When clicking any crystal, it should be adding with the previous result, until it equal the Random result

//If it is greater than the Random Result, decrement a lose counter

//If it is equal, then increment a win counter

// Setters
// Getters

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function (){
    
    $(".crystals").empty();

    var images = [
        'https://crystaltoken.co/assets/images/back/crystal.png',
        'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',
        'https://mrtoys3-mrtoys.netdna-ssl.com/669785-thickbox_default/crystal-growing-kit.jpg',
        'https://joanandjohnwalker.com/wp-content/uploads/2017/09/2018-Crystal-Conference-graphic.jpg'];
    
    random_result = Math.floor(Math.random() * 69) +30;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) +1;
    // console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class":'crystal',
                "data-random": random
        });
            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"
            });
        $(".crystals").append(crystal);
        
    }
    $("#previous").html("Total Score: " + previous);
}

startGame();


// Event Delegation
$(document).on('click', ".crystal", function (){

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    
    if(previous > random_result){

        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        startGame();
    }
    
    else if(previous === random_result){

        win++;

        $("#win").html("You Win: " + win);

        previous = 0;

        startGame();
    }

    
});