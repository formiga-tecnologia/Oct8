import { Oct8 } from "../TS/Oct8/Oct.js";
//Componentes
import { MenuBlog } from "./component/menu.js";
import { Banner } from "./component/Banner.js";
import { Minicards } from "./component/MiniCards.js";

Oct8.Factory.register("Banner_big",Banner)
Oct8.Factory.register("MiniCards",Minicards)


Oct8.Factory.register("MenuPrinc",MenuBlog)
Oct8.Factory.render("MenuPrinc","#app",{menu:["Home","Referencia","Templates","Blog"]})


//Paginas
import { HomePage } from "./templates/Home.js";

Oct8.Factory.register("Home",HomePage)

//So para teste
Oct8.Factory.render("Home","#app")
HomePage.buildPage()
