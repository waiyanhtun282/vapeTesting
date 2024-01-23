import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <>
      <div className=" mx-auto text-center py-5 sm:py-8 lg:py-10">
        <h1 className=" text-2xl sm:text-3xl font-medium mb-1">
          <span className="text-red-500 font-bold mr-1">New</span>
          Released
        </h1>
        <p>Try Our Latest Flavour Here</p>
      </div>
      <div className=" grid  gap-3 sm:grid-cols-2  lg:flex lg:gap-2">
        <div className=" bg-yellow-400 w-[350px] h-[200px] rounded-lg"></div>
        <div className=" bg-pink-400 w-[350px] h-[200px] rounded-lg"></div>
        <div className=" bg-sky-400 w-[350px] h-[200px] rounded-lg"></div>
        <div className="   bg-emerald-400 w-[350px] h-[200px] rounded-lg"></div>
      </div>

      <div className="py-5 lg:py-10 flex items-center justify-center">
        <button className="bg-gray-200 px-5 sm:px-10 py-2  w-[200px] sm:w-[300px] rounded-3xl flex items-center justify-center gap-3">
          <span>View More</span>
          <IoIosArrowForward size={20} />
        </button>
      </div>
      {/* <div className=" "> */}
      <div className=" bg-slate-700 h-[250px] rounded-lg flex  justify-center lg:justify-around items-center">
        <div></div>
        <div className="flex flex-col text-white  gap-2  items-center justify-center">
          <h1 className="font-bold text-3xl">Try New Flavour</h1>
          <p>Citurs Moster</p>
          <button className=" bg-slate-800/50 px-4 py-2 w-[80px] rounded-3xl text-white">
            View
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
