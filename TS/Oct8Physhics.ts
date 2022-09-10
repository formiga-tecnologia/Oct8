import Oct8 from "./Oct8";
import Oct8Obj from "./Oct8Obj"

export default class Oct8Pyshics{
    gravity=0;
    force=0;
    wind=0;
    EventPyshicsForce=0
    DeltaTime=0;
    colider = false
    GravityActive = true
    coliderEvent = 0
    SetDynamics(gravitySet:number=1,forceSet:number=1,windSet:number=1,DeltaTimeSet=100){
        this.gravity = gravitySet
        this.force = forceSet
        this.wind = windSet
        this.DeltaTime = DeltaTimeSet
    }
    CreateGravityForce(element:HTMLElement,ObjectOct8:Oct8Obj){
        let setPyshic = parseInt(element.style.marginTop)+this.gravity
        this.EventPyshicsForce = setInterval(()=>{      
            if(this.GravityActive == true)
            {
                ObjectOct8.Properties.marginTop = setPyshic
                element.style.marginTop=setPyshic+"vh"
                setPyshic=setPyshic+1 
            }
        },this.DeltaTime)
    }
    CreateColider(ObjectTarget:Oct8Obj,ObjectHit:Oct8Obj){
        this.coliderEvent = setInterval(()=>{
            //Detectar TOPO
            console.log(ObjectTarget.Properties.marginTop+" "+ ObjectHit.Properties.height)
        },10)
    }
}