import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Drop from "./Drop";
import Drop2 from "./Drop2";
import Drop3 from "./Drops3";

export type Todos = {
  id: string;
  title: string;
  completed: boolean;
};

const todos: Todos[] = [
  { id: "1", title: "공부", completed: false },
  { id: "2", title: "헬스", completed: false },
  { id: "3", title: "독서", completed: false },
  { id: "4", title: "산책", completed: false },
  { id: "5", title: "요리", completed: true },
];

export default function TodoList() {
  const [list, setList] = useState<Todos[]>(todos);

  const onDragEnd = (result: DropResult) => {
    console.log(result.destination?.droppableId);
    if (result.destination?.droppableId === "TODO2") {
      console.log(result);
      const findItem = result.draggableId;
      const cloneData: Todos[] = JSON.parse(JSON.stringify(list));
      const newData = cloneData.map((data) => {
        if (data.title === findItem) {
          const filteredData = { ...data, completed: true };
          return filteredData;
        } else return data;
      });
      console.log();
      setList(newData);
    } else if (result.destination?.droppableId === "TODO1") {
      const findItem = result.draggableId;
      const cloneData: Todos[] = JSON.parse(JSON.stringify(list));
      const newData = cloneData.map((data) => {
        if (data.title === findItem) {
          const filteredData = { ...data, completed: false };
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
