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
                    document.getElementById(el.id)?.addEventListener(els.Type, els.Event);
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
Oct8Event.CreateEventArray = [];
export { Oct8Event };
//# sourceMappingURL=Oct8Event.js.map