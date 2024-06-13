import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, id }) => {
  return (
    <div className="bg-white  overflow-y-scroll rounded-lg w-72 sm:w-80 h-96 sm:h-auto border border-solid border-black p-2 sm:p-4 md:p-6 lg:p-8 flex-shrink-0">
      <h1 className="p-2 sm:p-4  top-0 bg-lime-600 text-center  sm:text-xl ">{title}</h1>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-2 sm:p-4 md:p-6 lg:p-8 flex-grow rounded-lg shadow-2xl min-h-24 sm:min-h-32 "
            ref={provided.innerRef}
            {...provided.droppableProps}
            isdraggingover={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => <Task key={index} task={task} index={index} />)}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
