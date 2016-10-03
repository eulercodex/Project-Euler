var a,b,c;
var count = 0;
loop:
for (c = 1000-3; c > 1000/3; c--) {
	for(b = 1000-c-1; b > (1000-c)/2;b--) {
		a = 1000-b-c;
		count++;
		if((a*a+b*b)==(c*c)) {
			break loop;
		}
	}
}
console.log("number of iterations "+count);
console.log('a: '+a+', b: '+b+', c: '+c);
console.log(a*b*c);