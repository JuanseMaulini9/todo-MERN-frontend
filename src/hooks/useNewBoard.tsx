import axios from "../services/axiosInstance";
// import { useAppDispatch } from "../store/hooks";
// import { addBoard } from "../store/boardsSlice";

const useNewBoard = (nameBoard: string) => {
  // const dispatch = useAppDispatch();

  const newBoardFetch = async () => {
    try {
      const res = await axios.post("/board", { nameBoard: nameBoard });
      if (res.status === 200) {
        const newBoard = res.data;
        // dispatch(addBoard(newBoard));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { newBoardFetch };
};

// todo: arreglar este
export default useNewBoard;
