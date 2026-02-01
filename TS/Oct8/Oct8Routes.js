class Oct8Routes {
    static register(name, component) {
        this.routes.set(name, component);
    }
    static mount(target) {
        const el = document.querySelector(target);
        if (!el)
            throw new Error("Oct8Routes: target element not setter");
        this.outlet = el;
    }
    static navigate(name) {
        if (!this.routes.has(name)) {
            console.warn(`Oct8Routes: Route "${name}" not exists`);
            return;
        }
        this.current = name;
        this.render();
    }
    static render() {
        this.outlet.innerHTML = "";
        const Component = this.routes.get(this.current);
        const instance = new Component();
        const content = instance.build();
        if (typeof content === "string") {
            this.outlet.innerHTML = content;
        }
        else {
            this.outlet.appendChild(content);
        }
    }
}
Oct8Routes.routes = new Map();
Oct8Routes.current = null;
export { Oct8Routes };
//# sourceMappingURL=Oct8Routes.js.map