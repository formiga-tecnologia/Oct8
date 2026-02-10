
class Banner{
    constructor(props){
        this.props=props
    }
    build(){
        return `
        <div class='banner'>
            <h1> ${this.props.Titulo} </h1>
            <div oct-style='page'>
                <h3> ${this.props.Conteudo} </h3>
                <button> Acessar </button
            </div>
        </div>
        `
    }
}

export { Banner}