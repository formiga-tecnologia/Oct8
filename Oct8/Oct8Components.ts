/* OCT8 ENGINE FOR COMPONENTS */

/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 17/08/2022 */

class Oct8Components {
    constructor(
        public content:string,
        public Target:HTMLDivElement,
        public Value:string,
        private Components: Array<(string |  HTMLDivElement)[]> = []
    ){
        if(Target != null){
            this.CreateNewComponent(this.content,this.Target,this.Value)
        }
    }

    CreateNewComponent(content:string,Target:HTMLDivElement,value:string){
        let el = document.createElement(content)
        el.innerHTML = value
        Target.appendChild(el)
        let ObjectElement = [content,Target,value]
        this.Components.push(ObjectElement)
    }

    RemoveComponent(Target:HTMLDivElement){
        Target.remove()
    }

    AlterComponentValues(Target:HTMLDivElement,NewValue:string){
        this.Components.forEach(element => {
            let _element = element[1]
            if(_element === Target){
                element[2] = NewValue
                Target.innerHTML = NewValue
            }
        });
    }
}

//export =  Oct8Components