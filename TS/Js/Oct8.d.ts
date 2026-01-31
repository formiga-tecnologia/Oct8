import Oct8Events from "./Oct8Events.js";
import Oct8Obj from "./Oct8Obj.js";
import Oct8Pyshics from "./Oct8Physhics.js";
declare const Oct8_base: typeof Oct8Obj;
export default class Oct8 extends Oct8_base {
    Id: string;
    X: number;
    Y: number;
    W: number;
    H: number;
    TypeContainer: string;
    AppendElement: string;
    Render: boolean;
    Pyshics: Oct8Pyshics;
    OctObj: Oct8Obj;
    CallEvents: Oct8Events;
    constructor(Id?: string, X?: number, Y?: number, W?: number, H?: number, TypeContainer?: string, AppendElement?: string, Render?: boolean);
}
export {};
//# sourceMappingURL=Oct8.d.ts.map