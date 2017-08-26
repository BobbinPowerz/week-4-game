// declaring global variables to hold wins and losses. 
var wins = 0;
var losses = 0;

// reset and restart main gamie loop

function reset(){
    loop();
};

//main game loop
function loop(){
    // Block to get and display random number for goal score to reach
    currentScore = 0;
    $("#current-score").html(currentScore);
    goalScore = Math.floor((Math.random() * 101) + 19);
   $("#goal-score").html(goalScore);


    // Block that's getting random 4 non-duplicate numbers by randomly choosing 
    // and splicing an element from an array and pushing it to
    // another array from which to assign elements later
    hiddenScores = [];
    var roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    for (var i = 0; i < 4; i++) {
        var position = Math.floor(Math.random() * roll.length);
        var selected = roll.splice(position,1);
        hiddenScores.push(selected);
        console.log(hiddenScores);
    }
    // assigning name and value to crystal icons element attributes
    // with Jquery id selectors
    $("#icon-1").attr("data-crystalvalue", hiddenScores[0]);
    $("#icon-2").attr("data-crystalvalue", hiddenScores[1]);
    $("#icon-3").attr("data-crystalvalue", hiddenScores[2]);
    $("#icon-4").attr("data-crystalvalue", hiddenScores[3]);
};

loop();

// Game loop starts here with on click event.
$(".crystals").on("click", function() {

    //assigning icon-object attribute value, converting it 
    //into string, adding it to the total score and 
    // displaying it for user to  see.
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    $("#current-score").html(currentScore);

        // win/lose logic below determines win or loss and
        // resets the game stats.
        if (goalScore === currentScore) {
            wins = wins + 1;
            $("#wins").html(wins);
            $("#results").html("You Win!!!");
             reset();
        }

        if (currentScore >= goalScore) {
            losses = losses + 1;
            $("#losses").html(losses);
            $("#results").html("You Lose.");
            reset();
        }
});
