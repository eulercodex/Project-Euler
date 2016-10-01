/* Just a prime test function I thought would be useful but it never was
var isPrime = function(n) {
	if (n == 2) return true;
	if (n%2 == 0) return false;
	var bound = sqrt(n);
	var i = 3;
	while(i <= bound) {
		if(n%i == 0) return false;
		i+=2; //just check divisibility by odd numbers
	}
	return true;
}
*/
var divideByAllMultipleOf = function (n,p) {
	if(n%p==0)
		return divideByAllMultipleOf(n/p,p)
	else return n;
}
var number = 600851475143;
var bound = Math.sqrt(number); //only need to check up to the square root of the number
var i = 3; //even though it doesn't divide it
while (i <= bound) {
	if(number%i == 0) {
		console.log('found a prime: '+i);
		number = divideByAllMultipleOf(number,i);
		bound = Math.sqrt(number); //update bound
	}
	i = i + 2; //next odd number
}
var largestPrime = number>i?number:i; //not sure if this check is necessary. is number always greater?
console.log('largest prime: '+largestPrime);