//문제1) "초 단위 -> HH:MM:SS" 변환기(0패딩 포함)
let time = parseInt(prompt("정수(s)"));
hour = parseInt(time / 3600);
minute = parseInt((time % 3600) / 60);
second = (time % 3600) % 60;

hour = hour < 10 ? hour == 0 ? hour = "00" : hour = "0" + String(hour) : hour;
minute = minute < 10 ? minute == 0 ? minute = "00" : minute = "0" + String(minute) : minute;
second = second < 10 ? second == 0 ? second = "00" : second = "0" + String(second) : second;

console.log(`${hour}:${minute}:${second}`);

//문제2)"주차비 계산기"(올림 계산 + 최대 요금 + 심야 할인)

let entry_hour = prompt("입차 시");
let entry_minute = prompt("입차 분");
let exit_hour = prompt("출차 시");
let exit_minute = prompt("출차 분");

result_hour = exit_hour - entry_hour; // 출차 시 - 입차 시
result_minute = exit_minute - entry_minute; // 출차 분 - 입차 분
result_time = result_hour * 60 + result_minute; // 실제 걸린 시간(분)

let charge = 0; // 요금
charge = result_time > 30 ? 2000 + (parseInt((result_time-30) / 10) * 500) : 2000;
charge = charge > 20000 ? 20000 : charge; // 2만원 초과인지 확인

charge = entry_hour >= 22 ? (charge * 0.8) : charge;// 심야시간 시 20퍼 할인

console.log(`${parseInt(charge)}원`); // 최종 금액