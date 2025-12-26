//1] 산술연산자 : + 더하기 - 빼기 * 곱하기 / 나누기 % 나머지 parseInt(10/3)
console.log( 10 + 3 ); // 13
console.log( 10 - 3 ); // 7
console.log( 10 * 3 ); // 30
console.log( 10 / 3 ); // 3.3333333335
console.log( parseInt(10/3) ); // 몫 3
console.log( 10 % 3 ); // 나머지 1

// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
let Kor = Number(prompt(`국어`));
let Eng = Number(prompt(`영어`));
let Math = Number(prompt(`수학`));
let sum = Kor + Eng + Math;
let avg = sum / 3;
console.log(`result sum : ${sum}, avg : ${avg}`);

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let radius = Number(prompt(`반지름`));
console.log(`result2 : ${radius*radius*3.14}`);

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let a = parseFloat(prompt(`실수1`));
let b = parseFloat(prompt(`실수2`));
console.log(`result3 : ${a/b*100}%`);

// 2] 비교연산자 : >초과 <미안 >=이상 <=이하 ==(값)같다 !=(값) 같지않다 ===(값과타입)같다 !==(값과타입)같지않다.
// 비교 결과는 true or false

// 3] 논리연산자 : 비교연산자 2개 이상일 때
// && 이면서 이고 면서 그리고 모두, 모두 참이면 참, 초등학생이 사탕이랑 초콜릿 먹을래
// || 이거나 거나 또는 하나라도, 하나라도 참이면 참, 초등학생이 사탕이나 초콜릿 먹을래
//! : 부정 반대 not조건, true -> false, false -> true
// 주의할점 : 50 < 점수 < 100 표현식이 없다, ---> 점수 > 50 && 점수 < 100

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let c = parseInt(prompt(`정수1`));
console.log(Boolean(`result4 : ${c%2==1}`));

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let d = parseInt(prompt(`정수2`));
console.log(Boolean(d%7==0));

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let id = prompt(`ID`);
let pw = prompt(`PW`);
console.log(Boolean(id == "admin") && Boolean(pw == "1234"));

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let e = parseInt(prompt(`정수3`));
console.log(Boolean(e%2==1) && Boolean(e%7==0));

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let fir_score = parseFloat(prompt(`1차 점수`));
let sec_score = parseFloat(prompt(`2차 점수`));
total_score = fir_score + sec_score
let result = total_score >= 150 ? "합격" : "불합격"
console.log( result );

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name1 = prompt(`이름1`);
let name2 = prompt(`이름2`);
let result2 = name1=="유재석"?'${이름}(방장)' : '${이름}';
let result3 = name2=="유재석"?'${이름}(방장)' : '${이름}';
console.log( result2 );
console.log( result3 );