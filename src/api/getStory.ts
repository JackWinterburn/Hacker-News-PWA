import axios from "axios";

const getStory = async (
  id: string,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => {
      setState(res.data);
      return new Promise((res) => res);
    });
};

export default getStory;
