
// 자바스크립트의 함수는 함수를 리턴할 수 있음
// function calculator(n1, n2) {

//     function add() {
//         return n1 + n2;
//     }
//     return add;
// }

// 함수를 리턴하는 클로저 형태 //위의 함수를 화살표 함수로 바꾼형태
// const calculator = (n1, n2) => () => n1 + n2;

// 위에 함수는 너무 줄인거 아닐까?
function calculator(n1, n2) {
    return () => n1 + n2 ;    
}// 이 정도?

// const zzz = calculator(10,20);
// console.log(typeof zzz);  // function

// const n = zzz();
// console.log(`n : ${n}`);

// ======================================
/*
// 전역변수라 문제가 생길수 있지
let count = 0; // 카운팅 변수

// 카운트를 올리는 함수
const increase = () => ++count;
console.log(increase());
console.log(increase());
count = 999;
console.log(increase()); // 3 x / 1000 o
*/

/*
// 지역변수의 스코프에 한계가 있어 값이 유지되지 못함
const increase = () => {
    let count = 0;
    return ++count;
};
console.log(increase()); // 1을 찍고 지역변수 count는 메모리에서 사라짐 
console.log(increase()); // 반복
console.log(increase()); // 반복, 결과값 1
*/


// 클로저 - 함수를 통해서 제어하게 만듦
const increaseClosure = () => {
    let count = 0;

    return () => ++count;
};

const increser = increaseClosure();
console.log(increser());
console.log(increser());
console.log(increser());


// 즉시 실행 함수 : 정의와 동시에 호출 (1회용함수)
const result = (function(n1, n2) {
    return n1 + n2;
})(5, 8);

console.log(result);

const increse = (() => {
    let count = 0;

    return () => ++count;
})();

console.log(increse());
console.log(increse());
console.log(increse());