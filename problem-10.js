var isPrime = function(n) {
	if (n == 2) return true;
	if (n%2 == 0) return false;
	var bound = Math.sqrt(n);
	var i = 3;
	while(i <= bound) {
		if(n%i == 0) return false;
		i=i+2; //just check divisibility by odd numbers
	}
	return true;
}
var sum = 2;
var number = 3;
var count  = 1;
while(number < 2000000) {
	if (isPrime(number)) {
		sum +=number;
	}
	number = number + 2; //odd only
}
console.log(sum);