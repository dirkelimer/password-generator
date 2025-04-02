const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pwdFieldOne = document.getElementById("pwdOne")
const pwdFieldTwo = document.getElementById("pwdTwo")

function generatePwd() {
    let passwordOne = ''
    let passwordTwo = ''

    for (let i = 0; i < 15; i++) {
        const indexOne = Math.floor(Math.random() * characters.length);
        const indexTwo = Math.floor(Math.random() * characters.length);
        passwordOne += characters[indexOne];
        passwordTwo += characters[indexTwo];
    }
    pwdFieldOne.textContent = passwordOne;
    pwdFieldTwo.textContent = passwordTwo;
}

function copyPwdOne(passwordField) {
    const tempInput = document.createElement("input");
    tempInput.value = pwdFieldOne.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    navigator.clipboard.writeText(tempInput.value).then(() => {
        alert("Password copied" + " " + tempInput.value);
    });
    document.body.removeChild(tempInput);
}

function copyPwdTwo(passwordField) {
    const tempInput = document.createElement("input");
    tempInput.value = pwdFieldTwo.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    navigator.clipboard.writeText(tempInput.value).then(() => {
        alert("Password copied" + " " + tempInput.value);
    });
    document.body.removeChild(tempInput);
}