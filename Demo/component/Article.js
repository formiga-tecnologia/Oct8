
class Article{
    constructor(prop){
        this.prop = prop
    }
    build(){
        this.prop.style = ""
        return `
            <article oct-css="${this.prop.article}">
                <h1>${this.prop.Titulo}</h1>
                <h3>${this.prop.Conteudo}</h3>
                <img src='${this.prop.Url}'>
            </div> 
        `
    }
}

export {Article}