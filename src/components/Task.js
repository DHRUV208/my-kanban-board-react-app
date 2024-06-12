import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {
      (provide, snapshot) => (
        <div
          className="rounded-lg p-2 bg-black mb-2 min-h-20 ml-2 mr-2 cursor-pointer flex justify-between flex-col "
          {...provide.draggableProps}
          {...provide.dragHandleProps}
          ref={provide.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="flex justify-start p-2">
            <span>
              <small>#{task.id}</small>
            </span>
          </div>
          <div className="flex justify-center p-2 text-white">
            <div className="text-white">{task.title}</div>
          </div>
          {provide.placeholder}
        </div>
  )
  }
    </Draggable>
  );
};

export default Task;
