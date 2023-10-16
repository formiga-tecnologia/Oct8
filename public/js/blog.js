import Oct8 from '../../Oct8/Oct8.js'
import CreateNewArticle from '../components/article.js'

let Oct8Screen = new Oct8()

CreateNewArticle(4,0,"GuiaInicial","Aprenda o basico desta ferramenta","Guia de inicio","Guia Oct8")
CreateNewArticle(50,-35,"PoderOct8","Entenda para quais casos são indicados o OCt8","O poder do Oct8","Guia Oct8")

Oct8Screen.CallEvents.ResponsiveForMobile(
    ()=>{
        Oct8Screen.OctObj.ModifyProps(document.getElementById("GuiaInicial"),[80],Oct8Screen.OctObj.PropsElement.W)
        Oct8Screen.OctObj.ModifyProps(document.getElementById("GuiaInicial"),[50],Oct8Screen.OctObj.PropsElement.H)
        Oct8Screen.OctObj.ModifyPropsDefault(document.getElementById("PoderOct8"),[90],[-50],[80],[50])
    },()=>{
        Oct8Screen.OctObj.ModifyProps(document.getElementById("PoderOct8"),[4],Oct8Screen.OctObj.PropsElement.MoveX)
        Oct8Screen.OctObj.ModifyProps(document.getElementById("PoderOct8"),[-10],Oct8Screen.OctObj.PropsElement.MoveY)
    }
)
