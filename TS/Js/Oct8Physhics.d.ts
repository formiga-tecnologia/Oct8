import Oct8Obj from "./Oct8Obj";
export default class Oct8Pyshics {
    ReverseForce: Boolean;
    gravity: number;
    force: number;
    wind: number;
    EventPyshicsForce: number;
    DeltaTime: number;
    colider: boolean;
    GravityActive: boolean;
    coliderEvent: number;
    EventmoveForce: number;
    SetDynamics(gravitySet?: number, forceSet?: number, windSet?: number, DeltaTimeSet?: number): void;
    CreateGravityForce(element: HTMLElement, ObjectOct8: Oct8Obj, ReverseForce?: boolean): void;
    CreateMoveForce(element: HTMLElement, ObjectOct8: Oct8Obj, ReverseForce?: boolean): void;
    CreateColider(ObjectTarget: Oct8Obj, ObjectHit: Oct8Obj, Callfuncion: any): void;
}
//# sourceMappingURL=Oct8Physhics.d.ts.map