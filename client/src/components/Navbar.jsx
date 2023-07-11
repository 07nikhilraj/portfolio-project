import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import resume from '../assets/2020A7PS0093H_Nikhil Raj_Resume.pdf';
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 border-dashed border-slate-700 border-b-2 font-mono z-[1000] absolute w-[100%] shadow-lg">
      <motion.div
        initial={{ y: "100vh", opacity: 0, rotate: 90 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
        className='hidden fixed md:flex justify-center items-center rotate-90 bottom-[25%] text-purple-400 right-0 after:content-[""] after:h-[1px] after:w-48 after:bg-purple-400 after:absolute after:right-[-110%] after:font-extrabold text-sm font-mono '
      >
        nikhilofindia@gmail.com
      </motion.div>
      <div className="max-w-[1240px] py-[12px] mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="text-5xl font-bold favFont text-white "
        >
          <a href="#home">NR</a>
        </motion.div>
        {toggle ? (
          <AiOutlineClose
            className="text-white md:hidden"
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineMenu
            className="text-white md:hidden"
            onClick={() => setToggle(true)}
          />
        )}
        <ul className="hidden md:flex text-slate-300 gap-8">
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.5 }}
            viewport={{ once: true }}
            className='duration-500 p-2 cursor-pointer hover:text-white hover:bg-blue-900 hover:translate-x-[-5px] rounded-xl before:content-["00."] before:text-[#64ffda] before:pr-1'
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.6 }}
            viewport={{ once: true }}
            className='duration-500 p-2 cursor-pointer hover:text-white hover:bg-blue-900 hover:translate-x-[-5px] rounded-xl before:content-["01."] before:text-[#64ffda] before:pr-1'
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.7 }}
            viewport={{ once: true }}
            className='duration-500 p-2 cursor-pointer hover:text-white hover:bg-blue-900 hover:translate-x-[-5px] rounded-xl before:content-["02."] before:text-[#64ffda] before:pr-1'
          >
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.8 }}
            viewport={{ once: true }}
            className='duration-500 p-2 cursor-pointer hover:text-white hover:bg-blue-900 hover:translate-x-[-5px] rounded-xl before:content-["03."] before:text-[#64ffda] before:pr-1'
          >
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.9 }}
            viewport={{ once: true }}
            className='duration-500 p-2 cursor-pointer hover:text-white hover:bg-blue-900 hover:translate-x-[-5px] rounded-xl before:content-["04."] before:text-[#64ffda] before:pr-1'
          >
            <a href="#footer">Contact</a>
          </motion.li>
        </ul>
        {/* Responsive  */}
        <ul
          className={`duration-1000 flex justify-center items-center flex-col md:hidden text-slate-300 fixed bg-black opacity-100 ${
            toggle
              ? "top-[-50%] right-[-50%] w-[200%] h-[200%] rounded-full opacity-100"
              : "top-[-50%] right-[50%] h-0 w-0 rounded-full opacity-0"
          } `}
        >
          {toggle ? (
            <AiOutlineClose
              className="text-white md:hidden relative bottom-5 border border-slate-100 w-10 h-10 rounded-full p-3"
              onClick={() => setToggle(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-white md:hidden"
              onClick={() => setToggle(true)}
            />
          )}
          <li className="p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space">
            <a onClick={() => setToggle(false)} href="#home">
              Home
            </a>
          </li>
          <li className="p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space">
            <a onClick={() => setToggle(false)} href="#about">
              About
            </a>
          </li>
          <li className="p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space">
            <a onClick={() => setToggle(false)} href="#projects">
              Projects
            </a>
          </li>
          <li className="p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space">
            <a onClick={() => setToggle(false)} href="#skills">
              Skills
            </a>
          </li>
          <li className='p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space after:content-[""] after:h-[1px] after:w-[100%] relative after:absolute after:bg-slate-400 after:bottom-0 after:left-0 after:text-slate-200'>
            <a onClick={() => setToggle(false)} href="#footer">
              Contact
            </a>
          </li>
          <li className="p-4 duration-300 cursor-pointer hover:text-white hover:translate-y-[-5px] space">
            <a onClick={() => setToggle(false)} href={resume} target='_blank' rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
