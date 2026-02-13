import { Oct8 } from "../../TS/Oct8/Oct.js"

class Minicards{
    constructor(props={}){
        this.props =props
    }
    BuildCard(cards){
        let el =""
        cards.forEach(element => {
            el+=`<div class='card_m'> 
            <img src='${element[2]}'>
            <h1>${element[0]}<h1> 
            <h3>${element[1]}</h3>
            </div>`
        });
        return el
    }
    build(){
        return `
        ${Oct8.Factory.ExistProp("titulo",this.props,(e)=>{return `<h1 class='titulo_center'>${e}</h1>`})}
        <div oct-css='containerCard'>
        ${Oct8.Factory.ExistProp("img",this.props,(e)=>{return `<img src=${e}>`})}
          ${Oct8.Factory.ExistProp("card",this.props,this.BuildCard)}
        </div>
        `
    }
}

export {Minicards}