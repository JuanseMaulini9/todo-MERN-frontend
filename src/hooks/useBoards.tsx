import axios from "../services/axiosInstance";
import { useState, useEffect } from "react";

interface BoardsName {
  _id: string;
  nameBoard: string;
}

const useBoards = () => {
  const [boards, setBoards] = useState<BoardsName[]>([]);

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
  }, []);

  return { boards, setBoards };
};

export default useBoards;
