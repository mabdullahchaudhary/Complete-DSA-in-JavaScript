/*

first of all we'll focus on searching algorithms becuase they are simple to understand and implement. Just to find a specific element or number in an array or list of elements.

and in searching algorithms we have two types of searching algorithms, one is linear search and the other is binary search.

from now we'll focus on linear search algorithm.

linear algoritm be like as your input goes through each element of the array one by one and checks if the element is equal to the target value or not. If it finds the target value, it returns the index of that element, otherwise it returns -1.


*/


export default function linear_search(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target){
            console.log("The target value index is "+ i);
            return true; 
        }
    }
    return false;
}

let numbers: number[] = [3, 2, 5, 7, 4, 8, 3, 8, 2, 9, 5, 3, 6];
let target = 15;
let value = linear_search(numbers, target);
console.log(value);
