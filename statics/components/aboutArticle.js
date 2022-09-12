import Oct8 from "../../Oct8/Oct8.js";

export default function CreareAboutArticle(id,title,value)
{
    var AboutArticle = new Oct8(id,0,0,"infinity",40,"elb elb-off art","material",true)
    InsertValues(id,title,value)    
    AboutArticle.CreateAnimationEvent(AboutArticle.PropsElement.alpha,90,0.1,"+",5)
    AboutArticle.CreateAnimationEvent(AboutArticle.PropsElement.Rotate,120,0.1,"+",1)
    //AboutArticle.CreateAnimationEvent(AboutArticle.PropsElement.ScaleY,2,11,"+")

}

function InsertValues(id,title,value){
    document.getElementById(id).innerHTML = "<div class='card'>"
    +"<div class='card-body'>"
    +"<h1>"+title+"</h1></br>"
     +value
    +"</div>"
  +"</div>"
}
