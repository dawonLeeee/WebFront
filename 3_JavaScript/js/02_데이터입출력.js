
// innerHTML로 읽어오기(요소 내부 내용(태그, 속성, 내용)을 얻어와 문자열로 반환)
function getInnerHtml() {
    
    // html 문서 내에서 id 속성값이 "test1"인 요소를 얻어와 
    // 상수형 변수 t1에 저장
    const t1 = document.getElementById("test1");

    // 브라우저 콘솔에 출력
    console.log(t1.innerHTML);

}

// innerHTML로 변경하기(태그, 속성이 해석됨(HTML Converter 이용))
function setInnerHtml() {
    const t1 = document.getElementById("test1");
    t1.innerHTML = "<b style='color:red'>변경된 <br><br> 내용입니다</b>";
}



function add() {
    const area1 = document.getElementById("area1");
    
    // area1 요소의 이전 내용에 새로운 내용을 누적
    // area1.innerHTML += '<div class="area1-box"></div>'; <-- 이건 잘 나오는데
    area1.innerHTML += document.getElementsByClassName("area1-box")[0].outerHTML; //<--이건 왜 이상하게 나올까요..?
}


const t2 = document.getElementById("test2");

// innerText로 읽어오기
function getInnerText1() {
    // console.log()빨리 쓰는법 : clg + enter
    // 단, JS ES6 snippet 필요
    console.log(t2.innerText);
    console.log(t2.innerHTML);
}

// innerText로 변경하기
function setInnerText1() {
    t2.innerText = "<p class='red'>변경된 내용입니다</p>";
}


function fnConfirm() {
    // console.log(window.confirm("맛있는 점심을 먹을건가요?")); // true/false 반환확인

    //조건문(if, switch) 작성법은 Java와 동일
    if(confirm("배경색을 분홍색으로 바꾸겠습니까?")) {
        document.getElementById("confirmTest").style.backgroundColor='pink';
    } else {
        document.getElementById("confirmTest").innerHTML="싫어<br>분홍색 할래";
        document.getElementById("confirmTest").style.backgroundColor='hotpink';
    }
    
}


function fnPrompt() {
    const temp = window.prompt("변경할 버튼명을 입력하세요");
    if(temp != null) {document.getElementById("promptTest").innerText = temp; }

}