//Physical rules  of OCT8 Web System
let Gravitybasic = 10;

function GravityGlobal() {
    let cbeItens =document.getElementsByClassName("cbe-action")
    for (let index = 0; index < cbeItens.length; index++) {
    cbeItens.item(index).style.marginTop =Gravitybasic+"vh"
    
}
    Gravitybasic+=10;
}
setInterval(GravityGlobal,1000);
