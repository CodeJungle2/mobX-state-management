import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../store/CounterStore";

const CounterDisplay = observer(() => {
  return (
    <div>
      <h1>MobX Counter</h1>
      <p>Count: {counterStore.count}</p>
      <p>Double Count: {counterStore.doubleCount}</p>
      {counterStore.lastAction && (
        <p>
          Last Action: {counterStore.lastAction.action} at{" "}
          {counterStore.lastAction.timestamp}
        </p>
      )}
    </div>
  );
});

export default CounterDisplay;
