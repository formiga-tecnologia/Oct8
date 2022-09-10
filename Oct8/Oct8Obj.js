export default class Oct8Obj {
    constructor(Id = "", X = 0, Y = 0, W = 0, H = 0, TypeContainer = "", AppendElement = "", Render = true) {
        this.Id = Id;
        this.X = X;
        this.Y = Y;
        this.W = W;
        this.H = H;
        this.TypeContainer = TypeContainer;
        this.AppendElement = AppendElement;
        this.Render = Render;
        this.PropsElement = {
            Skew: ["transform", "skew"],
            Rotate: ["transform", "rotate"],
            BackgroundImage: "backgroundImage",
            MoveX: "marginLeft",
            MoveY: "marginTop",
            W: "width",
            H: "height",
            backgroundColor: "backgroundColor"
        };
        this.Properties = {
            marginLeft: 0,
            marginTop: 0,
            width: 0,
            height: 0,
            skew: 0,
            rotate: 0,
            backgroundImage: null,
            backgroundColor: "null"
        };
        this.ContainerTypes = ["sse", "sse-on"];
        this.containerSet = "";
        this.id = "Null";
        this.AnimateEvent = [];
        this.event = 0;
        this.On = true;
        this.animMove = 0;
        this.Properties.marginLeft = X;
        this.Properties.marginTop = Y;
        this.Properties.height = H;
        this.Properties.width = W;
        this.containerSet = TypeContainer;
        this.id = Id;
        if (Render == true) {
            this.CreateContainerElement(this.Id, this.AppendElement, this.TypeContainer);
        }
    }
    /**
     * Create one new Element for your page,insert one Id.
     * @param {string} id of tag Html what your want add to page.
     * @param {string} AppendElementId Content for your new element.
     * @param {string} typeContainerProp Target object of your add the new element.
     */
    CreateContainerElement(id = "", AppendElementId = "", typeContainerProp = "") {
        var _a;
        let newElement = document.createElement("div");
        if (id != "") {
            newElement.id = id;
        }
        newElement.className = typeContainerProp;
        newElement.setAttribute("style", "height:" + this.Properties.height + "vh;width:" + this.Properties.width + "vh; margin-left:" + this.Properties.marginLeft + "vh;margin-top:" + this.Properties.marginTop + "vh;");
        let positionElement = (_a = document.getElementById(AppendElementId)) === null || _a === void 0 ? void 0 : _a.appendChild(newElement);
    }
    CreateContainerElementBody(id = "", typeContainerProp = "sse sse-on") {
        let newElement = document.createElement("div");
        if (id != "") {
            newElement.id = id;
        }
        newElement.className = typeContainerProp;
        document.body.appendChild(newElement);
    }
    GetElementId() {
        return document.getElementById(this.id);
    }
    ModifyProps(element, value = 0, prop = "MarginLeft") {
        if (prop.constructor === Array) {
            if (value.valueOf().length >= 1) {
                this.Properties[prop[1]] = value;
                element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)";
            }
            else {
                this.Properties[prop[1]] = this.Properties[prop[1]] + value;
                element.style[prop[0]] = prop[1] + "(" + this.Properties[prop[1]] + "deg)";
            }
        }
        else {
            if (prop == "backgroundImage") {
                element.style[prop] = value;
                this.Properties[prop] = value;
            }
            else {
                let Teste = prop;
                if (value.valueOf().length >= 1) {
                    this.Properties[prop] = value[0];
                    element.style[Teste] = this.Properties[prop] + "vh";
                }
                else {
                    this.Properties[prop] = this.Properties[prop] + value;
                    element.style[Teste] = this.Properties[prop] + "vh";
                }
            }
        }
    }
    CreateAnimationEvent(TypePropModify = "marginLeft", Time = 100, Value = 0, moveDirect = "+") {
        //Receber o parametro que ira mudar, ID (se for null usar do mesmo) ,Tempo  e valor 
        //Modificar props
        this.AnimateEvent[this.AnimateEvent.length] = setInterval(() => {
            if (moveDirect == "+") {
                this.ModifyProps(document.getElementById(this.Id), +Value, TypePropModify);
            }
            else {
                this.ModifyProps(document.getElementById(this.Id), -Value, TypePropModify);
            }
        }, Time);
    }
    StopAnimation(Id = 0) {
        clearInterval(this.AnimateEvent[Id]);
    }
    CreateEvent(functionCallback = (() => { console.log("Oct8 Functions"); }), time = 100) {
        if (this.On == true) {
            this.event = setInterval(functionCallback, time);
        }
        else {
            this.StopEvent();
        }
    }
    StopEvent() {
        clearInterval(this.event);
    }
}
