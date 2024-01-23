import { FaStar } from "react-icons/fa";

export default function DeviceCard() {
  return (
    <div className="  w-[100px] sm:w-[150px] lg:w-[180px]">
      <div className="bg-gray-300 h-[120px] sm:h-[150px]  lg:h-[200px] rounded-lg"></div>
      <div className="text-center sm:mt-3  sm:space-y-1">
        <h3 className="text-white">Refershing Mint</h3>
        <p className="text-white">30,000MMk</p>
        <p className=" flex gap-2 items-center  justify-center text-yellow-500">
          <FaStar size={16} />
          <span className="">600point</span>
        </p>
      </div>
    </div>
  );
}
