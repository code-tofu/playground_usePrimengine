export default function bs_list(haystack: number[], needle: number): boolean {
    console.log(needle)
    let low = 0;
    let high = haystack.length;
    while(low<high){
        //take the lower value for even length
        let mid  = Math.floor(low + (high-low) / 2) 
        console.log(`${low}:${haystack[low]},${mid}:${haystack[mid]},${high}:${haystack[high]}`)
        if (haystack[mid] === needle){
            return true
        } else if (haystack[mid] > needle){
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return false; //entire array scanned, no result
}

/*

[0, 1, 2,  3,  4,  5,  6,  7,  8,     9,    10] //length 11
[1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];  

Considerations:
1. Terminating Condition
2. Comparison Inequalityies
3. Floor/Ceiling for Eeen CAses
4. h = length or length -1
5. l = m or m + 1 for v< m
6. h = m or m - 1 for v >m
*/

