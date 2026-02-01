class Oct8Page {
    constructor() {
        this.root = document.createElement("div");
        this.root.setAttribute("oct-page", this.constructor.name);
    }
    mount(Component, props) {
        const instance = new Component(props);
        const content = instance.build();
        if (typeof content === "string") {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = content;
            this.root.appendChild(wrapper.firstElementChild);
        }
        else {
            this.root.appendChild(content);
        }
    }
    render(target) {
        const Element = document.querySelector(target);
        if (Element) {
            this.build();
            Element.appendChild(this.root);
        }
    }
    destroy() {
        this.root.remove();
    }
}
export { Oct8Page };
//# sourceMappingURL=Oct8Page.js.map