declare const OCT8_ELEMENT: unique symbol;
interface Oct8InternalInstance {
    build(): string | HTMLElement;
    styled?(): Partial<CSSStyleDeclaration>;
    destroy?(): void;
    [OCT8_ELEMENT]?: HTMLElement;
}
type ComponentConstructor<T = any> = new (props?: T) => Oct8InternalInstance;
declare class Oct8Factory {
    private static registry;
    private static instances;
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
    private static normalizeElement;
    /**
     * Destroy component in HTML document
     *
     * @param element  target element for destroy.
     * @returns
     */
    static destroy(element: HTMLElement): void;
    static SetDataAttribute(Attribute: string, InfoData: any): void;
    /**
     * Update the component realize the new render to element
     *
     * @param instance Realizes Update in the target instances element.
     * @returns
     */
    static update(instance: Oct8InternalInstance): HTMLElement;
}
export { Oct8Factory };
//# sourceMappingURL=Oct8Factory.d.ts.map