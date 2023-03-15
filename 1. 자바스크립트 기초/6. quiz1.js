// 4 ~ 7 까지의 숫자 합은 :
// 
var n1 = +prompt(`첫번째 숫자를 입력!`);
var n2 = +prompt(`두번째 숫자를 입력!`);

var total=0;

var temp=0;
if (n1>n2) {
    temp=n1;
    n1=n2;
    n2=temp;
}

for(var i=n1;i<=n2;i++){
    total +=i;
}

alert(`${n1} ~ ${n2} 까지의 합은 : ${total}`);
