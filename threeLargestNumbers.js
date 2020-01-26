function findThreeLargestNumbers(array) {
	//initialize variables
	let first = 0;
	let second = 0;
	let third = 0;
	
	for (element in array){
		if (element > first){
			element = first;
		} 
	}