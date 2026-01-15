//회원정보 배열 선언;
let memberList = [];

//회원가입 시 - C
function signup(){
    const id = document.querySelector(".signId").value;
    const pw = document.querySelector(".signPw").value;

    /******** localStorage 활용하여 memberList 관리 ********/
    let memberList = localStorage.getItem("memberList"); // 로컬저장소에서 가져오기
    if( memberList == null){ // 자료가 없으면
        memberList = []; // 새로운 배열 선언
    }else{ // 자료가 있으면
        memberList = JSON.parse( memberList ); //타입 변환
    }

    let no = memberList.length >= 1 ? memberList[memberList.length-1].no + 1 : 1;

    let user = {'no' : no, 'id' : id, 'pw' : pw};
    memberList.push(user);

    //로컬 저장소에 저장
    localStorage.setItem('memberList', JSON.stringify(memberList) );

    alert("회원가입 성공!");
}

//로그인 시 - R
function login(){
    const id = document.querySelector(".loginId").value;
    const pw = document.querySelector(".loginPw").value;


    let memberList = localStorage.getItem("memberList"); // 로컬저장소에서 가져오기
    if( memberList == null){ // 자료가 없으면
        memberList = []; // 새로운 배열 선언
    }else{ // 자료가 있으면
        memberList = JSON.parse( memberList ); //타입 변환
    }

    memberList = JSON.parse( memberList );

    for( index =0; index <= memberList.length-1; index++ ){
        if((id == memberList[index].id) && (pw == memberList[index].pw)){
            alert("로그인 성공");
            return;
        }
        else{ alert("동일한 회원정보가 없습니다. 로그인실패"); return; }
    }
}
//전역변수 -> 로컬저장소로 바뀜