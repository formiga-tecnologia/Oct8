abstract class Oct8Page {
  protected root: HTMLElement

  constructor() {
    this.root = document.createElement("div")
    this.root.setAttribute("oct-page", this.constructor.name)
  }

  abstract build(): void

  mount(Component: any, props?: any): void {
    const instance = new Component(props)
    const content = instance.build()

    if (typeof content === "string") {
      const wrapper = document.createElement("div")
      wrapper.innerHTML = content
      this.root.appendChild(wrapper.firstElementChild!)
    } else {
      this.root.appendChild(content)
    }
  }

  render(target: string): void {
    const Element = document.querySelector<HTMLElement>(target)
    if(Element){
        this.build()
        Element.appendChild(this.root)
    }
  }

  destroy(): void {
    this.root.remove()
  }
}

export { Oct8Page }