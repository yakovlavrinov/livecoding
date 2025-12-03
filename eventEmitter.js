class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }

    this.events.get(eventName).add(listener)

    return this
  }

  off(eventName, listener) {
    const listeners = this.events.get(eventName)

    if (listeners) {
      listeners.delete(listener)

      if (listeners.size === 0) {
        this.events.delete(eventName)
      }
    }

    return this
  }

  emit(eventName, ...arg) {
    const listeners = this.events.get(eventName)

    if (listeners) {
      for (let listener of listeners) {
        try {
          listener(arg)
        } catch (error) {
          throw error
        }
      }
    }
    return true
  }

  once(eventName, listener) {
    const wrapperOnce = (...args) => {
      this.off(eventName, wrapperOnce)
      listener(...args)
    }

    return this.on(eventName, wrapperOnce)
  }

  hasListener(eventName, listener) {
    const listeners = this.events.get(eventName)

    if (listeners) {
      return listeners.has(listener)
    }
  }
}

// TODO доработать once чтобы off мог очистить и hasListener мог найти для этого понадобится WeakMap
// TODO преимущества Map над объектами Set над массивами тоже не помешает
