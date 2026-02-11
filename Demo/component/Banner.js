
class Banner{
    constructor(props){
        this.props=props
    }
    build(){
        return `
        <div class='banner'>
            <img class='logoBanner' src='../image/Oct8Logo2026.png' >
            <h1> ${this.props.Titulo} </h1>
            <div>
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