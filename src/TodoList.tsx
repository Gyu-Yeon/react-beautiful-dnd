import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import TodoColumns from "./TodoColumns";

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

export default TodoList;
