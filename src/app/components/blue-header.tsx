import Image from "next/image";
import phone from "@/images/icn settings icn-xs.png";
import mail from "@/images/icn settings icn-xs (1).png";
import insta from "@/images/icn settings icn-xs (2).png";
import yout from "@/images/icn settings icn-xs (3).png";
import fb from "@/images/icn settings icn-xs (4).png";
import twit from "@/images/icn settings icn-xs (5).png";

export default function BlueHeader() {
  return (
    <div className="w-full bg-[#252B42] py-2">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 md:px-8">
        {/* Left section: Contact Info */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-2 lg:mb-0">
          <button className="flex items-center gap-2 text-white">
            <Image src={phone} alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-sm md:text-base">
              (225) 555-0118
            </span>
          </button>
          <button className="flex items-center gap-2 text-white">
            <Image src={mail} alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-sm md:text-base">
              michelle.rivera@example.com
            </span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="text-center font-Montserrat font-semibold text-sm md:text-base text-white mb-2 lg:mb-0">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
          <h6 className="font-Montserrat text-sm md:text-base text-white">
            Follow Us:
          </h6>
          <div className="flex gap-2">
            <Image src={insta} alt="Instagram" width={16} height={16} />
            <Image src={yout} alt="YouTube" width={16} height={16} />
            <Image src={fb} alt="Facebook" width={16} height={16} />
            <Image src={twit} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
