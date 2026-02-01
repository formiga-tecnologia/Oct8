
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