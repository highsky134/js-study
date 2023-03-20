
// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수


// function addAll(numbers){ // 1. 배열을 매개변수로 받아 처리
function addAll(...numbers){ // 2. 스프레드 (ES6)
    

    var total = 0;

    for(var n of numbers){
        total += n;
    }
    return total;
}

// var r1 = addAll([1,3,5,20,123]);  // 1번 기존의 배열 처리 방식

var r1 = addAll(1, 3, 5, 10, 20); // 2번 스프레드 방식 ...items -> push와 splice에도 적용 되어있는 부분
console.log(`r1 : ${r1}`);


// 스프레드 방식은 하나만 써야 함
function foo(arr1, arr2) {
}
foo([10,20], [500,1000,1500]);

// function foo(...arr1, ...arr2) {
// }
// foo(10,20, 500,1000,1500); // 어디까지가 arr1인지 arr2인지 구분할수 없음


// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고싶어
function oprateAll(n1, n2){    
    // return [
    //     addAll(n1,n2),
    //     n1 - n2,
    //     n1 * n2,
    //     n1 / n2
    // ];
    return {
        plus: addAll(n1,n2),
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };    
}

var result = oprateAll(10, 5);
// console.log(`덧셈결과: ${result[0]}`);
// console.log(`뺄셈결과: ${result[1]}`);
// console.log(`곱셈결과: ${result[2]}`);
// console.log(`나눗셈결과: ${result[3]}`);

console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`나눗셈결과: ${result.divide}`);


// var r2 = oprateAll(100,4)[1];

// oprateAll(100, 4).length;

// for(var n of oprateAll(100, 4)){    
// }




