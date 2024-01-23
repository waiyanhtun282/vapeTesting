import React from "react";

export default function DevicesName({ deviceName }: { deviceName: string }) {
  return (
    <div className="flex flex-col text-white  gap-2  mt-3 sm:mt-0 sm:ml-10 ">
      <h1 className="font-bold text-3xl">{deviceName}</h1>
      <p className=" min-w-xs">Find The Best For you here</p>
    </div>
  );
}
