import { useState, useEffect } from "react";
import getTopStories from "../api/getTopStories";
import HackerNewsStory from "./HackerNewsStory";

function ApiViewer() {
  let data: any = [];
  const [storyData, setStoryData] = useState<any>(data);

  useEffect(() => {
    getTopStories(setStoryData);
  }, []);

  console.log(storyData);
  return (
    <div>
      <HackerNewsStory stories={storyData} />
    </div>
  );
}

export default ApiViewer;
