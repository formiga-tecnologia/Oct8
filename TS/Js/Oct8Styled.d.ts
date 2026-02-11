type BindCssList = {
    Attribute: string;
    value: string;
    Element: HTMLElement;
};
declare class Oct8Styled {
    private static registry;
    private static active;
    private static Attribute;
    private static BindCssList;
    static register(name: string, href: string): void;
    static GetAttributeCSS(Attribute: string): BindCssList[];
    static SetAttributeCSS(value: any): void;
    static set(name: string): void;
    static unuse(name: string): void;
    static clear(): void;
    static list(): string[];
}
export { Oct8Styled };
//# sourceMappingURL=Oct8Styled.d.ts.map