"use client";
import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperButtons = ({}) => {
  const swiper = useSwiper();
  const myButton = useRef(null);
  const handleDisable = (element) => {
    element
      .querySelectorAll([".swiper-button-prev", ".swiper-button-next"])
      .forEach(
        (btn) =>
          btn.classList.contains("chomu") &&
          btn.classList.remove("swiper-button-disabled")
      );
    element.querySelectorAll(".swiper-button-disabled").forEach((button) => {
      if (!button.classList.contains("chomu")) {
        if (button.classList.contains("swiper-button-next")) {
          element.querySelectorAll(".swiper-button-next").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        } else if (button.classList.contains("swiper-button-prev")) {
          element.querySelectorAll(".swiper-button-prev").forEach((btn) => {
            btn.classList.add("swiper-button-disabled");
          });
        }
      }
    });
  };

  useEffect(() => {
    handleDisable(myButton.current.parentElement);
  }, []);

  const handleSlideChange = () => {
    handleDisable(myButton.current.parentElement);
  };
  useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper, handleSlideChange]);
  const handleNext = (event) => {
    swiper.slideNext();
    handleDisable(event.target.parentElement.parentElement);
  };
  const handlePrev = (event) => {
    swiper.slidePrev();
    handleDisable(event.target.parentElement.parentElement);
  };
  return (
    <>
      <div
        ref={myButton}
        onClick={handleNext}
        className="swiper-button-next chomu   pointer-events-none"
      >
        <svg
          className="w-full h-full flipped"
          width={41}
          height={41}
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 21.2885C0 20.3002 0.801169 19.499 1.78944 19.499H37.5783C38.5665 19.499 39.3677 20.3002 39.3677 21.2885C39.3677 22.2767 38.5665 23.0779 37.5783 23.0779H1.78944C0.801169 23.0779 0 22.2767 0 21.2885Z"
            fill="#50BD77"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5681 6.06574C22.0369 5.19578 23.1223 4.87068 23.9924 5.33961L23.1433 6.91479C23.9924 5.33961 23.9924 5.33961 23.9924 5.33961L23.9972 5.34221L24.0072 5.34765L24.0428 5.36697L24.1728 5.43865C24.2849 5.50082 24.4469 5.59149 24.6516 5.70845C25.0606 5.94224 25.6411 6.28171 26.3363 6.70927C27.723 7.56228 29.5819 8.77584 31.4501 10.2091C33.3073 11.6342 35.2318 13.3205 36.7084 15.1274C38.15 16.8919 39.3675 19.0164 39.3675 21.2852C39.3675 23.5547 38.1505 25.6803 36.7087 27.4457C35.2323 29.2535 33.3078 30.9408 31.4503 32.3664C29.5824 33.8003 27.7233 35.0143 26.3366 35.8677C25.6413 36.2955 25.0608 36.635 24.6519 36.8688C24.4472 36.9858 24.2852 37.0767 24.173 37.1387L24.043 37.2105L24.0074 37.2298L23.9974 37.2353L23.9943 37.237C23.9943 37.237 23.9924 37.2379 23.1433 35.6628L23.9943 37.237C23.1244 37.7058 22.0371 37.3818 21.5683 36.5119C21.0992 35.6422 21.424 34.5571 22.2936 34.0878L22.3001 34.0845L22.3266 34.0699L22.4377 34.0088C22.537 33.9537 22.6852 33.8707 22.8753 33.7621C23.2556 33.5445 23.8027 33.2246 24.461 32.8197C25.7807 32.0075 27.5305 30.8637 29.271 29.5276C31.0225 28.1831 32.7065 26.6881 33.9367 25.1819C35.2015 23.6334 35.7886 22.3131 35.7886 21.2852C35.7886 20.259 35.2017 18.9398 33.9369 17.3919C32.707 15.8866 31.0228 14.3922 29.2715 13.0485C27.5307 11.7128 25.7809 10.5694 24.4612 9.75764C23.803 9.35282 23.2559 9.03294 22.8756 8.81551C22.6854 8.70686 22.5372 8.62393 22.438 8.56891L22.3268 8.50764L22.3003 8.49325L22.2946 8.49022M21.5681 6.06574C21.0992 6.93557 21.4249 8.02119 22.2946 8.49022L21.5681 6.06574Z"
            fill="#50BD77"
          />
        </svg>
      </div>
      <div onClick={handlePrev} className="swiper-button-prev chomu">
        <svg
          className="w-full h-full flipped"
          width={41}
          height={41}
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.3672 21.2885C39.3672 20.3002 38.566 19.499 37.5777 19.499H1.78892C0.800674 19.499 -0.000518799 20.3002 -0.000518799 21.2885C-0.000518799 22.2767 0.800674 23.0779 1.78892 23.0779H37.5777C38.566 23.0779 39.3672 22.2767 39.3672 21.2885Z"
            fill="#50BD77"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8011 6.06574C17.3322 5.19578 16.2469 4.87068 15.3767 5.33961L16.2259 6.91479C15.3767 5.33961 15.3767 5.33961 15.3767 5.33961L15.372 5.34221L15.3619 5.34765L15.3264 5.36697L15.1964 5.43865C15.0842 5.50082 14.9222 5.59149 14.7175 5.70845C14.3086 5.94224 13.7281 6.28171 13.0328 6.70927C11.6461 7.56228 9.78723 8.77584 7.91905 10.2091C6.06185 11.6342 4.13737 13.3205 2.66072 15.1274C1.21915 16.8919 0.00161362 19.0164 0.00161362 21.2852C0.00161362 23.5547 1.21867 25.6803 2.66048 27.4457C4.13689 29.2535 6.06138 30.9408 7.91882 32.3664C9.78676 33.8003 11.6459 35.0143 13.0326 35.8677C13.7278 36.2955 14.3083 36.635 14.7173 36.8688C14.922 36.9858 15.084 37.0767 15.1961 37.1387L15.3261 37.2105L15.3617 37.2298L15.3717 37.2353L15.3748 37.237C15.3748 37.237 15.3767 37.2379 16.2259 35.6628L15.3748 37.237C16.2447 37.7058 17.332 37.3818 17.8008 36.5119C18.2699 35.6422 17.9452 34.5571 17.0755 34.0878L17.0691 34.0845L17.0426 34.0699L16.9314 34.0088C16.8321 33.9537 16.684 33.8707 16.4938 33.7621C16.1135 33.5445 15.5664 33.2246 14.9081 32.8197C13.5885 32.0075 11.8386 30.8637 10.0981 29.5276C8.34661 28.1831 6.66263 26.6881 5.43245 25.1819C4.16767 23.6334 3.5805 22.3131 3.5805 21.2852C3.5805 20.259 4.16743 18.9398 5.43221 17.3919C6.66215 15.8866 8.34637 14.3922 10.0976 13.0485C11.8384 11.7128 13.5882 10.5694 14.9079 9.75764C15.5662 9.35282 16.1133 9.03294 16.4936 8.81551C16.6837 8.70686 16.8319 8.62393 16.9312 8.56891L17.0423 8.50764L17.0688 8.49325L17.0746 8.49022M17.8011 6.06574C18.2699 6.93557 17.9442 8.02119 17.0746 8.49022L17.8011 6.06574Z"
            fill="#50BD77"
          />
        </svg>
      </div>
    </>
  );
};

export default SwiperButtons;
