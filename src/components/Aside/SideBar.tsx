import AsideButton from "../Board/AsideButton"
import CreateBoard from "../Board/CreateBoard"
import NewBoardButton from "../Board/NewBoardButton"
import { useState } from "react"
import useBoards from "../../hooks/useBoards"

const SideBar = () => {
  
  const {boards} = useBoards()
  
  const [newBoard, setNewBoard] = useState(false)

return (
  <aside className="bg-slate-950 w-52 h-full">
        <section className="p-4 flex justify-between">
          <h3 className="text-2xl font-bold px-4">Boards</h3>
          <NewBoardButton setNewBoard = {setNewBoard}/>
        </section>
         {newBoard && <CreateBoard setNewBoard = {setNewBoard}/>}
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