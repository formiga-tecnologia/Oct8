/* OCT8 ENGINE FOR ANIMATIONS */

//OBSOLETE PROJECT NOT FOR USE!!

/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2022 */

import Oct8Components  from "./Oct8Components.js";
import Oct8Fuctions from './Oct8Function.js'
class Oct8 extends( Oct8Components,Oct8Fuctions) {
    /* CREATE ENVS VARS -- FOR MECHANICAL OF GAME */
   
    constructor(id, X, Y, W, H) { 
        super();
        this.PropsElement = {
            Rotate: ["transform", "rotate"],
            Skew: ["transform", "skew"],
            Rotate: ["transform", "rotate"],
            BackgroundImage: "backgroundImage",
            MoveX: "marginLeft",
            MoveY: "marginTop",
            W: "width",
            H: "height",
            backgroundColor:"backgroundColor"
        }
        this.Properties = {
            marginLeft: X,
            marginTop: Y,
            width: W,
            height: H,
            rotate: 0,
            skew: 0,
            rotate: 0,
            backgroundImage: null,
            backgroundColor:"null"
        }
        //Mouse events
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseEvent = null;
        this.mouseOn = true;
        //env values
        this.id = id
        this._element = document.getElementById(id)
        this.On = true
        this.event = null
        this.keyboardEvent = [],
        this.CallKey = []
        this.ColaiderEvent = true  //if colliders event have works
        this.eventColider = null  //Event when colider for true
        this.ColiderCurrent = false //If collider have happen
        this.ColisionObject = null //Element event object to colider
        this.coliderCheck = false
        this.calcX = 0 //CalcX for colaiders 
        this.calcY = 0 //CalcY for calaiders
        this.RaycastX = 0 //Calc of Raycast X
        this.RayCastY = 0  //Calc of Raycast Y
        //Pyshics vars 
        this.GravityForce = 0
        this.rotateActive = true
        this.force = 0
        this.speed = 0
        this.rotateCalc = 0
        this.windForce = 0
        //Bound puyshics
        this._AxisBound = ''
        this._ForceBound = 0
        this._elementBound = null
        this._reverseBound = false
        this._Boundtime = 0
        this._eventBounce = null
        //Animates controllers
        this.animate = true,
            this.animation_time = 0,
            this.AnimateEvent = [],
            this.EventAnimateExecute = null,
            this.PropAnimate = null

    }
    /*  Add Transitions */
    /* Containers Created */

    //CREATE CONTAINERS  
    // FELIPE CATAO |  DATE UP: 11/06/2022 | 
    CreateContainerElementBody(id,typeContainerProp) {
        let newElement = document.createElement("div")
        if (id != "") {
            newElement.id = id
        }
        newElement.className = typeContainerProp
        document.body.appendChild(newElement)
    }

    CreateContainerElement(id, AppendElementId, typeContainerProp) {
        let newElement = document.createElement("div")
        if (id != "") {
            newElement.id = id
        }
        
        newElement.className = typeContainerProp
        newElement.setAttribute("style","height:"+this.Properties.height+"vh;width:"+this.Properties.width+"vh; margin-left:"+this.Properties.marginLeft+"vh;margin-top:"+this.Properties.marginTop+"vh;")
        console.log("oi")
        let positionElement = document.getElementById(AppendElementId)
        positionElement.appendChild(newElement)
    }

    ResponsiveScreen(maxScreen,CallEventWhenMin,callEventWhenMax,DesktopCallEvent,time){

            if(screen.width <=maxScreen)
            {
                this.StopEvent()
                this.CreateEvent(CallEventWhenMin,time)
            }
            else{
                if(screen.width >= 1000)
                {
                    this.StopEvent()
                    this.CreateEvent(DesktopCallEvent,time)
                }
                else{
                    this.StopEvent()
                    this.CreateEvent(callEventWhenMax,time)
                }
                
            }

        window.addEventListener('resize',()=>{
           
            if(screen.width <=maxScreen)
            {
                this.StopEvent()
                this.CreateEvent(CallEventWhenMin,time)
            }
            else{
                if(screen.width >= 1000)
                {
                    this.StopEvent()
                    this.CreateEvent(DesktopCallEvent,time)
                }
                else{
                    this.StopEvent()
                    this.CreateEvent(callEventWhenMax,time)
                }
            }
        }, true);
    }

