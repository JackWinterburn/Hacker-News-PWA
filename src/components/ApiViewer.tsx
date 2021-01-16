import { useState, useEffect } from "react";
import getTopStories from "../api/getTopStories";

function ApiViewer() {
    let data: any = [];
    const [storyData, setStoryData] = useState<any>(data);

    useEffect(() => {
        getTopStories(setStoryData);
    }, []);

    console.log(storyData);
    return <div>{storyData && JSON.stringify(storyData, null, 4)}</div>;
}

export default ApiViewer;
