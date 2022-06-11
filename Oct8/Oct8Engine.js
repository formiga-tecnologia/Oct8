/* OCT8 ENGINE FOR ANIMATIONS */
/* CREATED BY: FORMIGA TECNOLOGY 
   DESIGNER PRODUCT: FELIPE CATÃO 
   CREATION DATE: 11/06/2021 */

class Oct8{
    /* COntainers Created */
    CreateContainerBody(elementInsertId,Id){
        Oct8NewElementContainer(Id,elementInsertId,'cbe cbe-on')
    }

    /* Modify Props */
    ModifySize(getElement,axis,value,OldValue){
        Oct8ChangeSizes(getElement,axis,value,OldValue)
    }
}