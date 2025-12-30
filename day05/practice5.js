// 문제1: 배열에서 최댓값 찾기
let numbers = [23, 5, 67, 12, 88, 34];
let max_num;
for(let index = 0; index <= numbers.length-1; index++){
    if(numbers[index] >= numbers[index-1]){ max_num = numbers[index] }
}
console.log(max_num);
// 문제2 : 별 찍기(기본 역삼각형)
// 문제3: 배열에서 특정 문자 찾기(break 활용)
// 문제4: 2차원 배열의 모든 요소 출력하기
// 문제5: 배열의 중복 요소 제거하기
// 문제6: 버블 정렬 구현하기
// 문제7: 재고 관리 시스템
// 문제8: 영화 평점 시각화하기
// 문제9: 좌석 예약 상태 표시하기
// 문제10: 주차 요금 정산하기