/* 문제 6: 배열 요소의 합계와 평균 구하기 : 다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.*/
// sum = sum + scores[0]; // 기존변수 = 기존변수 + 새로운값   [vs]   기존변수 += 새로운값   < 누적합계 >
// sum = sum + scores[1];
// sum = sum + scores[2];
// sum = sum + scores[3];
// sum = sum + scores[4];
// 반복되는코드 : sum = sum + 
// 반복되지 않는 코드 : (1) let sum = 0; (2) console.log() (3) 85 92 78 65 95
// 반복되지 않는 코드 패턴 : (1) x (2) x (3) 인덱스가 0부터 마지막인덱스까지 = 0부터 배열.length-1 까지 1씩증가
// 1.초기값 : let index = 0;        // 2.조건식 : index<=scores.length-1;
// 3.증감식 : index++;              // 4.실행코드 : sum = sum + scores[index]
let scores = [85, 92, 78, 65, 95]; 
let sum = 0; // let 이란? 변수의 선언/만들기
for( let index = 0 ; index <= scores.length - 1 ; index++ ){ 
    sum += scores[index]; 
} // for end 
console.log( ` 총점 : ${ sum } , 평균 : ${ sum / scores.length }` );

/* 문제 7: 특정 조건에서 반복문 탈출하기 (break) : 점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오. 출력 예시: 100점 만점자를 찾았습니다!*/
let scores2 = [77, 82, 100, 54, 96];
for( let index = 0 ; index <= scores2.length - 1 ; index++ ){
    if( scores2[ index ] == 100 ){ 
        console.log( "100점 만점자를 찾았습니다!" ); 
        break; // 가장 가까운 반복문 탈출 
    } // if
} // for end 
// break 만나면 여기로 흐름 이 이동된다.

/*문제 8: 특정 조건 건너뛰기 (continue : 증감식으로 이동 ) : 점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.*/
let scores3 = [90, 45, 72, 88, 59, 100];
for( let index = 0 ; index <= scores3.length - 1 ; index++ ){
    if( scores3[index] < 60 ){ continue; } // 가장 가까운 반복문의 증감식( index++ ) 으로 이동!
    console.log( scores3[index] );
} // for end 

/*문제 9: 배열에서 특정 값의 개수 세기 : 다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.*/
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
let count = 0; // 개수를 저장하는 변수 선언
for( let index = 0 ; index <= bloodTypes.length - 1 ; index++ ){
    if( bloodTypes[ index ] == 'A' ){ count += 1 ; }
} // for end 
console.log( count );

/*문제 10: 학생 점수 시각화하기  , document.write("") : JS에서 HTML 으로 출력 하는 함수*/
let nameArray = ['유재석', '강호동', '신동엽'];
let scores4 = [92, 86, 72];
// (1) 이름 출력 
let html = ``; // html 마크업들과 데이터들을 저장할 변수 
for( let index = 0 ; index <= nameArray.length - 1 ; index++ ){
    html += nameArray[ index ]  // 0부터 마지막인덱스까지 1씩증가 출력한다.
    let b = parseInt( scores4[index] / 10 ) ; // (4) 점수의 몫 구하기 , 몫 만큼 검은별 , parseInt( 값 / 수 ); 
    for( let i = 1 ; i <= 10 ; i++ ) { // 몫 만큼 검은동그라미 출력하기
        if( i <= b ){ html += "●"; } // ㅁ+한자키 
        else{ html += "○"; }
    } // for end 
    html += "<br/>"; // 학생이 바뀌면 줄바꿈처리 console : \n , HTML : <br/>
} // for end 
document.write( html );