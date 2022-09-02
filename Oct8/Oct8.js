import Oct8Obj from "./Oct8Obj.js";
export default class Oct8 extends (Oct8Obj) {
    constructor(Id = "", X = 0, Y = 0, W = 0, H = 0, TypeContainer = "", AppendElement = "", Render = true) {
        super();
        this.Id = Id;
        this.X = X;
        this.Y = Y;
        this.W = W;
        this.H = H;
        this.TypeContainer = TypeContainer;
        this.AppendElement = AppendElement;
        this.Render = Render;
        if (Render = true) {
            var OctCreate = new Oct8Obj(Id, X, Y, W, H, TypeContainer, AppendElement, true);
            console.log(OctCreate.Id);
        }
    }
}
