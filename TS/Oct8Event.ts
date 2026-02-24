
type EventOct = {
  EventName: string
  idEvent?:string 
  Type: string
  Event: any
}

class Oct8Event {
  private static Names: Array<EventOct> = []
  private static EventOct_ :Array<EventOct> = []
  private static CreateEventArray:Array<EventOct> =[]

  static  randomCustom(length: number = 4, chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

  static ApplyAEvents(): void {
    
    this.Names.forEach(els=>{
      
      const a = document.querySelectorAll("[oct-event]");
      a.forEach(el=>{
        let id_ = this.randomCustom(4)
        if(els.EventName == el.getAttribute("oct-event") && el.id != els.EventName){
           el.id = els.EventName+ id_
           const Event_id:EventOct ={
            EventName:el.id,
            idEvent:els.EventName,
            Event:els.Event,
            Type:els.Type
           }
           this.CreateEventArray.push(Event_id)
        }    
      })
    })
    this.CreateEventArray.forEach(e=>{
      document.getElementById(e.EventName)?.addEventListener(e.Type,e.Event)
    })
  }

  static DisableEvent(EventName:string=""):void{
      if(EventName == ""){
        this.CreateEventArray.forEach(el=>{
         document.getElementById(el.EventName)?.removeEventListener(el.Type,el.Event)
        })
      }
      const Events = this.CreateEventArray.filter(x => x.idEvent == EventName)   
      Events.forEach(el=>{
        document.getElementById(el.EventName)?.removeEventListener(el.Type,el.Event)
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
