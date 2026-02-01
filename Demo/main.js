
import {Oct8} from "../TS/Oct8/Oct.js"
import { Oct8Routes } from "../TS/Oct8/Oct8Routes.js"
import { MenuBlog } from "./component/menu.js"
import {Oct8Styled} from "../TS/Oct8/Oct8Styled.js"
import {Oct8Page} from "../TS/Oct8/Oct8Page.js"

// Oct8.Factory.register("menu", MenuBlog)
// Oct8.Factory.render("menu","#app",{menu:["Home","Artigos"]})

class Home {
  build() {
     var f = new MenuBlog(["d"])
     f.props.menu = ["d"]
    return  f.build()
  }
}

class Produtos {
  build() {
    return `<h1 class='colors'>Produtos</h1>`
  }
}

class Page extends Oct8Page{
    build(){
        this.mount(MenuBlog,{menu:["opa"]})
        this.mount(Produtos)
    }
    
}

let a  = new Page()
a.render("#app")



// Oct8.Factory.register("Home", Produtos)
// Oct8.Factory.register("Produtos", Produtos)


// Oct8Routes.register("/", Produtos)
// Oct8Routes.register("/produtos",Produtos)

// Oct8Routes.mount("#app")
// Oct8Routes.navigate("/")

// Oct8Styled.register("White","./css/theme_white.css")
// Oct8Styled.register("Body","./css/colors_blue.css")

// let f = true
// document.addEventListener("click",()=>{
//     if(f){
//         Oct8Styled.unuse("Body")
//         Oct8Styled.set("White")
//         f= false
//     }
//     else{
//         Oct8Styled.clear()
//          Oct8Styled.set("White")
//         Oct8Styled.set("Body")
//         f =true
//     }

// })