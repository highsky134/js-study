

var x = 30, y = 40;

var z = '' + x + y;
console.log(z);

// 키, 몸무게
// var cm = prompt('키를 입력(cm)');
// var kg = prompt('몸무게로 입력(cm)');

// var m = cm / 100;

// var bmi = kg/(m*m);
// alert('당신은 bmi가 ${bmi}입니다.');


//로그인 여부 확인
// 브라우저 로컬 스토리지에 토큰이 존재하면 로그인 한것임
function isLogin(){
    // ACCESS_TOKEN : 334204adsfkjsldglkarws4f2425r2f
    // ACCESS_TOKEN : null
    //getItem은 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');
}