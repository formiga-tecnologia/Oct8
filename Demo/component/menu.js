import { Oct8 } from "../../TS/Oct8/Oct.js";
class MenuBlog{
    constructor(List){
        this.props = List
    }
    MenuOptions(List){
        let menu = ""
        List.forEach(element => {
            menu+="<li>"+element+"</li>"
        });
        return menu
    }

    build(){
        return `<nav oct-css='menu'>
            <ul>
                ${Oct8.Factory.ExistProp("menu",this.props,this.MenuOptions)}
                
            </ul>
        </nav>`
    }
}

export {MenuBlog}