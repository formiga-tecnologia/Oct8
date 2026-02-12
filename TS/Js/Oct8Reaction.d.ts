declare class Oct8Reaction {
    private static ReactionsListStore;
    /**
     * Create New Reaction to the oct8Reactions
     * @param name  Name of reaction
     * @param value  Initial Value
     */
    static create(name: string, value: any): void;
    /**
     * Inject the Reaction on the valid component Oct8
     *
     * @param name Name Of Reaction
     * @returns  <Return: The HTML value node Reaction>
     */
    static inject(name: string): string;
    static GetReaction(name: string): any;
    /**
     * Update the value of valid Reaction
     *
     * @param name Name of Reaction
     * @param value  New Value to reaction
     */
    static update(name: string, value: any): void;
}
export { Oct8Reaction };
//# sourceMappingURL=Oct8Reaction.d.ts.map