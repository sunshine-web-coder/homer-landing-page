import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../assets/banner_img.png"

export default function HomeBanner() {

  return (
    <section className="pt-[90px] pr-0 bg-[#256AE0]">
      <div className="flex items-center w-full gap-[44px]">
        <div className="w-[646px] text-[#F7F7F7] h-[484px] pt-[30px]">
          <h2 className="text-[64px] max-w-[545px] font-bold leading-[80px]">The best place to find your dream house</h2>
          <p className="text-[20px] mt-[20px]">Discover the ultimate destination where dreams transform into cherished home, where every corner holds the promise of a lifetime happiness and memories</p>
          <div className="mt-[40px]">
            <div className="w-full flex gap-2 items-center justify-between p-[10px] bg-[#F7F7F7] rounded-[15px]">
             <input type="text" placeholder="Search for city, neighborhood, agent, address..." className="w-[350px] placeholder:text-[#B0B0B0] placeholder:text-[16px] text-[#686868] bg-transparent h-[42px] text-[16px]" />            
             <button className="w-[163px] h-[62px] text-neutral-100 px-[20px] py-[15px] bg-[#256AE0] rounded-[10px] justify-center items-center gap-2.5 flex">Contact us</button> 
            </div>
          </div>
        </div>
        <div className="w-[687px] h-[735px]">
          <Image src={bannerImg} width={5000} height={5000} className="h-[735px]" alt="banner_image" />
        </div>
      </div>
    </section>
  );
}
