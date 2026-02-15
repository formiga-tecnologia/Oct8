declare const OCT8_ELEMENT: unique symbol;
export interface Oct8InternalInstance {
    build(): string | HTMLElement;
    styled?(): Partial<CSSStyleDeclaration>;
    destroy?(): void;
    [OCT8_ELEMENT]?: HTMLElement;
}
type ComponentConstructor<T = any> = new (props?: T) => Oct8InternalInstance;
declare class Oct8Factory {
    private static registry;
    private static instances;
    private static liveInstances;
    constructor();
    /**
     * Create Object fatory base Oct8, Register in Oct8 Factory Class
     *
     * @param name  Object Name (string)
     * @param component  Target Component, represents with object Class
     */
    static register<T>(name: string, component: ComponentConstructor<T>): void;
    /**
     * Render the component in targte element HTML.
     *
     * @param name  Name od Oct8 component register in list of base components
     * @param target  target element where the comppont , to go insert
     * @param props  Props of target component
     * @returns
     */
    static render<T>(name: string, target: string, props?: T): any;
    static ExistProp(key: string, obj: Record<string, any>, // objeto genérico
    ValueReturn: (val: any) => any): any;
    private static normalizeElement;
    /**
     * Destroy component in HTML document
     *
     * @param element  target element for destroy.
     * @returns
     */
    static destroy(element: HTMLElement): void;
    static SetDataAttribute(Attribute: string, InfoData: Array<any>): void;
    static getInstancesByName(name: string): Oct8InternalInstance[];
    static GetDataAttribute(Attribute: string): NodeListOf<Element>;
    static ValidValue(value: any, condition: Function, returnTrue: any, ReturnFalse: any): any;
    /**
     * Update the component realize the new render to element
     *
     * @param instance Realizes Update in the target instances element.
     * @returns
     */
    static update(instance: Oct8InternalInstance): HTMLElement;
}
declare class FactoryClass extends Oct8Factory {
    props: Record<string, any>;
    FactoryObj: string;
    Factory: Oct8Factory;
    constructor(props: any);
    build(): string | undefined;
    GetValidProp(Prop: any, Return: (vak: any) => {}): any;
}
export { Oct8Factory, FactoryClass };
//# sourceMappingURL=Oct8Factory.d.ts.map