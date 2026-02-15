type StyleEntry = {
  href: string
}
type BindCssList = {
  Attribute: string
  value: string
  Element: HTMLElement
}

class Oct8Styled {
  private static registry = new Map<string, StyleEntry>()
  private static active = new Map<string, HTMLLinkElement>()
  private static Attribute = ""
  private static BindCssList: BindCssList[] = []
  static register(name: string, href: string): void {
    if (this.registry.has(name)) {
      throw new Error(`Oct8Styles: estilo "${name}" já registrado`)
    }
    this.registry.set(name, { href })
  }

  static GetAttributeCSS(Attribute: string): BindCssList[] {
    const Elements = document.querySelectorAll(`[${Attribute}]`)
    const CssListElements: BindCssList[] = Array.from(Elements).map(el => {
      return {
        Attribute: Attribute,
        value: (el as HTMLElement).getAttribute(Attribute) ?? "",
        Element: el as HTMLElement
      }
    })
    this.BindCssList.push(...CssListElements)
    return CssListElements
  }

  static BindAttributes(): void {
    const values = this.GetAttributeCSS(this.Attribute)
    if (!values) return

    values.forEach(P => {
      if (P.value.split(" ").length >= 1) {
        console.log(P.value)
        P.value.split(" ").forEach(el => {
          const valueRender = el.split(":")
          var Key: string = valueRender[0] ? valueRender[0]?.toString() : ""
          var Value: string = valueRender[1] ? valueRender[1]?.toString() : ""
          P.Element.setAttribute(Key, Value)
        }
        )
      }
    })
  }

  static SetAttributeCSS(value: any): void {
    let Att = ""
    if (this.BindCssList) {
      this.BindCssList.forEach(element => {
        element["Element"].setAttribute(element["Attribute"], value)
        Att = element["Attribute"]
      });
    }
    this.GetAttributeCSS(Att)
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
  static GetCssStyled(Styled: string, Layer: string): void {

  }
  static ValidCssFile() {
    let df = document.styleSheets
    for (const x of Array.from(df)) {
      try{
        for (const f of Array.from(x.cssRules)) {
          if (f instanceof CSSRule) {
            if(f.cssText.includes("@layer")==false)
            console.error("oct8 Styled Error: Não existe layer para a classe instanciada, crie uma @layer{ } e coloque sua classe dentro da layer.");
          }
        }
      }
      catch(e){
          console.error(e)
      }


    }
  }
  static CssOct8: Record<string, string> = {
    Card: "card",
    Medium: "md"
  }
}
export { Oct8Styled }