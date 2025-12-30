//문제1: 과일 목록 관리
let fruitList = ['사과', '바나나'];
let newfruit = prompt("새로운 과일명: ");
if(fruitList.indexOf(newfruit) != -1){
    console.log('이미 존재하는 과일입니다.');
}
else{
    fruitList.push(newfruit);
    console.log(fruitList);
}

//문제2: 성별에 따른 색상 지정
let rrn = prompt("주민번호 입력: ");
if(rrn[6] == '1' || rrn[6] == '3'){
    console.log("blue");
} // 입력받은 7번째 숫자가 1 or 3이면 blue 출력
else if(rrn[6] == '2' || rrn[6] == '4'){
    console.log("red");
} // 입력받은 7번째 숫자가 2 or 4이면 red 출력
else{
    console.log("잘못된 주민번호"); // 1~4가 아니면 잘못된 주민번호!
}

//문제3: 구매 금액에 따른 할인율 적용
let total_cash = Number(prompt("총 구매 금액: ")); // 금액 입력 받기

if(total_cash >= 50000){
    console.log(`최종 결제 금액: ${total_cash*0.9}`);
} //10퍼 할인
else if(total_cash >= 30000){
    console.log(`최종 결제 금액: ${total_cash*0.95}`);
} // 5퍼 할인
else if(total_cash >= 10000){
    console.log(`최종 결제 금액: ${total_cash*0.99}`);
} // 1퍼 할인
else{
    console.log(`최종 결제 금액: ${total_cash}`);
} // 할인 없음


//문제4: 월(Month)에 따른 계절 판별
let Month = Number(prompt("원하는 달: "));

if(Month == 3 || Month == 4 || Month == 5){
    console.log('봄');
} // 3,4,5월이면 봄 출력
else if(Month == 6 || Month == 7 || Month == 8){
    console.log('여름');
} // 6,7,8월이면 여름 출력
else if(Month == 9 || Month == 10 || Month == 11){
    console.log('가을');
} // 9,10,11월이면 가을 출력
else if(Month == 12 || Month == 1 || Month == 2){
    console.log('겨울');
} // 12,1,2월이면 겨울 출력
else{
    console.log('잘못된 월입니다.');
} // 그 이외의 숫자가 들어오면 오류 문구 출력

//문제5: 세 수 중 가장 큰 수 찾기
let num1 = Number(prompt("첫번째 숫자: "));
let num2 = Number(prompt("두번째 숫자: "));
let num3 = Number(prompt("세번째 숫자: "));

if(num1 >= num2 && num1 >= num3){
    console.log(`가장 큰 수: ${num1}`);
}
else if(num2 > num3){
    console.log(`가장 큰 수: ${num2}`);
}
else{
    console.log(`가장 큰 수: ${num3}`);
} // 변수 활용 : (1) [입력받은/중간연산식] 저장 (2) 가독성

//문제6: 윤년 판별기
let year = Number(prompt("연도 입력: "));
if(year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0){
    console.log(`${year}년은 윤년입니다.`);
}
else{
    console.log(`${year}년은 평년입니다.`);
}

//문제7: 세 수 오름차순 정렬
let n1 = Number(prompt("첫번째 수: "));
let n2 = Number(prompt("두번째 수: "));
let n3 = Number(prompt("세번째 수: "));

if(n1 >= n2 && n1 >= n3){
    if(n2 >= n3){
        console.log(n3, n2, n1);
    }
    else{
        console.log(n2, n3, n1);
    }
}
else if(n2 >= n3){
    if(n1 >= n3){
        console.log(n3, n1, n2);
    }
    else{
        console.log(n1, n3, n2)
    }
}
else if(n1 >= n2){
    console.log(n2, n1, n3);
}
else{
    console.log(n1, n2, n3);
}

//문제8: 가위바위보 게임
let player1 = Number(prompt("플레이어1 가위바위보(0,1,2) 입력: "));
let player2 = Number(prompt("플레이어2 가위바위보(0,1,2) 입력: "));

if(player1 == player2){
    console.log('무승부');
}
else if((player1 == 2 && player2 == 1) || (player1 == 1 && player2 == 0) || (player1 == 0 && player2 == 2)){
    console.log('플레이어1 승리');
}
else{
    console.log('플레이어2 승리');
}

//문제9: 주차 차량 위치 검색
let carArray = ['250어7142', '142가7415', '888호8888']
let locationArray = ['A1', 'B3', 'C2'];
let findcar = prompt("차량 번호 입력: ");
if(carArray[0] == findcar){
    console.log(locationArray[0]);
}
else if(carArray[1] == findcar){
    console.log(locationArray[1]);
}
else if(carArray[2] == findcar){
    console.log(locationArray[2]);
}
else{
    console.log('차량이 존재하지 않습니다.');
}

//문제10: 수강 신청 목록에서 과목 제외하기
let courseList = ['수학', '영어', '과학', '국어'];
let Delcourse = prompt("제외하고 싶은 과목명 입력: ");
if(courseList[0] == Delcourse){
    courseList.splice(0,1);
    console.log(courseList);
}
else if(courseList[1] == Delcourse){
    courseList.splice(1,1);
    console.log(courseList);
}
else if(courseList[2] == Delcourse){
    courseList.splice(2,1);
    console.log(courseList);
}
else if(courseList[3] == Delcourse){
    courseList.splice(3,1);
    console.log(courseList);
}
else{
    console.log('해당 과목은 신청 목록에 없습니다.');
}