import { Oct8 } from "../../TS/Oct8/Oct.js";
import { Banner } from "../component/Banner.js";
import { MenuBlog } from "../component/menu.js";
import { Article } from "../component/Article.js";
import { CodeSnippet } from "../component/CodSnippet.js";
class HomePage extends Oct8.Pages{
   build(){
      var Codes = new CodeSnippet()
      Codes.prop ={nome:"codigoBase.js",code:`class base()<br> {<br>&nbsp; &nbsp; &nbsp;}`}
      let v = Codes.build()
    this.mount(MenuBlog,{menu:["Home","Iniciando no Oct8","Status","Sobre"]})
    this.mount(Banner,{Conteudo:"O Framework para criação de interfaces e paginas para Web. ",Titulo:"Oct8"})
    this.mount(Article,{Conteudo:"Crie componentes Oct8 com facilidade de uso e sem dificuldade de implementar logicas.",Titulo:"Crie você mesmo as regras </br> de seus componentes ",
      Url:"https://th.bing.com/th/id/OIP.LK2txdLchkVuHzGqaMUY5QHaEK?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3",article:"article:gray"})
    this.mount(Article,{Conteudo:"Crie componentes Oct8 com facilidade de uso e sem dificuldade de implementar logicas.",Titulo:"Crie você mesmo as regras </br> de seus componentes ",
      Url:"",article:"article:white",idcontent:v})
      Oct8.Factory.render("CardT","#app",{Titulo:"Componente Inteligente",Conteudo:"O site é sobre Oct8 v2026",icone:'../../image/Oct8Logo2026.png'})
      Oct8.Factory.render("CardT","#app",{Titulo:"Componente Inteligente",Conteudo:"O site é sobre Oct8 v2026"})

      
   } 
}

export {HomePage}

