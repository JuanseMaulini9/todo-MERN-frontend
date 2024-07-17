import StateBoard from "./StateBoard";
import NotBoard from "./NotBoard";
import { useAppSelector } from "../../store/hooks";
import useBoardDetail from "../../hooks/useBoardDetail";

const Board = () => {
  
  useBoardDetail()
  const board = useAppSelector(state => state.board)

  return (
    //todo: hagregar el boardHeader
    <>
      {board ? (
        <div className="w-full h-full bg-slate-500 flex justify-around gap-16 px-8 pt-8">
          <StateBoard stateBoard="To do"></StateBoard>
          <StateBoard
            stateBoard="In Process"
            
          ></StateBoard>
          <StateBoard stateBoard="Done" ></StateBoard>
        </div>
      ) : (
        <NotBoard></NotBoard>
      )}
    </>
  );
};

export default Board;
