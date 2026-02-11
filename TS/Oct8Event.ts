type EventHandler = (event: Event) => void

type CustomEventFactory = (
  el: HTMLElement,
  handler: EventHandler
) => void

interface RegisteredEvent {
  eventType: string
  name: string
  handler: EventHandler
  active: boolean
  count: number
}

class Oct8Event {
  private static attributeName = "oct-event"
  private static events: RegisteredEvent[] = []
  private static customTypes = new Map<string, CustomEventFactory>()
  private static globalActive = true

  /* ========================= */
  /* CONFIG                    */
  /* ========================= */

  static setAttributeName(name: string) {
    this.attributeName = name
  }

  static enableAll() {
    this.globalActive = true
  }

  static disableAll() {
    this.globalActive = false
  }

  /* ========================= */
  /* CUSTOM EVENT TYPES        */
  /* ========================= */

  static createEventType(name: string, factory: CustomEventFactory) {
    this.customTypes.set(name, factory)
  }

  /* ========================= */
  /* REGISTER                  */
  /* ========================= */

  static register(
    eventType: string,
    eventName: string,
    handler: EventHandler
  ) {
    const elements = document.querySelectorAll<HTMLElement>(
      `[${this.attributeName}="${eventName}"]`
    )

    elements.forEach(el => {
      const registered: RegisteredEvent = {
        eventType,
        name: eventName,
        handler,
        active: true,
        count: 0
      }

      const wrappedHandler = (e: Event) => {
        if (!this.globalActive || !registered.active) return
        registered.count++
        handler(e)
      }

      if (this.customTypes.has(eventType)) {
        this.customTypes.get(eventType)!(el, wrappedHandler)
      } else {
        el.addEventListener(eventType, wrappedHandler)
      }

      this.events.push(registered)
    })
  }

  /* ========================= */
  /* CONTROL                   */
  /* ========================= */

  static disable(eventName: string) {
    this.events
      .filter(e => e.name === eventName)
      .forEach(e => (e.active = false))
  }

  static enable(eventName: string) {
    this.events
      .filter(e => e.name === eventName)
      .forEach(e => (e.active = true))
  }

  static getStats(eventName: string) {
    return this.events
      .filter(e => e.name === eventName)
      .map(e => ({
        name: e.name,
        eventType: e.eventType,
        count: e.count,
        active: e.active
      }))
  }
}

export { Oct8Event }
