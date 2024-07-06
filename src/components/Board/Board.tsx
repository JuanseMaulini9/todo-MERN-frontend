import { useState } from "react";
import StateBoard from "./StateBoard";

const Board = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return (
    <div className="w-full h-full bg-slate-500 flex justify-around gap-16 px-8 pt-8">
      <StateBoard
        stateBoard="To do"
        isDragging={isDragging}
        handleDragging={handleDragging}
      ></StateBoard>
      <StateBoard
        stateBoard="In Process"
        isDragging={isDragging}
        handleDragging={handleDragging}
      ></StateBoard>
      <StateBoard
        stateBoard="Done"
        isDragging={isDragging}
        handleDragging={handleDragging}
      ></StateBoard>
    </div>
  );
};

export default Board;
