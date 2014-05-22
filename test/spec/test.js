/* global describe, it */

///////////RANDOM NUMBER GENERATOR FOR DICE///////////////NOT WORKING
(function () {
    'use strict';

    describe('Random number generator for dice', function () {
            it('should return a random interger between 1 and 6', function () {
            	function randomNumber(min,max) {

            	return Math.floor(Math.random() * (max - min + 1)) + min; }
              
              expect(randomNumber(1,6)).to.equal(answer);
            });
    });
})();

///////////JUST TESTING/////////////JUST A TEST
(function () {
    'use strict';

    describe('Yes It Works', function () {
            it("should tell me it works", function() {
    		function add(a, b) {
      			return a + b;

      			expect(add(1, 2)).toBe(3);
    		}
    		
            });
    });
})();

///////////ROLL DICE////////////NOT WORKING
(function () {
    'use strict';

    describe('Click Function - Roll Dice', function () {
        describe('This is what happens when the roll button is clicked', function () {
            it('should addClass to change the ', function () {
              $('.roll-dice-button').click(function(){

    		  	$('.dice').css("display", $(this).val() + "active");
});
              expect(dice.display).to.equal('active');
            });
        });
    });
})();

////////////////DICE VALUE ASSIGN
(function () {
    'use strict';

    describe('Assigning Image For Dice Value', function () {
            it('should run here few assertions', function () {
              var diceValue = x
            	if (x === 1)
            		hasOne = true;

              expect(1).to.equal(true);
            });
    });
})();


////////////////ORIGINAL
(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              var answer = 2;
              expect(2).to.equal(answer);
            });
        });
    });
})();