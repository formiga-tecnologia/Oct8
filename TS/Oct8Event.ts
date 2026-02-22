
type EventOct = {
  EventName: string
  Type: string
  Event: any
}

class Oct8Event {
  private static Names: Array<EventOct> = []
  private static EventOct_ :Array<EventOct> = []
  static ApplyAEvents(): void {
    this.Names.forEach(els=>{
      
      const a = document.querySelectorAll("[oct-event]");
      a.forEach(el=>{
        console.log(this.Names)
        if(els.EventName == el.getAttribute("oct-event")){
           //el.addEventListener(els.Type,els.Event)
           el.id = els.EventName+ 0
           // Implementar Sistema de varredur por ID
        }
       
      })
      

    })
  }
  static CreateEvent(Event: any, name: string, children: string, TypeEvent: string = "click"): string {
    children = `<oct oct-event=${name}> ${children}</oct>`
    const EventElement: EventOct = {
      EventName: name,
      Event: Event,
      Type: TypeEvent
    }
    this.Names.push(EventElement)
    return children
  }
  private static EventAdd():void{
      this.EventOct_.forEach(element => {
          document.getElementById(element.EventName)?.addEventListener(element.Type,element.Event)
      });
  }
}

 
export { Oct8Event }
