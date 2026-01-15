getBoard();
function getBoard(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse(boardList); }

    for( let index = 0; index <= boardList.length-1; index++){
        const obj = boardList[index];
        if( obj.no == selectNo ){
            document.querySelector("#title").innerHTML = obj.title
            document.querySelector("#content").innerHTML = obj.content;
            return;
        }
    }
}

function boardDelete(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse(boardList); }

    for( let index = 0; index <= boardList.length-1; index++){
        const obj = boardList[index];
        if( obj.no == selectNo ){
            const confirm = prompt("비밀번호 입력");
            if(obj.pwd == confirm){
                boardList.splice(index, 1);
                localStorage.setItem('boardList', JSON.stringify(boardList) );
            } else{
                alert("삭제 실패 : 비밀번호 불일치")
            }
        }
    }
}

function boardUpadteView(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse(boardList); }

    for( let index = 0; index <= boardList.length-1; index++){
        const obj = boardList[index];
        if( obj.no == selectNo ){
            const confirm = prompt("비밀번호 입력");
            if(obj.pwd == confirm){
                location.href = `update.html?no=${selectNo}`
            } else{
                alert("수정 불가 : 비밀번호 불일치")
            }
        }
    }
}