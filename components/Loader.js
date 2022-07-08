import { motion } from "framer-motion";
import React from "react";
import Load from "../images/Infinity-1s-200px.gif";
function Loader() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-gradient-to-r from-base-200 to-base-100 font-poppins "
      data-theme="aqua"
    >
      <div className="bg-[#f1f2f3] px-10 py-6 flex flex-col items-center rounded-lg shadow-md">
        <img src={Load.src} alt="" className="rounded-lg" />
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[#1d3f72] font-bold"
        >
          Welcome to the CleverBase🚀🚀
        </motion.h3>
      </div>
    </div>
  );
}

export default Loader;
