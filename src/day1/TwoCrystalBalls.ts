export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    console.log(step);
    let floor = step; //start from the first step if breaks then back track
    while (floor < breaks.length && !breaks[floor]){
        floor = floor + step
    }
    floor = floor - step; //first ball broke, so back track
    for (let i = 0; i < step; i++){
        floor = floor + 1;
        if(breaks[floor]) return floor;
    }
    return -1; //did not break
}


/*
Considerations:
1. floor or ceiling?


*/