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
var number = 3;
var latestPrime = 2;
var count  = 1;
while(count < 10001) {
	if (isPrime(number)) {
		latestPrime = number;
		count = count + 1;
	}
	number = number + 2; //odd only
}
console.log(latestPrime);