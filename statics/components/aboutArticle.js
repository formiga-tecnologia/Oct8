import Oct8 from "../../Oct8/Oct8.js";

export default function CreareAboutArticle(id,title,value)
{
    var AboutArticle = new Oct8(id,0,0,"infinity",0,"elb elb-off","material",true)
    InsertValues(id,title,value,AboutArticle)    
    AboutArticle.OctObj.CreateAnimationEvent(AboutArticle.PropsElement.alpha,10,0.1,"+",5)
    AboutArticle.OctObj.CreateAnimationEvent(AboutArticle.PropsElement.H,30 ,1,"+",30)

    AboutArticle.CallEvents.ResponsiveForMobile(()=>{
      AboutArticle.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[-240],null,[80])   
     AboutArticle.OctObj.ModifyPropsDefault(AboutArticle.OctObj.GetElementId(),null,[-2],null,[90])
    },()=>{
      AboutArticle.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[-30],null,[120])
      AboutArticle.OctObj.ModifyPropsDefault(AboutArticle.OctObj.GetElementId(),null,[0],null,[90])
    })

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

    Oct8Pass.OctObj.CreateAnimationEvent(Oct8Pass.PropsElement.alpha,10,0.1,"-",0)
    Oct8Pass.OctObj.CreateAnimationEvent(Oct8Pass.PropsElement.H,10 ,4,"-",0)
    Oct8Pass.OctObj.CreateEvent(()=>{document.getElementById(id).remove()
      Oct8Pass.OctObj.ModifyPropsDefault(document.getElementById("material"),null,[40],null,[0])
      Oct8Pass.OctObj.StopEvent()
    },1300)
  },false)    
}
