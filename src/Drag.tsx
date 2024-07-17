import { Draggable } from "react-beautiful-dnd";
import { Todo } from "./TodoList";

type DragProps = {
  todos: Todo[];
};

export default function Drag(props: DragProps) {
  const { todos } = props;
  console.log(todos);
  return (
    <>
      {todos.map((todo, i) => {
        <Draggable draggableId={todo.title} index={i} key={todo.id}>
          {(provided) => {
            return (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div style={{ border: "1px, black, solid", margin: "3px", padding: "5px", background: "white" }} ref={provided.innerRef} {...provided.dragHandleProps}>
                  <h4>{todo.title}</h4>
                </div>
              </div>
            );
          }}
        </Draggable>;
      })}
    </>
  );
}
