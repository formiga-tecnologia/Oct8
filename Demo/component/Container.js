import { Oct8 } from "../../TS/Oct8/Oct.js";

class Container extends Oct8.FactoryClass{
    constructor(prop={}){
        super()
        this.props = prop
        this.FactoryObj = `
             <div id='${this.GetValidProp("id",(el)=>{return `${el}`})}' 
            oct-css='container ${this.GetValidProp("css",(el)=>{return `${el}`})} '></div>
            ${this.GetValidProp("elementos",(el)=>{ el()})}`
    }
    
}

export {Container}