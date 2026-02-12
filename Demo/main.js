import { HomePage } from "./templates/Home.js";
import { Oct8 } from "../TS/Oct8/Oct.js";
import { Article } from "./component/Article.js";
let a  = new HomePage()
a.render("#app")
Oct8.Reaction.update("teste",90)
var f = new Article({Conteudo:"Crie componentes Oct8 com facilidade de uso e sem dificuldade de implementar logicas.",Titulo:"Crie você mesmo as regras </br> de seus componentes ",
      Url:"https://th.bing.com/th/id/OIP.LK2txdLchkVuHzGqaMUY5QHaEK?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3",article:"article:gray"});
Oct8.Factory.register("a",Article)


                    console.log(Oct8.Factory.ValidValue("Teste",(v)=>{ return String(v).length>=6},"Verdade","Falso po"))

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

