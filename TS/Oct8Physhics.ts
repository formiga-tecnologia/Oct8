import Oct8 from "./Oct8";
import Oct8Obj from "./Oct8Obj"

export default class Oct8Pyshics{
    ReverseForce:Boolean= false
    gravity=0;
    force=0;
    wind=0;
    EventPyshicsForce=0
    DeltaTime=0;
    colider = false
    GravityActive = true
    coliderEvent = 0
    EventmoveForce = 0
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
                
                if(ReverseForce == false && this.force>0){setPyshic=setPyshic+1 }else{setPyshic=setPyshic-1 }
                this.force-=1
            }
        },this.DeltaTime)
    }
    CreateMoveForce(element:HTMLElement,ObjectOct8:Oct8Obj,ReverseForce:boolean=false){
        let setPyshic = 0
        this.ReverseForce = ReverseForce
        if(this.ReverseForce){setPyshic = parseInt(element.style.marginLeft)+this.gravity }else{setPyshic = parseInt(element.style.marginLeft)+this.gravity-1 }
        this.EventmoveForce = setInterval(()=>{      
            if(this.GravityActive == true && this.force > 0)
            {
                ObjectOct8.Properties.marginLeft = setPyshic
                element.style.marginLeft=setPyshic+"vh"
                
                if(this.ReverseForce){setPyshic=setPyshic+1 }else{setPyshic=setPyshic-1 }
                this.force-=1
            }
        },this.DeltaTime)
    }
    CreateColider(ObjectTarget:Oct8Obj,ObjectHit:Oct8Obj,Callfuncion:any){
        this.coliderEvent = setInterval(()=>{
            if(ObjectTarget.Properties.marginTop-2 == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft+ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft){
                Callfuncion()
                this.colider = true
            }

            if(ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft-ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft){
                Callfuncion()
                this.colider = true
            }

            if(ObjectTarget.Properties.marginLeft-2 == ObjectHit.Properties.marginLeft && ObjectHit.Properties.marginTop > ObjectTarget.Properties.marginTop && ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height >= ObjectHit.Properties.marginTop){
                Callfuncion()
                this.colider = true
            }

            if(ObjectTarget.Properties.marginLeft+ObjectTarget.Properties.width == ObjectHit.Properties.marginLeft && ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height >= ObjectHit.Properties.marginTop){
                Callfuncion()
                this.colider = true
            }

        },10)
    }
}