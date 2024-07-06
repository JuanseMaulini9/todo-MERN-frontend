import Card from "./Card";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { moveTask } from "../../store/cardsSlice";

interface StateBoardProps {
  stateBoard: string;
}

const StateBoard = ({ stateBoard }: StateBoardProps) => {
  const dispatch = useAppDispatch()
  const taskCards = useAppSelector((state) => state.cards);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) =>{
    e.preventDefault()
  } 

  const onDrop = (e: React.DragEvent<HTMLDivElement>) =>{
    const id = e.dataTransfer.getData('text')

    const card = taskCards.find(card => card.id === id)
    if(card)
    dispatch(moveTask({id, newStateValue: stateBoard.toLocaleLowerCase()}))

  }

  return (
    <div className={`bg-slate-100 w-5/6 h-5/6 pt-2 rounded relative`} onDragOver={onDragOver} onDrop={onDrop}>
      <h3 className="text-black text-center font-bold text-lg">{stateBoard}</h3>
      {taskCards.map((card) =>
        card.stateValue.toLocaleLowerCase() ===
        stateBoard.toLocaleLowerCase() ? (
          <Card
            id={card.id}
            title={card.title}
            description={card.description}
            finalDate={card.expires}
            allTasks={card.total}
            key={card.id}
            progress={card.completedTasks}
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
