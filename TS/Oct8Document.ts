type DocumentOct8 ={
    Name:String,
    Document:any
}

class Oct8Document{
    private static  DocumentList:Array<DocumentOct8> = []
    constructor(){

    }
    static newDocument(DocumentName:string,Document:any){
        const newDoc: DocumentOct8 = {
        Name: DocumentName,
        Document: Document
        };

        this.DocumentList.push(newDoc)
    }
    static getDocument(Name:string):DocumentOct8{
        return this.DocumentList.find(doc=> doc.Name == Name)?.Document
    }


}

export  {Oct8Document}