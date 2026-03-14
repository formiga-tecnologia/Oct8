import { Oct8 } from "./Oct.js";
const OCT8_ELEMENT = Symbol("oct8_element");
class TemplateFactory {
    constructor() {
        this.FactoryRegister_ = [];
    }
    NewTemplate(TemplateName, StyledFunc, Reactions, FactoryRegister, Documents, Routes) {
        const TemplateElement = {
            NameTemplate: TemplateName,
            styled: StyledFunc,
            Reaction: Reactions,
            FactoryRegister: FactoryRegister,
            Documents: Documents,
            Routes: Routes
        };
        this.FactoryRegister_.push(TemplateElement);
    }
    RenderTemplate(name) {
        const Template = this.FactoryRegister_.find(x => x.NameTemplate == name);
        Template?.styled != undefined ? Template.styled() : "";
        Template?.Reaction != undefined ? Template?.Reaction() : "";
        Template?.FactoryRegister != undefined ? Template?.FactoryRegister() : "";
        Template?.Documents != undefined ? Template?.Documents() : "";
        Template?.Routes != undefined ? Template.Routes() : "";
    }
}
class Oct8Factory {
    constructor() {
        Oct8.Styled.ValidCssFile();
    }
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
     *
     * @param nameComponent Name component for your new componet ex: "ComponentName"
     */
    static CreateComponent(nameComponent) {
        const newComp = {
            name: nameComponent
        };
        try {
            (async () => {
                console.log(this.Pathcomponent + "/" + nameComponent + ".html");
                const content = await this.fetchLocal(this.Pathcomponent + "/" + nameComponent + ".html");
                newComp.value = content;
                if (this.Components.filter(x => x.name == nameComponent).length >= 1) {
                    throw Error("Oct8: Element already  exists with this name ");
                }
                else {
                    this.Components.push(newComp);
                }
            })();
        }
        catch (err) {
            console.error(err);
        }
    }
    /**
     *
     * @param nameComponet Name component registred in CreateComponent function
     * @param TargetIdorClass  Select target where this element , will created ex: "#id .clss or div"
     * @param props  Props witch your component will inject in HTML ex: {Name: "Value"} in html: <div>{Name}</div>
     */
    static RenderComponent(nameComponet, TargetIdorClass, props) {
        const Element = this.Components.find(x => x.name == nameComponet);
        const Target = document.querySelector(TargetIdorClass);
        if (Element != undefined && Target) {
            if (Element !== undefined) {
                if (props) {
                    const Keys = Object.keys(props);
                    Keys.forEach(k => {
                        let f = props[k];
                        if (Element.value)
                            while ((Element.value.includes("{id}"))) {
                                Element.value = Element.value?.replace(`{${k}}`, String(f).toString());
                            }
                    });
                }
                Target.innerHTML += Element.value ?? "<div> Sorry, not have content here </div>";
            }
            else {
                throw Error("Oct8: target element dont find in document");
            }
        }
        else {
            throw Error("Oct8: Component not register in Oct8");
        }
    }
    static async fetchLocal(path) {
        const response = await fetch(path);
        if (!response.ok) {
            console.log("error");
            throw new Error("Erro ao carregar o arquivo de componente");
        }
        console.log(response.text);
        return await response.text();
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
    static ExistProp(key, obj, // objeto genérico
    ValueReturn // função que recebe o valor e retorna algo
    ) {
        if (key in obj) {
            return ValueReturn(obj[key]); // acessa dinamicamente
        }
        return ""; // se não existir, retorna undefined
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
Oct8Factory.Components = new Array;
Oct8Factory.Pathcomponent = "";
Oct8Factory.Template = new TemplateFactory();
class FactoryClass extends Oct8Factory {
    constructor(props) {
        super();
        this.Factory = new Oct8Factory();
        this.props = props;
        this.FactoryObj = "";
    }
    build() {
        try {
            Oct8.Styled.ValidCssFile();
            return this.FactoryObj;
        }
        catch {
            console.error("oct8 Styled: Erros em criação de CSS files");
        }
    }
    GetValidProp(Prop, Return) {
        return Oct8Factory.ExistProp(Prop, this.props, Return);
    }
}
export { Oct8Factory, FactoryClass };
//# sourceMappingURL=Oct8Factory.js.map