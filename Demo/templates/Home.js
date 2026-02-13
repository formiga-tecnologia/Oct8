import { Oct8 } from "../../TS/Oct8/Oct.js";
class HomePage{
  constructor(prop={}){
    this.prop = prop
  }
  static buildPage(){
    Oct8.Factory.render("Banner_big","#page",{Titulo:"teste"})
  }
   build(){
    return `
     <div id='page'>
          
     </div>
    `
   } 
}

export {HomePage}

