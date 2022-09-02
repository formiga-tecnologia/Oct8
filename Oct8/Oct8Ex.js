//Physical rules  of OCT8 Web System

//OBSOLETE PROJECT NOT FOR USE!!
let Gravitybasic = 10;
let BasicWind = 5;
let Oct8Limit = 30;
let GravityActive = true;

function GravityGlobal() {
    let cbeItens = document.getElementsByClassName("cbe-action")
    for (let index = 0; index < cbeItens.length; index++) {
        if (cbeItens.item(index).classList.contains("cbe-rotate") && GravityActive == true) {
            cbeItens.item(index).style.marginTop = Gravitybasic + "vh"
            cbeItens.item(index).style.transform = "rotate(" + BasicWind + "deg)";
        }
        console.log(Oct8Limit + " " + Gravitybasic);
        if (Gravitybasic >= Oct8Limit) {
            GravityActive = false
            break;

        }
    }
    if (GravityActive === true) {
        Gravitybasic += 3;
        BasicWind += 80;
    }
    else {
        Gravitybasic = 0;
    }
}
function Lock(){
    Oct8Limit+=3;
}
setInterval(GravityGlobal, 1000);


