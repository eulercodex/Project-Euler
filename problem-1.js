//Sum of 1 to n
var sum = function(n) {
	return (n+1)*n/2;
};
3*sum(Math.floor((1000-1)/3))+5*sum(Math.floor((1000-1)/5))-15*sum(Math.floor((1000-1)/15));
//Solution = 233168