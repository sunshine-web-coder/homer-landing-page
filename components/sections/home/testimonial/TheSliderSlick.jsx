"use client";

import Image from "next/image";
import Slider from "react-slick";
import { testimonialData } from "./data";
import ReactStars from "react-rating-stars-component";
import { inter } from "@/app/fonts";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <svg
      width="36"
      onClick={onClick}
      className="absolute right-[40px] top-[-100px] hidden items-center justify-center gap-2.5 rounded-[10px] border bg-neutral-100 p-5"
      height="16"
      viewBox="0 0 36 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 1"
        d="M35.6893 8.70711C36.0799 8.31658 36.0799 7.68342 35.6893 7.29289L29.3254 0.928932C28.9348 0.538408 28.3017 0.538408 27.9112 0.928932C27.5206 1.31946 27.5206 1.95262 27.9112 2.34315L33.568 8L27.9112 13.6569C27.5206 14.0474 27.5206 14.6805 27.9112 15.0711C28.3017 15.4616 28.9348 15.4616 29.3254 15.0711L35.6893 8.70711ZM0.491211 9H34.9822V7H0.491211V9Z"
        fill="#202020"
      />
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[0px] sm:right-[40px] top-[-90px] sm:top-[-100px] flex items-center justify-center gap-2.5 rounded-[10px] border bg-neutral-100 p-4 sm:p-5"
    >
      <svg
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.53974 6.79004L1.87974 1.14004C1.78677 1.04631 1.67617 0.971914 1.55431 0.921145C1.43246 0.870377 1.30175 0.844238 1.16974 0.844238C1.03773 0.844238 0.90702 0.870377 0.785161 0.921145C0.663302 0.971914 0.552701 1.04631 0.459738 1.14004C0.273487 1.3274 0.168945 1.58085 0.168945 1.84504C0.168945 2.10922 0.273487 2.36267 0.459738 2.55004L5.40974 7.55004L0.459738 12.5C0.273487 12.6874 0.168945 12.9409 0.168945 13.205C0.168945 13.4692 0.273487 13.7227 0.459738 13.91C0.552352 14.0045 0.662797 14.0797 0.784673 14.1312C0.906548 14.1827 1.03743 14.2095 1.16974 14.21C1.30204 14.2095 1.43293 14.1827 1.5548 14.1312C1.67668 14.0797 1.78712 14.0045 1.87974 13.91L7.53974 8.26004C7.64124 8.16639 7.72225 8.05274 7.77766 7.92624C7.83307 7.79974 7.86167 7.66314 7.86167 7.52504C7.86167 7.38693 7.83307 7.25033 7.77766 7.12383C7.72225 6.99733 7.64124 6.88368 7.53974 6.79004Z"
          fill="#256AE0"
        />
      </svg>
    </button>
  );
}

export default function TheSliderSlick() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((item) => (
        <div key={item.id} className="pr-0 sm:pr-5">
          <div className="flex min-h-[406px] w-full flex-col items-start justify-between gap-2.5 rounded-[20px] bg-white p-5 sm:p-10">
            <ReactStars
              count={5}
              size={24}
              value={item.rating}
              isHalf={true}
              activeColor="#ffd700"
              edit={false}
            />
            <p className="max-w-[396px] text-xl font-normal text-neutral-900">
              &quot;{item.reviewText}&quot;
            </p>
            <div className="flex items-center justify-start gap-5">
              <Image
                src={item.avatar}
                width={60}
                height={60}
                className="h-[60px] w-[60px] rounded-full"
                alt={item.name}
              />
              <div className="flex flex-col items-start justify-start gap-2.5">
                <p className="text-xl font-normal text-neutral-900">
                  {item.name}
                </p>
                <span
                  className={`text-base font-normal text-neutral-400 ${inter.className}`}
                >
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
