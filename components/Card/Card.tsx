import { FaStar } from "react-icons/fa";

export default function Card() {
  return (
    <div className="    sm:w-[280px]">
      <div className="bg-gray-300  h-[250px] rounded-lg"></div>
      <div className="text-center mt-3  space-y-2">
        <h3>Refershing Mint</h3>
        <p>30,000MMk</p>
        <del>40,0000MMK</del>
        <p className=" flex gap-2 items-center  justify-center text-yellow-500">
          <FaStar size={16} />
          <span className="">600point</span>
        </p>
      </div>
    </div>
  );
}
