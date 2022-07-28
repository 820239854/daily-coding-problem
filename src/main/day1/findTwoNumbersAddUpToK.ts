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
    let lookUpSet = new Set<number>();
    for (let i=0; i<numbers.length; i++){
        const currVal = numbers[i];
        if(lookUpSet.has(k-currVal)){
            return true;
        }
        lookUpSet.add(currVal);
    }
    return false;
}
