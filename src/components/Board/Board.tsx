import StateBoard from "./StateBoard";

const Board = () => {
  return (
    <div className="w-full h-full bg-slate-500 flex justify-around gap-16 px-8 pt-8">
      <StateBoard stateBoard="To do"></StateBoard>
      <StateBoard stateBoard="In Process"></StateBoard>
      <StateBoard stateBoard="Done"></StateBoard>
    </div>
  );
};

export default Board;
