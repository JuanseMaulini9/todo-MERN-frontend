import axios from "../services/axiosInstance";
import { setBoards } from "../store/boardsSlice";
import { RootState } from "../store/store";

import { useAppDispatch, useAppSelector } from "../store/hooks";

const useBoardsInfo = () => {
  const boards = useAppSelector((state: RootState) => state.boards);
  const dispatch = useAppDispatch();

  const fetchingBoards = async () => {
    try {
      const res = await axios.get("board/");
      if (res.status === 200) {
        const data = res.data;
        console.log(data)
        dispatch(setBoards(data));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return { boards, fetchingBoards };
};

export default useBoardsInfo;
