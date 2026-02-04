const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const allTypesScreen = document.getElementById('all-types-screen');
const allTypesContainer = document.getElementById('all-types-container');
const facilityRecommendationsSection = document.getElementById('facility-recommendations'); // New
const facilityCardsContainer = document.getElementById('facility-cards-container'); // New

const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const viewAllTypesBtn = document.getElementById('view-all-types-btn');
const allTypesBackBtn = document.getElementById('all-types-back-btn');

const progress = document.querySelector('.progress');
const questionTopic = document.getElementById('question-topic');
const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');

const questions = [
    // E vs I (6 questions)
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q1. 엘리베이터에 나 말고 두 사람이 더 타 있다', answers: [{ text: '“날씨가 요즘 참…” 말문을 연다', type: 'E' }, { text: '숨소리도 줄인다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q2. 아침 식사 후 누군가 커피 마시자고 한다', answers: [{ text: '“어디서요?” 바로 합류', type: 'E' }, { text: '“아… 오늘은 좀…”', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q3. 단지 산책 중 같은 분을 세 번째 마주쳤다', answers: [{ text: '“자주 뵙네요~”', type: 'E' }, { text: '‘아 또 마주치네…’', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q4. 공용 라운지에서 다 같이 TV를 본다', answers: [{ text: '중간중간 코멘트한다', type: 'E' }, { text: '조용히 보거나 자리를 피한다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q5. 이웃이 “시간 괜찮으세요?”라고 묻는다', answers: [{ text: '웬만하면 괜찮다', type: 'E' }, { text: '일단 불안하다', type: 'I' }] },
    { title: '① 사람 좋아함 vs 혼자가 최고', question: 'Q6. 경로당에서 처음 보는 사람이 말을 건다', answers: [{ text: '“네, 안녕하세요!”', type: 'E' }, { text: '인사만 하고 슬쩍 자리를 피한다', type: 'I' }] },
    // N vs S (6 questions)
    { title: '② 현실파 vs 감성파', question: 'Q7. 상담사가 “여긴 다들 만족해하세요”라고 말한다', answers: [{ text: '“구체적으로 뭐가요?”', type: 'S' }, { text: '“아 그런 분위기구나”', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q8. 실버타운 홍보 영상에서', answers: [{ text: '시설 수치가 눈에 들어온다', type: 'S' }, { text: '음악과 장면이 기억난다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q9. 같은 조건의 두 시설', answers: [{ text: '관리비 싼 곳', type: 'S' }, { text: '더 예쁜 곳', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q10. ‘여기 살면 인생 2막입니다’라는 문구', answers: [{ text: '좀 오글거린다', type: 'S' }, { text: '괜히 설렌다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q11. 새로 도입한 스마트 시스템', answers: [{ text: '설명서부터 찾는다', type: 'S' }, { text: '일단 눌러본다', type: 'N' }] },
    { title: '② 현실파 vs 감성파', question: 'Q12. 새로운 건강 보조 식품이 나왔다', answers: [{ text: '성분과 후기부터 꼼꼼히 본다', type: 'S' }, { text: '‘왠지 효과 좋을 것 같아’', type: 'N' }] },
    // T vs F (6 questions)
    { title: '③ 이성형 vs 정 많은 형', question: 'Q13. 직원이 실수했다', answers: [{ text: '“다음엔 이런 일 없게 해주세요”', type: 'T' }, { text: '“괜찮아요, 그럴 수도 있죠”', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q14. 같은 가격이면 더 중요한 건', answers: [{ text: '서비스 구성', type: 'T' }, { text: '사람 태도', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q15. 상담 후 기억에 남는 건', answers: [{ text: '설명 내용', type: 'T' }, { text: '상담사 인상', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q16. 불편한 점이 생겼다', answers: [{ text: '공식 절차로 접수', type: 'T' }, { text: '아는 직원에게 슬쩍', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q17. 직원이 친절하지만 느리다', answers: [{ text: '답답하다', type: 'T' }, { text: '미워할 수 없다', type: 'F' }] },
    { title: '③ 이성형 vs 정 많은 형', question: 'Q18. 이웃이 아침부터 문을 두드린다', answers: [{ text: '‘무슨 일이지?’ 사실부터 파악', type: 'T' }, { text: '‘무슨 일 있나?’ 걱정부터 한다', type: 'F' }] },
    // J vs P (6 questions)
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q19. 아침에 눈을 떴다', answers: [{ text: '오늘 일정이 머리에 있다', type: 'J' }, { text: '일단 일어나 본다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q20. 식사 시간 알림이 울린다', answers: [{ text: '맞춰 간다', type: 'J' }, { text: '무시하고 있다가 간다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q21. 프로그램 신청해놓고 당일이 됐다', answers: [{ text: '웬만하면 간다', type: 'J' }, { text: '가기 싫으면 안 간다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q22. 갑자기 일정이 바뀌었다', answers: [{ text: '스트레스 받는다', type: 'J' }, { text: '뭐 그럴 수도', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q23. 내 방은', answers: [{ text: '물건 위치가 정해져 있다', type: 'J' }, { text: '찾을 수만 있으면 된다', type: 'P' }] },
    { title: '④ 각 잡힌 인생 vs 되는대로 인생', question: 'Q24. 일주일 식단표가 나왔다', answers: [{ text: '미리 보고 계획을 세운다', type: 'J' }, { text: '그때그때 먹고 싶은 걸 먹는다', type: 'P' }] },
];

// Re-structured data for all 16 MBTI types, ensuring unique entries and character placeholders
const allMbtiTypesData = [
    {
        mbti: 'ENTJ',
        title: '👑 허세형 귀족',
        description: '“이 나이에 아무 데나 들어갈 순 없지”\n로비 인테리어부터 본다\n가격 비싸면 오히려 안심',
        recommendation: '추천: 초고급·프리미엄 실버타운',
        character: 'entj.png'
    },
    {
        mbti: 'ESTJ',
        title: '🏰 관리자형 선임',
        description: '“규칙과 질서가 중요해”\n꼼꼼한 관리와 효율성을 추구\n시스템이 잘 갖춰진 곳 선호',
        recommendation: '추천: 운영 안정형 실버타운',
        character: 'estj.png'
    },
    {
        mbti: 'ISTJ',
        title: '💸 구두쇠 실속형',
        description: '“비싼 데는 다 이유 없이 비싸”\n비용 대비 혜택 계산기 장착\n관리비에 민감',
        recommendation: '추천: 공공·합리형 실버타운',
        character: 'istj.png'
    },
    {
        mbti: 'ESFJ',
        title: '🎤 동네 회장님형',
        description: '“사람은 모여 살아야지!”\n입주 3일 만에 아는 사람 20명\n프로그램 빠지면 섭섭',
        recommendation: '추천: 커뮤니티 대형 단지',
        character: 'esfj.png'
    },
    {
        mbti: 'INTP',
        title: '🛋 방콕 장인형',
        description: '“굳이 사람 많은 데서?”\n조용함이 최고 복지\n간섭 받는 거 제일 싫음',
        recommendation: '추천: 프라이빗·자율형',
        character: 'intp.png'
    },
    {
        mbti: 'ISTP',
        title: '🔧 만능 재주꾼',
        description: '“이건 내가 고칠 수 있겠는데?”\n실용적이고 독립적인 생활 선호\n개인 공간과 자유로운 활동 중요',
        recommendation: '추천: 독립형 구조 실버타운',
        character: 'istp.png'
    },
    {
        mbti: 'ISFJ',
        title: '🌸 정 많은 엄마형',
        description: '“밥은 먹었어? 약은 챙겼어?”\n직원 태도에 마음 열린다\n돌봄 중요',
        recommendation: '추천: 케어 중심 실버타운',
        character: 'isfj.png'
    },
    {
        mbti: 'INFP',
        title: '🌿 힐링 자연인형',
        description: '“조용히 살다 가고 싶어…”\n산, 나무, 햇빛 중요\n시끄러운 거 싫음',
        recommendation: '추천: 자연 입지형',
        character: 'infp.png'
    },
    {
        mbti: 'ISFP',
        title: '🎨 예술가적 감성',
        description: '“아름다움과 편안함을 추구해요”\n자유로운 분위기에서 취미 활동 선호\n간섭 없는 독립적인 생활 중요',
        recommendation: '추천: 조용하고 예술 활동 가능한 실버타운',
        character: 'isfp.png'
    },
    {
        mbti: 'ESFP',
        title: '🎉 인생은 지금형',
        description: '“늙어서까지 재미없을 필요 있나?”\n행사·여행·취미 없으면 무의미',
        recommendation: '추천: 액티비티 특화형',
        character: 'esfp.png'
    },
    {
        mbti: 'INTJ',
        title: '🧠 똑똑한 고집형',
        description: '“내가 알아서 판단한다”\n아무 데나 안 간다\n수준 낮은 곳 질색',
        recommendation: '추천: 하이엔드·저밀도',
        character: 'intj.png'
    },
    {
        mbti: 'ENFJ',
        title: '🤝 사람 챙기는 반장형',
        description: '“다 같이 잘 살아야지”\n공동체 중심\n입주민 역할 중요',
        recommendation: '추천: 참여형 커뮤니티',
        character: 'enfj.png'
    },
    {
        mbti: 'ENFP',
        title: '🌟 분위기 메이커',
        description: '“새로운 사람들과의 만남이 즐거워요!”\n다양한 활동과 자극을 선호\n자유롭고 활기찬 분위기 중요',
        recommendation: '추천: 테마형·신개념 실버타운',
        character: 'enfp.png'
    },
    {
        mbti: 'ESTP',
        title: '🏍️ 쿨한 도시인',
        description: '“촌스러우면 못 산다”\n접근성·편의시설 중요\n역동적인 도시 생활 선호',
        recommendation: '추천: 도심형 실버타운',
        character: 'estp.png'
    },
    {
        mbti: 'ENTP',
        title: '💡 말 많은 아이디어 뱅크',
        description: '“여기서 이런 것도 해보면 어때?”\n새로운 아이디어와 변화를 추구\n지적 호기심을 자극하는 환경 선호',
        recommendation: '추천: 혁신적인 프로그램의 실버타운',
        character: 'entp.png'
    },
    {
        mbti: 'INFJ',
        title: '🔮 통찰력 있는 조언가',
        description: '“세상에 긍정적인 영향을 주고 싶어요”\n깊은 대화와 의미 있는 관계 중요\n조용하고 평화로운 환경 선호',
        recommendation: '추천: 사색과 성찰 중심 실버타운',
        character: 'infj.png'
    }
];

// Convert array to a map for quick lookup by MBTI type in showResult
const results = allMbtiTypesData.reduce((map, type) => {
    map[type.mbti] = type;
    return map;
}, {});

// Dummy data for facility recommendations
const facilityData = [
    {
        name: '서울시니어스타워 가양',
        image: 'https://finding-facilities.pages.dev/images/seoul_gayang.webp',
        description: '도심 속 자연을 누리는 프리미엄 실버타운',
        location: '서울 강서구',
        link: 'https://finding-facilities.pages.dev/#seoul-gayang'
    },
    {
        name: '더클래식 500',
        image: 'https://finding-facilities.pages.dev/images/theclassic500.webp',
        description: '고품격 주거와 의료, 문화시설을 갖춘 럭셔리 시니어 복합단지',
        location: '서울 광진구',
        link: 'https://finding-facilities.pages.dev/#theclassic500'
    },
    {
        name: '정원속궁전',
        image: 'https://finding-facilities.pages.dev/images/garden_palace.webp',
        description: '아름다운 정원과 함께하는 편안한 노년',
        location: '경기 용인시',
        link: 'https://finding-facilities.pages.dev/#garden-palace'
    },
    {
        name: '삼성노블카운티',
        image: 'https://finding-facilities.pages.dev/images/samsung_noblecounty.webp',
        description: '삼성생명이 운영하는 도심형 종합복지단지',
        location: '경기 용인시',
        link: 'https://finding-facilities.pages.dev/#samsung-noblecounty'
    }
];

const compatibility = {
    'ISTJ': { good: 'ESFP', bad: 'ENFP' },
    'ISFJ': { good: 'ESTP', bad: 'ENTP' },
    'INFJ': { good: 'ENTP', bad: 'ESTP' },
    'INTJ': { good: 'ENFP', bad: 'ESFP' },
    'ISTP': { good: 'ESFJ', bad: 'ENFJ' },
    'ISFP': { good: 'ESTJ', bad: 'ENTJ' },
    'INFP': { good: 'ENFJ', bad: 'ESTJ' },
    'INTP': { good: 'ENTJ', bad: 'ESFJ' },
    'ESTP': { good: 'ISFJ', bad: 'INFJ' },
    'ESFP': { good: 'ISTJ', bad: 'INTJ' },
    'ENFP': { good: 'INTJ', bad: 'ISTJ' },
    'ENTP': { good: 'INFJ', bad: 'ISFJ' },
    'ESTJ': { good: 'ISFP', bad: 'INFP' },
    'ESFJ': { good: 'INTP', bad: 'ISTP' },
    'ENFJ': { good: 'INFP', bad: 'ISFP' },
    'ENTJ': { good: 'INTP', bad: 'ISTP' },
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
    questionTopic.innerText = question.title;
    questionTitle.innerText = `Q${currentQuestionIndex + 1}.`;
    questionText.innerText = question.question.substring(3);
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
    
    const resultData = results[mbti];

    document.getElementById('result-mbti').innerText = mbti;
    document.getElementById('result-title').innerText = resultData.title;
    document.getElementById('result-description').innerText = resultData.description;
    document.getElementById('result-recommendation').innerText = resultData.recommendation;

    displayCompatibility(mbti);
    displayFacilityRecommendations(); // Call to display facility recommendations
}

function displayCompatibility(mbti) {
    const goodMatchMbti = compatibility[mbti].good;
    const badMatchMbti = compatibility[mbti].bad;
    const goodMatchData = results[goodMatchMbti];
    const badMatchData = results[badMatchMbti];

    const goodMatchContainer = document.getElementById('good-match');
    const badMatchContainer = document.getElementById('bad-match');

    goodMatchContainer.innerHTML = `
        <h3>찰떡궁합</h3>
        <img src="characters/${goodMatchData.character}" alt="${goodMatchData.mbti}" class="mbti-character-img">
        <h4>${goodMatchData.mbti} - ${goodMatchData.title}</h4>
    `;

    badMatchContainer.innerHTML = `
        <h3>상극궁합</h3>
        <img src="characters/${badMatchData.character}" alt="${badMatchData.mbti}" class="mbti-character-img">
        <h4>${badMatchData.mbti} - ${badMatchData.title}</h4>
    `;
}

function showAllTypes() {
    resultScreen.style.display = 'none';
    allTypesScreen.style.display = 'block';
    allTypesContainer.innerHTML = ''; // Clear previous content

    allMbtiTypesData.forEach(type => {
        const typeDiv = document.createElement('div');
        typeDiv.classList.add('mbti-type-card'); // Add a class for styling

        typeDiv.innerHTML = `
            <h3>${type.mbti} - ${type.title}</h3>
            <img src="characters/${type.character}" alt="${type.mbti} Character" class="mbti-character-img">
            <p class="description">${type.description}</p>
            <p class="recommendation">${type.recommendation}</p>
        `;
        allTypesContainer.appendChild(typeDiv);
    });
}

function displayFacilityRecommendations() {
    facilityCardsContainer.innerHTML = ''; // Clear previous content

    facilityData.forEach(facility => {
        const facilityCard = document.createElement('a'); // Use 'a' tag for clickable card
        facilityCard.href = facility.link;
        facilityCard.target = '_blank'; // Open in new tab
        facilityCard.classList.add('facility-card');

        facilityCard.innerHTML = `
            <img src="${facility.image}" alt="${facility.name}" class="facility-card-img">
            <div class="facility-card-content">
                <h4>${facility.name}</h4>
                <p class="facility-description">${facility.description}</p>
                <p class="facility-location">${facility.location}</p>
            </div>
        `;
        facilityCardsContainer.appendChild(facilityCard);
    });
}


startBtn.addEventListener('click', startQuiz);

retryBtn.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    allTypesScreen.style.display = 'none'; // Ensure all types screen is hidden too
    startScreen.style.display = 'block';
});

viewAllTypesBtn.addEventListener('click', showAllTypes); // New event listener

allTypesBackBtn.addEventListener('click', () => { // New event listener
    allTypesScreen.style.display = 'none';
    resultScreen.style.display = 'block'; // Go back to the result screen
});

answerBtns.forEach(btn => btn.addEventListener('click', handleAnswer));
