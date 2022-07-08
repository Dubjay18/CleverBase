import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import codePic from "../images/code.jpg";
function Hero({ refScroll, aboutRef, closeMobileMenu }) {
  const { scrollY } = useViewportScroll();
  const y2 = useTransform(scrollY, [0, 4400], [0, 4800]);
  return (
    <div
      className="hero min-h-screen bg-base-200 relative"
      onClick={closeMobileMenu}
    >
      <motion.div
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          x: [-200, -150, 0],
          y: [0, 50, 100],
          rotate: "360deg",
        }}
        transition={{ duration: 3.8, delay: 1.5, yoyo: Infinity }}
        className="mask mask-triangle-2 absolute top-10 h-20 w-20 bg-base-300 opacity-70"
      ></motion.div>
      <motion.svg
        style={{ y: y2, x: 200, scale: 1.7 }}
        className={"absolute w-20 animate-pulse z-[80] fill-primary"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
          opacity=".3"
          className="fill-primary"
        />
      </motion.svg>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={codePic.src}
          className="md:max-w-sm max-w-xs  rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="md:text-5xl text-3xl font-bold">Welcome!</h1>
          <p className="py-6">
            This is the CleverBase, the official website for the cleverDevs🚀🚀
          </p>
          <button
            className="btn btn-primary"
            onClick={() => refScroll(aboutRef)}
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
