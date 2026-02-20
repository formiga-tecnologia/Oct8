class Oct8Reaction {
    /**
     * Create New Reaction to the oct8Reactions
     * @param name  Name of reaction
     * @param value  Initial Value
     */
    static create(name, value) {
        if (this.ReactionsListStore.has(name)) {
            throw new Error(`Oct 8: Reactions ${name} has created`);
        }
        this.ReactionsListStore.set(name, { name: name, value: value });
    }
    /**
     * Inject the Reaction on the valid component Oct8
     *
     * @param name Name Of Reaction
     * @returns  <Return: The HTML value node Reaction>
     */
    static inject(name) {
        const GetReaction = this.ReactionsListStore.get(name);
        if (!GetReaction) {
            throw new Error("Oct8:Reaction not registred");
        }
        const textnode = document.createTextNode(String(GetReaction.value));
        const ReactionElement = document.createElement("octreaction");
        ReactionElement.appendChild(textnode);
        ReactionElement.setAttribute("reaction", name);
        return ReactionElement.outerHTML;
    }
    static GetReaction(name) {
        return this.ReactionsListStore.get(name)?.value;
    }
    /**
     * Update the value of valid Reaction
     *
     * @param name Name of Reaction
     * @param value  New Value to reaction
     */
    static update(name, value) {
        const ReactionsNode = document.querySelectorAll(("octreaction"));
        const Reaction = this.ReactionsListStore.get(name);
        console.log(Reaction?.value);
        if (Reaction) {
            Reaction.value = value;
            ReactionsNode.forEach(d => {
                d.innerText = Reaction?.value;
            });
        }
        else {
            throw new Error("Oct8:Reaction not registred");
        }
    }
}
Oct8Reaction.ReactionsListStore = new Map;
export { Oct8Reaction };
//# sourceMappingURL=Oct8Reaction.js.map