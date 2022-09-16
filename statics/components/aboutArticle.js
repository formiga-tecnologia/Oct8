import Oct8 from "../../Oct8/Oct8.js";
import Oct8Events from "../../Oct8/Oct8Events.js";

export default function CreareAboutArticle(id,title,value)
{
    var AboutArticle = new Oct8(id,0,0,"infinity",0,"elb elb-off art-about","material",true)
    InsertValues(id,title,value,AboutArticle)    
   AboutArticle.OctObj.ModifyProps(AboutArticle.OctObj.GetElementId(),3,AboutArticle.OctObj.PropsElement.alpha)
   AboutArticle.OctObj.ModifyProps(AboutArticle.OctObj.GetElementId(),30,AboutArticle.OctObj.PropsElement.H)
    AboutArticle.CallEvents.ResponsiveForMobile(()=>{
      AboutArticle.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[-240],null,[80])   
     AboutArticle.OctObj.ModifyPropsDefault(AboutArticle.OctObj.GetElementId(),null,[-2],null,[90])
    },()=>{
      AboutArticle.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[-30],null,[120])
      AboutArticle.OctObj.ModifyPropsDefault(AboutArticle.OctObj.GetElementId(),null,[0],null,[90])
    })
AboutArticle.OctObj.StopEvent(3)
  }

function InsertValues(id,title,value,Oct8Pass){
   
    document.getElementById(id).innerHTML = "<div class='card'>"
    +"<div class='card-body'>"
    +"<h1>"+title+"</h1></br>"
     +value
    +"</div>"
    +"<a id='"+id+"btn' href='#' class='card-link'>Close</a>"
  +"</div>"
  document.getElementById(id+"btn").addEventListener("click",()=>{


   Oct8Pass.OctObj.ModifyProps(Oct8Pass.OctObj.GetElementId(),[0],Oct8Pass.OctObj.PropsElement.alpha)
   Oct8Pass.OctObj.ModifyProps(Oct8Pass.OctObj.GetElementId(),[0],Oct8Pass.OctObj.PropsElement.H)

    Oct8Pass.OctObj.CreateEvent(()=>{document.getElementById(id).remove()
    Oct8Pass.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[20],null,[0])
    Oct8Pass.OctObj.StopEvent()
    },1200)
  },false)    
}
