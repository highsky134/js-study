

// 10 ~ 0 카운트 다운
var count = 10;


while (count>=0) {
    console.log(count);
    count--;
}

// 1~10 까지 누적 총합
var total=0;
var n=1; //제어 변수 (초기값:begin)

while(n<=10) { // 조건식 (끝값: end)

    total+=n;   

    n++;    // 증감식 (단계: step)
}
//초기, 끝값 , 증감식 적어 놓고 사이에 조건 넣기

console.log(`총합: ${total}`);