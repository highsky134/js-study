
for(var i=1;i<=10;i++){
    if(i%2===0) break;
    console.log(i);
}
console.log('break 종료!');

for(var i=1;i<=10;i++){
    if(i%2===0) continue;
    console.log(i);
}
console.log('continue 종료!');


while(true){
    var n = +prompt(`숫자를 입력!!`);

    if(n===0)break;
    else if(n===1) continue;

    alert('메롱메롱');
}
alert('끝났지롱');