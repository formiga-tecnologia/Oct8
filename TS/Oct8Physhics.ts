import Oct8Obj from "./Oct8Obj"

export default class Oct8Pyshics{
    gravity=0;
    force=0;
    wind=0;
    EventPyshicsForce=0
    DeltaTime=0;
    SetDynamics(gravitySet:number=1,forceSet:number=1,windSet:number=1,DeltaTimeSet=200){
        this.gravity = gravitySet
        this.force = forceSet
        this.wind = windSet
        this.DeltaTime = DeltaTimeSet
    }
    CreateGravityForce(objectOct8:Oct8Obj){
        this.EventPyshicsForce = setInterval(()=>{
            objectOct8.CreateAnimationEvent("marginTop",this.DeltaTime,-this.force,"-")
        },this.DeltaTime)
    }
}