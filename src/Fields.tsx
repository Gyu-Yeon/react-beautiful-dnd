import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";

export default function Fields() {
  const fieldsList = ["Todo", "Doing", "Done"];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  return (
    <>
      {fieldsList.map((f, i) => {
        <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              key={i}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                width: "200px",
                height: "600px",
              }}
            >
              <h2>{f}</h2>
            </div>
          )}
        </Droppable>;
      })}
    </>
  );
}
