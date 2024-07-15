import { Dispatch } from "react";
import { useState } from "react";
import useNewBoard from "../../hooks/useNewBoard";

interface Props {
  setNewBoard: Dispatch<boolean>;
}

const CreateBoard = ({ setNewBoard }: Props) => {
  const [boardName, setBoardName] = useState<string>("");
  const { newBoardFetch } = useNewBoard(boardName);
  const handleBoardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };

  const saveNewBoard = async () => {
    await newBoardFetch();
    setNewBoard(false);
  };
  const closeNewBoard = () => {
    setNewBoard(false);
  };

  return (
    <div className="mx-1">
      <input
        type="text"
        className="w-full bg-main-gray rounded"
        onChange={handleBoardName}
      />
      <section className="flex gap-2 mt-1">
        <button
          onClick={saveNewBoard}
          className="bg-blue-700 w-20 h-8 font-semibold text-white rounded hover:bg-blue-500"
        >
          Save
        </button>
        <button
          onClick={closeNewBoard}
          className="w-20 h-8 font-semibold text-text-main rounded hover:bg-secondary-gray"
        >
          X
        </button>
      </section>
    </div>
  );
};

export default CreateBoard;
