
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



function Random() {
 const {gif,loading,fetchData}=useGif();
 
  return (
    <div
      className=" flex w-[40%] flex-col items-center rounded-lg border border-black  
    gap-y-5 mt-[15px] bg-green-500"
    >
      <h1 className="text-xl uppercase font-bold underline mt-[15px]">
        A RANDOM GIFS
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="random-gif" width="450" />}
      <button
        onClick={()=>fetchData()}
        className="w-[80%] text-lg bg-[#ccf6de] rounded-lg py-1 uppercase mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
