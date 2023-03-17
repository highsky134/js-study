

// OR 연산 : 첫번째 truthy를 반환

console.log('hello' || 'world'); //hello
console.log(0 || '안녕');  //안녕

console.log(`============================`);

// AND 연산 : 첫번째 falsy를 반환

console.log('HELLO' && 'WORLD');  //WORLD
console.log(null && '메롱'); // null



/*
        //로그인 안하면 h1만, 하면 h2까지
        <h1> 안녕하세요 우리 홈페이지에 오신걸 환영합니다. </h1>

        isLogin() && <h2>xxx님 안녕하세요 </h2> --> && 반환값 첫번째 falsy 반환
        로그인을 했으면 왼쪽이 true기 때문에 우측을 반환하여 h2가 그려지고
        로그인을 하지 않았으면 isLogin()을 반환하기때문에 h2가 그려지지 않음

        쿠폰당첨플래그 && sendCoupon()

        isMineArticle() && <button>수정</button>


*/