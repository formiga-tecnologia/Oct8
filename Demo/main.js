import { HomePage } from "./templates/Home.js";
import { Oct8 } from "../TS/Oct8/Oct.js";
let a  = new HomePage()
a.render("#app")
Oct8.Styled.GetAttributeCSS("oct-style")
let c = true
Oct8.Factory.SetDataAttribute("oct-style",["ola","ola2"])
document.addEventListener("click",()=>{
    if(c)
    {
        Oct8.Styled.SetAttributeCSS("page:dark")
        c =false
    }
    else{
        Oct8.Styled.SetAttributeCSS("page:white")
        c =true
    }
})