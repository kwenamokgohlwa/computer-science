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

//Hash Tables: Question 6
var myHash = [{}];

function insertHash(name, address, phoneNumber){
	myHash.push({phoneNumber: phoneNumber, name: name, address: address});
}

function retrieveHash(entry){
	for(i = 0; i < myHash.length; i++){
		if(myHash[i].phoneNumber === entry){
			return myHash[i];
		}
	}
	return "Entry not found"
}

//Hash Tables: Question 7
var myHash = [{}];

function insertHash(code, name, price, stock){
	myHash.push({code: code, name: name, price: price, stock: stock});
}

function retrieveHash(code){
	for(i = 0; i < myHash.length; i++){
		if(myHash[i].code === code){
			return myHash[i];
		}
	}
	return "Inventory item not found"
}

//Hash Tables: Question 8
var myHash = [{}];

function insertHash(name, publisher, publicationDate){
	myHash.push({name: name, publisher: publisher, publicationDate: publicationDate});
}

function retrieveHash(publication, publicationDate){
	for(i = 0; i < myHash.length; i++){
		if(myHash[i].publication === publication && myHash[i].publicationDate === publicationDate){
			return myHash[i];
		}
	}
	return "Newspaper not found"
}

//Stacks and Queues: Question 1

function reverse(original){
	var originalArray = original.split('');
	var reverseArray = [];
	for(i = originalArray.length - 1; i >= 0; i--){
		reverseArray.push(originalArray[i]);
	}
	return reverseArray.join('');
}

//Stacks and Queues: Question 2


class Stack {
  constructor(){
    this.myArray = [];
  }

  push(element){
    this.myArray[this.myArray.length] = element;
  }

  pop(){
    let newArray = [this.myArray.length -1];
    var temp;
    for(let i = 0; i < this.myArray.length; i++){
      if(i === this.myArray.length -1){
        temp = this.myArray[i];
        break;
      }
      newArray[i] = this.myArray[i];
    }
    this.myArray = newArray;
    return temp;
  }
}

//Stacks and Queues: Question 3

class Queue {
  constructor(){
    this.myArray = [];
  }

  enqueue(element){
    this.myArray[this.myArray.length] = element;
  }

  dequeue(){
    var temp = this.myArray[0];
    var newArray = [];
    for(i = 0; i < myArray.length; i++){
      if(i === 0){
        break;
      }
      newArray[i] = this.myArray[i];
    }
    this.myArray = newArray[i];
    return temp;
  }
}
