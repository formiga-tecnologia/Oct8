class Oct8Styled {
    static CssRules(CssClasslist_) {
        let v = "oct8css = '";
        CssClasslist_.forEach((el) => {
            v += " " + el;
        });
        return v + "'";
    }
    static CreateApplyRule(RuleName, RulesOct8Css) {
        const Element = {
            ElementRules: this.CssRules(RulesOct8Css),
            RuleName: RuleName
        };
        this.RulesApply.push(Element);
    }
    static RenderApplyRule(RuleName) {
        return this.RulesApply.find(x => x.RuleName == RuleName)?.ElementRules ?? "";
    }
    static InitCSS() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../TS/Oct8/oct8.css"; // Fixed : in version final apply Folder Oct8
        document.head.appendChild(link);
    }
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
    static BindAttributes() {
        const values = this.GetAttributeCSS(this.Attribute);
        if (!values)
            return;
        values.forEach(P => {
            if (P.value.split(" ").length >= 1) {
                console.log(P.value);
                P.value.split(" ").forEach(el => {
                    const valueRender = el.split(":");
                    var Key = valueRender[0] ? valueRender[0]?.toString() : "";
                    var Value = valueRender[1] ? valueRender[1]?.toString() : "";
                    P.Element.setAttribute(Key, Value);
                });
            }
        });
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
    static GetCssStyled(Styled, Layer) {
    }
    static ValidCssFile() {
        let df = document.styleSheets;
        for (const x of Array.from(df)) {
            try {
                for (const f of Array.from(x.cssRules)) {
                    if (f instanceof CSSRule) {
                        if (f.cssText.includes("@layer") == false) {
                            console.log(f.cssText);
                            console.error("oct8 Styled Error: Não existe layer para a classe instanciada, crie uma @layer{ } e coloque sua classe dentro da layer.");
                        }
                    }
                }
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
Oct8Styled.registry = new Map();
Oct8Styled.active = new Map();
Oct8Styled.Attribute = "";
Oct8Styled.RulesApply = [];
Oct8Styled.BindCssList = [];
Oct8Styled.CssClassList = {
    DisplayContainer: "oct8css = 'div' ",
    LabelWarning: "oct8css = 'label'"
};
Oct8Styled.CssOct8 = {
    Card: "card",
    Medium: "md"
};
export { Oct8Styled };
//# sourceMappingURL=Oct8Styled.js.map