import axios from "../services/axiosInstance";
import { BoardsName } from "../types/storeInterface";

const useNewBoard = (nameBoard: string, setBoards:React.Dispatch<React.SetStateAction<BoardsName[]>>) => {

  const newBoardFetch = async () => {
    try {
      const res = await axios.post("/board", { nameBoard: nameBoard });
      if (res.status === 200) {
        const newBoard: BoardsName = res.data;
        setBoards(prevState => ([...prevState, newBoard]))
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { newBoardFetch };
};

// todo: arreglar este
export default useNewBoard;
