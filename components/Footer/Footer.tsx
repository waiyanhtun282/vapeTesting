import { MdPolicy } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import kbzImg from "@/public/img/kbz.png";
import waveImg from "@/public/img/wave-money.png";
import facebookImg from "@/public/img/Facebook_Logo.png";
import instrgramImg from "@/public/img/Instagram_icon.png";
import viberImg from "@/public/img/viber.png";
import teleImg from "@/public/img/telegram.png";
import twitterImg from "@/public/img/twitter.png";
import qrImg from "@/public/img/QR_Code_example.png";
export default function Footer() {
  return (
    <footer className="container">
      <div className=" py-5 sm:py-8 lg:py-10   grid  sm:grid-cols-2 gap-5 lg:gap-0 lg:grid-cols-4  items-center lg:items-start mx-auto">
        <div>
          <ul className=" space-y-2 sm:space-y-3">
            <li>
              <h2 className=" font-medium">Customer Services</h2>
            </li>
            <li className="flex items-center gap-2">
              <MdPolicy size={22} />
              <p>Trems & PrivacyPolicy</p>
            </li>
            <li className="flex items-center gap-2">
              <IoReload size={22} />
              <p>Return & Policy</p>
            </li>
          </ul>

          <div className="mt-10">
            <h2 className="font-medium text-xl">Payment</h2>
            <div className=" flex gap-2 mt-5">
              <Image src={kbzImg} alt="Kbz Image" width={50} height={50} />
              <Image src={waveImg} alt="Kbz Image" width={50} height={50} />
            </div>
          </div>
        </div>
        <div>
          <ul className="space-y-3">
            <li>
              <h1 className=" font-medium">Language </h1>
            </li>
            <li className="flex items-center gap-3">
              <input type="radio" />
              <span>Myanmar (Unicode)</span>
            </li>
            <li className="flex items-center gap-3">
              <input type="radio" />

              <span>Myanmar (Zawgyi)</span>
            </li>
            <li className="flex items-center gap-3">
              <input type="radio" checked />
              <span>English</span>
            </li>
          </ul>
          <div className="mt-3">
            <h2 className="font-medium text-xl">Follow Us On</h2>
            <div className=" flex gap-2 mt-5">
              <Image src={facebookImg} alt="Kbz Image" width={45} height={45} />
              <Image
                src={instrgramImg}
                alt="Kbz Image"
                width={45}
                height={45}
              />
              <Image src={viberImg} alt="Kbz Image" width={45} height={45} />
              <Image src={teleImg} alt="Kbz Image" width={45} height={45} />
              <Image src={twitterImg} alt="Kbz Image" width={45} height={45} />
            </div>
          </div>
        </div>
        <ul className="space-y-3">
          <li>
            <h1 className=" font-medium">Contact Us </h1>
          </li>
          <li className="flex items-center gap-2">
            <IoLocationSharp size={30} />
            <p>
              Lay Daunt Kan Main Road & Cashmere Stop Near Zawana , Thingangyun
              Tsp
            </p>
          </li>
          <li className="flex items-center gap-2">
            <CiPhone size={22} />
            <p>Return & Policy</p>
          </li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li>
            <h1 className=" font-medium mb-3">Download Our App </h1>
            <Image src={qrImg} alt="QR Image" width={200} height={200} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
