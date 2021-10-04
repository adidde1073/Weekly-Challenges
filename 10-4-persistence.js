/*
    additivePersistence(123456) --> 2
    // 1 + 2 + 3 + 4 + 5 + 6 = 21
    // 2 + 1 = 3

    multiplicativePersistence(123456) --> 2
    // 1 x 2 x 3 x 4 x 5 x 6 = 720
    // 7 x 2 x 0 = 0
*/
function additivePersistence(n) {
    var numArr = n.toString().split('').map(function (num) { return Number(num); });
    while (numArr.length > 1) {
        var sum = 0;
        for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
            var num = numArr_1[_i];
            sum += num;
        }
        numArr = sum.toString().split('').map(function (num) { return Number(num); });
    }
    return numArr[0];
}
function multiplicativePersistence(n) {
    var numArr = n.toString().split('').map(function (num) { return Number(num); });
    while (numArr.length > 1) {
        var sum = 0;
        for (var _i = 0, numArr_2 = numArr; _i < numArr_2.length; _i++) {
            var num = numArr_2[_i];
            sum *= num;
        }
        numArr = sum.toString().split('').map(function (num) { return Number(num); });
    }
    return numArr[0];
}
console.log(additivePersistence(123456));
console.log(multiplicativePersistence(123456));
