export default function quick_sort(arr: number[]): void {
    let pivot = Math.floor(arr.length / 2)
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; i < arr.length - i; j++){
            if(arr[j] <= arr[pivot]){
		        const temp = arr[i];
			    arr[i] = arr[idx];  
			    arr[idx] = tmp;    
            }          
        }
        }
    }


}