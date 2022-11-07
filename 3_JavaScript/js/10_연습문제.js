const container = document.getElementsByClassName("container")[0];
const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

const print1 = document.getElementById("print1");
const btn1 = document.getElementById("btn1");
const clearBtn = document.getElementById("clearBtn");


// JS로 CSS 추가하기

// container 클래스 요소의 display: flex추가




container.style.display = "flex";

for(let item of area){
    item.style.height = "170px"
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}

// box클래스요소 높이 150px, 아랫쪽 테두리 1px solid black
for(let item of box){
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black";
}

// box-color클래스 요소의 테두리와 아웃라인 없애기
for(let item of boxColor){
    item.style.outline = "none";
    item.style.border = "none";
}


// box-color 클래스 요소의 입력된 값이 변했을때
// 위에있는 box클래스 요소의 배경색을 변경
for(let i = 0; i < area.length; i++){

    // change : 포커스를 잃고 나서 또는 enter 입력시 
    // 작성된 값이 이전 값과 다를 경우

    // blur : 포커스를 잃었을 때
    // -> 변하지 않아도 그대로 인식, enter 인식X
    boxColor[i].addEventListener("change", function(){
    
        box[i].style.backgroundColor = this.value;
        this.style.color = this.value;
        
    });
}


btn1.addEventListener("click", function(){
    print1.innerText = input1.value;

    for(let i = 0; i < area.length; i++){
        box[i].style.transitionDuration = input1.value + "s";
        boxColor[i].style.transitionDuration = input1.value + "s";
    }
});

clearBtn.addEventListener("click", function(){

    for(let i = 0; i < area.length; i++){
        box[i].style.transitionDuration = "0s";
        boxColor[i].style.transitionDuration = "0s";

        box[i].style.backgroundColor = "";
        boxColor[i].style.color = "";
        boxColor[i].value="";

        print1.innerText = "0";
        input1.value = "";
    }
});