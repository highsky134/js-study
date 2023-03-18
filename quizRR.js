// 러시안 룰렛 게임
// 유저 입력, 실탄 갯수 입력 부분 오타, 잘못된 타입 입력 방지 작업 필요
var gamers = [];

var userNum = +prompt(`게이머 입력 (2~4명)`);


// 유저 입력 및 출력
for(var i=0; i<userNum; i++){
    var user = prompt(`플레이어 이름을 등록합니다.\n${i+1}번 플레이어 이름`);
    gamers.push(user);

    // 게임 참여 유저 목록
    if(gamers.length===userNum) alert(`[${gamers}] 참가!`);
}


// 전체 탄 수 6개 짜리 배열
var magazines = ['x', 'x', 'x', 'x', 'x', 'x'];
// var magazines = ['o', 'o', 'o', 'o', 'o', 'x'];

// 실탄 갯수 입력
var bullet = +prompt(`실탄 개수 (1 ~ 5개)`);

// 랜덤으로 실탄의 위치를 수정
while(true){
    var bulletIndex = Math.floor(Math.random()*6);
    
    // 수정하려는 인덱스의 값이 x이면 수정
    if(magazines[bulletIndex]==='x'){
        magazines.splice(bulletIndex,1,'o');
        bullet--;
    }    

    // 실탄 전부 삽입 완료 시 반복 종료
    if(bullet===0) {
        // alert(`${magazines}`);
        break;
    }
}
alert(`${magazines}`);

// 게임 시작 첫 멤버 인덱스
var UserIndex = Math.floor(Math.random()*userNum);
// var UserIndex = 2;

alert(`총을 받았습니다. ${gamers[UserIndex]}부터시작 합니다.`);

// 총 쏴 제끼는 사람 관리할 컨트롤 인덱스
var IndexControl=UserIndex;

// prompt(`[${gamers[startUserIndex]}님의 턴!] 탄창을 회전합니다.\n '격발' 입력시 격발합니다.`);


// magazines 배열을 pop하며 컨트롤 하는 반복문
while(true){ // magazines.includes('o') 동안 = 매거진에 'o'가 있는 동안(true)
    
    // 게임 종료 
    if(gamers.length===1 ) {
        alert(`단 한명만 살아남았습니다. 게임을 종료 합니다. \n 최후 생존자 : ${gamers[0]}`);
        break;
    }

    if(!magazines.includes('o')){
        alert(`총알이 모두 소진되었습니다. 게임을 종료 합니다. \n 생존한 인원 : ${gamers}`);
        break;
    }

    alert(`[${gamers[IndexControl]}님의 턴!] 탄창을 회전합니다.\n 엔터를 누르면 격발합니다.`);
    
    var checkBullet = magazines.pop(); // 실탄 확인
    
    if(checkBullet==='o'){
        alert(`빵!! [${gamers[IndexControl]}]님 사망`);
        gamers.splice(IndexControl,1);
        IndexControl--;
    }else {
        alert(`...휴~~ 살았습니다.`);
    }

     // gamers 인덱스 컨트롤 
    if(IndexControl>=gamers.length-1){
        // alert(`여기 걸림?`);
        IndexControl=0;
    }else{
        // alert(`+++`);
        IndexControl++;
    }

    
}
