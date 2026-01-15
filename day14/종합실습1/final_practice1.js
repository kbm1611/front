/* 만들어야 하는 기능: 제품 등록 기능, 제품 삭제 기능, 제품 수정 기능
    1.제품 등록 기능: 카테고리, 제품명, 제품가격, 이미지 파일을 등록버튼 누를 시 표에 등록
    2.제품 삭제 기능: 해당 제품 즉시 삭제 -> 어떻게 없앨 것인가? 삭제 버튼 누를 시 해당 cnt를 알아내어 해당 cnt를 객체에서 삭제시키면 될 일. 그 이후에는? 번호를 하나씩 자동으로 당겨지겠지
    3. 제품 수정 기능: prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 함.
*/

/*현재 문제1: 삭제 시 코드가 그대로 남아있어 순서가 안 지켜짐! -> 따라서 삭제연산 시 코드번호를 재 정렬해주는 알고리즘이 필요함. */
/*현재 문제2: 처음 들어간 데이터에는 코드를 어떻게 넣을 것인가?*/

/* [1] 메모리 설계, 표/테이블 = 배열, 표제목 = 속성명, 행/가로 1개 = 객체 1개*/
/*식별 코드 1개 이상 필요(주민번호, 사번, 학번 등) -> 중복 없어야함!*/
//객체가 다수 일때는 배열을 사용.
const categoryAry = [ { "ccode" : 1, "category" : "음료" }, {"ccode" : 2, "category" : "과자"}, {"ccode" : 2, "category" : "사탕"} ];
const productAry = [ //기본 아이템 목록(전역)
    {pcode : 1, "img" : "https://placehold.co/100x100", "ccode" : "1", "name" : "코카콜라", "price": 1000, "date":"2025-06-17"},
    {pcode : 2, "img" : "https://placehold.co/100x100", "ccode" : "2", "name" : "새우깡", "price": 1000, "date":"2025-06-17"},
    {pcode : 3, "img" : "https://placehold.co/100x100", "ccode" : "1", "name" : "칠성사이다", "price": 1000, "date":"2025-06-20"},
    {pcode : 4, "img" : "https://placehold.co/100x100", "ccode" : "2", "name" : "허니버터칩", "price": 2000, "date":"2025-06-18"},
];

// [2] 기능/함수 설계
// 1. 함수/기능 개수 , 등록[C]기능, 출력[R]기능, 수정[U]기능, 삭제[D]기능
// 2. 등록함수 , 매개변수 : X, 리턴값 : X, 처리 : 입력받은 4개와 현재시스템날짜를 객체 만들어서 배열 저장, 실행조건: <등록> 클릭하면
// 3. 출력함수 , 매개변수 : X, 리턴값 : X, 처리 : 배열내 모든 객체들을 tr 구성하여 출력 , 실행조건 : 1.페이지열렸을때 2. 등록 성공 3.삭제 성공 4.수정 성공
// 수정함수 , 매개변수 : pcode(수정할대상), 리턴값 : X, 처리 : 수정할 값 PROMPT 받아서 매개변수의 제품 구성 -> 알고리즘을 짤 때 육하원칙 하에 하는 것이 좋다.
//      실행조건 : <수정> 클릭
// 삭제함수 , 매개변수 : pcode(수정할대상), 리턴값 : X, 처리 : 매개변수의 제품 삭제
//      실행조건 : <삭제> 클릭

const year = new Date().getFullYear(); // 현재 연도
const month = new Date().getMonth()+1; // 현재 월
const day = new Date().getDate(); // 현재 일
const date = `${ year }-${ month < 10 ? "0" + month : month }-${ day < 10 ? "0" + day : day }` // 현재 날짜(date) : 년도-월-일

productPrint() //출력함수 1회 실행

function productRegister(){ /* 등록 함수 - C */
    const nameDom = document.querySelector("#productName");
    const priceDom = document.querySelector("#productPrice");
    const imgfiledom = document.querySelector("#imgfile");
    const catagoryDom = document.querySelector("#catagory");
    
    const name = nameDom.value;
    const price = priceDom.value;
    const category = catagoryDom.value;

    const image = imgfiledom.files[0];

    //유효성검사1. = 필요 없거나 잘못된 데이터 검증
    if( category == "disabled"){ alert("카테고리를 선택하세요.!"); return; } // 함수종료 [ 저장실패 ]
    //유효성검사2. , return 함수종료 : 아래 코드가 실행안됨.
    if ( name == "" || price == "" ){ alert("제품명과 가격은 필수입력 입니다."); return; }
    let imgUrl = "https://placehold.co/100x100"; //기본 이미지 Url

    if(image){
        imgUrl = URL.createObjectURL(image);
    } //이미지 파일이 존재한다면


    let cnt = productAry[productAry.length-1].pcode + 1;
    let product = {
        pcode : cnt,
        "img" : imgUrl,
        "ccode" : category,
        "name" : name,
        "price": Number(price),
        "date": date
    };
    productAry.push(product);
    alert("등록성공");
    productPrint();
}

function productPrint(){ /* 출력 함수 - R */
    const inputarea = document.querySelector("tbody");

    for(let index = 0; index <= productAry.length-1; index++){
    productAry[index].pcode = index+1;
   } console.log(productAry); // pcode를 재정렬하는 알고리즘
    
    let html = ``;
    for(let index = 0; index <= productAry.length-1; index++){
        const product = productAry[index];

        let category = '';
        for(let index = 0; index <= categoryAry.length-1; index++){
            if( product.ccode == categoryAry[index].ccode ){
                category = categoryAry[index].category; // 찾은 카테고리 명을 넣음
                break;
            }
        }

        html += 
        `<tr>
            <td><img src="${product.img}" /></td> <td>${category}</td> <td>${product.name}</td>
            <td>${product.price.toLocaleString()}</td> <td>${product.date}</td>
            <td>
                <button class="deleteBtn" onclick="productDelete(${Number(product.pcode)})">삭제</button>
                <button class="modifyBtn" onclick="productUpdate(${Number(product.pcode)})">수정</button>
            </td>
        </tr>`
    }

    inputarea.innerHTML = html;
}

function productDelete(pcode){ /* 삭제 함수 - D */ console.log(pcode);

    for(let index = 0; index <= productAry.length-1; index++){
        if( pcode == productAry[index].pcode ){
            productAry.splice(index, 1); //삭제 함수 실행, 인덱스는 pcode-1
            break;
        }
    }

    productPrint(); //삭제 후 새로운 화면 출력(렌더링)
}

function productUpdate(pcode){ /* 수정 함수 - U */
    let newName = prompt("새로운 제품명 입력: ");
    let newPrice = Number(prompt("새로운 제품명 가격 입력: "));

    for(let index=0; index <= productAry.length-1; index++){
        if( pcode == productAry[index].pcode ){
            productAry[index].name = newName;
            productAry[index].price = newPrice;
            productAry[index].date = date; //실시간 일자 = 수정일로 변경

            productPrint(); //수정 후 새로운 화면 출력(렌더링)
            break;
        }
    }
}






// //function deleteEmp(hcode) {
//     //1. pcode의 배열내 인덱스 찾기
//     for (let index = 0; index <= humanAry.length - 1; index++) {
//         if (hcode == humanAry[index].hcode) {
//             humanAry.splice(index, 1)

//             humanPrint();
//             break;
//         }
//     }
// }

