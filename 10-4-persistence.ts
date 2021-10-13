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
