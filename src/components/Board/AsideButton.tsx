import { setCurrentBoard } from "../../store/currentBoardSlice";
import { useAppDispatch } from "../../store/hooks";

interface AsideButtonProps {
  boardName: string;
  _id: string;
}

const AsideButton = ({ _id, boardName }: AsideButtonProps) => {
  const dispatch = useAppDispatch();

  const handleCurrentBoard = () => {
    dispatch(setCurrentBoard(_id));
  };

  return (
    <>
      <li
        className="w-full h-full p-4 flex justify-between hover:bg-slate-900 cursor-pointer"
        onClick={handleCurrentBoard}
      >
        {boardName}
        <button className="h-8 px-4 font-bold rounded hover:bg-slate-800 ">
          x
        </button>
      </li>
    </>
  );
};
export default AsideButton;
