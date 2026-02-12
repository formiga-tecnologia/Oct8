import { HomePage } from "./templates/Home.js";
import { Oct8 } from "../TS/Oct8/Oct.js";
import { Article } from "./component/Article.js";
let a  = new HomePage()
a.render("#app")
Oct8.Reaction.update("teste",90)

new Oct8.Query("article").where("div").where("h1").delete()


Oct8.Events.createEventType("enabledClick",(el,handler)=>{
  el.addEventListener("click",e=>{
    var s = prompt("Deseja mesmo executar isso?")
    if(s == "sim")
    {
      handler(e)
    }
    else{
      console.log(Oct8.Events.getStats("enabledClick"))
    }
    
  })
})
Oct8.Events.register("enabledClick","click_teste",()=>{

Oct8.Animate.playAnimation(document.getElementById("box_test"),[
    "fadeOut",
    "slideUp",
    "fadeIn"
  ])
  })

