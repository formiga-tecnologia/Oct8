import { MenuBlog } from "./component/menu.js";
import { Oct8 } from "../TS/Oct8/Oct.js";

Oct8.Factory.register("MenuPrinc",MenuBlog)
Oct8.Factory.render("MenuPrinc","#app",{menu:["Home","Referencia","Templates","Blog"]})