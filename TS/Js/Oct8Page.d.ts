declare abstract class Oct8Page {
    protected root: HTMLElement;
    constructor();
    abstract build(): void;
    mount(Component: any, props?: any): void;
    render(target: string): void;
    destroy(): void;
}
export { Oct8Page };
//# sourceMappingURL=Oct8Page.d.ts.map