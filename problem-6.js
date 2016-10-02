var solution = 0;
for (var i = 1; i <=100; i++) {
	for (var j = i+1; j <= 100; j++) {
		solution = solution + i*j;
	}
}
console.log(2*solution);