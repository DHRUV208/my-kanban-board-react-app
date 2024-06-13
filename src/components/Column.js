import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, id }) => {
  // console.log("tasks 123", tasks);
  return (
    <div className="bg-white relative overflow-y-scroll rounded-lg w-80 h-96 border border-solid border-black">
      <h1 className="p-2 sticky bg-lime-600  text-center ">{title}</h1>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-1  flex-grow rounded-lg shadow-2xl min-h-24 "
            ref={provided.innerRef}
            {...provided.droppableProps}
            isdraggingover={snapshot.isDraggingOver}
          >
            {/* {console.log("tasks before map", tasks)} */}
            {tasks.map((task, index) => <Task key={index} task={task} index={index} />)}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
