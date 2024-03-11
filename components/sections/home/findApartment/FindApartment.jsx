import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import avatar from "../../../../assets/Ellipse8.png";
import Image from "next/image";

export default function FindApartment() {
  return (
    <section className="mt-[100px] md:mt-[200px] md:min-h-[1104px] bg-blue-600 p-4 md:px-16 pb-[76px] pt-[100px]">
      <div className="inner_section">
        <div className="flex sm:min-h-[427px] flex-col items-start justify-start gap-10 rounded-t-[20px] bg-white px-[23px] sm:px-[45px] md:px-[90px] pb-10 pt-[23px] sm:pt-[45px] md:pt-[90px]">
          <p className="text-[28px] sm:text-[38px] md:text-[48px] font-normal leading-10 sm:leading-[60px] text-neutral-900">
            The best place to discover amazing properties at great prices. Are
            you looking to buy or sell a property? Get in touch today
          </p>
          <Link
            href=""
            className="flex items-center justify-center gap-2.5 rounded-[10px] border bg-blue-600 px-5 py-3 sm:px-10 sm:py-5 text-base font-semibold text-neutral-100"
          >
            Find apartments
          </Link>
        </div>
        <div className="flex findApartment h-[250px] sm:h-full md:min-h-[500px] w-full items-center justify-center rounded-b-[20px] px-[23px] sm:px-[45px] pb-[42px] md:pb-[84px] pt-[135px] md:pt-[276px]">
          <div className="flex sm:min-h-[140px] w-full sm:w-[418px] flex-col items-start justify-start gap-2.5 rounded-[20px] bg-neutral-100 p-[20px] sm:p-[30px]">
            <div className="flex items-center justify-start gap-5">
              <Image
                width={1000}
                height={1000}
                className="h-12 sm:h-20 w-12 sm:w-20 rounded-full"
                src={avatar}
                alt="mmm"
              />
              <div className="flex flex-col items-start justify-start gap-2.5">
                <p className={`text-center text-base font-medium text-blue-600 ${inter.className}`}>
                  Congratulations!
                </p>
                <p className={`w-full sm:w-[258px] text-base font-normal text-neutral-900 ${inter.className}`}>
                  You have rented an apartment. Thank you for choosing us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
