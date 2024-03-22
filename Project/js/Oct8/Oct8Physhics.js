export default class Oct8Pyshics {
    constructor() {
        this.ReverseForce = false;
        this.gravity = 0;
        this.force = 0;
        this.wind = 0;
        this.EventPyshicsForce = 0;
        this.DeltaTime = 0;
        this.colider = false;
        this.GravityActive = true;
        this.coliderEvent = 0;
        this.EventmoveForce = 0;
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
                if (ReverseForce == false && this.force > 0) {
                    setPyshic = setPyshic + 1;
                }
                else {
                    setPyshic = setPyshic - 1;
                }
                this.force -= 1;
            }
        }, this.DeltaTime);
    }
    CreateMoveForce(element, ObjectOct8, ReverseForce = false) {
        let setPyshic = 0;
        this.ReverseForce = ReverseForce;
        if (this.ReverseForce) {
            setPyshic = parseInt(element.style.marginLeft) + this.gravity;
        }
        else {
            setPyshic = parseInt(element.style.marginLeft) + this.gravity - 1;
        }
        this.EventmoveForce = setInterval(() => {
            if (this.GravityActive == true && this.force > 0) {
                ObjectOct8.Properties.marginLeft = setPyshic;
                element.style.marginLeft = setPyshic + "vh";
                if (this.ReverseForce) {
                    setPyshic = setPyshic + 1;
                }
                else {
                    setPyshic = setPyshic - 1;
                }
                this.force -= 1;
            }
        }, this.DeltaTime);
    }
    CreateColider(ObjectTarget, ObjectHit, Callfuncion) {
        this.coliderEvent = setInterval(() => {
            if (ObjectTarget.Properties.marginTop - 2 == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft + ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft) {
                Callfuncion();
                this.colider = true;
            }
            if (ObjectTarget.Properties.marginTop + ObjectTarget.Properties.height == ObjectHit.Properties.marginTop && ObjectHit.Properties.marginLeft > ObjectTarget.Properties.marginLeft && ObjectTarget.Properties.marginLeft - ObjectTarget.Properties.width >= ObjectHit.Properties.marginLeft) {
                Callfuncion();
                this.colider = true;
            }
            if (ObjectTarget.Properties.marginLeft - 2 == ObjectHit.Properties.marginLeft && ObjectHit.Properties.marginTop > ObjectTarget.Properties.marginTop && ObjectTarget.Properties.marginTop + ObjectTarget.Properties.height >= ObjectHit.Properties.marginTop) {
                Callfuncion();
                this.colider = true;
            }
            if (ObjectTarget.Properties.marginLeft + ObjectTarget.Properties.width == ObjectHit.Properties.marginLeft && ObjectTarget.Properties.marginTop + ObjectTarget.Properties.height >= ObjectHit.Properties.marginTop) {
                Callfuncion();
                this.colider = true;
            }
        }, 10);
    }
}
