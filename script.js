function getPin(){
    const random = Math.random()*10000;
    const pin = (random + "").split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


// display generated pin
function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click",function(even){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit==="C"){
            const typeInput = document.getElementById("typed-pin");
        typeInput.value="";
        }else if(digit==="<"){
            const typeInput = document.getElementById("typed-pin");
        const str = typeInput.value;
        newStr = str.slice(0,-1);
        typeInput.value = newStr;
        }

    }else{
        const typeInput = document.getElementById("typed-pin");
        typeInput.value=typeInput.value + digit;
    }
})


// verify Pin
function verifyPin(){
    const pin =document.getElementById("pin").value;
    const typedPin = document.getElementById("typed-pin").value;
    let maximumCount = 1;
    if(pin === typedPin && pin != "" && typedPin != ""){
        const correct = document.getElementById("correct-pin");
        correct.style.display = "block";
        const incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = "none";
        
    }else if(pin == "" && typedPin == ""){
        alert("Please type your  generate PIN  to match it. Thank you  :)'")
        const correct = document.getElementById("correct-pin");
        correct.style.display = "none";
        const incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = "none";
    }else{
        if(maximumCount > 0){
            maximumCount--;
            document.getElementById("wrong-count").innerText = maximumCount;
            const correct = document.getElementById("correct-pin");
        correct.style.display = "none";
        const incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = "block";  
        }  
    }
}

