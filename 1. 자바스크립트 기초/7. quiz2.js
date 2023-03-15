// 양의 정수를 입력 : 9
// +-+-+-+-+ : 9개

var count = +prompt(`양의 정수를 입력`);
var text = '';

for(var i=0;i<count;i++){
    if(i%2===0){
        text += '+';
    }else {
        text += '-';
    }
}

alert(`${text}`);