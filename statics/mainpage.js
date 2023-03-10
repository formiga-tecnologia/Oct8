import Oct8 from "../Oct8/Oct8.js";
import Oct8Events from "../Oct8/Oct8Events.js";

var OctEngine = new Oct8();

//Criação do Componente factory
OctEngine.CreateAnimationEvent(document.getElementById("squareBasic"),OctEngine.PropsElement.Rotate,80,-1,"-",Infinity)
OctEngine.CreateObjectFactory(ArticleComp,"ArtigoPrincipal")
OctEngine.CreateObjectFactory(ElementoAnimado,"renderAnimado")
OctEngine.CreateObjectFactory(ExCodigo,"ExemploCodigo")
OctEngine.CreateObjectFactory(GenerateCode,"BotaoCodigo")


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
    OctEngine.CreateAnimationCssEvent(conteudo[1],animacao,2,4,"infinite",true,false)
}

function ExCodigo(conteudo)
{
    document.getElementById("ArticleDocs").innerHTML=conteudo[0]
    document.getElementById("CodeReview_oct8").innerHTML=conteudo[1]
}

function GenerateCode(conteudo){
    var bt_created = OctEngine.CreateContainerElement(conteudo[0],"NavegationMenu","flutter")
    OctEngine.ModifyContentContainer(bt_created,"<button> "+ conteudo[2]+"</button>")
    bt_created.addEventListener("click",conteudo[1],false)
    OctEngine.ModifyPropsDefault(bt_created,null,null,null,null)
}

//Conteudos que os componetes podem recebrer de forma padrão
var CompArray = {
    ElementoArtigo_01: ["Artigo01","https://th.bing.com/th/id/R.67e6dab06cdfda3e8fef1b22b6f9f468?rik=zEbv6UNd7vooBw&pid=ImgRaw&r=0","O Oct8 possui sistema de mini fabricas,onde cada fabrica produz um elemento totalmente replicavel e costumizavel,sem muita enrolação, simples e direta ao ponto.","boxfac"],
    ElementoArtigo_02: ["Artigo02","https://th.bing.com/th/id/OIP.icyD4BfpPgBruE9_ok5MxgHaHa?pid=ImgDet&rs=1","Desenvolvimento de suas paginas web ganham mais vida com o nosso framework , que alem da vlocidade, ela te proprociona mais liberdade criativa para desenvolver do seu jeito","boxcode"],
    ElementoArtigo_03: ["Artigo03","https://th.bing.com/th/id/R.8ce8ffc984c80bfd339958aa1fa904c0?rik=P4vw5d%2bEqTXKQQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_545542.png&ehk=J9tzxqGHV9Iz68q6GetB57lWMmnTW0tR0FZDn8t4FGI%3d&risl=&pid=ImgRaw&r=0","A legibilidade do codigo é simplesmente facil, alem da sua curva de aprendizado ser altamente baixa podendo no mesmo dia começar a produzir seu proprio projeto web.","boxdev"]
}
var CodigoArray  ={
    CodigoExemplo_01:["<h1>Como criar uma fabrica</h1></br><h4>As fabricas são eventos pre determinados que fazem a montagem do seus futuros componentes em Oct8.</h4>","<h6>import Oct8 from '../Oct8/Oct8.js';<br/>&nbsp &nbsp var OctEngine = new Oct8();</br> &nbsp &nbsp OctEngine.CreateObjectFactory(ArticleComp,'ArtigoPrincipal')</h6>"],
    CodigoExemplo_02:["<h1>Como criar uma Cena</h1></br><h4>As Cenas são componentes importantes dentro do Oct8. Dentro de uma cena você determina a ordem de cada ação que você criou, dando uma organização muito maior dentro do seu projeto.</h4>","<h6>import Oct8 from '../Oct8/Oct8.js';<br/>&nbsp &nbsp var OctEngine = new Oct8();</br> &nbsp &nbsp OctEngine.CreateObjectFactory(ArticleComp,'ArtigoPrincipal') &nbsp &nbsp OctEngine.NewScene('Scene01',[EventoA,EventoB,EventoC],200,100) &nbsp &nbsp  OctEngine.ExecuteScene('Scene01')</h6>"]
}
var NavegacaoCodigo = {
    CriacaoComponente:["bt01",()=>{ExCodigo(CodigoArray.CodigoExemplo_01)},"Como criar componente"],
    CriacaoCena:["bt02",()=>{ExCodigo(CodigoArray.CodigoExemplo_02)},"Como Criar cenas"]
}

//Criando na tela os Elementos de Fabrica
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_01)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_02)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_03)

//Criado de elemento 
OctEngine.AppendObjectFacyotyTo("ExemploCodigo",CodigoArray.CodigoExemplo_01)

//Criando sistema de navegação
OctEngine.AppendObjectFacyotyTo("BotaoCodigo",NavegacaoCodigo.CriacaoComponente)
OctEngine.AppendObjectFacyotyTo("BotaoCodigo",NavegacaoCodigo.CriacaoCena)

