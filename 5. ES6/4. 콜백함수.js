

// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수

function showEvenNumber(n) {
    for (let i=1;i<=n;i++){
        if (i%2 ===0) console.log(i);
    }
}

function showOddNumber(n) {
    for (let i=1;i<=n;i++){
        if (i%2 ===1) console.log(i);
    }
}

function showOddOrEvenNumber(n, delim) {
    for (let i=1;i<=n;i++){
        if (i%2 === delim) console.log(i);
    }
}


function showMultipleNumber(n, multiNumber) {
    for (let i=1;i<=n;i++){
        if (i%multiNumber === 0) console.log(i);
    }
}
// showEvenNumber(10);
// showOddNumber(10);
// showOddOrEvenNumber(10, 1);

//====================================================
// 콜백함수

// const code = function(n) {
//     return n % 3 === 0;
// }

function showNumber(n, code) {
    for (let i=1;i<=n;i++){
        if (code(i)) { // if 안의 코드를 전달할수 있느냐 부터 시작된 ... 콜백함수
            console.log(i);
        }
    }
}

// showNumber(20, n % 3 === 0); // n%3===0 의 논리값 전달,그러나 변수 n이 없어서 전달이 안됨
// showNumber(20, function(n) { return n % 3 === 0; });
showNumber(20, n => n % 3 === 0);

// showNumber

/* ----------------
$btn.onclick = function () {    
   //얘도 콜백 함수임 버튼을 클릭하면 감지하는건 만들어져있으니 무슨 행동을 할지를 정해라!!!
} 
----------------- */



function shwoMessage(message, howTo) {
    // 공통기능
    document.body.style.background = 'gray';

    setTimeout(() => {
        // 개별기능
        howTo(message);

        // 공통기능
        alert('하하호호!');
    }, 500);

}

// 실제 showMessage 사용자가 커스텀을 할수 있는 방법
shwoMessage('메롱메롱', function(m) {
    alert(m);
});



//0323
function cbTest(callback, x){
    let plus = 0;
    plus = plus + 1;
    console.log(plus);

    callback(function insa(x){
        console.log(x);
    });
}

// function test(x) {
//     console.log(x);
// }

// cbTest((x)=>console.log(x),10);
cbTest(function test(x){},10);


let fruit = 'apple';	// Global Variable

function callbackFunc(callback) {
    let vegetable = 'tomato';	// Local Variable
    callback(vegetable);
}

function eat(vegetable) {
    console.log(`fruit: ${fruit} / vegetable: ${vegetable}`);
}

callbackFunc(eat);


