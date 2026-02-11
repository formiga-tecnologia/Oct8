type AnimationOptions = {
    removeAfter?: boolean;
    loop?: boolean;
};
declare class Oct8Anima {
    private static activeAnimations;
    static playAnimation(el: HTMLElement, animations: string[], options?: AnimationOptions): Promise<void>;
    private static runSingle;
    static stop(el: HTMLElement): void;
}
export { Oct8Anima };
//# sourceMappingURL=Oct8Anima.d.ts.map