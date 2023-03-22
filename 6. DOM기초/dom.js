
// HTML 문서를 브라우저에 내장되어있는 자바스크립트 엔진이 해석 한다면~
// HTML -> javascript 객체로 변환됨

// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div>
let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz','xxx','vvv'],
        type: 'text'
    },
    parentNode: box
};

console.log(input);