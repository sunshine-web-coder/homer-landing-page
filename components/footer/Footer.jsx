import { inter } from "@/app/fonts";
import React from "react";
import { footerLink } from "./data";

export default function Footer() {
  return (
    <footer className="min-h-[476px] py-[50px]">
      <div className="inner_section flex flex-col md:flex-row min-h-[375px] gap-y-[50px] gap-3 justify-between rounded-[20px] border bg-sky-100 pb-[80px] sm:pb-[127px] pl-[30px] md:pl-[50px] pr-[30px] md:pr-[119px] pt-[50px]">
        <div className="flex w-full sm:w-[383px] flex-col items-start justify-start gap-8 self-stretch">
          <div
            className={`flex items-center gap-[5px] text-2xl font-semibold text-blue-600`}
          >
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3335 10.3333L18.3335 1.56668C17.4168 0.746752 16.23 0.293457 15.0002 0.293457C13.7703 0.293457 12.5835 0.746752 11.6668 1.56668L1.66682 10.3333C1.13744 10.8068 0.714991 11.3876 0.427611 12.0371C0.140231 12.6866 -0.0054876 13.3898 0.00015799 14.1V28.6667C0.00015799 29.9928 0.526942 31.2645 1.46462 32.2022C2.40231 33.1399 3.67408 33.6667 5.00016 33.6667H25.0002C26.3262 33.6667 27.598 33.1399 28.5357 32.2022C29.4734 31.2645 30.0002 29.9928 30.0002 28.6667V14.0833C30.0034 13.3759 29.8566 12.6759 29.5693 12.0295C29.282 11.383 28.8608 10.8049 28.3335 10.3333V10.3333ZM18.3335 30.3333H11.6668V22C11.6668 21.558 11.8424 21.1341 12.155 20.8215C12.4675 20.5089 12.8915 20.3333 13.3335 20.3333H16.6668C17.1089 20.3333 17.5328 20.5089 17.8453 20.8215C18.1579 21.1341 18.3335 21.558 18.3335 22V30.3333ZM26.6668 28.6667C26.6668 29.1087 26.4912 29.5326 26.1787 29.8452C25.8661 30.1577 25.4422 30.3333 25.0002 30.3333H21.6668V22C21.6668 20.6739 21.14 19.4022 20.2024 18.4645C19.2647 17.5268 17.9929 17 16.6668 17H13.3335C12.0074 17 10.7356 17.5268 9.79796 18.4645C8.86027 19.4022 8.33349 20.6739 8.33349 22V30.3333H5.00016C4.55813 30.3333 4.13421 30.1577 3.82165 29.8452C3.50909 29.5326 3.33349 29.1087 3.33349 28.6667V14.0833C3.33379 13.8467 3.38448 13.6128 3.48219 13.3973C3.57989 13.1818 3.72238 12.9895 3.90016 12.8333L13.9002 4.08334C14.2043 3.81614 14.5953 3.66879 15.0002 3.66879C15.405 3.66879 15.796 3.81614 16.1002 4.08334L26.1002 12.8333C26.2779 12.9895 26.4204 13.1818 26.5181 13.3973C26.6158 13.6128 26.6665 13.8467 26.6668 14.0833V28.6667Z"
                fill="#256AE0"
              />
            </svg>
            <span>Homer</span>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="w-full sm:w-[369px] text-base text-slate-700">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="flex items-center justify-start gap-2 sm:justify-between">
              <input
                type="text"
                placeholder="Email address"
                className={`w-full md:W-[238px] h-[49px] rounded-[6px] border p-3 text-sm ${inter.className}`}
              />
              <button className="h-[49px] w-[150px] sm:w-full md:w-[134px] rounded-[10px] bg-[#446D9B] text-base text-[#F7F7F7]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-[457px] flex gap-3">
          {footerLink.map((section, index) => (
            <div key={index} className="mb-4 w-full text-zinc-800">
              <h2
                className={`mb-[24px] self-stretch  text-neutral-900 text-xl font-normal leading-[29px] ${inter.className}`}
              >
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.children.map((item, itemIndex) => (
                  <li key={itemIndex} className="">
                    <a
                      href={item.slug}
                      className={`self-stretch flex items-center gap-2 text-neutral-900 text-base font-medium leading-normal ${inter.className}`}
                    >
                     {item.icon && <span>{item.icon}</span>}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
