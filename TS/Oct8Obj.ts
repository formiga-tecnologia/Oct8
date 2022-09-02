
export default class Oct8Obj{
    PropsElement:any = {
        Skew: ["transform", "skew"],
        Rotate: ["transform", "rotate"],
        BackgroundImage: "backgroundImage",
        MoveX: "marginLeft",
        MoveY: "marginTop",
        W: "width",
        H: "height",
        backgroundColor:"backgroundColor"
    }

    Properties:any = {
        marginLeft: 0,
        marginTop: 0,
        width: 0,
        height: 0,
        skew: 0,
        rotate: 0,
        backgroundImage: null,
        backgroundColor:"null"
    }
    ContainerTypes = ["sse","sse-on"]
    containerSet ="";
    id = "Null"
    AnimateEvent = 0

    constructor(
        public Id:string = "",
        public X:number =0,
        public Y:number =0,
        public W:number =0,
        public H:number =0,
        public TypeContainer:string ="",
        public AppendElement:string = "",
        public Render:boolean = true,
    ){
        this.Properties.marginLeft = X;
        this.Properties.marginTop = Y;
        this.Properties.height = H;
        this.Properties.width = W;
        this.containerSet = TypeContainer
        this.id = Id
        if(Render == true)
        {
            this.CreateContainerElement(this.Id,this.AppendElement,this.TypeContainer)
        }
    }

    CreateContainerElement(id:string="", AppendElementId:string="",typeContainerProp:string=""){
        let  newElement = document.createElement("div")
        if(id != ""){
            newElement.id = id
        }
        newElement.className = typeContainerProp
        newElement.setAttribute("style","height:"+this.Properties.height+"vh;width:"+this.Properties.width+"vh; margin-left:"+this.Properties.marginLeft+"vh;margin-top:"+this.Properties.marginTop+"vh;")
        let positionElement = document.getElementById(AppendElementId)?.appendChild(newElement)
    }

    CreateContainerElementBody(id:string ="",typeContainerProp:string="sse sse-on") {
        let newElement = document.createElement("div")
        if (id != "") {
            newElement.id = id
        }
        newElement.className = typeContainerProp
        document.body.appendChild(newElement)
    }

    GetElementId()
    {
        return document.getElementById(this.id)
    }

    ModifyProps(element:HTMLElement, value:any = 0, prop:string="MarginLeft") {

        if (prop.constructor === Array) {

           
            if(value.valueOf().length >=1)
            {
                this.Properties[prop[1]] =  value
                element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)"
            }
            else
            {
                this.Properties[prop[1]] = this.Properties[prop[1]]+value
                element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)"
            }
            
        }
        else {
            if (prop == "backgroundImage") {
                element.style[prop] = value
                this.Properties[prop] = value
            }
            else {
                let Teste:any = prop 
                element.style[Teste] = value + "vh"
                if (value.valueOf().length >= 1) {
                    this.Properties[prop] = value
                }
                else {
                    this.Properties[prop] = this.Properties[prop]+value
                }
                
            }
        }
    }


    CreateAnimationEvent(TypePropModify:string="marginLeft",Id:string="null",Time:number=100,Value:number=0){
        //Receber o parametro que ira mudar, ID (se for null usar do mesmo) ,Tempo  e valor 
        //Modificar props
        if(Id == null)
        {
            Id = this.id
        }
        this.AnimateEvent = setInterval(()=>{
            this.ModifyProps(document.getElementById(this.id)!,Value,TypePropModify)
        },Time)
    }
}