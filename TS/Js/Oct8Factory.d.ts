type ComponentConstructor<T = any> = new (props?: T) => {
    build(): string | HTMLElement;
    styled?(): Partial<CSSStyleDeclaration>;
    destroy?(): void;
};
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
    static render<T>(name: string, target: string, props?: T): HTMLElement;
    private static normalizeElement;
    static destroy(element: HTMLElement): void;
}
export { Oct8Factory };
//# sourceMappingURL=Oct8Factory.d.ts.map