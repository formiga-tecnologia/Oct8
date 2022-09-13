
import Oct8Events from "./Oct8Events.js";
import Oct8Obj from "./Oct8Obj.js";
import Oct8Pyshics from "./Oct8Physhics.js";

export default  class Oct8 extends (Oct8Obj){

    Pyshics = new Oct8Pyshics()
    OctObj= new Oct8Obj()
    CallEvents = new Oct8Events()

    constructor(       
    public Id:string = "",
    public X:number =0,
    public Y:number =0,
    public W:number =0,
    public H:number =0,
    public TypeContainer:string ="",
    public AppendElement:string = "",
    public Render:boolean = true,){   
        super();
        if(Render = true)
        {
            var OctCreate = new Oct8Obj(Id,X,Y,W,H,TypeContainer,AppendElement,true)
            this.OctObj = OctCreate
            this.OctObj.Id = Id
            this.OctObj.Properties.height = H
            this.OctObj.Properties.width = W
            this.Pyshics.SetDynamics();
        }
    }
}
