
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
    ObjectsFactory:Array<any> = []

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
        backgroundColor:"null",
        colider:false
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
        return newElement
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
                    element.style.transform = prop[1] + "(" + value + "deg)";
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
                    element.style.transform = prop[1] + "(" + this.Properties[prop[1]] + "deg)";
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

    CreateObjectFactory(Object:any,ObjectName:string){
        this.ObjectsFactory.push([Object,ObjectName])
    }
    AppendObjectFacyotyTo(ObjectName:string,param:any){
        this.ObjectsFactory.forEach(element => {
            if(element[1] == ObjectName)
            {
                if(param!=null)
                {
                    element[0](param)
                }
                else
                {
                    element[0]()
                }
                
            }
        });
    }

    CreateAnimationEvent(element:any,TypePropModify:string="marginLeft",Time:number=100,Value:number=0,moveDirect:String="+",LimitValue:any="infinity"){
        //Receber o parametro que ira mudar, ID (se for null usar do mesmo) ,Tempo  e valor 
        //Modificar props
        let IdAnimateFixed = this.AnimateEvent.length+1
        this.AnimateEvent[this.AnimateEvent.length] = setInterval(()=>{
            let IdAnimate = IdAnimateFixed
            let valueMove = 0
            if(moveDirect == "+")
            {
                valueMove = parseInt(element.style[TypePropModify])+Value
                element.style[TypePropModify] = valueMove+"vh"
                //this.ModifyProps(element!,+Value,TypePropModify)
            }
            else
            {
                valueMove = parseInt(element.style[TypePropModify])-Value
                element.style[TypePropModify] = valueMove+"vh"
                //this.ModifyProps(element!,-Value,TypePropModify)
            }

            if(typeof(LimitValue) == "number")
            {             
              if(TypePropModify.length >1)
              {
                if( LimitValue < this.Properties[TypePropModify] && moveDirect == "+" || LimitValue < this.Properties[TypePropModify[1]] && moveDirect == "+" )
               {
                clearInterval(IdAnimate)
               }
               if( LimitValue > this.Properties[TypePropModify] && moveDirect != "+" || LimitValue > this.Properties[TypePropModify[1]] && moveDirect != "+")
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

    /**
     * Modify your selected element  [ X,Y,W,H ] propries.
     * @param {string} id of tag Html what your want add to page.
     * @param {string} X Value of X position.
     * @param {string} Y Value of Y position.
     * @param {string} W Value of Width value.
     * @param {string} H Value of Heigth value.
     */
    ModifyPropsDefault(id:string="",X:any=0,Y:any=0,W:any=0,H:any=0){
        let ModifyId:any = id == "" ? this.GetElementId() : id
        let Dynamic:any
        Dynamic = X !=null ? this.ModifyProps(ModifyId,X,this.PropsElement.MoveX) : 0
        Dynamic = Y!=null ? this.ModifyProps(ModifyId,Y,this.PropsElement.MoveY) : 0
        Dynamic = H!=null ? this.ModifyProps(ModifyId,H,this.PropsElement.H) : 0
        Dynamic = W!=null ? this.ModifyProps(ModifyId,W,this.PropsElement.W) : 0
        
    }

    CreateColider(ColiderElement:any,HitElement:any,functionColider:any){
        var element = document.getElementById("ola")
        element?.style.height
        element?.style.marginLeft
        var ColiderValues_ =  [ ColiderElement.style.marginTop, ColiderElement.style.width,ColiderElement.style.height,ColiderElement.style.marginLeft]
        var HitValues_ =  [ HitElement.style.marginTop, HitElement.style.width,HitElement.style.height,HitElement.style.marginLeft] 
        var ColiderMinValue_Width =  parseInt(ColiderValues_[3])-parseInt(ColiderValues_[1])
        var ColiderMaxValue_Width =  parseInt(ColiderValues_[3])+parseInt(ColiderValues_[1])
        
        if(parseInt(ColiderValues_[0])-parseInt(ColiderValues_[1])<parseInt(HitValues_[0]) && parseInt(HitValues_[3]) >= ColiderMinValue_Width &&  ColiderMaxValue_Width >= parseInt(HitValues_[3])  ){
            functionColider()
            console.warn("oi")
        }

        if(parseInt(ColiderValues_[0])+parseInt(ColiderValues_[1])<parseInt(HitValues_[0]) && parseInt(HitValues_[3]) >= ColiderMinValue_Width &&  ColiderMaxValue_Width >= parseInt(HitValues_[3])  ){
            functionColider()
            console.error("se pegar aqui deu xabe")
        }

    }

}