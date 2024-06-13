import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { API_URL } from "../utils/constants";

const KanbanBoard = () => {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(API_URL);
    const jsonVal = await data.json();
    
    setCompleted(jsonVal.filter((task) => task.completed));
    setIncomplete(jsonVal.filter((task) => !task.completed));
  };
  const handleDragEnd = (res) => {
    const { destination, source, draggableId } = res;
    if (source.droppableId == destination.droppableId) return;

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    const task = findItemById(draggableId, [...incomplete, ...completed]);
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }
  
  return completed.length === 0 || incomplete.length === 0 ? (
    <h3>Loading....</h3>
  ): (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h3 className="text-center text-lg sm:text-xl mb-4">Jira Progress Board</h3>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start  space-y-4 sm:space-y-0 sm:space-x-4 ">
        <Column title={"TODO"} tasks={incomplete} id={"1"} />
        <Column title={"DONE"} tasks={completed} id={"2"} />
        <Column title={"IN PROGRESS"} tasks={[]} id={"3"} />
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
