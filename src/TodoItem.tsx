import { Draggable } from "react-beautiful-dnd";
import { Todo } from "./TodoList";

type TodoItemProps = {
  todo: Todo;
  index: number;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => (
  <Draggable draggableId={todo.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          border: "1px solid black",
          margin: "3px",
          padding: "5px",
          background: "white",
          borderRadius: "3px",
          ...provided.draggableProps.style,
        }}
      >
        <h4>{todo.title}</h4>
      </div>
    )}
  </Draggable>
);

export default TodoItem;
