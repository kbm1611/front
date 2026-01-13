// 메모리 설계
/*
    표 = 배열, 행 = 레코드 = 객체 1개, ㅍ제목 = 속성명 , 셀[한칸] = 데이터;
  */
const lists = [
    {code : 1, "날짜" : "2026-06-29", "항목" : "점심식사", "금액" : 9000},
    {code : 2, "날짜" : "2026-06-29", "항목" : "교통비", "금액" : 1500},
]; //화면에는 보이지 않지만 내부적으로 각 객체/레코드 식별하는 식별코드 정의하면 좋다. <중복없는 데이터>

// [2] 기능 설계
/*
    (1)화면에 보이는 이벤트/행위 , (2)화면에 보이지 않는 이벤트/행위 찾기
    1.등록 처리 하는 기능 필요. - 등록 - create - C
       매개변수 : , 리턴값 : , 처리 : , 발동조건 : 
    2. 표에 출력 하는 기능 필요. - 출력 - read - R
       매개변수 : x , 리턴값 : x , 처리 : 전역배열에 저장된 모든 객체를 tr 구성하여 html 출력, 발동조건 : 등록 성공시

    참고1 : 함수/기능은 나눠서 따로 만드는게 좋다 = 유지보수, 나누는기준 C등록 R출력 U수정 D삭제
    참고2 : 배열은 전역변수를 사용한 이유는 서로 다른 함수들 간의 공유(같은 배열) 사용하기 위해
*/
// 추가 가능한 것들:
function register(){ console.log("등록성공"); //Create
    const dateInputdom = document.querySelector("#dateInput");
    const itemInputdom = document.querySelector("#itemInput");
    const sumInputdom = document.querySelector("#sumInput");

    let cnt = lists[lists.length-1].code + 1;
    let list = {code : cnt, "날짜" : dateInputdom.value, "항목" : itemInputdom.value, "금액": Number(sumInputdom.value) }; console.log(list);// 객체 설정
    lists.push(list); console.log(lists); // 생성한 객체 배열에 넣기
    alert("등록성공");
    print(); //HTML 출력 실행
} //Create end

// 3-2] 출력함수 = 특정 화면 새로고침 == 렌더링 == 데이터 변화가 있을때 다시 화면 새로고침
function print(){ //Read - 출력
    //1. 어디에 : tbody
    const inputareadom = document.querySelector("#inputarea"); //출력영역DOM
    //2. 무엇을 : 배열내 객체들을 <tr> 구성
    
    let html = ``; //출력하기 위한 html 변수 설정
    for(let index=0; index<=lists.length-1; index++){
        html += `<tr>
        <td>${lists[index].날짜}</td> <td>${lists[index].항목}</td> <td>${lists[index].금액.toLocaleString()}</td>
        </tr>`
    }

    //3. 출력 : 구성된 html 출력한다.
    inputareadom.innerHTML =html; //출력
} //Read end