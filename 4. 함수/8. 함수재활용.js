

// 배열의 특정 데이터의 인덱스를 구하는 함수

var NOT_FOUND = -1;

function myIndexOf(arr, element){

    for(var i=0; i<arr.length; i++){
        if (element === arr[i]){
            return i;
        }
    }
    return NOT_FOUND;
}

function myIncludes(arr, element){
    // var myIncludes = myIndexOf(arr,element);
    // if(myIncludes !== -1){
    //     return true;
    // }
    // return false;
    return myIndexOf(arr, element) !== -1; // 삼항 연산자를 안써도 true false가 나오네?
}

// 코드 간소화, 리팩토링에 집착하지 말자! 우선은!

var foodList = ['짜장면','탕수육','고추잡채','족발'];

var idx = myIndexOf(foodList, '김말이'); // idx : 1
console.log(idx);

var flag = myIncludes(foodList,'파스타');
console.log(flag);