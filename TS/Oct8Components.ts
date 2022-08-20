/* OCT8 ENGINE FOR COMPONENTS */

/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 17/08/2022 */

export default class Oct8Components {
    constructor(
        public content:string,
        public Target:HTMLDivElement,
        public Value:string,
        public PropsValues: any =[],
        public Components: Array<(string | Number | HTMLDivElement)[]> = [],
        public CompName:string
    ){
        if(Target != null){
            this.CreateNewComponent(this.CompName,this.content,this.Target,this.Value)
        }
    }

    CreateNewComponent(ComponentName:string,content:string,Target:HTMLDivElement,value:string){
        let el = document.createElement(content)
        el.id = ComponentName
        el.innerHTML = value
        Target.appendChild(el)
        let ObjectElement = [ComponentName,content,Target,value,0]
        this.Components.push(ObjectElement)
        console.log("Op")
    }

    GenerateComponent(ComponentName:string,TargetElement:string){
       
        this.Components.forEach(element => {
            if(element[0] == ComponentName){
                
                let number = parseInt(element[4].toString())
                number+=1
                element[4] = number
                let el = document.createElement(element[1].toString())
                el.id=element[0]+"["+number+"]"
                el.innerHTML = element[3].toString()
                document.getElementById(TargetElement)?.appendChild(el)
            }
        });
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
            let _element = element[0]
            if(_element === Target){
                element[2] = NewValue
                let ele = null 
                ele = document.getElementById(element[0].toString())
                ele!.innerHTML = NewValue;
            }
        });
    }
}

