import api from "./api";

// axios.get("http://localhost:8080/api/board")
// axios.get("http://localhost:8080/api/boardpage?page=0&size=2")

export const getBoard = async (page, size) => {
  const { data } = await api.get("/boardpage", {
    params: {
      page,
      size,
    },
  });
  return data;
};

export const createBoard = async (boardFormData) => {
  const { data } = await api.post("/board", boardFormData);

  return data;
};
