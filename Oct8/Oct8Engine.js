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
        this.calcY =0 //CalcY for calaiders
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
    AddColider(elementToColider, EventColider, calcX, calcY,time) {
        //created cacl X and Y to both elements  if detect execute Event
        if (this.ColaiderEvent == true) {
            this.ColisionObject = elementToColider
            this.eventColider = EventColider  
            this.calcX = calcX
            this.calcY = calcY
            return this.ColiderDetectReflect()  
        }
    }
    ColiderDetectReflect(){
        let EventX = 0
        let EventY = 0 
        for (let index = 0; index < this.ColisionObject.classList.length; index++) {
            if(this.ColisionObject.classList[index].includes('X-')){
                EventX = parseInt(this.ColisionObject.classList[index].replace("X-",""))
            }
            if(this.ColisionObject.classList[index].includes('Y-'))
            {
                EventY = parseInt(this.ColisionObject.classList[index].replace("Y-",""))
            }
         }

         if(this.X == EventX-this.calcX && this.Y > EventY-this.calcY && this.Y< EventY+this.calcY ){
            this.eventColider()   
         }

         if(this.X == EventX+this.calcX && this.Y > EventY-this.calcY && this.Y< EventY+this.calcY ){
            this.eventColider()   
         }

         if(this.Y == EventY+this.calcY && this.X > EventX-this.calcX && this.X< EventX+this.calcX ){
            this.eventColider()   
         }

         if(this.Y == EventY-this.calcY && this.X > EventX-this.calcX && this.X< EventX+this.calcX ){
            this.eventColider()   
         }
    } 
}
