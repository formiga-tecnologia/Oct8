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
   buildOct8(){
    Oct8.Factory.register("CardT",CardT)
   }
   build(){
   
    return `
        <div oct-css='card'> 
            ${Oct8.Factory.ExistProp("Titulo",this.prop,this.Title)}
         </div>
    `
   }
}

export {CardT}