"use strict";
/* OCT8 ENGINE FOR COMPONENTS */
/* CREATED BY: FORMIGA TECNOLOGY
   DESIGNER PRODUCT: FELIPE CATÃO
   CREATION DATE: 17/08/2022 */
class Oct8Components {
    constructor(content, Target, Value) {
        this.content = content;
        this.Target = Target;
        this.Value = Value;
        if (Target != null) {
            this.CreateNewComponent(this.content, this.Target, this.Value);
        }
    }
    CreateNewComponent(content, Target, value) {
        let el = document.createElement(content);
        el.innerHTML = value;
        Target.appendChild(el);
    }
}
//export =  Oct8Components
