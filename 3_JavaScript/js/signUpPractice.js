
// const checkObj = {
//     "inputId" : false,
//     "inputPw" : false,
//     "inputPwConfirm" : false,
//     "inputName" : false,
//     "inputGender" : false,
//     "inputTel" : false,
//     "inputEmail" : false
// };




// 아이디 유효성검사
const inputId = document.getElementById("inputId");
inputId.addEventListener("change", function(){

    const regEx = /^[a-z][\w_-]{5,13}$/;

    if(regEx.test(inputId.value)){
        inputId.style.backgroundColor = "springgreen";
        inputId.style.color = "black";
    } else{
        inputId.style.backgroundColor = "red";
        inputId.style.color = "white";
    }
});




// 비밀번호 유효성검사
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
inputPwConfirm.addEventListener("keyup", function(){

    if(inputPw.value.trim().length == 0){
        inputPwConfirm.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
    } else {
        
        const pwMessage = document.getElementById("pwMessage");
        if(inputPw.value == inputPwConfirm.value){
    
            pwMessage.classList.remove("error");
            pwMessage.classList.add("confirm");
            pwMessage.innerText = "비밀번호 일치";
    
        } else {
    
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
            pwMessage.innerText = "비밀번호 불일치";
    
        }
    }

});

inputPw.addEventListener("keyup", function(){



    const pwMessage = document.getElementById("pwMessage");
    if(inputPw.value == inputPwConfirm.value){

        pwMessage.classList.remove("error");
        pwMessage.classList.add("confirm");
        pwMessage.innerText = "비밀번호 일치";

    } else {

        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        pwMessage.innerText = "비밀번호 불일치";

    }
    

});


// 이름 유효성검사
const inputName = document.getElementById("inputName");
inputName.addEventListener("change", function(){

    const regEx = /^[가-힣]{2,5}$/;
    const nameMessage = document.getElementById("nameMessage");

    if(regEx.test(inputName.value)){

        nameMessage.innerText = "정상입력";
        nameMessage.classList.remove("error");
        nameMessage.classList.add("confirm");
        
    } else {
        
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
    }
});


// 성별, 전화번호 검사
const genderM = document.getElementById("genderM");
const genderF = document.getElementById("genderF");
const inputTel = document.getElementById("inputTel");

function validate(){

    


    // 방법1
    // const gender = document.getElementsByName("gender"); // 요소2개짜리 배열
    // if(!gender[0].checked && !gender[1].checked){
    //     alert("성별을 선택해주세요");
    //     return false;
    // }
    
    const gender = document.getElementById("gender");
    if(!gender[0].checked && !gender[1].checked){
        alert("성별 선택");
        return false;
    }

    
    

    // 방법2 --> 체크된 성별 radio버튼만 얻어오기
    // const gender = document.querySelector("input[name='gender']:checked");
    // if(gender == null){
    //     alert("성별을 선택해주세요");
    //     return false;
    // }




    const inputTel = document.getElementById("inputTel");
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    if(!regEx.test(inputTel.value)){
        alert("전화번호 형식이 올바르지 않습니다.");
        return false;
    }

    return true;
};

    



