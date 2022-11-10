// 즉시 실행 함수 확인하기
// 페이지 로딩 시 바로 실행됨
(function(){
    const str = "점심메뉴 추천해주세요";
    console.log(str);
})();

(function(){
    const str= "전 오늘 라면 먹겠습니다";
    console.log(str);
})();



// 화살표함수(Arrow Function)

// 1. 기본형태 ([]) => {}
document.getElementById("btn1").addEventListener("click", ()=>{
    alert("화살표함수 기본형태입니다");
});

// 즉시실행 함수 + 화살표함수
(()=>{
    console.log("즉시 실행 함수 + 화살표 함수");
})();


// 매개변수 1개   (매개변수=>{})();
document.getElementById("btn2").addEventListener("click", e => {
    // 매개변수 e(또는 이벤트) : 이벤트 관련 정보를 모두 갖고 있는 객체
    console.log(e);


    // ***** [화살표 함수 주의사항] *****
    // -> 화살표 함수를 이벤트 핸들러로 사용할 경우
    //      this는 window 객체를 나타내게 된다
    //  (화살표함수 내부에서 this가 사용불가)

    console.log(this);
    // e.target.style.backgroundColor = "yellow";
    // this.style.backgroundColor = "yellow";
});



// 3. {}, return 생략   () => 값 또는 식
function print(fn){ // fn : 전달받은 함수
    console.log(fn(2));
};


document.getElementById("btn3").addEventListener("click", () =>{
   
    print(function(num){return num * 10}); // 익명함수
    print(num => num * 10); // 화살표 함수
});