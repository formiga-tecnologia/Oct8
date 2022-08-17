
class Oct8Components {
    constructor(
        public content:string,
        public Target:HTMLDivElement,
        public Value:string
    ){
        if(Target != null){
            this.CreateNewComponent(this.content,this.Target,this.Value)
        }
    }

    CreateNewComponent(content:string,Target:HTMLDivElement,value:string){
        let el = document.createElement(content)
        el.innerHTML = value
        Target.appendChild(el)
    }
}

//export =  Oct8Components