import { DroppableField, Todo } from "./TodoList";
import TodoColumn from "./TodoColumn";

const DROPPABLE_FIELDS: DroppableField[] = [
  { fieldName: "todo", droppableId: "todo" },
  { fieldName: "inProgress", droppableId: "inProgress" },
  { fieldName: "done", droppableId: "done" },
];

type TodoColumnsProps = {
  todos: Todo[];
};
const TodoColumns: React.FC<TodoColumnsProps> = ({ todos }) => (
  <div style={{ display: "flex" }}>
    {DROPPABLE_FIELDS.map((field) => (
      <TodoColumn key={field.droppableId} field={field} todos={todos} />
    ))}
  </div>
);

export default TodoColumns;
