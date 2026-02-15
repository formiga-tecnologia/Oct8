import { Oct8 } from "../../TS/Oct8/Oct.js"


class CardsDocument{
  static  Document_homePage(){
        Oct8.Document.newDocument("CardHome",{
        css:" md"
        ,Titulo:"Porque Oct8?"
        ,Botao:"Sobre Oct8"
        ,Conteudo:"Aprenda os seus beneficios e facilidades de uso!!"})
    }
}

export {CardsDocument}