
class Article{
    constructor(prop){
        this.prop = prop
    }
    build(){
        this.prop.style = ""
        console.log(this.prop.idcontent)
        return `
            <article oct-css="${this.prop.article}">
            <div>
            <h1>${this.prop.Titulo}</h1>
            <h3>${this.prop.Conteudo}</h3>
            </div>
                <div>
                    ${this.prop.idcontent}
                </div>
            <img id='box_test'  src='${this.prop.Url}'>
            </div> 
        `
    }
}

export {Article}