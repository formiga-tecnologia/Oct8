class Oct8Document {
    constructor() {
    }
    static newDocument(DocumentName, Document) {
        const newDoc = {
            Name: DocumentName,
            Document: Document
        };
        this.DocumentList.push(newDoc);
    }
    static getDocument(Name) {
        return this.DocumentList.find(doc => doc.Name == Name)?.Document;
    }
}
Oct8Document.DocumentList = [];
export { Oct8Document };
//# sourceMappingURL=Oct8Document.js.map