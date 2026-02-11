const OCT8_ELEMENT = Symbol("oct8_element")
interface Oct8InternalInstance {
  build(): string | HTMLElement
  styled?(): Partial<CSSStyleDeclaration>
  destroy?(): void
  [OCT8_ELEMENT]?: HTMLElement
}

type ComponentConstructor<T = any> = new (
  props?: T
) => Oct8InternalInstance

class Oct8Factory {
  private static registry = new Map<string, ComponentConstructor>()
  private static instances = new WeakMap<HTMLElement, any>()

  /**
   * Create Object fatory base Oct8, Register in Oct8 Factory Class
   * 
   * @param name  Object Name (string)
   * @param component  Target Component, represents with object Class 
   */
  static register<T>(name: string, component: ComponentConstructor<T>): void {
    if (this.registry.has(name)) {
      throw new Error(`Oct8: componente "${name}" já registrado`)
    }
    this.registry.set(name, component)
  }

  /**
   * Render the component in targte element HTML.
   * 
   * @param name  Name od Oct8 component register in list of base components 
   * @param target  target element where the comppont , to go insert
   * @param props  Props of target component
   * @returns 
   */
  static render<T>(name: string, target: string, props?: T): any {
    const Component = this.registry.get(name)
    if (!Component) {
      throw new Error(`Oct8: componente "${name}" não encontrado`)
    }

    const host = document.querySelector(target)

    if (!host) {
      throw new Error(`Oct8: alvo "${target}" não encontrado no DOM`)
    }
    const instance = new Component(props)

    const result = instance.build()
    const element = this.normalizeElement(result)

    if (instance.styled) {
      Object.assign(element.style, instance.styled())
    }

    host.appendChild(element)

    instance[OCT8_ELEMENT] = element
    this.instances.set(element, instance)

    return instance
  }

  private static normalizeElement(content: string | HTMLElement): HTMLElement {

    if (content instanceof HTMLElement) {
      return content
    }

    const wrapper = document.createElement("div")
    wrapper.innerHTML = content.trim()

    if (wrapper.children.length === 1) {
      return wrapper.firstElementChild as HTMLElement
    }

    return wrapper
  }

   /**
    * Destroy component in HTML document
    * 
    * @param element  target element for destroy.
    * @returns 
    */
  static destroy(element: HTMLElement): void {
    const instance = this.instances.get(element)

    if (!instance) {
      console.warn("Oct8: elemento não registrado")
      element.remove()
      return
    }

    instance.onDestroy?.()
    this.instances.delete(element)
    element.remove()
  }

    static SetDataAttribute(Attribute:string,InfoData:any):void{
    const Elements = document.querySelectorAll(`[${Attribute}]`)
    let index = 0;
    Elements.forEach(el =>{
        el.innerHTML = InfoData[index]
        index+=1
    })
  }

  /**
   * Update the component realize the new render to element
   * 
   * @param instance Realizes Update in the target instances element.
   * @returns 
   */
  static update(instance: Oct8InternalInstance): HTMLElement {
    const element = instance[OCT8_ELEMENT]

    if (!element) {
      throw new Error("Oct8: instância sem elemento associado")
    }

    const result = instance.build()
    const newElement = this.normalizeElement(result)

    instance.styled &&
      Object.assign(newElement.style, instance.styled())

    element.replaceWith(newElement)

    this.instances.delete(element)
    this.instances.set(newElement, instance)

    instance[OCT8_ELEMENT] = newElement
    return newElement
  }
}



export { Oct8Factory }