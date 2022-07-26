/* OCT8 ENGINE FOR ANIMATIONS */
/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2021 */

class Oct8 {
    /* CREATE ENVS VARS -- FOR MECHANICAL OF GAME */
    constructor(id, element,posX,posY) {
        this.PropsElement = {
            Rotate:"rotate",
            Skew:["transform","skew"],
            MoveX:"marginLeft",
            MoveY:"marginTop",
            W:"width",
            H:"height"
        }
        //Mouse events
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseEvent = null;
        this.mouseOn = true;
        //env values
        this.X = posX;
        this.Y = posY;
        this.id = id
        this._element = element
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
        this.rotateCalc =0
        this.windForce = 0
        //Bound puyshics
        this._AxisBound = ''
        this._ForceBound = 0
        this._elementBound = null
        this._reverseBound = false
        this._Boundtime = 0
        this._eventBounce = null

    }
    /*  Add Transitions */
    /* Containers Created */

    //CREATE CONTAINERS  
    CreateContainerBody(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'cbe cbe-on')
        this.lot =0
    }

    CreateContainerElement(elementInsertId, Id) {
        if(elementInsertId == 'body')
        {
            //Oct8NewElementContainer(Id, document.getElementsByTagName('body'), 'elb  elb-on')
            Oct8NewElementBody(Id,'elb  elb-on')
        }
        else{
            Oct8NewElementContainer(Id, elementInsertId, 'elb  elb-on')

        }
    }

    CreateContainerSquareElement(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'sse  sse-on')
    }
    //END CREATE CONTAINERS


    /* Modify Props */
    ModifySize(getElement, axis, value, OldValue) {
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

    //MODIFY  PROPERTY ELEMENTS
    // FELIPE CATAO |  DATE UP: 25/07/2022 | 

    ModifyProps(element,value,prop){
        let DynamicModify = prop
        if(this._element!=null)
        {
            this._element.style[DynamicModify]=value+"vh"
        }
        else
        {
            if(prop.constructor === Array){
                console.log([prop[0]]+"="+prop[1]+"("+value+"deg)")
                element.style[prop[0]]=prop[1]+"("+value+"deg)"
            }
            else{
                element.style[prop]=value+"vh"
            }
            
        }
    }
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

    //END PROPERY ELEMENTS 

    /* Modify Dynamic position */
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

    //Mouse events

    MouseClickEvent(target,event){
        this.mouseEvent = event
        if(this.mouseOn == true)
        {
            target.addEventListener('click',this.mouseEvent,false)    
        }
        
    }

    MouseDownEvent(target,event){
        this.mouseEvent = event
        if(this.mouseOn == true)
        {
            target.addEventListener('mouseup',event)
        }
    }

    RemoveMouseDownEvent(target){
        target.removeEventListener('mouseup',this.mouseEvent)
    }
    RemoveMouseClickEvent(target){
        target.removeEventListener('click',this.mouseEvent)
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
    ApplyNewStyle(ElementTarget,Classrule){
        ElementTarget.classList+= " "+Classrule
    }

    //Colider Event
    AddColider(elementToColider, EventColider, calcX, calcY, time) {
        //created cacl X and Y to both elements  if detect execute Event
        if (this.ColaiderEvent == true) {
            this.ColisionObject = elementToColider
            this.eventColider = EventColider
            this.calcX = calcX
            this.calcY = calcY
            return this.ColiderDetectReflect()
        }
    }

    ColiderDetectReflect() {
        let EventX = 0
        let EventY = 0
        for (let index = 0; index < this.ColisionObject.classList.length; index++) {
            if (this.ColisionObject.classList[index].includes('X-')) {
                EventX = parseInt(this.ColisionObject.classList[index].replace("X-", ""))
            }
            if (this.ColisionObject.classList[index].includes('Y-')) {
                EventY = parseInt(this.ColisionObject.classList[index].replace("Y-", ""))

            }
        }

        if (this.X == EventX - this.calcX && this.Y > EventY - this.calcY && this.Y < EventY + this.calcY) {
            this.eventColider()
        }

        if (this.X == EventX + this.calcX && this.Y > EventY - this.calcY && this.Y < EventY + this.calcY) {
            this.eventColider()
        }

        if (this.Y == EventY + this.calcY && this.X > EventX - this.calcX && this.X < EventX + this.calcX) {
            this.eventColider()
        }

        if (this.Y == EventY - this.calcY && this.X > EventX - this.calcX && this.X < EventX + this.calcX) {
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
    ApplyGravity(element){
        if(this.coliderCheck == false){
            this.PlayMove(element,this.Y,this.Y+this.force,'Y')
        }
    }
    CreateRotatePishics(element){
        if(this.rotateCalc>=10)
        {
            this.rotateCalc = 0 
            element.classList.remove('rotate-10')
        }
        else
        {
            if(this.rotateActive == true)
            {
            console.log((this.rotateCalc)+" / "+(this.rotateCalc+this.force))
            this.PlayRotate(element,this.rotateCalc,this.rotateCalc+this.force,'X')
            this.rotateCalc+=1
            }
        }
    }

}
