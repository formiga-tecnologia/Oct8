import Oct8 from "../Oct8/Oct8.js";

var OctEngine = new Oct8();

//Criação do Componente factory
OctEngine.CreateAnimationEvent(document.getElementById("squareBasic"),OctEngine.PropsElement.Rotate,80,-1,"-",Infinity)
OctEngine.CreateObjectFactory(ArticleComp,"ArtigoPrincipal")
OctEngine.CreateObjectFactory(ElementoAnimado,"renderAnimado")


//Criação com artigo de componente
function ArticleComp(Conteudo){
    var elementCreated = OctEngine.CreateContainerElement(Conteudo[0],"Article-area-main","article")
    OctEngine.ModifyContentContainer(elementCreated,
        "<figure id='"+Conteudo[0]+"figure' ><img heigth=60 width=60 src='"+Conteudo[1]+"'></figure><section>"+Conteudo[2]+"</section>")
    OctEngine.AppendObjectFacyotyTo("renderAnimado",[Conteudo[0]+"figure",Conteudo[3]])
    OctEngine.ModifyPropsDefault(elementCreated,null,null,[40],[40])
}

function ElementoAnimado(conteudo){
    var animacao = OctEngine.CreateContainerElement(conteudo[0]+"Animation",conteudo[0],"animationBox "+conteudo[1])
    OctEngine.ModifyPropsDefault(animacao,null,null,null,null)
    OctEngine.CreateAnimationCssEvent("moveBox",animacao,4,3,"infinite",true,false)
}

//Conteudos que os componetes podem recebrer de forma padrão
var CompArray = {
    ElementoArtigo_01: ["Artigo01","https://th.bing.com/th/id/R.67e6dab06cdfda3e8fef1b22b6f9f468?rik=zEbv6UNd7vooBw&pid=ImgRaw&r=0","O Oct8 possui sistema de mini fabricas,onde cada fabrica produz um elemento totalmente replicavel e costumizavel,sem muita enrolação, simples e direta ao ponto.","boxfac"],
    ElementoArtigo_02: ["Artigo02","https://th.bing.com/th/id/OIP.icyD4BfpPgBruE9_ok5MxgHaHa?pid=ImgDet&rs=1","Desenvolvimento de suas paginas web ganham mais vida com o nosso framework , que alem da vlocidade, ela te proprociona mais liberdade criativa para desenvolver do seu jeito","boxcode"],
    ElementoArtigo_03: ["Artigo03","https://th.bing.com/th/id/R.8ce8ffc984c80bfd339958aa1fa904c0?rik=P4vw5d%2bEqTXKQQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_545542.png&ehk=J9tzxqGHV9Iz68q6GetB57lWMmnTW0tR0FZDn8t4FGI%3d&risl=&pid=ImgRaw&r=0","A legibilidade do codigo é simplesmente facil, alem da sua curva de aprendizado ser altamente baixa podendo no mesmo dia começar a produzir seu proprio projeto web.","boxdev"]
}


//Criando na tela os Elementos de Fabrica
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_01)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_02)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_03)