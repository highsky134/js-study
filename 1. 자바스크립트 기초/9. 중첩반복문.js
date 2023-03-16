
//단계적으로 생각하기

// 구구단 3단 출력

var level = 3;
for(var line = 1;line<=9;line++ ){
    console.log(`${level} x ${line} = ${level*line}`);
}

console.log(`===================================`);


// 구구단 2~9단 출력

for(var level=2; level<=9; level++){
    for(var line = 1;line<=9;line++ ){
        console.log(`${level} x ${line} = ${level*line}`);
        
    }
    console.log(`===================================`);
}