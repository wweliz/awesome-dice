/* global describe, it */
   'use strict';

(function () {

/////////////////////////CREATE ACTUAL DIE BUTTON
	describe("Create The Actual Die Button", function(){
 
      // set input vaue to 7
      $('.die-box').val('7');
      // then click the button
      $('.create-die').click();
 
      it("should create a die and store it in the gameDie global", function(){        
        expect(gameDie.sides).to.equal(7);
      });
 
      it("should create a die with sides equal the input value", function(){
        var inputVal = parseInt($('.die-box').val())
        expect(gameDie.sides).to.equal(inputVal);
      });
 
    });
/////////////////////DIE CONTRUCTOR
    describe("Die Constructor", function(){
 
    	it("Should add a 'sides' property to instances to determine how many sides each die has.", function(){
        var die = new Die(10,20);
        expect(die).to.have.property('sides');
      	});

      	it("Should add a 'howMany' property to instances to determine how many dice are being rolled.", function(){
        var die = new Die(10,20);
        expect(die).to.have.property('howMany');
      	});
 
      	it("Should accept a number or a number as a string as its argument.", function(){
        var die = new Die('7,9');
        expect(die.sides).to.equal(7);
      	})

    	it("Should accept a number or a number as a string as its argument.", function(){
        var die = new Die('7,9');
        expect(die.howMany).to.equal(9);
      	})
 
      	describe("Runs a roll function 500 times.", function() {
        it("Should return 500 values between it's minimum and maxium values.", function(){
          var die = new Die('7');
 
          for (var i = 0; i < 500; i += 1) {
            expect(die.roll()).to.be.within(1,7);
          }
        })
      	})
 
    })

// Test reset button to clear all input fields
describe('Reset Button', function() {

	$('.reset').click();

	it('should set input-number-of-sides input field to empty', function() {
		expect($('.input-number-of-sides').val()).to.be('');
	})

	it('should set input-how-many-dice input field to empty', function() {
		expect($('.input-how-many-dice').val()).to.equal();
	})

	it('should set die-box to empty', function() {
		expect($('.die-box').val()).to.equal();
	})
})
})();

// Test that random number displays inside randomnumber div
describe('RandNumDisplay', function() {
	
	$('.randomnumber').text();

	it('should display each number generated in its own randomnumber div', function() {
		expect(randomnumber).val().to.equal();
		})
})

// functions

function random_number(min,max) {

    return (Math.round((max-min) * Math.random() + min));
}

function create_non_unique_random_array(num_dice,min,max) {

    var nums = new Array;

    for (var dice=0; dice<num_dice; dice++) {
        nums[dice] = random_number(min,max);
    }

    return (nums);
}

