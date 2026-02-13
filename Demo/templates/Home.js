import { Oct8 } from "../../TS/Oct8/Oct.js";
class HomePage{
  constructor(prop={}){
    this.prop = prop
  }
  static buildPage(){
    Oct8.Factory.render("Banner_big","#page",{Titulo:"Oct8 2026",style:"big orange",
      Subtitulo:"Framework web para criação e gerenciamento de UI interativa",
      Button:"Acessar Documentação",img:"../image/Oct8Logo2026.png"})

     Oct8.Factory.render("Banner_big","#page",{Titulo:"Construa componentes mais rapido!",style:"big whiteRange flex",
      Subtitulo:"Com Oct8 se tornou mais intuitivo contruir componentes com Js com legibilidade e flexibilidade.",
      Button:"Acessar Documentação",Code:`
        < r base> <br>
           < base> < /base> </br>
        < /r base>
        
      `})
  }
   build(){
    return `
     <div id='page'>
          
     </div>
    `
   } 
}

export {HomePage}

