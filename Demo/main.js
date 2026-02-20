import { Oct8 } from "../TS/Oct8/Oct.js";
//Componentes
import { MenuBlog } from "./component/menu.js";
import { Banner } from "./component/Banner.js";
import { Minicards } from "./component/MiniCards.js";
import { Cards } from "./component/Cards.js";
import { HomePage } from "./templates/Home.js";
import { Container } from "./component/Container.js";
import { CardsDocument } from "./Document/Cards_document.js";
import { WarningLabel } from "./component/WarningLabel.js";

//Initial Styled
Oct8.Styled.InitCSS()
Oct8.Styled.CreateApplyRule("LabelAviso",[Oct8.CssClassList.LabelWarning])

//Reactions 
Oct8.Reaction.create("countNum",0)

//Componentes Registrados
Oct8.Factory.register("Banner_big",Banner)
Oct8.Factory.register("MiniCards",Minicards)
Oct8.Factory.register("Cards",Cards)
Oct8.Factory.register("MenuPrinc",MenuBlog)
Oct8.Factory.register("Container",Container)
Oct8.Factory.register("LabelDocument",WarningLabel)

//Documents
new CardsDocument()

//Default render
Oct8.Factory.render("LabelDocument","#app",{})
Oct8.Factory.render("MenuPrinc","#app",{menu:["Home","Referencia","Templates","Blog"]})


//Paginas
Oct8.Factory.register("Home",HomePage)
Oct8.Factory.render("Home","#app")
HomePage.buildPage()
HomePage.ElementosPage()
HomePage.AddEvents()


