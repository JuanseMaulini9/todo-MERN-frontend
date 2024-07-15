import { Dispatch } from "react";
interface Props {
  setNewBoard: Dispatch<boolean>;
}

const NewBoardButton = ({ setNewBoard }: Props) => {
  const handleBoard = () => {
    setNewBoard(true);
  };

  return (
    <button
      className="h-8 px-4 font-bold rounded hover:bg-slate-800 text-center"
      onClick={handleBoard}
    >
      +
    </button>
  );
};

export default NewBoardButton;
