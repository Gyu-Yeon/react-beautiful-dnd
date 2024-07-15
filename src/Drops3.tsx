import { Droppable } from "react-beautiful-dnd";
import { Todos } from "./TodoList";
import Drag from "./Drag";

type Drop3Props = {
  list: Todos[];
};

export default function Drop3(props: Drop3Props) {
  const { list } = props;
  console.log(list);
  return (
    <div style={{ marginRight: "30px" }}>
      <Droppable droppableId="TODO3" type="TODO">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: "300px", height: "700px", background: snapshot.isDraggingOver ? "lightblue" : "lightgrey", textAlign: "center" }}>
            <h2>DONE</h2>
            {list.map((l, i) => {
              return l.completed ? <Drag l={l} index={i} key={l.id} /> : null;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
