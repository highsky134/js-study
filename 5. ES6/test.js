let users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];

// 앞쪽 사용자 두 명을 반환합니다.
// let someUsers = users.filter(item => item.id < 3);
// let someUsers = users.filter(function(item) {
//     return item.id < 3;
// });

let someUsers = users.filter(function choice(item) {
    return item.id < 3;
});

function choice(item) {
    return item.id < 3;
}

console.log(someUsers.length); // 2


function inBetween(a, b) {
    function between(x) {
        return x >= a && x <= b;
    };

    return between;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


function inArray(tArr){
    
    function targetArr(x){
        return tArr.includes(x);
    }
    
    return targetArr;
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2