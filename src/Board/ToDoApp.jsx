import { useState } from "react";
import Input from "./Board/Input";
import Board from "./Board/Board";

function ToDoApp() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  console.log(taskList[taskList.length - 1]);
  return (
    <>
      <div>
        <h1>To do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        {taskList.map((task, index) => (
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default ToDoApp;
