function Die (sides,howMany) {
  this.sides = parseInt(sides);
  this.howMany = howMany;
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );

    $('.randomnumber').text('THIS IS THE RANDOM NUMBER: ' + result);
    return result;
  }
}
 
$('.create-die').click(function(){
	var howMany = $('die-box').val();
  	var sides = $('.die-box').val();
  	gameDie = new Die(sides);
});


// Reset Button Function

$('.reset').click(function() {
  $('.input-of-sides').val('');
  $('.input-how-many-dice').val('');
  $('.die-box').val('');
});
