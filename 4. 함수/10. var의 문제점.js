
//  1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';
// console.log(`x : ${x}`);

let x = 10;
// let x = '김철수'; //에러 발생 (빨간 밑줄까지 띄워줌)
console.log(`x : ${x}`);


// 2. 블록 레벨 스코프를 지원하지 않음
// var i = '안녕';
// for(var i=0; i<3; i++){
//     console.log(i);
// }
// console.log(`i : ${i}`); // for문 안에서 선언한 i의 값이 유지됨 ... 그마저도 i가 3으로 나옴

let i = '안녕';
for(let i=0; i<3; i++){
    console.log(`for문 내부 i: ${i}`);
}
console.log(`for문 바깥쪽 i: ${i}`);


// 3. 변수 호이스팅 : 변수선언문을 자동으로 맨위로 올림
y = 100;
console.log(`y: ${y}`); //100이 출력됨 선언은 밑에 있는데 심지어 선언을 안해도 100이 출력됨
var y;

z = 100;
console.log(`z: ${z}`); 
let z; //z를 초기화 하지 않았다는 에러를 표출

