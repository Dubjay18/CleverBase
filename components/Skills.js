import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

function Skills({ skillsRef, closeMobileMenu }) {
  return (
    <div
      className="min-h-screen bg-base-100  "
      ref={skillsRef}
      onClick={closeMobileMenu}
    >
      <h1 className="flex items-center justify-center md:text-5xl text-2xl ">
        What we do
      </h1>
      <div className="flex flex-wrap items-center justify-evenly my-28">
        <Tilt>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card mx-2 min-h-[40vh] md:my-0 my-10 bg-base-200 shadow-md rounded-lg p-10"
          >
            <h2 className="text-xl my-2 underline decoration-accent decoration-dashed">
              Frontend web development
            </h2>
            <h2>Technologies</h2>
            <div className="exp">
              <ul>
                <li>React js</li>
                <li>Next js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>HTMl</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card mx-2 min-h-[40vh] md:my-0 my-10 bg-base-200 shadow-md rounded-lg p-10"
          >
            <h2 className="text-xl my-2 underline decoration-accent decoration-dashed">
              Backend development
            </h2>
            <h2>Technologies</h2>
            <div className="exp">
              <ul>
                <li>Node js</li>
                <li>Express js</li>
                <li>MongoDb</li>
                <li>Postgresql</li>
                <li>Firebase</li>
                <li>GraphQl</li>
              </ul>
            </div>
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card mx-2 min-h-[40vh] md:my-0 my-10 bg-base-200 shadow-md rounded-lg p-10"
          >
            <h2 className="text-xl my-2 underline decoration-accent decoration-dashed">
              Mobile development
            </h2>
            <h2 className="text-info animate-pulse">Coming soon....</h2>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
}

export default Skills;
