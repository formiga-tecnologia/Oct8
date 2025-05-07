

export class DocumentFactory{
    constructor(SetClass=IDocumentFactory){
        this.DocFac =  new SetClass()
    }
    SetNewValue(Key,Value){
        Reflect.set(this.DocFac,Key,Value)
    }
    ReturnValues(){
        return this.DocFac
    }
}

class IDocumentFactory{
    constructor(){

    }
}