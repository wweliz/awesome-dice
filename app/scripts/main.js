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
		console.log(gameDie);
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

randomArray.forEach(function(number) {
	 console.log(number);
	 $('.dice-container').append('<div class="box1">'+ number +'</div>');
});

	return (randomArray);

}

// Reset Button
$('.reset').click(function() {
  $('.input-of-sides').val('');
  $('.input-how-many-dice').val('');
  $('.die-box').val('');
});
