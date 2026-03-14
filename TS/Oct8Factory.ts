import { Oct8 } from "./Oct.js"

const OCT8_ELEMENT = Symbol("oct8_element")
export interface Oct8InternalInstance {
  build(): string | HTMLElement
  styled?(): Partial<CSSStyleDeclaration>
  destroy?(): void
  [OCT8_ELEMENT]?: HTMLElement
}

type ComponentConstructor<T = any> = new (
  props?: T
) => Oct8InternalInstance
type FactoryTemplate ={
  NameTemplate:string
  styled?:Function
  Reaction?:Function
  FactoryRegister?:Function
  Documents?:Function
  Routes?:Function
}
class TemplateFactory{
  private FactoryRegister_:Array<FactoryTemplate> = []
    NewTemplate(TemplateName:string,StyledFunc:Function,Reactions:Function,FactoryRegister:Function,Documents:Function,Routes:Function):void{
        const TemplateElement:FactoryTemplate = {
            NameTemplate:TemplateName,
            styled:StyledFunc,
            Reaction:Reactions,
            FactoryRegister:FactoryRegister,
            Documents:Documents,
            Routes:Routes
        }

        this.FactoryRegister_.push(TemplateElement)
    }
    private RenderTemplate(name:string):void{
      const Template = this.FactoryRegister_.find(x =>x.NameTemplate == name)
      Template?.styled != undefined ? Template.styled():""
      Template?.Reaction != undefined ? Template?.Reaction():""
      Template?.FactoryRegister != undefined ? Template?.FactoryRegister():""
      Template?.Documents != undefined ? Template?.Documents():""
      Template?.Routes != undefined ? Template.Routes():""
    
    }
}
type Component={
  name:string,
  value?:string
}

class Oct8Factory {
  private static registry = new Map<string, ComponentConstructor>()
  private static instances = new WeakMap<HTMLElement, any>()
  private static liveInstances = new Set<Oct8InternalInstance>()
  public static Components = new Array<Component>
  public static Pathcomponent:string = ""
  static Template = new TemplateFactory()
  constructor(){
      Oct8.Styled.ValidCssFile()
     
  }

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
   * 
   * @param nameComponent Name component for your new componet ex: "ComponentName"
   */
  static CreateComponent(nameComponent: string): void {
    const newComp: Component = {
      name: nameComponent
    }
    try {
      (async () => {
        console.log(this.Pathcomponent + "/" + nameComponent + ".html")
        const content = await this.fetchLocal(this.Pathcomponent + "/" + nameComponent + ".html")
        newComp.value = content
        if (this.Components.filter(x => x.name == nameComponent).length >= 1) {
          throw Error("Oct8: Element already  exists with this name ")
        }
        else {
          this.Components.push(newComp)
        }
      })()
    }
    catch (err) {

      console.error(err)
    }

  }

  /**
   * 
   * @param nameComponet Name component registred in CreateComponent function
   * @param TargetIdorClass  Select target where this element , will created ex: "#id .clss or div"
   * @param props  Props witch your component will inject in HTML ex: {Name: "Value"} in html: <div>{Name}</div>
   */
  static RenderComponent(nameComponet:string,TargetIdorClass:string,props:object):void{
    const Element = this.Components.find(x => x.name == nameComponet)
    const Target = document.querySelector(TargetIdorClass)

    if(Element!=undefined && Target){
      if (Element !== undefined) {
            if(props){

              const Keys = Object.keys(props)
              Keys.forEach(k =>{
                let  f=  props[k as keyof  typeof props]
                if(Element.value)
                  while((Element.value.includes("{id}")))
                {
                  Element.value = Element.value?.replace(`{${k}}`,String(f).toString())
                }
                
              }) 
            }
            Target.innerHTML += Element.value??"<div> Sorry, not have content here </div>"
        }
        else{
          throw Error("Oct8: target element dont find in document")
        }
    }
    else{
          throw Error("Oct8: Component not register in Oct8")
    }
  }
  
  static async fetchLocal(path:string):Promise<string> {
    const response = await fetch(path)
    if(!response.ok){
      console.log("error")
      throw new Error("Erro ao carregar o arquivo de componente")
    }
    console.log(response.text)
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
    this.liveInstances.add(instance)


    return instance
  }
static ExistProp(
    key: string,
    obj: Record<string, any>, // objeto genérico
    ValueReturn: (val: any) => any // função que recebe o valor e retorna algo
  ): any {
    if (key in obj) {
      return ValueReturn(obj[key]); // acessa dinamicamente
    }
    return ""; // se não existir, retorna undefined
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
    this.liveInstances.delete(instance)
    element.remove()
  }

    static SetDataAttribute(Attribute:string,InfoData:Array<any>):void{
    const Elements = document.querySelectorAll(`[${Attribute}]`)
    let index = 0;
    Elements.forEach(el =>{
        el.innerHTML = InfoData[index]
        index+=1
    })
  }

  static getInstancesByName(name: string): Oct8InternalInstance[] {
  const Component = this.registry.get(name)
  if (!Component) return []

  return Array.from(this.liveInstances)
    .filter(inst => inst instanceof Component)
}
  static GetDataAttribute(Attribute:string):NodeListOf<Element>{
    const Elements = document.querySelectorAll(`[${Attribute}]`)
    return Elements
  }

  static ValidValue(value:any,condition:Function,returnTrue:any,ReturnFalse:any):any{
      if(condition(value)){
          return returnTrue
      }
      return ReturnFalse
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

class FactoryClass extends Oct8Factory{
   props:Record<string,any>
   FactoryObj:string 
   Factory:Oct8Factory = new Oct8Factory()
  constructor(props:any){
    super()
    this.props = props
    this.FactoryObj = ""
  }
  build(){
    try{
      Oct8.Styled.ValidCssFile()

      return this.FactoryObj
    }
    catch{
      console.error("oct8 Styled: Erros em criação de CSS files");
    }
  }
  GetValidProp(Prop:any,Return:(vak:any)=>{}):any{
    return  Oct8Factory.ExistProp(Prop,this.props,Return)
  }
}

export { Oct8Factory ,FactoryClass}