// 객체이란? 서로 다른 자료/값들을 하나의 자료로 구성
// 객체종류? (1) 내가만든객체 { } (2) 남이만든객체 : console.   ,   doucument,
// 남이만든객체 장점 : < 라이브러리 > 미리 만들어진 함수/기능
// [1] document: JS회사에서 HTML 조작할때 사용하세요.
console.log( document ); // 현재 js가 포함하는 HTML 그 자체 < 객체 표현 >

// [2] .write(" ") : 
// 매개변수 : html 출력할문자열, 반환값 : X
document.write("[2] <h3> 내장객체 함수실행 </h3> ");

// [3] document.querySelector("CSS선택자") : JS에서 특정한 마크업 객체 반환함수
// 매개변수 : CSS선택자, 반환값 : 선택된마크업객체 또는 undefined
let div = document.querySelector("div"); // 문서(HTML)에서 div 마크업 객체 가져오기
console.log(div);

let box2 = document.querySelector(".box2"); // 함수 결과가 box2 변수에 저장된다.
//let box2 = 3+3
console.log( box2 );

let box3 = document.querySelector("#box3");
console.log( box3 );

// [4] document.querySelectorAll("CSS선택자") : JS에서 특정한 마크업(들 객체) 배열로 반환함수
let div2 = document.querySelectorAll("div");
console.log( div2 ); // html에 존재하는 모든 div

// [5] .innerHTML : 선택된 DOM객체내 마크업 사이에 텍스트를 호출
let html1 = document.querySelector("#box3").innerHTML
console.log( html1 ); // box 3
document.querySelector("#box3").innerHTML = "박스3"; // 마크업 사이에 텍스트 수정
// .value : 선택된 DOM객체내 마크업 value 속성값 호출
// [6] 버튼 클릭시 입력받은 값 가져오는 함수
function func1(){ // 매개변수x
    let value = document.querySelector(".myInput").value;
    console.log(value + "입력 했군요.");
    document.querySelector(".myInput").value= ""; //공백으로 초기화
} // 반환값 x
//JS에서 실행하는 방법: let 결과 = 함수명( 인자값 );
//HTML에서 실행하는 방법 : <마크업명 이벤트속성명 = "함수명( 인자값 )" />

function func2(){ //주의할 점: 입력상자(input/seclect/textarea등) 가능하다.
    document.querySelector(".title").innerHTML = "JS에서 넣어준텍스트";
}
// [7] .style = "CSS속성명: CSS속성값"
function func3( ){
    // 한 명령어(한줄)에 .(도트/접근연산자) 가 많아지면 중간에 변수활용
    let title2 = document.querySelector(".title2");
    title2.style = "color: red;";
    title2.style.backgroundColor = "blue"; // CSS는 -(하이픈)불가능 하므로 카멜표기법
} // 카멜표기법이란? 낙타의 등 모양처럼, mycar -> myCar, background-color -> backgroundColor