const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const progress = document.querySelector('.progress');
const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');

const questions = [
    // E vs I
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q1. 엘리베이터에 나 말고 두 사람이 더 타 있다', answers: [{ text: '“날씨가 요즘 참…” 말문을 연다', type: 'E' }, { text: '숨소리도 줄인다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q2. 아침 식사 후 누군가 커피 마시자고 한다', answers: [{ text: '“어디서요?” 바로 합류', type: 'E' }, { text: '“아… 오늘은 좀…”', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q3. 단지 산책 중 같은 분을 세 번째 마주쳤다', answers: [{ text: '“자주 뵙네요~”', type: 'E' }, { text: '‘아 또 마주치네…’', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q4. 공용 라운지에서 다 같이 TV를 본다', answers: [{ text: '중간중간 코멘트한다', type: 'E' }, { text: '조용히 보거나 자리를 피한다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q5. 이웃이 “시간 괜찮으세요?”라고 묻는다', answers: [{ text: '웬만하면 괜찮다', type: 'E' }, { text: '일단 불안하다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q6. 입주 한 달 차, 내 이름을 아는 사람이', answers: [{ text: '열 명은 넘는다', type: 'E' }, { text: '거의 없다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q7. 하루 종일 아무도 안 만났다', answers: [{ text: '좀 허전하다', type: 'E' }, { text: '너무 좋다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q8. 단지 소문은 보통', answers: [{ text: '사람 입에서 먼저 듣는다', type: 'E' }, { text: '공지 붙고 나서 안다', type: 'I' }] },
    // N vs S
    { title: '② 현실파 vs 감성파', question: 'Q9. 상담사가 “여긴 다들 만족해하세요”라고 말한다', answers: [{ text: '“구체적으로 뭐가요?”', type: 'S' }, { text: '“아 그런 분위기구나”', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q10. 실버타운 홍보 영상에서', answers: [{ text: '시설 수치가 눈에 들어온다', type: 'S' }, { text: '음악과 장면이 기억난다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q11. 같은 조건의 두 시설', answers: [{ text: '관리비 싼 곳', type: 'S' }, { text: '더 예쁜 곳', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q12. ‘여기 살면 인생 2막입니다’라는 문구', answers: [{ text: '좀 오글거린다', type: 'S' }, { text: '괜히 설렌다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q13. 새로 도입한 스마트 시스템', answers: [{ text: '설명서부터 찾는다', type: 'S' }, { text: '일단 눌러본다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q14. “여기는 느낌이 좋아요”라는 말', answers: [{ text: '느낌은 느낌일 뿐', type: 'S' }, { text: '느낌이 제일 중요', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q15. 건물은 오래됐지만 분위기가 좋다', answers: [{ text: '오래된 게 걸린다', type: 'S' }, { text: '분위기가 이긴다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q16. 집을 보고 나와서 드는 생각', answers: [{ text: '“조건은 괜찮네”', type: 'S' }, { text: '“여기서 살고 싶다”', type: 'N' }] },
    // T vs F
    { title: '③ 이성형 vs 정 많은 형', question: 'Q17. 직원이 실수했다', answers: [{ text: '“다음엔 이런 일 없게 해주세요”', type: 'T' }, { text: '“괜찮아요, 그럴 수도 있죠”', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q18. 같은 가격이면 더 중요한 건', answers: [{ text: '서비스 구성', type: 'T' }, { text: '사람 태도', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q19. 상담 후 기억에 남는 건', answers: [{ text: '설명 내용', type: 'T' }, { text: '상담사 인상', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q20. 불편한 점이 생겼다', answers: [{ text: '공식 절차로 접수', type: 'T' }, { text: '아는 직원에게 슬쩍', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q21. 직원이 친절하지만 느리다', answers: [{ text: '답답하다', type: 'T' }, { text: '미워할 수 없다', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q22. 계약서 볼 때', answers: [{ text: '끝까지 읽는다', type: 'T' }, { text: '중요한 것만 본다', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q23. “규정상 어렵습니다”라는 말', answers: [{ text: '이해한다', type: 'T' }, { text: '서운하다', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q24. 나를 더 기분 상하게 하는 건', answers: [{ text: '비효율적인 일처리', type: 'T' }, { text: '차가운 말투', type: 'F' }] },
    // J vs P
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q25. 아침에 눈을 떴다', answers: [{ text: '오늘 일정이 머리에 있다', type: 'J' }, { text: '일단 일어나 본다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q26. 식사 시간 알림이 울린다', answers: [{ text: '맞춰 간다', type: 'J' }, { text: '무시하고 있다가 간다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q27. 프로그램 신청해놓고 당일이 됐다', answers: [{ text: '웬만하면 간다', type: 'J' }, { text: '가기 싫으면 안 간다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q28. 갑자기 일정이 바뀌었다', answers: [{ text: '스트레스 받는다', type: 'J' }, { text: '뭐 그럴 수도', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q29. 내 방은', answers: [{ text: '물건 위치가 정해져 있다', type: 'J' }, { text: '찾을 수만 있으면 된다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q30. 실버타운 규칙이 많다', answers: [{ text: '있어야 편하다', type: 'J' }, { text: '숨 막힌다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q31. 누군가 “오늘 뭐 하세요?”라고 묻는다', answers: [{ text: '이미 계획이 있다', type: 'J' }, { text: '아직 모르겠다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q32. 나에게 편한 생활은', answers: [{ text: '예측 가능한 하루', type: 'J' }, { text: '자유로운 하루', type: 'P' }] },
];

// Re-structuring results to handle multiple mappings for a single MBTI type where provided
const results = {
    // Original prompt groupings
    'ENTJ': { title: '👑 허세형 귀족 (ENTJ/ESTJ 계열)', description: '“이 나이에 아무 데나 들어갈 순 없지”\n로비 인테리어부터 본다\n가격 비싸면 오히려 안심', recommendation: '추천: 초고급·프리미엄 실버타운' },
    'ESTJ': { title: '👑 허세형 귀족 (ENTJ/ESTJ 계열)', description: '“이 나이에 아무 데나 들어갈 순 없지”\n로비 인테리어부터 본다\n가격 비싸면 오히려 안심', recommendation: '추천: 초고급·프리미엄 실버타운' },
    'ISTJ': { title: '💸 구두쇠 실속형 (ISTJ)', description: '“비싼 데는 다 이유 없이 비싸”\n비용 대비 혜택 계산기 장착\n관리비에 민감', recommendation: '추천: 공공·합리형 실버타운' },
    'ESFJ': { title: '🎤 동네 회장님형 (ESFJ)', description: '“사람은 모여 살아야지!”\n입주 3일 만에 아는 사람 20명\n프로그램 빠지면 섭섭', recommendation: '추천: 커뮤니티 대형 단지' },
    'INTP': { title: '🛋 방콕 장인형 (INTP/ISTP)', description: '“굳이 사람 많은 데서?”\n조용함이 최고 복지\n간섭 받는 거 제일 싫음', recommendation: '추천: 프라이빗·자율형' },
    'ISTP': { title: '🛋 방콕 장인형 (INTP/ISTP)', description: '“굳이 사람 많은 데서?”\n조용함이 최고 복지\n간섭 받는 거 제일 싫음', recommendation: '추천: 프라이빗·자율형' },
    'ISFJ': { title: '🌸 정 많은 엄마형 (ISFJ)', description: '“밥은 먹었어? 약은 챙겼어?”\n직원 태도에 마음 열린다\n돌봄 중요', recommendation: '추천: 케어 중심 실버타운' },
    'INFP': { title: '🌿 힐링 자연인형 (INFP/ISFP)', description: '“조용히 살다 가고 싶어…”\n산, 나무, 햇빛 중요\n시끄러운 거 싫음', recommendation: '추천: 자연 입지형' },
    'ISFP': { title: '🌿 힐링 자연인형 (INFP/ISFP)', description: '“조용히 살다 가고 싶어…”\n산, 나무, 햇빛 중요\n시끄러운 거 싫음', recommendation: '추천: 자연 입지형' },
    'ESFP': { title: '🎉 인생은 지금형 (ESFP)', description: '“늙어서까지 재미없을 필요 있나?”\n행사·여행·취미 없으면 무의미', recommendation: '추천: 액티비티 특화형' },
    'INTJ': { title: '🧠 똑똑한 고집형 (INTJ)', description: '“내가 알아서 판단한다”\n아무 데나 안 간다\n수준 낮은 곳 질색', recommendation: '추천: 하이엔드·저밀도' },
    'ENFJ': { title: '🤝 사람 챙기는 반장형 (ENFJ)', description: '“다 같이 잘 살아야지”\n공동체 중심\n입주민 역할 중요', recommendation: '추천: 참여형 커뮤니티' },

    // Additional specific results from the user's prompt, identified by unique keys
    // These are for cases where an MBTI type had a different, specific description later in the list
    // If a clear rule for differentiation isn't given, I'll use a simple heuristic (e.g., favoring one over another)
    'INFP_TYPE_2': { title: '⑩ 되는대로 자유인형', description: '“규칙 많으면 숨 막혀”\n간섭 NO\n느슨한 생활', recommendation: '추천: 자율형 소규모' },
    'ESTJ_TYPE_2': { title: '⑪ 관리비 감시자형', description: '“이 돈 내고 이 서비스 맞아?”\n시스템·관리 중시', recommendation: '추천: 운영 안정형' },
    'ENFP_TYPE_1': { title: '⑫ 분위기 중독형', description: '“느낌 안 오면 못 살아”\n감성·스토리 중요', recommendation: '추천: 콘셉트형 실버타운' }, // ENFP was not defined previously
    'ISTP_TYPE_2': { title: '⑬ 혼자 있어도 안 외로운 형', description: '“사람 없어도 괜찮음”\n개인 공간 최우선', recommendation: '추천: 독립형 구조' },
    'ENTJ_TYPE_2': { title: '⑭ 다 갖춰야 직성 풀리는 형', description: '“이왕이면 다 있어야지”\n의료·생활·커뮤니티 다 봄', recommendation: '추천: 올인원 복합형' },
    'ESTP_TYPE_1': { title: '⑮ 쿨한 도시인형', description: '“촌스러우면 못 산다”\n접근성·편의시설 중요', recommendation: '추천: 도심형 실버타운' }, // ESTP was not defined previously
    'ENTP_TYPE_1': { title: '⑯ 말 많은 아이디어형', description: '“여기서 이런 것도 해보면 어때?”\n새로움 중독', recommendation: '추천: 테마형·신개념' }, // ENTP was not defined previously
};


let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
    startScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    progress.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    questionTitle.innerText = question.title;
    questionText.innerText = question.question;
    answerBtns[0].innerText = question.answers[0].text;
    answerBtns[0].dataset.type = question.answers[0].type;
    answerBtns[1].innerText = question.answers[1].text;
    answerBtns[1].dataset.type = question.answers[1].type;
}

function handleAnswer(e) {
    const selectedType = e.target.dataset.type;
    scores[selectedType]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    let mbti = '';
    mbti += scores.E > scores.I ? 'E' : 'I';
    mbti += scores.S > scores.N ? 'S' : 'N';
    mbti += scores.T > scores.F ? 'T' : 'F';
    mbti += scores.J > scores.P ? 'J' : 'P';
    
    let resultData;

    // Logic to select the correct result based on the derived MBTI and original prompt's structure
    // Prioritize specific 'TYPE_X' if applicable based on general MBTI preferences.
    // This is an interpretation of how to distinguish the similar MBTI results from the prompt.
    // If a clear rule for differentiation isn't given, I'll use a simple heuristic (e.g., favoring one over another)

    // Handle ENTJ and ESTJ with two descriptions
    if (mbti === 'ENTJ') {
        if (scores.E >= scores.I && scores.J >= scores.P) { // Assume '허세형 귀족' for strong E, J
            resultData = results['ENTJ']; // 👑 허세형 귀족 (ENTJ/ESTJ 계열)
        } else {
            resultData = results['ENTJ_TYPE_2']; // ⑭ 다 갖춰야 직성 풀리는 형
        }
    } else if (mbti === 'ESTJ') {
        if (scores.E >= scores.I && scores.J >= scores.P) { // Assume '허세형 귀족' for strong E, J
            resultData = results['ESTJ']; // 👑 허세형 귀족 (ENTJ/ESTJ 계열)
        } else {
            resultData = results['ESTJ_TYPE_2']; // ⑪ 관리비 감시자형
        }
    }
    // Handle INTP and ISTP with two descriptions
    else if (mbti === 'INTP') {
        if (scores.I >= scores.E && scores.P >= scores.J) { // Assume '방콕 장인형' for strong I, P
            resultData = results['INTP']; // 🛋 방콕 장인형 (INTP/ISTP)
        } else {
            resultData = results['ISTP_TYPE_2']; // ⑬ 혼자 있어도 안 외로운 형 (This is a simplified mapping, INTP doesn't have a direct equivalent here)
                                                  // For now, I'll fall back to general INTP
            resultData = results['INTP'];
        }
    } else if (mbti === 'ISTP') {
        if (scores.I >= scores.E && scores.P >= scores.J) { // Assume '방콕 장인형' for strong I, P
            resultData = results['ISTP']; // 🛋 방콕 장인형 (INTP/ISTP)
        } else {
            resultData = results['ISTP_TYPE_2']; // ⑬ 혼자 있어도 안 외로운 형
        }
    }
    // Handle INFP and ISFP with two descriptions
    else if (mbti === 'INFP') {
        if (scores.I >= scores.E && scores.P >= scores.J) { // Assume '힐링 자연인형' for strong I, P
            resultData = results['INFP']; // 🌿 힐링 자연인형 (INFP/ISFP)
        } else {
            resultData = results['INFP_TYPE_2']; // ⑩ 되는대로 자유인형
        }
    } else if (mbti === 'ISFP') {
        if (scores.I >= scores.E && scores.P >= scores.J) { // Assume '힐링 자연인형' for strong I, P
            resultData = results['ISFP']; // 🌿 힐링 자연인형 (INFP/ISFP)
        } else {
            // No specific ISFP_TYPE_2 in the provided list, so fall back to general ISFP
            resultData = results['ISFP'];
        }
    }
    // Handle single-entry MBTI types and the previously unassigned ones
    else if (mbti === 'ENFP') {
        resultData = results['ENFP_TYPE_1']; // ⑫ 분위기 중독형
    } else if (mbti === 'ESTP') {
        resultData = results['ESTP_TYPE_1']; // ⑮ 쿨한 도시인형
    } else if (mbti === 'ENTP') {
        resultData = results['ENTP_TYPE_1']; // ⑯ 말 많은 아이디어형
    }
    // All other unique MBTI results
    else if (results[mbti]) {
        resultData = results[mbti];
    } else {
        // Fallback for any unhandled MBTI types - should not happen if logic is complete
        resultData = { title: "결과를 찾을 수 없습니다.", description: "알 수 없는 MBTI 유형입니다. 개발자에게 문의하세요.", recommendation: "" };
    }


    document.getElementById('result-mbti').innerText = mbti;
    document.getElementById('result-title').innerText = resultData.title;
    document.getElementById('result-description').innerText = resultData.description;
    document.getElementById('result-recommendation').innerText = resultData.recommendation;
}


startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
});
answerBtns.forEach(btn => btn.addEventListener('click', handleAnswer));
