type ReactionStore = {
    name: string
    value:any
}

class Oct8Reaction {
    private static ReactionsListStore =  new Map<string,ReactionStore>

    /**
     * Create New Reaction to the oct8Reactions
     * @param name  Name of reaction
     * @param value  Initial Value 
     */
    static create(name:string , value:any):void{
        if(this.ReactionsListStore.has(name)){ 
            throw new Error(`Oct 8: Reactions ${name} has created`)
        }
        this.ReactionsListStore.set(name,{name:name,value:value})
    }
    /**
     * Inject the Reaction on the valid component Oct8 
     * 
     * @param name Name Of Reaction 
     * @returns  <Return: The HTML value node Reaction>
     */
    static inject(name:string):string {
        const GetReaction = this.ReactionsListStore.get(name)
        if(!GetReaction){
            throw new Error("Oct8:Reaction not registred")
        }
        const textnode = document.createTextNode(String(GetReaction.value))
        const ReactionElement = document.createElement("octreaction")
        ReactionElement.appendChild(textnode)
        ReactionElement.setAttribute("reaction",name)
        return ReactionElement.outerHTML
    }
    /**
     * Update the value of valid Reaction
     * 
     * @param name Name of Reaction
     * @param value  New Value to reaction 
     */
    static update(name:string,value:any): void{
        const ReactionsNode = document.querySelectorAll<HTMLHeadingElement>(("octreaction"))
        const Reaction = this.ReactionsListStore.get(name)
        console.log(Reaction)
        if(Reaction)
        {
            Reaction.value = value

            ReactionsNode.forEach(d =>{
            
            d.innerText = String(Reaction?.value)
        })
        }
        else{
            throw new Error("Oct8:Reaction not registred")
        }
        
    }

}

export {Oct8Reaction}