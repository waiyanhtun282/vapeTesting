import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";
import HomeCaurosela from "@/components/cauroseal/HomeCaurosela";
import DeviceCard from "@/components/common/DeviceCard";
import DevicesName from "@/components/common/DevicesName";
// import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

// import {BgImg} from '@/public/'
export default function Home() {
  return (
    <main className="">
      <header className="container   h-[300px]   bg-sky-500   lg:h-[500px] relative ">
        <HomeCaurosela />
      </header>

      <section className=" container ">
        <div className=" mx-auto text-center py-5 lg:py-10">
          <h1 className=" text-2xl sm:text-3xl font-medium">Best Deals</h1>
          <p>Just For You</p>
        </div>

        <div className="  grid gap-3  sm:grid-cols-2 lg:flex  lg:flex-row lg:justify-between items-center lg:gap-2 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="py-5 sm:py-8 lg:py-10 flex items-center justify-center">
          <button className="bg-gray-200 px-5 sm:px-10 py-2  w-[200px] sm:w-[300px] rounded-3xl flex items-center justify-center gap-3">
            <span>View More</span>
            <IoIosArrowForward size={20} />
          </button>
        </div>

        <div className="  flex  flex-col lg:flex-row gap-2 justify-between">
          <div className="   bg-slate-800  h-[350px] lg:w-3/5 rounded-lg"></div>
          <div className="  lg:w-2/5  sm:flex gap-2 bg-slate-200 hidden ">
            <div className=" bg-slate-800 sm:w-1/2 rounded-lg"></div>
            <div className="  sm:w-1/2 rounded-lg grid gap-2">
              <div className=" bg-slate-800 rounded-lg "></div>
              <div className="  bg-slate-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className=" container">
        <Hero />
      </section>

      <section className=" container">
        <div className="  mx-auto  pt-3 sm:pt-5 lg:pt-10  sm:pb-3">
          <div className=" bg-slate-700 h-[350px] rounded-lg flex flex-col sm:flex-row  justify-between items-center overflow-hidden gap-3">
            <DevicesName deviceName="Devices" />
            <div className="flex gap-2">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </div>
          </div>
        </div>
      </section>

      <section className=" container">
        <div className="  mx-auto py-3">
          <div className=" bg-slate-700 h-[350px] rounded-lg flex flex-col sm:flex-row  justify-between items-center overflow-hidden gap-3">
            <DevicesName deviceName="Pods" />
            <div className="flex gap-2">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </div>
          </div>
        </div>
      </section>

      <section className=" container">
        <div className="  mx-auto py-3">
          <div className=" bg-slate-700 h-[350px] rounded-lg flex flex-col sm:flex-row  justify-between items-center overflow-hidden gap-3">
            <DevicesName deviceName="Disposable" />
            <div className="flex gap-2">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
