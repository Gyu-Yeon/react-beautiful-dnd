import { Droppable } from "react-beautiful-dnd";

export default function List() {
  return (
    <Droppable droppableId="droppable-1" type="PERSON">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? "blue" : "grey" }}>
          I am a droppable!
        </div>
      )}
    </Droppable>
  );
}
