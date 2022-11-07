document.getElementById("btn1").addEventListener("click", function(){

    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "딸기", "복숭아", "바나나"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값을 대입
    arr1[1] = "김밥";
    arr1[2] = true;

    // 중간 인덱스를 건너뛰면 건너뛴 부분은 empty로 남음
    arr1[4] = "복숭아"; // 추가 가능
    console.log(arr1);

    arr2[0] = arr1;
    console.log(arr2);


    // for문으 배열 반복접근하기
    // 1. 일반 for문 - 배열, 컬렉션
    for(let i = 0; i < arr4.length; i++){
        console.log(arr4[i]);
    }


    // 2. 배열.forEach(function(item, index){반복수행 코드}) - 배열만(컬렉션 XX)
    //      - item : 현재 접근 중인 요소    
    //      - index : 현재 인덱스

    // ** 여러 요소를 얻어온 경우(HTMLCollection, NodList)는 배열이 아니므로
    // forEach()문을 쓸 수 없다!
    arr4.forEach(function(a, i){
        console.log(i + " : " + a);
    });


    // 3. for(item of 배열(또는 컬렉션)){} - 배열, 컬렉션
    //      (Symbol.iterator가 존재하는 객체에 사용 가능)
    // == Java 향상된 for문과 비슷
    for(let item of arr4){
        console.log(item);
    }


    // li태그에 작성된 값 얻어와서 합 구하기
    //  document.getElementsByTagName("li"); --> HTMLCollection
    //  document.querySelectorAll("#test > li") --> NodeList
    const list = document.querySelectorAll("#test > li");

    let sum = 0;
    for(let item of list){
        sum += Number(item.innerText); // 문자열을 숫자로 변환
    }

    console.log(sum);


    // 4. for(let key in 객체) - JS 객체용 for문


});





// 배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function(){

    // 비어있는 배열 생성
    const arr = []; // == new Array();

    // arr.push(값) : 배열 마지막 요소로 추가
    arr.push("김밥");
    arr.push("샌드위치");
    arr.push("우육면");
    arr.push("감자탕");
    arr.push("우정함박");
    arr.push("쌀국수");

    // 배열 .toString() : 배열 요소 사이 콤마(,) 추가
    console.log(arr.toString()); // toString() 생략 가능
    
    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log(temp);
    console.log(arr);

    // 배열.indexOf(값) : 일치하는 값을 가진 요소의 index를 반환(없으면 -1 반환)
    console.log("우육면 인덱스 : " + arr.indexOf("우육면"));   
    console.log("갈비가 arr에 포함되어 있는가? : " + (arr.indexOf("갈비") != -1) );




    // 배열.sort() : 배열내 요소를 오름차순으로 정렬(문자열 기준) 
    // sort() 함수는 원본 배열의 순서를 정렬함(원본 훼손 발생)
    console.log(arr.sort());


    // 숫자 정렬의 문제점과 해결 방법
    const numArr = [5, 3, 2, 10, 1]; // 오름차순 정렬 -> 1 2 3 5 10
    console.log(numArr.sort()); // 1, 10, 2, 3, 5 (왜? 문자열기준 비교라서)
    console.log(numArr.sort(function(a,b){return a-b})); // 1 2 3 5 10

    console.log(arr); // 1 2 3 5 10 (원본훼손 발생->깊은복사를 이용해 해결가능 )

    // 배열.join("구분자")
    console.log(numArr.join("|"));


});



document.getElementById("btn3").addEventListener("click", function(){

    const lotto = [];
    while(lotto.length < 6){ // 배열요소가 6미만일때 반복
        
        const ran = Math.floor(Math.random() * 45 + 1); // 1~45 난수
        if(lotto.indexOf(ran) == -1){
            lotto.push(ran);
        }
    }

    console.log("로또번호 : " + lotto.sort(function(a,b){return a-b}).join(" | "));
});