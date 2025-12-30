import { createContext, useContext, useState } from "react";
import { createBoard, getBoard } from "../api/boardApi";

const BoardContext = createContext();

export const useBoard = () => {
  return useContext(BoardContext);
};

export const BoardProvider = ({ children }) => {
  const [boardData, setBoardData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (page = 0, size = 2) => {
    const data = await getBoard(page, size);
    setBoardData(data.content);
    setTotalCount(data.totalElements);
    console.log(data);
  };

  const addBoard = async (boardFormData) => {
    await createBoard(boardFormData);
    await fetchData(0, 2); //등록후 새로고침
  };

  const value = {
    boardData,
    totalCount,
    fetchData,
    addBoard,
  };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
