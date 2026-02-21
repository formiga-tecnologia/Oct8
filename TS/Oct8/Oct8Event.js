class Oct8Event {
    static CreateEvent(Event, name, children, TypeEvent = "click") {
        children = `<div oct-event=${name}> ${children}</div>`;
        document.querySelectorAll("[oct-event]").forEach(el => {
            console.log(el);
            const Type = el.getAttribute("oct-event");
            const Id = Math.random().toString(36).substring(2, 6);
            if (Type === name) {
                el.setAttribute("oct-event", Type + Id);
                el.addEventListener(TypeEvent, () => {
                    Event();
                });
            }
        });
        return children;
    }
}
export { Oct8Event };
//# sourceMappingURL=Oct8Event.js.map