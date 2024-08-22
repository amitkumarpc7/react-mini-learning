import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
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

export default App;
