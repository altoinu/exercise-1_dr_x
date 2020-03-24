function getLettersSorted(text) {

	// lower case
	var sortText = text.toLowerCase();
	// remove punctuations (replace everything that's not a letter)
	sortText = sortText.replace(/[^\w]/gi, '')

	return 'hello ' + sortText;

};

module.exports = getLettersSorted;
