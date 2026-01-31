class Oct8Factory {
    /**
     * Create Object fatory base Oct8, Register in Oct8 Factory Class
     *
     * @param name  Object Name (string)
     * @param component  Target Component, represents with object Class
     */
    static register(name, component) {
        if (this.registry.has(name)) {
            throw new Error(`Oct8: componente "${name}" já registrado`);
        }
        this.registry.set(name, component);
    }
    static render(name, target, props) {
        const Component = this.registry.get(name);
        if (!Component) {
            throw new Error(`Oct8: componente "${name}" não encontrado`);
        }
        const host = document.querySelector(target);
        if (!host) {
            throw new Error(`Oct8: alvo "${target}" não encontrado no DOM`);
        }
        const instance = new Component(props);
        const result = instance.build();
        const element = this.normalizeElement(result);
        if (typeof instance.styled == "function") {
            Object.assign(element.style, instance.styled());
        }
        host.appendChild(element);
        this.instances.set(element, instance);
        return element;
    }
    static normalizeElement(content) {
        if (content instanceof HTMLElement) {
            return content;
        }
        const wrapper = document.createElement("div");
        wrapper.innerHTML = content.trim();
        if (wrapper.children.length === 1) {
            return wrapper.firstElementChild;
        }
        return wrapper;
    }
    static destroy(element) {
        const instance = this.instances.get(element);
        if (!instance) {
            console.warn("Oct8: elemento não registrado");
            element.remove();
            return;
        }
        instance.onDestroy?.();
        this.instances.delete(element);
        element.remove();
    }
}
Oct8Factory.registry = new Map();
Oct8Factory.instances = new WeakMap();
export { Oct8Factory };
//# sourceMappingURL=Oct8Factory.js.map