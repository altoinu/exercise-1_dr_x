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

describe('getLettersSorted', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('I really like curry rice. I mean a lot!'),
			'aaacceeeeiiiikllllmnorrrrtuyy'
		);
	});
});

describe('getLettersSorted (sorted in reverse order). Worst case if pivot in quicksort is either first or last char', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('zyxwvutsrqponmlkjihgfedcba'),
			'abcdefghijklmnopqrstuvwxyz'
		);
	});
});

describe('getLettersSorted (repeating letters). Worst case if pivot in quicksort is either first or last char', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
			'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		);
	});
});
