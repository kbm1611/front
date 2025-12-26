//1.숫자
100 // 숫자 형
console.log( 100 ) // 1. 소괄호부터 읽는다.
console.log(typeof 150) // 2. typeof 자료
// 100 : 숫자형, "100" : 문자형
console.log(3.37) // 3. 컴퓨터는 소수점 모른다. <부동소수점>

// 2. 문자
console.log( "안녕1" ); // 1) " " 으로 감싼 자료
console.log( '안녕2' ); // 2) ' ' 으로 감싼 자료
console.log( `안녕3`); // 3) 키보드 tab 키 위에 ` (백틱 기호)
// 4~7) 이스케이프(제어)문자
console.log("\\안녕4"); // 4) 엔터 위에 \(원화기호), 기능을 담당하기에 표현할려면 두번입력해야 한다.
console.log("\n안녕5"); // 5) \n 일때 줄바꿈 처리
console.log("\t안녕6"); // 6) \t 일때 들여쓰기 (tab)
console.log("\"안녕\""); // 7); \" 또는 \' 일때 큰 따옴표, 작은 따옴표 출력 가능
// 8) 템플릿 리터럴 : 문자열과 변수/수식/함수를 조합할 때
let 키 = 170;
console.log("나의 키 : " + 키); // 8) "문자열" + "변수명" -> 문자 + 숫자 = 문자
console.log(`나의 키 ${키}`); // 9) 방법2 : `문자열 ${ 변수명/수식/함수호출 }`
// 10) 문자 : 한글자, 문자열 : 두글자이상, *문자열은 배열이다.
console.log("안녕하세요".length); // 10)문자열 길이 반환
console.log(`안녕하세요`[0]); // 11) 안[0] 녕[1] 하[2] 세[3] 요[4] -> 순서번호는 인덱스라고 함.

// 3. 논리 : 제어문( 조건문/반복문 ) 자주 사용된다.
console.log( true );
// 논리형을 쓰는 이유 -> 경우의 수가 2개인 경우, 한글보다 메모리 용량을 덜 차지하기 때문에.

// 4. 특수
let var1 ; // 변수를 선언하고 초기(처음)에 값을 대입(=) 하지 않았다. 초기값이 없다.
console.log( var1 ) // 변수는 존재하지만 정의는 되지 않았다. -> undefined
let var2 = null; // null vs 0 vs " " vs undefined 다 다른 거!
console.log(  var2 ); // 2) *null*

// 5. 배열 : 여러 개의 자료들을 *순서*대로 저장하는 *자료*
let ary1 = ['봄', '여름', '가을', '겨울'];
    // 1) let ary1 : 변수명 (선언/만들기)
    // 2) =  대입 , 오른쪽 자료를 왼쪽에 넣기
    // 3) '봄', '여름' : 자료
    // 4) [ ] , 배열
// 6. 인덱스 : 배열내 저장된 순서번호 *0번시작*, 중간에 삭제되더라도 한칸씩 당겨진다.
console.log( ary1[0] ); // 변수명[인덱스]
console.log( ary1[1] ); // 여름
console.log( ary1[2] );
console.log( ary1[3] );
console.log( ary1[4] ); // undefined, 4 인덱스는 존재하지 않는다.

//7. 배열내 자료(요소) : 변수명[수정할인덱스] = 새로운값
ary1[0] = 'SPRING';
console.log( ary1[0] );

// 8. 배열내자료(요소) 추가 : 변수명.push( 새로운 값 ), 마지막 인덱스 +1에 추가됨.
ary1.push('SPRING2'); console.log( ary1 );
// ;세미클론이란? 한 문장의 명령어 마침 뜻, 한 줄에 문장이 하나이면 생략가능, 한 줄에 두 문장 이상이면 세미콜론 필수

// 9. 배열내 자료(요소) 삭제 : 변수명.splice( 삭제할 인덱스, 1)
ary1.splice(2, 1); // 2번 인덱스 부터 1개 삭제
console.log( ary1 );

// 10. 배열내자료(요소) 중간 삽입 : 변수명.splice( 삽입할 인덱스, 0, 자료)
ary1.splice(2, 0, "가을");
console.log( ary1 );

// 11. 배열내자료(요소) 값 찾기 : 변수명.indexof( 찾을값 ) , 찾을값이 존재하면 인덱스 반환 없으면 -1
let result = ary1.indexOf( '가을' ); console.log( result );

// 12. 배열내자료 개수 반환 : 변수명.length , 배열내 자료 총개수 반환
console.log(ary1.length) // 5

// 형변환, 다른 프로그래밍/환경 통신간의 데이터 변환 다수 발생
// let input = prompt("숫자 : "); // prompt 무조건 문자열로 반환한다.
let input = 100;
console.log(typeof(input)); // 100 -> string(문자열)
input = input * 1;          // 방법1  
console.log(typeof input); // " 100" * 1 --> 100 number(숫자)
console.log( Number(input)); // 방법2

console.log( Number("100"));    //"100" -> 100
console.log( parseInt("100"));   //"100" -> 100
console.log( parseFloat("3.14"));    // "3.14" -> 3.14
console.log( String(100));   // 100 -> "100"
console.log(100 + ""); //이것도 문자로 바뀜
console.log(Boolean("true"));   //"true" -> true