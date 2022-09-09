export default class Oct8Pyshics {
    constructor() {
        this.gravity = 0;
        this.force = 0;
        this.wind = 0;
        this.EventPyshicsForce = 0;
        this.DeltaTime = 0;
    }
    SetDynamics(gravitySet = 1, forceSet = 1, windSet = 1, DeltaTimeSet = 200) {
        this.gravity = gravitySet;
        this.force = forceSet;
        this.wind = windSet;
        this.DeltaTime = DeltaTimeSet;
    }
    CreateGravityForce(objectOct8) {
        this.EventPyshicsForce = setInterval(() => {
            objectOct8.CreateAnimationEvent("marginTop", this.DeltaTime, -this.force, "+");
        }, this.DeltaTime);
    }
}
