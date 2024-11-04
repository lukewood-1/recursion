//Iterative solution
function fiboIterative(num){
	let result = [0, 1];
	while(result.length < num){
		result.push( result.at(-1) + result.at(-2) );
	}
	return `fibonacci Iterative, ${num} elements: 
	${result}
	`;
}

console.log( fiboIterative(15) );

//recursive solution
function fiboRecursive(num, result = [0, 1]){
	if(result.length == num) return `fibonacci Recursive, ${num} elements: 
	${result}
	`;
	result.push( result[result.length - 1] + result[result.length - 2] )
	return fiboRecursive(num, result);
}

console.log( fiboRecursive(15) );
