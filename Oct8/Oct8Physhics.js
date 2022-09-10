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
    CreateGravityForce(element, ObjectOct8) {
        let setPyshic = parseInt(element.style.marginTop) + this.gravity;
        this.EventPyshicsForce = setInterval(() => {
            if (this.GravityActive == true) {
                ObjectOct8.Properties.marginTop = setPyshic;
                element.style.marginTop = setPyshic + "vh";
                setPyshic = setPyshic + 1;
            }
        }, this.DeltaTime);
    }
    CreateColider(ObjectTarget, ObjectHit, Callfuncion) {
        this.coliderEvent = setInterval(() => {
            //Detectar TOPO
            if (ObjectTarget.Properties.marginTop == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft + ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft) {
                Callfuncion();
            }
        }, 1000);
    }
}
