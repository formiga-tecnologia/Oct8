import { Oct8Factory } from "../TS/Oct8/Oct8Factory.js"
import { Oct8Reaction } from "../TS/Oct8/Oct8Reaction.js"
import {Oct8} from "../TS/Oct8/Oct.js"

class Header{
    constructor(props={}){
        this.props = props
        this.element = null
        this.State =false
        
    }
    setterRule(){
        if(this.props.content == "Excel"){
            return "green"
        }
        else{
            return "black"
        }
    }
    styled(){

        return {
            color:"red",
            backgroundColor:this.setterRule(),
            textAlign:"center"
        }
    }
    build(){
        if(this.State == true)
        {
        return `<h1>${this.props.content} [update] </h1>`

        }
        this.State =true
        return `<h1>${this.props.content} + ${Oct8Reaction.inject("Valor")} </h1>`
    }
}

Oct8Reaction.create("Valor",20)
Oct8Factory.register("Header",Header)
let s = ["Word","Excel","PTT"]
let base = []
s.forEach(element => {

    base.push(Oct8Factory.render("Header","#app",{content:element}))
        
});

document.addEventListener('click',()=>{
    Oct8Factory.update(base[1])
    Oct8Reaction.update("Valor",10)
    Oct8Factory.destroy(base[0])
})