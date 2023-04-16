import React, { useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";




function Tag() {
  const [tgif,settgif]=useState('car');
 
  const {gif,loading,fetchData}=useGif(tgif);



  
  return (
    <div
      className=" flex w-[40%] flex-col items-center rounded-lg border border-black  
    gap-y-5 mt-[15px] bg-blue-500"
    >
      <h1 className="text-xl uppercase font-bold underline mt-[15px]">
        RANDOM {tgif} GIFS
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="random-gif" width="450" />}

      <input className="w-[80%] text-lg bg-[#ccf6de] rounded-lg py-1  mb-[1px] text-center "
      onChange={(event)=>settgif(event.target.value)}
        value={tgif}
      />
      <button
        onClick={()=>fetchData(tgif)}
        className="w-[80%] text-lg bg-[#ccf6de] rounded-lg py-1 uppercase mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
