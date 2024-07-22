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
      className="h-8 w-8 rounded-full p-2 text-center hover:bg-blue-500 bg-blue-700 font-bold"
      onClick={handleBoard}
    >
      +
    </button>
  );
};

export default NewBoardButton;
