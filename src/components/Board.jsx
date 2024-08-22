import React from "react";

const Board = ({ task, index, taskList, setTaskList }) => {
  const deleteTask = () => {
    // let delIndex = taskList.indexOf(task);
    // taskList.splice(delIndex, 1);
    const newTaskList=taskList.filter((task,i)=>i!==index);
    setTaskList(newTaskList);
  };
  return (
    <div>
      <p>{task}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Board;
