import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../../assets/featured_img_1.png";
import { featuredPropertiesData } from "./data";

export default function FeaturedProperties() {
  return (
    <section className="mt-[200px]">
      <div className="inner_section">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-semibold text-[#111111]">
            Featured properties
          </h2>
          <Link
            href=""
            className="flex h-[62px] w-[219px] items-center justify-center rounded-[10px] bg-[#256AE0] pl-[40px] pr-[20px] text-[16px] font-semibold text-[#F7F7F7]"
          >
            Explore all listings
          </Link>
        </div>
        <div className="mt-[100px] flex flex-col gap-[50px]">
          {featuredPropertiesData.map((item, i) => (
            <div key={i} className="flex h-[372px] w-full items-start justify-start rounded-[20px] bg-white shadow">
              <div className="h-[361px] w-[586px]">
                <Image
                  src={item.fImg}
                  width="100%"
                  height=""
                  className="relative h-[361px] w-[586px] rounded-bl-[20px] rounded-tl-[20px]"
                  alt="featured image"
                />
              </div>
              <div className="flex h-[372px] w-[726px] flex-col items-start justify-start gap-2.5 p-[60px]">
                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <div className="flex items-start justify-start">
                        <div className="text-[32px] font-semibold text-neutral-900">
                          {item.price}
                        </div>
                        <div className="text-base font-normal text-zinc-600">
                          /Per month
                        </div>
                      </div>
                      <div
                        className={`text-xl font-medium text-neutral-900 ${inter.className}`}
                      >
                        {item.text1}
                      </div>
                    </div>
                    <div className="text-base font-normal text-neutral-400">
                      {item.text2}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 rounded-[30px] bg-indigo-50 px-2.5 py-[15px]">
                    <div className="text-base font-normal text-blue-600">
                      {item.rentOrSale}
                    </div>
                  </div>
                </div>
                <div className="my-[20px] h-[0px] w-full border border-zinc-400"></div>
                <div className="flex items-start justify-start gap-5">
                  <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px]">
                    <div className="text-base font-normal text-blue-600">
                      {item.bed}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px]">
                    <div className="text-base font-normal text-blue-600">
                      {item.bathroom}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px]">
                    <div className="text-base font-normal text-blue-600">
                      {item.distance}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
