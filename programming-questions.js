function square(integerArray){
	var total = 0;
	for(i=0; i < integerArray.length; i++){
		total += integerArray[i];
	}

	if(Math.sqrt(total) % 1 === 0){
		 return Math.sqrt(total);
	}else {
		return total;
	}
}

function duplicate(integerArray){
	var checkingValue = null;

	for (var i = 0; i < integerArray.length; i++) {
		checkingValue = integerArray[i];
		for (var j = i+1; j < integerArray.length; j++) {
			if(checkingValue === integerArray[j]){
				return true;
			}
		}
	}

	return false;
}

function anagram(stringOne, stringTwo){
	var arrayOne = stringOne.split('');
	var arrayTwo = stringTwo.split('');

	var isAnagram = false;

	for (var i = 0; i < arrayOne.length; i++) {
		isAnagram = false;
		for (var j = 0; j < arrayTwo.length; j++) {
			if(arrayOne[i] === arrayTwo[j]){
				isAnagram = true;
			}
		}
		if(isAnagram === false){
			return false
		}
	}

	return true;
}

function searchPhoneBook(entry){
	var phoneBook = [{name: "Kwena", number: "+27719264882"}];
	for(i = 0; i < phoneBook.length; i++){
		if(entry === phoneBook[i].name){
			return phoneBook[i];
		}
	}
	return "Entry not found";
}
