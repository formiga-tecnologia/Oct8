/* OCT8 ENGINE FOR COMPONENTS */

/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 17/08/2022 */

 export class Oct8Components {
    constructor(
        public content:string,
        public Target:HTMLDivElement,
        public Value:string,
        public PropsValues: any =[],
        public Components: Array<(string |  HTMLDivElement)[]> = []
    ){
        if(Target != null){
            this.CreateNewComponent(this.content,this.Target,this.Value)
        }
    }

    CreateNewComponent(content:string,Target:HTMLDivElement,value:string){
        this.Components =[]
        let el = document.createElement(content)
        el.innerHTML = value
        Target.appendChild(el)
        let ObjectElement = [content,Target,value]
        this.Components.push(ObjectElement)
    }

    RemoveComponent(Target:HTMLDivElement){
        Target.remove()
    }

    GetComponent(){
        return this.Components[0][1]
    }

    CreateNewProps(KeyValue:any,Value:any){ 
        let object = { KeyValue,Value }
        this.PropsValues.push(object)
    }

    GetPropValue(KeyValue:any){
        for (let index = 0; index < this.PropsValues.length; index++) {
            if(this.PropsValues[index].KeyValue == KeyValue){
                return this.PropsValues[index].Value
            }
        }
    }

    AlterPropValue(KeyValue:any,NewValue:any){
        for (let index = 0; index < this.PropsValues.length; index++) {
            if(this.PropsValues[index].KeyValue == KeyValue){
                this.PropsValues[index].Value = NewValue
            }
        }
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

