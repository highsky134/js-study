
const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
// const empName = emp.empName;
// const age = emp.age
// const birthDay = emp.birthDay;

// 키값으로 제어 하므로 순서 상관x 원하는 것만 꺼내올수 있음
// const {empName, birthDay, age } = emp; 

// console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다`);


// 키의 변수 이름을 바꾸고 싶을 경우
const {empName: en, birthDay: bd, age: a } = emp; 

console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다`);


console.log(`===============================`);

const {birthDay, age, ...others} = emp;
console.log(birthDay);
console.log(age);
console.log(others);


// 객체 안전복사

const copyEmp = {...emp, address:'서울시', hobbies: ['놀고먹기','낮잠']};

console.log(copyEmp);
