import { Oct8 } from "../../TS/Oct8/Oct.js"


class  CardsDocument{
 constructor()
 {
    
    this.Document_homePage()
 }
 construirCard(Botao,Titulo,Conteudo,css){
    return {
        Botao : Botao,
        Titulo : Titulo,
        Conteudo : Conteudo,
        css : css
    }
 }
    Document_homePage(){
        Oct8.Document.newDocument("CardHome",this.construirCard(
        "Sobre Oct8","Porque Oct8?" ,"Aprenda os seus beneficios e facilidades de uso!!"," md"))
    }
}

export {CardsDocument}