import { Oct8Anima } from "./Oct8Anima.js";
import { Oct8Document } from "./Oct8Document.js";
import { Oct8Event } from "./Oct8Event.js";
import { Oct8Factory,FactoryClass } from "./Oct8Factory.js";
import { Oct8Page } from "./Oct8Page.js";
import { Oct8Query } from "./Oct8Query.js";
import {Oct8Reaction} from "./Oct8Reaction.js"
import { Oct8Routes } from "./Oct8Routes.js";
import { Oct8Styled } from "./Oct8Styled.js";

class Oct8{
    static Factory =  Oct8Factory
    static Reaction = Oct8Reaction
    static Styled = Oct8Styled
    static Pages = Oct8Page
    static Route = Oct8Routes
    static Animate = Oct8Anima
    static Events =  Oct8Event
    static Query = Oct8Query
    static FactoryClass = FactoryClass
    static Document = Oct8Document

    static CssClassList:Record<string,string> = {
    DisplayContainer:"div ",
    LabelWarning:"label",
    Card:"card",
    TextCenter:"center",
    ColorRed:"red"
  }
}

export {Oct8}