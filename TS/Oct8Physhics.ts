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
    CreateGravityForce(element:HTMLElement,ObjectOct8:Oct8Obj,ReverseForce:boolean=false){
        let setPyshic = 0
        if(ReverseForce == false){setPyshic = parseInt(element.style.marginTop)+this.gravity }else{setPyshic = parseInt(element.style.marginTop)+this.gravity-1 }
        this.EventPyshicsForce = setInterval(()=>{      
            if(this.GravityActive == true)
            {
                ObjectOct8.Properties.marginTop = setPyshic
                element.style.marginTop=setPyshic+"vh"
                
                if(ReverseForce == false){setPyshic=setPyshic+1 }else{setPyshic=setPyshic-1 }
            }
        },this.DeltaTime)
    }
    CreateColider(ObjectTarget:Oct8Obj,ObjectHit:Oct8Obj,Callfuncion:any){
        this.coliderEvent = setInterval(()=>{
            //Detectar TOPO
            if(ObjectTarget.Properties.marginTop == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft+ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft){
                Callfuncion()
            } 
            if(ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft-ObjectTarget.Properties.width <= ObjectHit.Properties.marginLeft){
                Callfuncion()
            } 
            console.log(ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft )
           // console.log(ObjectTarget.Properties.marginLeft-ObjectTarget.Properties.width <= ObjectHit.Properties.marginLeft)
            //console.log(ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height == ObjectHit.Properties.marginTop)
        },10)
    }
}