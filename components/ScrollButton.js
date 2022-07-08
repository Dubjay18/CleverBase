import React, { useState, useEffect } from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className=" fixed w-full md:left-[80%] left-[60%] bottom-[40px] h-[40px] text-3rem] z-[1] cursor-pointer p-5">
      <div
        className="btn btn-circle btn-secondary"
        style={{ display: !visible && "none" }}
      >
        <ArrowCircleUpIcon
          className="w-10 h-10 px-2  hover:rotate-[360deg] transition-all duration-300 hover:scale-125"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
