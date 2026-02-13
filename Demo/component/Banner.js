import { Oct8 } from "../../TS/Oct8/Oct.js"
class Banner{
    constructor(props={}){
        this.props=props
    }
    codeExemple(code){
        let v = String(code)
        return `<div class='codeEx'> <nav>Codigo js</nav> <p> ${v} <p> </div>`
    }
    build(){
        return `
        <div oct-css='banner ${Oct8.Factory.ExistProp("style",this.props,(p)=>{return p})}'>
            <article>
            ${Oct8.Factory.ExistProp("img",this.props,(p)=>{return`<img src='${p}' width='500'>`})} 
            ${Oct8.Factory.ExistProp("Titulo",this.props,(p)=>{return`<h1> ${p} </h1>`})} 
            ${Oct8.Factory.ExistProp("Subtitulo",this.props,(p)=>{return`<h3> ${p} </h3>`})} 
            ${Oct8.Factory.ExistProp("Button",this.props,(p)=>{return`<button> ${p} </button>`})} 
            </article>
            <p>
            ${Oct8.Factory.ExistProp("Code",this.props,this.codeExemple)} 
            </p>
        </div>
        `
    }
}

export { Banner}