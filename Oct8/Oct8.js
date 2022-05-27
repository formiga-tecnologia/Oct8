//Physical rules  of OCT8 Web System
let Gravitybasic = 10;
let BasicWind = 5;

function GravityGlobal() {
    let cbeItens = document.getElementsByClassName("cbe-action")
    for (let index = 0; index < cbeItens.length; index++) {
        cbeItens.item(index).style.marginTop = Gravitybasic + "vh"
        if (cbeItens.item(index).classList.contains("cbe-rotate")) {
            cbeItens.item(index).style.transform = "rotate(" + BasicWind + "deg)";
        }
    }
    Gravitybasic += 3;
    BasicWind += 80;
}
setInterval(GravityGlobal, 1000);


