import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3000"
});

export const getAllQuestions = async () => {
  let result = false;
  try {
    result = await http.get("/question/getAll");
    result = result.data;
  } catch (error) {
    result = error.response.data;
  }
  return result;
};