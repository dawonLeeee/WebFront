const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
// 요소 추적O, 값이나 속성 추적X




function calc(op){
    // op에는 +, -, *, /, % 중 하나가 전달

    // 현재 input요소에 작성된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    // eval("코드형식의 문자열")
    // -> 매개변수의 문자열을 js코드로 해석/수행하는 함수
    // -> 속도가 느림 + 보안이슈로 인해 사용 지양!!
    // -> 해결방법 : new Function() 사용



    // const result = eval(n1, op, n2);
    const result = new Function("return " + n1 + op + n2)();
    calResult(n1, n2, result, op);
}



function calResult(n1, n2, result, op) {
    document.getElementById("calResult").innerText = n1 + " " + op + " " + n2 + " = " + result;
}