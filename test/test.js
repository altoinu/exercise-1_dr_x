var assert = require('assert');
var getLettersSorted = require('../src/index.js');

describe('getLettersSorted', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(getLettersSorted('John, Smith!'), 'hhijmnost');
	});
});

describe('getLettersSorted', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('When not studying nuclear physics, Bambi likes to play beach volleyball.'),
			'aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy'
		);
	});
});
