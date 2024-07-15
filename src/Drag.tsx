import { Draggable } from "react-beautiful-dnd";
import { Todos } from "./TodoList";

type DragProps = {
  l: Todos;
  index: number;
};

export default function Drag(props: DragProps) {
  const { l, index } = props;

  return (
    <>
      <Draggable draggableId={l.title} index={index} key={l.id}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div style={{ border: "1px, black, solid", margin: "3px", padding: "5px", background: "white" }} ref={provided.innerRef} {...provided.dragHandleProps}>
                <h4>{l.title}</h4>
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
}
