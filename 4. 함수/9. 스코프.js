

var x = 10; // 전역 변수 : 프로그램의 전체 영역에서 사용가능

// 매개변수도 지역스코프를 가짐
function foo(z) {
    console.log(`지역변수 x 선언전 : ${x}`);
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y - z);
    
    var x = '홍길동'; 
    // 자바스크립트는 선언을 분리한다 var x; // x = '홍길동'; 이후에 var x;를 함수 맨위로 보냄
    // 그래서 초기값이 없으니까 undefined 
    console.log(`지역변수 x 선언후 : ${x}`);
    
    // return y; 
}

foo(5);
console.log(`함수호출 이후 x  : ${x}`); // 10 ~ 전역 변수 

// console.log(y);
// console.log(z);

// 중첩 함수 : 함수안에 함수를 정의 (JAVA에선 안됨~)

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨
    function inner() {
        console.log(n);
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    }
    inner();
}

var m = 'global m';

// inner(); 함수 외부에서 호출 할수 없음
outer('outer param m');