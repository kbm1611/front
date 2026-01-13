// [1] "안녕하세요" 5번 출력하세요.
console.log( "안녕하세요" );
console.log( "안녕하세요" );
console.log( "안녕하세요" );
console.log( "안녕하세요" );
console.log( "안녕하세요" );
// [2] 반복되는 코드, 반복되지 않는 코드
console.log( 1 );
console.log( 2 );
console.log( 3 );
console.log( 4 );
console.log( 5 );
// 문제점 : 반복수가 늘어나면 코드도 같이 늘어난다. < 비효율적 >
// 1. for문 사용하여 쉽게 반복가능.
// for문 요소 : 초기값, 조건문, 증감식, 실행문 -> 참일 때 실행
for( let 반복변수 = 1 ; 반복변수 <= 5 ; 반복변수 = 반복변수 +1 ){
    console.log( 반복변수 );
} // for end 

// [3] 1부터 5까지 총합계 구하시오.
let 총합계 = 0; // 총합계 저장하는 변수
총합계 += 1; // [vs] 총합계 = 총합계 + 1
총합계 += 2;
총합계 += 3;
총합계 += 4;
총합계 += 5;

let sum = 0;
for( let i = 1 ; i <= 5 ; i++ ){    sum += i;  }

// [4] 구구단 2단 전체 출력하시오.
for( let 곱 = 1 ; 곱 <=9 ; 곱++ ){
    console.log( `2 X ${ 곱 } = ${ 2 * 곱 }`);   // ? 자리에 반복변수를 넣어준다.
}

// [5] 배열 과 반복문 관계 : 배열내 저장된 자료들은 인덱스가 존재한다. *인덱스란? 배열내 저장된 자료들의 순서번호 *0번시작 , 1씩증가 
let ary = [ ]; // 빈배열 생성
for( let count = 1 ; count <= 3 ; count++ ){ let d = prompt( "값 : "); ary.push( d );  }

// 배열내 모든 자료들을 하나씩 출력
for( let index = 0 ; index <= ary.length - 1 ; index++ ){ console.log( ary[index] ); }