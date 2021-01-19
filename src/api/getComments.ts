import axios from "axios";

const getComments = async (kids: string[], setState: any) => {
  axios.all([
    kids.forEach((kid) => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`)
        .then((res) => {
          setState(
            (prevState: any) => (prevState = prevState.concat(res.data.text))
          );
        });
    }),
  ]);
};

export default getComments;
