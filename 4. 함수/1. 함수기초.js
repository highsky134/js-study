


// 함수 정의 - 만든다
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! ㅎㅇㅎㅇ`);
    console.log(`오늘도 즐거운 하루 되세요~~~`);
}

// 함수 호출 - 사용한다
happyGreeting('김철수');

// 1000줄 코딩~

happyGreeting('뽀로로');

function makeLine() {
    console.log(`========================================`);
}

makeLine();

// 함수 사용이유 : 코드의 재사용성, 코드의 모듈화


// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2

function calcAreaCircle(r) {
    var PI = 3.14159265;
    var area = PI * r ** 2;

    return area;
}


// var r1 = 3.14159265 * 5 * 5;
// var r2 = 3.14159265 * 15 * 15;
// var r3 = 3.14159265 * 20 * 20;

var r1 = calcAreaCircle(5);
var r2 = calcAreaCircle(15);
var r3 = calcAreaCircle(20);

console.log(`${r1} ${r2} ${r3}`);