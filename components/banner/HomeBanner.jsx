import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../assets/banner_img.png"

export default function HomeBanner() {

  return (
    <section className="pb-[90px] md:pb-0 pt-[90px] lg:pr-0 bg-[#256AE0] min-h-[350px] md:min-h-[650px] lg:min-h-[800px]">
      <div className="inner_section flex items-center w-full gap-[44px]">
        <div className="w-full lg:w-[646px] text-[#F7F7F7] h-full md:h-[484px] pt-[30px]">
          <h2 className="text-[40px] md:text-[64px] w-full text-center md:text-left md:w-[545px] font-bold leading-[55px] md:leading-[80px]">The best place to find your dream house</h2>
          <p className="text-[18px] md:text-[20px] text-center md:text-left mt-[20px]">Discover the ultimate destination where dreams transform into cherished home, where every corner holds the promise of a lifetime happiness and memories</p>
          <div className="mt-[40px]">
            <div className="w-full flex gap-2 items-center justify-between p-[10px] bg-[#F7F7F7] rounded-[15px]">
             <input type="text" placeholder="Search for city, neighborhood, agent, address..." className="w-[350px] sm:w-full md:w-[350px] placeholder:text-[#B0B0B0] placeholder:text-[16px] text-[#686868] bg-transparent h-[42px] text-[16px]" />            
             <button className="w-[160px] sm:w-[150px] text-sm md:text-base h-[50px] text-neutral-100 px-[20px] py-[15px] bg-[#256AE0] rounded-[10px] justify-center items-center gap-2.5 flex">Contact us</button> 
            </div>
          </div>
        </div>
        <div className="w-[687px] hidden lg:block h-[735px]">
          <Image src={bannerImg} width={5000} height={5000} className="h-[735px]" alt="banner_image" />
        </div>
      </div>
    </section>
  );
}
