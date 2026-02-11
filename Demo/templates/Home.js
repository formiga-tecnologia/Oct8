import { Oct8 } from "../../TS/Oct8/Oct.js";
import { Banner } from "../component/Banner.js";
import { MenuBlog } from "../component/menu.js";
import { Article } from "../component/Article.js";
class HomePage extends Oct8.Pages{
   build(){
    this.mount(MenuBlog,{menu:["Home","Iniciando no Oct8","Status","Sobre"]})
    this.mount(Banner,{Conteudo:"O Framework para criação de interfaces e paginas para Web. ",Titulo:"Oct8"})
    this.mount(Article,{Conteudo:"Crie componentes Oct8 com facilidade de uso e sem dificuldade de implementar logicas.",Titulo:"Crie você mesmo as regras </br> de seus componentes ",
      Url:"https://th.bing.com/th/id/OIP.LK2txdLchkVuHzGqaMUY5QHaEK?w=269&h=180&c=7&r=0&o=7&pid=1.7&rm=3",article:"article:gray"})
   } 
}

export {HomePage}

