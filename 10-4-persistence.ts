/* 
    additivePersistence(123456) --> 2
    // 1 + 2 + 3 + 4 + 5 + 6 = 21
    // 2 + 1 = 3

    multiplicativePersistence(123456) --> 2
    // 1 x 2 x 3 x 4 x 5 x 6 = 720
    // 7 x 2 x 0 = 0 
*/

function additivePersistence(n: number): number {
    let numArr: number[] = n.toString().split('').map((num) => { return Number(num)});
    while(numArr.length > 1) {
        let sum: number = 0;
        for(let num of numArr) {
            sum += num;
        }
        numArr = sum.toString().split('').map((num) => { return Number(num)});
    }
    return numArr[0];
}

function multiplicativePersistence(n: number): number {
    let numArr: number[] = n.toString().split('').map((num) => { return Number(num)});
    while(numArr.length > 1) {
        let sum: number = 0;
        for(let num of numArr) {
            sum *= num;
        }
        numArr = sum.toString().split('').map((num) => { return Number(num)});
    }
    return numArr[0];
}

console.log(additivePersistence(123456));
console.log(multiplicativePersistence(123456));