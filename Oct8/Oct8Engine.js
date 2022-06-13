/* OCT8 ENGINE FOR ANIMATIONS */
/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2021 */

class Oct8 {
    /* CREATE ENVS VARS -- FOR MECHANICAL OF GAME */
    constructor(id,element)
    {
        this.X = null;
        this.Y =null;
        this.id =id
        this.element = element

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
    PlayMove(element, oldpos, newpos, axis){
        Oct8CPlayMove(element, oldpos, newpos, axis)
        if(axis == 'X'){
            this.X=newpos
        }
        if(axis == 'Y'){
            this.Y =  newpos
        }
    }
}
