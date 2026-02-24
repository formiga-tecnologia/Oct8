class Oct8Routes {
    static register(name, component) {
        const ElementRoute = {
            Name: name,
            Event: component
        };
        this.routes.push(ElementRoute);
    }
    static DefaultElements(event) {
        this.DefaultComp = event;
    }
    static navigate(ElementId, NameRoute) {
        this.current = NameRoute;
        const Element = this.routes.filter(x => x.Name == NameRoute);
        if (Element) {
            const Base = document.querySelector(ElementId);
            if (Base) {
                Base.innerHTML = "";
            }
            Element[0]?.Event();
            if (this.DefaultComp) {
                console.log(this.DefaultComp);
                this.DefaultComp;
            }
        }
    }
}
Oct8Routes.routes = [];
Oct8Routes.current = null;
export { Oct8Routes };
//# sourceMappingURL=Oct8Routes.js.map