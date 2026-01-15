//회원정보 배열 선언;
let memberList = [];

//회원가입 시 - C
function signup(){
    const id = document.querySelector(".signId").value;
    const pw = document.querySelector(".signPw").value;

    let no = memberList.length >= 1 ? memberList[memberList.length-1].no + 1 : 1;

    let user = {'no' : no, 'id' : id, 'pw' : pw};
    memberList.push(user);
    localStorage.setItem('memberList', JSON.stringify(memberList) );
    alert("회원가입 성공!");
}

//로그인 시 - R
function login(){
    const id = document.querySelector(".loginId").value;
    const pw = document.querySelector(".loginPw").value;

    let memberList = localStorage.getItem('memberList');

    memberList = JSON.parse( memberList );

    for( index =0; index <= memberList.length-1; index++ ){
        if((id == memberList[index].id) && (pw == memberList[index].pw)){
            alert("로그인 성공");
            return;
        }
        else{ alert("동일한 회원정보가 없습니다. 로그인실패"); return; }
    }
}