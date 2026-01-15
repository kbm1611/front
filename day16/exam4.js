/*
    [쿼리스트링] : 페이지 이동(요청)간의 데이터 전달
            1. URL ? 변수명 = 값
                http://naver.com ? name = 유재석
            2. 주로 페이지 이동할 페이지에서 사용할 식별 데이터
                URL ? 식별키 = 식별값
            3. 여러개 가능
                URL ? 식별키 = 식별값 & 식별키 = 식별값
            4. 현재 주소상의 쿼리스트링 값 가져오기
                new URLSearchParams( location.search ).get( 변수명 );
            5. 전달하는 방법
                1] HTML : <a href="exam4.html"> 이동1 </a>
                2] JS : location.href = "이동할HTML파일명 ? 변수명 = 값";
            */


// [1] 주소(URL) 상의 쿼리스트링(매개변수)값
const param = new URLSearchParams(location.search).get('변수명');
const name = new URLSearchParams( location.search ).get("name");
console.log(name);

// [2] 이동함수
function 이동함수(){
    location.href = "exam4.html?name=강호동";
}