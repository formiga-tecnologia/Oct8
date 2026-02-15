type DocumentOct8 = {
    Name: String;
    Document: any;
};
declare class Oct8Document {
    private static DocumentList;
    constructor();
    static newDocument(DocumentName: string, Document: any): void;
    static getDocument(Name: string): DocumentOct8;
}
export { Oct8Document };
//# sourceMappingURL=Oct8Document.d.ts.map