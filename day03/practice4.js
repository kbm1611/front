//문제1 : 삼각형 넓이 계산
let 밑변 = Number(prompt("밑변"));
let 높이 = Number(prompt("높이"));
console.log(`삼각형 넓이 : ${밑변*높이/2}`);

//문제2 : 섭씨를 화씨로 변환
let 섭씨 = Number(prompt("섭씨 온도"));
console.log(`화씨 온도 : ${(섭씨* 9 / 5) + 32}`);


//문제3 : 나이 계산기
let year = Number(prompt("태어난 년도"));
console.log(`나이 : ${2025 - year}`);


//문제4 : BMI 지수 계산
let cm = Number(prompt("키"));
let kg = Number(prompt("몸무게"));
console.log(`BMI : ${kg/(cm/100*cm/100)}`);

//문제5 : 관리자 확인
let id = prompt("아이디");
let pw = prompt("비밀번호");
console.log(`result: ${id == "admin" || id == "admin@test.com" ? "관리자" : "일반 사용자"}`)

//문제6 : 학점 변환기(HTML 출력)
let score = Number(prompt("점수"));
result = `result : ${score >= 90 ? 'A' : score >= 80 ? 'B' : score < 70 ? 'C' : 'C+'}`;
document.querySelector('h2').innerHTML = result;

//문제7 : 청년 할인 이벤트 대상 확인
let age = Number(prompt("나이"));
console.log(`result : ${age >= 20 && age <=29 ? "이벤트 대상입니다." : "이벤트 대상이 아닙니다."}`);

//문제8 : '좋아요'카운터 만들기
let likeCount = 3;
likeCount++;
console.log(`좋아요 : ${likeCount}`);

//문제9 : 할 일 목록에 항목 추가하기
let todoList = ['장보기', '과제하기'];
let newItem = prompt("새로운 할 일");
todoList.push(newItem);
console.log(`결과9 : ${todoList}`);


//문제10 : 대기열의 마지막 사람 확인하기
let waitingList = ['김민준', '이서연', '박도윤', '최지우'];
console.log(`결과10 : 마지막 대기자는 ${waitingList[waitingList.length-1]}입니다.`);