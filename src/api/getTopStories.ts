import axios from "axios";
import getStories from "./getStories";

const getTopStories = async (setState: any) => {
  // Grab the array of top 500 story IDs from HN API
  let res = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const data = res.data.slice(0, 30);

  // Convert the IDs to valid URLs
  let storyURLs = data.map(
    (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  getStories(storyURLs, setState);
};

export default getTopStories;
