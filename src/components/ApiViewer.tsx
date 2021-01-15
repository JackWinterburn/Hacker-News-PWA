import { useState, useEffect } from "react";
import getJSONFromAPI from "../api/getJSONFromAPI";

interface HackerNewsData {
    by: string;
    descendants: number;
    id: number;
    kids: [number];
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
}

function ApiViewer() {
    let [responseData, setResponseData] = useState(
        "The data has not been fetched yet"
    );

    useEffect(() => {
        getJSONFromAPI(
            "https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty",
            setResponseData
        );
        console.log(responseData && JSON.stringify(responseData, null, 4));
    }, []);

    return <div>{responseData && JSON.stringify(responseData, null, 4)}</div>;
}

export default ApiViewer;
