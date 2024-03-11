import HomeBanner from "@/components/banner/HomeBanner";
import img1 from "../assets/Houzz.png";
import img2 from "../assets/Zillow.png";
import img3 from "../assets/Deloitte.png";
import img4 from "../assets/BrightHouse.png";
import Image from "next/image";
import FeaturedProperties from "@/components/sections/home/featuredProperties/FeaturedProperties";
import Link from "next/link";
import PropertyList from "@/components/sections/home/propertyList/PropertyList";
import Testimonial from "@/components/sections/home/testimonial/Testimonial";
import Faqs from "@/components/sections/home/faqs/Faqs";
import FindApartment from "@/components/sections/home/findApartment/FindApartment";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section className="mt-[50px] md:mt-[100px]">
        <div className="mx-auto flex flex-wrap max-w-[1213.33px] items-center justify-center md:justify-between gap-5 p-5">
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
      <section className="discover_property mt-[100px] md:mt-[200px] min-h-min md:min-h-[565px] border">
        <div className="inner_section pb-[40px] pt-[55px]">
          <div className="min-h-min md:min-h-[458px] w-full md:w-[665px] rounded-[20px] bg-[#FDFEFF] p-[25px] sm:p-[60px]">
            <div className="flex min-h-min md:min-h-[338px] w-full md:w-[545px] flex-col items-start justify-start gap-10">
              <div className="flex min-h-min md:min-h-[236px] flex-col items-start justify-start gap-5 self-stretch">
                <div className="self-stretch text-center md:text-left">
                  <span className="text-blue-600 mr-2 text-[28px] sm:text-[32px] md:text-[40px] font-semibold">
                    Discover properties
                  </span>
                  <span className="text-neutral-900 text-[28px] sm:text-[32px] md:text-[40px] font-semibold">
                    that will improve your life and that of your family
                  </span>
                </div>
                <p className="self-stretch text-base text-center md:text-left md:text-xl font-normal text-neutral-900">
                  Uncover homes that will elevate your life and create lasting
                  memories for your family
                </p>
              </div>
              <Link href="" className="flex mx-auto md:mx-0 max-w-[186px] items-center justify-center gap-2.5 rounded-[10px] border bg-blue-950 px-5 sm:px-10 py-4 sm:py-5">
                <span className="text-base font-semibold text-neutral-100">
                  See catalog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PropertyList />
      <Testimonial />
      <Faqs />
      <FindApartment />
    </>
  );
}
