import axios from "../services/axiosInstance";
import { useEffect } from "react";
import {BoardsName} from '../types/storeInterface'

const useBoards = (setBoards: React.Dispatch<React.SetStateAction<BoardsName[]>>) => {
  
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await axios.get("board/boardsName");
        if (res.status === 200) {
          setBoards(res.data.boards);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };
    fetchBoards();
  }, [setBoards]);

};

export default useBoards;
