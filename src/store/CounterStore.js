// counterStore.js
import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;
  history = [];

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
    this.addToHistory("Increment");
  }

  decrement() {
    this.count -= 1;
    this.addToHistory("Decrement");
  }

  reset() {
    this.count = 0;
    this.history = [];
  }

  addToHistory(action) {
    this.history.push({
      action,
      value: this.count,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  get doubleCount() {
    return this.count * 2;
  }

  get lastAction() {
    return this.history.length > 0
      ? this.history[this.history.length - 1]
      : null;
  }
}

const counterStore = new CounterStore();
export default counterStore;
