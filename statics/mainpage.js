import Oct8 from "../Oct8/Oct8.js";

var OctEngine = new Oct8();

OctEngine.CreateAnimationEvent(document.getElementById("squareBasic"),OctEngine.PropsElement.Rotate,80,-1,"-",Infinity)
OctEngine.CreateObjectFactory(ArticleComp,"ArtigoPrincipal")

function ArticleComp(Conteudo){
    var elementCreated = OctEngine.CreateContainerElement(Conteudo[0],"Article-area-main","article")
    OctEngine.ModifyPropsDefault(elementCreated,null,null,[40],[40])
}
var CompArray = {
    ElementoArtigo_01: ["Artigo01"],
    ElementoArtigo_02: ["Artigo02"]
}
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_01)
OctEngine.AppendObjectFacyotyTo("ArtigoPrincipal",CompArray.ElementoArtigo_02)