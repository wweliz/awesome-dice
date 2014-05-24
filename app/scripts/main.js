'use strict';

// Die Constructor
function Game (sides,howMany) {
  this.diceSides = parseInt(sides);
  this.howMany = parseInt(howMany);
  this.roll = generateArray(howMany, 1, sides);
}

// Roll Dice Button
$('.roll-dice').click(function(){
	var howMany = $('.input-how-many-dice').val();
  var sides = $('.input-number-of-sides').val();
	var gameDie = new Game(sides,howMany);
	;
});

// Generate Individual Random Number
function randomNumber(min,max) {
  return (Math.round((max-min) * Math.random() + min));
}

// Generate Array of Random Numbers
function generateArray(numDice,minDiceSides,maxDiceSides) {
	var randomArray = [];
  for (var dice=0; dice<numDice; dice++) {
    randomArray[dice] = randomNumber(minDiceSides,maxDiceSides);
}

// not sure if we need the below function -- will need to change die-box name

// Reset Button Function
$('.reset').click(function() {
  $('.input-of-sides').val('');
  $('.input-how-many-dice').val('');
  $('.dice-container').empty();
});

// not sure if we need the below function either
randomArray.forEach(function(number) {
	 
	 $('.dice-container').append('<div class="box1">'+ number +'</div>');
});

	return (randomArray);

}