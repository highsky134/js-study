

for(var i=0;i<3;i++){
    for(var j=0;j<2;j++){
        if(i===j){
            break;
        }
        console.log(`[${i}, ${j}]`);
    }
}



//5만번의 루프중 1~10 사이의 랜덤 숫자중 3이 나오면 반복을 멈추고 싶다.

// for(var i=0;i<50000;i++){
//     var rn = Math.floor(Math.random()*10)+1;
//     console.log(rn);
//     if(rn===3){
//         break;
//     }
// }