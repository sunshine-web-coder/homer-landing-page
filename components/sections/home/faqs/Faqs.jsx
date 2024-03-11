"use client";

import React, { useState } from "react";
import { accordionItems } from "./data";
import { FiPlus, FiMinus } from "react-icons/fi";
import { inter } from "@/app/fonts";
import Image from "next/image";
import faqImg1 from "../../../../assets/faqs/faqs1.png";
import faqImg2 from "../../../../assets/faqs/faqs2.png";
import faqImg3 from "../../../../assets/faqs/faqs3.png";
import Link from "next/link";

export default function Faqs() {
  const [openAccordion, setOpenAccordion] = useState(null);
  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="inner_section flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[50px] md:gap-[100px]">
          <div className="mx-auto flex min-h-[112px] max-w-[639px] flex-col items-center justify-start gap-5">
            <h2 className="text-[28px] sm:text-[38px] md:text-5xl text-center font-semibold text-neutral-900">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-[497px] text-center text-lg sm:text-xl font-normal text-neutral-900">
              All the answers you need in one convenient place
            </p>
          </div>
          <div className="accordion flex flex-col gap-5">
            {accordionItems.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  className="flex h-full sm:h-[104px] w-full text-left items-center justify-between rounded-[15px] bg-neutral-100 py-2.5 pl-5 sm:pl-10 pr-2.5 text-lg sm:text-xl font-semibold text-neutral-900 shadow"
                  onClick={() =>
                    setOpenAccordion(openAccordion === item.id ? null : item.id)
                  }
                >
                  <p className="w-full pr-3">{item.title}</p>
                  <span className="flex items-center justify-center gap-2.5 rounded-[10px] border bg-indigo-50 p-[20px] sm:p-[30px]">
                    {openAccordion === item.id ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                {openAccordion === item.id && (
                  <div className="pt-5 text-xl font-normal text-neutral-900">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[382px] w-full items-center justify-center rounded-[20px] border bg-sky-100 px-[25px] sm:px-[50px] lg:px-[309px] pb-[47px] pt-[50px]">
          <div className="flex min-h-[285px] lg:w-[694px] flex-col items-center justify-start border">
            <div className="flex flex-col items-center justify-start gap-5">
              <h5
                className={`text-neutral-900 text-[28px] sm:text-[32px] font-normal ${inter.className}`}
              >
                Still have questions?
              </h5>
              <p
                className={`lg:w-[694px] text-center text-base sm:text-xl font-normal text-neutral-900 ${inter.className}`}
              >
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div className="relative h-20 w-[180px] mb-[40px] mt-[20px]">
              <Image
                className="absolute left-0 top-[10px] h-[60px] w-[60px] rounded-full"
                width={60}
                height={60}
                src={faqImg1}
                alt="faqImg1"
              />
              <Image
                className="absolute left-[120px] top-[10px] h-[60px] w-[60px] rounded-full"
                width={60}
                height={60}
                src={faqImg3}
                alt="faqImg3"
              />
              <Image
                className="absolute left-[50px] top-0 h-20 w-20 rounded-full"
                width={60}
                height={60}
                src={faqImg2}
                alt="faqImg2"
              />
            </div>
            <Link
              href=""
              className="flex items-center justify-center gap-2.5 rounded-[10px] border bg-blue-600 px-5 py-3 sm:px-10 sm:py-5 text-base font-semibold text-neutral-100"
            >
              More questions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
