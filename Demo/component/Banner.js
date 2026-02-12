import { Oct8 } from "../../TS/Oct8/Oct.js"
class Banner{
    constructor(props){
        this.props=props
    }
    build(){
        Oct8.Reaction.create("teste",30)

        return `
        <div class='banner'>
            <img class='logoBanner' src='../image/Oct8Logo2026.png' >
            <div class='compBanner' >
            ${Oct8.Reaction.inject("teste")}
                <h1> ${this.props.Titulo} </h1>
                <h3> ${this.props.Conteudo} </h3>
                <button oct-event='click_teste'> Acessar </button>
                <button> Acessar documentacao </button
            </div>
            </div>
            <div oct-style='page:white'> 
        </div>
        `
    }
}

export { Banner}