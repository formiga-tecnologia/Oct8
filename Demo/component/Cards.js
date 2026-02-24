import { Oct8 } from "../../TS/Oct8/Oct.js"

class Cards{
    constructor(props={}){
        this.props = props
    }
    rodar(){
        alert("opa")
    }
    build(){
        return `
            <div oct-css='card ${Oct8.Factory.ExistProp("css",this.props,(el)=>{return `${el}`})} '>
                ${Oct8.Factory.ExistProp("Titulo",this.props,(el)=>{return `<h1> ${el} </h1>`})}
                ${Oct8.Factory.ExistProp("Conteudo",this.props,(el)=>{return `<h3> ${el} </h3>`})}
                ${Oct8.Factory.ExistProp("Botao",this.props,(el)=>{return `<button> ${el} </button>`})}
                
                ${Oct8.Events.CreateEvent(()=>{Oct8.Reaction.update("countNum",Oct8.Reaction.GetReaction("countNum")+1)},"AddCount","<button>Add Reaction </button>","click")}
                </div>
                `
    }
}

export {Cards}