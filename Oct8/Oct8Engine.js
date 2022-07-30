/* OCT8 ENGINE FOR ANIMATIONS */
/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2021 */

class Oct8 {
    /* CREATE ENVS VARS -- FOR MECHANICAL OF GAME */
    constructor(id, X, Y, W, H) {
        this.PropsElement = {
            Rotate: "rotate",
            Skew: ["transform", "skew"],
            Rotate: ["transform", "rotate"],
            BackgroundImage:"backgroundImage",
            MoveX: "marginLeft",
            MoveY: "marginTop",
            W: "width",
            H: "height"
        }
        this.Properties = {
            marginLeft: X,
            marginTop: Y,
            width: W,
            height: H,
            rotate: 0,
            skew: 0,
            backgroundImage:null
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
        this.keyboardEvent = null
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
        this.AnimateEvent=[],
        this.PropAnimate = null

    }
    /*  Add Transitions */
    /* Containers Created */

    //CREATE CONTAINERS  
    CreateContainerBody(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'cbe cbe-on')
        this.lot = 0
    }

    CreateContainerElement(elementInsertId, Id) {
        if (elementInsertId == 'body') {
            //Oct8NewElementContainer(Id, document.getElementsByTagName('body'), 'elb  elb-on')
            Oct8NewElementBody(Id, 'elb  elb-on')
        }
        else {
            Oct8NewElementContainer(Id, elementInsertId, 'elb  elb-on')

        }
    }

    CreateContainerSquareElement(elementInsertId, Id,debug) {
        if(debug == false)
        {
            Oct8NewElementContainer(Id, elementInsertId, 'sse')
        }
        else
        {
            Oct8NewElementContainer(Id, elementInsertId, 'sse  sse-on')    
        }
        
    }
    //END CREATE CONTAINERS


    /* Modify Props */
    /*  ModifySize(getElement, axis, value, OldValue) {
          Oct8ChangeSizes(getElement, axis, value, OldValue)
      }
      AddPositionToElement(Element, axis, pos) {
          if (axis == 'X') {
              oct8AddX(Element, pos)
          }
          else {
              oct8AddY(Element, pos)
          }
      }
      */

    //UPDATES EVENTS AND PROPS
    // FELIPE CATAO |  DATE UP: 25/07/2022 | 

    ModifyProps(element, value, prop) {

        if (prop.constructor === Array) {

            element.style[prop[0]] = prop[1] + "(" + value + "deg)"
            this.Properties[prop[1]] = value
        }
        else {
            if(prop == "backgroundImage"){
                element.style[prop] = value
                this.Properties[prop] = value
            }
            else{
                element.style[prop] = value + "vh"
            this.Properties[prop] = value
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

    CreateAnimation(id,propToAmimate,value,maxValue,time,reverse,operation){
        if(this.animate == true) {
            if (propToAmimate.length >=2) {
                let AnimateClass = new AnimateOct8(propToAmimate,value,operation,maxValue,reverse,time,this) 
                this.AnimateEvent.push(id)
                this.PropAnimate = propToAmimate
                this.AnimateEvent.push(AnimateClass)
            }

                
        }
    }

    /*
    MoveElement(element,pos,axis){
        if(this._element !=null)
        {
            this._moveElementAnimate(this._element,axis,pos)
        }
        else{
            this._moveElementAnimate(element,axis,pos)
        }
    }

    _moveElementAnimate(element,axis,pos){
        let _axis = axis
        if(_axis.includes('X') || _axis.includes('x'))
        {
            element.style.marginLeft=pos+"vh"
        }

        if(_axis.includes('Y') || _axis.includes('y'))
        {
            element.style.marginTop =pos+"vh"
        }
    }
    */

    //END PROPERY ELEMENTS 

    /*
    PlayMove(element, oldpos, newpos, axis) {
        Oct8CPlayMove(element, oldpos, newpos, axis)
        if (axis == 'X') {
            this.X = newpos 
        }
        if (axis == 'Y') {
            this.Y = newpos
        }
    }
    PlayRotate(element, oldpos, newpos, axis){
        axis = "rotate"
        Oct8CPlayMove(element,oldpos,newpos,axis)
    }
    PlaySkew(element, oldpos, newpos, axis){
        axis= "Skew-"+axis
        Oct8CPlayMove(element,oldpos,newpos,axis)
    }
    */


    //Mouse events

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

    //End Mouse Events

    // Target Events with Inputs
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
            functionCallBack()
        }, false)
    }
    ApplyNewStyle(ElementTarget, Classrule) {
        ElementTarget.classList += " " + Classrule
    }

    //Colider Event
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

        let number = this.calcX-EventX*2
        let formula = this.calcX-EventX

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

        
        if (this.Properties.marginTop == EventY - this.calcY && formula-number<this.Properties.marginLeft+this.Properties.height  && this.Properties.marginLeft-this.Properties.height < EventX + this.calcX) {
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
    //pyshics Events 
    ApplyGravity(element) {
        if (this.coliderCheck == false) {
            this.PlayMove(element, this.Y, this.Y + this.force, 'Y')
        }
    }
    CreateRotatePishics(element) {
        if (this.rotateCalc >= 10) {
            this.rotateCalc = 0
            element.classList.remove('rotate-10')
        }
        else {
            if (this.rotateActive == true) {
                console.log((this.rotateCalc) + " / " + (this.rotateCalc + this.force))
                this.PlayRotate(element, this.rotateCalc, this.rotateCalc + this.force, 'X')
                this.rotateCalc += 1
            }
        }
    }

}

// CLASS ANIMATE PROPRIES 
// FELIPE CATAO |  DATE UP: 30/07/2022 |

class AnimateOct8{
    constructor(propAnimate,value,operation,maxValue,Reverse,time,classCl) {
        this._propAnimate = propAnimate,
        this._maxValue = maxValue,
        this._reverse = Reverse,
        this._classCl = classCl,
        this._time=time
        this.value=value
        this.event = null,
        this._operation=operation
        this.OctCopy = new Oct8()
        this.functionAnimate()
    }
    functionAnimate(){
        let OctCopy = new Oct8()
        OctCopy = this._classCl
        this.event = setInterval(this._animate,this._time)
        if(this._operation == "+")
        {
            this._classCl.ModifyProps(document.getElementById(this._classCl.id),this._propAnimate,this._propAnimate)
        }
        else
        {
            this._classCl.ModifyProps(document.getElementById(this._classCl.id),this._classCl.Properties[this._propAnimate]-this.value,this._classCl.PropsElement[this._propAnimate])
        }
        console.log("aaaaah")
        
    }
}
