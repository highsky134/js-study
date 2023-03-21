

// 1. 함수 선언식
// function multi(n1, n2){
//     return n1 * n2;
// }


// 2. 함수 표현식
// const multi = function(n1, n2){
//     return n1 * n2;
// }


// 3. 화살표 함수 방식
// const multi = (n1, n2) => {
//     return n1 * n2;
// }

// 3. 화살표 함수 방식 간소화(한줄 일때)
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(r1);


// function sayHello() {
//     console.log('안녕하세요');
// }

const sayHello = () => {
    console.log('안녕하세요');    
};

sayHello();


const kim = {
    name: '김철수',
    age: 30,
    // greeting: multi(10, 5) // 이건 그리팅에 50을 넣은것
    greeting: sayHello, // sayHello 기능을 가진 greeting() 메서드를 만든것이라고 보면됨
    dance: () => console.log('춤을 신나게 춥니다.'),    
};

kim.greeting();


// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표 함수 pow를 작성해보세요
const pow = n => n ** 2;
console.log(pow(17));


// 함수 선언문과 함수 표현식(화살표함수)의 차이 : 선언과 호출위치를 따라 달라짐
console.log(`==============================`);

const r2 = sub(20, 10); //함수 선언보다 위에서 호출을 해도 호이스팅 되기때문에 사용가능

function sub(n1, n2){
    return n1 - n2;
}
console.log(`r2 : ${r2}`);


const divide = (n1, n2) => n1 / n2;

const r3 = divide(30, 6); // 65line보다 위에선 작동 x
console.log(`r3 : ${r3}`);


// **오픈된 함수(메인함수 등)은 위치에 상관없이 사용할 수 있도록 함수 선언문 경우도 많음


