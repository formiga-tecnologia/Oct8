import { Oct8Factory } from "../TS/Oct8/Oct8Factory.js"

class Header{
    constructor(props={}){
        this.props = props
        this.element = null
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
        return `<h1>${this.props.content}</h1>`
    }
}


Oct8Factory.register("Header",Header)
let s = ["Word","Excel","PTT"]
let base = []
s.forEach(element => {

    base.push(Oct8Factory.render("Header","#app",{content:element}))
        
});

Oct8Factory.destroy(base[2])