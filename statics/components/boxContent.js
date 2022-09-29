import Oct8 from "../../Oct8/Oct8.js";
import Oct8Events from "../../Oct8/Oct8Events.js";

export default function CreateBoxContent(id,title,content){
    var BoxContentStart = new Oct8(id,2,2,120,80,'elb elb-off','materialPage',true)
    InsertValues(id,title,content,BoxContentStart)
}

function InsertValues(id,title,content,oct8pass){
    document.getElementById(id).innerHTML = "<article><h1>"+title+"</h1>"+
    "<p>"+content+"</p>"+
    "</article>"
} 