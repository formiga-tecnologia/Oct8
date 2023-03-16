
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
    timeLine_ = {}
    timeline_event:Array<any> = [0,0,false]
    frameAnimation:any = []
    frameSelected:number = 0
    current_scene:number = 0
    Scene_Return_values:any = []

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
    CreateContainerElement(id:string="", AppendElementId:string="",typeContainerProp:string="",typeValueCreated="div"){
        let  newElement = document.createElement(typeValueCreated)
        if(id != ""){
            newElement.id = id
        }
        newElement.className = typeContainerProp
        newElement.setAttribute("style","height:"+this.Properties.height+"vh;width:"+this.Properties.width+"vh; margin-left:"+this.Properties.marginLeft+"vh;margin-top:"+this.Properties.marginTop+"vh;")
        let positionElement = document.getElementById(AppendElementId)?.appendChild(newElement)
        return newElement
    }

    CreateContainerElementBody(id:string ="",typeContainerProp:string="sse sse-on",typeValueCreated="div") {
        let newElement = document.createElement(typeValueCreated)
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

    CreateAnimationCssEvent(animationCssRuleName:string,element:any,time:number,timeAnimation:number,iteration:any="infinite",reverse:String="reverse",fillMode:boolean=true){      
        element.style.webkitAnimationName+=" "+animationCssRuleName
        element.style["animation-iteration-count"] = iteration
        element.style["-webkit-animation-duration"] = ''+timeAnimation+'s'
        if(fillMode == true)
        {
            element.style["animation-fill-mode"] = "forwards"
        }
        if(reverse!=null)
        {
            element.style["animation-direction"]=reverse
        }
      
    }
    StopAnimationCssEvent(element:any,time:number){
            element.style.webkitAnimationName = ""      
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
    ModifyPropsDefault(element:any,X:any=0,Y:any=0,W:any=0,H:any=0){
        let Dynamic:any
        Dynamic = X !=null ? this.ModifyProps(element,X,this.PropsElement.MoveX) : element.style.marginLeft = null
        Dynamic = Y!=null ? this.ModifyProps(element,Y,this.PropsElement.MoveY) : element.style.marginTop = null
        Dynamic = H!=null ? this.ModifyProps(element,H,this.PropsElement.H) : element.style.height = null
        Dynamic = W!=null ? this.ModifyProps(element,W,this.PropsElement.W) : element.style.width = null
    }
    ModifyContentContainer(element:any,content:HTMLElement,clearContent:boolean=false){
        if(clearContent == true){
            element.innerHTML= content
            return element
        }
        element.innerHTML+= content
        return element
    }

    CreateTimeLine(time:number,loop:boolean=false){
        this.timeLine_ = this.frameAnimation
        this.timeline_event[1] = time
        this.timeline_event[2]=loop
        return "TimeLine created: "+this.frameAnimation.length+" Frames."
    }

    ExecuteTimeLine(){
        let IntervalSet_Timeline = setInterval(()=>{
            for (let index = 0; index < this.frameAnimation.length; index++) {
                this.ExecuteScene(this.frameAnimation[index].SceneName)
            }
            this.timeline_event[0]+=1
            if(this.timeline_event[1]>1 && this.timeline_event[2]==false)
            {
                clearInterval(IntervalSet_Timeline)
            }
        },this.timeline_event[1])
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

    ExecuteNextScene(){
        if(this.current_scene < this.frameAnimation.length)
        {
            let sceneName = this.frameAnimation[this.current_scene].SceneName
            this.ExecuteScene(sceneName)
            if(this.current_scene == 0)
            {
                this.current_scene+=1
            }    
            return true 
        }
        return false
    }

    ExecutePrevScene(){ 
        if(this.current_scene >-1)
        {
            let sceneName = this.frameAnimation[this.current_scene].SceneName
            this.ExecuteScene(sceneName)
            this.current_scene-=1
            return true
        }
        return false
    }

    ExecuteScene(SceneNameFrame:string){
        var i:number = 0;
        var RelativeTime = 0
        var ValueToReturn:any = []
        while(this.frameAnimation.length > i){
            if(this.frameAnimation[i].SceneName == SceneNameFrame){
                this.frameSelected = i
                    var ElementsToExec =  0
                    var PropElement = null
                    while(this.frameAnimation[i].frames[0].length>=ElementsToExec){
                         PropElement=this.frameAnimation[i].frames[0][ElementsToExec]
                        if(typeof PropElement == "string" || typeof PropElement == "number"){
                            var element  = PropElement
                            setTimeout(()=>{ValueToReturn.push(element)
                                this.Scene_Return_values.push(element)
                            },this.frameAnimation[i].TimeFrameRates)
                            
                        }
                        if(typeof PropElement == "function"){
                            setTimeout(()=>{this.frameAnimation[i].frames[0][ElementsToExec]()},this.frameAnimation[i].TimeFrameRates)
                                
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