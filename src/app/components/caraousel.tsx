import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-[50vh] lg:h-[716px] bg-black">
      {/* Image Background */}
      <div className="absolute inset-0">
        <Image
          src={women}
          alt="women"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center items-start gap-6 px-4 sm:px-8 lg:px-16 z-10 text-white h-full">
        <h5 className="font-Montserrat font-semibold text-sm sm:text-base leading-[24px]">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl lg:text-6xl leading-tight max-w-[90%] sm:max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-sm sm:text-lg lg:text-xl leading-[30px] max-w-[90%] sm:max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-fit px-8 py-4 bg-[#2DC071] text-sm sm:text-lg lg:text-xl font-Montserrat font-semibold rounded">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
