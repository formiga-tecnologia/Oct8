import { Oct8 } from "../../TS/Oct8/Oct.js"

class CardT{
    valuesComp =""
   constructor(props)
   {
    this.prop =props
    
    this.valuesComp = ""
   }
   Title(Title){
      return `<h1>${Title}</h1>`
   }
   Content(Content){
      return  `<p>${Content}</p>`
   }
   icon(icon){
      return `<img src='${icon}'>`
   }
   buildOct8(){
    Oct8.Factory.register("CardT",CardT)
   }
   build(){
   
    return `
        <div oct-css='card'> 
            ${Oct8.Factory.ExistProp("icone",this.prop,this.icon)}
            ${Oct8.Factory.ExistProp("Titulo",this.prop,this.Title)}
            ${Oct8.Factory.ExistProp("Conteudo",this.prop,this.Content)}
         </div>
    `
   }
}

export {CardT}