    //END CREATE CONTAINERS

    //UPDATES EVENTS AND PROPS
    // FELIPE CATAO |  DATE UP: 25/07/2022 | 

    GetElementId()
    {
        return document.getElementById(this.id)
    }

    ModifyProps(element, value, prop) {

        if (prop.constructor === Array) {

           
            if(value.valueOf().length >=1)
            {
                this.Properties[prop[1]] = value
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
                element.style[prop] = value + "vh"
                if (value.valueOf().length >= 1) {
                    this.Properties[prop] = value
                }
                else {
                    this.Properties[prop] = this.Properties[prop]+value
                }
                
            }
        }
    }

    CreateEvent(functionCallback, time) {
        if (this.On == true) {
            this.event = setInterval(functionCallback, time)
        }
        else {
            this.StopEvent()
        }
    }

    StopEvent() {
        clearInterval(this.event)
    }

    //MOUSE EVENTS MOUSE AND KEYBOARDS
    // FELIPE CATAO |  DATE UP: 20/06/2022 | 

    MouseClickEvent(target, event) {
        this.mouseEvent = event
        if (this.mouseOn == true) {
            target.addEventListener('click', this.mouseEvent, false)
        }

    }

    MouseDownEvent(target, event) {
        this.mouseEvent = event
        if (this.mouseOn == true) {
            target.addEventListener('mouseup', event)
        }
    }

    RemoveMouseDownEvent(target) {
        target.removeEventListener('mouseup', this.mouseEvent)
    }
    RemoveMouseClickEvent(target) {
        target.removeEventListener('click', this.mouseEvent)
    }

    CreateAddKeyboardEvent(functionCallBack, Targetkey) {

        document.addEventListener('keypress', (event) => {
            var key = event.key
            var type = typeof (Targetkey)
            if (type == "string" && typeof (key) == "string") {
                Targetkey = Targetkey.toUpperCase()
                key = key.toUpperCase()
            }
            if (key == Targetkey) {
                functionCallBack()
            }
        }, false)
    }

    CreateAddMouseClickEvent(functionCallBack, ElementToClick) {
        ElementToClick.addEventListener('click', (event) => {
            if (this.mouseOn == true) {
                functionCallBack()
            }
        }, false)
    }

    CreateAddMouseClickUpEvent(functionCallBack, TargetElement) {
        TargetElement.addEventListener('click', (event) => {
            if (this.mouseOn == true) {
                functionCallBack()
            }
        }, false)
    }

    MouseControlActive(){
        if(this.mouseOn == true){
           return this.mouseOn = false
        }
        else{
            return this.mouseOn = true
        }
        
    }

    CreateMouseMoveEvent(ElementAreaId, ElementPosY, ElementPosX, SavePosition, moveElement) {
        ElementAreaId.addEventListener("mousemove", () => {
            if (this.mouseOn == true) {
                let mousex = Math.round((event.clientX - this.Properties.height) * (100 / ElementAreaId.clientWidth))
                let mousey = Math.round((event.clientY - this.Properties.width) * (100 / ElementAreaId.clientHeight));
                if (moveElement == true) {
                    this.ModifyProps(document.getElementById(this.id), mousex - ElementPosX, Engine.PropsElement.MoveX)
                    this.ModifyProps(document.getElementById(this.id), mousey - ElementPosY, Engine.PropsElement.MoveY)
                }
                if (SavePosition == true) {
                    this.mouseX = mousex
                    this.mouseY = mousey
                }
            }
        })
    }

    //END EVENTS


    //COLIDERS EVENTS 
    // FELIPE CATAO |  DATE UP: 14/06/2022 | 
    AddColider(elementToColider, EventColider, calcX, calcY, time) {
        //created cacl X and Y to both elements  if detect execute Event
        if (this.ColaiderEvent == true) {
            this.ColisionObject = elementToColider
            this.eventColider = EventColider
            this.calcX = parseInt(calcX)
            this.calcY = calcY
            return this.ColiderDetectReflect()
        }
    }

