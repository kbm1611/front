getBoard();
function getBoard(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse( boardList ) }

    for(let index=0; index <= boardList.length-1; index++){
        const obj = boardList[index];

        if(obj.no == selectNo){
            document.querySelector('#titleInput').value = obj.title;
            document.querySelector('#contentInput').value= obj.content;
        }
    }
}

function boardUpdate(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse( boardList ) }

    for(let index=0; index <= boardList.length-1; index++){
        const obj = boardList[index];

        if(obj.no == selectNo){
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;

            localStorage.setItem('boardList', JSON.stringify(boardList) );
            alert('수정 완료');
            location.href=`testView.html?no=${selectNo}`;
        }
    }
}