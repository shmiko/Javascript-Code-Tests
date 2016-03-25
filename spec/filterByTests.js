

(function() {
  'use strict';
  // var expect = require('expect.js');
  // var expect = chai.expect;

  describe('Filter By Function', function() {
    describe('filterBy', function(){
      var numbers = [1, 2, 3, 4, 5];
      var numbersPos = [0, 2, 4, 6, 8];
      it('should take an array of numbers and return array basd on predicate', function() {
        var filterByTestCase = numbers.filterBy(function(number) { return number % 2 === 0; });
        expect(filterByTestCase).to.have.length(2);    //equal([ 2, 4 ]);
      });
      it('should take an array and return only those that match the predicate',function(){
        var filterByTestCasePos = numbersPos.filterBy(function(number) { return number % 2 === 0; });
        expect(filterByTestCasePos).to.have.length(5);    //equal([ 0, 2, 4, 6, 8 ]);
      })
    });
  });  
})();