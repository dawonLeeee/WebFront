// window.setTimeout(함수, 지연시간(ms))
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){

    // 이벤트 핸들러에서 this : 이벤트가 발생한 html요소
    // window.setTimeout()에서 this == window객체

    // 0초(클릭하자마자)
    this.style.backgroundColor = "red";

    // 3초 후 orange로 변경
    setTimeout(function(){
        // this.style.backgroundColor="orange"
        btn1.style.backgroundColor = "orange";
    }, 3000);


    console.log("중간에 출력");

    // 6초 후 yellow로 변경
    setTimeout(function(){btn1.style.backgroundColor="yellow"}, 6000);

});

// 현재시간을 반환하는 함수
function currentTime(){
    const now = new Date(); // 현재시간 정보를 저장하고 있는 객체 생성
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간 값이 10 미만인 경우 앞에 0 추가
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;

}

// 페이지가 로딩되자마자 #clock에 현재시간 출력
document.getElementById("clock").innerText = currentTime();


// clock에 1초마다 현재시간을 출력하도록 하는 코드 작성
const interval =  setInterval(function(){

    document.getElementById("clock").innerText = currentTime();

},1000);


// window.clearInterval(setInterval()이 저장된 변수)
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
});

// 팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function(){
    // 새 탭에서 열기
    window.open("09_배열.html");
});
openPopup2.addEventListener("click", function(){

    // 최소한의 팝업창형태로 열기
    window.open("09_배열.html", "_blank", "popup"); 
});
openPopup3.addEventListener("click", function(){

    // 옵션이 지정된 팝업창

    // 옵션 작성방법 : "K:V,K=V,K=V", 크기단위 작성x(px로 고정)
    const options = "width=400, height=500, top=50, left=100";
    window.open("09_배열.html","popupWindow" ,options);
});



// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function(){

    const options = "width=300, height=300, top=50, left=600";
    window.open("팝업.html","popupWindow" ,options);
});