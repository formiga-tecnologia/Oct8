"use strict";
/* OCT8 ENGINE FOR COMPONENTS */
/* CREATED BY: FORMIGA TECNOLOGY
   DESIGNER PRODUCT: FELIPE CATÃO
   CREATION DATE: 17/08/2022 */
class Oct8Components {
    constructor(content, Target, Value, Components = []) {
        this.content = content;
        this.Target = Target;
        this.Value = Value;
        this.Components = Components;
        if (Target != null) {
            this.CreateNewComponent(this.content, this.Target, this.Value);
        }
    }
    CreateNewComponent(content, Target, value) {
        let el = document.createElement(content);
        el.innerHTML = value;
        Target.appendChild(el);
        let ObjectElement = [content, Target, value];
        this.Components.push(ObjectElement);
    }
    RemoveComponent(Target) {
        Target.remove();
    }
    AlterComponentValues(Target, NewValue) {
        this.Components.forEach(element => {
            let _element = element[1];
            if (_element === Target) {
                element[2] = NewValue;
                Target.innerHTML = NewValue;
            }
        });
    }
}
//export =  Oct8Components
