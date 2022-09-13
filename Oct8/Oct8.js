import Oct8Events from "./Oct8Events.js";
import Oct8Obj from "./Oct8Obj.js";
import Oct8Pyshics from "./Oct8Physhics.js";
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
        this.Pyshics = new Oct8Pyshics();
        this.OctObj = new Oct8Obj();
        this.CallEvents = new Oct8Events();
        if (Render = true) {
            var OctCreate = new Oct8Obj(Id, X, Y, W, H, TypeContainer, AppendElement, true);
            this.OctObj = OctCreate;
            this.OctObj.Id = Id;
            this.OctObj.Properties.height = H;
            this.OctObj.Properties.width = W;
            this.Pyshics.SetDynamics();
        }
    }
}
