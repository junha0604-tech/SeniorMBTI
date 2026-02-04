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
        character: 'https://i.postimg.cc/SJKw5GR7/ENTJ.png'
    },
    {
        mbti: 'ESTJ',
        title: '🏰 관리자형 선임',
        description: '“규칙과 질서가 중요해”\n꼼꼼한 관리와 효율성을 추구\n시스템이 잘 갖춰진 곳 선호',
        recommendation: '추천: 운영 안정형 실버타운',
        character: 'https://i.postimg.cc/75Fd58V3/ESTJ.png'
    },
    {
        mbti: 'ISTJ',
        title: '💸 구두쇠 실속형',
        description: '“비싼 데는 다 이유 없이 비싸”\n비용 대비 혜택 계산기 장착\n관리비에 민감',
        recommendation: '추천: 공공·합리형 실버타운',
        character: 'https://i.postimg.cc/FfXC9brB/ISTJ.png'
    },
    {
        mbti: 'ESFJ',
        title: '🎤 동네 회장님형',
        description: '“사람은 모여 살아야지!”\n입주 3일 만에 아는 사람 20명\n프로그램 빠지면 섭섭',
        recommendation: '추천: 커뮤니티 대형 단지',
        character: 'https://i.postimg.cc/jLkGrJJL/ESFJ.png'
    },
    {
        mbti: 'INTP',
        title: '🛋 방콕 장인형',
        description: '“굳이 사람 많은 데서?”\n조용함이 최고 복지\n간섭 받는 거 제일 싫음',
        recommendation: '추천: 프라이빗·자율형',
        character: 'https://i.postimg.cc/rKbYHXvw/INTP.png'
    },
    {
        mbti: 'ISTP',
        title: '🔧 만능 재주꾼',
        description: '“이건 내가 고칠 수 있겠는데?”\n실용적이고 독립적인 생활 선호\n개인 공간과 자유로운 활동 중요',
        recommendation: '추천: 독립형 구조 실버타운',
        character: 'https://i.postimg.cc/67VjT7T9/ISTP.png'
    },
    {
        mbti: 'ISFJ',
        title: '🌸 정 많은 엄마형',
        description: '“밥은 먹었어? 약은 챙겼어?”\n직원 태도에 마음 열린다\n돌봄 중요',
        recommendation: '추천: 케어 중심 실버타운',
        character: 'https://i.postimg.cc/HryPDvgM/ISFJ.png'
    },
    {
        mbti: 'INFP',
        title: '🌿 힐링 자연인형',
        description: '“조용히 살다 가고 싶어…”\n산, 나무, 햇빛 중요\n시끄러운 거 싫음',
        recommendation: '추천: 자연 입지형',
        character: 'https://i.postimg.cc/MX9Lyj59/INFP.png'
    },
    {
        mbti: 'ISFP',
        title: '🎨 예술가적 감성',
        description: '“아름다움과 편안함을 추구해요”\n자유로운 분위기에서 취미 활동 선호\n간섭 없는 독립적인 생활 중요',
        recommendation: '추천: 조용하고 예술 활동 가능한 실버타운',
        character: 'https://i.postimg.cc/nXDwbSJS/ISFP.png'
    },
    {
        mbti: 'ESFP',
        title: '🎉 인생은 지금형',
        description: '“늙어서까지 재미없을 필요 있나?”\n행사·여행·취미 없으면 무의미',
        recommendation: '추천: 액티비티 특화형',
        character: 'https://i.postimg.cc/9DRsXFG9/ESFP.png'
    },
    {
        mbti: 'INTJ',
        title: '🧠 똑똑한 고집형',
        description: '“내가 알아서 판단한다”\n아무 데나 안 간다\n수준 낮은 곳 질색',
        recommendation: '추천: 하이엔드·저밀도',
        character: 'https://i.postimg.cc/jLCFvdkY/INTJ.png'
    },
    {
        mbti: 'ENFJ',
        title: '🤝 사람 챙기는 반장형',
        description: '“다 같이 잘 살아야지”\n공동체 중심\n입주민 역할 중요',
        recommendation: '추천: 참여형 커뮤니티',
        character: 'https://i.postimg.cc/4HfrX65V/ENFJ.png'
    },
    {
        mbti: 'ENFP',
        title: '🌟 분위기 메이커',
        description: '“새로운 사람들과의 만남이 즐거워요!”\n다양한 활동과 자극을 선호\n자유롭고 활기찬 분위기 중요',
        recommendation: '추천: 테마형·신개념 실버타운',
        character: 'https://i.postimg.cc/XXLRQPjg/ENFP.png'
    },
    {
        mbti: 'ESTP',
        title: '🏍️ 쿨한 도시인',
        description: '“촌스러우면 못 산다”\n접근성·편의시설 중요\n역동적인 도시 생활 선호',
        recommendation: '추천: 도심형 실버타운',
        character: 'https://i.postimg.cc/dhbphPBS/ESTP.png'
    },
    {
        mbti: 'ENTP',
        title: '💡 말 많은 아이디어 뱅크',
        description: '“여기서 이런 것도 해보면 어때?”\n새로운 아이디어와 변화를 추구\n지적 호기심을 자극하는 환경 선호',
        recommendation: '추천: 혁신적인 프로그램의 실버타운',
        character: 'https://i.postimg.cc/PPFBk8vB/ENTP.png'
    },
    {
        mbti: 'INFJ',
        title: '🔮 통찰력 있는 조언가',
        description: '“세상에 긍정적인 영향을 주고 싶어요”\n깊은 대화와 의미 있는 관계 중요\n조용하고 평화로운 환경 선호',
        recommendation: '추천: 사색과 성찰 중심 실버타운',
        character: 'https://i.postimg.cc/CdhtB4jt/INFJ.png'
    }
];

