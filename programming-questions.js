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

//Linked Lists

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.push = function(element) {
	var current;

	var node = {
		value: element,
		next: null
	}

	if(!this.head){
		this.head = node;
	}else {
		current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
}

LinkedList.prototype.removeDuplicates = function() {
	var previous = this.head;
	var current = previous.next;

	var nodes = {};
	nodes[previous.value] = true;

	while(current) {
		if(!nodes[current.value]) {
			nodes[current.value] = true;
			previous = current;
		}else {
			previous.next = current.next;
		}
		current = current.next;
	}

LinkedList.prototype.reverse = function() {
	var previous = null;
	var current = this.head;
	var next;

	while(current){
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	this.head = previous;
}

//Trees and Graphs

class BinarySearchTree {
	constructor () {
		this.root = null;
	}

	push (element) {
		var current;

		var node = {
			value: element,
			left: null,
			right: null,
		}

		if (!this.root) {
			this.root = node;
		} else {
			current = this.root;

			while (current) {
				if (element < current.value) {
					if (!current.left) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				}	else if (element > current.value) {
					if (!current.right) {
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				} else {
					break;
				}
			}
		}

	}

	search (element) {
		var current = this.root;

		while (current) {
			if (element < current.value) {
				if (!current.left) {
					return element + " does not exists";
				} else {
					current = current.left;
				}
			}	else if (element > current.value) {
				if (!current.right) {
					return element + " does not exists";
				} else {
					current = current.right;
				}
			} else if (element === current.value) {
				return current;
			} else {
				return element + " does not exists";
			}
		}
	}

	disitanceBetween (n1, n2) {
		var root = this.root;
		var node1 = this.search(n1);
		var node2 = this.search(n2);

		var x = this.pathLength(root, node1.value) - 1;
		var y = this.pathLength(root, node2.value) - 1;
		var LCA = this.findLCA(root, node1.value, node2.value);
		var LCADistance = this.pathLength(LCA.value) - 1;
		return (x + y) -2 * LCADistance;
	}

	pathLength (root, n1) {
		var node1 = this.search(n1);

		if (root) {
			var x = 0;
			if ((root.value === node1.value) || (x = this.pathLength(root.left, node1.value)) > 0 || (x = this.pathLength(root.right, node1.value)) > 0 ) {
				return x + 1;
			}
			return 0;
		}
		return 0;
	}

	findLCA (root, n1,n2) {
		var node1 = this.search(n1);
		var node2 = this.search(n2);

		var left;
		var right;

		if (root) {
			if (root.value === node1.value || root.value === node2.value) {
				return root;
			}
			left = this.findLCA(root.left, node1.value, node2.value);
			right = this.findLCA(root.right, node1.value, node2.value);

			if (left && right) {
				return root;
			}
			if (left){
				return left;
			}
			if (right) {
				return right;
			}
		}
		return null;
	}

}

//Searching

function searchDictionary (dictionary, word) {
	var low = 0;
	var high = dictionary.length;

	while (low <= high) {
		var mid = Math.floor((low + high) / 2);
		if (dictionary[mid] > word) {
			high = mid - 1;
		} else if (dictionary[mid] < word) {
			low = mid + 1;
		} else {
			return mid;
		}
	}

	return "not found";
}

function netGoldfish (fishTank, goldfish) {
	var result = null;
	for (var i = 0; i < fishTank.length; i++) {
		if (fishTank[i] === goldfish) {
			result = i;
			break
		}
	}
	return result;
}

//Sorting

function selectionSort (collection) {
	for (var i = 0; i < collection.length - 1; i++) {
		var minIndex = i;
		for (var j = i + 1; j < collection.length) {
			if (collection[j] < collection[minIndex]) {
				minIndex = j;
			}
		}
		var temp = collection[i];
		collection[i] = collection[minIndex];
		collection[minIndex] = temp;
	}
	return collection;
}

function bubbleSort (collection) {
	do {
		var swapped = false
		for (var i = 0; collection.length - 1; i++) {
			if (collection[i] > collection[i + 1]) {
				var temp = collection[i];
				collection[i] = collection[i + 1];
				collection[i + 1] = temp;
				swapped = true;
			}
		}
	}
	while (swapped === false);

	return collection;
}

function bubbleSort (collection) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < collection.length - 1; i++) {
			if (collection[i] > collection[i + 1]) {
				var temp = collection[i];
				collection[i] = collection[i + 1];
				collection[i + 1] = temp;
				swapped = true;
			}
		}
	}
	while (swapped);

	return collection;
}
