import React, { useState } from "react";

const Input = ({taskList,setTaskList}) => {
  const [input, setInput] = useState("");

  function addTask(e){
    e.preventDefault();
    console.log(e.target);
    setTaskList([...taskList,input]);
    setInput("");
  }


  return (
    <>

    <div className="flex flex-row justify-center gap-4"></div>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button onClick={addTask}>Add</button>
      </form>
    </>
  );
};

export default Input;
