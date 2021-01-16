import axios from "axios";
import { HackerNewsStory } from "../types";

const getStory = async (storyUrls: string[], setState: any) => {
    axios.all([
        storyUrls.forEach((url) => {
            axios.get(url).then((res) => {
                setState((prevState: any) => prevState.concat([res.data]));
            });
        }),
    ]);
};

export default getStory;
