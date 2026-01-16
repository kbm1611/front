/*
    [인터벌 : interval] : 간격/주기 뜻
        1. 시간적인 간격에 따라 특정 코드/함수 실행
        2. 사용법
            (1)
            setInterval( 함수명 , 밀리초 );
            - 함수명 : 함수명만 작성한, ( ) 생략한다.
            - 밀리초 : 1/1000초
*/
// [1]
let value = 0;
function Increase ( ){
    value = value + 1;
    const box1 = document.querySelector("#box1");
    box1.innerHTML = value;
}
// 특정한 시간 / 간격 마다
setInterval( Increase, 1000 ); //1초마다 Increase 증가

// [2]
function Clock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let time = `${hour} : ${minute} : ${second}`;
    const box2 = document.querySelector("#box2");
    box2.innerHTML = time;
}
setInterval( Clock, 1000);

// [3]
let time = 0;  // 현재 타이머의 시간(초)
let timerId;   // interval 객체를 저장하는 변수

function timerStart(){
    if(timerId == null ){
        console.log("타임 스타트");
        timerId = setInterval( timefunc , 1000);
    }
    else{
        console.log("이미 실행됨");
        return;
    }
    // timerId = setInterval( timefunc , 1000);
}
function timerStop(){
    console.log("타입 스탑");
    clearInterval( timerId ); // clearInterval ( 종료할interval객체 );
    timerId = null;
}

function timefunc(){
    time++;
    document.querySelector("#box3").innerHTML = time;
}
