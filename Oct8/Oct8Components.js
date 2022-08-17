"use strict";
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
