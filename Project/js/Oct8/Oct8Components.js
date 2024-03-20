/* OCT8 ENGINE FOR COMPONENTS */
/* CREATED BY: FORMIGA TECNOLOGY
   DESIGNER PRODUCT: FELIPE CATÃO
   CREATION DATE: 17/08/2022 */
export default class Oct8Components {
    constructor(content, Target, Value, PropsValues = [], Components = [], CompName) {
        this.content = content;
        this.Target = Target;
        this.Value = Value;
        this.PropsValues = PropsValues;
        this.Components = Components;
        this.CompName = CompName;
        if (Target != null) {
            this.CreateNewComponent(this.CompName, this.content, this.Target, this.Value);
        }
    }
    CreateNewComponent(ComponentName, content, Target, value) {
        let el = document.createElement(content);
        el.id = ComponentName;
        el.innerHTML = value;
        Target.appendChild(el);
        let ObjectElement = [ComponentName, content, Target, value, 0];
        this.Components.push(ObjectElement);
        console.log("Op");
    }
    GenerateComponent(ComponentName, TargetElement) {
        this.Components.forEach(element => {
            var _a;
            if (element[0] == ComponentName) {
                let number = parseInt(element[4].toString());
                number += 1;
                element[4] = number;
                let el = document.createElement(element[1].toString());
                el.id = element[0] + "[" + number + "]";
                el.innerHTML = element[3].toString();
                (_a = document.getElementById(TargetElement)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
            }
        });
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
            let _element = element[0];
            if (_element === Target) {
                element[2] = NewValue;
                let ele = null;
                ele = document.getElementById(element[0].toString());
                ele.innerHTML = NewValue;
            }
        });
    }
}
