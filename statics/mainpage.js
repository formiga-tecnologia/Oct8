import Oct8 from "../Oct8/Oct8.js";

var OctEngine = new Oct8();

OctEngine.CreateAnimationEvent(document.getElementById("squareBasic"),OctEngine.PropsElement.Rotate,80,-1,"-",Infinity)
OctEngine.CreateObjectFactory(ArticleComp,"ArtigoPrincipal")

function ArticleComp(Conteudo){
    var elementCreated = OctEngine.CreateContainerElement(Conteudo[0],"Article-area-main","article")
    OctEngine.ModifyContentContainer(elementCreated,"<img heigth=40 width=40 src='"+Conteudo[1]+"'>")
    OctEngine.ModifyPropsDefault(elementCreated,null,null,[40],[40])
}
var CompArray = {
    ElementoArtigo_01: ["Artigo01","https://th.bing.com/th/id/R.67e6dab06cdfda3e8fef1b22b6f9f468?rik=zEbv6UNd7vooBw&pid=ImgRaw&r=0"],
    ElementoArtigo_02: ["Artigo02","https://th.bing.com/th/id/OIP.icyD4BfpPgBruE9_ok5MxgHaHa?pid=ImgDet&rs=1"],
    ElementoArtigo_03: ["Artigo03","https://th.bing.com/th/id/R.8ce8ffc984c80bfd339958aa1fa904c0?rik=P4vw5d%2bEqTXKQQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_545542.png&ehk=J9tzxqGHV9Iz68q6GetB57lWMmnTW0tR0FZDn8t4FGI%3d&risl=&pid=ImgRaw&r=0"]
}
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_01)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_02)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_03)