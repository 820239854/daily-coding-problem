/*
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

export function findTwoNumbersAddUpToK(numbers: number[], k: number): boolean {
    if (numbers.length < 2) {
        return false;
    }

    const arr = numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        const target = k - numbers[i]
        const targetIndex = binarySearch(arr, target);
        if (targetIndex === -1) {
            continue;
        }
        if (targetIndex != i) {
            return true;
        } else if (arr[targetIndex - 1] && arr[targetIndex - 1] === target) {
            return true;
        } else if (arr[targetIndex + 1] && arr[targetIndex + 1] === target) {
            return true;
        }
    }
    return false;
}

function binarySearch(arr: number[], target: number) {
    let left = 0;
    let right = arr.length;
    let mid;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
}
