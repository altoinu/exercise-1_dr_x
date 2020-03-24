var assert = require('assert');
var getLettersSorted = require('../src/index.js');

/*
describe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
*/

describe('getLettersSorted', () => {
	it('should return text without punctuation and in lower case', () => {
		assert.equal(getLettersSorted('John, Smith!'), 'hello johnsmith');
	});
});