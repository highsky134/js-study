

const userNames = ['김철수','강감찬','박영희'];

const [kim, kang, park] = userNames;

console.log(kim);
console.log(kang);
console.log(park);


const [firstObj] = [{id : 1},{id : 2},{id : 3}].filter(obj => obj.id >=2);

console.log(firstObj);


// 변수 교환하기
let first = 10;
let second = 20;

[first, second] = [second, first];

console.log(first);
console.log(second);


// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1, 3, 5, 7, 9, 11];

// const copyNumbers = numbers.slice();

// const one = copyNumbers.shift();
// const three = copyNumbers.shift();
// const others = copyNumbers;

console.log(`===============================`);
// console.log(one);
// console.log(three);
// console.log(others);
// console.log(numbers);


const [one, three, ...others] = numbers;
console.log(one);
console.log(three);
console.log(others);
console.log(numbers);


// 스프레드로 배열 간편 복사
console.log(`===============================`);

const foods = ['감튀','DQPC','징거버거'];

// const copyFoods = [...foods]; // DOM에서 나올 유사배열(arrayLike)를 진짜 배열로 바꿀때 유용
const copyFoods = [...foods, '사이다', foods[2]]; // 스프레드로 복사 한후 추가도 됨

console.log(copyFoods);














