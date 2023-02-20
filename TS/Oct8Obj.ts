
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

    frameAnimation:any = []
    frameSelected:number = 0

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

    CreateAnimationEvent(element:any,TypePropModify:string="marginLeft",Time:number=100,Value:number=0,LimitValue:any="infinity"){
        //Receber o parametro que ira mudar, ID (se for null usar do mesmo) ,Tempo  e valor 
        //Modificar props
        let IdAnimateFixed = this.AnimateEvent.length+1
        this.AnimateEvent[this.AnimateEvent.length] = setInterval(()=>{
            let IdAnimate = IdAnimateFixed
            let valueMove = 0
            let valueTransform= 0
            let GetTransformation =""

                if(typeof TypePropModify == "object")
                {
                    var getValueTransform_ = element.style.transform;
                    var ValuesGets = getValueTransform_.split(" ")
                    for (let index = 0; index < ValuesGets.length; index++) {
                        if(ValuesGets[index].includes(TypePropModify[1])){
                            GetTransformation = ValuesGets[index]
                            break
                        }
                    }
                    //valueTransform = parseInt(element.style[TypePropModify][0][1])-Value
                    if(GetTransformation!="")
                    {
                        GetTransformation = GetTransformation.replace("(","").replace(")","").replace(TypePropModify[1],"").replace("deg","")
                        if(Value<0){
                            var a = Math.abs(Value)
                            valueTransform = parseInt(GetTransformation)-a
                        }
                        else
                        {
                            valueTransform = parseInt(GetTransformation)+Value
                        }
                        
                    }
                    
                    if(valueTransform>0 || Value<0 && valueTransform!=0  )
                    {
                        element.style[TypePropModify[0]] = TypePropModify[1]+'('+valueTransform+"deg)"
                    }
                    else
                    {
                        //Value=Value-1
                        element.style[TypePropModify[0]] = TypePropModify[1]+'('+(Value-1)+"deg)"
                    }
                    
                }
                else
                {
                    
                    if(Value<0){
                        var a = Math.abs(Value)
                        valueMove = parseInt(element.style[TypePropModify])-a
                    }
                    else
                    {
                        valueMove = parseInt(element.style[TypePropModify])
                        valueMove = valueMove+Value
                    }
                    element.style[TypePropModify] = valueMove+"vh"
                }
            

            if(typeof(LimitValue) == "number")
            {     
              if(TypePropModify.length >1 && element.style[TypePropModify]!=undefined)
              {
                if( LimitValue < parseInt(element.style[TypePropModify].replace("vh","")) && Value>0)
               {
                clearInterval(IdAnimate)
               }
               if( LimitValue > parseInt(element.style[TypePropModify].replace("vh","")) && Value<0)
               {
                clearInterval(IdAnimate)
               }
              }
              if(GetTransformation!=undefined)
              {
                if( LimitValue<parseInt(GetTransformation)&& Value>0)
                {
                    clearInterval(IdAnimate)
                }
                if(LimitValue>parseInt(GetTransformation) && Value<0)
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

    CreateAnimationCssEvent(animationCssRuleName:string,element:any,time:number,timeAnimation:number){
        this.CreateEvent(()=>{
            element.style.webkitAnimationName=animationCssRuleName
            element.style["-webkit-animation-duration"] = ''+timeAnimation+'s'
        },time)
    }
    StopAnimationCssEvent(element:any,time:number){
        this.CreateEvent(()=>{
            element.style.webkitAnimationName = ""
        },time)
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

    NewScene(SceneNameFrame:string,Element:any="null",Time:number,TimeFrameRate:number){
        var Object:any = {
            SceneName:SceneNameFrame,
            frames:[Element],
            times:Time,
            TimeFrameRates:TimeFrameRate
        }
        this.frameAnimation.push(Object)
    }

    RemoveScene(SceneNameFrame:string){
        var i=0
        while(this.frameAnimation.length > i){
            if(this.frameAnimation[i].SceneName == SceneNameFrame){
                this.frameAnimation.splice(i, 1)
                break
            }
            i++
        }
    }

    ExecuteScene(SceneNameFrame:string){
        var i:number = 0;
        var RelativeTime = 0
        var ValueToReturn = []
        while(this.frameAnimation.length > i){
            if(this.frameAnimation[i].SceneName == SceneNameFrame){
                this.frameSelected = i
                    var ElementsToExec =  0
                    var PropElement = null
                    while(this.frameAnimation[i].frames[0].length>=ElementsToExec){
                         PropElement=this.frameAnimation[i].frames[0][ElementsToExec]
                        if(typeof PropElement == "string"){
                            ValueToReturn.push(PropElement)
                        }
                        if(typeof PropElement == "function"){
                                this.frameAnimation[i].frames[0][ElementsToExec]()
                        }
                        ElementsToExec++
                    }
                    ElementsToExec = 0
                    if(ValueToReturn.length >=1){
                        return ValueToReturn
                    }
                break
            }
            i++
        }
    }
}