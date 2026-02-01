import { Oct8 } from "../../TS/Oct8/Oct.js";

class MenuBlog{
    constructor(List){
        this.props = List
    }
    MenuOptions(list){
        let menu = ""
        list.forEach(element => {
            menu+="<li>"+element+"</li>"
        });
        return menu
    }
    styled(){
        return {
            color:"#ce9522cc",
            float:"left",
            marginTop:"-2vh"
        }
    }
    build(){
        let lista = this.props.menu
        return `<nav>
            <ul>
                ${this.MenuOptions(lista)}
            </ul>
        </nav>`
    }
}

export {MenuBlog}