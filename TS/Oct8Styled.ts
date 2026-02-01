type StyleEntry = {
  href: string
}

class Oct8Styled{
  private static registry = new Map<string, StyleEntry>()
  private static active = new Map<string, HTMLLinkElement>()

  static register(name: string, href: string): void {
    if (this.registry.has(name)) {
      throw new Error(`Oct8Styles: estilo "${name}" já registrado`)
    }
    this.registry.set(name, { href })
  }

  static set(name: string): void {
    if (this.active.has(name)) return

    const entry = this.registry.get(name)
    if (!entry) {
      throw new Error(`Oct8Styles: estilo "${name}" não encontrado`)
    }

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = entry.href
    link.dataset.oct8Style = name

    document.head.appendChild(link)
    this.active.set(name, link)
  }

  static unuse(name: string): void {
    const link = this.active.get(name)
    if (!link) return

    link.remove()
    this.active.delete(name)
  }

  static clear(): void {
    this.active.forEach(link => link.remove())
    this.active.clear()
  }

  static list(): string[] {
    return [...this.active.keys()]
  }
}
export{Oct8Styled}