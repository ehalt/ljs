function SumMultiplier(arr){

	
	var multiplyForTwoElement = arr.sort((a,b) => a-b).slice(-2).reduce((a,b) => a*b);
	var sum = arr.reduce((a,b) => a+b);
	console.log(multiplyForTwoElement > sum ?  'true': 'false');

}

var numbers = [2,2,2,2,4,1];
SumMultiplier(numbers);