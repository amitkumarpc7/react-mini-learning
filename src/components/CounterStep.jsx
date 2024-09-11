import React, { useRef, useState } from "react";
import "../components/CounterStep.css";

const CounterStep = () => {
  const [count, setCount] = useState(0);
  const step = useRef(1);
  const setStep = (count) => {
    step.current = count;
  };
  const increment = () => {
    setCount((state) => state + step.current);
  };
  const decrement = () => {
    if (count === 0) {
      alert("COunter cant go below");
      //   setCount(0);
      return;
    }
    setCount((state) => state - step.current);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="main">
      <h1>Step Counter</h1>
      <h2>{count}</h2>
      <section className="mid">
        <button onClick={decrement} className="btn">
          -
        </button>
        <br />
        <button onClick={increment} className="btn">
          +
        </button>
        <br />
      </section>
      <section className="mid">
        <label htmlFor="step">Increment/Decrement</label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) => setStep(e.target.valueAsNumber)}
          title="step value"
          style={{ width: "60px", marginLeft: "30px", marginBottom: "10px" }}
        ></input>
      </section>
      <section>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </section>
    </div>
  );
};

export default CounterStep;
