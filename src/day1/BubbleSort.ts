export default function bubble_sort(arr: number[]): void {
    for(let i = arr.length; i > 1; i--){
        let sorted = true;
        console.log(arr)
        for(let j = 0;j<arr.length-1;j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j+1]; //smaller element
                arr[j+1] = arr[j]; //bigger element
                arr[j] = temp;
                sorted = false;
            }
        }
        if (sorted) break;
    }
}