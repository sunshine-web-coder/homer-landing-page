"use client";

import { useState } from "react";
import { propertiesData } from "./data";
import Image from "next/image";
import Link from "next/link";

export default function PropertyList() {
  const [activeCategory, setActiveCategory] = useState("Residential");

  const categories = [
    ...new Set(propertiesData.map((property) => property.category)),
  ];

  const filteredProperties = propertiesData.filter(
    (property) => property.category === activeCategory,
  );

  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="inner_section">
        <div className="flex flex-col gap-[50px] md:gap-[100px]">
          <div className="mx-auto flex min-h-[139px] max-w-[581px] flex-col items-center justify-start gap-5">
            <h2 className="text-[28px] font-semibold text-[#111111] sm:text-[32px] md:text-5xl">
              Find the category for you
            </h2>
            <p className="mx-auto max-w-[497px] text-center text-lg font-normal text-neutral-900 sm:text-xl">
              Uncover homes that will elevate your life and create lasting
              memories for your family
            </p>
          </div>
          <div className="flex w-full flex-col gap-[50px]">
            <div className="flex items-center justify-center">
              <div className="flex max-w-max items-start justify-start gap-2.5 overflow-x-auto overflow-y-hidden rounded-[10px] border bg-white p-2.5 shadow sm:h-[82px]">
                <div className="flex flex-nowrap gap-2.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`flex h-[50px] w-[173px] items-center justify-center gap-2.5 rounded-[10px] border px-[20px] py-5 text-base font-semibold sm:h-[62px] sm:px-[35px] ${activeCategory === category ? "bg-[#102D5E] text-[#F7F7F7]" : "bg-indigo-50 text-neutral-900"}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="property-list grid grid-cols-1 gap-5 lg:grid-cols-2">
              {filteredProperties.map((property) => (
                <div
                  key={property.property_id}
                  className="flex min-h-min w-full flex-col items-start justify-start gap-2.5 rounded-[30px] bg-slate-50 p-5 shadow lg:mx-0 lg:w-full"
                >
                  <div className="relative w-full">
                    <div className="absolute left-[35px] top-[35px] h-[52px] max-w-max rounded-[30px] border bg-indigo-50 px-2.5 py-[15px] text-center text-base font-normal text-blue-600">
                      {property.forSale ? "For sale" : "For rent"}
                    </div>
                    <Image
                      width={5000}
                      height={5000}
                      src={property.image_url}
                      alt={property.property_id}
                    />
                  </div>

                  <div className="mt-5 h-full w-full py-5 sm:px-[30px]">
                    <div className="flex flex-col items-start justify-start">
                      <p className="text-[28px] font-semibold text-blue-600 sm:text-[32px]">
                        {property.price}
                        <sup className="text-zinc-60 relative top-[-20px] text-base font-normal text-[#616161]">
                          /Per month
                        </sup>
                      </p>
                      <p className="text-lg font-normal text-neutral-900 sm:text-xl">
                        {property.text1}
                      </p>
                      <p className="mt-[20px] text-base font-normal text-neutral-400">
                        {property.text2}
                      </p>
                    </div>
                    <hr className="mb-[30px] mt-[50px] self-stretch border border-zinc-400" />
                    <div className="flex gap-5">
                      <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px] text-base font-normal text-blue-600">
                        {property.bed}
                      </div>
                      <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px] text-base font-normal text-blue-600">
                        {property.bathroom}
                      </div>
                      <div className="flex items-center justify-center gap-2.5 rounded-[10px] bg-indigo-50 px-2.5 py-[15px] text-base font-normal text-blue-600">
                        {property.distance}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
          href=""
          className="mx-auto mt-[50px] flex h-[62px] max-w-max items-center justify-center gap-2.5 rounded-[10px] border bg-blue-600 px-10 py-5 text-base font-semibold text-neutral-100"
        >
          Explore all listings
        </Link>
      </div>
    </section>
  );
}
