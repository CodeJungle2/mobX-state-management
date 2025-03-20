import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../store/CounterStore";

const CounterHistory = observer(() => {
  return (
    <div>
      <h2>Action History</h2>
      <ul>
        {counterStore.history.map((entry, index) => (
          <li key={index}>
            {entry.timestamp} - {entry.action}: {entry.value}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CounterHistory;
