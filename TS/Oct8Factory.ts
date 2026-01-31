type ComponentConstructor<T = any> = new (props?: T) => {
  build(): string | HTMLElement
  styled?(): Partial<CSSStyleDeclaration>
  destroy?() :void
}

class Oct8Factory {
  private static registry = new Map<string, ComponentConstructor>()
  private static instances = new WeakMap<HTMLElement, any>()

  /**
   * Create Object fatory base Oct8, Register in Oct8 Factory Class
   * 
   * @param name  Object Name (string)
   * @param component  Target Component, represents with object Class 
   */
  static register<T>(name: string,component: ComponentConstructor<T>): void 
  {
    if (this.registry.has(name)) 
    {
      throw new Error(`Oct8: componente "${name}" já registrado`)
    }
    this.registry.set(name, component)
  }


  static render<T>(name: string,target: string,props?: T): HTMLElement 
  {
    const Component = this.registry.get(name)
    if (!Component) 
    {
      throw new Error(`Oct8: componente "${name}" não encontrado`)
    }

    const host = document.querySelector(target)

    if (!host) 
    {
      throw new Error(`Oct8: alvo "${target}" não encontrado no DOM`)
    }

    const instance = new Component(props)
    const result = instance.build()
    const element = this.normalizeElement(result)

    if(typeof instance.styled == "function"){
      Object.assign(element.style , instance.styled())
    }
    
    host.appendChild(element)
    this.instances.set(element, instance)

    return element
  }

  private static normalizeElement(content:string| HTMLElement): HTMLElement {

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

}



export { Oct8Factory }