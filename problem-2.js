//TODO: improve this procedure. there should be a faster way
var f1 = 1;
var f2 = 2;
var sum = 0;
var i = 0;
while (f2 < 4000000) {
	if(i%3 == 0) {
		sum = sum + f2;
	}
	i++;
	var temp = f2;
	f2 = f2+f1;
	f1=temp;
}
console.log(sum);