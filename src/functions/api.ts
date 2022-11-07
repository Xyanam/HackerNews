import axios from "axios";

export const URL = "https://hacker-news.firebaseio.com/v0/";

export const getNewsId = async () => {
  const response = await axios
    .get("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((result) => result.data)
    .catch((error) => console.log(error));
  return response;
};

export const getNewsById = async (id: number) => {
  const response = await axios
    .get(`${URL}/item/${id}.json`)
    .then((result) => result.data)
    .catch((error) => console.log(error));

  return response;
};
