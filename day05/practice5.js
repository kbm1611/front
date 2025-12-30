// 문제1: 배열에서 최댓값 찾기
//초기 데이터
let numbers = [23, 5, 67, 12, 88, 34];

//가장 큰 숫자 변수
let max_num;

for(let index = 0; index <= numbers.length-1; index++){
    if(numbers[index] >= numbers[index-1]){ max_num = numbers[index] }
}

console.log(max_num);
// 문제2 : 별 찍기(기본 역삼각형)
//별을 찍기위한 변수 starts
let starts = "";

for(let i = 5; i > 0; i--){
    for(let j = 0; i > j; j++){
        starts += "*";
    }
    console.log(starts);
    starts = "";
}

// 문제3: 배열에서 특정 문자 찾기(break 활용)
//초기 데이터
let userNames=['김하준','이서아','박솔민','최도윤'];

for(let index = 0; index <= userNames.length-1; index++){
    if(userNames[index].indexOf('솔') != -1){
        console.log(userNames[index]);
    }
}

// 문제4: 2차원 배열의 모든 요소 출력하기
//초기 데이터
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];

for(let i = 0; i <= seatLayout.length-1; i++){
    for(let j = 0; j <= seatLayout[i].length-1; j++){
        console.log(seatLayout[i][j]);
    }
}

// 문제5: 배열의 중복 요소 제거하기

//초기 데이터
let numbers2 = [1,5,2,3,5,1,4,2];

//새로운 빈 배열 선언
let new_number2 = [];

for(let index = 0; index <= numbers2.length-1; index++){
    if(new_number2.indexOf(numbers2[index]) == -1){
        new_number2.push(numbers2[index]);
    }
}
console.log(new_number2);

// 문제6: 버블 정렬 구현하기
//초기 데이터
let numbers3 = [5,3,4,1,2];

//두 숫자를 바꾸기 위한 임시값 temp
let temp;

for(let index = numbers3.length-1 ; index >= 0 ; index--){
    for(let i=0; i <= index; i++){
        if(numbers3[i] > numbers3[i+1]){
            temp = numbers3[i];
            numbers3[i] = numbers3[i+1];
            numbers3[i+1] = temp;
        }
    }
}
console.log(numbers3);

// 문제7: 재고 관리 시스템

//초기 데이터
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];

//입력한 물품 이름, 수량, 인덱스 저장
let products_name = prompt("구매할 물품을 입력하세요: ");
let products_stock = Number(prompt("구매할 수령을 입력하세요: "));
let index = products.indexOf(products_name);

if(products.indexOf(products_name) != -1){
    if(stock[index] >= products_stock ){
        console.log(`구매 완료!`);
        stock[index] -= products_stock; // 재고 차감
    }
    else{
        console.log("재고가 부족합니다.");
    }
}

// 문제8: 영화 평점 시각화하기
//초기 데이터
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];

//별을 저장할 변수 starts2
let starts2 = "";

for(let index = 0; index <= movieNames.length-1; index++){
    for(let i =0; i <= movieRatings[index]-1; i++){
        starts2 += "★";
    }
    for(let i=0; i <= (10-movieRatings[index]-1);i++){
        starts2 += "☆";
    }
    console.log(movieNames[index], starts2);
    starts2="";
}

// 문제9: 좌석 예약 상태 표시하기
//초기 데이터
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석']; //초기 데이터

for(let index = 0; index <= seatStatus.length-1; index += 2){
    console.log(seatStatus[index], seatStatus[index+1]);
} // 추후에 HTML에 출력 + CSS로 표시

// 문제10: 주차 요금 정산하기
//초기 데이터
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420]

let carCharge = [];

/*요금 규정
 -기본 요금: 최초 30분까지 1,000원
 -추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
 -일일 최대 요금: 20,000원(아무리 오래 주차해도 20,000원을 초과할 수 없음)*/

 for(let index = 0; index<= carNumbers.length-1; index++){
    if(usageMinutes[index] <= 30){
        carCharge[index] = 1000; // 30분 초과하지 않았을 시 기본 요금만 부과
    }
    else{
        carCharge[index] = 1000 + (parseInt((usageMinutes[index]-30)/10) * 500); // 요금 계산하여 넣음
        if(carCharge[index] > 20000){ carCharge[index] = 20000; } // 요금이 2만원 초과시 2만원으로 수정
    }
    console.log(`차량 번호: ${carNumbers[index]} 주차한 시간: ${usageMinutes[index]} 주차 요금: ${carCharge[index]}`);
 } //추후에 HTML에 출력