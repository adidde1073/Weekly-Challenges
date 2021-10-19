/* trackRobot(20, 30, 10, 40) --> [-10, 10]  */
function trackRobot(...args: number[]) : number[] {
    const moves: number[] = Array.from(args);
    let direction: string = 'N';
    let x: number = 0;
    let y: number = 0;
    for(let move of moves) {
        switch(direction) {
            case 'N': 
                y += move;
                direction = 'E';
                break;
            case 'E':
                x += move;
                direction = 'S';
                break;
            case 'S': 
                y -= move;
                direction = 'W';
                break;
            case 'W': 
                x -= move;
                direction = 'N';
                break;
        }
    }
    return [x, y];
}

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot(0,0));
console.log(trackRobot(-10, 20, 10));