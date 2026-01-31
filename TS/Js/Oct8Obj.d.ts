export default class Oct8Obj {
    Id: string;
    X: number;
    Y: number;
    W: number;
    H: number;
    TypeContainer: string;
    AppendElement: string;
    Render: boolean;
    PropsElement: any;
    ObjectsFactory: Array<any>;
    Properties: any;
    ContainerTypes: string[];
    containerSet: string;
    id: string;
    AnimateEvent: Array<any>;
    event: number;
    On: boolean;
    animMove: number;
    timeLine_: {};
    timeline_event: Array<any>;
    frameAnimation: any;
    frameSelected: number;
    current_scene: number;
    Scene_Return_values: any;
    constructor(Id?: string, X?: number, Y?: number, W?: number, H?: number, TypeContainer?: string, AppendElement?: string, Render?: boolean);
    /**
     * Create one new Element for your page,insert one Id.
     * @param {string} id of tag Html what your want add to page.
     * @param {string} AppendElementId Content for your new element.
     * @param {string} typeContainerProp Target object of your add the new element.
     */
    CreateContainerElement(id?: string, AppendElementId?: string, typeContainerProp?: string, typeValueCreated?: string): HTMLElement;
    CreateContainerElementBody(id?: string, typeContainerProp?: string, typeValueCreated?: string): void;
    GetElementId(): HTMLElement | null;
    ModifyProps(element: HTMLElement, value?: any, prop?: string): void;
    CreateObjectFactory(Object: any, ObjectName: string): void;
    AppendObjectFacyotyTo(ObjectName: string, param: any): void;
    CreateAnimationEvent(element: any, TypePropModify?: string, Time?: number, Value?: number, LimitValue?: any): void;
    StopAnimation(Id?: number): void;
    CreateEvent(functionCallback?: any, time?: number): void;
    CreateAnimationCssEvent(animationCssRuleName: string, element: any, time: number, timeAnimation: number, iteration?: any, reverse?: String, fillMode?: boolean): void;
    StopAnimationCssEvent(element: any, time: number): void;
    StopEvent(): void;
    /**
     * Modify your selected element  [ X,Y,W,H ] propries.
     * @param {string} id of tag Html what your want add to page.
     * @param {string} X Value of X position.
     * @param {string} Y Value of Y position.
     * @param {string} W Value of Width value.
     * @param {string} H Value of Heigth value.
     */
    ModifyPropsDefault(element: any, X?: any, Y?: any, W?: any, H?: any): void;
    ModifyContentContainer(element: any, content: HTMLElement, clearContent?: boolean): any;
    CreateTimeLine(time: number, loop?: boolean): string;
    ExecuteTimeLine(): void;
    NewScene(SceneNameFrame: string, Element: any | undefined, Time: number, TimeFrameRate: number): void;
    RemoveScene(SceneNameFrame: string): void;
    ExecuteNextScene(): boolean;
    ExecutePrevScene(): boolean;
    ExecuteScene(SceneNameFrame: string): any;
}
//# sourceMappingURL=Oct8Obj.d.ts.map