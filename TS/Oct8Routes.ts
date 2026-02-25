type MapRoute={
  Name:string
  Event:any
  Route?:string
}
class Oct8Routes {
  private static routes:Array<MapRoute> = []
  private static current: string | null = null
  private static DefaultComp?: ()=>void
  

  static register(name: string, component: any,Route:string) {
    const ElementRoute:MapRoute ={
      Name:name,
      Event:component,
      Route:Route
    }
    this.routes.push(ElementRoute)
  }
  static DefaultElements(event:()=>void){
    this.DefaultComp =  event
  }
  static RunRoutes():void{
    window.addEventListener("hashchange",()=>{
      const RouteFind = window.location.hash
      const Navigate = this.routes.find(x => x.Route == RouteFind)??""
      if(Navigate)
      this.navigate("#app",Navigate?.Name)
    })
  }
  static navigate(ElementId:string,NameRoute:string):void{
    this.current = NameRoute
    const Element = this.routes.filter(x=>x.Name == NameRoute)
    if(Element){
      const Base =  document.querySelector(ElementId)
      if(Base){
        Base.innerHTML = ""
      }
      Element[0]?.Event()
      if(this.DefaultComp){
        console.log(this.DefaultComp)
        this.DefaultComp
      }
    }

  }
}

export {Oct8Routes}