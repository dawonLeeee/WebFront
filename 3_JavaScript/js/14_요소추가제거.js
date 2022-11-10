
const add = document.getElementById("add");
const container = document.getElementsByClassName("container")[0];


add.addEventListener("click", function(){

    // div요소 생성
    const div = document.createElement("div");
    // div에 row클래스 추가 코드
    div.classList.add("row");


    // input 요소 생성
    // * 요소에 속성을 추가하거나 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명", "속성값");
    // <-> 요소.removeAttribute("속성명") : 속성 제거
    const input = document.createElement("input");
    input.classList.add("in");
    input.setAttribute("type", "number");


    // span요소 생성
    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerHTML = "&times;";

    // 클릭된 x버튼의 부모요소(div.row)를 삭제
    span.addEventListener("click", function(){
        // 요소.remove() : 해당 요소를 제거
        this.parentElement.remove();
    });

    // div > input, span이 들어가도록 조립
    // div.append(input);
    // div.append(span);
    div.append(input, span);

    //.container 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus();

    
});


// 여기에 for문으로 .remove클래스에 addEventListener("click")으로
// 삭제이벤트 추가
// ---> 안됨. 왜?
// 처음 HTML문서 해석시  remove라는 클래스를 가진 요소가 존재하지 않기 때문에
// 아래 이벤트 동작 추가 구문에 아무 요소에서 적용되지 않음

// * 처음부터 있던 HTML 요소 == 정적 요소
// * JS로 추가되는 요소 == 동적 요소



document.getElementById("calc").addEventListener("click", function(){

    const inputIn = document.getElementsByClassName("in");
    let sum = 0;
    for(let item of inputIn){
        sum  = Number(sum) + Number(item.value);
    }
    alert("합계 : " + sum);
});