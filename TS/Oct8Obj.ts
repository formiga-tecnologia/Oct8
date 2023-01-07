
export default class Oct8Obj{
    PropsElement:any = {
        Skew: ["transform", "skew"],
        Rotate: ["transform", "rotate"],
        ScaleX: ["transform", "scaleX"],
        ScaleY: ["transform", "scaleY"],
        BackgroundImage: "backgroundImage",
        MoveX: "marginLeft",
        MoveY: "marginTop",
        W: "width",
        H: "height",
        backgroundColor: "background-color",
        alpha:"opacity"
    }

    Properties:any = {
        marginLeft: 0,
        marginTop: 0,
        width: 0,
        height: 0,
        skew: 0,
        rotate: 0,
        translateX:0,
        scaleX:0,
        scaleY:0,
        opacity:0,
        backgroundImage: null,
        backgroundColor:"null"
    }
    ContainerTypes = ["sse","sse-on"]
    containerSet ="";
    id = "Null"
    AnimateEvent:Array<any>=[]
    event = 0
    On:boolean = true
    animMove =0

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

    /**
     * Create one new Element for your page,insert one Id.
     * @param {string} id of tag Html what your want add to page.
     * @param {string} AppendElementId Content for your new element.
     * @param {string} typeContainerProp Target object of your add the new element.
     */
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
        return document.getElementById(this.Id)
    }

    ModifyProps(element:HTMLElement, value:any = 0, prop:string="MarginLeft") {

        if (prop.constructor === Array) {

           
            if(value.valueOf().length >=1)
            {
                this.Properties[prop[1]] =  value
                if (prop[1] == "rotate" || prop[1] == "skew") 
                {
                    element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)"    
                }
                else
                {
                    element.style[prop[0]] =  this.Properties[prop[1]] ;    
                }
            }
            else
            {
                this.Properties[prop[1]] = this.Properties[prop[1]]+value
                if(prop[1] == "rotate" || prop[1] =="skew")
                {
                    element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)"    
                }
                else
                {
                    element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + ")" 
 
                }
            }
            
        }
        else {
            if (prop == "backgroundImage") {
                element.style[prop] = value
                this.Properties[prop] = value
            }
            else {
                let Teste:any = prop 
                
                if (value.valueOf().length >= 1) {
                    this.Properties[prop] = value[0]
                    element.style[Teste] = this.Properties[prop] + "vh";
                }
                else {
                    this.Properties[prop] = this.Properties[prop]+value

                    if(Teste == "opacity")
                    {
                    element.style[Teste] = this.Properties[prop]
                    }
                    else
                    {
                        element.style[Teste] = this.Properties[prop]+"vh";
                    }
                    
                }
                
            }
        }
    }

    CreateAnimationEvent(TypePropModify:string="marginLeft",Time:number=100,Value:number=0,moveDirect:String="+",LimitValue:any="infinity"){
        //Receber o parametro que ira mudar, ID (se for null usar do mesmo) ,Tempo  e valor 
        //Modificar props
        let IdAnimateFixed = this.AnimateEvent.length+1
        this.AnimateEvent[this.AnimateEvent.length] = setInterval(()=>{
            let IdAnimate = IdAnimateFixed
            if(moveDirect == "+")
            {
                this.ModifyProps(document.getElementById(this.Id)!,+Value,TypePropModify)
            }
            else
            {
                this.ModifyProps(document.getElementById(this.Id)!,-Value,TypePropModify)
            }

            if(typeof(LimitValue) == "number")
            {             
              if(TypePropModify.length >1)
              {
                if( LimitValue < this.Properties[TypePropModify] && moveDirect == "+")
               {
                clearInterval(IdAnimate)
               }
               if( LimitValue > this.Properties[TypePropModify] && moveDirect != "+")
               {
                clearInterval(IdAnimate)
               }
              }
            }
   
        },Time)
    }

    StopAnimation(Id=0){
        clearInterval(this.AnimateEvent[Id])
    }

    CreateEvent(functionCallback:any=(()=>{console.log("Oct8 Functions")}), time:number=100) {
        if (this.On == true) {
            this.event = setInterval(functionCallback, time)!
        }
        else {
            this.StopEvent()
        }
    }

    StopEvent() {
        clearInterval(this.event)
    }
    ModifyPropsDefault(id:string="",X:any=0,Y:any=0,W:any=0,H:any=0){
        let ModifyId:any = id == "" ? this.GetElementId() : id
        let Dynamic:any
        Dynamic = X !=null ? this.ModifyProps(ModifyId,X,this.PropsElement.MoveX) : 0
        Dynamic = Y!=null ? this.ModifyProps(ModifyId,Y,this.PropsElement.MoveY) : 0
        Dynamic = H!=null ? this.ModifyProps(ModifyId,H,this.PropsElement.H) : 0
        Dynamic = W!=null ? this.ModifyProps(ModifyId,W,this.PropsElement.W) : 0
        
    }

}