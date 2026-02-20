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
    private static CssClassList;
    static CssRules(CssClasslist_: Array<string>): string;
    static InitCSS(): void;
    static register(name: string, href: string): void;
    static GetAttributeCSS(Attribute: string): BindCssList[];
    static BindAttributes(): void;
    static SetAttributeCSS(value: any): void;
    static set(name: string): void;
    static unuse(name: string): void;
    static clear(): void;
    static list(): string[];
    static GetCssStyled(Styled: string, Layer: string): void;
    static ValidCssFile(): void;
    static CssOct8: Record<string, string>;
}
export { Oct8Styled };
//# sourceMappingURL=Oct8Styled.d.ts.map