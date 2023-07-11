import React from "react";
import resume from '../assets/2020A7PS0093H_Nikhil Raj_Resume.pdf';
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div className="z-[10] bg-slate-300 border-dashed border-slate-700 border-b-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[1240px] mx-auto min-h-[40vh] flex flex-col justify-center items-center font-mono"
      >
        <p className="text-2xl">Check Out My RÉSUMÉ!</p>
        <div className="relative">
          <button className="relative flex flex-row justify-center items-center z-[30] mt-5 border bg-slate-300 border-black pt-3 pb-3 pl-3 pr-3 duration-500 hover:translate-x-[-5px] hover:bg-slate-200 hover:translate-y-[-5px] hover:font-bold hover:shadow-2xl">
            <a href={resume} target='_blank' rel="noreferrer">GRAB A COPY</a>
            {/* <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="40px" height="40px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40 h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80 C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72 c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64 c0,4.424,3.584,8,8,8h64V384z"></path> </g> </g> <g> <g> <path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48 z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8 S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96 V160z"></path> </g> </g> <g> <g> <rect x="248" y="72" width="40" height="16"></rect> </g> </g> <g> <g> <rect x="248" y="104" width="48" height="16"></rect> </g> </g> <g> <g> <rect x="312" y="104" width="40" height="16"></rect> </g> </g> <g> <g> <rect x="248" y="136" width="104" height="16"></rect> </g> </g> <g> <g> <rect x="144" y="200" width="64" height="16"></rect> </g> </g> <g> <g> <rect x="224" y="200" width="48" height="16"></rect> </g> </g> <g> <g> <rect x="288" y="200" width="80" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="232" width="64" height="16"></rect> </g> </g> <g> <g> <rect x="192" y="232" width="128" height="16"></rect> </g> </g> <g> <g> <rect x="336" y="232" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="264" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="264" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="272" y="264" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="296" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="296" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="272" y="296" width="96" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="328" width="72" height="16"></rect> </g> </g> <g> <g> <rect x="200" y="328" width="112" height="16"></rect> </g> </g> <g> <g> <rect x="112" y="360" width="32" height="16"></rect> </g> </g> <g> <g> <rect x="160" y="360" width="136" height="16"></rect> </g> </g> </g></svg> */}
            <svg className="ml-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"> 
            <path fill="black" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z"></path>
            </svg>
          </button>
          <p className="cursor-pointer absolute h-[71%] w-[100%] top-0 mt-5 border bg-green-600 border-black"></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
