import Tag from "./components/Tag"
import Random from "./components/Random"
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background   items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg mt-[40px]  text-3xl font-bold  w-[90%] 
       text-center  py-1 px-10">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
