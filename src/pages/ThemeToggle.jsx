import React from "react";
import { observer } from "mobx-react-lite";
import themeStore from "../store/ThemeStore";

const ThemeToggle = observer(() => {
  return (
    <div>
      <h2>Current Theme: {themeStore.theme}</h2>
      <button onClick={() => themeStore.toggleTheme()}>Toggle Theme</button>
    </div>
  );
});

export default ThemeToggle;
