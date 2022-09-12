import Oct8 from "../../Oct8/Oct8.js";

export default function CreareAboutArticle(id,title,value)
{
    var AboutArticle = new Oct8(id,0,0,"infinity",40,"elb elb-off","material",true)
    InsertValues(id,title,value)    
}

function InsertValues(id,title,value){
    document.getElementById(id).innerHTML = "<div class='card'>"
    +"<div class='card-body'>"
    +"<h1>"+title+"</h1></br>"
     +value
    +"</div>"
  +"</div>"
}