// Convert array to a map for quick lookup by MBTI type in showResult
const results = allMbtiTypesData.reduce((map, type) => {
    map[type.mbti] = type;
    return map;
}, {});

const facilityData = [
    {
        name: '서울특별시 더클래식500',
        link: 'https://www.caredoc.kr/facility/%EB%8D%94%ED%81%B4%EB%9E%98%EC%8B%9D500-SVT-a1eccc58dc?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-a1eccc58dc/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%203@(w1920_q80_fwebp).png'
    },
    {
        name: '서울시니어스 강남타워',
        link: 'https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%95%EB%82%A8%ED%83%80%EC%9B%8C-SVT-eabbd660de?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-eabbd660de/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '서울시니어스 가양타워',
        link: 'https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%80%EC%96%91%ED%83%80%EC%9B%8C-SVT-7fda8e4612?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7fda8e4612/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '서울시니어스 강서타워',
        link: 'https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EA%B0%95%EC%84%9C%ED%83%80%EC%9B%8C-SVT-0b1a0236dc?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-0b1a0236dc/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '서울시니어스 서울타워',
        link: 'https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EC%84%9C%EC%9A%B8%ED%83%80%EC%9B%8C-SVT-7b66cedb59?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7b66cedb59/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '더시그넘하우스(강남)',
        link: 'https://www.caredoc.kr/facility/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%98%ED%95%98%EC%9A%B0%EC%8A%A4%EA%B0%95%EB%82%A8-SVT-1553710a93?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1553710a93/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '노블레스타워',
        link: 'https://www.caredoc.kr/facility/%EB%85%B8%EB%B8%94%EB%A0%88%EC%8A%A4%ED%83%80%EC%9B%8C-SVT-45b683b4d0?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-45b683b4d0/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '하이원빌리지',
        link: 'https://www.caredoc.kr/facility/%ED%95%98%EC%9D%B4%EC%9B%90%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-1f96e31759?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1f96e31759/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '케어닥케어홈 배곧점 1호점',
        link: 'https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EB%B0%B0%EA%B3%A7%EC%A0%901%EA%B4%80-SVT-3b5d86d3dc?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-3b5d86d3dc/%EC%99%B8%EA%B4%80/00002_%EB%B0%B0%EA%B3%A7%EC%8B%A0%EB%8F%84%EC%8B%9C%EC%A0%90%201%EA%B4%80_%EC%99%B8%EA%B4%80%202@(w1920_q80_fwebp).jpg'
    },
    {
        name: '케어닥케어홈 송추점',
        link: 'https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EC%86%A1%EC%B6%94%EC%A0%90-SVT-f0f3acbec4?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-f0f3acbec4/%EC%99%B8%EA%B4%80/00001_%EC%86%A1%EC%B6%94%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EC%A0%90%20_%EC%99%B8%EA%B4%80%202@(w1920_q80_fwebp).jpg'
    },
    {
        name: '케어닥케어홈 용인점',
        link: 'https://www.caredoc.kr/facility/%EC%BC%80%EC%96%B4%EB%8B%A5%EC%BC%80%EC%96%B4%ED%99%88-%EC%9A%A9%EC%9D%B8%EC%A0%90-SVT-3d77c325a8?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-3d77c325a8/%EC%99%B8%EA%B4%80/00002_%EC%9A%A9%EC%9D%B8%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%EC%A0%90_%EC%99%B8%EA%B4%80%202@(w1920_q80_fjpg).jpg'
    },
    {
        name: '삼성노블카운티 (ILU)',
        link: 'https://www.caredoc.kr/facility/%EC%82%BC%EC%84%B1%EB%85%B8%EB%B8%94%EC%B9%B4%EC%9A%B4%ED%8B%B0ilu-SVT-1bf6d69e42?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-1bf6d69e42/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).png'
    },
    {
        name: '삼성노블카운티 (ALU)',
        link: 'https://www.caredoc.kr/facility/%EC%82%BC%EC%84%B1%EB%85%B8%EB%B8%94%EC%B9%B4%EC%9A%B4%ED%8B%B0alu-SVT-b455aaa01c?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-b455aaa01c/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).png'
    },
    {
        name: '서울시니어스 분당타워',
        link: 'https://www.caredoc.kr/facility/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%8B%88%EC%96%B4%EC%8A%A4%EB%B6%84%EB%8B%B9%ED%83%80%EC%9B%8C-SVT-30c9b20e0a?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-30c9b20e0a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '더시그넘하우스(청라)',
        link: 'https://www.caredoc.kr/facility/%EB%8D%94%EC%8B%9C%EA%B7%B8%EB%84%98%ED%95%98%EC%9A%B0%EC%8A%A4%EC%B2%AD%EB%9D%BC-SVT-2c75792336?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-2c75792336/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '백운호수 푸르지오 숲속의 아침 1단지',
        link: 'https://www.caredoc.kr/facility/%EB%B0%B1%EC%9A%B4%ED%98%B8%EC%88%98-%ED%91%B8%EB%A5%B4%EC%A7%80%EC%98%A4%EC%88%B2%EC%86%8D%EC%9D%98-%EC%95%84%EC%B9%A81%EB%8B%A8%EC%A7%80-SVT-5950055c5a?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-5950055c5a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).jpg'
    },
    {
        name: '백운호수 푸르지오 숲속의 아침 2단지',
        link: 'https://www.caredoc.kr/facility/%EB%B0%B1%EC%9A%B4%ED%98%B8%EC%88%98-%ED%91%B8%EB%A5%B4%EC%A7%80%EC%98%A4%EC%88%B2%EC%86%8D%EC%9D%98-%EC%95%84%EC%B9%A82%EB%8B%A8%EC%A7%80-SVT-3433616e51?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-3433616e51/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).jpg'
    },
    {
        name: '유당실버타운',
        link: 'https://www.caredoc.kr/facility/%EC%9C%A0%EB%8B%B9%EC%8B%A4%EB%B2%84%ED%83%80%EC%9A%B4-SVT-968432ff6c?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-968432ff6c/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '유당케어홈',
        link: 'https://www.caredoc.kr/facility/%EC%9C%A0%EB%8B%B9%EC%BC%80%EC%96%B4%ED%99%88-SVT-2c8d1fb4ca?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-2c8d1fb4ca/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '위례심포니아',
        link: 'https://www.caredoc.kr/facility/%EC%9C%84%EB%A1%80%EC%8B%AC%ED%8F%AC%EB%8B%88%EC%95%84-SVT-144e2249d1?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-144e2249d1/%EC%99%B8%EA%B4%80/00001_%EC%99%B8%EA%B4%80%201@(w1920_q80_fwebp).jpg'
    },
    {
        name: 'VL 라우어(오시리아)',
        link: 'https://www.caredoc.kr/facility/vl%EB%9D%BC%EC%9A%B0%EC%96%B4%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84-SVT-07976ff9de?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-07976ff9de/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '라티브(오시리아)',
        link: 'https://www.caredoc.kr/facility/%EB%9D%BC%ED%8B%B0%EB%B8%8C%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84-SVT-9d3e46f2b5?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-9d3e46f2b5/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '마리스텔라',
        link: 'https://www.caredoc.kr/facility/%EB%A7%88%EB%A6%AC%EC%8A%A4%ED%85%94%EB%9D%BC-SVT-2cde772ee1?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-2cde772ee1/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '청심빌리지',
        link: 'https://www.caredoc.kr/facility/%EC%B2%AD%EC%8B%AC%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-7dc620c548?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-7dc620c548/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
    },
    {
        name: '사이언스빌리지',
        link: 'https://www.caredoc.kr/facility/%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A4%EB%B9%8C%EB%A6%AC%EC%A7%80-SVT-e4fa852e8f?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-e4fa852e8f/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: '노블파인스',
        link: 'https://www.caredoc.kr/facility/%EB%85%B8%EB%B8%94%ED%8C%8C%EC%9D%B8%EC%8A%A4-SVT-81f663e9a3?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-81f663e9a3/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).png'
    },
    {
        name: 'KB골든라이프 평창카운티',
        link: 'https://www.caredoc.kr/facility/kb%EA%B3%A8%EB%93%A0%EB%9D%BC%EC%9D%B4%ED%94%84%EC%BC%80%EC%96%B4%ED%8F%89%EC%B0%BD-%EC%B9%B4%EC%9A%B4%ED%8B%B0-SVT-9b78e72c15?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-9b78e72c15/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%A9%94%EC%9D%B8)@(w1920_q80_fwebp).jpg'
    },
    {
        name: 'VL르웨스트 마곡',
        link: 'https://www.caredoc.kr/facility/vl%EB%A5%B4%EC%9B%A8%EC%8A%A4%ED%8A%B8%EB%A7%88%EA%B3%A1-SVT-fad8d13d5a?facilityType=SILVER_TOWN&isRouter=true',
        image: 'https://cache.caredoc.kr/caredoc-home/facility/svt/20251125/SVT-fad8d13d5a/%EC%99%B8%EA%B4%80/%EC%99%B8%EA%B4%80%201(%EB%8C%80%ED%91%9C)@(w1920_q80_fwebp).jpg'
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
    const resultImg = document.getElementById('result-img');
    resultImg.src = resultData.character;
    resultImg.alt = resultData.mbti;

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
        <img src="${goodMatchData.character}" alt="${goodMatchData.mbti}" class="mbti-character-img">
        <h4>${goodMatchData.mbti} - ${goodMatchData.title}</h4>
    `;

    badMatchContainer.innerHTML = `
        <h3>상극궁합</h3>
        <img src="${badMatchData.character}" alt="${badMatchData.mbti}" class="mbti-character-img">
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
            <img src="${type.character}" alt="${type.mbti} Character" class="mbti-character-img">
            <p class="description">${type.description}</p>
            <p class="recommendation">${type.recommendation}</p>
        `;
        allTypesContainer.appendChild(typeDiv);
    });
}

function displayFacilityRecommendations() {
    facilityCardsContainer.innerHTML = ''; // Clear previous content

    // Shuffle the facility data
    const shuffledFacilities = [...facilityData].sort(() => 0.5 - Math.random());

    // Take the first 4
    const selectedFacilities = shuffledFacilities.slice(0, 4);

    selectedFacilities.forEach(facility => {
        const facilityCard = document.createElement('a'); // Use 'a' tag for clickable card
        facilityCard.href = facility.link;
        facilityCard.target = '_blank'; // Open in new tab
        facilityCard.classList.add('facility-card');

        // Dynamically determine description and location
        let name = facility.name;
        let description = '프리미엄 실버타운';
        let location = '상세정보 확인';

        if (name.includes('(') && name.includes(')')) {
            const parts = name.split('(');
            name = parts[0];
            location = parts[1].replace(')', '');
        }

        if (name.includes('서울')) {
            location = '서울';
        }

        facilityCard.innerHTML = `
            <img src="${facility.image}" alt="${name}" class="facility-card-img">
            <div class="facility-card-content">
                <h4>${name}</h4>
                <p class="facility-description">${description}</p>
                <p class="facility-location">${location}</p>
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
