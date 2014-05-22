/* global describe, it */

(function () {
//     'use strict';

//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {
//               var answer = 2;
//               expect(2).to.equal(answer);
//             });
//         });
//     });
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

})();