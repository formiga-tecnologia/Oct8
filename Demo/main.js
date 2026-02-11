import { HomePage } from "./templates/Home.js";
import { Oct8 } from "../TS/Oct8/Oct.js";
let a  = new HomePage()
a.render("#app")



  document.getElementById("box_test").addEventListener("mouseenter",()=>{
Oct8.Animate.playAnimation(document.getElementById("box_test"),[
    "fadeOut",
    "slideUp",
    "fadeIn"
  ])
  })