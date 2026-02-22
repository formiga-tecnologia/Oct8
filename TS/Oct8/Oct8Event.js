class Oct8Event {
    static ApplyAEvents() {
        this.Names.forEach(els => {
            const a = document.querySelectorAll("[oct-event]");
            a.forEach(el => {
                console.log(this.Names);
                if (els.EventName == el.getAttribute("oct-event")) {
                    //el.addEventListener(els.Type,els.Event)
                    el.id = els.EventName + 0;
                    // Implementar Sistema de varredur por ID
                }
            });
        });
    }
    static CreateEvent(Event, name, children, TypeEvent = "click") {
        children = `<oct oct-event=${name}> ${children}</oct>`;
        const EventElement = {
            EventName: name,
            Event: Event,
            Type: TypeEvent
        };
        this.Names.push(EventElement);
        return children;
    }
    static EventAdd() {
        this.EventOct_.forEach(element => {
            document.getElementById(element.EventName)?.addEventListener(element.Type, element.Event);
        });
    }
}
Oct8Event.Names = [];
Oct8Event.EventOct_ = [];
export { Oct8Event };
//# sourceMappingURL=Oct8Event.js.map