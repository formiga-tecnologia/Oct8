
class CodeSnippet{
    constructor(props){
        this.prop = props
    }
    build(){
        return `
        <div oct-css='code:base'>
            <div class='titulo'> ${this.prop.nome} </div>
            <div class='content_code'>
              ${this.prop.code}
            </div>
        </div>
        `
    }
}

export {CodeSnippet}