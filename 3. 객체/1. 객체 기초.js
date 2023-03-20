
// 객체 리터럴(값) : 값뒤에는 세미콜론( ; )이 항상 붙는다

var dog = {
    'name' : '뽀삐',
    kind : '진돗개',
    age : 3,
    for : 11, // 예약어도 사용가능
    'sleep place' : 1, // 문자열로 만들면 띄어쓰기도 가능
    injection : true,
    favorite : ['산책','간식'],

    playWithChild : function() {} // 함수도 가능
};

var cat = {
    'name' : '콩순이',
    age : 2,
    injection : true,
    favorite : ['낮잠자기','방 어지럽히기'],
    kind: '블랙러시안'
    
};


console.log(typeof dog);
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);

console.log(cat.favorite[0]);

dog.favorite.push('꼬리 흔들기');
console.log(dog.favorite);

// 프로퍼티 참조 2
console.log(dog.injection);
console.log(dog['injection']); //두개가 같은 방법, 후자를 사용해야만 하는 경우가 있음

// key를 변수에 저장
var fv = 'favorite'; // favorite키를 fv에 저장 해둠
console.log(cat[fv]); // 저장해둔 변수 fv를 키 값으로 사용


// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog.injection = false;


// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가     // 원래 없었던 키 owner추가
cat.owner = '박민수'; // 수정

delete cat.owner;
console.log(cat);


// 프로퍼티 존재 유무 확인
// **key를 반드시 문자열로 표기해야함.

var ageFlag = 'age' in cat; // 존재 유무를 true, false로 반환
console.log(ageFlag);


// master라는 프로퍼티가 없으면 추가해라
if(!('master' in cat)) {
    cat['master'] = '김또또';
}


console.log(`==========================`);

// for ~ in : 객체, for ~ of : 배열
// key를 반복해서 추출해줌 // key의 개수만큼 반복함
for(var k in dog){
    // console.log(k); 
    // console.log(dog[k]);
    // console.log(dog.k);

    // k 는 키값이고 문자열로 나타내기 때문에 dog.k를 사용하면 undefined, dog[k]의 방식으로 추출할수 있음
}
console.log(`==========================`);
//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};


var user = {};

user['name'] = 'John';
user.surname = 'Smith';

user.name = 'Pete';
// delete user['name'];

console.log(`================================`);
console.log(user);