const OCT8_ELEMENT = Symbol("oct8_element");
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
    /**
     * Render the component in targte element HTML.
     *
     * @param name  Name od Oct8 component register in list of base components
     * @param target  target element where the comppont , to go insert
     * @param props  Props of target component
     * @returns
     */
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
        if (instance.styled) {
            Object.assign(element.style, instance.styled());
        }
        host.appendChild(element);
        instance[OCT8_ELEMENT] = element;
        this.instances.set(element, instance);
        this.liveInstances.add(instance);
        return instance;
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
    /**
     * Destroy component in HTML document
     *
     * @param element  target element for destroy.
     * @returns
     */
    static destroy(element) {
        const instance = this.instances.get(element);
        if (!instance) {
            console.warn("Oct8: elemento não registrado");
            element.remove();
            return;
        }
        instance.onDestroy?.();
        this.instances.delete(element);
        this.liveInstances.delete(instance);
        element.remove();
    }
    static SetDataAttribute(Attribute, InfoData) {
        const Elements = document.querySelectorAll(`[${Attribute}]`);
        let index = 0;
        Elements.forEach(el => {
            el.innerHTML = InfoData[index];
            index += 1;
        });
    }
    static getInstancesByName(name) {
        const Component = this.registry.get(name);
        if (!Component)
            return [];
        return Array.from(this.liveInstances)
            .filter(inst => inst instanceof Component);
    }
    static GetDataAttribute(Attribute) {
        const Elements = document.querySelectorAll(`[${Attribute}]`);
        return Elements;
    }
    static ValidValue(value, condition, returnTrue, ReturnFalse) {
        if (condition(value)) {
            return returnTrue;
        }
        return ReturnFalse;
    }
    /**
     * Update the component realize the new render to element
     *
     * @param instance Realizes Update in the target instances element.
     * @returns
     */
    static update(instance) {
        const element = instance[OCT8_ELEMENT];
        if (!element) {
            throw new Error("Oct8: instância sem elemento associado");
        }
        const result = instance.build();
        const newElement = this.normalizeElement(result);
        instance.styled &&
            Object.assign(newElement.style, instance.styled());
        element.replaceWith(newElement);
        this.instances.delete(element);
        this.instances.set(newElement, instance);
        instance[OCT8_ELEMENT] = newElement;
        return newElement;
    }
}
Oct8Factory.registry = new Map();
Oct8Factory.instances = new WeakMap();
Oct8Factory.liveInstances = new Set();
export { Oct8Factory };
//# sourceMappingURL=Oct8Factory.js.map