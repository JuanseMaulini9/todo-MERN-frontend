import Card from "./Card";
import { useAppSelector } from "../../store/hooks";

interface StateBoardProps {
  stateBoard: string;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
}

const StateBoard = ({
  stateBoard,
  isDragging,
  handleDragging,
}: StateBoardProps) => {
  const taskCards = useAppSelector((state) => state.cards);
  console.log(taskCards);
  console.log(isDragging);
  return (
    <div className={`bg-slate-100 w-5/6 h-5/6 pt-2 rounded relative`}>
      <h3 className="text-black text-center font-bold text-lg">{stateBoard}</h3>
      {taskCards.map((card) =>
        card.stateValue.toLocaleLowerCase() ===
        stateBoard.toLocaleLowerCase() ? (
          <Card
            title={card.title}
            description={card.description}
            finalDate={card.expires}
            allTasks={card.total}
            key={card.id}
            progress={card.completedTasks}
            handleDragging={handleDragging}
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
