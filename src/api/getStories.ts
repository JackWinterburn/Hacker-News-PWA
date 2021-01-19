import axios from "axios";

const getStories = async (storyUrls: string[], setState: any) => {
  axios.all([
    storyUrls.forEach((url) => {
      axios.get(url).then((res) => {
        setState((prevState: any) => prevState.concat([res.data]));
      });
    }),
  ]);
};

export default getStories;
