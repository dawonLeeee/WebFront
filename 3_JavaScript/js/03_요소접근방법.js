// id로 접근하기
function fnTest1() {

    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor;

    if(bgColor == 'red') {
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }
}




function fnTest2() {
    // 요소 여러 개를 접근하는 경우 배열로 반환
    const arr = document.getElementsByClassName("div2");

    arr[0].style.backgroundColor = "red";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "green";


    // java와 for문 형식 같음
    for(let i = 0; i < arr.length; i++) {
        arr[i].innerText = (i+1) + "번재 요소입니다.";
    }
}


//태그명으로 접근하기
function fnTest3() {

    // 문서 내에 존재하는 모든 li 요소를 얻어와 배열 요소로 반환
    const arr = document.getElementsByTagName("li");

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;

        arr[i].style.backgroundColor = "rgb(100," + num + ",100)";
    }
}


function fnTest3() {

    // 문서 내에 존재하는 모든 li 요소를 얻어와 배열 요소로 반환
    const arr = document.getElementsByTagName("li");

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;

        arr[i].style.backgroundColor = "rgb(100," + num + ",100)";
    }
}



// name 속성으로 접근하기
function fnTest5() {
    // name 속성값이 "hobby"인 요소를 얻어와 배열로 얻어옴
    const hobby = document.getElementsByName("hobby");
    // console.log(hobby);

    let str = "" // 체크박스의 값을 누적
    let count = 0;

    for(let i = 0; i < hobby.length; i++) {

        //.checked 속성
        // 해당 요소가 체크되어 있다면 true, 아니면  false
        // radio, checkbox에서만 사용 가능
        if(hobby[i].checked) { // 체크된 경우
            str += hobby[i].value + " ";
            count++;
        }
    }

    if(result5 != ""){ // 체크된 경우
        str = count + "개가 선택되었습니다. <br><br>" + str;
        document.getElementById("result5").innerHTML = str;
    } else {
        document.getElementById("result5").innerHTML = count + "개가 선택되었습니다. <br><br>" + "<p>당신은 취미가 없나요?</p>";
        
    }
    

}



// CSS 선택자로 접근하기
function fnTest6() {
    // id 속성값이 "cssTest"인 요소를 1개 선택
    const arr = document.querySelector("#cssTest");
    arr.style.border = "3px solid green";

    // document.querySelector("#cssTest div").style.backgroundColor = "gold";

    // 선택자에 맞는 모든 요소 선택해 배열 형식으로 반환
    // document.querySelectorAll("#cssTest > div").style.backgroundColor="blue";

    for(let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }
}





//엔터키가 입력되었을때
function inputEnter() {

    // 키보드 입력 과정
    // 키 누름 -> keydown이벤트 -> input태그에 입력
    //  -> keypress -> (손을 떼면)keyup

    // console.log(window.event.key); // 현재 눌러진 키를 확인하는 방법
    // keydown : "모든" 키 종류가 눌렸을 때
    // keypress  : 영어/숫자/특수문자/띄어쓰기만 인식
    // -> 꾹 누르고 있을 경우 연속적으로 함수가 호출되는 문제 발생
    // keyup : 반복 이벤트가 1번으로 인식되어 키보드 이벤트에서 많이 사용


    if(window.event.key == "Enter") { // 눌러진 키가 Enter라면
        // 다른 함수 호출
        readValue();
    }
}

function readValue() {

    // 채팅과 관련된 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");

    // 문자열.trim() : 문자열 "좌우"공백 제거(중간공백 xx)
    if(input.value.trim().length != 0) { // 채팅이 정상적으로 입력된 경우에만 출력
        // 채팅방에 입력된 값으로 채팅 추가
        bg.innerHTML += "<p><span>" + input.value +"</span></p>";
    
        // 스크롤을 제일 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        // 요소.scrollHeight : 스크롤의 전체 높이
        bg.scrollTop = bg.scrollHeight;
        
    } else {
        alert("채팅 내용을 입력해주세요");
    }
    input.value = ""; // 입력한 내용 삭제
}