

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generateRandomIndex(){

    let randomIndex = Math.floor(Math.random()*characters.length)
    return randomIndex;
}
// console.log(characters[randomIndex])

function generatePassword(){

    let pwd = "";
    let i=pwd.length
    
    for(i=0; i < 15; i++){
        let randomizedIndex = generateRandomIndex()
        // randomIndex = characters[i]
    
        pwd += characters[randomizedIndex]
    }
    console.log(pwd)
    return pwd
}
// function generatedPasswords(){

//     generatePassword()
//     generatePassword()
// }
function displayPasswords(){

    document.getElementById("firstPwd-el").value = generatePassword();
    document.getElementById("secondPwd-el").value = generatePassword();
}