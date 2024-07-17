import Drag from "./Drag";
import { Droppable } from "react-beautiful-dnd";
import { DroppableFields, Todo } from "./TodoList";

type DropProps = {
  todos: Todo[];
};

const droppableField: DroppableFields[] = [
  { fieldName: "todo", droppableId: "todo" },
  { fieldName: "inProgress", droppableId: "inProgress" },
  { fieldName: "done", droppableId: "done" },
];

export default function Drop(props: DropProps) {
  const { todos } = props;

  return (
    <div style={{ display: "flex" }}>
      {droppableField.map((field) => {
        return (
          <div style={{ marginRight: "30px" }}>
            <Droppable droppableId={field.droppableId} type="TODO" key={field.droppableId}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: "300px", height: "700px", background: snapshot.isDraggingOver ? "lightblue" : "lightgrey", textAlign: "center" }}>
                  <h2>{field.fieldName}</h2>
                  <Drag todos={todos} field={field} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
      })}
    </div>
  );
}
