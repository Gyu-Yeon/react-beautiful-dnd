import { Droppable } from "react-beautiful-dnd";
import { DroppableField, Todo } from "./TodoList";
import TodoItem from "./TodoItem";
type TodoColumnProps = {
  field: DroppableField;
  todos: Todo[];
};

const TodoColumn: React.FC<TodoColumnProps> = ({ field, todos }) => (
  <div style={{ marginRight: "30px" }}>
    <Droppable droppableId={field.droppableId} type="TODO">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            width: "300px",
            height: "700px",
            background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
            textAlign: "center",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h2>{field.fieldName}</h2>
          {todos
            .filter((todo) => todo.status === field.droppableId)
            .map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default TodoColumn;
