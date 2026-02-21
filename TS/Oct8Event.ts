

class Oct8Event {
   static CreateEvent(Event:any,name:string,children:string,TypeEvent:string="click"):string{
    children  =`<div oct-event=${name}> ${children}</div>`
    document.querySelectorAll("[oct-event]").forEach(el =>{
      console.log(el)
      const Type = el.getAttribute("oct-event")
      const Id = Math.random().toString(36).substring(2, 6)
      if(Type === name){
          el.setAttribute("oct-event",Type+Id)
          el.addEventListener(TypeEvent,()=>{
            
            Event()
            
          })

      }
    })
      return children
   }
}

export { Oct8Event }
