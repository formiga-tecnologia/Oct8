"use strict";
/* OCT8 ENGINE FOR COMPONENTS */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oct8Components = void 0;
/* CREATED BY: FORMIGA TECNOLOGY
   DESIGNER PRODUCT: FELIPE CATÃO
   CREATION DATE: 17/08/2022 */
class Oct8Components {
    constructor(content, Target, Value, PropsValues = [], Components = []) {
        this.content = content;
        this.Target = Target;
        this.Value = Value;
        this.PropsValues = PropsValues;
        this.Components = Components;
        if (Target != null) {
            this.CreateNewComponent(this.content, this.Target, this.Value);
        }
    }
    CreateNewComponent(content, Target, value) {
        this.Components = [];
        let el = document.createElement(content);
        el.innerHTML = value;
        Target.appendChild(el);
        let ObjectElement = [content, Target, value];
        this.Components.push(ObjectElement);
    }
    RemoveComponent(Target) {
        Target.remove();
    }
    GetComponent() {
        return this.Components[0][1];
    }
    CreateNewProps(KeyValue, Value) {
        let object = { KeyValue, Value };
        this.PropsValues.push(object);
    }
    GetPropValue(KeyValue) {
        for (let index = 0; index < this.PropsValues.length; index++) {
            if (this.PropsValues[index].KeyValue == KeyValue) {
                return this.PropsValues[index].Value;
            }
        }
    }
    AlterPropValue(KeyValue, NewValue) {
        for (let index = 0; index < this.PropsValues.length; index++) {
            if (this.PropsValues[index].KeyValue == KeyValue) {
                this.PropsValues[index].Value = NewValue;
            }
        }
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
exports.Oct8Components = Oct8Components;
