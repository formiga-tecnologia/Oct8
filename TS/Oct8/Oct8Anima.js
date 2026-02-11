class Oct8Anima {
    static async playAnimation(el, animations, options = {}) {
        if (!el || animations.length === 0)
            return;
        this.activeAnimations.set(el, true);
        for (const animation of animations) {
            if (!this.activeAnimations.get(el))
                break;
            await this.runSingle(el, animation, options.removeAfter ?? true);
            if (options.loop) {
                animations.push(animation);
            }
        }
        this.activeAnimations.delete(el);
    }
    static runSingle(el, animationClass, removeAfter) {
        return new Promise(resolve => {
            const handleEnd = () => {
                if (removeAfter) {
                    el.classList.remove(animationClass);
                }
                el.removeEventListener("animationend", handleEnd);
                resolve();
            };
            el.addEventListener("animationend", handleEnd);
            el.classList.add(animationClass);
        });
    }
    static stop(el) {
        this.activeAnimations.set(el, false);
    }
}
Oct8Anima.activeAnimations = new WeakMap();
export { Oct8Anima };
//# sourceMappingURL=Oct8Anima.js.map