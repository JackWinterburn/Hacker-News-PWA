import { useState, useEffect } from "react";
import axios from "axios";
import getData from "../api/getData";

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
        getData(
            "https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty",
            setResponseData
        );
    }, []);

    return <div>{responseData && JSON.stringify(responseData, null, 4)}</div>;
}

export default ApiViewer;
