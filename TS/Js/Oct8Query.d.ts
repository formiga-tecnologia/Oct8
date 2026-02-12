type QueryResult = {
    Result: Element[];
    Query: string;
};
declare class Oct8Query {
    Results: QueryResult;
    constructor(query: string);
    ReturnResult(): QueryResult;
    where(predicate: string): Oct8Query;
    update(value: any, eraseContent?: boolean): Oct8Query;
    SetAttribute(att: string, value: string): Oct8Query;
    ReturnSelect(): Oct8Query;
    delete(): Oct8Query;
}
export { Oct8Query };
//# sourceMappingURL=Oct8Query.d.ts.map