var verifyPalindromic = function (n) {
	var array = new Array();
	while(n!==0) {
		var digit = n%10;
		array.push(digit);
		n = (n-digit)/10;
	}
	var lengthOfArray = array.length;
	var bound = Math.floor(lengthOfArray/2); //so much easier in C, C++, etc
	for (var i = 0; i < bound; i++) {
		if(array[i]!==array[lengthOfArray-1-i]) return false;
	}
	return true;
}
//start with the largest product of 2 3 digits number and work background till one number is a palindromic
var largest = 0;
for (var i = 999; i > 99; i--) {
	for (var j = i; j > 99; j--) {
		if(verifyPalindromic(i*j) && (i*j)>largest)
			largest = i*j;
	}
}
console.log(largest);