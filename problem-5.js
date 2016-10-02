var gcd = function(a,b) {
	//euclid's algorithm
	if (a < b) {
		//assume a >= b
		var temp = a;
		a = b;
		b = temp;
	}
	if(a%b == 0) return b;
	else return gcd(b,a%b);
}
var product = 1*2*3;
for (var i = 4; i <= 20; i++) {
	product = product*i/gcd(product,i);
}
console.log(product);