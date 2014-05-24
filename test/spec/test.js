'use strict';

(function () {

//Create Die Button
describe('Create The Actual Die Button', function(){

	// set input value to 7
	$('.die-box').val('7');

	// then click the button
	$('.create-die').click();

	it('should create a die and store it in the gameDie global', function(){
		expect(gameDie.sides).to.equal(7);
	});

	it('should create a die with sides equal the input value', function(){
		var inputVal = parseInt($('.die-box').val());
		expect(gameDie.sides).to.equal(inputVal);
	});

});

// Test that random number displays inside randomnumber div
describe('RandNumDisplay', function() {
	
	$('.randomnumber').text();

	it('should display each number generated in its own randomnumber div', function() {
		expect(randomnumber).val().to.equal();
	});

});

// Test reset button to clear all input fields
describe('Reset Button', function() {

	$('.reset').click();

	it('should set input-of-sides input field to empty', function() {
		expect($('.input-of-sides').val()).to.equal();
	})

	it('should set input-how-many-dice input field to empty', function() {
		expect($('.input-how-many-dice').val()).to.equal();
	})

	it('should set dice-container to empty', function() {
		expect($('.dice-container').val()).to.empty();
	})

})

// Test roll function
describe('Runs a roll function 500 times.', function() {
	it('Should return 500 values between its minimum and maxium values.', function(){
		var die = new Die('7');

		for (var i = 0; i < 500; i += 1) {
			expect(die.roll()).to.be.within(1,7);
		}

	});
	
});

// Die Constructor
describe('Die Constructor', function(){

	it('Should add a sides property to instances to determine how many sides each die has.', function(){
		var die = new Die(10,20);
		expect(die).to.have.property('sides');
	});

	it('Should add a howMany property to instances to determine how many dice are being rolled.', function(){
		var die = new Die(10,20);
		expect(die).to.have.property('howMany');
	});

	it('Should accept a number or a number as a string as its argument.', function(){
		var die = new Die('7,9');
		expect(die.sides).to.equal(7);
	});

	it('Should accept a number or a number as a string as its argument.', function(){
		var die = new Die('7,9');
		expect(die.howMany).to.equal(9);
	});
});


})();