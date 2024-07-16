import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Drop from "./Drop";
import Drop2 from "./Drop2";
import Drop3 from "./Drops3";

export type Todos = {
  id: string;
  title: string;
  completed: string;
};

const todos: Todos[] = [
  { id: "1", title: "공부", completed: "todo" },
  { id: "2", title: "헬스", completed: "todo" },
  { id: "3", title: "독서", completed: "inProgress" },
  { id: "4", title: "산책", completed: "inProgress" },
  { id: "5", title: "요리", completed: "done" },
];

export default function TodoList() {
  const [list, setList] = useState<Todos[]>(todos);

  const onDragEnd = (result: DropResult) => {
    const { destination } = result;
    if (!destination) return;
    if (destination?.droppableId === "TODO1") {
      const findItem = result.draggableId;
      const cloneData: Todos[] = JSON.parse(JSON.stringify(list));
      const newData = cloneData.map((data) => {
        if (data.title === findItem) {
          const filteredData = { ...data, completed: "todo" };
          return filteredData;
        } else return data;
      });
      setList(newData);
    } else if (destination?.droppableId === "TODO2") {
      const findItem = result.draggableId;
      const cloneData: Todos[] = JSON.parse(JSON.stringify(list));
      const newData = cloneData.map((data) => {
        if (data.title === findItem) {
          const filteredData = { ...data, completed: "inProgress" };
          return filteredData;
        } else return data;
      });
      setList(newData);
    } else if (destination?.droppableId === "TODO3") {
      const findItem = result.draggableId;
      const cloneData: Todos[] = JSON.parse(JSON.stringify(list));
      const newData = cloneData.map((data) => {
        if (data.title === findItem) {
          const filteredData = { ...data, completed: "done" };
          return filteredData;
        } else return data;
      });
      setList(newData);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Drop list={list} />
        <Drop2 list={list} />
        <Drop3 list={list} />
      </DragDropContext>
    </div>
  );
}
