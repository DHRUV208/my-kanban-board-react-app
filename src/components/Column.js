import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = ({ title, tasks, id }) => {
  return (
    <div className="bg-slate-700 rounded-lg w-80 h-96 border border-gray-500">
      <h3 className="sticky p-2 bg-orange-800 text-center ">{title}</h3>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className="p-1 bg-slate-200 flex-grow min-h-24 "
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => {
              <Task key={index} task={task} index={index} />;
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