    ColiderDetectReflect() {

        let EventX = parseInt(this.ColisionObject.Properties.marginLeft)
        let EventY = parseInt(this.ColisionObject.Properties.marginTop)

        let number = this.calcX - EventX * 2
        let formula = this.calcX - EventX

        if (this.Properties.marginLeft == EventX - this.calcX && this.Properties.marginTop > EventY - this.calcY && this.Properties.marginTop < EventY + this.calcY) {
            this.eventColider()
        }
        if (this.Properties.marginLeft == EventX + this.calcX && this.Properties.marginTop > EventY - this.calcY && this.Properties.marginTop < EventY + this.calcY) {
            this.eventColider()
        }
        //Refactor this!
        //  if (this.Properties.marginTop == EventY + this.calcY && this.Properties.marginLeft > EventX - this.calcX && this.Properties.marginLeft < EventX + this.calcX) {
        //      this.eventColider()
        //   }    
        if (this.Properties.marginTop == EventY - this.calcY && formula - number < this.Properties.marginLeft + this.Properties.height && this.Properties.marginLeft - this.Properties.height < EventX + this.calcX) {
            this.eventColider()
        }
    }

    RayCastDetect(XComparateLeft, YcomparateTop, XComparateRigth, YcomparateDown) {

        var elArrays = []
        var StrTest = ""
        var XcalcLeft = this.X
        var XcalcRight = this.X
        var YcalcTop = this.Y
        var el = ""

        if (XComparateLeft > 1) {
            for (let indexValue = XcalcLeft; indexValue < (this.X + XComparateLeft); indexValue++) {
                el = document.getElementsByClassName('X-' + indexValue)
                console.log(" " + indexValue + " -/- " + (this.X + XComparateLeft))
                if (el.length >= 1) {
                    for (let index = 0; index < el.length; index++) {
                        StrTest = el[index].id
                        elArrays.push(StrTest)
                    }
                }
            }
        }

        if (XComparateRigth > 1) {
            console.log("esta rodando aqui 4/8" + XcalcLeft + " || " + (this.X + XComparateRigth))
            for (let indexValue = 0; indexValue < XComparateRigth; indexValue++) {
                XcalcRight = XcalcRight - 1
                console.log(XcalcRight)
                el = document.getElementsByClassName('X-' + XcalcRight)
                if (el.length >= 1) {
                    for (let index = 0; index < el.length; index++) {
                        StrTest = el[index].id
                        elArrays.push(StrTest)
                    }
                }
            }
        }

        if (YcomparateDown > 1) {
            console.log("esta rodando aqui /" + YcalcTop + " || " + (this.Y + YcomparateDown))
            for (let indexValue = 0; indexValue < (this.X + YcomparateDown); indexValue++) {
                el = document.getElementsByClassName('Y-' + indexValue)
                console.log(indexValue + " Y atual")
                if (el.length >= 1) {
                    for (let index = 0; index < el.length; index++) {
                        StrTest = el[index].id
                        elArrays.push(StrTest)
                    }
                }
            }
        }

        if (YcomparateTop > 1) {
            console.log("esta rodando aqui 4/8" + YcalcTop + " || " + (this.X + YcomparateTop))
            for (let indexValue = 0; indexValue < YcomparateTop; indexValue++) {
                YcalcTop = YcalcTop - 1
                console.log(YcalcTop)
                el = document.getElementsByClassName('Y-' + YcalcTop)
                if (el.length >= 1) {
                    for (let index = 0; index < el.length; index++) {
                        StrTest = el[index].id
                        elArrays.push(StrTest)
                    }
                } jjkks
            }
        }

        return elArrays
    }
    //END COLIDERS 

    //PYSHICS EVENTS 
    // FELIPE CATAO |  DATE UP: 15/06/2022 |  


}

const _default =Oct8
export { _default as default };
