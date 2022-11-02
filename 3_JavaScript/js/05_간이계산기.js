const num1Id = document.getElementById("num1");
const num2Id = document.getElementById("num2");
// 요소 추적O, 값이나 속성 추적X






function plus() {
    num1 = Number(num1Id.value);
    num2 =  Number(num2Id.value);
    
    let result = num1 + num2;
    calResult(num1, num2, result, " + ");
}
function minus() {
    num1 = Number(num1Id.value);
    num2 =  Number(num2Id.value);
    let result = num1 - num2;
    calResult(num1, num2, result, " - ");
}
function multiple() {
    num1 = Number(num1Id.value);
    num2 =  Number(num2Id.value);
    let result = num1 * num2;
    calResult(num1, num2, result, " * ");
}
function devide() {
    num1 = Number(num1Id.value);
    num2 =  Number(num2Id.value);
    let result = num1 / num2;
    isZero(num1, num2);
    if(num2 == 0){
        document.getElementById("calResult").innerText = "0으로는 나눌 수 없습니다";
    } else {
        calResult(num1, num2, result, " / ");
    }
}
function remainder() {
    num1 = Number(num1Id.value);
    num2 =  Number(num2Id.value);
    let result = num1 % num2;
    if(num2 == 0){
        document.getElementById("calResult").innerText = "0으로는 나눌 수 없습니다";
    } else {
        calResult(num1, num2, result, " % ");
    }

}

function isZero(num1, num2) {
    if(num1 == 0) {
        document.getElementById("num1").value = 0;
    }
    if(num2 == 0) {
        document.getElementById("num2").value = 0;
    }
}


function calResult(num1, num2, result, operator) {
    document.getElementById("calResult").innerText = num1 + operator + num2 + " = " + result;
}

