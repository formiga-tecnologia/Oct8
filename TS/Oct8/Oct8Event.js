class Oct8Event {
    static setAttributeName(name) {
        this.attributeName = name;
    }
    static enableAll() {
        this.globalActive = true;
    }
    static disableAll() {
        this.globalActive = false;
    }
    static createEventType(name, factory) {
        this.customTypes.set(name, factory);
    }
    static register(eventType, eventName, handler) {
        const elements = document.querySelectorAll(`[${this.attributeName}="${eventName}"]`);
        elements.forEach(el => {
            const registered = {
                eventType,
                name: eventName,
                handler,
                active: true,
                count: 0
            };
            const wrappedHandler = (e) => {
                if (!this.globalActive || !registered.active)
                    return;
                registered.count++;
                handler(e);
            };
            if (this.customTypes.has(eventType)) {
                this.customTypes.get(eventType)(el, wrappedHandler);
            }
            else {
                el.addEventListener(eventType, wrappedHandler);
            }
            this.events.push(registered);
        });
    }
    static disable(eventName) {
        this.events
            .filter(e => e.name === eventName)
            .forEach(e => (e.active = false));
    }
    static enable(eventName) {
        this.events
            .filter(e => e.name === eventName)
            .forEach(e => (e.active = true));
    }
    static getStats(eventName) {
        return this.events
            .filter(e => e.name === eventName)
            .map(e => ({
            name: e.name,
            eventType: e.eventType,
            count: e.count,
            active: e.active
        }));
    }
}
Oct8Event.attributeName = "oct-event";
Oct8Event.events = [];
Oct8Event.customTypes = new Map();
Oct8Event.globalActive = true;
export { Oct8Event };
//# sourceMappingURL=Oct8Event.js.map