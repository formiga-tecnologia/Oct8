declare class Oct8Query {
    private Results;
    constructor(query: string);
    where(predicate: string): Oct8Query;
    update(value: any, eraseContent?: boolean): Oct8Query;
    delete(): Oct8Query;
}
export { Oct8Query };
//# sourceMappingURL=Oct8Query.d.ts.map