import Drag from "./Drag";
import { Droppable } from "react-beautiful-dnd";
import { Todos } from "./TodoList";

type DropProps = {
  list: Todos[];
};

export default function Drop(props: DropProps) {
  const { list } = props;
  return (
    <div style={{ marginRight: "30px" }}>
      <Droppable droppableId="TODO1" type="TODO">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: "300px", height: "700px", background: snapshot.isDraggingOver ? "lightblue" : "lightgrey", textAlign: "center" }}>
            <h2>TODO LIST</h2>
            {list.map((l, i) => {
              return l.completed === "todo" ? <Drag l={l} index={i} key={l.id} /> : null;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
