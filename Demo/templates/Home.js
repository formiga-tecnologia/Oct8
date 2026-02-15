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

      Oct8.Factory.render("MiniCards","#page",{titulo:"Ferramentas para sua Produtividade e agilidade",card:[["Versatil","Utilize as classes como sua imaginação ordenar.","./img/3d-cube.png"],
        ["Reações","Crie variaveis que sempre são atualizadas em tempo real.","./img/3d-cube.png"] ,
        ["Ciclo controlado","Você possui todo o cilco de vida e de atualziação, sem Re-renders.","./img/3d-cube.png"] 
      ]})

           Oct8.Factory.render("Banner_big","#page",{Titulo:"Construa componentes mais rapido!",style:"big whiteRange flex",
      Subtitulo:"Com Oct8 se tornou mais intuitivo contruir componentes com Js com legibilidade e flexibilidade.",
      Button:"Acessar Documentação",Code:`
        < r base> <br>
           < base> < /base> </br>
        < /r base>
      `})
      Oct8.Factory.render("Container","#page",{css:"sm",id:"cardContainer"})
      
  }
  
  static ElementosPage(){
    Oct8.Factory.render("Cards","#cardContainer",Oct8.Document.getDocument("CardHome"))
    Oct8.Factory.render("Cards","#cardContainer",Oct8.Document.getDocument("CardHome"))
    Oct8.Factory.render("Cards","#cardContainer",Oct8.Document.getDocument("CardHome"))
    Oct8.Factory.render("Cards","#cardContainer",Oct8.Document.getDocument("CardHome"))

  }
   build(){
    return `
     <div id='page'>
          
     </div>
    `
   } 
}

export {HomePage}

