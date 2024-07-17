import Card from "./Card";
import useMoveTask from "../../hooks/useMoveTask";

import { useAppSelector } from "../../store/hooks";

interface StateBoardProps {
  stateBoard: string;
}

const StateBoard = ({ stateBoard }: StateBoardProps) => {
  const board = useAppSelector((state) => state.board); 
  const { moveTask } = useMoveTask(stateBoard);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");

    const card = board.currentBoard?.tasks.find((card) => card._id === id);
    if (card) {
      console.log(`entre, id: ${id}`);
      if(board.currentBoard?.tasks)
      moveTask(id, board.currentBoard?.tasks);
      console.log(board);
    }
  };

  return (
    <div
      className={`bg-slate-100 w-5/6 h-5/6 pt-2 rounded relative`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h3 className="text-black text-center font-bold text-lg">{stateBoard}</h3>
      {board.currentBoard?.tasks.map((card) =>
        card.stateValue.toLocaleLowerCase() ===
        stateBoard.toLocaleLowerCase() ? (
          <Card
            _id={card._id}
            title={card.title}
            description={card.description}
            expires={card.expires}
            taskList={card.taskList}
            stateValue={card.stateValue}
            boardId={card.boardId}
            key={card._id}
          ></Card>
        ) : (
          ""
        )
      )}

      <button className="text-black absolute w-full pt-2 pb-4 bottom-0 text-center rounded hover:bg-slate-200 cursor-pointer">
        Create Card
      </button>
    </div>
  );
};

export default StateBoard;
