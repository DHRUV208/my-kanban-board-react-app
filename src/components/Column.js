import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, id }) => {
  // console.log("tasks 123", tasks);
  return (
    <div className="bg-slate-700 rounded-lg w-80 h-96 border border-gray-500">
      <h1 className="sticky p-2 bg-orange-800  text-center ">{title}</h1>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-1 bg-green-400 flex-grow rounded-xl shadow-lg min-h-24 "
            ref={provided.innerRef}
            {...provided.droppableProps}
            isdraggingover={snapshot.isDraggingOver}
          >
            {/* {console.log("tasks before map", tasks)} */}
            {tasks.map((task, index) => {
              // console.log("task in map", task);
              <Task key={index} tas={task} index={index} />;
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
