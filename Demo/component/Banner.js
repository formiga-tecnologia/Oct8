
class Banner{
    constructor(props){
        this.props=props
    }
    build(){
        return `
        <div class='banner'>
            <h1> ${this.props.Titulo} </h1>
            <div>
                <h3> ${this.props.Conteudo} </h3>
                <button> Acessar </button>
                <button> Acessar documentacao </button
            </div>
            </div>
            <div oct-style='page:white'> 
        </div>
        `
    }
}

export { Banner}