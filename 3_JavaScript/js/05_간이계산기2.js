const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
// 요소 추적O, 값이나 속성 추적X




function calc(op){
    // op에는 +, -, *, /, % 중 하나가 전달

    // 현재 input요소에 작성된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op){
        case '+' : calResult(n1, n2, n1+n2, op); break;
        case '-' : calResult(n1, n2, n1+n2, op); break;
        case '*' : calResult(n1, n2, n1+n2, op); break;
        case '/' : calResult(n1, n2, n1+n2, op); break;
        case '%' : calResult(n1, n2, n1+n2, op); break;
    }
}



function calResult(n1, n2, result, operator) {
    document.getElementById("calResult").innerText = n1 + " " + operator + " " + n2 + " = " + result;
}