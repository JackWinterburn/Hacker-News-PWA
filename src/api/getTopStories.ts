import axios from "axios";
import getStory from "./getStory";

const getTopStories = async (setState: any) => {
  // Grab the array of top 500 story IDs from HN API
  let res = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const data = res.data.slice(0, 20);

  // Convert the IDs to valid URLs
  let storyURLs = data.map(
    (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  getStory(storyURLs, setState);
};

export default getTopStories;
