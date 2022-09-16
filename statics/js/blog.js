import Oct8 from '../../Oct8/Oct8.js'
import CreateNewArticle from '../components/article.js'

let Oct8Screen = new Oct8()

CreateNewArticle(4,0,"OctArt","hello world Oct8","Oct8 Guia Rapido","Guia Oct8")
CreateNewArticle(50,-35,"teste","hello world Oct8","Oct8 Guia Rapido","Guia Oct8")

Oct8Screen.CallEvents.ResponsiveForMobile(
    ()=>{


        Oct8Screen.OctObj.ModifyProps(document.getElementById("OctArt"),[80],Oct8Screen.OctObj.PropsElement.W)
        Oct8Screen.OctObj.ModifyProps(document.getElementById("OctArt"),[40],Oct8Screen.OctObj.PropsElement.H)
        Oct8Screen.OctObj.ModifyPropsDefault(document.getElementById("teste"),[80],[-40],[80],[40])

    },()=>{
        Oct8Screen.OctObj.ModifyProps(document.getElementById("teste"),[4],Oct8Screen.OctObj.PropsElement.MoveX)
        Oct8Screen.OctObj.ModifyProps(document.getElementById("teste"),[-15],Oct8Screen.OctObj.PropsElement.MoveY)
    }
)

