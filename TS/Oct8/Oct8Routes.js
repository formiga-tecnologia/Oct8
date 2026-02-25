class Oct8Routes {
    static register(name, component, Route) {
        const ElementRoute = {
            Name: name,
            Event: component,
            Route: Route
        };
        this.routes.push(ElementRoute);
    }
    static DefaultElements(event) {
        this.DefaultComp = event;
    }
    static RunRoutes() {
        const RouteFind = window.location.hash;
            const Navigate = this.routes.find(x => x.Route == RouteFind) ?? "";
            if (Navigate)
                this.navigate("#app", Navigate?.Name);
        window.addEventListener("hashchange", () => {
            const RouteFind = window.location.hash;
            const Navigate = this.routes.find(x => x.Route == RouteFind) ?? "";
            if (Navigate)
                this.navigate("#app", Navigate?.Name);
        });
    }
    static navigate(ElementId, NameRoute) {
        debugger;
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