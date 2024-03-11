import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { featuredPropertiesData } from "./data";

export default function FeaturedProperties() {
  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="inner_section">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-semibold text-[#111111] sm:text-[32px] md:text-5xl">
            Featured properties
          </h2>
          <Link
            href=""
            className="flex w-[250px] items-center justify-center rounded-[10px] bg-[#256AE0] px-[10px] py-[20px] text-[16px] text-sm font-semibold text-[#F7F7F7] sm:max-w-max sm:px-[20px] md:text-base lg:px-[40px]"
          >
            Explore all listings
          </Link>
        </div>
        <div className="mt-[50px] flex flex-col gap-[50px] md:mt-[100px]">
          {featuredPropertiesData.map((item, i) => (
            <div
              key={i}
              className="flex min-h-[372px] w-full flex-col items-start justify-start rounded-[20px] bg-white shadow lg:flex-row"
            >
              <div className="h-[250x] sm:h-[361px] w-full lg:w-[586px]">
                <Image
                  src={item.fImg}
                  width="100%"
                  height=""
                  className="relative h-[250x] sm:h-[361px] w-full rounded-tl-[20px] rounded-tr-[20px] lg:w-[586px] lg:rounded-bl-[20px] lg:rounded-tr-[0px]"
                  alt="featured image"
                />
              </div>
              <div className="flex min-h-[372px] w-full flex-col items-start justify-start gap-2.5 p-[25px] sm:p-[50px] lg:w-[726px] lg:p-[60px]">
                <div className="flex flex-col-reverse sm:flex-row w-full items-start justify-between gap-y-2">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <div className="flex flex-col items-start justify-start gap-2.5">
                      <p className="text-[28px] sm:text-[32px] font-semibold text-neutral-900">
                        {item.price}
                        <sup className="text-base font-normal text-zinc-600">
                          /Per month
                        </sup>
                      </p>
                      <div
                        className={`text-lg sm:text-xl font-medium text-neutral-900 ${inter.className}`}
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
