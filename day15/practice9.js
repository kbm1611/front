//인사관리 대시보드js
const deptAry = [
    {deptcode : 1, Dept : "개발팀"}
]//개발부서 배열

const empAry = [
    {empcode : 1, img : "https://placehold.co/100x100", name : "김민준", dept : "개발팀", position : "신입 개발자"}
]//사원목록 배열

function deptPrint(){
    const deptbody = document.querySelector("#deptbody");

    for(let index = 0; index <= deptAry.length-1; index++){
    deptAry[index].deptcode = index+1;
   }

   let html = ``;

   for(let index = 0; index <= deptAry.length-1; index++ ){
    const dept = deptAry[index];

    html +=
    `<tr>
        <td>${dept.Dept}</td>
        <td>
            <button class="updateBtn" onclick="updateDept()">수정</button>
            <button class="deleteBtn" onclick="deleteDept()">삭제</button>
        </td>
    </tr>`
   }

    deptbody.innerHTML = html;
}

function deptAdd(){
    const newDeptDom = document.querySelector("#new-dept");
    const newDep = newDeptDom.value; 

    let deptcnt = deptAry[deptAry.length-1].deptcode + 1;
    let dept = {
        deptcode : deptcnt,
        Dept : newDep
    };
    deptAry.push(dept);
    deptPrint();
}

function updateDept(){
}

function deleteDept(){

}

function empPrint(){
    const empbody = document.querySelector("#empbody");

    for(let index = 0; index <= emptAry.length-1; index++){
    empAry[index].deptcode = index+1;
   }

   let html = ``;

   for(let index = 0; index <= empAry.length-1; index++ ){
    const emp = empAry[index];

    html +=
    `<tr>
        <td>${emp.img}</td>
        <td>${emp.name}</td> <td>${emp.dept}</td> <td>${emp.position}</td>
         <td>
            <button class="updateBtn" onclick="updateEmp()">수정</button>
            <button class="deleteBtn" onclick="deleteEmp()">삭제</button>
        </td>
     </tr>`
   }

    empbody.innerHTML = html;
}

function empAdd(){
    const nameDom = document.querySelector("#name");
    const name = nameDom.value;
    const positionDom = document.querySelector("#position");
    const position = positionDom.value;
    const deptDom = document.querySelector("#dept-drop");
    const dept = deptDom.value;
    const imgfileDom = document.querySelector("#image");
    const image = imgfileDom.files[0];

    let img = "https://placehold.co/100x100"; //샘플 이미지 설정

    if(image){
        img = URL.createObjectURL(image);
    } // 이미지 파일이 존재한다면

    let empcnt = empAry[empAry.length-1].empcode + 1;
    let emp = {
        empcode : empcnt,
        img : img,
        name : name,
        dept : dept,
        position : position,
    }
    empAry.push(emp);
    empPrint();
}

function updateEmp(){

}

function deleteEmp(){

}

function vacPrint(){
    
}

function vacSignUp(){

}

function vacCancle(){

}