class Oct8Styled {
    static register(name, href) {
        if (this.registry.has(name)) {
            throw new Error(`Oct8Styles: estilo "${name}" já registrado`);
        }
        this.registry.set(name, { href });
    }
    static GetAttributeCSS(Attribute) {
        const Elements = document.querySelectorAll(`[${Attribute}]`);
        const CssListElements = Array.from(Elements).map(el => {
            return {
                Attribute: Attribute,
                value: el.getAttribute(Attribute) ?? "",
                Element: el
            };
        });
        this.BindCssList.push(...CssListElements);
        return CssListElements;
    }
    static SetAttributeCSS(value) {
        let Att = "";
        if (this.BindCssList) {
            this.BindCssList.forEach(element => {
                element["Element"].setAttribute(element["Attribute"], value);
                Att = element["Attribute"];
            });
        }
        this.GetAttributeCSS(Att);
    }
    static set(name) {
        if (this.active.has(name))
            return;
        const entry = this.registry.get(name);
        if (!entry) {
            throw new Error(`Oct8Styles: estilo "${name}" não encontrado`);
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = entry.href;
        link.dataset.oct8Style = name;
        document.head.appendChild(link);
        this.active.set(name, link);
    }
    static unuse(name) {
        const link = this.active.get(name);
        if (!link)
            return;
        link.remove();
        this.active.delete(name);
    }
    static clear() {
        this.active.forEach(link => link.remove());
        this.active.clear();
    }
    static list() {
        return [...this.active.keys()];
    }
}
Oct8Styled.registry = new Map();
Oct8Styled.active = new Map();
Oct8Styled.Attribute = "";
Oct8Styled.BindCssList = [];
export { Oct8Styled };
//# sourceMappingURL=Oct8Styled.js.map