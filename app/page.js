import HomeBanner from "@/components/banner/HomeBanner";
import img1 from "../assets/Houzz.png";
import img2 from "../assets/Zillow.png";
import img3 from "../assets/Deloitte.png";
import img4 from "../assets/BrightHouse.png";
import Image from "next/image";
import FeaturedProperties from "@/components/sections/home/FeaturedProperties";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section className="mt-[100px]">
        <div className="mx-auto flex max-w-[1213.33px] items-center justify-between gap-2 border p-5">
          <Image
            src={img1}
            width={5000}
            height={5000}
            className="h-[48px] w-[149.33px]"
            alt="Houzz"
          />
          <Image
            src={img2}
            width={5000}
            height={5000}
            className="h-[30.93px] w-[136.53px]"
            alt="Zillow"
          />
          <Image
            src={img3}
            width={5000}
            height={5000}
            className="h-[30.93px] w-[136.53px]"
            alt="Deloitte"
          />
          <Image
            src={img4}
            width={5000}
            height={5000}
            className="h-[29.87px] w-[190.93px]"
            alt="Houzz"
          />
        </div>
      </section>
      <FeaturedProperties />
      <section className="discover_property mt-[200px] h-[565px] border">
        <div className="inner_section pb-[40px] pt-[67px]">
          <div className="h-[458px] w-full md:w-[665px] rounded-[20px] bg-[#FDFEFF] p-[60px]">
            <div className="flex h-[338px] w-[545px] flex-col items-start justify-start gap-10">
              <div className="flex h-[236px] flex-col items-start justify-start gap-5 self-stretch">
                <div className="self-stretch">
                  <span className="text-blue-600 mr-2 text-[40px] font-semibold">
                    Discover properties
                  </span>
                  <span className="text-neutral-900 text-[40px] font-semibold">
                    that will improve your life and that of your family
                  </span>
                </div>
                <div className="self-stretch text-xl font-normal text-neutral-900">
                  Uncover homes that will elevate your life and create lasting
                  memories for your family
                </div>
              </div>
              <Link href="" className="flex items-center justify-center gap-2.5 rounded-[10px] border bg-blue-950 px-10 py-5">
                <span className="text-base font-semibold text-neutral-100">
                  See catalog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
