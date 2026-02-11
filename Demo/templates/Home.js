import { Oct8 } from "../../TS/Oct8/Oct.js";
import { Banner } from "../component/Banner.js";
import { MenuBlog } from "../component/menu.js";
class HomePage extends Oct8.Pages{
   build(){
    this.mount(MenuBlog,{menu:["Home","Iniciando no Oct8","Status","Sobre"]})
    this.mount(Banner,{Conteudo:"Oct8 Novidades",Titulo:"Sobre Oct8 V2026"})

   } 
}

export {HomePage}

