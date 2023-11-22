let sortedArray = [];
let target;
let targetIndex;

function binarySearch(sortedArray, target) {
	let low = 0;
	let high = sortedArray.length - 1;
	let mid = Math.floor((low + high) / 2);
	while (mid >= low && mid <= high && targetIndex === undefined) {
		if (sortedArray[mid] === target) {
			targetIndex = mid;
		}
		else if (sortedArray[mid] > target) {
			high = mid - 1;
			mid = Math.floor((high + low) / 2);
		}
		else if (sortedArray[mid] < target) {
			low = mid + 1;
			mid = Math.floor((high + low) / 2);
		}
	}

	if (targetIndex != undefined) {
		console.log('targetIndex: ', targetIndex);
	}
	else {
		console.log('targetIndex: ', -1);
	}

}

// binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 7);
// binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 18);
// binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 20);
// binarySearch([2, 3, 5, 8, 10, 12, 15, 18, 20], 7);
binarySearch([1, 3, 4, 6, 7, 8, 10, 13, 14], 4);
// binarySearch([1], 2);
// binarySearch([1], 1);