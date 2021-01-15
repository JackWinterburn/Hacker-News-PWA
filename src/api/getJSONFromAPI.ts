import axios from "axios"

const getJSONFromAPI = async (url: string, setState: any ) => {
    axios({
        method: "GET",
        url,
        headers: { "content-type": "application/octet-stream", },
        params: { language_code: "en", },
    })
        .then((response) => {
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default getJSONFromAPI