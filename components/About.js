import { motion } from "framer-motion";
import React from "react";
import threeE from "../images/ill.png";
import animatedPic from "../images/urban-856.gif";
function About({ aboutRef, closeMobileMenu }) {
  return (
    <motion.div
      className="min-h-screen bg-slate-300 pt-10 md:pb-16 pb-52 about scroll-pt-60 overflow-y-visible"
      ref={aboutRef}
      onClick={closeMobileMenu}
    >
      <h1 className="flex items-center  justify-center md:text-5xl text-2xl text-slate-800">
        Who we are
      </h1>
      <div className="flex md:flex-row flex-col items-center p-10">
        <motion.div
          initial={{ opacity: 0, y: -40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full md:w-1/2"
        >
          <img src={threeE.src} alt="" className="h-full w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40, x: 40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2 flex flex-col justify-end h-full md:px-10 z-10"
        >
          <p className="text-primary-content px-10 bg-slate-100 mt-auto py-10 rounded-lg shadow-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            repellendus dolorum similique, mollitia atque veritatis quis sunt ut
            minima odio voluptates. Amet nostrum ducimus, ut odit maiores neque?
            Veritatis, aspernatur.
          </p>
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col-reverse items-center p-10 md:mb-52 mb-72 mb:pb-0 pb-44 z-50 relative">
        <motion.div
          initial={{ opacity: 0, y: 40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2 z-40 flex flex-col  h-full md:px-10 relative justify-end"
        >
          <p className="text-primary-content px-10 bg-slate-100 mt-auto py-10 rounded-lg shadow-lg  z-10 relative lg:absolute">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            repellendus dolorum similique, mollitia atque veritatis quis sunt ut
            minima odio voluptates. Amet nostrum ducimus, ut odit maiores neque?
            Veritatis, aspernatur.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, x: 40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full md:w-1/2"
        >
          <img
            src={animatedPic.src}
            alt=""
            className="h-full md:w-1/2 ml-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
