import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

export type TodoStatus = "todo" | "inProgress" | "done";

export type DroppableField = {
  fieldName: TodoStatus;
  droppableId: TodoStatus;
};

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
};

const DROPPABLE_FIELDS: DroppableField[] = [
  { fieldName: "todo", droppableId: "todo" },
  { fieldName: "inProgress", droppableId: "inProgress" },
  { fieldName: "done", droppableId: "done" },
];

const INITIAL_TODOS: Todo[] = [
  { id: "1", title: "공부", status: "todo" },
  { id: "2", title: "헬스", status: "todo" },
  { id: "3", title: "독서", status: "inProgress" },
  { id: "4", title: "산책", status: "inProgress" },
  { id: "5", title: "요리", status: "done" },
];

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const newStatus = destination.droppableId as TodoStatus;

    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === draggableId ? { ...todo, status: newStatus } : todo)));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoColumns todos={todos} />
      </DragDropContext>
    </div>
  );
};

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

export default TodoList;
