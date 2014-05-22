/* global describe, it */

(function () {
    'use strict';

    // describe('Give it some context', function () {
    //     describe('maybe a bit more context here', function () {
    //         it('should run here few assertions', function () {
    //           var answer = 2;
    //           expect(2).to.equal(answer);
    //         });
    //     });
    // });

// Test reset button to clear all input fields
describe('Reset Button', function() {

	$('.reset').click();

	it('should set input-#of-sides input field to empty', function() {
		expect($('.input-#of-sides').val()).to.be('');
	})

	it('should set input-how-many-dice input field to empty', function() {
		expect($('.input-how-many-dice').val()).to.contain('');
	})

	it('should set die-box to empty', function() {
		expect($('.die-box').val()).to.contain('');
	})
})
})();