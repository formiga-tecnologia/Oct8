import { HomePage } from "./templates/Home.js";
import { Oct8 } from "../TS/Oct8/Oct.js";
let a  = new HomePage()
a.render("#app")
Oct8.Styled.GetAttributeCSS("oct-style")

document.addEventListener("click",()=>{
    Oct8.Styled.SetAttributeCSS("page:dark")
})