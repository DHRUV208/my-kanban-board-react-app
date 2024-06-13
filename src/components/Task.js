import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  // console.log("task 987", task.title);
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {
      (provided, snapshot) => (
        <div
          className="rounded-lg p-2 sm:p-4 bg-teal-600 shadow-lg decoration-black mb-2 min-h-20 ml-2 mr-2 cursor-pointer flex justify-between flex-col "
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="flex justify-start p-1 sm:p-2">
            <span>
              <small className="text-xs sm:text-sm">#{task.id}</small>
            </span>
          </div>
          <div className="flex justify-center p-1 sm:p-2">
            <div className="text-sm sm:text-base">{task.title}</div>
          </div>
          {provided.placeholder}
        </div>
  )
  }
    </Draggable>
  );
};

export default Task;
