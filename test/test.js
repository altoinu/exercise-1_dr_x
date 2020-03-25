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

describe('getLettersSorted, worst case (sorted in reverse order)', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('zyxwvutsrqponmlkjihgfedcba'),
			'abcdefghijklmnopqrstuvwxyz'
		);
	});
});

describe('getLettersSorted, worst case (repeating letters)', () => {
	it('should return letters, without punctuation and in lower case, sorted alphabetically', () => {
		assert.equal(
			getLettersSorted('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
			'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		);
	});
});
