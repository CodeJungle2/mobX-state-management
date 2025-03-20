// themeStore.js
import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }
}

const themeStore = new ThemeStore();
export default themeStore;
