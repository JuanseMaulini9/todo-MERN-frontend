import Board from "../components/Board/Board";
import AsideButton from "../components/Board/AsideButton";
import { useAppSelector } from "../store/hooks";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import useBoardsInfo from "../hooks/useBoardsInfo";
import NewBoardButton from "../components/Board/NewBoardButton";
import CreateBoard from "../components/Board/CreateBoard";

const BoardPage = () => {
  const modalView = useAppSelector((state) => state.viewModal);

  const { boards, fetchingBoards } = useBoardsInfo();

  useState(() => {
    fetchingBoards();
  });

  const [newBoard, setNewBoard] = useState(false)

  console.log(boards);

  return (
    <div className="flex h-screen pt-10 overflow-hidden">
      <aside className="bg-slate-950 w-52 h-full">
        <section className="p-4 flex justify-between">
          <h3 className="text-2xl font-bold px-4">Boards</h3>
          <NewBoardButton setNewBoard = {setNewBoard}/>
        </section>
         {newBoard && <CreateBoard setNewBoard = {setNewBoard}/>}
        <section>
          <ul className="flex flex-col py-4 items-center justify-center">
            {boards.userBoards.map((board) => (
              <AsideButton boardName={board.nameBoard} key={board._id}></AsideButton>
            ))}
          </ul>
        </section>
      </aside>
      <section className="flex-1 overflow-auto">
        <Board></Board>
      </section>
      {modalView ? <Modal></Modal> : ""}
    </div>
  );
};

export default BoardPage;
