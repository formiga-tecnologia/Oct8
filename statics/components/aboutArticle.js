import Oct8 from "../../Oct8/Oct8.js";

export default function CreareAboutArticle(id,title,value)
{
    var AboutArticle = new Oct8(id,0,0,"infinity",0,"elb elb-off","material",true)
    InsertValues(id,title,value)    
    AboutArticle.OctObj.CreateAnimationEvent(AboutArticle.PropsElement.alpha,10,0.1,"+",5)
    AboutArticle.OctObj.CreateAnimationEvent(AboutArticle.PropsElement.H,30 ,1,"+",30)

  }

function InsertValues(id,title,value){
    document.getElementById(id).innerHTML = "<div class='card'>"
    +"<div class='card-body'>"
    +"<h1>"+title+"</h1></br>"
     +value
    +"</div>"
  +"</div>"
}
