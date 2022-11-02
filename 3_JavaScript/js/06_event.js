// 인라인 이벤트 모델 확인하기
function fnTest1(btn) {
    console.log(btn.style);

    // JS로 요소에 CSS 지정시
    // inline 형식으로 CSS 코드가 추가된다
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}



// 고전 이벤트 모델
// 요소가 가지고 있는 이벤트 리스너 속성(변수)에 
// 직접 함수(이벤트 핸들러) 대입
document.getElementById("btn1").onclick = function() {
    alert("버튼이 클릭됨");

    // 고전/표준 이벤트모델 장점
    // -> 이벤트 제거가 가능

    //  요소의 속성 중 on이벤트명 속성에 속성 대신 null을 대입하여
    //이벤트 삭제
    document.getElementById("btn1").onmouseout =null;
}

// 하나의 요소에 여러 이벤트 추가 가능
document.getElementById("btn1").onmouseover = function(){
    document.getElementById("btn1").style.background = "red";
}

document.getElementById("btn1").onmouseout = function(){
    document.getElementById("btn1").style.background = "white";
}


// 고전 이벤트 모델 단점
// -> 한 요소에 동일한 이벤트리스너에 대한 다수의 이벤트핸들러를 작성할 수 없다
// (마지막으로 대입된 이벤트 핸들러만 적용)
// -> 표준 이벤트 모델
document.getElementById("btn1").onclick=function() {
    alert("새로운 이벤트 처리 방법");
}



// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");
// btn.addEventListener("이벤트명", 함수);
btn2.addEventListener("click", function(){
    // 이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소(button)
    console.log(this);

    this.style.background = "hotpink";
    this.style.border = "3px solid red";
    this.style.display = "block";

});

// 고전 이벤트 모델 단점 보완 확인
btn2.addEventListener("click", function() {
    this.style.fontSize = "18px";
    this.style.fontWeight = "bold";
    this.style.fontFamily = "궁서";
});








// ------------------------------------------------------------------
document.getElementById("input1").addEventListener("keyup", function(){
    const div1 = document.getElementById("div1");
    div1.style.backgroundColor = this.value;
});