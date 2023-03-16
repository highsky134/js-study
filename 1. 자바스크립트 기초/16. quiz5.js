// 난이도 '하'로 시작
//정답 수가 10개가 넘어가면 난이도가 올라감
// 난이도 중에서 또 정답수가 10개가 넘어가면 난이도 상으로 바뀜
// 난이도 상에서 정답수가 10개가 넘어가면 나머지를 구하는 수식 추가

alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요`);

var quizNumber=1;
var correct=0;
var wrong=0;

var HIGH = 1, MIDDLE = 2, LOW = 3;
var level = +prompt('난이도를 선택하세요!\n# [1. 상(1~100) | 2. 중(1~50) | 3. 하(1~20)]');

var levelStep = 0;

while(true){
    if (level === HIGH) {
        levelStep = 100;
    } else if (level === MIDDLE) {
        levelStep = 50;
    } else {
        levelStep = 20;
    }
    var firstNumber = Math.floor(Math.random()*levelStep)+1;
    var secondNumber = Math.floor(Math.random()*levelStep)+1;    
    
    // 연산자 만들어 내기
    var signNum = Math.floor(Math.random()*4)+1;
    var sign;
    
    if (signNum===1){
        sign='+';
        calcAnswer = firstNumber + secondNumber;        
    } else if (signNum===2){        
        if (firstNumber === secondNumber) continue;    
        else if(secondNumber>firstNumber){
            var temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp;
        }
        sign='-';
        calcAnswer = firstNumber - secondNumber;
    } else if (signNum===3){
        sign='x';
        calcAnswer = firstNumber * secondNumber;
    } else {
        sign='/';
        if(secondNumber > firstNumber) continue;
        calcAnswer = Math.floor(firstNumber / secondNumber);
    }
    
    var calcAnswer = 0;
    var userAnswer = +prompt(`Q${quizNumber++}. ${firstNumber} ${sign} ${secondNumber} = ??\n정답은?`);
    
    if(userAnswer===0){
        alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${correct}회, 오답횟수 : ${wrong}회`);
        break;
    }
    if(userAnswer === calcAnswer) {
        alert(`정답`);
        correct++;
    }else {
        alert(`오답`);
        wrong++;
    }

    // 정답 숫자가 10개가 되면 난이도 상승
    if (correct === 10){
        if(level===LOW) {
            level = MIDDLE;
            alert(`레벨 업! 난이도 상승!!`);
            
        }        
    }
    // 난이도 중에서 상은 어떻게 올릴까
}


console.log(`============================================`);

// alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요`);

// var quizNumber = 0;
// var correct=0;
// var wrong=0;

// while(true){
//     var x = Math.floor(Math.random()*99)+1;
//     var y = Math.floor(Math.random()*99)+1;
//     quizNumber++;    
//     var ans = +prompt(`Q${quizNumber}. ${x} + ${y} = ??\n정답은?`);

//     if(ans===0){
//         alert(`게임을 종료합니다!\n-------------------\n정답횟수 : ${correct}회, 오답횟수 : ${wrong}회`);

//         break;
//     }else if(ans === (x + y)){
//         alert(`정답입니다!`);
//         correct++;
//     }else {
//         alert(`틀렸습니다!`);
//         wrong++;
//     }
// }

console.log(`============================================`);

// alert(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요`);

// var quizNumber = 0;

// while(true){
//     var x = Math.floor(Math.random()*99)+1;
//     var y = Math.floor(Math.random()*99)+1;
//     quizNumber++;    
//     var ans = +prompt(`Q${quizNumber}. ${x} + ${y} = ??\n정답은?`);

//     if(ans===0){
//         alert(`게임을 종료합니다!`);
//         break;
//     }else if(ans === (x + y)){
//         alert(`정답입니다!`);
//     }else {
//         alert(`틀렸습니다!`);
//     }
// }