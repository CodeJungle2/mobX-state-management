import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../store/CounterStore";

const CounterControls = observer(() => {
  return (
    <div>
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
      <button
        onClick={() => counterStore.reset()}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
});

export default CounterControls;
