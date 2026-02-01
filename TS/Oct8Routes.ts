class Oct8Routes {
  private static routes = new Map<string, any>()
  private static current: string | null = null
  private static outlet: HTMLElement

  static register(name: string, component: any) {
    this.routes.set(name, component)
  }

  static mount(target: string) {
    const el = document.querySelector(target)
    if (!el) throw new Error("Oct8Routes: target element not setter")
    this.outlet = el as HTMLElement
  }

  static navigate(name: string) {
    if (!this.routes.has(name)) {
      console.warn(`Oct8Routes: Route "${name}" not exists`)
      return
    }

    this.current = name
    this.render()
  }

  private static render() {
    this.outlet.innerHTML = ""

    const Component = this.routes.get(this.current!)
    const instance = new Component()
    const content = instance.build()

    if (typeof content === "string") {
      this.outlet.innerHTML = content
    } else {
      this.outlet.appendChild(content)
    }
  }
}

export {Oct8Routes}