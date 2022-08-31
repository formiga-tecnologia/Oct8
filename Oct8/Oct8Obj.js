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
        this.Properties.marginLeft = X;
        this.Properties.marginTop = Y;
        this.Properties.height = H;
        this.Properties.width = W;
        this.containerSet = TypeContainer;
        if (Render == true) {
            this.CreateContainerElement(this.Id, this.AppendElement, this.TypeContainer);
        }
    }
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
}
