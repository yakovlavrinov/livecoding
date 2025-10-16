class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName).add(listener);
    return this;
  }

  off(eventName, listener) {
    const listeners = this.events.get(eventName);
    if (listeners) {
      listeners.delete(listener);
      if (listeners.size === 0) {
        this.events.delete(eventName);
      }
    }
    return this;
  }

  emit(eventName, ...args) {
    const listeners = this.events.get(eventName);
    if (listeners && listeners.size > 0) {
      [...listeners].forEach((listener) => {
        try {
          listener.apply(this, args);
        } catch (error) {
          console.error(`Error in event listener for ${eventName}:`, error);
        }
      });
      return true;
    }
    return false;
  }

  once(eventName, listener) {
    const onceWrapper = (...args) => {
      this.off(eventName, onceWrapper);
      listener.apply(this, args);
    };
    onceWrapper.listener = listener;
    return this.on(eventName, onceWrapper);
  }

  listeners(eventName) {
    const listeners = this.events.get(eventName);
    return listeners ? [...listeners] : [];
  }

  listenerCount(eventName) {
    const listeners = this.events.get(eventName);
    return listeners ? listeners.size : 0;
  }

  removeAllListeners(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
    return this;
  }

  eventNames() {
    return [...this.events.keys()];
  }

  hasListener(eventName, listener) {
    const listeners = this.events.get(eventName);
    return listeners ? listeners.has(listener) : false;
  }
}
