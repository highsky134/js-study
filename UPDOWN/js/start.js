import gameData from "./gameData.js";
import { caseUp, caseDown, correctAnswer} from './checkAnswer.js'

// 정의부
export default function gameStart(iconCount) {
    const $numbers = document.getElementById('numbers');
    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {
        for (let n=1; n<=iconCount; n++) {
            // <div class='icon'>1~ 100</div>
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            $icon.dataset.inconNumber = n; // 데이터 속성 활용 
            
            $numbers.appendChild($icon);
        }
    };
    makeIcon();

    // 아이콘에 클릭 이벤트 부여하기
    $numbers.onclick = e => {

        if(!e.target.matches('#numbers .icon')) return;
        // console.log(`${e.target.dataset.inconNumber}번 구슬클릭함`);

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.inconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수 
        checkNumber(e.target);

    };
}

// 정답을 검증하는 함수
function checkNumber($target) {
    
    const {secret, answer} = gameData;
    
    // 실제 정답이랑 선택값을 비교
    if (secret === answer){ // 정답인 경우
        correctAnswer($target);
    } else if(secret > answer) { // UP인 경우
        caseUp($target);
    } else { // DOWN인 경우
        caseDown($target);        
    }
}
