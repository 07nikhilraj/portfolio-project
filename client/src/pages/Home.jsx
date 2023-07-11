import React from "react";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="border-dashed border-slate-700 border-b-2">
      <div className="text-white max-w-[1240px] mx-auto min-h-[110vh] p-10 pt-[150px] md:p-[5rem] md:pt-[150px] flex flex-col justify-center">
        <div className="md:text-[2rem] flex flex-col pb-5">
          <div className="hmm md:flex hidden"></div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <p className="md:text-lg font-mono text-[#64ffda] p-2 vms:pb-5 md:pb-10">
              <span className="">👋🏼</span> Hi, my name is
            </p>
            <div className="text-[4rem] md:text-3xl md:pr-10 md:text-[80px] space text-white md:text-blue-100 font-sans font-bold pb-5">
              Nikhil Raj.
            </div>
            <div className="text-slate-400 vsm:hidden md:flex">
              I ❤️ to Code
            </div>
            <p className="max-w-[90%] md:max-w-[70%] md:text-lg font-mono text-slate-400 pt-7">
              Welcome to my website portfolio! I'm a passionate software
              engineer specializing in building exceptional digital experiences.
              Explore my work and discover how I create accessible,
              human-centered products using cutting-edge front-end and back-end
              technologies.{" "}
              <span className="vsm:text-white md:text-blue-100 block pt-5">
                Let's bring ideas to life!
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
