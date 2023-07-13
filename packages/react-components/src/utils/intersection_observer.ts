class IntersectionObserverDirective {
  private mapping: Map<Element, Function>;

  private observer?: IntersectionObserver;

  constructor() {
    // As each observable child attaches itself to the parent observer, we need to
    // map Elements to Callbacks so that when an Element's intersection changes,
    // we'll know which callback to invoke. For this, we'll use an ES6 Map.
    this.mapping = new Map();
  }

  // I initialize the intersection observer parent directive.
  public init() {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const entry of entries) {
            const callback = this.mapping.get(entry.target);

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (callback && callback(entry.isIntersecting));
          }
        },
      );
    }

    return this.observer;
  }

  private assertObserver(): void {
    if (!this.observer) {
      throw new Error('You need to initialize the observer before');
    }
  }

  // I add the given Element for intersection observation. When the intersection status
  // changes, the given callback is invoked with the new status.
  public add(element: HTMLElement, callback: Function): void {
    this.assertObserver();

    this.mapping.set(element, callback);
    this.observer.observe(element);
  }

  // I get called once when the host element is being destroyed.
  public destroy(): void {
    this.assertObserver();

    this.mapping.clear();
    this.observer.disconnect();
  }

  // I remove the given Element from intersection observation.
  public remove(element: HTMLElement): void {
    this.assertObserver();

    this.mapping.delete(element);
    this.observer.unobserve(element);
  }
}

export const intersectionObserver = new IntersectionObserverDirective();
