// 숫자 맞추기 게임

// n0 = 48
// n1 = 3 * 48 = 144 
// 짝수 n2 = 144  / 2 = 72
// n3 = 3 * 72 = 216
// n4 = 216 / 9 = 24
// n1 홀수 --> 2 * 16 + 1 = 33 = n0


// n0
var thinkNum = Math.floor(Math.random()*50) +1;;
console.log(`${thinkNum}`);
if(thinkNum % 2 === 0){
    thinkNum = (((thinkNum * 3) /2) *3) /9;    
    console.log(`even ${thinkNum}`);
}else {
    thinkNum = ((((thinkNum * 3) +1) /2) *3) /9;    
    console.log(`odd ${thinkNum}`);
}
