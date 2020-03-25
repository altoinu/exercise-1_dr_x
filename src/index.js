function randRange(min, max) {

	return Math.floor(Math.random() * (max - min)) + min;

}

function split(text) {

	// using random char as pivot
	var pivotIndex = randRange(0, text.length);
	var pivot = text.charAt(pivotIndex);

	// check each letter and put separate to ones before and after pivot 
	var before = [];
	var after = [];

	for (var i = 0; i <= text.length - 1; i++) {

		if (i != pivotIndex) {

			let targetChar = text.charAt(i);

			if (targetChar <= pivot)
				before.push(targetChar);
			else
				after.push(targetChar);

		}

	}

	var result = {
		pivot: pivot,
		before: before.join(''),
		after: after.join('')
	};

	//console.log(result);

	return result;

}

function quicksort(text) {

	// If 1 or 0 chars, no sorting needed
	if (text.length <= 1)
		return text;

	var splitText = split(text);

	// recursively sort before and after texts
	var sortedBeforeText = quicksort(splitText.before);
	var sortedAfterText = quicksort(splitText.after);

	// then combine results
	var sortCompletedText = sortedBeforeText + splitText.pivot + sortedAfterText;
	//console.log(sortCompletedText);

	return sortCompletedText;

}

function getLettersSorted(text) {

	console.log(text);

	// lower case
	var sortTargetText = text.toLowerCase();
	// remove punctuations (replace everything that's not a letter)
	sortTargetText = sortTargetText.replace(/[^\w]/gi, '')

	var sortCompletedText = quicksort(sortTargetText);
	console.log(sortCompletedText);

	return sortCompletedText;

};

module.exports = getLettersSorted;
