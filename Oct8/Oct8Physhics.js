export default class Oct8Pyshics {
    constructor() {
        this.gravity = 0;
        this.force = 0;
        this.wind = 0;
        this.EventPyshicsForce = 0;
        this.DeltaTime = 0;
    }
    SetDynamics(gravitySet = 1, forceSet = 1, windSet = 1, DeltaTimeSet = 100) {
        this.gravity = gravitySet;
        this.force = forceSet;
        this.wind = windSet;
        this.DeltaTime = DeltaTimeSet;
    }
    CreateGravityForce(objectOct8) {
        this.EventPyshicsForce = setInterval(() => {
            this.force -= 1;
            if (this.force <= 0) {
                this.StopEventForce()
                console.log("parrra fio")
                objectOct8.StopAnimationEvent()
            }
            else
            {
                console.log(this.force)
                objectOct8.CreateAnimationEvent("marginTop", this.DeltaTime, -this.gravity, "-");
            }
        }, this.DeltaTime);
    }
    StopEventForce(){
        clearInterval(this.EventPyshicsForce);
    }
}
