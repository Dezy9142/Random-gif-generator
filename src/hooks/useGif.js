import  { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tgif) => {
    
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);


    async function fetchData(tgif) {
      setLoading(true);
       const { data } = await axios.get(tgif ? `${url}&tag=${tgif}`:url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
      
    }
    useEffect(() => {
      fetchData();
    }, ['car']);
    return {gif,loading,fetchData};
};

export default useGif;
