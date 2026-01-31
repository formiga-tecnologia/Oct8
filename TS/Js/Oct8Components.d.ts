export default class Oct8Components {
    content: string;
    Target: HTMLDivElement;
    Value: string;
    PropsValues: any;
    Components: Array<(string | Number | HTMLDivElement)[]>;
    CompName: string;
    constructor(content: string, Target: HTMLDivElement, Value: string, PropsValues: any | undefined, Components: Array<(string | Number | HTMLDivElement)[]> | undefined, CompName: string);
    CreateNewComponent(ComponentName: string, content: string, Target: HTMLDivElement, value: string): void;
    GenerateComponent(ComponentName: string, TargetElement: string): void;
    RemoveComponent(Target: HTMLDivElement): void;
    GetComponent(): string | Number | HTMLDivElement | undefined;
    CreateNewProps(KeyValue: any, Value: any): void;
    GetPropValue(KeyValue: any): any;
    AlterPropValue(KeyValue: any, NewValue: any): void;
    AlterComponentValues(Target: HTMLDivElement, NewValue: string): void;
}
//# sourceMappingURL=Oct8Components.d.ts.map