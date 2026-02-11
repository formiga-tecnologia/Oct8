type EventHandler = (event: Event) => void;
type CustomEventFactory = (el: HTMLElement, handler: EventHandler) => void;
declare class Oct8Event {
    private static attributeName;
    private static events;
    private static customTypes;
    private static globalActive;
    static setAttributeName(name: string): void;
    static enableAll(): void;
    static disableAll(): void;
    static createEventType(name: string, factory: CustomEventFactory): void;
    static register(eventType: string, eventName: string, handler: EventHandler): void;
    static disable(eventName: string): void;
    static enable(eventName: string): void;
    static getStats(eventName: string): {
        name: string;
        eventType: string;
        count: number;
        active: boolean;
    }[];
}
export { Oct8Event };
//# sourceMappingURL=Oct8Event.d.ts.map