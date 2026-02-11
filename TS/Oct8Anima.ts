type AnimationOptions = {
  removeAfter?: boolean
  loop?: boolean
}

class Oct8Anima {
  private static activeAnimations = new WeakMap<HTMLElement, boolean>()

  static async playAnimation(
    el: HTMLElement,
    animations: string[],
    options: AnimationOptions = {}
  ): Promise<void> {
    if (!el || animations.length === 0) return

    this.activeAnimations.set(el, true)

    for (const animation of animations) {
      if (!this.activeAnimations.get(el)) break

      await this.runSingle(el, animation, options.removeAfter ?? true)

      if (options.loop) {
        animations.push(animation)
      }
    }

    this.activeAnimations.delete(el)
  }

  private static runSingle(
    el: HTMLElement,
    animationClass: string,
    removeAfter: boolean
  ): Promise<void> {
    return new Promise(resolve => {
      const handleEnd = () => {
        if (removeAfter) {
          el.classList.remove(animationClass)
        }

        el.removeEventListener("animationend", handleEnd)
        resolve()
      }

      el.addEventListener("animationend", handleEnd)
      el.classList.add(animationClass)
    })
  }

  static stop(el: HTMLElement) {
    this.activeAnimations.set(el, false)
  }
}

export { Oct8Anima }
