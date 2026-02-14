import { Oct8 } from "../../TS/Oct8/Oct.js";

class Container{
    constructor(props={}){
        this.props=props 
    }
    
    build(){
        return `
        <div id='${Oct8.Factory.ExistProp("id",this.props,(el)=>{return `${el}`})}' 
        oct-css='container ${Oct8.Factory.ExistProp("css",this.props,(el)=>{return `${el}`})} '></div>
        ${Oct8.Factory.ExistProp("elementos",this.props,(el)=>{ el()})}
        `
    }
}

export {Container}