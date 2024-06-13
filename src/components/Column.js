import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, id }) => {
  // console.log("tasks 123", tasks);
  return (
    <div className="bg-white relative overflow-y-scroll rounded-lg w-full sm:w-80 h-96 sm:h-auto border border-solid border-black p-2 sm:p-4 md:p-6 lg:p-8">
      <h1 className="p-2 sm:p-4 md:p-6 lg:p-8 sticky bg-lime-600 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl ">{title}</h1>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-2 sm:p-4 md:p-6 lg:p-8 flex-grow rounded-lg shadow-2xl min-h-24 sm:min-h-32 md:min-h-40 lg:min-h-48 "
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
