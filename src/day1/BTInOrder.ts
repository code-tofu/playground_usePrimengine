export default function in_order_search(head: BinaryNode<number>): number[] {
    const path :number[] = [];
    traverse(head,path);
    console.log(path)
    return path;
}


function traverse(current: BinaryNode<number> | null, path: number[]): void{ //recursive
    // base case
    if(!current){
        return;
    }

    traverse(current.left,path) //recurse left
    //visit node
    path.push(current.value)
    traverse(current.right,path) //recurse right`

}