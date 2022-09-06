import Oct8Events from "./Oct8Events.js";
import Oct8Obj from "./Oct8Obj.js";

export default  class Oct8 extends (Oct8Obj) implements Oct8Events{

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
        }
    }
    WhereColision(coliderObj: Oct8): string {
        throw new Error("Method not implemented.");
    }
}
