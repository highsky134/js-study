// 콜백함수는 쇼핑몰 등의 필터링 같은거다~ 가격, 추천수 별로 보여줘~

const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영','게임','수면']
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['축구','영화']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['발야구','야구','테니스','비밀']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['발야구','야구']
    },
];

// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {
    for (const user of userList) {
        wannaSay(user);
    }
}

// alertUserInfo(u => console.log(`나는 ${u.userName}님이시다! 우하하`));

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
// userList.forEach( () => {} );
// userList.forEach(u => console.log(`나는 ${u.userName}님이시다! 우하하`));

// console.log(`===========================`);

// 취미가 딱 2개인 회원들만 필터링 해서 새로운 배열에 담아줘

// function filtered2Hobby() {
    
//     // 새로운 배열 생성
//     const filteredArray = [];

//     for (const user of userList){
//         if(user.hobbys.length === 2){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const newArray = filtered2Hobby();
// console.log(newArray);

// function filteredUserLivedInSeoul() {
    
//     // 새로운 배열 생성
//     const filteredArray = [];

//     for (const user of userList){
//         if(user.address === '서울'){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

function filter2(condition) {
    
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList){
        if(condition(user)){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}


// const newArray = filter2(u => u.address==='서울');
// console.log(newArray);

// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log(`===================`);

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const newArr = numberArray.filter(n => n % 2 === 0);
console.log(newArr);

const user1 = userList.filter(user => user.account === 'abc1234');
console.log(user1);

console.log(`===================`);

const numbers = [10, 20, 30, 40];
// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑만 배열을 반환

// const doubles = numbers.map(n => n ** 2);

function dMap(fx) {
    const dArr = [];
    for (const dob of numbers){
        // dArr.push(dob **2);
        dArr.push(fx(dob)); 
    }
    return dArr;
}
const doubles = dMap(n => n + 50);
console.log(doubles);


// const plustTwo = numberArray.map(n => n +2);
// console.log(plustTwo);


// userList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(u) {
    const myMapArr = [];
    for (const myUser of userList){
        myMapArr.push(u(myUser));
    }
    return myMapArr;
}
// const userNames = userList.map(user => user.userName);
const userNames = myMap(user => user.userName);
// const userNames2 = myMap(user => ({
//     userName: user.userName,
//     address: user.address    
// }));
// const userNames = myMap((user) => { return user.userName});

console.log(userNames);

const appleBasket = [
    {
        color: 'green',
        sweet: 13
    },
    {
        color: 'red',
        sweet: 14
    },
    {
        color: 'green',
        sweet: 6
    },
    {
        color: 'green',
        sweet: 5
    },
    {
        color: 'green',
        sweet: 9
    }

];

console.log(`===================================================`);

// 사과중 녹색이면서 당도가 9이상인 사과만 선별하여 
// 이 사과는 xxx색이며 당도가 xx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.


const mappedApples = 
        appleBasket
            .filter(apple => apple.color === 'green' && apple.sweet >= 9)
            .map(apple => `이 사과는 ${apple.color}색 이면서 당도는 ${apple.sweet}입니다.`);
console.log(mappedApples);

// let total =0;
// numbers.forEach( n => total += n);

// console.log(total);

const newUserHobby =
        userList.filter(user => user.address === '서울')
                .map(user => ({
                    firstHobby: user.hobbys[0],
                    name: user.userName
                }))
                .forEach(info => {
                    console.log(`${info.name}의 첫번째 취미는 ${info.firstHobby}입니다.`)
                });

// console.log(newUserHobby);

