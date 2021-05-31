
//Capture the code in area code
const codeArea = document.getElementById("codetext");
codeArea.addEventListener('input',()=>{
    console.log(codeArea.value)
    fetch("https://oct8lang.herokuapp.com/")
    .then(response => response.text())
    .then(data =>{
        console.log(data)
    })
})