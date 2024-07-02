import Card from "./Card";

interface StateBoardProps {
  stateBoard: string;
}

const StateBoard = ({ stateBoard }: StateBoardProps) => {
  return (
    <div className="bg-slate-100 w-5/6 h-5/6 pt-2 rounded relative">
      <h3 className="text-black text-center font-bold text-lg">{stateBoard}</h3>
      <div>
        <Card></Card>
      </div>
      <button className="text-black absolute w-full pt-2 pb-4 bottom-0 text-center rounded hover:bg-slate-200 cursor-pointer">Create Card</button>
    </div>
  );
};

export default StateBoard;
