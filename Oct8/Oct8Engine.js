/* OCT8 ENGINE FOR ANIMATIONS */
/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2021 */

class Oct8 {
    /* CREATE ENVS VARS -- FOR MECHANICAL OF GAME */
    constructor(id, element) {
        this.X = null;
        this.Y = null;
        this.id = id
        this.element = element
        this.On = true
        this.event = null
        this.keyboardEvent = null
        this.ColaiderEvent = true  //if colliders event have works
        this.eventColider = null  //Event when colider for true
        this.ColiderCurrent = false //If collider have happen
        this.ColisionObject = null //Element event object to colider
        this.calcX = 0 //CalcX for colaiders 
        this.calcY = 0 //CalcY for calaiders
        this.RaycastX = 0 //Calc of Raycast X
        this.RayCastY = 0  //Calc of Raycast Y
        //Pyshics vars 
        this.GravityForce = 0
        this.force = 0 
        this.speed = 0 
    }
    /*  Add Transitions */

    /* Containers Created */
    CreateContainerBody(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'cbe cbe-on')
    }

    CreateContainerElement(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'elb  elb-on')
    }

    CreateContainerSquareElement(elementInsertId, Id) {
        Oct8NewElementContainer(Id, elementInsertId, 'sse  sse-on')
    }

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
                }
            }
        }

        return elArrays
    }
}
