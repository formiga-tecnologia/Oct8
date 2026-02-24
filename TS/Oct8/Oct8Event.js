class Oct8Event {
    static randomCustom(length = 4, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    static ApplyAEvents() {
        this.Names.forEach(els => {
            const a = document.querySelectorAll("[oct-event]");
            a.forEach(el => {
                let id_ = this.randomCustom(4);
                if (els.EventName == el.getAttribute("oct-event") && el.id != els.EventName) {
                    el.id = els.EventName + id_;
                    const Event_id = {
                        EventName: el.id,
                        idEvent: els.EventName,
                        Event: els.Event,
                        Type: els.Type
                    };
                    this.CreateEventArray.push(Event_id);
                }
            });
        });
        this.CreateEventArray.forEach(e => {
            document.getElementById(e.EventName)?.addEventListener(e.Type, e.Event);
        });
    }
    static DisableEvent(EventName = "") {
        if (EventName == "") {
            this.CreateEventArray.forEach(el => {
                document.getElementById(el.EventName)?.removeEventListener(el.Type, el.Event);
            });
        }
        const Events = this.CreateEventArray.filter(x => x.idEvent == EventName);
        Events.forEach(el => {
            document.getElementById(el.EventName)?.removeEventListener(el.Type, el.Event);
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
Oct8Event.CreateEventArray = [];
export { Oct8Event };
//# sourceMappingURL=Oct8Event.js.map