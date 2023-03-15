
// var sentence = '<ul>\n\t<li>\n\t\t<a>ddd</a>';
// 백틱 ` 기능
var sentence = 
`<ul>
    <li>
        <a>ddd</a>
    </li>
</ul>`;

console.log(sentence);

var month=4;
var day=5;
var anniversary='식목일';

// var message=month+'월 '+day+'일은 '+anniversary+'입니다.';
var message=`${month}월 ${day}일은 ${anniversary}입니다`;
console.log(message);

//논리
var flag=false;
console.log(typeof flag);

//null
var userAge=5;
userAge=null; //데이터를 지운다 없다 empty

// undefined
// undefined 는 값을 처음부터 할당하지 않은거고 -- null은 값이 없는거다 라는뜻

