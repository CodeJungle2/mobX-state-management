// App.jsx
import React from "react";
import CounterDisplay from "./pages/CounterDisplay";
import CounterControls from "./pages/CounterControls";
import CounterHistory from "./pages/CounterHistory";
import ThemeToggle from "./pages/ThemeToggle";
import { observer } from "mobx-react-lite";
import themeStore from "./store/ThemeStore";
import Todo from "./pages/Todo/Todo";

const App = observer(() => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        background: themeStore.theme === "dark" ? "#333" : "#fff",
        color: themeStore.theme === "dark" ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <ThemeToggle />
      <Todo />
      <CounterDisplay />
      <CounterControls />
      <CounterHistory />
    </div>
  );
});
export default App;
