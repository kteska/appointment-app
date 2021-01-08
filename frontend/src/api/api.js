import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3000"
});


export const addQuestion = async (params) => {
  let result = false;
  try {
    result = await http.post("/question/add", { title: params.title, username: params.username, category: params.category });
    result = result.data;
  } catch (error) {
    result = error.response.data;
  }
  return result;
};

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

export const addAnswer = async (params) => {
  let result = false;
  try {
    result = await http.post("/answer/add", { questionId: params.questionId, givenBy: params.givenBy, answer: params.answer });
    result = result.data;
  } catch (error) {
    result = error.response.data;
  }
  return result;
};

export const getAllAnswers = async (params) => {
  let result = false;
  try {
    result = await http.post("/answer/getAll", {...params});
    result = result.data;
  } catch (error) {
    result = error.response.data;
  }
  return result;
};