
/*





*/


export default function binarySearch(arr: number[], target: number): boolean {

    let low = 0;
    let high = arr.length;

    do {

        let mid = Math.floor(low + (high - low) / 2);

        let value = arr[mid];

        if (value === target) {
            console.log("Value found at " + mid)
            return true;
        }
        else if (value > target) {
            high = mid;
        } else {
            low = mid + 1;
        }

    } while (low < high)



    return false;
}

let array: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let target: number = 5;
console.log(binarySearch(array, target));