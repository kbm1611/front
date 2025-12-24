//문제1
//프로그램에 필요한 변수 선언
let guest_name1; // 손님의 이름
let drink_name; // 원하는 음료
let order_amount; // 주문 수량
let calories; // 칼로리

//손님의 이름, 원하는 음료, 주문 수량 prompt()를 통해 입력 받음
guest_name1 = prompt("손님의 이름");
drink_name = prompt("원하는 음료");
order_amount = prompt("수량");
calories1 = 315; // 아메리카노 칼로리 입력

//출력
console.log("[주문 접수]")
console.log("이름")
console.log(guest_name1)
console.log("메뉴")
console.log(drink_name)
console.log("수량")
console.log(order_amount)
console.log("칼로리")
console.log(calories1)

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")

//문제2
//프로그램에 필요한 변수 선언 및 입력 받기
let guest_name2 = prompt("사용자의 이름")
let exercise_name = prompt("운동 종류")
let exercise_time = prompt("운동 시간(분 단위)")
let calories2 = exercise_time * 7 // 칼로리 계산

//출력
console.log("[운동 기록]")
console.log("이름")
console.log(guest_name2)
console.log("운동종류")
console.log(exercise_name)
console.log("운동시간")
console.log(exercise_time)
console.log("칼로리")
console.log(calories2)