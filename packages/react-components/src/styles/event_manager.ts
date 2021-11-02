import type { ThemeOptionsType } from './types';

export enum Event {
  Use,
}

type OnUseCallback = (options: ThemeOptionsType) => void;

type Callback =
  | OnUseCallback;

export interface EventManager {
  list: Map<Event, Callback[]>;
  on(event: Event.Use, callback: OnUseCallback): EventManager;
  off(event: Event, callback?: Callback): EventManager;
  emit(event: Event.Use, options: ThemeOptionsType): void;
}

export const eventManager: EventManager = {
  list: new Map(),

  on(event: Event, callback: Callback) {
    if (!this.list.has(event)) {
      this.list.set(event, []);
    }

    this.list.get(event)!.push(callback);

    return this;
  },

  off(event, callback) {
    if (callback) {
      const cb = this.list.get(event)!.filter((fn: Callback) => fn !== callback);

      this.list.set(event, cb);

      return this;
    }

    this.list.delete(event);

    return this;
  },

  emit(event: Event, ...args: any[]) {
    if (this.list.has(event)) {
      this.list.get(event)!.forEach((callback: Callback) => {
        setTimeout(() => {
          // @ts-ignore
          callback(...args);
        }, 0);
      });
    }
  },
};
