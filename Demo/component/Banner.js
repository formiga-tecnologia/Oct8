import { Oct8 } from "../../TS/Oct8/Oct.js"
class Banner{
    constructor(props={}){
        this.props=props
    }

    build(){
        return `
        <div>
            ${Oct8.Factory.ExistProp("Titulo",this.props,(p)=>{return`<h1> ${p} </h1>`})} 
        </div>
        `
    }
}

export { Banner}