export default class Oct8Pyshics {
    constructor() {
        this.gravity = 0;
        this.force = 0;
        this.wind = 0;
        this.EventPyshicsForce = 0;
        this.DeltaTime = 0;
        this.colider = false;
        this.GravityActive = true;
        this.coliderEvent = 0;
    }
    SetDynamics(gravitySet = 1, forceSet = 1, windSet = 1, DeltaTimeSet = 100) {
        this.gravity = gravitySet;
        this.force = forceSet;
        this.wind = windSet;
        this.DeltaTime = DeltaTimeSet;
    }
    CreateGravityForce(element, ObjectOct8, ReverseForce = false) {
        let setPyshic = 0;
        if (ReverseForce == false) {
            setPyshic = parseInt(element.style.marginTop) + this.gravity;
        }
        else {
            setPyshic = parseInt(element.style.marginTop) + this.gravity - 1;
        }
        this.EventPyshicsForce = setInterval(() => {
            if (this.GravityActive == true) {
                ObjectOct8.Properties.marginTop = setPyshic;
                element.style.marginTop = setPyshic + "vh";
                if (ReverseForce == false) {
                    setPyshic = setPyshic + 1;
                }
                else {
                    setPyshic = setPyshic - 1;
                }
            }
        }, this.DeltaTime);
    }
    CreateColider(ObjectTarget, ObjectHit, Callfuncion) {
        this.coliderEvent = setInterval(() => {
            //Detectar TOPO
            if (ObjectTarget.Properties.marginTop - 2 == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft + ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft) {
                Callfuncion();
            }
            if (ObjectTarget.Properties.marginTop + ObjectTarget.Properties.height == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft - ObjectTarget.Properties.width <= ObjectHit.Properties.marginLeft) {
                Callfuncion();
            }
            console.log(ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft);
            // console.log(ObjectTarget.Properties.marginLeft-ObjectTarget.Properties.width <= ObjectHit.Properties.marginLeft)
            //console.log(ObjectTarget.Properties.marginTop+ObjectTarget.Properties.height == ObjectHit.Properties.marginTop)
        }, 10);
    }
}
