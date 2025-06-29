export default function pre_order_search(head: BinaryNode<number>): number[] {
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

    //visit node
    path.push(current.value)
    traverse(current.left,path) //recurse left
    traverse(current.right,path) //recurse right`
}

function traverse_v1(current: BinaryNode<number>, path: number[]): void{ //recursive

    //visit node
    path.push(current.value)

    // base case left
    if(!current.left){
        return; //
    } else { //recurse left
        traverse_v1(current.left,path)
    }

    // base case right  
    if(!current.right){
        return;
    } else { //recurse right
        traverse_v1(current.right,path)
    }
}
// result: [20,10,5,15,50,30,29,45,100]
// misses the right of the most bottom node due to premature return on the left


