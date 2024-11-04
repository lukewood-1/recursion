const array = [3, 2, 1, 13, 8, 5, 0, 1];

// merging sorted arrays helper function
function mergeArrays(arr1, arr2){
	let i = 0;
	let j = 0;
	let result = [];
	while(i < arr1.length && j <= arr2.length){
		if(arr1[i] > arr2[j]){
			result.push(arr2[j]);
			j++;
		} else {
			result.push(arr1[i]);
			i++;
		}
	}
	while(i < arr1.length){
		result.push(arr1[i]);
		i++;
	}
	while(j < arr2.length){
		result.push(arr2[j]);
		j++;
	}
	return result;
}

// Actual mergeSort function
function mergeSort(arr){
	if( arr.length <= 1 ) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort( arr.slice(0, mid) );
	let right = mergeSort( arr.slice(mid) );
	return mergeArrays(left, right);
}

const arrA = [1,3,5,7,9];
const arrB = [0,2,4,6,8];

const randomArr = [];
for(let $ = 0; $ < 7; $++){
	let rng = Math.round(Math.random() * 50);
	randomArr.push(rng);
};

console.log( `mergeArrays with arrays ${arrA} and ${arrB}: 
	${mergeArrays(arrA, arrB)}
	` );

console.log( `mergeSort with array ${randomArr}: 
	${mergeSort(randomArr)}
	` );
