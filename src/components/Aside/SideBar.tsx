import AsideButton from "../Board/AsideButton"
import CreateBoard from "../Board/CreateBoard"
import NewBoardButton from "../Board/NewBoardButton"
import { useState } from "react"
import useBoards from "../../hooks/useBoards"
import { BoardsName } from "../../types/storeInterface"

const SideBar = () => {
 
  const [boards, setBoards] = useState<BoardsName[]>([]);
  useBoards(setBoards)
  
  const [newBoard, setNewBoard] = useState(false)
  console.log(boards)
return (
  <aside className="bg-slate-950 w-52 h-full overflow-y-scroll">
        <section className="p-4 flex justify-between">
          <h3 className="text-2xl font-bold px-4">Boards</h3>
          <NewBoardButton setNewBoard = {setNewBoard}/>
        </section>
         {newBoard && <CreateBoard setNewBoard = {setNewBoard} setBoards={setBoards}/>}
        <section>
          <ul className="flex flex-col py-4 items-center justify-center">
            {boards.map((board) => (
              <AsideButton boardName={board.nameBoard} _id={board._id} key={board._id}></AsideButton>
            ))}
          </ul>
        </section>
      </aside>
)

}

export default SideBar