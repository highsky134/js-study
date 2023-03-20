/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한',
            test : 1
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호',
            test : 1
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동',
            test : 1
        },
    ]
};

// var userList = userInfo.userList;
// var foundUser = null;

// while(true){
//     var count = 0;
//     // var accountFlag = false;
//     var loginAccount = prompt(`아이디를 입력하세요`);

//     for ( var user of userList){ //배열의 갯수만큼 반복하네
//         // alert(`${++count}`); 
//         if(loginAccount === user.account){
//             // accountFlag = true;
//             foundUser = user;
//         }
//     }

//     var loginPassword = '';
//     var passwordFlag = false;
//     if(foundUser !== null){
//         loginPassword = prompt('비밀번호를 입력하세요');
        
//         if(foundUser.password === loginPassword){
//                 // alert(loginPassword['password']);
//                 passwordFlag = true;
//         }       
        
//     }else {
//         alert('존재하지 않는 회원입니다');
//     }

//     if(passwordFlag){
//         alert(`${user}님 환영합니다!`);
//         break;
//     }

// }

// 회원 목록 배열
var userList = userInfo.userList;

while(true){
    // 계정 입력받기
    var inputAccount = prompt('아이디를 입력하세요!');
    // var inputAccount = 'kim1234';

    // 회원 목록을 반보갛여 입력한 계정명과 일치하는 객체를 탐색
    var foundUser = null; //로그인 시도하는 회원의 정보객체

    for (var user of userList){
        if(inputAccount === user.account){
            foundUser = user;
            break;
        }
    }   

    if(foundUser !== null){
        // 비밀번호 검증
        var inputPassword = prompt('비밀번호를 입력하세요!');    
        // var inputPassword = 'merong';
        if(inputPassword === foundUser.password){
            alert(`${foundUser.username}님 환영합니다!`);
            break;
        }else {
            alert(`비밀번호가 틀렸습니다`);
        }

    }else {
        alert('존재 하지 않는 회원입니다.');
    }
}

// 생각못한 부분 
// 아이디를 입력해서 일치했을때 계정 객체를 foundUser에 저장하여 null인지 판단 하는것으로 비밀번호 검증에 들어가는지 판단
// 아이디가 일치했다면 foundUser에 정보가 들어있으므로 비밀번호 검증시에도 입력받은 비밀번호와 foundUser.password를 비교

// 생각이 조잡해짐
// 흐름~
// 아이디를 입력한다 -> 계정정보 중에서 일치하는지 판단한다 / 이때 계정정보를 참조 하므로 일치할 경우 계정정보를 가지게 됨
// -> 계정정보를 가지고 있으므로 비밀번호를 검증한다 -> 종료 