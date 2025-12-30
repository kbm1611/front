// //문제1) 계좌 배열 기반 ATM 출금 시스템

let accountNumberList=['111-222','333-444','555-666'];
let balanceList=[50000,120000,30000];

let account = prompt("계좌번호를 입력하세요");
let amount = Number(prompt("출금 금액을 입력하세요."));

if(accountNumberList[0] == account || accountNumberList[1] == account || accountNumberList[2] == account ){

    let index = accountNumberList.indexOf(account); console.log(index);

    if(amount < 10000){
        console.log('출금 금액이 너무 작습니다.');
    }
    else if(amount % 10000 != 0){
        console.log('출금 단위 오류입니다.')
    }
    else if((amount + 1200) > balanceList[index]){
        console.log('잔액이 부족합니다.');
    }
    else{
        console.log('출금 완료')
    }
}
else{
    console.log('존재하지 않는 계좌입니다.');
}

